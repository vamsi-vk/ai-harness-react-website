import {
  ArrowRight,
  Compass,
  FileText,
  Gauge,
  MapPin,
  Search,
  Tags,
  TrendingUp,
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

const PATH = `${VISIBILITY_LISTING_BASE}/search-optimization`;

const FAQS = [
  {
    q: "What actually moves the local pack ranking?",
    a: "Relevance, distance, and prominence. The agent works the parts you control, categories, keywords, completeness, review signals, and posting activity, so your profile reads as the most relevant, most trustworthy result for the search a nearby customer just typed.",
  },
  {
    q: "How is this different from paid local ads?",
    a: "Ads buy a temporary spot at the top and stop the moment you stop paying. Search optimization earns a durable position in the organic local pack and map results, the ones customers trust more and click more often.",
  },
  {
    q: "Do I need to write my own posts?",
    a: "No. The agent drafts posts and content on a steady cadence in your voice, ready for you to approve or let go out automatically once you trust the pattern.",
  },
  {
    q: "How often does it check my ranking?",
    a: "Continuously. Rankings move as competitors update their own profiles and as search algorithms shift, so the agent rechecks position for your key categories and keywords on an ongoing basis, not once a quarter.",
  },
];

const FEATURES: {
  id: string;
  eyebrow: string;
  title: ReactNode;
  body: string;
  icon: typeof Search;
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
}[] = [
  {
    id: "keywords",
    eyebrow: "Categories & Keywords",
    title: (
      <>
        It finds the words your <span className={HL}>Customers</span> actually search
      </>
    ),
    body: "Primary and secondary categories, services, and the phrases nearby customers type into search, tested against what is actually driving views and clicks, not a guess made once at setup.",
    icon: Search,
    imageSrc: "/illustrations/custom/visibility-search-feature-keywords.png",
    imageAlt: "Restaurant owner with local keyword planner and listing score recommendations",
  },
  {
    id: "content",
    eyebrow: "Posts & Content",
    title: (
      <>
        Fresh activity is a <span className={HL}>Ranking Signal</span>, so it never goes stale
      </>
    ),
    body: "Google and Facebook both reward profiles that stay active. The agent drafts updates, offers, and seasonal posts on a steady cadence, so your profile never sits quiet long enough to lose ground.",
    icon: FileText,
    imageSrc: "/illustrations/custom/visibility-search-feature-posts.png",
    imageAlt: "Scheduled posts and content keeping a business profile active",
    reverse: true,
  },
  {
    id: "competitors",
    eyebrow: "Competitor Tracking",
    title: (
      <>
        See exactly who is beating you, and <span className={HL}>Why</span>
      </>
    ),
    body: "The agent tracks the businesses ranking above you for the same searches, and shows the gap, more reviews, better photos, a category you have not claimed, so effort goes where it actually closes the distance.",
    icon: Users,
    imageSrc: "/illustrations/custom/visibility-search-feature-competitors.png",
    imageAlt: "Competitor comparison for local search ranking factors",
  },
  {
    id: "ranking-factors",
    eyebrow: "Ranking Factors, Tuned Continuously",
    title: (
      <>
        Relevance, distance, and <span className={HL}>Prominence</span>, worked together
      </>
    ),
    body: "No single fix moves a ranking on its own. The agent balances the factors search engines actually weigh, completeness, activity, reviews, and links, and keeps adjusting as your standing and the competition shift.",
    icon: Gauge,
    imageSrc: "/illustrations/custom/visibility-search-feature-factors.png",
    imageAlt: "Local search ranking factors tracked and balanced over time",
    reverse: true,
  },
];

const FLOW_STEPS: AgentFlowStep[] = [
  {
    number: "1",
    title: (
      <>
        Your profile and nearby competitors get <span className={HL}>Analyzed</span>
      </>
    ),
    railLabel: "Profile & competitors analyzed",
    body: "Categories, keywords, photos, and activity compared against the businesses currently outranking you.",
    accent: "violet",
    imageSrc: "/illustrations/custom/visibility-search-flow-01-analyze.png",
    imageAlt: "Coffee shop owner analyzing nearby competitors on the same block",
  },
  {
    number: "2",
    title: (
      <>
        Categories and <span className={HL}>Keywords</span> get tuned
      </>
    ),
    railLabel: "Categories & keywords tuned",
    body: "The terms most likely to bring a real search to your profile, not just any term with volume.",
    accent: "sky",
    imageSrc: "/illustrations/custom/visibility-search-flow-02-keywords.png",
    imageAlt: "Florist tuning categories and services customers actually search for",
  },
  {
    number: "3",
    title: (
      <>
        Posts publish on a steady <span className={HL}>Cadence</span>
      </>
    ),
    railLabel: "Posts publish on cadence",
    body: "Regular activity that keeps the profile looking, and ranking, alive.",
    accent: "emerald",
    imageSrc: "/illustrations/custom/visibility-search-flow-03-posts.png",
    imageAlt: "Studio owner posting fresh offers to keep the profile active",
  },
  {
    number: "4",
    title: (
      <>
        Rankings get tracked against the <span className={HL}>Competition</span>
      </>
    ),
    railLabel: "Rankings tracked",
    body: "Position for each key search, watched over time and by location.",
    accent: "amber",
    imageSrc: "/illustrations/custom/visibility-search-flow-04-rankings.png",
    imageAlt: "Business owner tracking local search rankings over time",
  },
  {
    number: "5",
    title: (
      <>
        The agent <span className={HL}>Adjusts</span> as the local pack shifts
      </>
    ),
    railLabel: "Agent adjusts",
    body: "When a competitor moves or an algorithm shift lands, the plan changes with it, automatically.",
    accent: "fuchsia",
    imageSrc: "/illustrations/custom/visibility-search-flow-05-adjust.png",
    imageAlt: "Restaurant owner confident after the agent retuned local search",
  },
];

const FLOW_VISUALS = [
  {
    icon: Compass,
    panelTitle: "Analyzed",
    panelHint: "Profile vs. nearby competitors",
    chips: ["Categories", "Photos", "Activity"],
  },
  {
    icon: Tags,
    panelTitle: "Keywords tuned",
    panelHint: "What customers actually search",
    chips: ["Primary category", "Services", "Search terms"],
  },
  {
    icon: FileText,
    panelTitle: "Posts on cadence",
    panelHint: "Consistent activity",
    chips: ["Draft", "Approve", "Publish"],
  },
  {
    icon: MapPin,
    panelTitle: "Rankings tracked",
    panelHint: "Per keyword · per location",
    chips: ["Position", "Trend", "Gap"],
  },
  {
    icon: TrendingUp,
    panelTitle: "Plan adjusts",
    panelHint: "As the local pack shifts",
    chips: ["Re-tuned", "Re-tested", "Re-ranked"],
  },
];

const RELATED = [
  {
    label: "Listings & Publishing",
    body: "The accurate, published profile everything else is built on.",
    to: `${VISIBILITY_LISTING_BASE}/listings-publishing`,
  },
  {
    label: "Visibility Analytics",
    body: "See the ranking movement this work is producing.",
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
        name: "Search Optimization",
        description:
          "AI-Harness Search Optimization: tunes categories, keywords, and posting activity, tracks competitors, and keeps adjusting the local search ranking factors that decide who shows up first.",
        brand: { "@type": "Brand", name: "AI-Harness" },
        url: `https://ai-harness.com${PATH}`,
        category: "Local SEO Software",
        isPartOf: {
          "@type": "SoftwareApplication",
          name: "AI-Harness Visibility & Listing Agent",
          url: `https://ai-harness.com${VISIBILITY_LISTING_BASE}`,
        },
      },
      {
        "@type": "SoftwareApplication",
        name: "AI-Harness Search Optimization",
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

export default function SearchOptimization() {
  return (
    <>
      <Seo
        path={PATH}
        title="Local Search Optimization | Rank First in Local Search"
        description="The agent tunes categories, keywords, and posts, tracks the competitors outranking you, and keeps adjusting the local search signals that decide who shows up first. Local SEO that runs itself."
        keywords="local seo, google local pack ranking, business category optimization, local search ranking factors, google business profile keywords, local seo software, rank higher in google maps"
        breadcrumbs={[
          { label: "Agents", path: "/platform" },
          { label: "Visibility and Listing AI Agent", path: VISIBILITY_LISTING_BASE },
          { label: "Search Optimization", path: PATH },
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
          sectionId="search-optimization-flow"
          title={
            <>
              From analysis to a ranking that <span className={HL}>Holds</span>
            </>
          }
          steps={FLOW_STEPS}
          visuals={FLOW_VISUALS}
        />
        <RelatedSection />
        <FaqSection />
        <div className="py-16 sm:py-20">
          <CTASection
            title="Being findable is not the same as ranking first."
            description="Turn on Search Optimization inside your Visibility and Listing Agent. Start free with $10 in credits."
            primaryCta={{ label: "Start free", to: "/signup" }}
            secondaryCta={{ label: "Talk to us", to: "/contact" }}
            footnote="Free to start with $10 in credits · No credit card · Part of the Visibility and Listing Agent"
          />
        </div>
      </VisibilityListingChrome>
    </>
  );
}

const VISIBILITY_HERO_IMAGE_CLASS =
  "aspect-[5/4] h-auto min-h-[15rem] w-full object-cover object-[40%_center] sm:min-h-[17rem] lg:aspect-[4/3] lg:min-h-[20rem] xl:min-h-[22rem]";

function Hero() {
  return (
    <section className="relative overflow-x-clip border-b border-ink-100/70 pb-12 pt-10 sm:pb-16 sm:pt-14 lg:pb-20 lg:pt-16">
      <SoftPastelBackdrop side="left" />

      <Container className="relative z-10">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-10 xl:gap-12">
          <ScrollReveal className="relative z-10 max-w-xl min-w-0">
            <p className="text-sm font-medium text-ink-500">
              Search Optimization
            </p>
            <h1 className="mt-4 text-[clamp(2rem,4.5vw,3.35rem)] font-medium leading-[1.08] tracking-[-0.025em] text-ink-900">
              Rank <span className={HL}>First</span>. Then stay there.
            </h1>
            <p className="mt-5 text-lg font-normal leading-[1.7] text-ink-600 sm:text-xl">
              Categories, keywords, and posting activity are moving targets, not a setting you pick
              once. The agent tunes them continuously, tracks who is outranking you and why, and
              keeps working the local search signals that decide who a customer sees first.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button to="/signup" size="lg">
                Start free
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button to="/demo" variant="secondary" size="lg">
                See a ranking gap closed
              </Button>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-ink-500">
              Free to start with $10 in credits · No credit card · Part of the Visibility and
              Listing Agent
            </p>
          </ScrollReveal>

          <ScrollReveal delay={80} className="relative min-w-0 xl:-ml-4 2xl:-ml-6">
            <MarketingHeroImage
              src="/illustrations/custom/visibility-hero-search.png"
              alt="Restaurant owner with tablet, local keyword planner, and listing score recommendations"
              className={VISIBILITY_HERO_IMAGE_CLASS}
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
            Local rankings move every week, and most owners check them <span className={HL}>Once</span>
          </h2>
          <p className="mt-5 text-lg font-normal leading-[1.75] text-ink-700 sm:text-xl">
            A competitor adds photos, picks up a run of reviews, or claims a category you have not
            touched, and the top spot for your busiest search quietly changes hands. Nobody gets an
            alert. The agent watches that fight continuously and keeps making the small, correct
            moves that hold your position instead of losing it a little at a time.
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
      imageClassName={
        feature.id === "keywords"
          ? "translate-x-3 object-left sm:translate-x-5"
          : feature.id === "competitors"
            ? "translate-x-2 object-right sm:translate-x-4"
            : undefined
      }
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
              Keywords, content, competitors, and the factors that <span className={HL}>Rank</span> you
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
