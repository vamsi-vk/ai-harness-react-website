/**
 * scripts/seo-routes.mjs
 *
 * Single source of truth for SEO-relevant route metadata.
 *
 * Used by:
 *   - scripts/prerender.mjs       : picks routes where `prerender: true`
 *   - scripts/generate-sitemap.mjs : picks routes where `sitemap` is set
 *
 * When you add a new public route to src/App.tsx, ALSO add an entry here.
 * That's the only change needed; both the prerendered HTML and the
 * sitemap.xml will pick it up automatically on the next build.
 *
 * Conventions:
 *   - `prerender: true`   → write a static HTML snapshot to dist/<path>/index.html
 *   - `sitemap: { ... }`  → include in public/sitemap.xml with the given metadata
 *   - `sitemap: false`    → exclude from sitemap (e.g. auth pages disallowed in robots.txt)
 *
 * Auth routes (/signup, /login) are prerendered so social scrapers get a
 * useful share preview, but excluded from the sitemap because they're
 * disallowed in public/robots.txt and shouldn't be indexed.
 */

export const SITE_URL = "https://ai-harness.com";

/** @typedef {{
 *   path: string;
 *   prerender: boolean;
 *   sitemap: false | { priority: number; changefreq: "always"|"hourly"|"daily"|"weekly"|"monthly"|"yearly"|"never" };
 *   lastmod?: string;  // YYYY-MM-DD; defaults to today at generate time
 * }} SeoRoute */

/** @type {SeoRoute[]} */
export const SEO_ROUTES = [
  { path: "/",           prerender: true, sitemap: { priority: 1.0, changefreq: "weekly"  } },
  { path: "/platform",   prerender: true, sitemap: { priority: 0.9, changefreq: "weekly"  } },
  { path: "/solutions",  prerender: true, sitemap: { priority: 0.9, changefreq: "weekly"  } },
  { path: "/ai-agents",  prerender: true, sitemap: { priority: 0.9, changefreq: "weekly"  } },
  { path: "/agents/marketing-automation", prerender: true, sitemap: { priority: 0.85, changefreq: "weekly" } },
  { path: "/agents/marketing-automation/post-creation-publishing", prerender: true, sitemap: { priority: 0.7, changefreq: "weekly" } },
  { path: "/agents/marketing-automation/social-engagement", prerender: true, sitemap: { priority: 0.7, changefreq: "weekly" } },
  { path: "/agents/marketing-automation/social-analytics", prerender: true, sitemap: { priority: 0.7, changefreq: "weekly" } },
  { path: "/agents/reputation-sentiment", prerender: true, sitemap: { priority: 0.85, changefreq: "weekly" } },
  { path: "/agents/reputation-sentiment/review-generation", prerender: true, sitemap: { priority: 0.7, changefreq: "weekly" } },
  { path: "/agents/reputation-sentiment/review-management", prerender: true, sitemap: { priority: 0.7, changefreq: "weekly" } },
  { path: "/agents/reputation-sentiment/review-analytics-marketing", prerender: true, sitemap: { priority: 0.7, changefreq: "weekly" } },
  { path: "/agents/automated-reviews", prerender: true, sitemap: { priority: 0.85, changefreq: "weekly" } },
  { path: "/industries", prerender: true, sitemap: { priority: 0.9, changefreq: "weekly"  } },
  { path: "/security",   prerender: true, sitemap: { priority: 0.8, changefreq: "monthly" } },
  { path: "/about",      prerender: true, sitemap: { priority: 0.7, changefreq: "monthly" } },
  { path: "/contact",    prerender: true, sitemap: { priority: 0.7, changefreq: "monthly" } },
  { path: "/demo",       prerender: true, sitemap: { priority: 0.7, changefreq: "monthly" } },
  // International Businesses: overview + per-country desk pages. Each gets a
  // static snapshot so direct loads / reloads don't hit the SPA fallback.
  // Country list is the public-facing subset of DESK_ORDER in src/lib/desks.ts;
  // when adding a new desk there, mirror it here.
  { path: "/international-businesses",                     prerender: true, sitemap: { priority: 0.8, changefreq: "monthly" } },
  { path: "/international-businesses/taiwan",              prerender: true, sitemap: { priority: 0.7, changefreq: "monthly" } },
  { path: "/international-businesses/china",               prerender: true, sitemap: { priority: 0.7, changefreq: "monthly" } },
  { path: "/international-businesses/japan",               prerender: true, sitemap: { priority: 0.7, changefreq: "monthly" } },
  // Consultation forms: prerender so reloads work, but keep them out of the
  // sitemap (they're lead-capture forms, not landing pages crawlers should rank).
  { path: "/international-businesses/taiwan/consultation", prerender: true, sitemap: false },
  { path: "/international-businesses/china/consultation",  prerender: true, sitemap: false },
  { path: "/international-businesses/japan/consultation",  prerender: true, sitemap: false },
  // Auth: prerender for share previews, exclude from sitemap (disallowed in robots.txt).
  { path: "/signup",     prerender: true, sitemap: false },
  { path: "/login",      prerender: true, sitemap: false },
];

/** Routes the prerenderer should snapshot to static HTML. */
export const PRERENDER_ROUTES = SEO_ROUTES.filter((r) => r.prerender).map(
  (r) => r.path,
);

/** Routes that should appear in sitemap.xml, with their metadata. */
export const SITEMAP_ROUTES = SEO_ROUTES.filter(
  (r) => r.sitemap && typeof r.sitemap === "object",
);
