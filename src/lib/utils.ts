import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge Tailwind class names safely, resolving conflicting utilities.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Format a large number with thousands separators (e.g. 3200 -> "3,200").
 */
export function formatNumber(value: number): string {
  return new Intl.NumberFormat("en-US").format(value);
}
