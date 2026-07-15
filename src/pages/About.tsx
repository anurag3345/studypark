import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";
import { Seo } from "@/components/common/Seo";
import { PageBanner } from "@/components/common/PageBanner";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Card } from "@/components/ui/Card";
import { CtaSection } from "@/components/common/CtaSection";
import { StatCounter } from "@/components/common/StatCounter";
import { team } from "@/data/team";
import { stats } from "@/data/stats";
import { buildBreadcrumbSchema } from "@/lib/schema";

export default function About() {
  return (
    <>
      <Seo
        title="About Us"
        description="Learn about Study Park Education Network Pvt. Ltd. — Nepal's trusted study abroad consultancy since 2018, our mission, vision, and the team behind thousands of successful placements."
        path="/about"
        schema={[buildBreadcrumbSchema([{ label: "About" }])]}
      />

      <PageBanner
        eyebrow="About Study Park"
        title="Built on trust, run by people who've done this thousands of times"
        description="Since 2018, we've guided Nepali students through every stage of studying abroad — from a first uncertain conversation to a confirmed visa."
        breadcrumbItems={[{ label: "About" }]}
      />

      {/* Story */}
      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-20">
            <SectionHeader eyebrow="Our story" title="A trusted consultancy with a global network" />
            <div className="space-y-4 text-base leading-relaxed text-ink-soft">
              <p>
                Study Park Education Network is a premier education consultancy helping students pursue higher education abroad.
                We offer personalized counseling, university selection, admission assistance, visa processing, and documentation support,
                while partnering with reputed universities worldwide.
              </p>
              <p>
                With our prominent Birtamode Branch in Athiti Sadan, Jhapa,
                we have become the starting point for students across Nepal who want a plan they can trust — not just a stack of paperwork.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Mission & Vision */}
      <section className="bg-surface-muted py-16 sm:py-20">
        <Container className="grid gap-6 sm:grid-cols-2">
          <Card className="bg-white">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-navy-500 to-navy-700 text-white shadow-sm">
              <Target aria-hidden="true" className="h-5 w-5" />
            </div>
            <h2 className="mt-5 font-display text-lg font-semibold text-ink sm:text-xl">Our Mission</h2>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">
              Empower students with expert educational guidance and connect them with
              internationally recognized universities.
            </p>
          </Card>
          <Card className="bg-white">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-navy-500 to-navy-700 text-white shadow-sm">
              <Eye aria-hidden="true" className="h-5 w-5" />
            </div>
            <h2 className="mt-5 font-display text-lg font-semibold text-ink sm:text-xl">Our Vision</h2>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">
              Become Nepal's most trusted education consultancy.
            </p>
          </Card>
        </Container>
      </section>

      {/* Stats */}
      <section className="bg-navy-800 py-14 sm:py-20">
        <Container>
          <div className="grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4">
            {stats.map((stat) => (
              <StatCounter key={stat.label} {...stat} />
            ))}
          </div>
        </Container>
      </section>

      {/* Team */}
      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeader
            eyebrow="Our team"
            title="The people behind every application"
            align="center"
            className="mx-auto"
          />
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-5">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-5%" }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="flex flex-col items-center rounded-2xl border border-surface-border bg-white p-5 text-center shadow-card"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-navy-500 to-navy-700 font-display text-base font-semibold text-white shadow">
                  {member.initials}
                </div>
                <p className="mt-3 text-sm font-semibold text-ink leading-tight">{member.name}</p>
                <p className="mt-1 text-xs text-ink-soft">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <CtaSection />
    </>
  );
}
