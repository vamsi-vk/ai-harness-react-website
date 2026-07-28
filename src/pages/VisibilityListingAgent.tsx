import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Eye,
  LayoutDashboard,
  MapPinned,
  Search,
  ShieldCheck,
  Target,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import type { ReactNode } from "react";
import Container from "../components/Container";
import Button from "../components/Button";
import Seo from "../components/Seo";
import FaqJsonLd from "../components/FaqJsonLd";
import FaqAccordion from "../components/FaqAccordion";
import CTASection from "../components/CTASection";
import ScrollReveal from "../components/ScrollReveal";
import {
  VISIBILITY_LISTING_BASE,
  VisibilityListingChrome,
} from "../components/visibility-listing/VisibilityListingSubNav";
import SoftPastelBackdrop from "../components/marketing-automation/SoftPastelBackdrop";
import { MarketingHeroImage } from "../components/marketing-automation/MarketingHeroImage";
import { CapsuleFeatureImage } from "../components/marketing-automation/CapsuleFeatureImage";
import { TITLE_HL_BRAND as HL } from "../components/agent-title-highlight";
import { cn } from "../lib/cn";

const FAQS = [
  {
    q: "What does an AI Visibility and Listing Agent actually do?",
    a: "It builds your business profile once and publishes it across Google, Apple Maps, Facebook, Yelp, and the directories that feed local search. It checks every listing for errors, and works the categories, keywords, photos, and posts that decide who shows up first when a nearby customer searches. You approve the moves that matter, and it keeps working around the clock.",
  },
  {
    q: "Which platforms and directories does it cover?",
    a: "Google Business Profile, Apple Business Connect, Facebook, Yelp, and the data aggregators and niche directories that feed dozens of smaller sites. One update from you reaches every one of them.",
  },
  {
    q: "How does it help me rank first in local search?",
    a: "It keeps your profiles complete, accurate, and active, the signals search engines reward, then tunes categories, keywords, and posting cadence against what is actually working nearby. Ranking is a moving target, and the agent keeps adjusting instead of setting it once and walking away.",
  },
  {
    q: "Do I have to fix listing errors myself?",
    a: "No. The agent watches every profile for wrong hours, moved addresses, duplicate listings, and outdated photos, and corrects what it can on its own, then flags anything that needs your judgment before it changes.",
  },
  {
    q: "Can it handle more than one location?",
    a: "Yes. Every location gets its own listings, rankings, and dashboard, rolled up so you can see the whole footprint or drill into one address at a time.",
  },
];

