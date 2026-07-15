import { motion } from "framer-motion";
import { Quote, GraduationCap, MapPin } from "lucide-react";
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

      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            {successStories.map((story, index) => (
              <motion.article
                key={story.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-5%" }}
                transition={{ duration: 0.4, delay: (index % 2) * 0.08 }}
                className="relative flex flex-col rounded-2xl border border-surface-border bg-white shadow-card overflow-hidden"
              >
                {/* Colored left accent bar */}
                <div className="absolute left-0 inset-y-0 w-1 bg-gradient-to-b from-navy-500 to-gold-400 rounded-l-2xl" />

                <div className="flex flex-col gap-4 p-6 pl-8 sm:p-8 sm:pl-10">
                  {/* Header row */}
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      {/* Avatar initials */}
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-navy-500 to-navy-700 font-display text-base font-semibold text-white shadow">
                        {story.name
                          .split(" ")
                          .map((part) => part[0])
                          .join("")}
                      </div>
                      <div>
                        <p className="font-display text-base font-semibold text-ink">{story.name}</p>
                        <div className="mt-0.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-ink-soft">
                          <span className="flex items-center gap-1">
                            <MapPin aria-hidden="true" className="h-3 w-3 text-navy-400" />
                            {story.destination}
                          </span>
                          <span className="flex items-center gap-1">
                            <GraduationCap aria-hidden="true" className="h-3 w-3 text-navy-400" />
                            {story.university}
                          </span>
                        </div>
                      </div>
                    </div>
                    <Badge className="shrink-0">{story.year}</Badge>
                  </div>

                  {/* Course tag */}
                  <p className="text-xs font-medium text-navy-500">{story.course}</p>

                  {/* Quote */}
                  <div className="relative">
                    <Quote
                      aria-hidden="true"
                      className="absolute -top-1 -left-1 h-5 w-5 text-navy-200 rotate-180"
                    />
                    <p className="pl-5 text-sm leading-relaxed text-ink-soft sm:text-base">
                      {story.story}
                    </p>
                  </div>
                </div>
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
