import { useCounter } from "@/hooks/useCounter";
import { formatNumber } from "@/lib/utils";
import type { Stat } from "@/types";

export function StatCounter({ label, value, suffix }: Stat) {
  const { ref, value: current } = useCounter(value);

  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className="text-center sm:text-left">
      <p className="font-display text-4xl font-semibold text-white sm:text-5xl">
        {formatNumber(current)}
        {suffix}
      </p>
      <p className="mt-2 text-sm text-white/70">{label}</p>
    </div>
  );
}
