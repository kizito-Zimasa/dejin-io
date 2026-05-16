import NavBar from '../../../components/NavBar';
import Footer from '../../../components/Footer';
import HeroSection from '../../../components/HeroSection';
import MetricCard from '../../../components/MetricCard';
import CTABanner from '../../../components/CTABanner';
import IndustryChips from '../../../components/IndustryChips';
import ChatDemo from '../../../components/ChatDemo';
import ProcessFlowDiagram from '../../../components/ProcessFlowDiagram';
import { chatbotContent } from '../../../content/chatbot';

const chatbotFlow = {
  before: {
    steps: [
      { label: 'Customer sends inquiry' },
      { label: 'Added to staff queue', time: '+2 min' },
      { label: 'Staff picks up ticket', time: '+15 min' },
      { label: 'Looks up account & policy', time: '+3 min' },
      { label: 'Types and sends response', time: '+3 min' },
    ],
    totalTime: '~23 min',
  },
  after: {
    steps: [
      { label: 'Customer sends inquiry' },
      { label: 'Amara reads & understands', time: '<1 sec' },
      { label: 'Checks live policy data', time: '<1 sec' },
      { label: 'Responds accurately', time: '<1 sec' },
    ],
    totalTime: '~30 sec',
  },
};

export const metadata = {
  title: "Customer Service Chatbot | Dejin",
  description: "AI chatbot that handles 60–80% of support volume. Deployed in 3 weeks.",
};

export default function ChatbotPage() {
  const content = chatbotContent;

  return (
    <>
      <NavBar />

      {/* S01 Hero & Demo */}
      <section className="min-h-screen flex items-center justify-center pt-20 pb-16 bg-gradient-to-br from-brand-light to-white">
        <div className="container-max max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Hero Text */}
            <div>
              <h1 className="text-5xl md:text-6xl font-display font-bold text-brand-dark mb-6 leading-tight">
                {content.hero.headline}
              </h1>
              <p className="text-xl text-gray-700 font-body mb-8">
                {content.hero.subheading}
              </p>
              <IndustryChips industries={content.hero.industries} />
            </div>

            {/* Right: Chat Demo */}
            <ChatDemo />
          </div>
        </div>
      </section>

      {/* S02 Process flow */}
      <ProcessFlowDiagram before={chatbotFlow.before} after={chatbotFlow.after} />

      {/* S03 The Problem */}
      <section className="py-16 bg-surface">
        <div className="container-max">
          <h2 className="text-4xl font-display font-bold text-brand-dark mb-4 text-center">
            {content.problem.headline}
          </h2>
          <p className="text-lg text-gray-600 font-body mb-12 text-center max-w-2xl mx-auto">
            {content.problem.description}
          </p>

          {/* Pain Points */}
          <div className="grid md:grid-cols-3 gap-8">
            {content.problem.painPoints.map((point) => (
              <div key={point.title} className="bg-white rounded-lg p-8">
                <h3 className="text-2xl font-display font-bold text-brand-dark mb-3">
                  {point.title}
                </h3>
                <p className="text-gray-600 font-body">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* S04 The Solution */}
      <section className="py-16 bg-white">
        <div className="container-max">
          <h2 className="text-4xl font-display font-bold text-brand-dark mb-6 text-center">
            {content.solution.headline}
          </h2>
          <p className="text-lg text-gray-600 font-body mb-12 text-center max-w-2xl mx-auto">
            {content.solution.description}
          </p>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {content.solution.features.map((feature) => (
              <div key={feature.title} className="p-8 bg-surface rounded-lg">
                <h3 className="text-2xl font-display font-bold text-brand-dark mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 font-body">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* S05 Outcomes */}
      <section className="py-16 bg-brand-light">
        <div className="container-max">
          <h2 className="text-4xl font-display font-bold text-brand-dark mb-12 text-center">
            {content.outcomes.headline}
          </h2>

          {/* Metrics Grid */}
          <div className="grid md:grid-cols-4 gap-6">
            {content.outcomes.metrics.map((metric) => (
              <MetricCard
                key={metric.label}
                value={metric.value}
                label={metric.label}
                variant="highlight"
              />
            ))}
          </div>
        </div>
      </section>

      {/* S06 Case Study */}
      <section className="py-16 bg-white">
        <div className="container-max max-w-3xl">
          <p className="text-xs font-body font-semibold text-brand-primary uppercase tracking-widest text-center mb-2">
            In the field
          </p>
          <h2 className="text-4xl font-display font-bold text-center text-brand-dark mb-12">
            From 4-hour claim queries to 8 seconds
          </h2>

          <div className="bg-surface rounded-2xl border border-border p-8 md:p-10">
            <span className="text-xs font-body font-semibold bg-brand-light text-brand-dark px-3 py-1 rounded-full">
              Insurance · Kenya
            </span>

            <div className="grid md:grid-cols-2 gap-8 mt-6 mb-10">
              <div>
                <p className="text-xs font-body font-semibold text-gray-500 uppercase tracking-wider mb-2">
                  The Challenge
                </p>
                <p className="font-body text-gray-700 leading-relaxed">
                  A Kenyan insurer was handling 300+ daily status inquiries by phone. Agents spent 70% of their day answering the same question.
                </p>
              </div>
              <div>
                <p className="text-xs font-body font-semibold text-gray-500 uppercase tracking-wider mb-2">
                  The Outcome
                </p>
                <p className="font-body text-gray-700 leading-relaxed">
                  AI status chatbot deployed in 3 weeks. 82% of queries now resolved without human intervention. Agents refocused on complex cases.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 border-t border-border pt-8">
              {[
                { value: '82%', label: 'Query automation' },
                { value: '3 wks', label: 'Time to deploy' },
                { value: '4h → 8s', label: 'Response time' },
              ].map((m) => (
                <div key={m.label} className="text-center">
                  <p className="text-2xl font-display font-bold text-brand-dark mb-1">{m.value}</p>
                  <p className="text-sm font-body text-gray-500">{m.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* S07 Timeline & Investment */}
      <section className="py-16 bg-white">
        <div className="container-max max-w-2xl">
          <h2 className="text-4xl font-display font-bold text-brand-dark mb-8 text-center">
            {content.timeline.headline}
          </h2>

          {/* Investment Box */}
          <div className="bg-surface rounded-lg p-12 mb-8 text-center">
            <p className="text-gray-600 font-body mb-4">Investment</p>
            <p className="text-5xl font-display font-bold text-brand-dark mb-4">
              {content.timeline.investment}
            </p>
            <p className="text-gray-600 font-body">{content.timeline.duration}</p>
          </div>

          {/* What's Included */}
          <div className="bg-white border border-border rounded-lg p-8">
            <h3 className="text-2xl font-display font-bold text-brand-dark mb-6">
              What's Included
            </h3>
            <ul className="space-y-4">
              {content.timeline.includes.map((item) => (
                <li key={item} className="flex items-start gap-3 font-body text-gray-700">
                  <span className="text-brand-primary font-bold mt-1">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Guarantee */}
          <div className="bg-success bg-opacity-10 border-l-4 border-success rounded-lg p-8 mt-8">
            <p className="text-lg font-display font-bold text-success">
              {content.timeline.guarantee}
            </p>
          </div>
        </div>
      </section>

      {/* S07 CTA */}
      <CTABanner
        headline={content.cta.headline}
        cta1Label={content.cta.cta}
        cta1Link={content.cta.link}
      />

      <Footer />
    </>
  );
}
