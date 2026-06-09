/**
 * Seo: per-route metadata for crawlers and social platforms.
 *
 * Uses React 19's native Document Metadata support: any <title>, <meta>, or
 * <link> rendered inside a component is hoisted into <head> automatically and
 * deduplicated across the tree. (https://react.dev/reference/react-dom/components/title)
 *
 * Update SITE_URL below if the canonical production hostname changes.
 */

const SITE_URL = "https://ai-harness.com";
const SITE_NAME = "AI-Harness";
const DEFAULT_OG_IMAGE = "/og.png";
const DEFAULT_OG_IMAGE_ALT = "AI-Harness | The Human + AI Workforce Platform";
const DEFAULT_TWITTER_HANDLE = "@ai_harness";

export type Breadcrumb = {
  /** Human-readable label, e.g. "Platform". */
  label: string;
  /** Absolute or relative URL path, e.g. "/platform". */
  path: string;
};

type SeoProps = {
  /** Page title; appended with the site name automatically (except on home). */
  title: string;
  /** Meta description, ~150–160 chars. Required. */
  description: string;
  /** Path of the route, e.g. "/contact". Used to build canonical + og:url. */
  path: string;
  /** Optional override for the social image (defaults to /og.png, 1200×630). */
  ogImage?: string;
  /** Alt text for the social image. Falls back to a sensible default. */
  ogImageAlt?: string;
  /** og:type. Defaults to "website". Use "article" for blog posts. */
  type?: "website" | "article";
  /** Set true to emit `noindex, follow` (e.g. for /404, auth pages). */
  noindex?: boolean;
  /** Optional space-separated keywords (kept short – Google ignores, others use). */
  keywords?: string;
  /**
   * Optional explicit breadcrumb trail (excluding "Home", which is prepended
   * automatically). When omitted, a 2-level trail Home → <title> is generated
   * for non-home routes. Pass `null` to opt out entirely.
   */
  breadcrumbs?: Breadcrumb[] | null;
};

export default function Seo({
  title,
  description,
  path,
  ogImage = DEFAULT_OG_IMAGE,
  ogImageAlt = DEFAULT_OG_IMAGE_ALT,
  type = "website",
  noindex = false,
  keywords,
  breadcrumbs,
}: SeoProps) {
  const isHome = path === "/";
  const fullTitle = isHome ? title : `${title} · ${SITE_NAME}`;
  // Home canonical keeps the trailing slash ("https://ai-harness.com/") to
  // match the long-standing form indexed by search engines and the value in
  // public/sitemap.xml. Sub-routes have no trailing slash to match the
  // `trailingSlash: false` rule in vercel.json.
  const url = isHome ? `${SITE_URL}/` : `${SITE_URL}${path}`;
  const fullOg = ogImage.startsWith("http") ? ogImage : `${SITE_URL}${ogImage}`;
  const ogImageType = fullOg.toLowerCase().endsWith(".jpg") || fullOg.toLowerCase().endsWith(".jpeg")
    ? "image/jpeg"
    : "image/png";

  const breadcrumbJson = buildBreadcrumbJsonLd({
    isHome,
    explicit: breadcrumbs,
    title,
    url,
  });

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords ? <meta name="keywords" content={keywords} /> : null}
      <link rel="canonical" href={url} />
      <meta name="robots" content={noindex ? "noindex, follow" : "index, follow, max-image-preview:large"} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullOg} />
      <meta property="og:image:secure_url" content={fullOg} />
      <meta property="og:image:type" content={ogImageType} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={ogImageAlt} />

      {/* Twitter / X */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={DEFAULT_TWITTER_HANDLE} />
      <meta name="twitter:creator" content={DEFAULT_TWITTER_HANDLE} />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOg} />
      <meta name="twitter:image:alt" content={ogImageAlt} />

      {/* BreadcrumbList JSON-LD: emitted on non-home routes unless opted out. */}
      {breadcrumbJson ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: breadcrumbJson }}
        />
      ) : null}
    </>
  );
}

/**
 * Build a Schema.org BreadcrumbList JSON-LD string.
 *
 * Returns `null` when no breadcrumbs should be emitted (home page or
 * explicitly opted out via `breadcrumbs={null}`).
 */
function buildBreadcrumbJsonLd({
  isHome,
  explicit,
  title,
  url,
}: {
  isHome: boolean;
  explicit: Breadcrumb[] | null | undefined;
  title: string;
  url: string;
}): string | null {
  if (isHome) return null;
  if (explicit === null) return null;

  const trail: Breadcrumb[] =
    explicit && explicit.length > 0 ? explicit : [{ label: title, path: url }];

  const items = [{ label: "Home", path: SITE_URL }, ...trail].map(
    (item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: item.path.startsWith("http") ? item.path : `${SITE_URL}${item.path}`,
    }),
  );

  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items,
  });
}
