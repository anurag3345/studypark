import { MapPin, PhoneCall, Mail, Clock } from "lucide-react";
import { Seo } from "@/components/common/Seo";
import { PageBanner } from "@/components/common/PageBanner";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/common/ContactForm";
import { siteConfig } from "@/lib/siteConfig";
import { buildBreadcrumbSchema } from "@/lib/schema";

const contactPoints = [
  { icon: MapPin, label: "Office address", value: `${siteConfig.address.line1}, ${siteConfig.address.line2}` },
  { icon: PhoneCall, label: "Phone", value: siteConfig.phone, href: siteConfig.phoneHref },
  { icon: Mail, label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { icon: Clock, label: "Office hours", value: siteConfig.openingHours },
];

export default function Contact() {
  return (
    <>
      <Seo
        title="Contact Us"
        description="Get in touch with Study Park Education Network Pvt. Ltd. in Bagbazar, Kathmandu. Book a free counseling session by phone, email, or our contact form."
        path="/contact"
        schema={[buildBreadcrumbSchema([{ label: "Contact" }])]}
      />

      <PageBanner
        eyebrow="Let's talk"
        title="Book your free counseling session"
        description="Fill out the form below, call us directly, or visit our Bagbazar office — whichever is easiest for you."
        breadcrumbItems={[{ label: "Contact" }]}
      />

      <section className="py-20 sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-[0.55fr_1fr]">
          <div>
            <h2 className="font-display text-xl font-semibold text-ink">Reach us directly</h2>
            <ul className="mt-6 space-y-5">
              {contactPoints.map((point) => (
                <li key={point.label} className="flex items-start gap-3">
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
                </li>
              ))}
            </ul>

            <div className="mt-8 overflow-hidden rounded-2xl border border-surface-border shadow-card">
              <iframe
                title="Study Park Education Network office location map"
                src="https://www.google.com/maps?q=Bagbazar,Kathmandu,Nepal&output=embed"
                className="h-64 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="rounded-2xl border border-surface-border bg-white p-7 shadow-card sm:p-9">
            <h2 className="font-display text-xl font-semibold text-ink">Send us a message</h2>
            <p className="mt-2 text-sm text-ink-soft">
              We typically respond within one business day.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
