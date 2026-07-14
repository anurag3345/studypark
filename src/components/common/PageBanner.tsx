import { Breadcrumb } from "./Breadcrumb";
import type { BreadcrumbItem } from "@/types";

interface PageBannerProps {
  eyebrow: string;
  title: string;
  description?: string;
  breadcrumbItems: BreadcrumbItem[];
}

export function PageBanner({ eyebrow, title, description, breadcrumbItems }: PageBannerProps) {
  return (
    <section className="relative overflow-hidden bg-navy-800 pt-32 pb-16 sm:pt-36 sm:pb-20">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="container-page relative">
        <Breadcrumb items={breadcrumbItems} />
        <p className="eyebrow mt-6 text-gold-300">{eyebrow}</p>
        <h1 className="mt-3 max-w-2xl text-display-lg font-semibold text-white text-balance">{title}</h1>
        {description && <p className="mt-4 max-w-xl text-base leading-relaxed text-white/70">{description}</p>}
      </div>
    </section>
  );
}
