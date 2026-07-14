import { motion, useReducedMotion } from "framer-motion";
import { destinations } from "@/data/destinations";

const VIEW_WIDTH = 480;
const VIEW_HEIGHT = 520;
const ORIGIN = { x: 66, y: 260 };
const NODE_X = 392;

/**
 * The literal embodiment of "Your Trusted Pathway to Global Education":
 * a single origin point (Kathmandu) with a hand-drawn route to each of the
 * eight study destinations, drawing in on load like a flight path.
 */
export function RouteMap() {
  const shouldReduceMotion = useReducedMotion();
  const nodeGap = (VIEW_HEIGHT - 80) / (destinations.length - 1);

  const nodes = destinations.map((destination, index) => {
    const y = 40 + index * nodeGap;
    const controlY = ORIGIN.y + (y - ORIGIN.y) * 0.5 - 36;
    const path = `M${ORIGIN.x},${ORIGIN.y} Q230,${controlY} ${NODE_X},${y}`;
    return { destination, y, path };
  });

  return (
    <div className="relative mx-auto max-w-md rounded-2xl border border-white/10 bg-navy-900/40 p-4 sm:p-6">
      <svg
        viewBox={`0 0 ${VIEW_WIDTH} ${VIEW_HEIGHT}`}
        role="img"
        aria-labelledby="route-map-title"
        className="h-auto w-full"
      >
        <title id="route-map-title">
          Route map from Kathmandu to Study Park's eight study-abroad destinations
        </title>

        {nodes.map(({ destination, path }, index) => (
          <motion.path
            key={destination.slug}
            d={path}
            fill="none"
            stroke="#F5941F"
            strokeWidth={1.25}
            strokeOpacity={0.55}
            strokeDasharray="1 4"
            strokeLinecap="round"
            initial={shouldReduceMotion ? undefined : { pathLength: 0, opacity: 0 }}
            animate={shouldReduceMotion ? undefined : { pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.1, delay: 0.3 + index * 0.09, ease: [0.22, 1, 0.36, 1] }}
          />
        ))}

        {/* Origin marker */}
        <circle cx={ORIGIN.x} cy={ORIGIN.y} r={7} fill="#2688C7" stroke="white" strokeWidth={2} />
        <circle cx={ORIGIN.x} cy={ORIGIN.y} r={13} fill="none" stroke="#2688C7" strokeOpacity={0.4} strokeWidth={1.5} />
        <text x={ORIGIN.x} y={ORIGIN.y + 28} textAnchor="middle" className="fill-white" fontSize="11" fontFamily="IBM Plex Mono, monospace">
          KTM
        </text>

        {/* Destination markers */}
        {nodes.map(({ destination, y }, index) => (
          <motion.g
            key={destination.slug}
            initial={shouldReduceMotion ? undefined : { opacity: 0, x: -6 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.5 + index * 0.09 }}
          >
            <circle cx={NODE_X} cy={y} r={4.5} fill="#F5941F" />
            <text x={NODE_X + 12} y={y + 4} className="fill-white" fontSize="13" fontFamily="Inter, sans-serif" fontWeight={500}>
              {destination.country}
            </text>
          </motion.g>
        ))}
      </svg>
    </div>
  );
}
