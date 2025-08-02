'use client';
import { useRef, useState } from "react";
import { AIInput, AIInputTextarea, AIInputToolbar, AIInputSubmit } from "@/components/ui/kibo-ui/ai/input";
import { AIMessage, AIMessageAvatar, AIMessageContent } from "@/components/ui/kibo-ui/ai/message";
import { toast } from "sonner";

const Example = () => {
  const [messages, setMessages] = useState<
    { from: "user" | "assistant"; content: string; name?: string; avatar?: string; isLoading?: boolean }[]
  >([]);
  const [text, setText] = useState("");
  const [documentUrl, setDocumentUrl] = useState("");
  const [status, setStatus] = useState<"ready" | "streaming" | "error">("ready");
  const chatRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom on new message
  const scrollToBottom = () => {
    setTimeout(() => {
      chatRef.current?.scrollTo({ top: chatRef.current.scrollHeight, behavior: "smooth" });
    }, 100);
  };

  // Simulate AI response (replace with real API call)
  const fetchAIResponse = async (userMessage: string, documentUrl: string) => {
    const payload = {
      documents: documentUrl,
      questions: [userMessage]
    };
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload)
    };
    try {
      const response = await fetch('/api/hackrx', options);
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      
      // Handle the API response structure with answers array
      if (data.answers && Array.isArray(data.answers)) {
        // Format multiple answers with numbering if there are multiple questions
        if (data.answers.length > 1) {
          return data.answers.map((answer: string, index: number) => `${index + 1}. ${answer}`).join('\n\n');
        } else {
          return data.answers[0];
        }
      }
      
      return data.output || JSON.stringify(data);
    } catch (err) {
      throw err;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim() || !documentUrl.trim()) {
      toast.error("Please provide both a question and a document URL");
      return;
    }
    const userMsg: { from: "user"; content: string; name?: string; avatar?: string; isLoading?: boolean } = { 
      from: "user", 
      content: text
    };
    setMessages((msgs) => [...msgs, userMsg]);
    setText("");
    setStatus("streaming");
    scrollToBottom();

    try {
      // Add loading message
      const loadingMsg = { from: "assistant" as const, content: "loading", isLoading: true };
      setMessages((msgs) => [...msgs, loadingMsg]);
      scrollToBottom();

      const aiResponse = await fetchAIResponse(text, documentUrl);
      
      // Replace loading message with actual response
      setMessages((msgs) => {
        const newMsgs = [...msgs];
        newMsgs[newMsgs.length - 1] = { from: "assistant", content: aiResponse };
        return newMsgs;
      });
      setStatus("ready");
      scrollToBottom();
    } catch (err) {
      // Remove loading message on error
      setMessages((msgs) => msgs.slice(0, -1));
      toast.error("Failed to get AI response");
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen w-full flex items-end justify-center bg-gradient-to-br from-[#e6f6f9] to-white pb-1">
      <div className="w-full max-w-7xl rounded-3xl shadow-xl bg-white flex flex-col overflow-hidden border border-gray-100">
        {/* Header */}
        <div className="flex items-center gap-3 px-8 py-6 border-b">
        <div className="flex items-center space-x-3">
            <div className="w-9 h-9 bg-teal-500 rounded-lg flex items-center justify-center">
              <div className="w-5 h-5 bg-white rounded-sm"></div>
            </div>
            <span className="font-extrabold text-2xl tracking-tight select-none">
              Bajaj<span className="text-teal-500">Allianz</span>
            </span>
          </div>
        </div>
        {/* Chat area */}
        <div
          ref={chatRef}
          className="flex-1 overflow-y-auto px-8 py-6"
          style={{ minHeight: "70vh", maxHeight: "70vh" }}
        >
          {messages.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center h-full w-full select-none">
              <span className="text-3xl md:text-4xl font-bold text-teal-600 mb-2">Hello, User</span>
              <span className="text-lg text-gray-500 text-center">Provide a document URL and ask questions about it!</span>
            </div>
          ) : (
            messages.map((msg, idx) => (
              <AIMessage from={msg.from} key={idx}>
                <AIMessageContent>
                  {msg.from === "assistant" ? (
                    msg.isLoading ? (
                      <div className="flex items-center space-x-3 py-2">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-teal-500 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-teal-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-2 h-2 bg-teal-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                        <span className="text-gray-500 animate-pulse">AI is analyzing the document...</span>
                      </div>
                    ) : (
                      <div className="whitespace-pre-wrap">{msg.content}</div>
                    )
                  ) : (
                    msg.content
                  )}
                </AIMessageContent>
                {msg.from === "assistant" && (
                  <AIMessageAvatar name="AI" src="/ai-avatar.png" />
                )}
              </AIMessage>
            ))
          )}
        </div>
        {/* Input */}
        <div className="w-full px-8 py-4 bg-white border-t space-y-4">
          {/* Document URL Input */}
          <div className="w-full">
            <label htmlFor="document-url" className="block text-sm font-medium text-gray-700 mb-2">
              Document URL
            </label>
            <input
              id="document-url"
              type="url"
              value={documentUrl}
              onChange={(e) => setDocumentUrl(e.target.value)}
              placeholder="Enter document URL..."
              className="w-full border border-gray-200 px-4 py-2 rounded-lg shadow-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            />
          </div>
          
          {/* Question Input */}
          <AIInput onSubmit={handleSubmit} className="w-full flex gap-2">
            <AIInputTextarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Ask your question about the document..."
              rows={1}
              className="w-full min-w-0 resize-none border border-gray-200 px-4 py-2 shadow-sm"
            />
            <AIInputToolbar>
              <AIInputSubmit
                disabled={!text.trim() || !documentUrl.trim()}
                status={status}
                className="bg-[#1cc7b6] text-white rounded-full px-6 py-2 font-semibold shadow"
              />
            </AIInputToolbar>
          </AIInput>
        </div>
      </div>
    </div>
  );
};

export default Example;
