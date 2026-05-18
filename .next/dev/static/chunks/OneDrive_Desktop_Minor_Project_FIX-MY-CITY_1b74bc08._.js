(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/OneDrive/Desktop/Minor_Project/FIX-MY-CITY/components/report/ai-calling-page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AICallingPage",
    ()=>AICallingPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Minor_Project$2f$FIX$2d$MY$2d$CITY$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Minor_Project/FIX-MY-CITY/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Minor_Project$2f$FIX$2d$MY$2d$CITY$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Minor_Project/FIX-MY-CITY/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Minor_Project$2f$FIX$2d$MY$2d$CITY$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Minor_Project/FIX-MY-CITY/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Minor_Project$2f$FIX$2d$MY$2d$CITY$2f$lib$2f$report$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Minor_Project/FIX-MY-CITY/lib/report-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Minor_Project$2f$FIX$2d$MY$2d$CITY$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PhoneOff$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Minor_Project/FIX-MY-CITY/node_modules/lucide-react/dist/esm/icons/phone-off.js [app-client] (ecmascript) <export default as PhoneOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Minor_Project$2f$FIX$2d$MY$2d$CITY$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Minor_Project/FIX-MY-CITY/node_modules/lucide-react/dist/esm/icons/mic.js [app-client] (ecmascript) <export default as Mic>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Minor_Project$2f$FIX$2d$MY$2d$CITY$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MicOff$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Minor_Project/FIX-MY-CITY/node_modules/lucide-react/dist/esm/icons/mic-off.js [app-client] (ecmascript) <export default as MicOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Minor_Project$2f$FIX$2d$MY$2d$CITY$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Minor_Project/FIX-MY-CITY/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function AICallingPage() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Minor_Project$2f$FIX$2d$MY$2d$CITY$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { updateReportData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Minor_Project$2f$FIX$2d$MY$2d$CITY$2f$lib$2f$report$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReport"])();
    const [callState, setCallState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Minor_Project$2f$FIX$2d$MY$2d$CITY$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("connecting");
    const callStateRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Minor_Project$2f$FIX$2d$MY$2d$CITY$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])("connecting");
    const [callDuration, setCallDuration] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Minor_Project$2f$FIX$2d$MY$2d$CITY$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isMuted, setIsMuted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Minor_Project$2f$FIX$2d$MY$2d$CITY$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const isMutedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Minor_Project$2f$FIX$2d$MY$2d$CITY$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const [showConversation, setShowConversation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Minor_Project$2f$FIX$2d$MY$2d$CITY$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [extractedData, setExtractedData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Minor_Project$2f$FIX$2d$MY$2d$CITY$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        category: "Extracting...",
        address: "Extracting...",
        city: "Extracting...",
        pincode: "...",
        description: "Listening...",
        urgency: "Medium"
    });
    const extractedDataRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Minor_Project$2f$FIX$2d$MY$2d$CITY$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        category: "Extracting...",
        address: "Extracting...",
        city: "Extracting...",
        pincode: "...",
        description: "Listening...",
        urgency: "Medium"
    });
    const [history, setHistory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Minor_Project$2f$FIX$2d$MY$2d$CITY$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const historyRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Minor_Project$2f$FIX$2d$MY$2d$CITY$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const [conversation, setConversation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Minor_Project$2f$FIX$2d$MY$2d$CITY$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isSpeaking, setIsSpeaking] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Minor_Project$2f$FIX$2d$MY$2d$CITY$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const isSpeakingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Minor_Project$2f$FIX$2d$MY$2d$CITY$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Minor_Project$2f$FIX$2d$MY$2d$CITY$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AICallingPage.useEffect": ()=>{
            historyRef.current = history;
            callStateRef.current = callState;
            isMutedRef.current = isMuted;
            isSpeakingRef.current = isSpeaking;
        }
    }["AICallingPage.useEffect"], [
        history,
        callState,
        isMuted,
        isSpeaking
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Minor_Project$2f$FIX$2d$MY$2d$CITY$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AICallingPage.useEffect": ()=>{
            extractedDataRef.current = extractedData;
        }
    }["AICallingPage.useEffect"], [
        extractedData
    ]);
    const mergeExtractedData = (current, incoming)=>({
            category: incoming?.category && incoming.category !== "Extracting..." ? incoming.category : current.category,
            address: incoming?.address && incoming.address !== "Extracting..." ? incoming.address : current.address,
            city: incoming?.city && incoming.city !== "Extracting..." ? incoming.city : current.city,
            pincode: incoming?.pincode && incoming.pincode !== "Extracting..." ? incoming.pincode : current.pincode,
            description: incoming?.description && incoming.description !== "Extracting..." ? incoming.description : current.description,
            urgency: incoming?.urgency && incoming.urgency !== "Extracting..." ? incoming.urgency : current.urgency
        });
    // Start call manually to bypass autoplay restrictions that block audio
    const handleStartCall = ()=>{
        setCallState("on-call");
        // 1. Synchronously unlock browser speech engine on user click
        if (("TURBOPACK compile-time value", "object") !== "undefined" && "speechSynthesis" in window) {
            window.speechSynthesis.cancel();
            window.speechSynthesis.speak(new SpeechSynthesisUtterance(""));
        }
        // Trigger immediately so browser knows it's a direct user action allowing mic
        handleAgentTurn("Hello! I am the Fix My City AI assistant. What issue would you like to report today?");
    };
    // Timer loop
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Minor_Project$2f$FIX$2d$MY$2d$CITY$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AICallingPage.useEffect": ()=>{
            if (callState === "on-call") {
                const interval = setInterval({
                    "AICallingPage.useEffect.interval": ()=>{
                        setCallDuration({
                            "AICallingPage.useEffect.interval": (prev)=>prev + 1
                        }["AICallingPage.useEffect.interval"]);
                    }
                }["AICallingPage.useEffect.interval"], 1000);
                return ({
                    "AICallingPage.useEffect": ()=>clearInterval(interval)
                })["AICallingPage.useEffect"];
            }
        }
    }["AICallingPage.useEffect"], [
        callState
    ]);
    // Send message to local backend AI model
    const handleAgentTurn = async (initialGreeting)=>{
        setIsSpeaking(true);
        isSpeakingRef.current = true;
        if (initialGreeting) {
            setConversation((prev)=>[
                    ...prev,
                    {
                        role: "agent",
                        content: initialGreeting
                    }
                ]);
            setHistory((prev)=>[
                    ...prev,
                    {
                        role: "assistant",
                        content: initialGreeting
                    }
                ]);
            await speakOutLoud(initialGreeting);
            setIsSpeaking(false);
            isSpeakingRef.current = false;
            startListening();
            return;
        }
    };
    // Synthesize agent voice
    const speakOutLoud = (text)=>{
        return new Promise((resolve)=>{
            if (("TURBOPACK compile-time value", "object") !== "undefined" && "speechSynthesis" in window) {
                window.speechSynthesis.cancel(); // clear any stuck voice from previous actions
                const utterance = new SpeechSynthesisUtterance(text);
                window.currentUtterance = utterance;
                // Ensure browser speaks by picking a common fallback language if Hindi is not installed
                utterance.lang = "en-IN";
                utterance.rate = 1.0;
                let isResolved = false;
                // 10 second fallback incase the speech engine hangs
                const fallbackTimer = setTimeout(()=>{
                    if (!isResolved) {
                        isResolved = true;
                        console.warn("Speech API hung up. Using fallback timeout.");
                        resolve();
                    }
                }, 10000);
                utterance.onend = ()=>{
                    if (!isResolved) {
                        isResolved = true;
                        clearTimeout(fallbackTimer);
                        resolve();
                    }
                };
                utterance.onerror = (e)=>{
                    console.warn("Speech warning/error:", e);
                    if (!isResolved) {
                        isResolved = true;
                        clearTimeout(fallbackTimer);
                        resolve();
                    }
                };
                console.log("AI is speaking:", text);
                window.speechSynthesis.speak(utterance);
            } else {
                resolve();
            }
        });
    };
    const isMicRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Minor_Project$2f$FIX$2d$MY$2d$CITY$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    // Use Native Web Speech API without any external packages
    const startListening = ()=>{
        if (isMicRef.current) return; // Prevent overlapping mic instances
        if (("TURBOPACK compile-time value", "object") !== "undefined" && ("SpeechRecognition" in window || "webkitSpeechRecognition" in window)) {
            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            const recognition = new SpeechRecognition();
            // Fallback native language
            recognition.lang = "en-IN";
            recognition.interimResults = false;
            recognition.maxAlternatives = 1;
            recognition.continuous = false;
            let hasRecognized = false;
            recognition.onresult = async (event)=>{
                hasRecognized = true;
                const transcript = event.results[0][0].transcript.trim();
                console.log("User said:", transcript);
                if (!transcript) {
                    isMicRef.current = false;
                    startListening();
                    return;
                }
                setConversation((prev)=>[
                        ...prev,
                        {
                            role: "user",
                            content: transcript
                        }
                    ]);
                // Pass to Backend Model ONLY
                try {
                    // Pause mic while checking backend
                    recognition.stop();
                    setIsSpeaking(true);
                    isSpeakingRef.current = true; // Treat backend processing + speaking as 'speaking' phase to block double-listening
                    const res = await fetch("/api/voice-agent", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            history: historyRef.current,
                            userMessage: transcript,
                            currentExtracted: extractedDataRef.current
                        })
                    });
                    const data = await res.json();
                    if (data.success && data.data) {
                        const { agent_reply, extracted, complete } = data.data;
                        const nextExtracted = mergeExtractedData(extractedDataRef.current, extracted);
                        extractedDataRef.current = nextExtracted;
                        setExtractedData(nextExtracted);
                        setConversation((prev)=>[
                                ...prev,
                                {
                                    role: "agent",
                                    content: agent_reply
                                }
                            ]);
                        setHistory((prev)=>[
                                ...prev,
                                {
                                    role: "user",
                                    content: transcript
                                },
                                {
                                    role: "assistant",
                                    content: agent_reply
                                }
                            ]);
                        await speakOutLoud(agent_reply);
                        setIsSpeaking(false);
                        isSpeakingRef.current = false; // Ready to listen again
                        if (complete) {
                            setTimeout(()=>setCallState("completed"), 2000);
                        } else {
                            // keep listening after speaking
                            startListening();
                        }
                    } else {
                        console.warn("API returned error/false:", data);
                        setConversation((prev)=>[
                                ...prev,
                                {
                                    role: "agent",
                                    content: "Mujhe thodi technical dikkat aa rahi hai. Kripya ek baar phir se batayein."
                                }
                            ]);
                        await speakOutLoud("Mujhe thodi technical dikkat aa rahi hai. Kripya ek baar phir se batayein.");
                        setIsSpeaking(false);
                        isSpeakingRef.current = false;
                        startListening();
                    }
                } catch (error) {
                    console.warn("API fetch exception:", error);
                    setConversation((prev)=>[
                            ...prev,
                            {
                                role: "agent",
                                content: "Connection issue aa gaya. Kripya apni baat ek baar phir boliye."
                            }
                        ]);
                    await speakOutLoud("Connection issue aa gaya. Kripya apni baat ek baar phir boliye.");
                    setIsSpeaking(false);
                    isSpeakingRef.current = false;
                    startListening();
                }
            };
            recognition.onerror = (e)=>{
                isMicRef.current = false;
                console.warn("Mic status/warning:", e.error);
                if (e.error === 'no-speech' || e.error === 'aborted') {
                    // Handled by onend gracefully
                    return;
                }
                // Auto retry listening on error if not muted
                setTimeout(()=>{
                    if (!isSpeakingRef.current && callStateRef.current === "on-call") startListening();
                }, 2000);
            };
            recognition.onend = ()=>{
                isMicRef.current = false;
                // If mic stopped but we didn't catch words and we aren't currently waiting on AI
                if (!hasRecognized && !isMutedRef.current && !isSpeakingRef.current && callStateRef.current === "on-call") {
                    console.log("Mic went quiet, restarting...");
                    startListening();
                }
            };
            if (!isMutedRef.current && !isSpeakingRef.current && callStateRef.current === "on-call") {
                console.log("Mic started listening...");
                isMicRef.current = true;
                try {
                    recognition.start();
                } catch (e) {
                    isMicRef.current = false;
                    console.warn("Could not start mic:", e);
                }
            }
        }
    };
    const handleEndCall = ()=>{
        setCallState("completed");
        window.speechSynthesis.cancel(); // Stop talking when ended
    };
    const handleProceed = ()=>{
        updateReportData(extractedDataRef.current);
        router.push("/report/photo");
    };
    const formatDuration = (seconds)=>{
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, "0")}`;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Minor_Project$2f$FIX$2d$MY$2d$CITY$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-[calc(100vh-8rem)] bg-gradient-to-br from-background to-secondary flex items-center justify-center py-12",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Minor_Project$2f$FIX$2d$MY$2d$CITY$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-2xl mx-auto px-4 w-full",
            children: [
                callState === "connecting" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Minor_Project$2f$FIX$2d$MY$2d$CITY$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Minor_Project$2f$FIX$2d$MY$2d$CITY$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-3xl font-bold mb-2",
                            children: "Connecting to Fix My City AI Agent..."
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/Minor_Project/FIX-MY-CITY/components/report/ai-calling-page.tsx",
                            lineNumber: 321,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Minor_Project$2f$FIX$2d$MY$2d$CITY$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-muted-foreground mb-12",
                            children: "Please wait while we connect you to the AI officer"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/Minor_Project/FIX-MY-CITY/components/report/ai-calling-page.tsx",
                            lineNumber: 322,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Minor_Project$2f$FIX$2d$MY$2d$CITY$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-center mb-8",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Minor_Project$2f$FIX$2d$MY$2d$CITY$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative w-32 h-32",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Minor_Project$2f$FIX$2d$MY$2d$CITY$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 rounded-full bg-primary/20 animate-pulse"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/Minor_Project/FIX-MY-CITY/components/report/ai-calling-page.tsx",
                                        lineNumber: 327,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Minor_Project$2f$FIX$2d$MY$2d$CITY$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-2 rounded-full border-4 border-primary/40 animate-spin",
                                        style: {
                                            animationDuration: "2s"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/Minor_Project/FIX-MY-CITY/components/report/ai-calling-page.tsx",
                                        lineNumber: 328,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Minor_Project$2f$FIX$2d$MY$2d$CITY$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Minor_Project$2f$FIX$2d$MY$2d$CITY$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-20 h-20 rounded-full bg-primary flex items-center justify-center text-white text-4xl",
                                            children: "🤖"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/Minor_Project/FIX-MY-CITY/components/report/ai-calling-page.tsx",
                                            lineNumber: 333,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/Minor_Project/FIX-MY-CITY/components/report/ai-calling-page.tsx",
                                        lineNumber: 332,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Desktop/Minor_Project/FIX-MY-CITY/components/report/ai-calling-page.tsx",
                                lineNumber: 326,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/Minor_Project/FIX-MY-CITY/components/report/ai-calling-page.tsx",
                            lineNumber: 325,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Minor_Project$2f$FIX$2d$MY$2d$CITY$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-muted-foreground mb-4",
                            children: "Connecting..."
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/Minor_Project/FIX-MY-CITY/components/report/ai-calling-page.tsx",
                            lineNumber: 340,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Minor_Project$2f$FIX$2d$MY$2d$CITY$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleStartCall,
                            className: "px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-all flex items-center justify-center gap-2 mx-auto",
                            children: [
                                "Start Conversation Now ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Minor_Project$2f$FIX$2d$MY$2d$CITY$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Minor_Project$2f$FIX$2d$MY$2d$CITY$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__["Mic"], {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/Minor_Project/FIX-MY-CITY/components/report/ai-calling-page.tsx",
                                    lineNumber: 345,
                                    columnNumber: 38
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Desktop/Minor_Project/FIX-MY-CITY/components/report/ai-calling-page.tsx",
                            lineNumber: 341,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Desktop/Minor_Project/FIX-MY-CITY/components/report/ai-calling-page.tsx",
                    lineNumber: 320,
                    columnNumber: 11
                }, this),
                callState === "on-call" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Minor_Project$2f$FIX$2d$MY$2d$CITY$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Minor_Project$2f$FIX$2d$MY$2d$CITY$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-3xl font-bold mb-2 text-center",
                            children: "Talking to Fix My City AI Agent"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/Minor_Project/FIX-MY-CITY/components/report/ai-calling-page.tsx",
                            lineNumber: 353,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Minor_Project$2f$FIX$2d$MY$2d$CITY$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-muted-foreground text-center mb-8",
                            children: "Answer the questions naturally"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/Minor_Project/FIX-MY-CITY/components/report/ai-calling-page.tsx",
                            lineNumber: 354,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Minor_Project$2f$FIX$2d$MY$2d$CITY$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-center mb-12",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Minor_Project$2f$FIX$2d$MY$2d$CITY$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative w-40 h-40",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Minor_Project$2f$FIX$2d$MY$2d$CITY$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 rounded-full border-4 border-primary/30 animate-pulse",
                                        style: {
                                            animationDuration: "1.5s"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/Minor_Project/FIX-MY-CITY/components/report/ai-calling-page.tsx",
                                        lineNumber: 360,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Minor_Project$2f$FIX$2d$MY$2d$CITY$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-4 rounded-full border-4 border-primary/20 animate-pulse",
                                        style: {
                                            animationDuration: "2s",
                                            animationDelay: "0.2s"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/Minor_Project/FIX-MY-CITY/components/report/ai-calling-page.tsx",
                                        lineNumber: 364,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Minor_Project$2f$FIX$2d$MY$2d$CITY$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Minor_Project$2f$FIX$2d$MY$2d$CITY$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-24 h-24 rounded-full bg-primary flex items-center justify-center text-white text-6xl shadow-lg",
                                            children: "🤖"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/Minor_Project/FIX-MY-CITY/components/report/ai-calling-page.tsx",
                                            lineNumber: 371,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/Minor_Project/FIX-MY-CITY/components/report/ai-calling-page.tsx",
                                        lineNumber: 370,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Desktop/Minor_Project/FIX-MY-CITY/components/report/ai-calling-page.tsx",
                                lineNumber: 358,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/Minor_Project/FIX-MY-CITY/components/report/ai-calling-page.tsx",
                            lineNumber: 357,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Minor_Project$2f$FIX$2d$MY$2d$CITY$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center mb-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Minor_Project$2f$FIX$2d$MY$2d$CITY$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-lg font-semibold text-green-600 dark:text-green-400 mb-2",
                                    children: "On Call"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/Minor_Project/FIX-MY-CITY/components/report/ai-calling-page.tsx",
                                    lineNumber: 380,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Minor_Project$2f$FIX$2d$MY$2d$CITY$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-3xl font-mono font-bold",
                                    children: formatDuration(callDuration)
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/Minor_Project/FIX-MY-CITY/components/report/ai-calling-page.tsx",
                                    lineNumber: 381,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Desktop/Minor_Project/FIX-MY-CITY/components/report/ai-calling-page.tsx",
                            lineNumber: 379,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Minor_Project$2f$FIX$2d$MY$2d$CITY$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-card rounded-xl p-6 border border-border mb-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Minor_Project$2f$FIX$2d$MY$2d$CITY$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-lg font-semibold mb-4",
                                    children: "Extracting Information in Real-time"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/Minor_Project/FIX-MY-CITY/components/report/ai-calling-page.tsx",
                                    lineNumber: 386,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Minor_Project$2f$FIX$2d$MY$2d$CITY$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Minor_Project$2f$FIX$2d$MY$2d$CITY$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between items-center p-3 bg-background rounded-lg",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Minor_Project$2f$FIX$2d$MY$2d$CITY$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm text-muted-foreground",
                                                    children: "Category"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Desktop/Minor_Project/FIX-MY-CITY/components/report/ai-calling-page.tsx",
                                                    lineNumber: 389,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Minor_Project$2f$FIX$2d$MY$2d$CITY$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-medium text-green-600 dark:text-green-400",
                                                    children: extractedData.category
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Desktop/Minor_Project/FIX-MY-CITY/components/report/ai-calling-page.tsx",
                                                    lineNumber: 390,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/OneDrive/Desktop/Minor_Project/FIX-MY-CITY/components/report/ai-calling-page.tsx",
                                            lineNumber: 388,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Minor_Project$2f$FIX$2d$MY$2d$CITY$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between items-center p-3 bg-background rounded-lg",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Minor_Project$2f$FIX$2d$MY$2d$CITY$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm text-muted-foreground",
                                                    children: "Address"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Desktop/Minor_Project/FIX-MY-CITY/components/report/ai-calling-page.tsx",
                                                    lineNumber: 393,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Minor_Project$2f$FIX$2d$MY$2d$CITY$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-medium text-green-600 dark:text-green-400 text-right text-sm",
                                                    children: extractedData.address
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Desktop/Minor_Project/FIX-MY-CITY/components/report/ai-calling-page.tsx",
                                                    lineNumber: 394,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/OneDrive/Desktop/Minor_Project/FIX-MY-CITY/components/report/ai-calling-page.tsx",
                                            lineNumber: 392,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Minor_Project$2f$FIX$2d$MY$2d$CITY$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between items-center p-3 bg-background rounded-lg",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Minor_Project$2f$FIX$2d$MY$2d$CITY$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm text-muted-foreground",
                                                    children: "Description"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Desktop/Minor_Project/FIX-MY-CITY/components/report/ai-calling-page.tsx",
                                                    lineNumber: 399,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Minor_Project$2f$FIX$2d$MY$2d$CITY$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-medium text-green-600 dark:text-green-400 text-right text-sm max-w-xs line-clamp-2",
                                                    children: extractedData.description
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Desktop/Minor_Project/FIX-MY-CITY/components/report/ai-calling-page.tsx",
                                                    lineNumber: 400,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/OneDrive/Desktop/Minor_Project/FIX-MY-CITY/components/report/ai-calling-page.tsx",
                                            lineNumber: 398,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Minor_Project$2f$FIX$2d$MY$2d$CITY$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between items-center p-3 bg-background rounded-lg",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Minor_Project$2f$FIX$2d$MY$2d$CITY$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm text-muted-foreground",
                                                    children: "Urgency"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Desktop/Minor_Project/FIX-MY-CITY/components/report/ai-calling-page.tsx",
                                                    lineNumber: 405,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Minor_Project$2f$FIX$2d$MY$2d$CITY$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `font-medium text-sm px-3 py-1 rounded-full ${extractedData.urgency === "High" ? "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-200" : extractedData.urgency === "Medium" ? "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-200" : "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-200"}`,
                                                    children: extractedData.urgency
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Desktop/Minor_Project/FIX-MY-CITY/components/report/ai-calling-page.tsx",
                                                    lineNumber: 406,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/OneDrive/Desktop/Minor_Project/FIX-MY-CITY/components/report/ai-calling-page.tsx",
                                            lineNumber: 404,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Desktop/Minor_Project/FIX-MY-CITY/components/report/ai-calling-page.tsx",
                                    lineNumber: 387,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Minor_Project$2f$FIX$2d$MY$2d$CITY$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowConversation(!showConversation),
                                    className: "w-full mt-4 px-3 py-2 text-sm text-primary hover:bg-primary/5 rounded-lg transition-colors",
                                    children: showConversation ? "Hide Conversation" : "Show Conversation"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/Minor_Project/FIX-MY-CITY/components/report/ai-calling-page.tsx",
                                    lineNumber: 421,
                                    columnNumber: 15
                                }, this),
                                showConversation && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Minor_Project$2f$FIX$2d$MY$2d$CITY$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4 p-3 bg-background rounded-lg max-h-40 overflow-y-auto text-xs space-y-2",
                                    children: [
                                        conversation.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Minor_Project$2f$FIX$2d$MY$2d$CITY$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-muted-foreground text-center",
                                            children: "Starting conversation..."
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/Minor_Project/FIX-MY-CITY/components/report/ai-calling-page.tsx",
                                            lineNumber: 430,
                                            columnNumber: 49
                                        }, this),
                                        conversation.map((msg, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Minor_Project$2f$FIX$2d$MY$2d$CITY$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Minor_Project$2f$FIX$2d$MY$2d$CITY$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: msg.role === "agent" ? "text-primary font-semibold" : "text-blue-600 dark:text-blue-400 font-semibold",
                                                        children: [
                                                            msg.role === "agent" ? "AI" : "You",
                                                            ":"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/OneDrive/Desktop/Minor_Project/FIX-MY-CITY/components/report/ai-calling-page.tsx",
                                                        lineNumber: 433,
                                                        columnNumber: 23
                                                    }, this),
                                                    " ",
                                                    msg.content
                                                ]
                                            }, i, true, {
                                                fileName: "[project]/OneDrive/Desktop/Minor_Project/FIX-MY-CITY/components/report/ai-calling-page.tsx",
                                                lineNumber: 432,
                                                columnNumber: 21
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Desktop/Minor_Project/FIX-MY-CITY/components/report/ai-calling-page.tsx",
                                    lineNumber: 429,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Desktop/Minor_Project/FIX-MY-CITY/components/report/ai-calling-page.tsx",
                            lineNumber: 385,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Minor_Project$2f$FIX$2d$MY$2d$CITY$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-center gap-4 mb-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Minor_Project$2f$FIX$2d$MY$2d$CITY$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setIsMuted(!isMuted),
                                    className: "w-14 h-14 rounded-full bg-secondary text-secondary-foreground hover:opacity-90 transition-all flex items-center justify-center",
                                    children: isMuted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Minor_Project$2f$FIX$2d$MY$2d$CITY$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Minor_Project$2f$FIX$2d$MY$2d$CITY$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MicOff$3e$__["MicOff"], {
                                        className: "w-6 h-6"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/Minor_Project/FIX-MY-CITY/components/report/ai-calling-page.tsx",
                                        lineNumber: 449,
                                        columnNumber: 28
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Minor_Project$2f$FIX$2d$MY$2d$CITY$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Minor_Project$2f$FIX$2d$MY$2d$CITY$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__["Mic"], {
                                        className: "w-6 h-6"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/Minor_Project/FIX-MY-CITY/components/report/ai-calling-page.tsx",
                                        lineNumber: 449,
                                        columnNumber: 61
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/Minor_Project/FIX-MY-CITY/components/report/ai-calling-page.tsx",
                                    lineNumber: 445,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Minor_Project$2f$FIX$2d$MY$2d$CITY$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleEndCall,
                                    className: "flex-1 px-6 py-3 rounded-lg bg-destructive text-destructive-foreground font-semibold hover:opacity-90 transition-all flex items-center justify-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Minor_Project$2f$FIX$2d$MY$2d$CITY$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Minor_Project$2f$FIX$2d$MY$2d$CITY$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PhoneOff$3e$__["PhoneOff"], {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/Minor_Project/FIX-MY-CITY/components/report/ai-calling-page.tsx",
                                            lineNumber: 456,
                                            columnNumber: 17
                                        }, this),
                                        "End Call"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Desktop/Minor_Project/FIX-MY-CITY/components/report/ai-calling-page.tsx",
                                    lineNumber: 452,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Desktop/Minor_Project/FIX-MY-CITY/components/report/ai-calling-page.tsx",
                            lineNumber: 444,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Desktop/Minor_Project/FIX-MY-CITY/components/report/ai-calling-page.tsx",
                    lineNumber: 351,
                    columnNumber: 11
                }, this),
                callState === "completed" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Minor_Project$2f$FIX$2d$MY$2d$CITY$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Minor_Project$2f$FIX$2d$MY$2d$CITY$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-3xl font-bold mb-2",
                            children: "Call Completed"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/Minor_Project/FIX-MY-CITY/components/report/ai-calling-page.tsx",
                            lineNumber: 465,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Minor_Project$2f$FIX$2d$MY$2d$CITY$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-muted-foreground mb-8",
                            children: "Your information has been collected and verified"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/Minor_Project/FIX-MY-CITY/components/report/ai-calling-page.tsx",
                            lineNumber: 466,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Minor_Project$2f$FIX$2d$MY$2d$CITY$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-center mb-8",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Minor_Project$2f$FIX$2d$MY$2d$CITY$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-32 h-32 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-6xl",
                                children: "✓"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/Minor_Project/FIX-MY-CITY/components/report/ai-calling-page.tsx",
                                lineNumber: 470,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/Minor_Project/FIX-MY-CITY/components/report/ai-calling-page.tsx",
                            lineNumber: 469,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Minor_Project$2f$FIX$2d$MY$2d$CITY$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-card rounded-xl p-6 border border-border mb-8 text-left",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Minor_Project$2f$FIX$2d$MY$2d$CITY$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-lg font-semibold mb-4",
                                    children: "Extracted Information"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/Minor_Project/FIX-MY-CITY/components/report/ai-calling-page.tsx",
                                    lineNumber: 477,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Minor_Project$2f$FIX$2d$MY$2d$CITY$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3",
                                    children: Object.entries(extractedData).map(([key, value])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Minor_Project$2f$FIX$2d$MY$2d$CITY$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between items-center p-3 bg-background rounded-lg",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Minor_Project$2f$FIX$2d$MY$2d$CITY$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm text-muted-foreground capitalize",
                                                    children: key
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Desktop/Minor_Project/FIX-MY-CITY/components/report/ai-calling-page.tsx",
                                                    lineNumber: 481,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Minor_Project$2f$FIX$2d$MY$2d$CITY$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-medium",
                                                    children: String(value)
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Desktop/Minor_Project/FIX-MY-CITY/components/report/ai-calling-page.tsx",
                                                    lineNumber: 482,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, key, true, {
                                            fileName: "[project]/OneDrive/Desktop/Minor_Project/FIX-MY-CITY/components/report/ai-calling-page.tsx",
                                            lineNumber: 480,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/Minor_Project/FIX-MY-CITY/components/report/ai-calling-page.tsx",
                                    lineNumber: 478,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Desktop/Minor_Project/FIX-MY-CITY/components/report/ai-calling-page.tsx",
                            lineNumber: 476,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Minor_Project$2f$FIX$2d$MY$2d$CITY$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleProceed,
                            className: "w-full px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-all flex items-center justify-center gap-2",
                            children: [
                                "Continue to Photo Upload",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Minor_Project$2f$FIX$2d$MY$2d$CITY$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Minor_Project$2f$FIX$2d$MY$2d$CITY$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/Minor_Project/FIX-MY-CITY/components/report/ai-calling-page.tsx",
                                    lineNumber: 494,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Desktop/Minor_Project/FIX-MY-CITY/components/report/ai-calling-page.tsx",
                            lineNumber: 489,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Desktop/Minor_Project/FIX-MY-CITY/components/report/ai-calling-page.tsx",
                    lineNumber: 464,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive/Desktop/Minor_Project/FIX-MY-CITY/components/report/ai-calling-page.tsx",
            lineNumber: 318,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/OneDrive/Desktop/Minor_Project/FIX-MY-CITY/components/report/ai-calling-page.tsx",
        lineNumber: 317,
        columnNumber: 5
    }, this);
}
_s(AICallingPage, "RjleMOG+vYMbbtKMnddGY6KI0rU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Minor_Project$2f$FIX$2d$MY$2d$CITY$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Minor_Project$2f$FIX$2d$MY$2d$CITY$2f$lib$2f$report$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReport"]
    ];
});
_c = AICallingPage;
var _c;
__turbopack_context__.k.register(_c, "AICallingPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Desktop/Minor_Project/FIX-MY-CITY/app/report/calling/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CallingRoute
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Minor_Project$2f$FIX$2d$MY$2d$CITY$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Minor_Project/FIX-MY-CITY/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Minor_Project$2f$FIX$2d$MY$2d$CITY$2f$components$2f$report$2f$ai$2d$calling$2d$page$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Minor_Project/FIX-MY-CITY/components/report/ai-calling-page.tsx [app-client] (ecmascript)");
"use client";
;
;
function CallingRoute() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Minor_Project$2f$FIX$2d$MY$2d$CITY$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Minor_Project$2f$FIX$2d$MY$2d$CITY$2f$components$2f$report$2f$ai$2d$calling$2d$page$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AICallingPage"], {}, void 0, false, {
        fileName: "[project]/OneDrive/Desktop/Minor_Project/FIX-MY-CITY/app/report/calling/page.tsx",
        lineNumber: 6,
        columnNumber: 10
    }, this);
}
_c = CallingRoute;
var _c;
__turbopack_context__.k.register(_c, "CallingRoute");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Desktop/Minor_Project/FIX-MY-CITY/node_modules/lucide-react/dist/esm/icons/phone-off.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>PhoneOff
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Minor_Project$2f$FIX$2d$MY$2d$CITY$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Minor_Project/FIX-MY-CITY/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const PhoneOff = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Minor_Project$2f$FIX$2d$MY$2d$CITY$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("PhoneOff", [
    [
        "path",
        {
            d: "M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91",
            key: "z86iuo"
        }
    ],
    [
        "line",
        {
            x1: "22",
            x2: "2",
            y1: "2",
            y2: "22",
            key: "11kh81"
        }
    ]
]);
;
 //# sourceMappingURL=phone-off.js.map
}),
"[project]/OneDrive/Desktop/Minor_Project/FIX-MY-CITY/node_modules/lucide-react/dist/esm/icons/phone-off.js [app-client] (ecmascript) <export default as PhoneOff>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PhoneOff",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Minor_Project$2f$FIX$2d$MY$2d$CITY$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Minor_Project$2f$FIX$2d$MY$2d$CITY$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Minor_Project/FIX-MY-CITY/node_modules/lucide-react/dist/esm/icons/phone-off.js [app-client] (ecmascript)");
}),
"[project]/OneDrive/Desktop/Minor_Project/FIX-MY-CITY/node_modules/lucide-react/dist/esm/icons/mic.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>Mic
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Minor_Project$2f$FIX$2d$MY$2d$CITY$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Minor_Project/FIX-MY-CITY/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const Mic = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Minor_Project$2f$FIX$2d$MY$2d$CITY$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Mic", [
    [
        "path",
        {
            d: "M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z",
            key: "131961"
        }
    ],
    [
        "path",
        {
            d: "M19 10v2a7 7 0 0 1-14 0v-2",
            key: "1vc78b"
        }
    ],
    [
        "line",
        {
            x1: "12",
            x2: "12",
            y1: "19",
            y2: "22",
            key: "x3vr5v"
        }
    ]
]);
;
 //# sourceMappingURL=mic.js.map
}),
"[project]/OneDrive/Desktop/Minor_Project/FIX-MY-CITY/node_modules/lucide-react/dist/esm/icons/mic.js [app-client] (ecmascript) <export default as Mic>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Mic",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Minor_Project$2f$FIX$2d$MY$2d$CITY$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Minor_Project$2f$FIX$2d$MY$2d$CITY$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Minor_Project/FIX-MY-CITY/node_modules/lucide-react/dist/esm/icons/mic.js [app-client] (ecmascript)");
}),
"[project]/OneDrive/Desktop/Minor_Project/FIX-MY-CITY/node_modules/lucide-react/dist/esm/icons/mic-off.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>MicOff
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Minor_Project$2f$FIX$2d$MY$2d$CITY$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Minor_Project/FIX-MY-CITY/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const MicOff = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Minor_Project$2f$FIX$2d$MY$2d$CITY$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("MicOff", [
    [
        "line",
        {
            x1: "2",
            x2: "22",
            y1: "2",
            y2: "22",
            key: "a6p6uj"
        }
    ],
    [
        "path",
        {
            d: "M18.89 13.23A7.12 7.12 0 0 0 19 12v-2",
            key: "80xlxr"
        }
    ],
    [
        "path",
        {
            d: "M5 10v2a7 7 0 0 0 12 5",
            key: "p2k8kg"
        }
    ],
    [
        "path",
        {
            d: "M15 9.34V5a3 3 0 0 0-5.68-1.33",
            key: "1gzdoj"
        }
    ],
    [
        "path",
        {
            d: "M9 9v3a3 3 0 0 0 5.12 2.12",
            key: "r2i35w"
        }
    ],
    [
        "line",
        {
            x1: "12",
            x2: "12",
            y1: "19",
            y2: "22",
            key: "x3vr5v"
        }
    ]
]);
;
 //# sourceMappingURL=mic-off.js.map
}),
"[project]/OneDrive/Desktop/Minor_Project/FIX-MY-CITY/node_modules/lucide-react/dist/esm/icons/mic-off.js [app-client] (ecmascript) <export default as MicOff>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MicOff",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Minor_Project$2f$FIX$2d$MY$2d$CITY$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Minor_Project$2f$FIX$2d$MY$2d$CITY$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Minor_Project/FIX-MY-CITY/node_modules/lucide-react/dist/esm/icons/mic-off.js [app-client] (ecmascript)");
}),
"[project]/OneDrive/Desktop/Minor_Project/FIX-MY-CITY/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>ArrowRight
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Minor_Project$2f$FIX$2d$MY$2d$CITY$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Minor_Project/FIX-MY-CITY/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const ArrowRight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Minor_Project$2f$FIX$2d$MY$2d$CITY$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("ArrowRight", [
    [
        "path",
        {
            d: "M5 12h14",
            key: "1ays0h"
        }
    ],
    [
        "path",
        {
            d: "m12 5 7 7-7 7",
            key: "xquz4c"
        }
    ]
]);
;
 //# sourceMappingURL=arrow-right.js.map
}),
"[project]/OneDrive/Desktop/Minor_Project/FIX-MY-CITY/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ArrowRight",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Minor_Project$2f$FIX$2d$MY$2d$CITY$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Minor_Project$2f$FIX$2d$MY$2d$CITY$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Minor_Project/FIX-MY-CITY/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=OneDrive_Desktop_Minor_Project_FIX-MY-CITY_1b74bc08._.js.map