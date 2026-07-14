import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, GraduationCap, Globe2, Users2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const stats = [
    { icon: GraduationCap, value: "3,200+", label: "Students Placed" },
    { icon: Globe2, value: "8", label: "Countries" },
    { icon: Users2, value: "150+", label: "Partner Universities" },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-navy-50/40 to-gold-50/30 pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* Subtle decorative circles */}
      <div
        aria-hidden="true"
        className="absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-navy-500/[0.04] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -left-20 bottom-0 h-[400px] w-[400px] rounded-full bg-gold-500/[0.06] blur-3xl"
      />

      <Container className="relative">
        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <motion.div
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-navy-200 bg-white px-4 py-1.5 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-gold-500 animate-pulse" aria-hidden="true" />
              <span className="font-mono text-xs uppercase tracking-[0.16em] text-navy-600">
                Trusted since 2018 · Kathmandu
              </span>
            </div>

            {/* Headline */}
            <h1 className="mt-6 text-display-xl font-semibold text-ink text-balance">
              Your trusted pathway to{" "}
              <span className="text-navy-500">global education</span>
            </h1>

            {/* Tagline */}
            <p className="mt-3 font-display text-lg font-medium text-gold-500 italic">
              "We Care Your Future"
            </p>

            {/* Description */}
            <p className="mt-5 max-w-lg text-base leading-relaxed text-ink-soft sm:text-lg">
              Study Park Education Network guides Nepali students from first counseling
              session to first day on campus — across 8 countries, 150+ partner
              universities, and every document in between.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button to="/contact" variant="gold" size="lg">
                Book Free Counseling
                <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
              </Button>
              <Button to="/destinations" variant="outline" size="lg">
                Explore Destinations
              </Button>
            </div>
          </motion.div>

          {/* Right side — Stats cards & decorative element */}
          <motion.div
            initial={shouldReduceMotion ? undefined : { opacity: 0, scale: 0.95 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="relative"
          >
            {/* Decorative background shape */}
            <div
              aria-hidden="true"
              className="absolute inset-0 -m-4 rounded-3xl bg-gradient-to-br from-navy-500/[0.08] to-gold-500/[0.06]"
            />

            <div className="relative grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-1 lg:gap-5">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={shouldReduceMotion ? undefined : { opacity: 0, y: 12 }}
                  animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-4 rounded-2xl border border-surface-border bg-white/80 p-5 shadow-card backdrop-blur-sm"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy-50 text-navy-500">
                    <stat.icon aria-hidden="true" className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-display text-2xl font-bold text-ink">{stat.value}</p>
                    <p className="text-sm text-ink-soft">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bottom accent bar */}
            <div className="mt-6 flex items-center gap-3 rounded-2xl border border-gold-100 bg-gold-50/60 px-5 py-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gold-500 text-white">
                <GraduationCap aria-hidden="true" className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-ink">Since 2018</p>
                <p className="text-xs text-ink-soft">Guiding students to global universities</p>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
