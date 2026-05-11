/**
 * FaqJsonLd — emit a Schema.org FAQPage JSON-LD block.
 *
 * Drop this beside your visible FAQ component, passing the same source-of-truth
 * Q&A array. Google requires the JSON-LD content to match what's rendered on
 * the page — keep both reading from one constant to avoid drift.
 *
 * Example:
 *   const faqs = [{ q: "...", a: "..." }, ...];
 *   <FaqJsonLd faqs={faqs} />
 *   <FAQ faqs={faqs} />   // your existing visible component
 */

export type FaqItem = {
  /** Question text (plain string — no HTML). */
  q: string;
  /** Answer text. Plain string is preferred; light HTML allowed but escaped. */
  a: string;
};

type Props = {
  faqs: FaqItem[];
};

export default function FaqJsonLd({ faqs }: Props) {
  if (!faqs || faqs.length === 0) return null;

  const json = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  });

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
