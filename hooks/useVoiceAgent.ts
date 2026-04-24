import { useState, useRef, useCallback } from "react";

interface ExtractedFields {
  description: string;
  address: string;
  city: string;
  pincode: string;
  urgency: string;
}

interface ConversationTurn {
  role: "user" | "assistant";
  content: string;
}

export function useVoiceAgent() {
  const [listening, setListening] = useState(false);
  const [speaking, setSpeaking] = useState(false);
  const [extracted, setExtracted] = useState<ExtractedFields>({
    description: "", address: "", city: "", pincode: "", urgency: "",
  });
  const [complete, setComplete] = useState(false);
  const [agentReply, setAgentReply] = useState("");
  const [error, setError] = useState<string | null>(null);

  const historyRef = useRef<ConversationTurn[]>([]);
  const recognitionRef = useRef<any>(null);

  const speak = useCallback((text: string) => {
    if (!window.speechSynthesis) return;
    setSpeaking(true);
    const utt = new SpeechSynthesisUtterance(text);
    utt.lang = "hi-IN";
    utt.onend = () => setSpeaking(false);
    window.speechSynthesis.speak(utt);
  }, []);

  const sendToAgent = useCallback(async (userMessage: string) => {
    try {
      const res = await fetch("/api/voice-agent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ history: historyRef.current, userMessage }),
      });

      const json = await res.json();
      if (!json.success) throw new Error(json.error);

      const { agent_reply, extracted: fields, complete: done } = json.data;

      // Update history
      historyRef.current = [
        ...historyRef.current,
        { role: "user", content: userMessage },
        { role: "assistant", content: agent_reply },
      ];

      setAgentReply(agent_reply);
      setExtracted((prev) => ({ ...prev, ...fields }));
      if (done) setComplete(true);

      speak(agent_reply);
    } catch (err: any) {
      setError(err.message);
    }
  }, [speak]);

  const startListening = useCallback(() => {
    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) {
      setError("Speech recognition not supported in this browser");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "hi-IN";
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      sendToAgent(transcript);
    };

    recognition.onend = () => setListening(false);
    recognition.onerror = (e: any) => {
      setError(e.error);
      setListening(false);
    };

    recognitionRef.current = recognition;
    recognition.start();
    setListening(true);
  }, [sendToAgent]);

  const stopListening = useCallback(() => {
    recognitionRef.current?.stop();
    setListening(false);
  }, []);

  // Start the conversation
  const startConversation = useCallback(() => {
    historyRef.current = [];
    sendToAgent("Namaste, main report karna chahta hoon");
  }, [sendToAgent]);

  return {
    startConversation,
    startListening,
    stopListening,
    listening,
    speaking,
    extracted,
    complete,
    agentReply,
    error,
  };
}