const STEPS: {
  number: string;
  title: ReactNode;
  body: string;
  icon: LucideIcon;
  imageSrc: string;
  imageAlt: string;
  link?: { label: string; to: string };
}[] = [
  {
    number: "1",
    title: (
      <>
        It <span className={HL}>Lists</span> you everywhere a customer might look
      </>
    ),
    body: "One profile, built once, published to Google, Apple Maps, Facebook, Yelp, and the directories and aggregators most owners have never heard of. No account juggling, no re-typing the same hours five times.",
    icon: MapPinned,
    imageSrc: "/illustrations/custom/visibility-hub-step-01-listings.png",
    imageAlt: "Business profile published across Google, Apple, Facebook, and Yelp",
    link: {
      label: "See how listing and publishing works",
      to: `${VISIBILITY_LISTING_BASE}/listings-publishing`,
    },
  },
  {
    number: "2",
    title: (
      <>
        It <span className={HL}>Watches</span> every profile, day and night
      </>
    ),
    body: "Wrong hours, a moved address, a duplicate listing nobody remembers creating, caught and corrected before a customer ever runs into it.",
    icon: Eye,
    imageSrc: "/illustrations/custom/visibility-hub-step-02-watch.png",
    imageAlt: "Listing monitor catching wrong hours and duplicate listings before customers see them",
  },
  {
    number: "3",
    title: (
      <>
        It tunes the <span className={HL}>Keywords</span> that decide who shows up
      </>
    ),
    body: "Categories, services, and the phrases nearby customers actually search get tested and adjusted, not guessed at once and forgotten.",
    icon: Search,
    imageSrc: "/illustrations/custom/visibility-hub-step-03-keywords.png",
    imageAlt: "Home services owner tuning local keywords and categories customers search for",
    link: {
      label: "See how search optimization works",
      to: `${VISIBILITY_LISTING_BASE}/search-optimization`,
    },
  },
  {
    number: "4",
    title: (
      <>
        It makes sure you get <span className={HL}>Chosen</span>, not just found
      </>
    ),
    body: "Photos, posts, hours, and the small details that build trust in the few seconds before someone taps call, kept sharp and current so the choice is easy.",
    icon: CheckCircle2,
    imageSrc: "/illustrations/custom/visibility-hub-step-04-chosen.png",
    imageAlt: "Retail owner with fresh photos, posts, and hours that make the business the easy choice",
  },
  {
    number: "5",
    title: (
      <>
        It <span className={HL}>Proves</span> the impact, in plain numbers
      </>
    ),
    body: "Ranking position, profile views, and the actions that follow, calls, direction requests, website clicks, tracked over time so visibility stops being a feeling and starts being a metric.",
    icon: BarChart3,
    imageSrc: "/illustrations/custom/visibility-hub-step-05-metrics.png",
    imageAlt: "Local search ranking and visibility analytics over time",
    link: {
      label: "See how visibility analytics works",
      to: `${VISIBILITY_LISTING_BASE}/visibility-analytics`,
    },
  },
  {
    number: "6",
    title: (
      <>
        It builds the <span className={HL}>Trust</span> that turns a look into a customer
      </>
    ),
    body: "A complete, active, well-reviewed profile reads as the safe choice. Pair it with your Reputation & Sentiment Agent and the two work the same goal from both sides.",
    icon: ShieldCheck,
    imageSrc: "/illustrations/custom/visibility-hub-step-06-trust.png",
    imageAlt: "Complete, trustworthy business profile ready for customers to choose",
    link: {
      label: "Explore the Reputation & Sentiment Agent",
      to: "/agents/reputation-sentiment",
    },
  },
];

const CAPABILITIES = [
  {
    icon: MapPinned,
    label: "Listings & Publishing",
    body: "One profile, published everywhere that matters, and corrected the moment something drifts.",
    to: `${VISIBILITY_LISTING_BASE}/listings-publishing`,
  },
  {
    icon: Search,
    label: "Search Optimization",
    body: "The categories, keywords, and posts that move you up when a customer is actually searching.",
    to: `${VISIBILITY_LISTING_BASE}/search-optimization`,
  },
  {
    icon: BarChart3,
    label: "Visibility Analytics",
    body: "Rankings, views, and actions, measured over time and against the competition down the street.",
    to: `${VISIBILITY_LISTING_BASE}/visibility-analytics`,
  },
];

