import { motion } from "framer-motion";
import { GraduationCap, MapPin } from "lucide-react";
import { Seo } from "@/components/common/Seo";
import { PageBanner } from "@/components/common/PageBanner";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { CtaSection } from "@/components/common/CtaSection";
import { successStories } from "@/data/successStories";
import { buildBreadcrumbSchema } from "@/lib/schema";

export default function SuccessStories() {
  return (
    <>
      <Seo
        title="Success Stories"
        description="Read real success stories from students placed by Study Park Education Network across Canada, Australia, UK, Germany, New Zealand, and the USA."
        path="/success-stories"
        schema={[buildBreadcrumbSchema([{ label: "Success Stories" }])]}
      />

      <PageBanner
        eyebrow="Proof, not promises"
        title="Students who trusted us with their next chapter"
        description="Every story here started the same way every student's does — with a first counseling session and a lot of uncertainty."
        breadcrumbItems={[{ label: "Success Stories" }]}
      />

      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            {successStories.map((story, index) => (
              <motion.article
                key={story.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.4, delay: (index % 2) * 0.08 }}
                className="flex flex-col rounded-2xl border border-surface-border bg-white p-7 shadow-card"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-navy-500 font-display text-base font-semibold text-white">
                    {story.name
                      .split(" ")
                      .map((part) => part[0])
                      .join("")}
                  </div>
                  <Badge>{story.year}</Badge>
                </div>
                <h2 className="mt-4 font-display text-lg font-semibold text-ink">{story.name}</h2>
                <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-ink-soft">
                  <span className="flex items-center gap-1">
                    <MapPin aria-hidden="true" className="h-3.5 w-3.5 text-navy-400" />
                    {story.destination}
                  </span>
                  <span className="flex items-center gap-1">
                    <GraduationCap aria-hidden="true" className="h-3.5 w-3.5 text-navy-400" />
                    {story.university} — {story.course}
                  </span>
                </div>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-soft">{story.story}</p>
              </motion.article>
            ))}
          </div>
        </Container>
      </section>

      <CtaSection
        title="Your story could start here"
        description="Book a free counseling session and let's find out what your path abroad looks like."
      />
    </>
  );
}
