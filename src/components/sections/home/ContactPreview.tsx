import { MapPin, PhoneCall, Mail, Clock } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/common/SectionHeader";
import { siteConfig } from "@/lib/siteConfig";

const contactPoints = [
  { icon: MapPin, label: "Visit us", value: `${siteConfig.address.line1}, ${siteConfig.address.line2}` },
  { icon: PhoneCall, label: "Call us", value: siteConfig.phone, href: siteConfig.phoneHref },
  { icon: Mail, label: "Email us", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { icon: Clock, label: "Office hours", value: siteConfig.openingHours },
];

export function ContactPreview() {
  return (
    <section className="py-20 sm:py-28">
      <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionHeader
            eyebrow="Get in touch"
            title="Have a question before you commit?"
            description="Drop by our Bagbazar office, call us directly, or send a message — a real counselor responds, not a bot."
          />
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {contactPoints.map((point) => (
              <div key={point.label} className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-navy-50 text-navy-500">
                  <point.icon aria-hidden="true" className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-ink-soft">{point.label}</p>
                  {point.href ? (
                    <a href={point.href} className="text-sm font-medium text-ink hover:text-navy-500">
                      {point.value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium text-ink">{point.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
          <Button to="/contact" size="lg" className="mt-8">
            Go to contact page
          </Button>
        </div>

        <div className="overflow-hidden rounded-2xl border border-surface-border shadow-card">
          <iframe
            title="Study Park Education Network office location map"
            src="https://www.google.com/maps?q=Bagbazar,Kathmandu,Nepal&output=embed"
            className="h-80 w-full sm:h-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </Container>
    </section>
  );
}
