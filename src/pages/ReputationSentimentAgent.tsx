import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Clock3,
  LayoutDashboard,
  Megaphone,
  MessageCircle,
  MessageCircleWarning,
  MessageSquare,
  ShieldCheck,
  Sparkles,
  Tags,
  Unplug,
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
  REPUTATION_AGENT_BASE,
  ReputationAgentChrome,
} from "../components/reputation-sentiment/ReputationAgentSubNav";
import SoftPastelBackdrop from "../components/marketing-automation/SoftPastelBackdrop";
import { MarketingHeroImage } from "../components/marketing-automation/MarketingHeroImage";
import { CapsuleFeatureImage } from "../components/marketing-automation/CapsuleFeatureImage";
import { TITLE_HL_BRAND as HL } from "../components/agent-title-highlight";
import { cn } from "../lib/cn";

const FAQS = [
  {
    q: "What is AI reputation management?",
    a: "AI reputation management is an agent continuously growing, answering, and analyzing your reviews across platforms, under your approval rules. In AI-Harness it covers review growth, review response, sentiment analysis, competitive benchmarking, and review marketing in one connected system.",
  },
  {
    q: "Does the agent reply automatically, or do I approve?",
    a: "Your call, and you can change it anytime. Most owners start approve-first, then allow automatic replies for routine praise once they have watched the agent work. Critical reviews always route to you first.",
  },
  {
    q: "How does sentiment analysis help a local business?",
    a: "It converts hundreds of individual comments into a short list of causes: what customers consistently love and what consistently costs you stars. Fixing one recurring cause usually does more for your rating than any number of polite replies.",
  },
  {
    q: "Can it manage more than one location?",
    a: "Yes. Reviews, responses, sentiment, and benchmarks are tracked per location and rolled up, so a two-store boutique or a three-site restaurant group sees each door and the whole brand at once.",
  },
  {
    q: "Why do review responses matter for local search?",
    a: "Search and recommendation systems weigh how fresh your reviews are and whether the business responds. Consistent, fast, thoughtful responses are a visibility signal as well as a courtesy, and that is exactly what the agent maintains.",
  },
];

const STEPS: {
  number: string;
  title: ReactNode;
  body: string;
  icon: LucideIcon;
  imageSrc: string;
  imageAlt: string;
  link?: { label: string; page: string; to: string };
}[] = [
  {
    number: "1",
    title: (
      <>
        It keeps <span className={HL}>Fresh Reviews</span> flowing
      </>
    ),
    body: "The agent notices recent customers through your bookings, orders, and connected tools, and invites the happy ones to share, on the channel each person actually answers, at the moment they are most likely to say yes. A steady stream of recent reviews is the strongest trust signal a local business can hold.",
    icon: Sparkles,
    imageSrc: "/illustrations/custom/reputation-step-fresh-reviews.png",
    imageAlt:
      "Cafe owner with tablet and automated review invitation after a customer visit",
    link: {
      label: "See how review growth works",
      page: "Review Generation",
      to: `${REPUTATION_AGENT_BASE}/review-generation`,
    },
  },
  {
    number: "2",
    title: (
      <>
        It <span className={HL}>Answers Everything</span>, quickly and in your voice
      </>
    ),
    body: "New reviews across Google, Facebook, and the platforms your customers use get a considered, brand-safe reply within minutes. Praise gets gratitude that invites a return visit. Criticism gets acknowledgment without argument. Anything critical routes to you first, with a drafted response attached.",
    icon: MessageSquare,
    imageSrc: "/illustrations/custom/reputation-step-review-replies.png",
    imageAlt:
      "Owner on phone with AI-drafted review reply and escalation workflow",
    link: {
      label: "See how responses and escalation work",
      page: "Review Management",
      to: `${REPUTATION_AGENT_BASE}/review-management`,
    },
  },
  {
    number: "3",
    title: (
      <>
        It hears the <span className={HL}>Pattern</span> behind the words
      </>
    ),
    body: "Sentiment analysis groups what customers keep praising and what they keep flagging, wait times at the restaurant, sizing at the boutique, so you fix the cause once instead of apologizing for it forever.",
    icon: Tags,
    imageSrc: "/illustrations/custom/reputation-step-sentiment-patterns.png",
    imageAlt: "Sentiment themes grouped from customer reviews into actionable patterns",
  },
  {
    number: "4",
    title: (
      <>
        It measures <span className={HL}>Reputation</span> like the business metric it is
      </>
    ),
    body: "Rating trend, review volume, and response speed, tracked over time, per location, and against nearby competition, on one dashboard your whole team can read.",
    icon: BarChart3,
    imageSrc: "/illustrations/custom/reputation-step-reputation-metrics.png",
    imageAlt:
      "Reputation report with rating trend, review volume, response speed, and local benchmarks",
  },
  {
    number: "5",
    title: (
      <>
        It turns your best reviews into your best <span className={HL}>Marketing</span>
      </>
    ),
    body: "Five-star stories flow to your Marketing Automation Agent as ready-to-approve social posts, so real customers do the persuading.",
    icon: Megaphone,
    imageSrc: "/illustrations/custom/reputation-step-review-to-marketing.png",
    imageAlt:
      "Five-star review turned into a ready-to-approve social post in Marketing Automation",
    link: {
      label: "Explore reputation analytics and review marketing",
      page: "Review Analytics & Marketing",
      to: `${REPUTATION_AGENT_BASE}/review-analytics-marketing`,
    },
  },
];

