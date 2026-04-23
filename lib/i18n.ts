export const translations = {
  en: {
    // Navigation
    home: "Home",
    report: "Report",
    track: "Track",
    community: "Community",
    help: "Help",

    // Header/Footer
    fixMyCity: "Fix My City",
    aboutUs: "About",
    contact: "Contact",
    terms: "Terms",
    privacy: "Privacy",
    poweredBy: "Powered by Fix My City · AI Enabled",

    // Homepage
    reportProblems: "Report Problems. Improve Your City.",
    subtext: "AI-powered reporting for potholes, garbage, streetlights, water leakage & more.",
    reportIssue: "Report Issue",
    trackComplaint: "Track Complaint",

    // Features
    howitworks: "How it Works",
    features: "Features",
    multiChannel: "Multi-Channel Support",

    // CTA
    startReporting: "Start Reporting",
    startWithVoice: "Start with Voice",
    startWithText: "Start with Text",
    continueWhatsApp: "Continue on WhatsApp",
    takeLessThanMinute: "Takes less than a minute · AI-assisted",
  },
  hi: {
    // Navigation
    home: "होम",
    report: "रिपोर्ट करें",
    track: "ट्रैक करें",
    community: "समुदाय",
    help: "मदद",

    // Header/Footer
    fixMyCity: "अपने शहर को ठीक करें",
    aboutUs: "हमारे बारे में",
    contact: "संपर्क करें",
    terms: "शर्तें",
    privacy: "गोपनीयता",
    poweredBy: "फिक्स माई सिटी द्वारा संचालित · AI सक्षम",

    // Homepage
    reportProblems: "समस्याओं की रिपोर्ट करें। अपने शहर को बेहतर बनाएं।",
    subtext: "पोटहोल, कूड़ा, स्ट्रीटलाइट, पानी रिसाव और बहुत कुछ के लिए AI-संचालित रिपोर्टिंग।",
    reportIssue: "समस्या की रिपोर्ट करें",
    trackComplaint: "शिकायत ट्रैक करें",

    // Features
    howitworks: "यह कैसे काम करता है",
    features: "विशेषताएं",
    multiChannel: "मल्टी-चैनल समर्थन",

    // CTA
    startReporting: "रिपोर्टिंग शुरू करें",
    startWithVoice: "वॉयस से शुरू करें",
    startWithText: "टेक्स्ट से शुरू करें",
    continueWhatsApp: "WhatsApp पर जारी रखें",
    takeLessThanMinute: "एक मिनट से कम समय लगता है · AI-सहायक",
  },
} as const

export type Language = "en" | "hi"
export type TranslationKey = keyof typeof translations.en
