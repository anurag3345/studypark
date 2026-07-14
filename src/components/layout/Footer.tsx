import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, MapPin, Mail, PhoneCall, Clock } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { mainNav } from "@/data/nav";
import { services } from "@/data/services";
import { siteConfig } from "@/lib/siteConfig";

export function Footer() {
  const year = new Date().getFullYear();
  const featuredServices = services.slice(0, 6);

  return (
    <footer className="bg-navy-900 text-white">
      <Container className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        <div>
          <Link to="/" className="inline-block rounded-xl bg-white/95 px-3 py-2.5">
            <img src="/logo-full.png" alt="Study Park Education Network" className="h-14 w-auto sm:h-16" />
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
            {siteConfig.tagline}. Guiding Nepali students to global universities since {siteConfig.established}.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Study Park on Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
            >
              <Facebook aria-hidden="true" className="h-4 w-4" />
            </a>
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Study Park on Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
            >
              <Instagram aria-hidden="true" className="h-4 w-4" />
            </a>
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Study Park on LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
            >
              <Linkedin aria-hidden="true" className="h-4 w-4" />
            </a>
          </div>
        </div>

        <nav aria-label="Footer navigation">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-white/50">Sitemap</h2>
          <ul className="mt-4 space-y-2.5">
            {mainNav.map((item) => (
              <li key={item.path}>
                <Link to={item.path} className="text-sm text-white/70 transition-colors hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Services">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-white/50">Services</h2>
          <ul className="mt-4 space-y-2.5">
            {featuredServices.map((service) => (
              <li key={service.slug}>
                <Link to={`/services#${service.slug}`} className="text-sm text-white/70 transition-colors hover:text-white">
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-white/50">Contact</h2>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li className="flex items-start gap-2.5">
              <MapPin aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-gold-300" />
              <span>
                {siteConfig.address.line1}
                <br />
                {siteConfig.address.line2}
              </span>
            </li>
            <li className="flex items-center gap-2.5">
              <PhoneCall aria-hidden="true" className="h-4 w-4 shrink-0 text-gold-300" />
              <a href={siteConfig.phoneHref} className="transition-colors hover:text-white">
                {siteConfig.phone}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail aria-hidden="true" className="h-4 w-4 shrink-0 text-gold-300" />
              <a href={`mailto:${siteConfig.email}`} className="transition-colors hover:text-white">
                {siteConfig.email}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <Clock aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-gold-300" />
              <span>{siteConfig.openingHours}</span>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10 py-6">
        <Container className="flex flex-col items-center justify-between gap-3 text-xs text-white/50 sm:flex-row">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <p>{siteConfig.subTagline}</p>
        </Container>
      </div>
    </footer>
  );
}
