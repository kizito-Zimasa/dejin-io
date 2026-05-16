const WEEKS = [
  {
    week: 1,
    title: 'Understand',
    description: 'Discovery and design — we map your workflow, data, and integration points before writing a line of code.',
  },
  {
    week: 2,
    title: 'Build',
    description: 'Development and integration — AI system built, connected to your live systems, tested with real data.',
  },
  {
    week: 3,
    title: 'Launch',
    description: 'Deployment and go-live — system live in production, team trained, monitoring in place.',
  },
];

export default function DeliveryTimeline() {
  return (
    <section className="py-20 bg-white">
      <div className="container-max">
        <h2 className="text-4xl font-display font-bold text-center text-brand-dark mb-4">
          The 3-Week Delivery Method
        </h2>
        <p className="text-lg text-center text-gray-600 font-body mb-16 max-w-2xl mx-auto">
          One scoped workflow. Three focused phases. A working AI system your team can use.
        </p>

        {/* Timeline */}
        <div className="flex flex-col md:flex-row items-start md:items-start gap-0 max-w-4xl mx-auto">
          {WEEKS.map((item, index) => (
            <div key={item.week} className="flex flex-col md:flex-row flex-1 items-start">
              {/* Step */}
              <div className="flex flex-col items-center text-center flex-1 px-4">
                {/* Circle */}
                <div className="w-16 h-16 rounded-full bg-brand-primary text-white flex items-center justify-center text-2xl font-display font-bold mb-5 flex-shrink-0">
                  {item.week}
                </div>
                <h3 className="text-xl font-display font-bold text-brand-dark mb-2">
                  Week {item.week}: {item.title}
                </h3>
                <p className="text-gray-600 font-body text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Connector — horizontal on desktop, vertical on mobile */}
              {index < WEEKS.length - 1 && (
                <>
                  {/* Desktop: horizontal line + arrow */}
                  <div className="hidden md:flex items-center flex-shrink-0 mt-8">
                    <div className="w-8 h-0.5 bg-brand-primary" />
                    <div className="w-0 h-0 border-t-4 border-b-4 border-l-8 border-transparent border-l-brand-primary" />
                  </div>
                  {/* Mobile: vertical line */}
                  <div className="md:hidden w-0.5 h-8 bg-brand-primary mx-auto my-2" />
                </>
              )}
            </div>
          ))}
        </div>

        {/* Guarantee Banner */}
        <div className="mt-16 max-w-2xl mx-auto bg-success bg-opacity-10 border-l-4 border-success rounded-xl p-6 text-center">
          <p className="text-lg font-display font-bold text-success mb-1">
            Results Guaranteed
          </p>
          <p className="font-body text-gray-700 text-sm">
            If we haven't delivered a working system in 3 weeks, we extend for free until it's live.
          </p>
        </div>
      </div>
    </section>
  );
}
