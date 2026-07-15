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
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-navy-50/40 to-gold-50/30 pt-28 pb-16 sm:pt-40 sm:pb-28">
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
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
          <motion.div
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-navy-200 bg-white px-4 py-1.5 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-gold-500 animate-pulse" aria-hidden="true" />
              <span className="font-mono text-xs uppercase tracking-[0.16em] text-navy-600">
                Trusted since 2018 · Birtamode
              </span>
            </div>

            {/* Headline */}
            <h1 className="mt-5 text-3xl font-semibold text-ink text-balance sm:text-4xl lg:text-display-xl">
              Your trusted pathway to{" "}
              <span className="text-navy-500">global education</span>
            </h1>

            {/* Tagline */}
            <p className="mt-3 font-display text-base font-medium text-gold-500 italic sm:text-lg">
              "We Care Your Future"
            </p>

            {/* Description */}
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-ink-soft sm:text-base lg:text-lg">
              Study Park Education Network guides Nepali students from first counseling
              session to first day on campus — across 8 countries, 150+ partner
              universities, and every document in between.
            </p>

            {/* CTAs */}
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button to="/contact" variant="gold" size="lg" className="w-full sm:w-auto">
                Book Free Counseling
                <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
              </Button>
              <Button to="/destinations" variant="outline" size="lg" className="w-full sm:w-auto">
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

            {/* On mobile: 3-col horizontal row. On lg: vertical stack */}
            <div className="relative grid grid-cols-3 gap-3 sm:gap-4 lg:grid-cols-1 lg:gap-5">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={shouldReduceMotion ? undefined : { opacity: 0, y: 12 }}
                  animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex flex-col items-center gap-2 rounded-2xl border border-surface-border bg-white/80 p-3 shadow-card backdrop-blur-sm text-center sm:flex-row sm:gap-4 sm:p-5 sm:text-left lg:flex-row lg:text-left"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-navy-50 text-navy-500 sm:h-12 sm:w-12">
                    <stat.icon aria-hidden="true" className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <div>
                    <p className="font-display text-lg font-bold text-ink sm:text-2xl">{stat.value}</p>
                    <p className="text-xs text-ink-soft sm:text-sm">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bottom accent bar */}
            <div className="mt-4 flex items-center gap-3 rounded-2xl border border-gold-100 bg-gold-50/60 px-4 py-3 sm:mt-6 sm:px-5 sm:py-4">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gold-500 text-white sm:h-10 sm:w-10">
                <GraduationCap aria-hidden="true" className="h-4 w-4 sm:h-5 sm:w-5" />
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
