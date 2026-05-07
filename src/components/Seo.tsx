/**
 * Seo — per-route metadata for crawlers and social platforms.
 *
 * Uses React 19's native Document Metadata support: any <title>, <meta>, or
 * <link> rendered inside a component is hoisted into <head> automatically and
 * deduplicated across the tree. (https://react.dev/reference/react-dom/components/title)
 *
 * Update SITE_URL below if the canonical production hostname changes.
 */

const SITE_URL = "https://ai-harness.com";
const SITE_NAME = "AI-Harness";
const DEFAULT_OG_IMAGE = "/hero.png";
const DEFAULT_TWITTER_HANDLE = "@ai_harness";

type SeoProps = {
  /** Page title — appended with the site name automatically (except on home). */
  title: string;
  /** Meta description, ~150–160 chars. Required. */
  description: string;
  /** Path of the route, e.g. "/contact". Used to build canonical + og:url. */
  path: string;
  /** Optional override for the social image (defaults to /hero.png). */
  ogImage?: string;
  /** og:type — defaults to "website". Use "article" for blog posts. */
  type?: "website" | "article";
  /** Set true to emit `noindex, follow` (e.g. for /404, auth pages). */
  noindex?: boolean;
  /** Optional space-separated keywords (kept short – Google ignores, others use). */
  keywords?: string;
};

export default function Seo({
  title,
  description,
  path,
  ogImage = DEFAULT_OG_IMAGE,
  type = "website",
  noindex = false,
  keywords,
}: SeoProps) {
  const isHome = path === "/";
  const fullTitle = isHome ? title : `${title} · ${SITE_NAME}`;
  const url = `${SITE_URL}${path === "/" ? "" : path}`;
  const fullOg = ogImage.startsWith("http") ? ogImage : `${SITE_URL}${ogImage}`;

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
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullOg} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter / X */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={DEFAULT_TWITTER_HANDLE} />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOg} />
    </>
  );
}
