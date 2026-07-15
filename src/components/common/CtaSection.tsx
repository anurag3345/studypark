import { PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/siteConfig";

interface CtaSectionProps {
  title?: string;
  description?: string;
}

export function CtaSection({
  title = "Ready to begin your journey abroad?",
  description = "Book a free counseling session and let's build your personalized study-abroad plan together.",
}: CtaSectionProps) {
  return (
    <section className="bg-navy-800 py-16 sm:py-20">
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 rounded-2xl bg-navy-700/60 p-6 sm:p-10 lg:flex-row lg:items-center lg:p-12">
          <div className="max-w-xl">
            <h2 className="text-2xl font-semibold text-white text-balance sm:text-3xl">{title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-white/70 sm:text-base">{description}</p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:flex-row lg:w-auto lg:shrink-0">
            <Button to="/contact" variant="gold" size="lg" className="w-full sm:w-auto">
              Book Free Counseling
            </Button>
            <Button
              href={siteConfig.phoneHref}
              variant="outline"
              size="lg"
              className="w-full border-white/30 text-white hover:bg-white/10 sm:w-auto"
            >
              <PhoneCall aria-hidden="true" className="h-4 w-4" />
              Call Us
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
