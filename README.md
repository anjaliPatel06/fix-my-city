# Fix My City website

*Automatically synced with your [v0.app](https://v0.app) deployments*

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/vaidehi-guptas-projects/v0-fix-my-city-website)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.app-black?style=for-the-badge)](https://v0.app/chat/v0Ih89iFWVR)

## Overview

This repository will stay in sync with your deployed chats on [v0.app](https://v0.app).
Any changes you make to your deployed app will be automatically pushed to this repository from [v0.app](https://v0.app).

## Deployment

Your project is live at:

**[https://vercel.com/vaidehi-guptas-projects/v0-fix-my-city-website](https://vercel.com/vaidehi-guptas-projects/v0-fix-my-city-website)**

## Build your app

Continue building your app on:

**[https://v0.app/chat/v0Ih89iFWVR](https://v0.app/chat/v0Ih89iFWVR)**

## How It Works

1. Create and modify your project using [v0.app](https://v0.app)
2. Deploy your chats from the v0 interface
3. Changes are automatically pushed to this repository
4. Vercel deploys the latest version from this repository

## WhatsApp Business API Setup

The WhatsApp report flow uses Meta WhatsApp Cloud API. The app creates a short-lived linked session, opens `wa.me` with an `FMC_START` token, verifies Meta webhooks, processes incoming text messages, and creates a normal Fix My City complaint when required fields are complete.

Required environment variables:

```bash
WHATSAPP_BUSINESS_NUMBER=your_whatsapp_business_number_with_country_code
WHATSAPP_PHONE_NUMBER_ID=your_meta_phone_number_id
WHATSAPP_ACCESS_TOKEN=your_meta_access_token
WHATSAPP_VERIFY_TOKEN=choose_a_secure_verify_token
WHATSAPP_GRAPH_VERSION=v23.0
META_APP_SECRET=your_meta_app_secret_for_webhook_signature_verification
WHATSAPP_MAX_IMAGE_BYTES=8388608
```

Meta dashboard steps:

1. Create or open a Meta app at `developers.facebook.com`.
2. Add the WhatsApp product and connect a WhatsApp Business Account.
3. Copy the Phone number ID into `WHATSAPP_PHONE_NUMBER_ID`.
4. Generate a permanent access token through Business settings, then store it in `WHATSAPP_ACCESS_TOKEN`.
5. Set `WHATSAPP_BUSINESS_NUMBER` to the WhatsApp number users will message, including country code and no `+`.
6. In WhatsApp > Configuration, set the callback URL to `https://your-domain.com/api/whatsapp/webhook`.
7. Set the verify token to the exact value in `WHATSAPP_VERIFY_TOKEN`.
8. Subscribe the webhook to `messages`.
9. Copy the Meta app secret into `META_APP_SECRET` so production webhooks are signature-checked.

Local webhook testing with ngrok:

```bash
npm run dev
ngrok http 3000
```

Use the ngrok HTTPS URL plus `/api/whatsapp/webhook` as the Meta callback URL. For first local wiring, you can omit `META_APP_SECRET`; once webhooks arrive, add it back to verify `x-hub-signature-256`.

WhatsApp image reporting:

1. Meta sends image messages in the webhook with `messages[].image.id`.
2. The server calls `GET /{media-id}` on the Graph API to receive Meta's temporary media download URL.
3. The server downloads that URL with the same `WHATSAPP_ACCESS_TOKEN`.
4. The image is validated as JPG, PNG, or WebP and checked against `WHATSAPP_MAX_IMAGE_BYTES`.
5. In local/Node deployments, files are written to `public/uploads/whatsapp` and served as `/uploads/whatsapp/...`.
6. The stored image URL is saved as both `imageUrl` and `photoUrl` so community cards, tracking, and report details reuse the existing UI rendering path.

For production on Vercel or other serverless platforms, replace the local file writer in `lib/server/whatsapp/media.ts` with durable storage such as Vercel Blob, S3, Cloudflare R2, or another object store. Serverless filesystems are ephemeral, so local `public/uploads/whatsapp` is best for development, demos, and traditional Node hosting.

Production deployment:

1. Add all WhatsApp variables to your hosting provider, for example Vercel Project Settings > Environment Variables.
2. Configure durable image storage if deploying to serverless infrastructure.
3. Deploy the app so `/api/whatsapp/webhook` is publicly reachable over HTTPS.
4. Update Meta's callback URL to the production webhook URL.
5. Click Verify and Save in Meta, then send a WhatsApp message through the app's Report > WhatsApp option.
