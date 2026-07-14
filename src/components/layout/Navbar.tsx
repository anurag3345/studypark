import { useEffect, useState } from "react";
import { Link, NavLink as RouterNavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { mainNav } from "@/data/nav";
import { siteConfig } from "@/lib/siteConfig";
import { useScrollThreshold } from "@/hooks/useScrollThreshold";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const isScrolled = useScrollThreshold(16);
  const location = useLocation();

  // Close the mobile menu on route change.
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-premium",
        isScrolled || isOpen ? "bg-white/95 shadow-sm backdrop-blur" : "bg-transparent"
      )}
    >
      <Container>
        <div className="flex h-20 items-center justify-between">
          <Link to="/" className="flex items-center" aria-label={`${siteConfig.name} — Home`}>
            <img
              src="/logo-compact.png"
              alt="Study Park Education Network"
              className="h-9 w-auto sm:h-10"
            />
          </Link>

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {mainNav.map((item) => (
                <li key={item.path}>
                  <RouterNavLink
                    to={item.path}
                    end={item.path === "/"}
                    className={({ isActive }) =>
                      cn(
                        "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                        "text-ink hover:bg-surface-muted",
                        isActive && "bg-navy-50 text-navy-600"
                      )
                    }
                  >
                    {item.label}
                  </RouterNavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={siteConfig.phoneHref}
              className="flex items-center gap-1.5 text-sm font-medium text-ink transition-colors"
            >
              <PhoneCall aria-hidden="true" className="h-4 w-4" />
              {siteConfig.phone}
            </a>
            <Button to="/contact" size="sm">
              Free Counseling
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className="flex h-10 w-10 items-center justify-center rounded-full text-ink lg:hidden"
          >
            {isOpen ? <X aria-hidden="true" className="h-6 w-6" /> : <Menu aria-hidden="true" className="h-6 w-6" />}
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            id="mobile-menu"
            aria-label="Mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-surface-border bg-white lg:hidden"
          >
            <Container className="flex flex-col gap-1 py-4">
              {mainNav.map((item) => (
                <RouterNavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === "/"}
                  className={({ isActive }) =>
                    cn(
                      "rounded-lg px-4 py-3 text-base font-medium text-ink transition-colors",
                      isActive ? "bg-navy-50 text-navy-600" : "hover:bg-surface-muted"
                    )
                  }
                >
                  {item.label}
                </RouterNavLink>
              ))}
              <div className="mt-2 flex flex-col gap-3 border-t border-surface-border pt-4">
                <a href={siteConfig.phoneHref} className="flex items-center gap-2 px-4 text-sm font-medium text-ink">
                  <PhoneCall aria-hidden="true" className="h-4 w-4" />
                  {siteConfig.phone}
                </a>
                <Button to="/contact" className="mx-4">
                  Free Counseling
                </Button>
              </div>
            </Container>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