function ProductSchema() {
  const json = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        name: "Visibility & Listing Agent",
        description:
          "AI-Harness Visibility & Listing Agent that lists a business across Google, Apple, Facebook, and Yelp, watches every profile for errors, and works to rank the business first in local search.",
        brand: { "@type": "Brand", name: "AI-Harness" },
        url: `https://ai-harness.com${VISIBILITY_LISTING_BASE}`,
        category: "Local SEO and Business Listing Management Software",
      },
      {
        "@type": "SoftwareApplication",
        name: "AI-Harness Visibility & Listing Agent",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        url: `https://ai-harness.com${VISIBILITY_LISTING_BASE}`,
        featureList: [
          "AI business listing management",
          "Local search optimization",
          "Business profile monitoring",
          "Visibility analytics",
        ],
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

export default function VisibilityListingAgent() {
  return (
    <>
      <Seo
        path={VISIBILITY_LISTING_BASE}
        title="Visibility and Listing AI Agent | AI Business Listings & Local Search"
        description="The Visibility and Listing AI Agent lists your business across Google, Apple, Facebook, and Yelp, watches every profile, and works to rank you first in local search. AI business listing management for restaurants, retail, and growing SMBs. Start free."
        keywords="ai business listing management, google business profile management, local seo software, business listing accuracy, local search ranking, multi location listing management, restaurant local seo, retail local seo"
        breadcrumbs={[
          { label: "Agents", path: "/platform" },
          { label: "Visibility and Listing AI Agent", path: VISIBILITY_LISTING_BASE },
        ]}
      />
      <FaqJsonLd faqs={FAQS} />
      <ProductSchema />

      <VisibilityListingChrome>
        <Hero />
        <PillarsSection />
        <ProblemSection />
        <HowItWorksSection />
        <CapabilitiesSection />
        <DashboardSection />
        <FaqSection />
        <div className="py-16 sm:py-20">
          <CTASection
            title="Stop losing customers to businesses that show up first."
            description="Put your business on the map, watched and worked around the clock. Start free with $10 in credits, no credit card."
            primaryCta={{ label: "Put my business on the map", to: "/signup" }}
            secondaryCta={{ label: "Talk to us", to: "/contact" }}
            footnote="Free to start with $10 in credits · No credit card · Approve-first or automatic, your call"
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
              Visibility and Listing AI Agent
            </p>
            <h1 className="mt-4 text-[clamp(2rem,4.5vw,3.35rem)] font-medium leading-[1.08] tracking-[-0.025em] text-ink-900">
              Get <span className={HL}>found first</span>, everywhere customers search
            </h1>
            <p className="mt-5 text-lg font-normal leading-[1.7] text-ink-600 sm:text-xl">
              A separate agent on the AI-Harness platform that lists your business everywhere
              customers look, keeps every detail accurate, and works to rank you higher in local
              search and in the answers AI assistants give, so you are the business they find first,
              not the one down the street.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button to="/signup" size="lg">
                Put my business on the map
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button to="/demo" variant="secondary" size="lg">
                See the agent at work
              </Button>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-ink-500">
              Free to start with $10 in credits · No credit card · Approve-first or automatic, your
              call
            </p>
          </ScrollReveal>

          <ScrollReveal delay={80} className="relative min-w-0 lg:-ml-4 xl:-ml-6">
            <MarketingHeroImage
              src="/illustrations/custom/visibility-hero-main.png"
              alt="Small business owner with tablet and AI listing score, directory sync, and profile alerts"
            />
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}

const PILLARS: { icon: LucideIcon; label: string; body: string }[] = [
  {
    icon: Eye,
    label: "Constant monitoring",
    body: "Every profile, every platform, checked around the clock so an error never sits there costing you customers.",
  },
  {
    icon: Target,
    label: "High-impact moves",
    body: "It works the categories, keywords, and posts that actually move you up in local search, not busywork.",
  },
  {
    icon: Zap,
    label: "Runs on its own",
    body: "Set your approval rules once, then let it list, watch, and optimize without living in another dashboard.",
  },
];

function PillarsSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <div className="grid gap-5 sm:grid-cols-3 sm:gap-6">
          {PILLARS.map((item, index) => {
            const Icon = item.icon;
            return (
              <ScrollReveal key={item.label} delay={index * 60}>
                <article className="flex h-full flex-col rounded-2xl border border-ink-200 bg-ink-50 p-7 sm:p-8">
                  <Icon className="h-7 w-7 text-brand-600" strokeWidth={1.75} />
                  <h3 className="mt-5 text-xl font-medium tracking-tight text-ink-900">
                    {item.label}
                  </h3>
                  <p className="mt-3 text-[15px] font-normal leading-relaxed text-ink-500">
                    {item.body}
                  </p>
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

function ProblemSection() {
  return (
    <section className="relative overflow-hidden border-y border-ink-100/80 bg-white py-16 sm:py-24">
      <SoftPastelBackdrop side="left" />
      <Container className="relative z-10">
        <ScrollReveal>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-16">
            <div className="order-2 lg:order-1">
              <CapsuleFeatureImage
                src="/illustrations/custom/visibility-hub-problem-gaps.png"
                alt="Dashboard flagging listing errors and ranking gaps across platforms"
                pillSide="left"
              />
            </div>
            <div className="order-1 lg:order-2 min-w-0">
              <p className="text-sm font-medium text-brand-600">The problem</p>
              <h2 className="mt-4 text-[clamp(1.75rem,3.2vw,2.5rem)] font-medium leading-[1.15] tracking-[-0.02em] text-ink-900">
                Getting listed is easy. Getting <span className={HL}>Found and Chosen</span> is not
              </h2>
              <p className="mt-5 text-lg font-normal leading-[1.75] text-ink-700 sm:text-xl">
                Any business can claim a Google profile in ten minutes. Staying accurate across a
                dozen platforms, ranking above the competitors on the same block, and looking like
                the obvious choice once a customer arrives, that is the part that never finishes.
              </p>
              <p className="mt-4 text-lg font-normal leading-[1.75] text-ink-700 sm:text-xl">
                Most owners set it up once and never touch it again, while the businesses that keep
                working it quietly take the customers who never even reach the phone. The agent
                takes over that whole job, listing, watching, optimizing, and proving the result,
                with you approving only what deserves an owner&apos;s judgment.
              </p>
              <ul className="mt-8 grid gap-3 sm:grid-cols-3">
                {[
                  { label: "Listings drift", sub: "Hours and details go stale" },
                  { label: "Rankings are invisible", sub: "You cannot see where you stand" },
                  { label: "The choice happens fast", sub: "Before you even know it" },
                ].map((item) => (
                  <li
                    key={item.label}
                    className="rounded-2xl border border-brand-100/90 bg-brand-50/50 px-4 py-3 ring-1 ring-brand-100/60"
                  >
                    <p className="text-sm font-semibold text-ink-900">{item.label}</p>
                    <p className="mt-0.5 text-xs leading-snug text-ink-600">{item.sub}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}

function HowItWorksSection() {
  return (
    <section className="relative overflow-hidden border-b border-ink-100/70">
      <div className="relative overflow-hidden py-16 sm:pb-12 sm:pt-24">
        <SoftPastelBackdrop side="right" />
        <Container className="relative z-10">
          <ScrollReveal className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium text-ink-500">How it works</p>
            <h2 className="mt-4 text-[clamp(1.75rem,3.2vw,2.75rem)] font-medium leading-[1.12] tracking-[-0.02em] text-ink-900">
              How the agent gets you <span className={HL}>Found First</span>, end to end
            </h2>
          </ScrollReveal>
        </Container>
      </div>

      {STEPS.map((step, index) => {
        const Icon = step.icon;
        const reverse = index % 2 === 1;
        const softBand = index % 2 === 1;

        return (
          <div
            key={step.number}
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
                <div
                  className={cn(
                    "grid items-center gap-10 lg:gap-12 xl:gap-14",
                    reverse
                      ? "lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.9fr)]"
                      : "lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.15fr)]",
                  )}
                >
                  <div className={cn(reverse ? "order-2 lg:order-1" : "order-2 lg:order-2")}>
                    <CapsuleFeatureImage
                      src={step.imageSrc}
                      alt={step.imageAlt}
                      pillSide={reverse ? "right" : "left"}
                    />
                  </div>
                  <div className={cn(reverse ? "order-1 lg:order-2" : "order-1 lg:order-1")}>
                    <div className="flex items-center gap-3">
                      <span className="grid h-10 w-10 place-items-center rounded-full bg-ink-100 text-sm font-medium text-ink-600 ring-1 ring-ink-200/80">
                        {step.number}
                      </span>
                      <span className="grid h-10 w-10 place-items-center rounded-xl bg-white text-brand-600 shadow-soft ring-1 ring-ink-200/80">
                        <Icon className="h-5 w-5" strokeWidth={1.75} />
                      </span>
                    </div>
                    <h3 className="mt-4 text-[clamp(1.5rem,2.5vw,2rem)] font-medium leading-[1.15] tracking-[-0.02em] text-ink-900">
                      {step.title}
                    </h3>
                    <p className="mt-4 text-lg font-normal leading-[1.7] text-ink-600">{step.body}</p>
                    {step.link ? (
                      <Link
                        to={step.link.to}
                        className="mt-6 inline-flex items-center gap-2 text-[15px] font-medium text-brand-700 transition hover:gap-2.5 hover:text-brand-800"
                      >
                        {step.link.label}
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

function CapabilitiesSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <ScrollReveal className="max-w-3xl">
          <h2 className="text-[clamp(1.75rem,3.2vw,2.5rem)] font-medium leading-[1.15] tracking-[-0.02em] text-ink-900">
            Three jobs, one <span className={HL}>Agent</span>
          </h2>
          <p className="mt-4 text-base font-normal leading-relaxed text-ink-600 sm:text-lg">
            Each capability below runs continuously and connects to the others, listing feeds
            optimization, optimization feeds the numbers that prove it worked.
          </p>
        </ScrollReveal>
        <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-3">
          {CAPABILITIES.map((item, index) => {
            const Icon = item.icon;
            return (
              <ScrollReveal key={item.to} delay={index * 50}>
                <Link
                  to={item.to}
                  className="group flex h-full flex-col rounded-3xl border border-ink-200/90 bg-white p-6 transition hover:border-brand-200 hover:shadow-soft"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-50 text-brand-700 ring-1 ring-brand-200/70">
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <p className="mt-4 text-lg font-medium text-ink-900 group-hover:text-brand-700">
                    {item.label}
                  </p>
                  <p className="mt-2 flex-1 text-[15px] leading-relaxed text-ink-600">{item.body}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-[15px] font-medium text-brand-700 transition group-hover:gap-2.5">
                    Explore
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

function DashboardSection() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <ScrollReveal className="order-2 lg:order-1">
            <p className="text-sm font-medium text-ink-500">
              On your AI-Harness dashboard
            </p>
            <h2 className="mt-4 text-[clamp(1.75rem,3.2vw,2.5rem)] font-medium leading-[1.15] tracking-[-0.02em] text-ink-900">
              <span className={HL}>Visibility</span> work lives in the same workspace as the rest of
              your AI team
            </h2>
            <p className="mt-5 text-lg font-normal leading-[1.7] text-ink-600">
              One view shows every listing, its accuracy, its ranking, and the actions it drove,
              per location and rolled up across your whole footprint. Approvals sit exactly where
              you want them, and the agent keeps working between the moments you check in.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Every listing, its accuracy, and its status in one view",
                "Ranking and visibility trend per location",
                "Approvals set where you want them",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] text-ink-700">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" strokeWidth={2} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal delay={80} className="order-1 lg:order-2">
            <div className="overflow-hidden rounded-[28px] border border-ink-200 bg-ink-50 shadow-lift">
              <div className="flex items-center gap-2 border-b border-ink-200 bg-white px-5 py-4">
                <LayoutDashboard className="h-4 w-4 text-brand-600" />
                <p className="text-sm font-medium text-ink-800">Visibility and Listing</p>
              </div>
              <img
                src="/illustrations/custom/visibility-hub-dashboard-preview.png"
                alt="Visibility and listing dashboard with rankings, accuracy, and location breakdown"
                className="block h-auto w-full object-contain object-center"
                loading="lazy"
                decoding="async"
              />
            </div>
          </ScrollReveal>
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
