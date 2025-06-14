import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Bot, User, Lightbulb, Heart, Brain } from 'lucide-react';

const apiUrl = import.meta.env.VITE_API_URL;

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
  suggestions?: string[];
}

const AICounselorPage = () => {
  const [messages, setMessages] = useState<Message[]>([{
    id: '1',
    text: "Hello! I'm your AI mental health counselor. I'm here to provide support, guidance, and evidence-based strategies to help you navigate your mental wellness journey. How can I assist you today?",
    sender: 'ai',
    timestamp: new Date(),
    suggestions: [
      "I'm feeling anxious about work",
      "Help me manage stress",
      "I'm having trouble sleeping",
      "I need motivation"
    ]
  }]);

  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickTopics = [
    {
      icon: Brain,
      label: 'Anxiety',
      prompt: "I've been feeling anxious lately. Can you help me understand why and what I can do about it?"
    },
    {
      icon: Heart,
      label: 'Relationships',
      prompt: "I'm having some challenges in my relationships. Can you give me some advice?"
    },
    {
      icon: Lightbulb,
      label: 'Stress Management',
      prompt: "I'm dealing with a lot of stress. What are some effective ways to manage it?"
    },
    {
      icon: Brain,
      label: 'Self-Care',
      prompt: "I want to improve my self-care routine. Where should I start?"
    }
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const formatMessage = (text: string) => {
    // Handle tables separately
    if (text.includes("|") && text.includes("---")) {
      const tableLines = text
        .split("\n")
        .filter(line => line.includes("|"))
        .map(line => line.trim());

      const header = tableLines[0].split("|").slice(1, -1).map(h => h.trim());
      const rows = tableLines.slice(2).map(row =>
        row.split("|").slice(1, -1).map(cell => cell.trim())
      );

      const tableHtml = `
      <table class="w-full border border-gray-300 text-sm my-4">
        <thead class="bg-gray-100">
          <tr>${header.map(h => `<th class="border px-2 py-1 font-semibold">${h}</th>`).join("")}</tr>
        </thead>
        <tbody>
          ${rows.map(row => `
            <tr>${row.map(cell => `<td class="border px-2 py-1">${cell}</td>`).join("")}</tr>
          `).join("")}
        </tbody>
      </table>
    `;

      // Remove table from original text
      const nonTableText = text
        .split("\n")
        .filter(line => !line.includes("|"))
        .join("\n");

      return formatMarkdown(nonTableText) + tableHtml;
    }

    return formatMarkdown(text);
  };

  const formatMarkdown = (text: string) => {
    const lines = text.split("\n").filter(line => line.trim() !== "");

    return lines.map(line => {
      const trimmed = line.trim();

      // Headings
      if (trimmed.startsWith("## ")) {
        return `<h2 class="text-xl font-bold mt-4 mb-2 text-primary-600">${trimmed.slice(3)}</h2>`;
      }
      if (trimmed.startsWith("### ")) {
        return `<h3 class="text-lg font-semibold mt-3 mb-1 text-primary-500">${trimmed.slice(4)}</h3>`;
      }

      // Bold
      const bolded = trimmed.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');

      // Italic
      const italicized = bolded.replace(/\*(.+?)\*/g, '<em>$1</em>');

      // Numbered list
      if (/^\d+\.\s/.test(trimmed)) {
        return `<p class="ml-4">👉 ${italicized}</p>`;
      }

      // Bullet point
      if (/^[-*]\s/.test(trimmed)) {
        return `<li class="ml-6 list-disc">${italicized.slice(2)}</li>`;
      }

      return `<p class="mb-2">${italicized}</p>`;
    }).join("");
  };



  const handleSendMessage = async (messageText?: string) => {
    const text = messageText || inputMessage.trim();
    if (!text) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    try {
      const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiUrl}`,
          "Content-Type": "application/json",
          "HTTP-Referer": "https://your-site.com",
          "X-Title": "MentalHealthAI"
        },
        body: JSON.stringify({
          model: "deepseek/deepseek-r1-0528-qwen3-8b:free",
          messages: [{ role: "user", content: text }]
        })
      });

      const data = await res.json();
      const aiReply = data?.choices?.[0]?.message?.content || "I'm here for you. Please try rephrasing your question.";

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: aiReply,
        sender: 'ai',
        timestamp: new Date(),
        suggestions: [
          "Tell me more about that",
          "What techniques can I try?",
          "How do I stay consistent?",
          "Can you give me an example?"
        ]
      };

      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error("Chatbot API error:", error);
      setMessages(prev => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          text: "Sorry, I'm having trouble responding right now. Please try again later.",
          sender: 'ai',
          timestamp: new Date()
        }
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen pt-8 pb-4">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-6">
          <div className="flex justify-center mb-4">
            <div className="bg-gradient-to-r from-primary-500 to-secondary-500 p-3 rounded-full">
              <Bot className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">AI Mental Health Counselor</h1>
          <p className="text-gray-300">Safe, confidential, and available 24/7 for your mental wellness support</p>
        </motion.div>

        {messages.length === 1 && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mb-6">
            <h3 className="text-lg font-semibold text-white mb-4 text-center">Quick Topics to Get Started</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {quickTopics.map((topic, index) => {
                const Icon = topic.icon;
                return (
                  <motion.button
                    key={index}
                    onClick={() => handleSendMessage(topic.prompt)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-dark-700 p-4 rounded-xl shadow-sm border border-dark-600 hover:shadow-md hover:border-primary-500/30 transition-all text-center"
                  >
                    <Icon className="h-6 w-6 text-primary-400 mx-auto mb-2" />
                    <span className="text-sm font-medium text-white">{topic.label}</span>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        )}

        <div className="flex-1 bg-dark-700 rounded-2xl shadow-lg mb-4 flex flex-col border border-dark-600">
          <div className="flex-1 overflow-y-auto p-6 space-y-4" style={{ maxHeight: '60vh' }}>
            <AnimatePresence>
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-xs lg:max-w-2xl px-4 py-3 rounded-2xl ${message.sender === 'user'
                    ? 'bg-primary-600 text-white'
                    : 'bg-dark-600 text-white border border-dark-500'}`}
                  >
                    <div className="flex items-start space-x-2">
                      {message.sender === 'ai' && <Bot className="h-5 w-5 text-primary-400 mt-0.5 flex-shrink-0" />}
                      {message.sender === 'user' && <User className="h-5 w-5 text-white mt-0.5 flex-shrink-0" />}
                      <div className="flex-1">
                        {message.sender === 'ai' ? (
                          <div
                            className="text-sm leading-relaxed space-y-2"
                            dangerouslySetInnerHTML={{ __html: formatMessage(message.text) }}
                          />
                        ) : (
                          <p className="text-sm leading-relaxed">{message.text}</p>
                        )}
                        {message.suggestions && (
                          <div className="mt-3 space-y-2">
                            {message.suggestions.map((suggestion, index) => (
                              <button
                                key={index}
                                onClick={() => handleSendMessage(suggestion)}
                                className="block w-full text-left px-3 py-2 text-xs bg-white/10 rounded-lg hover:bg-white/20 transition-colors border border-white/10"
                              >
                                {suggestion}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {isTyping && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex justify-start">
                <div className="bg-dark-600 px-4 py-3 rounded-2xl border border-dark-500">
                  <div className="flex items-center space-x-2">
                    <Bot className="h-5 w-5 text-primary-400" />
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="border-t border-dark-600 p-4">
            <div className="flex items-end space-x-4">
              <div className="flex-1">
                <textarea
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Share what's on your mind..."
                  className="w-full px-4 py-3 bg-dark-600 border border-dark-500 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none text-white placeholder-gray-400"
                  rows={2}
                />
              </div>
              <button
                onClick={() => handleSendMessage()}
                disabled={!inputMessage.trim() || isTyping}
                className="bg-primary-600 text-white p-3 rounded-xl hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
            <p className="text-xs text-gray-400 mt-2 text-center">
              This AI counselor provides general support. For crisis situations, contact emergency services.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AICounselorPage;
