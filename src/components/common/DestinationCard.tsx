import { GraduationCap, CalendarDays } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import type { Destination } from "@/types";

export function DestinationCard({ destination }: { destination: Destination }) {
  return (
    <Card className="flex h-full flex-col">
      <div className="flex items-center justify-between">
        <span aria-hidden="true" className="text-3xl leading-none">
          {destination.flagEmoji}
        </span>
        <Badge>{destination.universityCount}</Badge>
      </div>
      <h3 className="mt-4 font-display text-xl font-semibold text-ink">{destination.country}</h3>
      <p className="mt-1.5 text-sm font-medium text-navy-500">{destination.tagline}</p>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">{destination.description}</p>

      <dl className="mt-5 space-y-2.5 border-t border-surface-border pt-4 text-sm">
        <div className="flex items-start gap-2">
          <CalendarDays aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-navy-400" />
          <div>
            <dt className="sr-only">Intake months</dt>
            <dd className="text-ink-soft">{destination.intakeMonths.join(", ")} intake</dd>
          </div>
        </div>
        <div className="flex items-start gap-2">
          <GraduationCap aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-navy-400" />
          <div>
            <dt className="sr-only">Popular courses</dt>
            <dd className="text-ink-soft">{destination.popularCourses.join(", ")}</dd>
          </div>
        </div>
      </dl>
    </Card>
  );
}
