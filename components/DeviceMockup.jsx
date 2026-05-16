export default function DeviceMockup({ children, url = 'dejin.io', className = '' }) {
  return (
    <div className={`rounded-2xl overflow-hidden shadow-2xl border border-gray-200 ${className}`}>
      {/* Browser chrome */}
      <div className="bg-brand-dark px-4 py-3 flex items-center gap-3">
        {/* Traffic lights */}
        <div className="flex gap-1.5 flex-shrink-0">
          <div className="w-3 h-3 rounded-full bg-red-400 opacity-70" />
          <div className="w-3 h-3 rounded-full bg-yellow-400 opacity-70" />
          <div className="w-3 h-3 rounded-full bg-green-400 opacity-70" />
        </div>
        {/* URL bar */}
        <div className="flex-1 bg-white bg-opacity-10 rounded-md px-3 py-1.5 flex items-center gap-2 min-w-0">
          <svg className="w-3 h-3 text-gray-400 flex-shrink-0" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="6" cy="6" r="4.5" />
            <path d="M6 1.5c-1.5 1.5-2.5 2.8-2.5 4.5s1 3 2.5 4.5M6 1.5c1.5 1.5 2.5 2.8 2.5 4.5s-1 3-2.5 4.5M1.5 6h9" strokeLinecap="round" />
          </svg>
          <span className="text-gray-300 text-xs font-body truncate">{url}</span>
        </div>
      </div>
      {/* Content area */}
      <div className="bg-white overflow-hidden">
        {children}
      </div>
    </div>
  );
}