function ProductSchema() {
  const json = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        name: "Reputation & Sentiment Agent",
        description:
          "AI-Harness Reputation & Sentiment Agent that grows reviews, answers every one in your voice, reads the patterns inside them, and turns the best into marketing for restaurants, retail, and SMBs.",
        brand: { "@type": "Brand", name: "AI-Harness" },
        url: `https://ai-harness.com${REPUTATION_AGENT_BASE}`,
        category: "Reputation Management Software",
      },
      {
        "@type": "SoftwareApplication",
        name: "AI-Harness Reputation & Sentiment Agent",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        url: `https://ai-harness.com${REPUTATION_AGENT_BASE}`,
        featureList: [
          "AI reputation management",
          "Review generation",
          "Review response",
          "Customer sentiment analysis",
          "Review marketing",
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

export default function ReputationSentimentAgent() {
  return (
    <>
      <Seo
        path={REPUTATION_AGENT_BASE}
        title="Reputation & Sentiment Agent | AI Reputation Management"
        description="Grow reviews, answer every one in your voice, read the patterns inside them, and turn the best into marketing. AI reputation care for restaurants, retail, and SMBs."
        keywords="ai reputation management, online reputation management for local businesses, customer sentiment analysis, review platform for SMBs, restaurant reputation management, retail review management, respond to google reviews, reputation monitoring"
        breadcrumbs={[
          { label: "Reputation & Sentiment Agent", path: REPUTATION_AGENT_BASE },
        ]}
      />
      <FaqJsonLd faqs={FAQS} />
      <ProductSchema />

      <ReputationAgentChrome>
        <Hero />
        <ProblemSection />
        <HowItWorksSection />
        <BusinessMeaningSection />
        <DashboardSection />
        <FaqSection />
        <div className="py-16 sm:py-20">
          <CTASection
            title="A business that grows on its own proof."
            description="Hire your Reputation & Sentiment Agent. Start free with $10 in credits, no credit card."
            primaryCta={{ label: "Start free", to: "/signup" }}
            secondaryCta={{ label: "Talk to us", to: "/contact" }}
            footnote="Free to start with $10 in credits · No credit card · Approve-first or automatic, your call"
          />
        </div>
      </ReputationAgentChrome>
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-ink-100/70 pb-16 pt-12 sm:pb-20 sm:pt-16">
      <SoftPastelBackdrop side="left" />

      <Container className="relative z-10">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-16">
          <ScrollReveal className="relative z-10 max-w-xl min-w-0">
            <p className="text-sm font-medium text-ink-500">
              Reputation & Sentiment Agent
            </p>
            <h1 className="mt-4 text-[clamp(2rem,4.5vw,3.35rem)] font-medium leading-[1.08] tracking-[-0.025em] text-ink-900">
              Your <span className={HL}>Reputation</span>, looked after around the clock
            </h1>
            <p className="mt-5 text-lg font-normal leading-[1.7] text-ink-600 sm:text-xl">
              Reviews decide who walks in next. Your agent keeps new ones coming, answers every
              single one in your voice, hears the pattern behind the words, and puts your best
              moments to work as marketing. One connected system for the asset your business runs
              on.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button to="/signup" size="lg">
                Start free
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

          <ScrollReveal delay={80} className="relative min-w-0">
            <MarketingHeroImage
              src="/illustrations/custom/reputation-hero-main.png"
              alt="Owner monitoring a new Google review, rating trend, and attention queue on phone"
            />
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}

function ReputationProblemVisual() {
  return (
    <div className="relative pb-2 pr-2 sm:pb-3 sm:pr-3">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[1.65rem] bg-gradient-to-br from-[#7C3AED]/10 via-[#9A6FF0]/6 to-rose-400/8"
      />
      <div
        className="relative overflow-hidden rounded-[1.5rem] p-[2px] shadow-[0_28px_56px_-32px_rgba(124,58,237,0.28)]"
        style={{
          background:
            "linear-gradient(135deg, rgba(124,58,237,0.4), rgba(154,111,240,0.25), rgba(244,63,94,0.2))",
        }}
      >
        <div className="overflow-hidden rounded-[calc(1.5rem-2px)] bg-white">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-ink-100 bg-gradient-to-r from-brand-50/80 to-white px-4 py-3 sm:px-5">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-rose-400 opacity-40" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-rose-500" />
              </span>
              <p className="text-xs font-semibold uppercase tracking-wide text-ink-500">While you&apos;re open</p>
            </div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-ink-900 px-3 py-1 text-[11px] font-medium text-white">
              <Clock3 className="h-3.5 w-3.5" strokeWidth={2} />
              Sat register line · 9:42 PM
            </span>
          </div>

          <div className="space-y-3 p-4 sm:p-5">
            <div className="rounded-2xl border border-rose-200/90 bg-gradient-to-br from-rose-50/90 to-white p-4 shadow-sm ring-1 ring-rose-100">
              <div className="flex items-start justify-between gap-3">
                <div className="flex gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white text-rose-600 shadow-sm ring-1 ring-rose-100">
                    <MessageCircleWarning className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-ink-900">New Google review · 2★</p>
                    <p className="mt-1 text-[13px] leading-snug text-ink-600">
                      &ldquo;Great food — waited forty minutes.&rdquo;
                    </p>
                  </div>
                </div>
                <span className="shrink-0 rounded-full bg-rose-600 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
                  Unread
                </span>
              </div>
            </div>

            <div className="rounded-2xl border border-amber-200/80 bg-gradient-to-br from-amber-50/70 to-white p-4 shadow-sm ring-1 ring-amber-100/80">
              <div className="flex items-start gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white text-amber-700 shadow-sm ring-1 ring-amber-100">
                  <MessageCircle className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-ink-900">Yelp · still no reply</p>
                  <p className="mt-1 text-[13px] text-ink-600">Future customers see the silence — 12 days.</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-dashed border-brand-200/90 bg-brand-50/40 p-4">
              <div className="flex items-center gap-2 text-brand-800">
                <Unplug className="h-4 w-4 shrink-0" strokeWidth={2} />
                <p className="text-xs font-semibold uppercase tracking-wide">Patterns never connected</p>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {["Slow Tuesday waits", "Sizing runs small", "Friday service"].map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1 rounded-full border border-brand-200/80 bg-white px-3 py-1 text-xs font-medium text-brand-900"
                  >
                    <Tags className="h-3 w-3 text-brand-500" strokeWidth={2} />
                    {tag}
                  </span>
                ))}
              </div>
              <p className="mt-3 text-[12px] leading-relaxed text-ink-500">
                Scattered across Google, Yelp, and Facebook — never one picture.
              </p>
            </div>
          </div>

          <div className="border-t border-brand-100 bg-gradient-to-r from-[#7C3AED] to-[#9A6FF0] px-4 py-3.5 sm:px-5">
            <div className="flex items-center gap-3 text-white">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-white/15 ring-1 ring-white/25">
                <Sparkles className="h-4 w-4" strokeWidth={2} />
              </span>
              <div>
                <p className="text-sm font-semibold">Reputation &amp; Sentiment Agent</p>
                <p className="text-xs text-white/85">Grow · answer · understand · market — you approve what matters.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
              <ReputationProblemVisual />
            </div>
            <div className="order-1 lg:order-2 min-w-0">
              <p className="text-sm font-medium text-brand-600">The problem</p>
              <h2 className="mt-4 text-[clamp(1.75rem,3.2vw,2.5rem)] font-medium leading-[1.15] tracking-[-0.02em] text-ink-900">
                Your <span className={HL}>Reputation</span> is working for you or against you every hour
                you are open
              </h2>
              <p className="mt-5 text-lg font-normal leading-[1.75] text-ink-700 sm:text-xl">
                Most of that work happens where you cannot see it. New reviews land during the dinner
                rush or the Saturday register line. Old ones sit unanswered while hundreds of future
                customers read the silence.
              </p>
              <p className="mt-4 text-lg font-normal leading-[1.75] text-ink-700 sm:text-xl">
                The pattern hiding across platforms — the slow-Tuesday complaints, the sizing-runs-small
                refrain — never gets connected. The agent takes over that whole job: growing reviews,
                answering them, understanding them, and turning them into growth, with you approving only
                what deserves an owner&apos;s judgment.
              </p>
              <ul className="mt-8 grid gap-3 sm:grid-cols-3">
                {[
                  { label: "After-hours reviews", sub: "Land when you're closed" },
                  { label: "Public silence", sub: "Unanswered = trust lost" },
                  { label: "Hidden patterns", sub: "Never stitched together" },
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
              How the agent cares for your <span className={HL}>Reputation</span>, end to end
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

function BusinessMeaningSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <ScrollReveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-[clamp(1.75rem,3.2vw,2.5rem)] font-medium leading-[1.15] tracking-[-0.02em] text-ink-900">
              What this means for the <span className={HL}>Business</span>
            </h2>
            <p className="mt-4 text-base font-normal leading-relaxed text-ink-600 sm:text-lg">
              The asking, answering, listening, and measuring run continuously without you. Your
              attention goes only to the handful of moments that truly need an owner.
            </p>
          </div>
          <Link
            to="/demo"
            className="inline-flex h-11 shrink-0 items-center justify-center rounded-full border border-ink-900 px-5 text-sm font-medium text-ink-900 transition hover:bg-ink-900 hover:text-white"
          >
            See the agent at work
          </Link>
        </ScrollReveal>

        <div className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-3 sm:gap-6">
          {[
            {
              icon: Sparkles,
              label: "Runs continuously",
              body: "Asking, answering, listening, and measuring without you living in the inbox.",
            },
            {
              icon: ShieldCheck,
              label: "Owner where it counts",
              body: "Your judgment only on the handful of moments that need an owner.",
            },
            {
              icon: MessageSquare,
              label: "On the record",
              body: "Every reply in your name is searchable, so trust is earned over time.",
            },
          ].map((item, index) => {
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
              <span className={HL}>Reputation</span> work lives in the same workspace as the rest of
              your AI team
            </h2>
            <p className="mt-5 text-lg font-normal leading-[1.7] text-ink-600">
              An attention queue surfaces the few reviews that need your judgment, approvals sit
              exactly where you want them, and a complete record holds every reply the agent has
              ever sent in your name, searchable whenever you want to check. You choose the
              autonomy: approve-first on day one, automatic for routine thank-yous once the agent
              has earned it.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Attention queue for reviews that need judgment",
                "Approvals set where you want them",
                "Searchable record of every reply in your name",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] text-ink-700">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" strokeWidth={2} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-relaxed text-ink-500">
              Build note: Embed the review inbox and attention-queue screenshots here once they are
              captured. Until then, the platform dashboard shot from the marketing hub can hold the
              slot.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={80} className="order-1 lg:order-2">
            <div className="overflow-hidden rounded-[28px] border border-ink-200 bg-ink-50 shadow-lift">
              <div className="border-b border-ink-200 bg-white px-5 py-4">
                <div className="flex items-center gap-2">
                  <LayoutDashboard className="h-4 w-4 text-brand-600" />
                  <p className="text-sm font-medium text-ink-800">Reputation</p>
                </div>
                <p className="mt-1 text-xs text-ink-500">
                  Attention queue · Approvals · Reply record
                </p>
              </div>
              <div className="space-y-3 p-5">
                {["Critical review · needs your judgment", "Draft reply ready", "Routine praise · auto"].map(
                  (label) => (
                    <div
                      key={label}
                      className="rounded-2xl border border-ink-200 bg-white px-4 py-3 text-[15px] text-ink-700"
                    >
                      {label}
                    </div>
                  ),
                )}
              </div>
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
