'use client';

import { useState, useRef, useEffect } from 'react';

const PROMPTS = [
  { label: 'Claims status', text: 'What is the status of my recent claim?' },
  { label: 'Pre-authorization', text: 'I need a pre-authorization for an MRI scan. How does that work?' },
  { label: 'Coverage question', text: 'Is physiotherapy covered under my plan?' },
  { label: 'Add a dependent', text: 'I just had a baby — how do I add them to my policy?' },
];

function TypingIndicator() {
  return (
    <div className="flex gap-1 items-center px-4 py-3">
      <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0ms' }} />
      <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '150ms' }} />
      <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '300ms' }} />
    </div>
  );
}

function Message({ role, content }) {
  const isUser = role === 'user';
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-3`}>
      {!isUser && (
        <div className="w-8 h-8 rounded-full bg-brand-primary flex items-center justify-center text-white text-xs font-display font-bold mr-2 flex-shrink-0 mt-0.5">
          A
        </div>
      )}
      <div
        className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm font-body leading-relaxed ${
          isUser
            ? 'bg-brand-primary text-white rounded-br-sm'
            : 'bg-surface text-gray-800 rounded-bl-sm border border-border'
        }`}
      >
        {content}
      </div>
    </div>
  );
}

export default function ChatDemo() {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: "Hi! I'm Amara, your health insurance assistant. How can I help you today?",
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  async function sendMessage(text) {
    const trimmed = text.trim();
    if (!trimmed || loading) return;

    const newMessages = [...messages, { role: 'user', content: trimmed }];
    setMessages(newMessages);
    setInput('');
    setLoading(true);
    setError(null);

    try {
      const history = newMessages.slice(0, -1).map((m) => ({ role: m.role, content: m.content }));
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: trimmed, history }),
      });

      const data = await res.json();

      if (!res.ok) {
        if (res.status === 429) {
          setError('You\'ve reached the demo limit. Please try again in an hour.');
        } else {
          setError(data.error || 'Something went wrong. Please try again.');
        }
        return;
      }

      setMessages((prev) => [...prev, { role: 'assistant', content: data.reply }]);
    } catch {
      setError('Network error. Please check your connection and try again.');
    } finally {
      setLoading(false);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  }

  return (
    <div className="bg-white rounded-2xl border border-border shadow-lg overflow-hidden flex flex-col h-[480px]">
      {/* Header */}
      <div className="bg-brand-dark px-5 py-3.5 flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-brand-primary flex items-center justify-center text-white font-display font-bold text-sm">
          A
        </div>
        <div>
          <p className="text-white font-body font-semibold text-sm">Amara</p>
          <p className="text-gray-400 font-body text-xs">Health Insurance AI · Demo</p>
        </div>
        <div className="ml-auto flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-green-400" />
          <span className="text-gray-400 text-xs font-body">Live</span>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4">
        {messages.map((m, i) => (
          <Message key={i} role={m.role} content={m.content} />
        ))}
        {loading && (
          <div className="flex justify-start mb-3">
            <div className="w-8 h-8 rounded-full bg-brand-primary flex items-center justify-center text-white text-xs font-bold mr-2 flex-shrink-0 mt-0.5">
              A
            </div>
            <div className="bg-surface border border-border rounded-2xl rounded-bl-sm">
              <TypingIndicator />
            </div>
          </div>
        )}
        {error && (
          <div className="text-center py-2">
            <p className="text-xs font-body text-red-500 bg-red-50 rounded-lg px-3 py-2 inline-block">{error}</p>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Quick prompts */}
      {messages.length <= 1 && (
        <div className="px-4 pb-2 flex flex-wrap gap-2">
          {PROMPTS.map((p) => (
            <button
              key={p.label}
              onClick={() => sendMessage(p.text)}
              disabled={loading}
              className="text-xs font-body font-semibold px-3 py-1.5 rounded-full border border-brand-primary text-brand-primary hover:bg-brand-light transition-colors disabled:opacity-50"
            >
              {p.label}
            </button>
          ))}
        </div>
      )}

      {/* Input */}
      <div className="px-4 py-3 border-t border-border flex gap-2 items-end">
        <textarea
          ref={inputRef}
          rows={1}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask about your coverage, claims, or benefits..."
          disabled={loading}
          className="flex-1 resize-none rounded-xl border border-border px-3 py-2.5 text-sm font-body focus:outline-none focus:border-brand-primary transition-colors disabled:opacity-50 max-h-24 overflow-y-auto"
        />
        <button
          onClick={() => sendMessage(input)}
          disabled={loading || !input.trim()}
          className="w-10 h-10 rounded-xl bg-brand-primary text-white flex items-center justify-center hover:opacity-90 transition-opacity disabled:opacity-40 flex-shrink-0"
          aria-label="Send"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M14 8L2 2l2 6-2 6 12-6z" fill="currentColor" />
          </svg>
        </button>
      </div>
    </div>
  );
}
