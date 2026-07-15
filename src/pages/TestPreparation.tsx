import { CheckCircle2 } from "lucide-react";
import { Seo } from "@/components/common/Seo";
import { PageBanner } from "@/components/common/PageBanner";
import { Container } from "@/components/ui/Container";
import { CtaSection } from "@/components/common/CtaSection";
import { services } from "@/data/services";
import { buildBreadcrumbSchema } from "@/lib/schema";

const testPrepSlugs = ["ielts-preparation", "pte-preparation", "sat-preparation"];
const testPrepServices = services.filter((service) => testPrepSlugs.includes(service.slug));

export default function TestPreparation() {
  return (
    <>
      <Seo
        title="Test Preparation"
        description="IELTS, PTE, and SAT preparation classes at Study Park Education Network — structured coaching, mock tests, and one-on-one feedback in Birtamode."
        path="/test-preparation"
        schema={[buildBreadcrumbSchema([{ label: "Test Preparation" }])]}
      />

      <PageBanner
        eyebrow="Score what you need"
        title="Test preparation built around your target band, not a generic syllabus"
        description="Every study-abroad application depends on the right test score. Our batches are small, feedback is direct, and practice is done on real exam formats."
        breadcrumbItems={[{ label: "Test Preparation" }]}
      />

      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid gap-6 lg:grid-cols-3">
            {testPrepServices.map((service) => (
              <div
                key={service.slug}
                className="flex flex-col rounded-2xl border border-surface-border bg-white p-6 shadow-card transition-shadow duration-300 hover:shadow-card-hover sm:p-7"
              >
                {/* Icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-navy-500 to-navy-700 text-white shadow-sm">
                  <service.icon aria-hidden="true" className="h-5 w-5" />
                </div>
                <h2 className="mt-5 font-display text-lg font-semibold text-ink sm:text-xl">
                  {service.title}
                </h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">
                  {service.description}
                </p>
                <ul className="mt-5 space-y-2 border-t border-surface-border pt-5">
                  {service.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-2.5 text-sm text-ink">
                      <CheckCircle2
                        aria-hidden="true"
                        className="mt-0.5 h-4 w-4 shrink-0 text-navy-500"
                      />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-surface-muted py-16 sm:py-24">
        <Container className="max-w-3xl">
          <div className="rounded-2xl border border-surface-border bg-white p-8 shadow-card text-center sm:p-10">
            <h2 className="text-xl font-semibold text-balance sm:text-2xl">
              Which test should you take?
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-ink-soft sm:text-base">
              IELTS and PTE are both accepted for most English-speaking destinations — PTE tends to
              suit students more comfortable with computer-based exams, while IELTS remains the
              standard for many UK and Australian universities. SAT is required mainly for
              undergraduate applications to the USA. Not sure which applies to you? That's exactly
              what your first counseling session will clarify.
            </p>
          </div>
        </Container>
      </section>

      <CtaSection
        title="Ready to book a diagnostic test?"
        description="Start with a free diagnostic session so we know exactly where your preparation should begin."
      />
    </>
  );
}
