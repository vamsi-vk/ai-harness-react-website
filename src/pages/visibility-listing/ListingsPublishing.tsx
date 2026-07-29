import {
  ArrowRight,
  Building2,
  CheckCircle,
  Globe2,
  ListChecks,
  MapPinned,
  ShieldCheck,
  Target,
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

const PATH = `${VISIBILITY_LISTING_BASE}/listings-publishing`;

const FAQS = [
  {
    q: "What is NAP consistency and why does it matter?",
    a: "NAP stands for name, address, and phone number. When those details do not match across platforms, search engines trust the listing less and customers land on the wrong page. The agent keeps every field identical everywhere it is published.",
  },
  {
    q: "How fast do updates reach every platform?",
    a: "A single change, new hours, a new phone number, a seasonal closure, goes out to Google, Apple, Facebook, Yelp, and every connected directory at once, instead of you logging into each one by hand.",
  },
  {
    q: "Can it fix listing errors automatically?",
    a: "For most drift, wrong hours, an old phone number, a duplicate entry, yes, the agent corrects it directly. Anything sensitive, like a business name or category change, is flagged for your approval first.",
  },
  {
    q: "Does this replace my Google Business Profile login?",
    a: "No. Your existing accounts stay yours. The agent connects to them and manages the day-to-day updates, so you still own every platform, you just stop having to babysit them one by one.",
  },
];

const FEATURES: {
  id: string;
  eyebrow: string;
  title: ReactNode;
  body: string;
  icon: typeof Globe2;
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
  link?: { label: string; to: string };
}[] = [
  {
    id: "one-place",
    eyebrow: "One Place, Every Platform",
    title: (
      <>
        Build it <span className={HL}>Once</span>, publish it everywhere
      </>
    ),
    body: "Change your hours for a holiday, add a new photo, update your phone number, once, and it flows to every platform and directory you are listed on. No more logging into five dashboards to say the same thing five times.",
    icon: MapPinned,
    imageSrc: "/illustrations/custom/visibility-listings-feature-publish-once.png",
    imageAlt: "One business profile publishing to Google, Apple, Facebook, and Yelp at once",
  },
  {
    id: "big-three",
    eyebrow: "Google, Apple, Facebook",
    title: (
      <>
        The three <span className={HL}>Profiles</span> that matter most, fully covered
      </>
    ),
    body: "Google Business Profile, Apple Business Connect, and Facebook are where most local searches start. Categories, services, hours, photos, and Q&A stay current on all three without a separate routine for each.",
    icon: Globe2,
    imageSrc: "/illustrations/custom/visibility-listings-feature-profiles.png",
    imageAlt: "Google, Apple, and Facebook business profiles kept current side by side",
    reverse: true,
  },
  {
    id: "prioritize",
    eyebrow: "Prioritize What Matters",
    title: (
      <>
        It knows which <span className={HL}>Platform</span> your customers actually use
      </>
    ),
    body: "A restaurant leans on Google and Yelp; a boutique may see more traffic through Facebook. The agent weighs its attention toward where your customers already are, instead of treating every platform the same.",
    icon: Target,
    imageSrc: "/illustrations/custom/visibility-listings-feature-priority.png",
    imageAlt: "Platform priority weighted toward where customers actually search",
  },
  {
    id: "directories",
    eyebrow: "Directories & Aggregators",
    title: (
      <>
        The dozens of <span className={HL}>Directories</span> you have never logged into
      </>
    ),
    body: "Data aggregators feed hundreds of smaller sites and in-car navigation systems with your business details. The agent keeps them synced too, so an outdated address does not linger somewhere you cannot see.",
    icon: ListChecks,
    imageSrc: "/illustrations/custom/visibility-listings-feature-directories.png",
    imageAlt: "Business details synced across directories and data aggregators",
    reverse: true,
  },
  {
    id: "accuracy",
    eyebrow: "Accuracy, Watched Continuously",
    title: (
      <>
        Wrong hours and moved addresses, caught before a <span className={HL}>Customer</span> is
      </>
    ),
    body: "The agent checks every listing on a schedule, not once at setup, and either fixes the drift or routes it to you with the exact change proposed. Accurate, consistent listings are also a trust signal your Reputation & Sentiment Agent builds on.",
    icon: ShieldCheck,
    imageSrc: "/illustrations/custom/visibility-listings-feature-accuracy.png",
    imageAlt: "Listing accuracy check flagging a change for owner approval",
    link: {
      label: "See the Reputation & Sentiment Agent",
      to: "/agents/reputation-sentiment",
    },
  },
];

const FLOW_STEPS: AgentFlowStep[] = [
  {
    number: "1",
    title: (
      <>
        Your profile is <span className={HL}>Built Once</span>
      </>
    ),
    railLabel: "Profile built once",
    body: "Name, hours, categories, photos, and services entered a single time, in one place.",
    accent: "violet",
    imageSrc: "/illustrations/custom/visibility-listings-flow-01-profile.png",
    imageAlt: "Shop owner entering business profile details once at her desk",
  },
  {
    number: "2",
    title: (
      <>
        It <span className={HL}>Publishes</span> across every platform
      </>
    ),
    railLabel: "Publishes everywhere",
    body: "Google, Apple, Facebook, and Yelp all go live from the same source.",
    accent: "sky",
    imageSrc: "/illustrations/custom/visibility-listings-flow-02-publish.png",
    imageAlt: "Café owner after listings go live on every platform",
  },
  {
    number: "3",
    title: (
      <>
        Directories and aggregators <span className={HL}>Sync</span>
      </>
    ),
    railLabel: "Directories sync",
    body: "The smaller sites and navigation systems that most owners never think to update.",
    accent: "emerald",
    imageSrc: "/illustrations/custom/visibility-listings-flow-03-sync.png",
    imageAlt: "Bookstore owner keeping directory listings in sync from one tablet",
  },
  {
    number: "4",
    title: (
      <>
        The agent <span className={HL}>Watches</span> for drift
      </>
    ),
    railLabel: "Watches for drift",
    body: "Hours, address, and duplicate listings checked on a recurring schedule.",
    accent: "amber",
    imageSrc: "/illustrations/custom/visibility-listings-flow-04-watch.png",
    imageAlt: "Bakery owner monitoring listing accuracy on a recurring schedule",
  },
  {
    number: "5",
    title: (
      <>
        Errors get <span className={HL}>Fixed</span>, automatically or approved
      </>
    ),
    railLabel: "Errors get fixed",
    body: "Routine drift is corrected directly. Anything sensitive comes to you first, with the change ready to approve.",
    accent: "fuchsia",
    imageSrc: "/illustrations/custom/visibility-listings-flow-05-fix.png",
    imageAlt: "Barbershop owner approving a listing correction on his phone",
  },
];

const FLOW_VISUALS = [
  {
    icon: Building2,
    panelTitle: "Profile built once",
    panelHint: "Name · hours · categories",
    chips: ["Details entered", "One record", "Ready to publish"],
  },
  {
    icon: Globe2,
    panelTitle: "Published everywhere",
    panelHint: "Google · Apple · Facebook · Yelp",
    chips: ["Live", "Consistent", "No duplicate entry"],
  },
  {
    icon: ListChecks,
    panelTitle: "Directories synced",
    panelHint: "Aggregators & niche sites",
    chips: ["Synced", "In sync", "No stale copies"],
  },
  {
    icon: ShieldCheck,
    panelTitle: "Watching for drift",
    panelHint: "Scheduled checks",
    chips: ["Hours", "Address", "Duplicates"],
  },
  {
    icon: CheckCircle,
    panelTitle: "Fixed or approved",
    panelHint: "Auto-fix or one tap",
    chips: ["Auto-corrected", "Flagged", "Approved"],
  },
];

const RELATED = [
  {
    label: "Search Optimization",
    body: "Turn accurate listings into rankings that move.",
    to: `${VISIBILITY_LISTING_BASE}/search-optimization`,
  },
  {
    label: "Visibility Analytics",
    body: "See the impact of every listing and every fix.",
    to: `${VISIBILITY_LISTING_BASE}/visibility-analytics`,
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
        name: "Listings & Publishing",
        description:
          "AI-Harness Listings & Publishing: build a business profile once, publish it to Google, Apple, Facebook, Yelp, and every connected directory, and keep it accurate with continuous monitoring.",
        brand: { "@type": "Brand", name: "AI-Harness" },
        url: `https://ai-harness.com${PATH}`,
        category: "Business Listing Management Software",
        isPartOf: {
          "@type": "SoftwareApplication",
          name: "AI-Harness Visibility & Listing Agent",
          url: `https://ai-harness.com${VISIBILITY_LISTING_BASE}`,
        },
      },
      {
        "@type": "SoftwareApplication",
        name: "AI-Harness Listings & Publishing",
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

export default function ListingsPublishing() {
  return (
    <>
      <Seo
        path={PATH}
        title="Listings & Publishing | AI Business Listing Management"
        description="Build your business profile once and publish it to Google, Apple, Facebook, Yelp, and the directories that feed local search. The agent keeps every listing accurate, consistent, and live, automatically."
        keywords="business listing management, google business profile management, apple business connect, yelp business listing, local business directories, nap consistency, business listing accuracy"
        breadcrumbs={[
          { label: "Agents", path: "/platform" },
          { label: "Visibility and Listing AI Agent", path: VISIBILITY_LISTING_BASE },
          { label: "Listings & Publishing", path: PATH },
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
          sectionId="listings-publishing-flow"
          title={
            <>
              From one profile to <span className={HL}>Every Platform</span>
            </>
          }
          steps={FLOW_STEPS}
          visuals={FLOW_VISUALS}
        />
        <RelatedSection />
        <FaqSection />
        <div className="py-16 sm:py-20">
          <CTASection
            title="Every platform, one source of truth."
            description="Turn on Listings & Publishing inside your Visibility and Listing Agent. Start free with $10 in credits."
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
              Listings & Publishing
            </p>
            <h1 className="mt-4 text-[clamp(2rem,4.5vw,3.35rem)] font-medium leading-[1.08] tracking-[-0.025em] text-ink-900">
              One profile. Every <span className={HL}>Platform</span>. Always accurate.
            </h1>
            <p className="mt-5 text-lg font-normal leading-[1.7] text-ink-600 sm:text-xl">
              Build your business profile once and the agent publishes it everywhere a customer
              might look, Google, Apple, Facebook, Yelp, and the directories that feed dozens of
              smaller sites, then keeps every field accurate and in sync without you touching it
              again.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button to="/signup" size="lg">
                Start free
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button to="/demo" variant="secondary" size="lg">
                See a listing published live
              </Button>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-ink-500">
              Free to start with $10 in credits · No credit card · Part of the Visibility and
              Listing Agent
            </p>
          </ScrollReveal>

          <ScrollReveal delay={80} className="relative min-w-0 xl:-ml-4 2xl:-ml-6">
            <MarketingHeroImage
              src="/illustrations/custom/visibility-hero-listings.png"
              alt="Retail owner publishing one business profile to multiple directories with sync status"
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
            Ten platforms, ten logins, and one set of details that never quite <span className={HL}>Match</span>
          </h2>
          <p className="mt-5 text-lg font-normal leading-[1.75] text-ink-700 sm:text-xl">
            A new phone number gets updated on Google and forgotten on Yelp. Holiday hours make it
            to Facebook but not to the directory a customer's map app actually reads from. Every
            mismatch chips away at the trust search engines and customers place in your listing.
            The agent removes the choice between doing it once and doing it right, it does both,
            everywhere, continuously.
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
              One profile, every platform, watched for <span className={HL}>Accuracy</span>
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
