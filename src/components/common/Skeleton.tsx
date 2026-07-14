import { cn } from "@/lib/utils";

export function Skeleton({ className }: { className?: string }) {
  return <div className={cn("animate-pulse rounded-lg bg-surface-muted", className)} aria-hidden="true" />;
}

/**
 * Full-page loading state shown by <Suspense> while a lazy-loaded route
 * chunk downloads. Mirrors the page-banner + content shape so the swap
 * from skeleton to real content doesn't cause a layout jump.
 */
export function PageLoadingFallback() {
  return (
    <div role="status" aria-live="polite" aria-label="Loading page">
      <div className="bg-navy-800 pt-32 pb-16 sm:pt-36 sm:pb-20">
        <div className="container-page">
          <Skeleton className="h-4 w-40 bg-white/10" />
          <Skeleton className="mt-6 h-10 w-72 bg-white/10" />
          <Skeleton className="mt-4 h-4 w-96 max-w-full bg-white/10" />
        </div>
      </div>
      <div className="container-page py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="rounded-2xl border border-surface-border p-6">
              <Skeleton className="h-10 w-10 rounded-full" />
              <Skeleton className="mt-4 h-5 w-3/4" />
              <Skeleton className="mt-3 h-4 w-full" />
              <Skeleton className="mt-2 h-4 w-5/6" />
            </div>
          ))}
        </div>
      </div>
      <span className="sr-only">Loading page content…</span>
    </div>
  );
}
