/** Shared scroll threshold for product-agent chrome (site nav hides; product bar pins). */
export const PRODUCT_CHROME_COMPACT_AT = 72;

/** Any dedicated agent hub under /agents/... */
export function isProductChromePath(pathname: string) {
  return pathname.startsWith("/agents/");
}

export function isProductChromeCompact(scrollY = typeof window !== "undefined" ? window.scrollY : 0) {
  return scrollY > PRODUCT_CHROME_COMPACT_AT;
}
