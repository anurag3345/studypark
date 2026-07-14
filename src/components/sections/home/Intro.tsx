import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/common/SectionHeader";

export function Intro() {
  return (
    <section className="py-20 sm:py-28">
      <Container className="grid gap-12 lg:grid-cols-2 lg:gap-20">
        <SectionHeader
          eyebrow="Who we are"
          title="An education consultancy built around one relationship at a time"
        />
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.5 }}
          className="space-y-4 text-base leading-relaxed text-ink-soft"
        >
          <p>
            Founded in 2018, Study Park Education Network Pvt. Ltd. has helped thousands of
            students across Nepal turn the ambition of studying abroad into an accepted offer
            letter and a visa stamp. We offer personalized counseling, university selection,
            admission assistance, visa processing, and documentation support, backed by
            partnerships with reputed universities worldwide.
          </p>
          <p>
            We don't believe in one-size-fits-all applications. Every student who walks through
            our doors in Bagbazar gets a plan built around their own academic record, budget,
            and goals — not a template pulled off a shelf.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
