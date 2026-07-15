import { motion, useReducedMotion } from "framer-motion";
import { Breadcrumb } from "./Breadcrumb";
import type { BreadcrumbItem } from "@/types";
import {
  GraduationCap,
  Globe2,
  BookmarkCheck,
  Award,
  PhoneCall,
  Laptop,
} from "lucide-react";

interface PageBannerProps {
  eyebrow: string;
  title: string;
  description?: string;
  breadcrumbItems: BreadcrumbItem[];
}

export function PageBanner({ eyebrow, title, description, breadcrumbItems }: PageBannerProps) {
  const shouldReduceMotion = useReducedMotion();
  const pageLabel = breadcrumbItems[0]?.label || "";

  const renderIllustration = () => {
    const floatAnim = (delay: number) => ({
      y: shouldReduceMotion ? [0] : [0, -10, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      },
    });

    switch (pageLabel) {
      case "About":
        return (
          <div className="relative flex h-48 w-48 items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-navy-500/5 border border-navy-500/10 animate-pulse" />
            <motion.div
              className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-navy-500 to-navy-700 text-white shadow-lg"
              animate={floatAnim(0)}
            >
              <GraduationCap className="h-10 w-10 text-gold-300" />
            </motion.div>
            <motion.div
              className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white border border-surface-border text-navy-500 shadow-md"
              animate={floatAnim(1)}
            >
              <Award className="h-5 w-5" />
            </motion.div>
          </div>
        );
      case "Services":
        return (
          <div className="relative flex h-48 w-48 items-center justify-center">
            <div className="absolute inset-4 rounded-full bg-gold-500/5 border border-gold-500/10 animate-pulse" />
            <motion.div
              className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-navy-500 to-navy-700 text-white shadow-lg"
              animate={floatAnim(0.5)}
            >
              <BookmarkCheck className="h-10 w-10 text-gold-300" />
            </motion.div>
            <motion.div
              className="absolute bottom-6 left-6 flex h-10 w-10 items-center justify-center rounded-xl bg-white border border-surface-border text-gold-500 shadow-md"
              animate={floatAnim(1.5)}
            >
              <Laptop className="h-5 w-5" />
            </motion.div>
          </div>
        );
      case "Destinations":
        return (
          <div className="relative flex h-48 w-48 items-center justify-center">
            <div className="absolute inset-2 rounded-full bg-navy-500/5 border border-navy-500/10" />
            <motion.div
              className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-navy-500 to-navy-700 text-white shadow-lg"
              animate={floatAnim(0.2)}
            >
              <Globe2 className="h-10 w-10 text-gold-300" />
            </motion.div>
          </div>
        );
      case "Success Stories":
        return (
          <div className="relative flex h-48 w-48 items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-navy-500/5 to-gold-500/5 animate-pulse" />
            <motion.div
              className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-navy-500 to-navy-700 text-white shadow-lg"
              animate={floatAnim(0)}
            >
              <Award className="h-10 w-10 text-gold-300" />
            </motion.div>
          </div>
        );
      case "Test Preparation":
        return (
          <div className="relative flex h-48 w-48 items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-navy-500/5 border border-navy-500/10" />
            <motion.div
              className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-navy-500 to-navy-700 text-white shadow-lg"
              animate={floatAnim(0.8)}
            >
              <Laptop className="h-10 w-10 text-gold-300" />
            </motion.div>
          </div>
        );
      case "Contact":
        return (
          <div className="relative flex h-48 w-48 items-center justify-center">
            <div className="absolute inset-4 rounded-full bg-gold-500/5 border border-gold-500/10" />
            <motion.div
              className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-navy-500 to-navy-700 text-white shadow-lg"
              animate={floatAnim(0.4)}
            >
              <PhoneCall className="h-10 w-10 text-gold-300" />
            </motion.div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-navy-50/40 to-gold-50/30 pt-28 pb-16 sm:pt-40 sm:pb-28 border-b border-surface-border">
      {/* Subtle decorative background circles */}
      <div
        aria-hidden="true"
        className="absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-navy-500/[0.04] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -left-20 bottom-0 h-[400px] w-[400px] rounded-full bg-gold-500/[0.06] blur-3xl"
      />

      <div className="container-page relative">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <Breadcrumb items={breadcrumbItems} />
            
            {/* Eye-catching badge */}
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-navy-200 bg-white px-4 py-1.5 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-gold-500 animate-pulse" aria-hidden="true" />
              <span className="font-mono text-xs uppercase tracking-[0.16em] text-navy-600">
                {eyebrow}
              </span>
            </div>

            <h1 className="mt-5 max-w-3xl text-3xl font-semibold text-ink text-balance sm:text-4xl lg:text-5xl leading-tight">
              {title}
            </h1>

            {description && (
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink-soft sm:text-base lg:text-lg">
                {description}
              </p>
            )}
          </div>

          {/* Right side illustration section */}
          <div className="hidden lg:flex items-center justify-center">
            {renderIllustration()}
          </div>
        </div>
      </div>
    </section>
  );
}
