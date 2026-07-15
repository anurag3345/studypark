import { Link } from "react-router-dom";
import { CalendarDays, GraduationCap, ArrowUpRight, DollarSign } from "lucide-react";
import type { Destination } from "@/types";

export function DestinationCard({ destination }: { destination: Destination }) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-surface-border bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
      {/* Hero image */}
      <div className="relative h-48 overflow-hidden sm:h-52">
        <img
          src={destination.image}
          alt={`Study in ${destination.country}`}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-navy-900/20 to-transparent" />

        {/* Flag + badge row over the image */}
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between px-5 pb-4">
          <span aria-hidden="true" className="text-4xl drop-shadow-lg leading-none">
            {destination.flagEmoji}
          </span>
          <span className="inline-flex items-center gap-1 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
            {destination.universityCount}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        {/* Country + tagline */}
        <h3 className="font-display text-xl font-bold text-ink">
          {destination.country}
        </h3>
        <p className="mt-1 text-sm font-medium text-navy-500 leading-snug">
          {destination.tagline}
        </p>

        {/* Description */}
        <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft line-clamp-3">
          {destination.description}
        </p>

        {/* Tuition pill */}
        <div className="mt-4 inline-flex items-center gap-1.5 self-start rounded-full bg-gold-50 border border-gold-100 px-3 py-1">
          <DollarSign aria-hidden="true" className="h-3.5 w-3.5 text-gold-600 shrink-0" />
          <span className="text-xs font-semibold text-gold-700">{destination.averageTuition}</span>
        </div>

        {/* Info rows */}
        <dl className="mt-4 space-y-2 border-t border-surface-border pt-4 text-xs">
          <div className="flex items-start gap-2">
            <CalendarDays aria-hidden="true" className="mt-0.5 h-3.5 w-3.5 shrink-0 text-navy-400" />
            <div>
              <dt className="sr-only">Intake months</dt>
              <dd className="text-ink-soft">
                <span className="font-semibold text-ink">Intake:</span>{" "}
                {destination.intakeMonths.join(", ")}
              </dd>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <GraduationCap aria-hidden="true" className="mt-0.5 h-3.5 w-3.5 shrink-0 text-navy-400" />
            <div>
              <dt className="sr-only">Popular courses</dt>
              <dd className="text-ink-soft line-clamp-1">
                <span className="font-semibold text-ink">Courses:</span>{" "}
                {destination.popularCourses.join(", ")}
              </dd>
            </div>
          </div>
        </dl>

        {/* CTA */}
        <Link
          to="/contact"
          className="mt-5 flex items-center justify-center gap-1.5 rounded-xl bg-navy-800 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-navy-700 focus-visible:outline-navy-600"
        >
          Book Counseling
          <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}
