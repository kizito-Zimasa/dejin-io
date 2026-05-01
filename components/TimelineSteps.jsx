export default function TimelineSteps({
  steps = [
    {
      title: 'Week 1: Understand',
      items: ['Discovery workshops', 'System design', 'Integration planning'],
    },
    {
      title: 'Week 2: Build',
      items: ['Development', 'API integration', 'Testing & refinement'],
    },
    {
      title: 'Week 3: Launch',
      items: ['Deployment', 'Team handoff', 'Post-launch support begins'],
    },
    {
      title: 'Weeks 4–5: Support',
      items: ['Monitoring', 'Optimization', 'Documentation'],
    },
  ],
}) {
  return (
    <section className="py-16 bg-surface rounded-lg">
      <div className="container-max">
        <div className="space-y-8">
          {steps.map((step, index) => (
            <div key={step.title} className="flex gap-6">
              {/* Step Number */}
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-brand-primary text-white flex items-center justify-center font-display font-bold text-lg">
                  {index + 1}
                </div>
              </div>

              {/* Step Content */}
              <div className="flex-grow">
                <h4 className="text-xl font-display font-bold text-brand-dark mb-3">
                  {step.title}
                </h4>
                <ul className="space-y-2">
                  {step.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 font-body text-gray-700">
                      <span className="text-brand-primary font-bold mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
