export default function ThreeLayerBlock({
  layers = [
    {
      number: 1,
      title: 'Intelligence Layer',
      description: 'LLMs + reasoning engines',
      color: 'bg-amber',
    },
    {
      number: 2,
      title: 'Orchestration Layer',
      description: 'Workflow + memory + tools',
      color: 'bg-teal',
    },
    {
      number: 3,
      title: 'Integration Layer',
      description: 'Systems + APIs + security',
      color: 'bg-navy',
    },
  ],
}) {
  return (
    <section className="py-16 bg-white">
      <div className="container-max">
        <div className="space-y-6">
          {layers.map((layer, index) => (
            <div key={layer.number} className="flex gap-8 items-start">
              {/* Left: Number and Title */}
              <div className="flex-shrink-0">
                <div className={`w-16 h-16 rounded-full ${layer.color} flex items-center justify-center text-white font-display font-bold text-2xl`}>
                  {layer.number}
                </div>
              </div>

              {/* Right: Content */}
              <div className="flex-grow pt-2">
                <h3 className="text-2xl font-display font-bold text-brand-dark mb-2">
                  {layer.title}
                </h3>
                <p className="text-gray-600 font-body">
                  {layer.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
