import {
  ArrowRight,
  BarChart3,
  FileText,
  Gauge,
  LayoutDashboard,
  MapPin,
  MousePointerClick,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import type { ReactNode } from "react";
import Container from "../../components/Container";
import Button from "../../components/Button";
import Seo from "../../components/Seo";
import FaqJsonLd from "../../components/FaqJsonLd";
import FaqAccordion from "../../components/FaqAccordion";
import CTASection from "../../components/CTASection";
import ScrollReveal from "../../components/ScrollReveal";
import AgentFlowStepsSection, { type AgentFlowStep } from "../../components/AgentFlowStepsSection";
import {
  VISIBILITY_LISTING_BASE,
  VisibilityListingChrome,
} from "../../components/visibility-listing/VisibilityListingSubNav";
import SoftPastelBackdrop from "../../components/marketing-automation/SoftPastelBackdrop";
import { MarketingHeroImage } from "../../components/marketing-automation/MarketingHeroImage";
import { CapsuleFeatureImage } from "../../components/marketing-automation/CapsuleFeatureImage";
import { TITLE_HL_BRAND as HL } from "../../components/agent-title-highlight";
import { cn } from "../../lib/cn";

const PATH = `${VISIBILITY_LISTING_BASE}/visibility-analytics`;

const FAQS = [
  {
    q: "What is a visibility score?",
    a: "A single number that rolls up listing accuracy, ranking position, and profile activity into one measure of how easy your business is to find and choose right now, tracked over time instead of checked once and forgotten.",
  },
  {
    q: "How do you calculate competitor benchmarks?",
    a: "The agent compares your rating, review volume, ranking position, and profile completeness against nearby businesses in your category, the same side-by-side comparison a customer runs silently before choosing.",
  },
  {
    q: "Can I see performance per location?",
    a: "Yes. Every location gets its own score, ranking trend, and action counts, rolled up so you can see the whole footprint or drill into one address at a time.",
  },
  {
    q: "What actions can I take from the dashboard?",
    a: "Every insight links back to a fix, a category to add, a photo to update, a directory that is out of sync, so the report ends in a next move, not just a number.",
  },
];

const FEATURES: {
  id: string;
  eyebrow: string;
  title: ReactNode;
  body: string;
  icon: typeof Gauge;
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
  link?: { label: string; to: string };
}[] = [
  {
    id: "visibility-score",
    eyebrow: "Visibility Score",
    title: (
      <>
        Your visibility, as a single <span className={HL}>Number</span>
      </>
    ),
    body: "Accuracy, ranking, and activity rolled into one score per location, so you can tell at a glance whether you are moving forward or slipping back, without reading five separate reports.",
    icon: Gauge,
    imageSrc: "/illustrations/custom/visibility-analytics-feature-score.png",
    imageAlt: "Visibility score combining listing accuracy, ranking, and activity",
  },
  {
    id: "ranking-tracker",
    eyebrow: "Ranking Tracker",
    title: (
      <>
        Position, tracked for every <span className={HL}>Keyword</span> that matters
      </>
    ),
    body: "See exactly where you rank for each category and search term, per location, charted over time so a slow drift gets caught in week two instead of month six.",
    icon: BarChart3,
    imageSrc: "/illustrations/custom/visibility-analytics-feature-rankings.png",
    imageAlt: "Local search ranking tracked over time per keyword and location",
    reverse: true,
    link: {
      label: "See how search optimization works",
      to: `${VISIBILITY_LISTING_BASE}/search-optimization`,
    },
  },
  {
    id: "competitor-benchmark",
    eyebrow: "Competitor Benchmarking",
    title: (
      <>
        Measured against the businesses down the <span className={HL}>Street</span>
      </>
    ),
    body: "Your rating, review volume, and ranking placed next to nearby competitors in your category, the exact comparison a customer makes before they choose.",
    icon: Users,
    imageSrc: "/illustrations/custom/visibility-analytics-feature-benchmark.png",
    imageAlt: "Business visibility compared against nearby competitors",
  },
  {
    id: "customer-actions",
    eyebrow: "Customer Actions",
    title: (
      <>
        Calls, directions, and clicks, all counted as <span className={HL}>Proof</span>
      </>
    ),
    body: "Visibility only matters if it produces action. The agent tracks phone calls, direction requests, and website clicks that come directly from your listings, so you see the result, not just the exposure.",
    icon: MousePointerClick,
    imageSrc: "/illustrations/custom/visibility-analytics-feature-actions.png",
    imageAlt: "Customer calls, direction requests, and website clicks tracked from listings",
    reverse: true,
  },
  {
    id: "reports",
    eyebrow: "Plain-English Reports",
    title: (
      <>
        A visibility report your whole team <span className={HL}>Reads</span>
      </>
    ),
    body: "Monthly, per location: what moved, why it moved, and what to fix next, in the same plain voice as the rest of your AI-Harness reporting.",
    icon: FileText,
    imageSrc: "/illustrations/custom/visibility-analytics-feature-report.png",
    imageAlt: "Plain-English monthly visibility report with recommended next moves",
  },
];

const FLOW_STEPS: AgentFlowStep[] = [
  {
    number: "1",
    title: (
      <>
        Data is captured across every <span className={HL}>Platform</span>
      </>
    ),
    railLabel: "Data captured",
    body: "Rankings, views, and listing status pulled in from Google, Apple, Facebook, and Yelp.",
    accent: "violet",
    imageSrc: "/illustrations/custom/visibility-analytics-flow-01-data-captured.png",
    imageAlt: "Café owner checking listing activity on her phone during the morning rush",
  },
  {
    number: "2",
    title: (
      <>
        It rolls into one <span className={HL}>Visibility Score</span>
      </>
    ),
    railLabel: "Rolled into visibility score",
    body: "Accuracy, ranking, and activity combined into a single number per location.",
    accent: "sky",
    imageSrc: "/illustrations/custom/visibility-analytics-flow-02-visibility-score.png",
    imageAlt: "Retail owner reviewing one clear visibility score on a tablet in his store",
  },
  {
    number: "3",
    title: (
      <>
        Benchmarked against nearby <span className={HL}>Competitors</span>
      </>
    ),
    railLabel: "Benchmarked",
    body: "The same comparison a customer runs before choosing between you and the business next door.",
    accent: "emerald",
    imageSrc: "/illustrations/custom/visibility-analytics-flow-03-benchmarked.png",
    imageAlt: "Restaurant owner comparing her location to neighboring businesses on the same street",
  },
  {
    number: "4",
    title: (
      <>
        A plain-English report lands with the next <span className={HL}>Moves</span>
      </>
    ),
    railLabel: "Report with next moves",
    body: "What changed, why it changed, and the specific fix that closes the gap.",
    accent: "amber",
    imageSrc: "/illustrations/custom/visibility-analytics-flow-04-report-moves.png",
    imageAlt: "Salon owner reviewing a monthly visibility report and planning the next fix",
  },
];

const FLOW_VISUALS = [
  {
    icon: LayoutDashboard,
    panelTitle: "Data captured",
    panelHint: "Every platform, one stream",
    chips: ["Rankings", "Views", "Status"],
  },
  {
    icon: Gauge,
    panelTitle: "Visibility score",
    panelHint: "One number per location",
    chips: ["Accuracy", "Ranking", "Activity"],
  },
  {
    icon: MapPin,
    panelTitle: "Benchmarked",
    panelHint: "Against nearby competitors",
    chips: ["Rating", "Reviews", "Position"],
  },
  {
    icon: FileText,
    panelTitle: "Report delivered",
    panelHint: "Plain-English · monthly",
    chips: ["What moved", "Why", "Next fix"],
  },
];

const RELATED = [
  {
    label: "Listings & Publishing",
    body: "The accurate, published profile the score is measuring.",
    to: `${VISIBILITY_LISTING_BASE}/listings-publishing`,
  },
  {
    label: "Search Optimization",
    body: "Turn a ranking gap into a plan that closes it.",
    to: `${VISIBILITY_LISTING_BASE}/search-optimization`,
  },
  {
    label: "Visibility and Listing overview",
    body: "Back to the full Visibility and Listing Agent.",
    to: VISIBILITY_LISTING_BASE,
  },
];

function ProductSchema() {
  const json = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        name: "Visibility Analytics",
        description:
          "AI-Harness Visibility Analytics: a visibility score, ranking tracker, competitor benchmarking, and plain-English reports that show exactly how a business is found, chosen, and compared.",
        brand: { "@type": "Brand", name: "AI-Harness" },
        url: `https://ai-harness.com${PATH}`,
        category: "Local Search Analytics Software",
        isPartOf: {
          "@type": "SoftwareApplication",
          name: "AI-Harness Visibility & Listing Agent",
          url: `https://ai-harness.com${VISIBILITY_LISTING_BASE}`,
        },
      },
      {
        "@type": "SoftwareApplication",
        name: "AI-Harness Visibility Analytics",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        url: `https://ai-harness.com${PATH}`,
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
          description: "Start free with $10 in credits, no credit card required",
        },
        publisher: { "@type": "Organization", name: "AI-Harness" },
      },
    ],
  });

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />
  );
}

