const CHANNELS = ['WhatsApp', 'Email', 'Web Portal', 'Mobile App'];
const SYSTEMS = ['CRM', 'ERP', 'Core Banking', 'Legacy DB'];
const OUTCOMES = ['Automation', 'Insights', 'Compliance'];

// Layout constants
const ROW_CY = [55, 115, 175, 235];
const BOX_W = 148;
const BOX_H = 44;
const CORTEX_X = 218;
const CORTEX_W = 324;
const SYS_X = 614;
const CORTEX_Y = ROW_CY[0] - BOX_H / 2;
const CORTEX_H = ROW_CY[3] - ROW_CY[0] + BOX_H; // 224
const CORTEX_CX = CORTEX_X + CORTEX_W / 2; // 380

export default function CortexDiagram() {
  return (
    <svg
      viewBox="0 0 762 375"
      className="w-full"
      style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
      aria-label="Cortex platform architecture diagram"
    >
      <defs>
        <marker id="cdArrow" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
          <polygon points="0 0, 8 3, 0 6" fill="#F28C28" />
        </marker>
        <linearGradient id="cortexGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2a3238" />
          <stop offset="100%" stopColor="#1F2428" />
        </linearGradient>
      </defs>

      {/* ── Column labels ── */}
      <text x={BOX_W / 2} y="18" textAnchor="middle" fontSize="9.5" fill="#9CA3AF" letterSpacing="1.5" fontWeight="600">CHANNELS</text>
      <text x={CORTEX_CX} y="18" textAnchor="middle" fontSize="9.5" fill="#9CA3AF" letterSpacing="1.5" fontWeight="600">CORTEX PLATFORM</text>
      <text x={SYS_X + BOX_W / 2} y="18" textAnchor="middle" fontSize="9.5" fill="#9CA3AF" letterSpacing="1.5" fontWeight="600">YOUR SYSTEMS</text>

      {/* ── Channel boxes ── */}
      {CHANNELS.map((ch, i) => (
        <g key={ch}>
          <rect x="0" y={ROW_CY[i] - BOX_H / 2} width={BOX_W} height={BOX_H} rx="8" fill="white" stroke="#DADDE1" strokeWidth="1.5" />
          <text x={BOX_W / 2} y={ROW_CY[i] + 5} textAnchor="middle" fontSize="13" fill="#1F2428" fontWeight="500">{ch}</text>
        </g>
      ))}

      {/* ── Arrows: channels → cortex ── */}
      {ROW_CY.map((cy, i) => (
        <line key={i} x1={BOX_W + 1} y1={cy} x2={CORTEX_X - 5} y2={cy} stroke="#F28C28" strokeWidth="1.5" markerEnd="url(#cdArrow)" />
      ))}

      {/* ── Cortex box ── */}
      <rect x={CORTEX_X} y={CORTEX_Y} width={CORTEX_W} height={CORTEX_H} rx="16" fill="url(#cortexGrad)" />

      {/* Cortex brand circle */}
      <circle cx={CORTEX_CX} cy={CORTEX_Y + 38} r="20" fill="#F28C28" />
      <text x={CORTEX_CX} y={CORTEX_Y + 44} textAnchor="middle" fontSize="15" fill="white" fontWeight="700">C</text>

      {/* Cortex title */}
      <text x={CORTEX_CX} y={CORTEX_Y + 78} textAnchor="middle" fontSize="19" fill="white" fontWeight="700">Cortex</text>
      <text x={CORTEX_CX} y={CORTEX_Y + 96} textAnchor="middle" fontSize="11" fill="#6B7280">by Dejin</text>

      {/* Layer pills */}
      {['Orchestration', 'Memory', 'Governance'].map((layer, i) => (
        <g key={layer}>
          <rect
            x={CORTEX_X + 50}
            y={CORTEX_Y + 112 + i * 38}
            width={CORTEX_W - 100}
            height="28"
            rx="7"
            fill="rgba(255,255,255,0.07)"
            stroke="rgba(255,255,255,0.12)"
            strokeWidth="1"
          />
          <text
            x={CORTEX_CX}
            y={CORTEX_Y + 131 + i * 38}
            textAnchor="middle"
            fontSize="12"
            fill="#D1D5DB"
          >
            {layer}
          </text>
        </g>
      ))}

      {/* ── Arrows: cortex → systems ── */}
      {ROW_CY.map((cy, i) => (
        <line key={i} x1={CORTEX_X + CORTEX_W + 5} y1={cy} x2={SYS_X - 5} y2={cy} stroke="#F28C28" strokeWidth="1.5" markerEnd="url(#cdArrow)" />
      ))}

      {/* ── System boxes ── */}
      {SYSTEMS.map((sys, i) => (
        <g key={sys}>
          <rect x={SYS_X} y={ROW_CY[i] - BOX_H / 2} width={BOX_W} height={BOX_H} rx="8" fill="white" stroke="#DADDE1" strokeWidth="1.5" />
          <text x={SYS_X + BOX_W / 2} y={ROW_CY[i] + 5} textAnchor="middle" fontSize="13" fill="#1F2428" fontWeight="500">{sys}</text>
        </g>
      ))}

      {/* ── Down arrow to outcomes ── */}
      <line
        x1={CORTEX_CX} y1={CORTEX_Y + CORTEX_H + 1}
        x2={CORTEX_CX} y2={CORTEX_Y + CORTEX_H + 26}
        stroke="#F28C28" strokeWidth="1.5" markerEnd="url(#cdArrow)"
      />

      {/* Outcomes label */}
      <text x={CORTEX_CX} y={CORTEX_Y + CORTEX_H + 48} textAnchor="middle" fontSize="9.5" fill="#9CA3AF" letterSpacing="1.5" fontWeight="600">OUTCOMES</text>

      {/* ── Outcome boxes ── */}
      {OUTCOMES.map((o, i) => {
        const totalW = OUTCOMES.length * 100 + (OUTCOMES.length - 1) * 12;
        const startX = CORTEX_CX - totalW / 2;
        const x = startX + i * 112;
        return (
          <g key={o}>
            <rect x={x} y={CORTEX_Y + CORTEX_H + 56} width="100" height="36" rx="8" fill="#FFF3E6" stroke="#F28C28" strokeWidth="1.2" />
            <text x={x + 50} y={CORTEX_Y + CORTEX_H + 80} textAnchor="middle" fontSize="12" fill="#1F2428" fontWeight="600">{o}</text>
          </g>
        );
      })}
    </svg>
  );
}
