import { useEffect, useState } from "react";

/**
 * Returns `true` while the global site footer (`#site-footer`) intersects the
 * viewport. Useful for floating CTAs / scroll-to-top buttons that should hide
 * before they can overlap footer content.
 */
export function useFooterVisible(rootMargin: string = "0px"): boolean {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const target = document.getElementById("site-footer");
    if (!target || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { root: null, rootMargin, threshold: 0 }
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, [rootMargin]);

  return visible;
}
