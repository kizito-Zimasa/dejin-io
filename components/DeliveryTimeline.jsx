export default function DeliveryTimeline() {
  const weeks = [
    {
      week: 1,
      title: 'Understand',
      description: 'Discovery & design of your AI system',
    },
    {
      week: 2,
      title: 'Build',
      description: 'Development & integration with your systems',
    },
    {
      week: 3,
      title: 'Launch',
      description: 'Deployment & go-live with your team',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container-max">
        <h2 className="text-4xl font-display font-bold text-center text-brand-dark mb-16">
          Working Systems. 3 Weeks. Guaranteed.
        </h2>

        {/* Timeline */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {weeks.map((item, index) => (
            <div key={item.week}>
              {/* Week Box */}
              <div className="bg-surface rounded-lg p-8 text-center mb-6">
                <div className="text-6xl font-display font-bold text-brand-primary mb-2">
                  {item.week}
                </div>
                <h3 className="text-2xl font-display font-bold text-brand-dark mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 font-body">
                  {item.description}
                </p>
              </div>

              {/* Connector */}
              {index < weeks.length - 1 && (
                <div className="hidden md:block h-1 bg-brand-primary mb-6" />
              )}
            </div>
          ))}
        </div>

        {/* Guarantee Banner */}
        <div className="bg-success bg-opacity-10 border-l-4 border-success rounded-lg p-8 text-center">
          <p className="text-lg font-display font-bold text-success mb-2">
            Results Guaranteed
          </p>
          <p className="font-body text-gray-700">
            If we haven't delivered a working system in 3 weeks, we extend for free.
          </p>
        </div>
      </div>
    </section>
  );
}
