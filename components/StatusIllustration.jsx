const CHANNELS = [
  { label: 'WhatsApp', color: '#25D366', icon: 'W', y: 48 },
  { label: 'Email', color: '#4A90D9', icon: '@', y: 118 },
  { label: 'SMS', color: '#7C3AED', icon: '#', y: 188 },
  { label: 'Web Portal', color: '#F28C28', icon: '↗', y: 258 },
];

export default function StatusIllustration() {
  const hubX = 130;
  const hubY = 153;
  const chanX = 310;

  return (
    <svg
      viewBox="0 0 460 306"
      className="w-full max-w-md"
      style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
      aria-label="Status automation — broadcasting to multiple channels"
    >
      <defs>
        <marker id="siArrow" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto">
          <polygon points="0 0, 7 2.5, 0 5" fill="#F28C28" />
        </marker>
        <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#00000018" />
        </filter>
      </defs>

      {/* ── Hub: central status source ── */}
      <circle cx={hubX} cy={hubY} r="54" fill="#1F2428" filter="url(#softShadow)" />
      <circle cx={hubX} cy={hubY} r="42" fill="#2a3238" />
      <text x={hubX} y={hubY - 10} textAnchor="middle" fontSize="10" fill="#9CA3AF" letterSpacing="1" fontWeight="600">STATUS</text>
      <text x={hubX} y={hubY + 8} textAnchor="middle" fontSize="22" fill="#F28C28" fontWeight="700">●</text>
      <text x={hubX} y={hubY + 26} textAnchor="middle" fontSize="9" fill="#6B7280">Live data</text>

      {/* ── Connecting lines from hub to channels ── */}
      {CHANNELS.map((ch) => (
        <line
          key={ch.label}
          x1={hubX + 54}
          y1={hubY}
          x2={chanX - 4}
          y2={ch.y + 22}
          stroke="#F28C28"
          strokeWidth="1.5"
          strokeDasharray="5 3"
          markerEnd="url(#siArrow)"
        />
      ))}

      {/* ── Channel cards ── */}
      {CHANNELS.map((ch) => (
        <g key={ch.label}>
          {/* Card */}
          <rect x={chanX} y={ch.y} width="148" height="44" rx="10" fill="white" stroke="#DADDE1" strokeWidth="1.5" filter="url(#softShadow)" />

          {/* Colour dot */}
          <circle cx={chanX + 20} cy={ch.y + 22} r="9" fill={ch.color} />
          <text x={chanX + 20} y={ch.y + 26} textAnchor="middle" fontSize="10" fill="white" fontWeight="700">{ch.icon}</text>

          {/* Label */}
          <text x={chanX + 36} y={ch.y + 16} fontSize="12" fill="#1F2428" fontWeight="600">{ch.label}</text>

          {/* "Delivered" badge */}
          <rect x={chanX + 36} y={ch.y + 24} width="52" height="13" rx="4" fill="#DCFCE7" />
          <text x={chanX + 62} y={ch.y + 34} textAnchor="middle" fontSize="9" fill="#166534" fontWeight="600">Delivered</text>
        </g>
      ))}

      {/* ── "8 seconds" callout ── */}
      <rect x="0" y="260" width="118" height="38" rx="10" fill="#FFF3E6" stroke="#F28C28" strokeWidth="1.5" />
      <text x="59" y="275" textAnchor="middle" fontSize="10" fill="#9CA3AF">Response time</text>
      <text x="59" y="291" textAnchor="middle" fontSize="13" fill="#F28C28" fontWeight="700">~2 seconds</text>
    </svg>
  );
}
