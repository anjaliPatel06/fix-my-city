
"use client";

import { useState } from "react";

export default function Chatbot() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Chat window */}
      {open && (
        <div
          style={{
            position: "fixed",
            bottom: "90px",
            right: "24px",
            width: "360px",
            height: "500px",
            background: "#ffffff",
            borderRadius: "16px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
            overflow: "hidden",
            zIndex: 50,
          }}
        >
          {/* Top bar */}
          <div
            style={{
              height: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0 12px",
              fontSize: "14px",
              fontWeight: 600,
              borderBottom: "1px solid #eee",
            }}
          >
            <span>Fix My City Assistant</span>
            <button
              onClick={() => setOpen(false)}
              style={{
                border: "none",
                background: "transparent",
                cursor: "pointer",
                fontSize: "18px",
                lineHeight: 1,
              }}
            >
              ×
            </button>
          </div>

          {/* Botsonic iframe */}
          <iframe
            src="https://bot.writesonic.com/share/bot/f11243d0-9f1c-46c4-bca8-2b48cfe2f0c9"
            title="Botsonic Chatbot"
            style={{
              width: "100%",
              height: "calc(100% - 40px)",
              border: "none",
            }}
          />
        </div>
      )}

      {/* Floating chat button */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        style={{
          position: "fixed",
          bottom: "24px",
          right: "24px",
          width: "56px",
          height: "56px",
          borderRadius: "999px",
          border: "none",
          background: "#2563eb",
          color: "#ffffff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
          zIndex: 50,
          fontSize: "24px",
        }}
      >
        💬
      </button>
    </>
  );
}
