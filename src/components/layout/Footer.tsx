import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, MapPin, PhoneCall } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { mainNav } from "@/data/nav";
import { services } from "@/data/services";
import { siteConfig } from "@/lib/siteConfig";

export function Footer() {
  const year = new Date().getFullYear();
  const featuredServices = services.slice(0, 6);

  return (
    <footer className="bg-navy-900 text-white">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 sm:gap-y-12 lg:grid-cols-4 lg:gap-8 lg:py-16">
        {/* Brand */}
        <div className="sm:col-span-2 lg:col-span-1">
          <Link to="/" className="inline-block rounded-xl bg-white/95 px-3 py-2.5">
            <img
              src="/logo-full.png"
              alt="Study Park Education Network"
              className="h-12 w-auto sm:h-14"
            />
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
            {siteConfig.tagline}. Guiding Nepali students to global universities since{" "}
            {siteConfig.established}.
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Study Park on Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
            >
              <Facebook aria-hidden="true" className="h-4 w-4" />
            </a>
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Study Park on Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
            >
              <Instagram aria-hidden="true" className="h-4 w-4" />
            </a>
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Study Park on LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
            >
              <Linkedin aria-hidden="true" className="h-4 w-4" />
            </a>
            <a
              href={siteConfig.social.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Study Park on TikTok"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
            >
              <svg className="h-4 w-4 fill-white" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.02 1.59 4.23.97 1.22 2.33 2.06 3.83 2.42v3.91a11.51 11.51 0 01-3.64-1.22c-.67-.4-1.27-.92-1.78-1.54v6.86c.03 2.02-.63 4.02-1.89 5.59-1.26 1.57-3.08 2.58-5.09 2.83-2.02.26-4.11-.18-5.83-1.25a9.78 9.78 0 01-3.87-4.56c-.84-2.12-.76-4.5.21-6.55A9.82 9.82 0 017.65 6.06c2.09-.64 4.38-.45 6.32.55v4.06c-1.42-.69-3.13-.74-4.58-.12a5.9 5.9 0 00-3.15 3.32c-.52 1.44-.3 3.06.59 4.32a5.95 5.95 0 004.22 2.33c1.47.11 2.97-.29 4.08-1.28a5.83 5.83 0 001.99-4.33V0h-4.1z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Sitemap */}
        <nav aria-label="Footer navigation">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-white/50">Sitemap</h2>
          <ul className="mt-4 space-y-2.5">
            {mainNav.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className="text-sm text-white/70 transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Services */}
        <nav aria-label="Services">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-white/50">Services</h2>
          <ul className="mt-4 space-y-2.5">
            {featuredServices.map((service) => (
              <li key={service.slug}>
                <Link
                  to={`/services#${service.slug}`}
                  className="text-sm text-white/70 transition-colors hover:text-white"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact */}
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-wider text-white/50">Our Branch</h2>
          <div className="mt-4 space-y-4 text-sm text-white/70">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-gold-300">Birtamode Branch</p>
              <ul className="mt-1 space-y-1 text-xs">
                <li className="flex items-start gap-1.5">
                  <MapPin aria-hidden="true" className="mt-0.5 h-3.5 w-3.5 shrink-0 text-navy-400" />
                  <span>{siteConfig.branches.birtamode.address.line1}, {siteConfig.branches.birtamode.address.line2}</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <PhoneCall aria-hidden="true" className="h-3.5 w-3.5 shrink-0 text-navy-400" />
                  <a href={siteConfig.branches.birtamode.phoneHref} className="hover:text-white transition-colors">
                    {siteConfig.branches.birtamode.phone}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>

      <div className="border-t border-white/10 py-6">
        <Container className="flex flex-col items-center justify-between gap-2 text-xs text-white/40 sm:flex-row">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <p>{siteConfig.subTagline}</p>
        </Container>
      </div>
    </footer>
  );
}
