// Static non-interactive preview of the chat interface — used in homepage hero

const MESSAGES = [
  {
    role: 'assistant',
    content: "Hi! I'm Amara, your health insurance assistant. How can I help you today?",
  },
  {
    role: 'user',
    content: "What's the status of my recent claim?",
  },
  {
    role: 'assistant',
    content:
      'Claim #CLM-2024-87432 was submitted on March 3rd and is currently in review — expected by March 13th. Would you like me to send you a status update by SMS?',
  },
  {
    role: 'user',
    content: 'Yes please.',
  },
  {
    role: 'assistant',
    content: 'Done! You\'ll receive an SMS update within the hour. Is there anything else I can help with?',
  },
];

const PROMPTS = ['Claims status', 'Pre-authorization', 'Add a dependent'];

function PreviewMessage({ role, content }) {
  const isUser = role === 'user';
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-2.5`}>
      {!isUser && (
        <div className="w-6 h-6 rounded-full bg-brand-primary flex items-center justify-center text-white text-sm font-bold mr-1.5 flex-shrink-0 mt-0.5">
          A
        </div>
      )}
      <div
        className={`max-w-[78%] px-3 py-2 rounded-2xl text-sm font-body leading-relaxed ${
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

export default function ChatPreview() {
  return (
    <div className="flex flex-col h-full">
      {/* Chat header */}
      <div className="bg-brand-dark px-4 py-3 flex items-center gap-2.5">
        <div className="w-7 h-7 rounded-full bg-brand-primary flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
          A
        </div>
        <div>
          <p className="text-white font-body font-semibold text-sm">Amara</p>
          <p className="text-gray-400 font-body text-sm">Health Insurance AI</p>
        </div>
        <div className="ml-auto flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
          <span className="text-gray-400 text-sm font-body">Live</span>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-hidden px-3 pt-3 pb-2 space-y-0">
        {MESSAGES.map((m, i) => (
          <PreviewMessage key={i} role={m.role} content={m.content} />
        ))}
      </div>

      {/* Quick prompts */}
      <div className="px-3 pb-2 flex gap-1.5 flex-wrap">
        {PROMPTS.map((p) => (
          <span
            key={p}
            className="text-sm font-body font-semibold px-2.5 py-1 rounded-full border border-brand-primary text-brand-primary"
          >
            {p}
          </span>
        ))}
      </div>

      {/* Input bar */}
      <div className="px-3 pb-3 flex gap-2 items-center">
        <div className="flex-1 rounded-xl border border-border px-3 py-2 text-sm font-body text-gray-400 bg-white">
          Ask about your coverage or claims...
        </div>
        <div className="w-8 h-8 rounded-xl bg-brand-primary flex items-center justify-center flex-shrink-0">
          <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
            <path d="M14 8L2 2l2 6-2 6 12-6z" fill="white" />
          </svg>
        </div>
      </div>
    </div>
  );
}
