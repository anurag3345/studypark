import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Seo } from "@/components/common/Seo";
import { PageBanner } from "@/components/common/PageBanner";
import { Container } from "@/components/ui/Container";
import { CtaSection } from "@/components/common/CtaSection";
import { services } from "@/data/services";
import { buildBreadcrumbSchema } from "@/lib/schema";

export default function Services() {
  return (
    <>
      <Seo
        title="Our Services"
        description="Explore Study Park Education Network's full range of services: counseling, university selection, admission assistance, documentation, visa support, and test preparation."
        path="/services"
        schema={[buildBreadcrumbSchema([{ label: "Services" }])]}
      />

      <PageBanner
        eyebrow="What we offer"
        title="Eleven services, one continuous journey"
        description="Each service below can stand alone — but together, they cover everything between deciding to study abroad and settling in once you're there."
        breadcrumbItems={[{ label: "Services" }]}
      />

      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            {services.map((service, index) => (
              <motion.article
                key={service.slug}
                id={service.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-5%" }}
                transition={{ duration: 0.4, delay: (index % 2) * 0.08 }}
                className="scroll-mt-28 rounded-2xl border border-surface-border bg-white p-6 shadow-card transition-shadow duration-300 hover:shadow-card-hover sm:p-7"
              >
                {/* Icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-navy-500 to-navy-700 text-white shadow-sm">
                  <service.icon aria-hidden="true" className="h-5 w-5" />
                </div>
                <h2 className="mt-5 font-display text-lg font-semibold text-ink sm:text-xl">
                  {service.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{service.description}</p>
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
              </motion.article>
            ))}
          </div>
        </Container>
      </section>

      <CtaSection
        title="Not sure which service you need first?"
        description="A single free counseling session usually answers that. Let's talk through your situation."
      />
    </>
  );
}
