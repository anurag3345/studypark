import { MapPin, PhoneCall, Mail, MessageSquare } from "lucide-react";
import { Seo } from "@/components/common/Seo";
import { PageBanner } from "@/components/common/PageBanner";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/common/ContactForm";
import { siteConfig } from "@/lib/siteConfig";
import { buildBreadcrumbSchema } from "@/lib/schema";

export default function Contact() {
  return (
    <>
      <Seo
        title="Contact Us"
        description="Get in touch with Study Park Education Network. Contact our Birtamode Branch to book your free counseling session."
        path="/contact"
        schema={[buildBreadcrumbSchema([{ label: "Contact" }])]}
      />

      <PageBanner
        eyebrow="Let's talk"
        title="Book your free counseling session"
        description="Get in touch with our team in Birtamode. Fill out the form, call us directly, or visit our office."
        breadcrumbItems={[{ label: "Contact" }]}
      />

      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            {/* Left side: Branch details */}
            <div className="space-y-10">
              <div>
                <h2 className="font-display text-2xl font-bold text-ink">Our Location</h2>
                <p className="mt-2 text-sm text-ink-soft">
                  Visit our branch for personalized counseling and admissions support.
                </p>
              </div>

              {/* Birtamode Branch */}
              <div className="rounded-2xl border border-surface-border bg-white p-6 shadow-card transition-shadow hover:shadow-card-hover">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-surface-border pb-4">
                  <div>
                    <h3 className="font-display text-lg font-bold text-ink">
                      {siteConfig.branches.birtamode.name}
                    </h3>
                    <p className="text-xs font-semibold text-gold-600 uppercase tracking-wider mt-0.5">
                      Jhapa Branch
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    {/* Socials */}
                    <a
                      href={siteConfig.social.tiktok}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-7 w-7 items-center justify-center rounded-full bg-navy-50 text-navy-600 hover:bg-navy-100 transition-colors"
                      aria-label="TikTok"
                    >
                      <svg className="h-3.5 w-3.5 fill-currentColor" viewBox="0 0 24 24">
                        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.02 1.59 4.23.97 1.22 2.33 2.06 3.83 2.42v3.91a11.51 11.51 0 01-3.64-1.22c-.67-.4-1.27-.92-1.78-1.54v6.86c.03 2.02-.63 4.02-1.89 5.59-1.26 1.57-3.08 2.58-5.09 2.83-2.02.26-4.11-.18-5.83-1.25a9.78 9.78 0 01-3.87-4.56c-.84-2.12-.76-4.5.21-6.55A9.82 9.82 0 017.65 6.06c2.09-.64 4.38-.45 6.32.55v4.06c-1.42-.69-3.13-.74-4.58-.12a5.9 5.9 0 00-3.15 3.32c-.52 1.44-.3 3.06.59 4.32a5.95 5.95 0 004.22 2.33c1.47.11 2.97-.29 4.08-1.28a5.83 5.83 0 001.99-4.33V0h-4.1z" />
                      </svg>
                    </a>
                    <a
                      href={siteConfig.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-7 w-7 items-center justify-center rounded-full bg-navy-50 text-navy-600 hover:bg-navy-100 transition-colors"
                      aria-label="Instagram"
                    >
                      <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                    </a>
                    <a
                      href={`https://wa.me/${siteConfig.branches.birtamode.whatsappNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full bg-[#25D366]/10 px-3.5 py-1 text-xs font-semibold text-[#128C7E] transition-colors hover:bg-[#25D366]/20"
                    >
                      <MessageSquare className="h-3.5 w-3.5" />
                      WhatsApp
                    </a>
                  </div>
                </div>

                <div className="mt-6 grid gap-6 sm:grid-cols-2">
                  <ul className="space-y-4 text-sm">
                    <li className="flex items-start gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-navy-50 text-navy-500">
                        <MapPin className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-ink-soft">Address</p>
                        <p className="text-sm font-medium text-ink">
                          {siteConfig.branches.birtamode.address.line1}, {siteConfig.branches.birtamode.address.line2}
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-navy-50 text-navy-500">
                        <PhoneCall className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-ink-soft">Phone</p>
                        <a href={siteConfig.branches.birtamode.phoneHref} className="text-sm font-medium text-ink hover:text-navy-500 transition-colors">
                          {siteConfig.branches.birtamode.phone}
                        </a>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-navy-50 text-navy-500">
                        <Mail className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-ink-soft">Email</p>
                        <a href={`mailto:${siteConfig.branches.birtamode.email}`} className="text-sm font-medium text-ink hover:text-navy-500 transition-colors">
                          {siteConfig.branches.birtamode.email}
                        </a>
                      </div>
                    </li>
                  </ul>

                  {/* Birtamode Map */}
                  <div className="overflow-hidden rounded-xl border border-surface-border shadow-sm h-48 sm:h-full">
                    <iframe
                      title="Study Park Birtamode Office location map"
                      src={siteConfig.branches.birtamode.mapUrl}
                      className="h-full w-full"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right side: Contact Form */}
            <div className="rounded-2xl border border-surface-border bg-white p-6 shadow-card sm:p-9 self-start lg:sticky lg:top-24">
              <h2 className="font-display text-xl font-semibold text-ink">Send us a message</h2>
              <p className="mt-2 text-sm text-ink-soft">
                Fill out the form below, and our team from the respective branch will get back to you shortly.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
