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

      <section className="py-20 sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <SectionHeader eyebrow="Our story" title="A Kathmandu-based consultancy with a global network" />
          <div className="space-y-4 text-base leading-relaxed text-ink-soft">
            <p>
              Study Park Education Network Pvt. Ltd. is a Nepal-based education consultancy
              helping students pursue higher education abroad. We offer personalized
              counseling, university selection, admission assistance, visa processing, and
              documentation support, while partnering with reputed universities worldwide.
            </p>
            <p>
              Our office in Bagbazar / Kalikasthan has become a starting point for students
              across Kathmandu and beyond who want a plan they can trust — not just a stack of
              paperwork.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-surface-muted py-20 sm:py-28">
        <Container className="grid gap-6 sm:grid-cols-2">
          <Card className="bg-white">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-500 text-white">
              <Target aria-hidden="true" className="h-6 w-6" />
            </div>
            <h2 className="mt-5 font-display text-xl font-semibold text-ink">Our Mission</h2>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">
              Empower students with expert educational guidance and connect them with
              internationally recognized universities.
            </p>
          </Card>
          <Card className="bg-white">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-500 text-white">
              <Eye aria-hidden="true" className="h-6 w-6" />
            </div>
            <h2 className="mt-5 font-display text-xl font-semibold text-ink">Our Vision</h2>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">
              Become Nepal's most trusted education consultancy.
            </p>
          </Card>
        </Container>
      </section>

      <section className="bg-navy-800 py-16 sm:py-20">
        <Container>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat) => (
              <StatCounter key={stat.label} {...stat} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeader
            eyebrow="Our team"
            title="The people behind every application"
            align="center"
            className="mx-auto"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="flex flex-col items-center rounded-2xl border border-surface-border bg-white p-6 text-center shadow-card"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-navy-500 font-display text-lg font-semibold text-white">
                  {member.initials}
                </div>
                <p className="mt-4 text-sm font-semibold text-ink">{member.name}</p>
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
