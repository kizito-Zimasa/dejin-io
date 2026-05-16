// Before/after process flow diagram for service pages

function FlowStep({ label, time, isLast, variant }) {
  const isAfter = variant === 'after';
  return (
    <div className="flex flex-col items-center">
      <div className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl border ${
        isAfter
          ? 'bg-brand-light border-brand-primary border-opacity-30'
          : 'bg-white border-border'
      }`}>
        <div className={`w-2 h-2 rounded-full flex-shrink-0 ${
          isAfter ? 'bg-brand-primary' : 'bg-gray-300'
        }`} />
        <p className={`text-sm font-body flex-1 ${
          isAfter ? 'text-brand-dark font-medium' : 'text-gray-600'
        }`}>
          {label}
        </p>
        {time && (
          <span className={`text-xs font-body font-semibold px-2 py-0.5 rounded-full flex-shrink-0 ${
            isAfter
              ? 'bg-brand-primary text-white'
              : 'bg-gray-100 text-gray-500'
          }`}>
            {time}
          </span>
        )}
      </div>
      {!isLast && (
        <div className={`w-0.5 h-4 ${isAfter ? 'bg-brand-primary opacity-40' : 'bg-gray-200'}`} />
      )}
    </div>
  );
}

function FlowColumn({ title, steps, totalTime, variant }) {
  const isAfter = variant === 'after';
  return (
    <div className={`flex-1 rounded-2xl overflow-hidden border-2 ${
      isAfter ? 'border-brand-primary' : 'border-border'
    }`}>
      {/* Column header */}
      <div className={`px-5 py-4 ${
        isAfter ? 'bg-brand-primary' : 'bg-surface'
      }`}>
        <p className={`text-sm font-display font-bold uppercase tracking-wide ${
          isAfter ? 'text-white' : 'text-gray-500'
        }`}>
          {title}
        </p>
      </div>

      {/* Steps */}
      <div className="p-4 space-y-0">
        {steps.map((step, i) => (
          <FlowStep
            key={i}
            label={step.label}
            time={step.time}
            isLast={i === steps.length - 1}
            variant={variant}
          />
        ))}
      </div>

      {/* Total time footer */}
      <div className={`px-5 py-4 border-t ${
        isAfter ? 'border-brand-primary border-opacity-20 bg-brand-light' : 'border-border bg-white'
      }`}>
        <div className="flex items-center justify-between">
          <p className={`text-xs font-body ${isAfter ? 'text-brand-dark' : 'text-gray-400'}`}>
            Total time
          </p>
          <p className={`text-lg font-display font-bold ${
            isAfter ? 'text-brand-primary' : 'text-gray-400 line-through'
          }`}>
            {totalTime}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ProcessFlowDiagram({ before, after }) {
  return (
    <section className="py-16 bg-white">
      <div className="container-max max-w-4xl">
        <p className="text-xs font-body font-semibold text-brand-primary uppercase tracking-widest text-center mb-2">
          The transformation
        </p>
        <h2 className="text-3xl font-display font-bold text-brand-dark text-center mb-10">
          Before and after Dejin
        </h2>

        <div className="flex flex-col sm:flex-row gap-4 items-stretch">
          <FlowColumn
            title="Without Dejin"
            steps={before.steps}
            totalTime={before.totalTime}
            variant="before"
          />

          {/* VS divider */}
          <div className="flex sm:flex-col items-center justify-center gap-2 flex-shrink-0">
            <div className="hidden sm:block w-px flex-1 bg-border" />
            <div className="w-10 h-10 rounded-full border-2 border-border bg-white flex items-center justify-center flex-shrink-0">
              <span className="text-xs font-display font-bold text-gray-400">VS</span>
            </div>
            <div className="hidden sm:block w-px flex-1 bg-border" />
          </div>

          <FlowColumn
            title="With Dejin"
            steps={after.steps}
            totalTime={after.totalTime}
            variant="after"
          />
        </div>

        {/* Saving callout */}
        <div className="mt-6 bg-brand-dark rounded-xl px-6 py-4 flex items-center justify-between gap-4">
          <p className="text-gray-300 font-body text-sm">
            Time saved per interaction
          </p>
          <p className="text-brand-primary font-display font-bold text-2xl flex-shrink-0">
            {before.totalTime} → {after.totalTime}
          </p>
        </div>
      </div>
    </section>
  );
}
