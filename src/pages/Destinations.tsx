import { motion } from "framer-motion";
import { Seo } from "@/components/common/Seo";
import { PageBanner } from "@/components/common/PageBanner";
import { Container } from "@/components/ui/Container";
import { DestinationCard } from "@/components/common/DestinationCard";
import { DestinationsMap } from "@/components/common/DestinationsMap";
import { CtaSection } from "@/components/common/CtaSection";
import { destinations } from "@/data/destinations";
import { buildBreadcrumbSchema } from "@/lib/schema";

export default function Destinations() {
  return (
    <>
      <Seo
        title="Study Destinations"
        description="Compare study abroad destinations supported by Study Park Education Network: Australia, Canada, USA, UK, Germany, Sweden, New Zealand, and South Korea."
        path="/destinations"
        schema={[buildBreadcrumbSchema([{ label: "Destinations" }])]}
      />

      <PageBanner
        eyebrow="Where you could study"
        title="Eight destinations, each suited to a different kind of student"
        description="Tuition, intake timing, and course strengths vary widely by country. Here's what to expect from each."
        breadcrumbItems={[{ label: "Destinations" }]}
      />

      {/* World map — hidden on small screens to save space */}
      <section className="hidden bg-navy-800 pb-20 sm:block sm:pb-28">
        <Container>
          <DestinationsMap />
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {destinations.map((destination, index) => (
              <motion.div
                key={destination.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-5%" }}
                transition={{ duration: 0.45, delay: (index % 3) * 0.08 }}
              >
                <DestinationCard destination={destination} />
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <CtaSection
        title="Still deciding between countries?"
        description="That's exactly what our counseling sessions are for — a side-by-side comparison built around your goals."
      />
    </>
  );
}