export default function VisibilityAnalytics() {
  return (
    <>
      <Seo
        path={PATH}
        title="Visibility Analytics | Local Search Performance Dashboard"
        description="See exactly where you rank, how customers found you, and how you compare to nearby competitors, in one plain-English dashboard that updates as your visibility moves."
        keywords="local search analytics, visibility score, google business profile insights, local ranking tracker, competitor benchmarking, business listing performance"
        breadcrumbs={[
          { label: "Agents", path: "/platform" },
          { label: "Visibility and Listing AI Agent", path: VISIBILITY_LISTING_BASE },
          { label: "Visibility Analytics", path: PATH },
        ]}
      />
      <FaqJsonLd faqs={FAQS} />
      <ProductSchema />

      <VisibilityListingChrome>
        <Hero />
        <ProblemSection />
        <FeaturesSection />
        <AgentFlowStepsSection
          eyebrow="The flow"
          sectionId="visibility-analytics-flow"
          title={
            <>
              From raw data to your next <span className={HL}>Move</span>
            </>
          }
          steps={FLOW_STEPS}
          visuals={FLOW_VISUALS}
        />
        <RelatedSection />
        <FaqSection />
        <div className="py-16 sm:py-20">
          <CTASection
            title="Stop guessing whether it is working."
            description="Turn on Visibility Analytics inside your Visibility and Listing Agent. Start free with $10 in credits."
            primaryCta={{ label: "Start free", to: "/signup" }}
            secondaryCta={{ label: "Talk to us", to: "/contact" }}
            footnote="Free to start with $10 in credits · No credit card · Part of the Visibility and Listing Agent"
          />
        </div>
      </VisibilityListingChrome>
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-x-clip border-b border-ink-100/70 pb-12 pt-10 sm:pb-16 sm:pt-14 lg:pb-20 lg:pt-16">
      <SoftPastelBackdrop side="left" />

      <Container className="relative z-10">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-10 xl:gap-12">
          <ScrollReveal className="relative z-10 max-w-xl min-w-0">
            <p className="text-sm font-medium text-ink-500">
              Visibility Analytics
            </p>
            <h1 className="mt-4 text-[clamp(2rem,4.5vw,3.35rem)] font-medium leading-[1.08] tracking-[-0.025em] text-ink-900">
              Visibility, measured like the <span className={HL}>Metric</span> it is
            </h1>
            <p className="mt-5 text-lg font-normal leading-[1.7] text-ink-600 sm:text-xl">
              A star rating and a ranking number without context are just numbers. The agent turns
              them into a visibility score, tracked per location, benchmarked against nearby
              competitors, and tied to the calls, directions, and clicks they actually produced.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button to="/signup" size="lg">
                Start free
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button to="/demo" variant="secondary" size="lg">
                See a visibility report
              </Button>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-ink-500">
              Free to start with $10 in credits · No credit card · Part of the Visibility and
              Listing Agent
            </p>
          </ScrollReveal>

          <ScrollReveal delay={80} className="relative min-w-0 xl:-ml-4 2xl:-ml-6">
            <MarketingHeroImage
              src="/illustrations/custom/visibility-hero-analytics.png"
              alt="Business owner reviewing visibility analytics, ranking trends, and location comparisons on a tablet"
            />
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}

function ProblemSection() {
  return (
    <section className="border-y border-ink-100 bg-ink-50/60 py-16 sm:py-20">
      <Container>
        <ScrollReveal className="mx-auto max-w-3xl">
          <p className="text-sm font-medium text-ink-500">
            The problem
          </p>
          <h2 className="mt-4 text-[clamp(1.75rem,3.2vw,2.5rem)] font-medium leading-[1.15] tracking-[-0.02em] text-ink-900">
            Most owners know their star rating and nothing <span className={HL}>Underneath It</span>
          </h2>
          <p className="mt-5 text-lg font-normal leading-[1.75] text-ink-700 sm:text-xl">
            Whether visibility is trending up or down, how you compare to the competitors sitting
            right beside you in search results, and whether any of it is turning into calls or
            visits, those answers exist inside your listing data, but nobody has time to mine them
            by hand. This page shows how the agent turns visibility into a number you can manage.
          </p>
        </ScrollReveal>
      </Container>
    </section>
  );
}

function FeatureVisual({
  feature,
  pillSide,
}: {
  feature: (typeof FEATURES)[number];
  pillSide: "left" | "right";
}) {
  return (
    <CapsuleFeatureImage
      src={feature.imageSrc}
      alt={feature.imageAlt}
      pillSide={pillSide}
    />
  );
}

function FeaturesSection() {
  return (
    <section className="relative overflow-hidden border-b border-ink-100/70">
      <div className="relative overflow-hidden py-16 sm:pb-12 sm:pt-24">
        <SoftPastelBackdrop side="right" />
        <Container className="relative z-10">
          <ScrollReveal className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium text-ink-500">What this page shows</p>
            <h2 className="mt-4 text-[clamp(1.75rem,3.2vw,2.75rem)] font-medium leading-[1.12] tracking-[-0.02em] text-ink-900">
              A score, a ranking, a benchmark, and the <span className={HL}>Proof</span> behind them
            </h2>
          </ScrollReveal>
        </Container>
      </div>

      {FEATURES.map((feature, index) => {
        const Icon = feature.icon;
        const reverse = Boolean(feature.reverse);
        const softBand = index % 2 === 1;

        return (
          <div
            key={feature.id}
            className={cn(
              "relative overflow-hidden py-16 sm:py-24",
              softBand ? undefined : "bg-white",
            )}
          >
            {softBand ? (
              <SoftPastelBackdrop side={index % 4 === 1 ? "left" : "right"} />
            ) : null}

            <Container className="relative z-10">
              <ScrollReveal delay={(index % 3) * 40}>
                <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
                  <div className={reverse ? "order-2 lg:order-1" : "order-2 lg:order-2"}>
                    <FeatureVisual feature={feature} pillSide={reverse ? "left" : "right"} />
                  </div>
                  <div className={reverse ? "order-1 lg:order-2" : "order-1 lg:order-1"}>
                    <div className="flex items-center gap-3">
                      <span className="grid h-10 w-10 place-items-center rounded-xl bg-ink-100 text-ink-600 ring-1 ring-ink-200/80">
                        <Icon className="h-5 w-5" strokeWidth={1.75} />
                      </span>
                      <p className="text-sm font-medium text-ink-500">{feature.eyebrow}</p>
                    </div>
                    <h3 className="mt-4 text-[clamp(1.5rem,2.5vw,2rem)] font-medium leading-[1.15] tracking-[-0.02em] text-ink-900">
                      {feature.title}
                    </h3>
                    <p className="mt-4 text-lg font-normal leading-[1.7] text-ink-600">{feature.body}</p>
                    {feature.link ? (
                      <Link
                        to={feature.link.to}
                        className="mt-6 inline-flex items-center gap-2 text-[15px] font-medium text-brand-700 transition hover:gap-2.5 hover:text-brand-800"
                      >
                        {feature.link.label}
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    ) : null}
                  </div>
                </div>
              </ScrollReveal>
            </Container>
          </div>
        );
      })}
    </section>
  );
}

function RelatedSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <ScrollReveal className="max-w-3xl">
          <h2 className="text-[clamp(1.75rem,3.2vw,2.5rem)] font-medium leading-[1.15] tracking-[-0.02em] text-ink-900">
            Do more with your <span className={HL}>Visibility and Listing</span> Agent
          </h2>
        </ScrollReveal>
        <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-3">
          {RELATED.map((item, index) => (
            <ScrollReveal key={item.to} delay={index * 50}>
              <Link
                to={item.to}
                className="group flex h-full flex-col rounded-3xl border border-ink-200/90 bg-white p-6 transition hover:border-brand-200 hover:shadow-soft"
              >
                <p className="text-lg font-medium text-ink-900 group-hover:text-brand-700">
                  {item.label}
                </p>
                <p className="mt-2 flex-1 text-[15px] leading-relaxed text-ink-600">{item.body}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-[15px] font-medium text-brand-700 transition group-hover:gap-2.5">
                  Explore
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

function FaqSection() {
  return (
    <section className="border-t border-ink-100 bg-white py-20 sm:py-28">
      <Container>
        <ScrollReveal>
          <h2 className="max-w-4xl text-[clamp(2.25rem,5vw,3.5rem)] font-normal leading-[1.1] tracking-[-0.03em] text-ink-900">
            Frequently Asked Questions
          </h2>
        </ScrollReveal>
        <div className="mt-10 sm:mt-14">
          <FaqAccordion items={FAQS} variant="lines" className="font-poppins" />
        </div>
      </Container>
    </section>
  );
}
