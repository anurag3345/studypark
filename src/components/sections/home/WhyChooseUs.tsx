import { motion } from "framer-motion";
import { HeartHandshake, Globe2, FileCheck2, Users2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Card, CardDescription, CardTitle } from "@/components/ui/Card";
import { SectionHeader } from "@/components/common/SectionHeader";

const reasons = [
  {
    icon: HeartHandshake,
    title: "Personalized counseling",
    description: "No two students get the same plan — your goals and budget shape every recommendation.",
  },
  {
    icon: Globe2,
    title: "150+ partner universities",
    description: "Direct partnerships across 8 countries mean faster processing and better-informed advice.",
  },
  {
    icon: FileCheck2,
    title: "End-to-end support",
    description: "From documentation to visa filing to pre-departure briefing, one team sees you through.",
  },
  {
    icon: Users2,
    title: "8 years of trust",
    description: "Thousands of students placed since 2018, many referred by past students' families.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-surface-muted py-20 sm:py-28">
      <Container>
        <SectionHeader
          eyebrow="Why Study Park"
          title="Guidance that treats your future like it matters"
          description="We built our process around the things that actually cause applications to fail — and worked backward from there."
          align="center"
          className="mx-auto"
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <Card className="h-full bg-white">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-navy-500 to-navy-700 text-white shadow-sm">
                  <reason.icon aria-hidden="true" className="h-5 w-5" />
                </div>
                <CardTitle className="mt-5 text-lg">{reason.title}</CardTitle>
                <CardDescription>{reason.description}</CardDescription>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
