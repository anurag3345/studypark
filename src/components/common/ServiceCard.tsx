import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardDescription, CardTitle } from "@/components/ui/Card";
import type { Service } from "@/types";

export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;

  return (
    <Card className="group flex h-full flex-col">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-50 text-navy-500">
        <Icon aria-hidden="true" className="h-6 w-6" />
      </div>
      <CardTitle className="mt-5">{service.title}</CardTitle>
      <CardDescription className="flex-1">{service.shortDescription}</CardDescription>
      <Link
        to={`/services#${service.slug}`}
        className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-500 transition-colors group-hover:text-navy-600"
      >
        Learn more
        <ArrowUpRight aria-hidden="true" className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </Link>
    </Card>
  );
}
