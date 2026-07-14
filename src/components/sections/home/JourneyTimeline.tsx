import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/common/SectionHeader";
import { journeySteps } from "@/data/journey";

export function JourneyTimeline() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeader
          eyebrow="The process"
          title="Your journey, from first conversation to first day abroad"
          description="Nine stages, one point of contact throughout. Here's exactly what happens, in order."
          align="center"
          className="mx-auto"
        />

        <ol className="relative mt-16 space-y-10 sm:space-y-0">
          {/* Connecting spine */}
          <div aria-hidden="true" className="absolute left-6 top-2 bottom-2 hidden w-px bg-surface-border sm:block" />

          {journeySteps.map((item, index) => (
            <motion.li
              key={item.step}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="relative flex gap-5 pb-8 sm:pb-10"
            >
              <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-navy-500 bg-white font-mono text-sm font-semibold text-navy-600">
                {String(item.step).padStart(2, "0")}
              </div>
              <div className="flex-1 rounded-xl border border-surface-border bg-white p-5 shadow-card sm:mt-0">
                <div className="flex items-center gap-2.5">
                  <item.icon aria-hidden="true" className="h-5 w-5 text-navy-500" />
                  <h3 className="font-display text-lg font-semibold text-ink">{item.title}</h3>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.description}</p>
              </div>
            </motion.li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
