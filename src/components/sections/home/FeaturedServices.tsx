import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/common/SectionHeader";
import { ServiceCard } from "@/components/common/ServiceCard";
import { services } from "@/data/services";

export function FeaturedServices() {
  const featured = services.slice(0, 6);

  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeader
            eyebrow="What we do"
            title="Every step of the study-abroad process, covered"
            description="From your first counseling session to the day you board your flight, our services are designed to remove friction at every step."
          />
          <Button to="/services" variant="outline" className="shrink-0">
            View all services
          </Button>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((service, index) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
