import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import HeroSection from '../../components/HeroSection';
import TimelineSteps from '../../components/TimelineSteps';
import CTABanner from '../../components/CTABanner';

export const metadata = {
  title: "Our Delivery Model | The 3-Week Method",
  description: "From AI ambition to working systems in 3 weeks. Guaranteed.",
};

export default function MethodPage() {
  return (
    <>
      <NavBar />

      {/* S01 Hero */}
      <HeroSection
        headline="From AI ambition to working systems — guided."
        subheading="We deliver working AI systems in 3 weeks. Then we support you beyond launch."
        variant="secondary"
      />

      {/* S02 The 3-Week Model */}
      <TimelineSteps />

      {/* S03 How We Differ */}
      <section className="py-16 bg-white">
        <div className="container-max">
          <h2 className="text-4xl font-display font-bold text-center text-brand-dark mb-12">
            How Dejin Differs
          </h2>

          {/* Comparison Table */}
          <div className="overflow-x-auto">
            <table className="w-full border border-border rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-surface">
                  <th className="p-4 text-left font-display font-bold text-brand-dark">
                    Approach
                  </th>
                  <th className="p-4 text-left font-display font-bold text-brand-dark">
                    Timeline
                  </th>
                  <th className="p-4 text-left font-display font-bold text-brand-dark">
                    Cost
                  </th>
                  <th className="p-4 text-left font-display font-bold text-brand-dark">
                    Guarantee
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-border">
                  <td className="p-4 font-body font-bold text-brand-primary">Dejin</td>
                  <td className="p-4 font-body">3 weeks + ongoing support</td>
                  <td className="p-4 font-body">$15–22k</td>
                  <td className="p-4 font-body">Results guaranteed or we extend free</td>
                </tr>
                <tr className="border-t border-border bg-gray-50">
                  <td className="p-4 font-body">Typical Consulting</td>
                  <td className="p-4 font-body">3–6 months</td>
                  <td className="p-4 font-body">$50–200k+</td>
                  <td className="p-4 font-body">Recommendations, no guarantee</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="p-4 font-body">Off-the-Shelf SaaS</td>
                  <td className="p-4 font-body">Months to configure</td>
                  <td className="p-4 font-body">$10k+ annually</td>
                  <td className="p-4 font-body">Platform limitations</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        headline="Ready to Build Your First Working System?"
        subheading="3 weeks. Guaranteed. Let's start."
        cta1Label="Book a Discovery Call"
        cta1Link="/contact"
        cta2Label="See Our Quick Wins"
        cta2Link="/#quick-wins"
      />

      <Footer />
    </>
  );
}
