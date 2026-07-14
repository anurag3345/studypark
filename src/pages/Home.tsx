import { Seo } from "@/components/common/Seo";
import { Hero } from "@/components/sections/home/Hero";
import { Intro } from "@/components/sections/home/Intro";
import { WhyChooseUs } from "@/components/sections/home/WhyChooseUs";
import { FeaturedServices } from "@/components/sections/home/FeaturedServices";
import { DestinationsSection } from "@/components/sections/home/DestinationsSection";
import { JourneyTimeline } from "@/components/sections/home/JourneyTimeline";
import { TestimonialsSection } from "@/components/sections/home/TestimonialsSection";
import { FaqSection } from "@/components/sections/home/FaqSection";
import { CtaSection } from "@/components/common/CtaSection";
import { ContactPreview } from "@/components/sections/home/ContactPreview";
import { buildFaqSchema } from "@/lib/schema";
import { faqs } from "@/data/faq";

export default function Home() {
  return (
    <>
      <Seo
        title="Your Trusted Pathway to Global Education"
        description="Study Park Education Network Pvt. Ltd. is Nepal's trusted study abroad consultancy, guiding students to Australia, Canada, USA, UK, Germany, Sweden, New Zealand, and South Korea since 2018."
        path="/"
        schema={[buildFaqSchema(faqs)]}
      />
      <Hero />
      <Intro />
      <WhyChooseUs />
      <FeaturedServices />
      <DestinationsSection />
      <JourneyTimeline />
      <TestimonialsSection />
      <FaqSection />
      <CtaSection />
      <ContactPreview />
    </>
  );
}
