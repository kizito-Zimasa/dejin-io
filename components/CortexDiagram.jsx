const CHANNELS = ['WhatsApp', 'Email', 'Web Portal', 'Mobile App'];
const SYSTEMS = ['CRM', 'ERP', 'Core Banking', 'Legacy DB'];
const OUTCOMES = [
  { label: 'Automation', desc: 'Routine tasks handled without human touch' },
  { label: 'Insights', desc: 'Operational data surfaces in real time' },
  { label: 'Compliance', desc: 'Audit trails and governance built in' },
];

function Arrow({ vertical = false }) {
  if (vertical) {
    return (
      <div className="flex justify-center py-2">
        <div className="flex flex-col items-center gap-0">
          <div className="w-0.5 h-6 bg-brand-primary" />
          <div
            className="w-0 h-0"
            style={{
              borderLeft: '6px solid transparent',
              borderRight: '6px solid transparent',
              borderTop: '8px solid #F28C28',
            }}
          />
        </div>
      </div>
    );
  }
  return (
    <div className="flex items-center px-1">
      <div className="h-0.5 w-6 bg-brand-primary" />
      <div
        className="w-0 h-0"
        style={{
          borderTop: '6px solid transparent',
          borderBottom: '6px solid transparent',
          borderLeft: '8px solid #F28C28',
        }}
      />
    </div>
  );
}

export default function CortexDiagram() {
  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-[640px] flex flex-col items-center gap-0">

        {/* Top row: Channels → Cortex → Systems */}
        <div className="flex items-center justify-center gap-0 w-full">

          {/* Channels */}
          <div className="flex flex-col gap-2 w-40">
            <p className="text-xs font-body font-semibold text-gray-500 uppercase tracking-widest text-center mb-1">
              Channels
            </p>
            {CHANNELS.map((ch) => (
              <div
                key={ch}
                className="bg-white border border-border rounded-xl px-3 py-2 text-sm font-body text-brand-dark text-center shadow-sm"
              >
                {ch}
              </div>
            ))}
          </div>

          {/* Arrow right */}
          <div className="flex flex-col gap-2 mt-6">
            {CHANNELS.map((ch) => (
              <Arrow key={ch} />
            ))}
          </div>

          {/* Cortex core */}
          <div className="mx-2 bg-brand-dark rounded-2xl p-6 flex flex-col items-center justify-center w-48 shadow-lg">
            <div className="w-10 h-10 rounded-full bg-brand-primary flex items-center justify-center mb-3">
              <span className="text-white font-display font-bold text-lg">C</span>
            </div>
            <p className="text-white font-display font-bold text-lg text-center leading-tight">
              Cortex
            </p>
            <p className="text-gray-400 font-body text-xs text-center mt-1">
              by Dejin
            </p>
            <div className="mt-4 space-y-1 w-full">
              {['Orchestration', 'Memory', 'Governance'].map((layer) => (
                <div
                  key={layer}
                  className="bg-white bg-opacity-10 rounded-lg px-2 py-1 text-xs font-body text-gray-300 text-center"
                >
                  {layer}
                </div>
              ))}
            </div>
          </div>

          {/* Arrow right */}
          <div className="flex flex-col gap-2 mt-6">
            {SYSTEMS.map((s) => (
              <Arrow key={s} />
            ))}
          </div>

          {/* Systems */}
          <div className="flex flex-col gap-2 w-40">
            <p className="text-xs font-body font-semibold text-gray-500 uppercase tracking-widest text-center mb-1">
              Your Systems
            </p>
            {SYSTEMS.map((s) => (
              <div
                key={s}
                className="bg-white border border-border rounded-xl px-3 py-2 text-sm font-body text-brand-dark text-center shadow-sm"
              >
                {s}
              </div>
            ))}
          </div>
        </div>

        {/* Down arrow */}
        <Arrow vertical />

        {/* Outcomes row */}
        <div className="w-full">
          <p className="text-xs font-body font-semibold text-gray-500 uppercase tracking-widest text-center mb-3">
            Outcomes
          </p>
          <div className="grid grid-cols-3 gap-4">
            {OUTCOMES.map((o) => (
              <div
                key={o.label}
                className="bg-brand-light rounded-xl p-4 text-center"
              >
                <p className="font-display font-bold text-brand-dark text-sm mb-1">{o.label}</p>
                <p className="font-body text-xs text-gray-600 leading-relaxed">{o.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
