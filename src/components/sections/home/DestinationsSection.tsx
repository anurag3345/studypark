import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { StatCounter } from "@/components/common/StatCounter";
import { DestinationsMap } from "@/components/common/DestinationsMap";
import { destinations } from "@/data/destinations";
import { stats } from "@/data/stats";

export function DestinationsSection() {
  return (
    <section className="bg-navy-800 py-20 sm:py-28">
      <Container className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.5 }}
        >
          <p className="eyebrow text-gold-300">Where you could go</p>
          <h2 className="mt-3 text-display-md font-semibold text-white text-balance">
            Eight countries, one consistent standard of support
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/70">
            Each destination has its own intakes, costs, and course strengths — we'll help you
            weigh them against your goals.
          </p>

          <ul className="mt-6 flex flex-wrap gap-2">
            {destinations.map((destination) => (
              <li
                key={destination.slug}
                className="flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-sm text-white/80"
              >
                <span aria-hidden="true">{destination.flagEmoji}</span>
                {destination.country}
              </li>
            ))}
          </ul>

          <Button to="/destinations" variant="gold" size="lg" className="mt-8">
            Explore all destinations
            <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6 }}
        >
          <DestinationsMap />
        </motion.div>
      </Container>

      <Container className="mt-16 grid grid-cols-2 gap-8 border-t border-white/10 pt-10 lg:grid-cols-4">
        {stats.map((stat) => (
          <StatCounter key={stat.label} {...stat} />
        ))}
      </Container>
    </section>
  );
}
