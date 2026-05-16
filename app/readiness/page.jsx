import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import HeroSection from '../../components/HeroSection';
import CTABanner from '../../components/CTABanner';
import ReadinessAssessment from '../../components/ReadinessAssessment';

export const metadata = {
  title: "AI Readiness Assessment | Discover Your Starting Point",
  description: "Free assessment to discover exactly where to start with AI. 5 minutes. Get your score.",
};

export default function ReadinessPage() {
  return (
    <>
      <NavBar />

      {/* S01 Hero */}
      <HeroSection
        headline="Discover Exactly Where to Start with AI"
        subheading="Free 5-minute assessment. Uncover your AI readiness across 7 dimensions."
        cta1Label="Take the Assessment"
        cta1Link="#assessment"
        variant="secondary"
      />

      {/* S02 Assessment Form */}
      <section id="assessment" className="py-16 bg-surface">
        <div className="container-max max-w-2xl">
          <ReadinessAssessment />
        </div>
      </section>

      {/* S03 How It Works */}
      <section className="py-16 bg-white">
        <div className="container-max max-w-2xl text-center">
          <h2 className="text-4xl font-display font-bold text-brand-dark mb-8">
            How This Works
          </h2>

          <div className="space-y-6 text-lg font-body text-gray-700">
            <p>
              <span className="font-bold text-brand-primary">Answer 21 questions</span> across 7 key AI readiness dimensions
            </p>
            <p>
              <span className="font-bold text-brand-primary">Get your score</span> immediately — maturity stage from Embryonic to Advanced
            </p>
            <p>
              <span className="font-bold text-brand-primary">See recommendations</span> for your next 3 quick wins
            </p>
            <p>
              <span className="font-bold text-brand-primary">Get personalized PDF</span> emailed to you with full results
            </p>
          </div>
        </div>
      </section>

      {/* S04 Results Display Placeholder */}
      <section className="py-16 bg-brand-light">
        <div className="container-max max-w-2xl text-center">
          <h2 className="text-4xl font-display font-bold text-brand-dark mb-8">
            What You'll Get
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-8">
              <p className="text-6xl font-display font-bold text-brand-primary mb-2">
                0–100
              </p>
              <p className="font-body text-gray-700">
                Your AI readiness score
              </p>
            </div>

            <div className="bg-white rounded-lg p-8">
              <p className="text-2xl font-display font-bold text-brand-dark mb-2">
                Maturity Stage
              </p>
              <p className="font-body text-gray-700">
                From Embryonic to Advanced
              </p>
            </div>

            <div className="bg-white rounded-lg p-8">
              <p className="text-2xl font-display font-bold text-brand-dark mb-2">
                Top Gaps
              </p>
              <p className="font-body text-gray-700">
                Your 3 biggest opportunities
              </p>
            </div>

            <div className="bg-white rounded-lg p-8">
              <p className="text-2xl font-display font-bold text-brand-dark mb-2">
                Quick Wins
              </p>
              <p className="font-body text-gray-700">
                Next 90 days action plan
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        headline="Ready to Know Your AI Readiness?"
        subheading="Free assessment. 5 minutes. Actionable insights."
        cta1Label="Take the Assessment"
        cta1Link="#assessment"
        cta2Label="Book a Call Instead"
        cta2Link="/contact"
      />

      <Footer />
    </>
  );
}
