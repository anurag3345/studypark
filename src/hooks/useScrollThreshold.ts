import { useEffect, useState } from "react";

/**
 * Returns true once the page has been scrolled past `threshold` pixels.
 * Used to drive the sticky navbar's compact state and the back-to-top button.
 */
export function useScrollThreshold(threshold = 24): boolean {
  const [past, setPast] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setPast(window.scrollY > threshold);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return past;
}
