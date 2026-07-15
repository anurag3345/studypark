import { MapPin, PhoneCall, Clock } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/common/SectionHeader";
import { siteConfig } from "@/lib/siteConfig";

export function ContactPreview() {
  return (
    <section className="py-20 sm:py-28">
      <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionHeader
            eyebrow="Get in touch"
            title="Have a question before you commit?"
            description="Drop by our offices, call us directly, or send a message — our counselors are ready to help."
          />
          
          <div className="mt-8 space-y-6">
            {/* Birtamode office preview */}
            <div className="rounded-xl border border-surface-border bg-white p-4 shadow-sm">
              <h3 className="text-xs font-bold uppercase tracking-wider text-gold-600">
                {siteConfig.branches.birtamode.name}
              </h3>
              <div className="mt-3 grid gap-4 sm:grid-cols-2">
                <div className="flex items-start gap-2.5">
                  <MapPin className="h-4 w-4 shrink-0 text-navy-400 mt-0.5" />
                  <p className="text-xs text-ink-soft">
                    {siteConfig.branches.birtamode.address.line1}, {siteConfig.branches.birtamode.address.line2}
                  </p>
                </div>
                <div className="flex items-center gap-2.5">
                  <PhoneCall className="h-4 w-4 shrink-0 text-navy-400" />
                  <a href={siteConfig.branches.birtamode.phoneHref} className="text-xs font-medium text-ink hover:text-navy-500 transition-colors">
                    {siteConfig.branches.birtamode.phone}
                  </a>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-2 text-xs text-ink-soft">
              <Clock className="h-4 w-4" />
              <span>{siteConfig.openingHours}</span>
            </div>
          </div>

          <Button to="/contact" size="lg" className="mt-8">
            Go to contact page
          </Button>
        </div>

        <div className="overflow-hidden rounded-2xl border border-surface-border shadow-card">
          <iframe
            title="Study Park Birtamode office location map"
            src={siteConfig.branches.birtamode.mapUrl}
            className="h-80 w-full sm:h-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </Container>
    </section>
  );
}
