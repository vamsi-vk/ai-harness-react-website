import {
  ArrowRight,
  CheckCircle2,
  Eye,
  MessageCircle,
  MousePointerClick,
  ShieldAlert,
  Sparkles,
  ThumbsUp,
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
import AgentFlowStepsSection from "../../components/AgentFlowStepsSection";
import {
  MARKETING_AGENT_BASE,
  MarketingAgentChrome,
} from "../../components/marketing-automation/MarketingAgentSubNav";
import SoftPastelBackdrop from "../../components/marketing-automation/SoftPastelBackdrop";
import { MarketingHeroImage } from "../../components/marketing-automation/MarketingHeroImage";
import { CapsuleFeatureImage } from "../../components/marketing-automation/CapsuleFeatureImage";
import { TITLE_HL as HL } from "../../components/agent-title-highlight";
import { cn } from "../../lib/cn";

const PATH = `${MARKETING_AGENT_BASE}/social-engagement`;

const FAQS = [
  {
    q: "Why do fast replies matter for a local business?",
    a: "Because most social questions are buying signals with a short shelf life: a diner picking tonight’s table or a shopper checking stock decides within hours. Fast, helpful answers win those decisions and signal to the platforms that your page is active.",
  },
  {
    q: "Will the AI answer things it should not?",
    a: "No. Sensitive topics, complaints, and anything the agent is unsure about escalate to you with a drafted reply and full context. You choose what it may answer on its own, and you can keep every reply on approval while you build trust.",
  },
  {
    q: "Does it work outside business hours?",
    a: "Yes. The agent watches every connected channel around the clock, which is exactly when most owners cannot: late evenings, weekends, and the middle of service.",
  },
  {
    q: "Can it route people to bookings or checkout?",
    a: "Yes. Reservation questions get your booking link, and product questions get stock status plus the right store or checkout path, so a comment becomes a customer without waiting for you.",
  },
];

const FEATURES: {
  id: string;
  eyebrow: string;
  title: ReactNode;
  body: string;
  caption?: string;
  buildNote?: string;
  icon: typeof Eye;
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
  bullets?: string[];
  metrics?: boolean;
}[] = [
  {
    id: "always-watching",
    eyebrow: "Always Watching",
    title: (
      <>
        Nothing slips past the <span className={HL}>Agent</span>
      </>
    ),
    body: "Comments, message requests, and DMs across every connected channel, monitored around the clock. The 9:40 PM question gets a 9:41 PM answer, not a next-morning apology.",
    icon: Eye,
    imageSrc: "/illustrations/custom/marketing-engagement-watching.png",
    imageAlt:
      "Restaurant owner after hours while an AI agent monitors social comments and DMs across channels",
  },
  {
    id: "answers-that-sell",
    eyebrow: "Answers That Sell",
    title: (
      <>
        Replies in your voice, pointed at <span className={HL}>Revenue</span>
      </>
    ),
    body: "A do-you-take-reservations gets a warm answer and the booking link. A got-this-in-size-nine gets stock status and the checkout or the right location. A compliment gets the kind of thanks that keeps the thread, and the algorithm, warm.",
    icon: Sparkles,
    imageSrc: "/illustrations/custom/marketing-engagement-replies.png",
    imageAlt:
      "AI agent reply to a reservation question with a warm answer and booking link",
    reverse: true,
    bullets: [
      "Reservation questions → booking link",
      "Product questions → stock + store or checkout",
      "Praise → on-brand thanks that keep the thread alive",
    ],
  },
  {
    id: "knows-limits",
    eyebrow: "Knows Its Limits",
    title: (
      <>
        The <span className={HL}>Judgment Calls</span> come to you
      </>
    ),
    body: "Complaints, refund requests, and anything sensitive escalate with full context and a drafted reply you can edit before anything posts. Your attention goes only where an owner is actually needed.",
    icon: ShieldAlert,
    imageSrc: "/illustrations/custom/marketing-engagement-escalation.png",
    imageAlt:
      "Sensitive customer complaint escalated to the owner with full context and a draft reply",
  },
  {
    id: "measured",
    eyebrow: "Measured, Not Guessed",
    title: (
      <>
        Engagement you can <span className={HL}>See Move</span>
      </>
    ),
    body: "Total Views, Likes, Comments, and Clicks roll up on the Outreach dashboard across your published posts, so rising interest is visible the day it starts, and the month-end report shows which conversations turned into customers.",
    caption:
      "Engagement cards on the Outreach dashboard: Views, Likes, Comments, and Clicks across published posts.",
    buildNote:
      "The live page should also show the reply-thread view once it is captured on a branded demo workspace.",
    icon: ThumbsUp,
    imageSrc: "/illustrations/custom/marketing-engagement-metrics.png",
    imageAlt:
      "Outreach engagement dashboard showing views, likes, comments, and clicks with growth trends",
    reverse: true,
    metrics: true,
  },
];

const FLOW_STEPS: { number: string; title: ReactNode; body: string; railLabel: string }[] = [
  {
    number: "1",
    title: (
      <>
        A <span className={HL}>Comment Or DM</span> lands
      </>
    ),
    railLabel: "Comment or DM lands",
    body: "On any connected channel, at any hour.",
  },
  {
    number: "2",
    title: (
      <>
        The agent reads the <span className={HL}>Intent</span>
      </>
    ),
    railLabel: "Reads the intent",
    body: "Question, buying signal, praise, or complaint.",
  },
  {
    number: "3",
    title: (
      <>
        A reply drafts in your <span className={HL}>Voice</span>
      </>
    ),
    railLabel: "Reply drafts in your voice",
    body: "With the right link attached: booking for the bistro, checkout or the downtown store for the boutique.",
  },
  {
    number: "4",
    title: (
      <>
        It sends, or <span className={HL}>Waits For You</span>
      </>
    ),
    railLabel: "Sends or waits for you",
    body: "Within moments, or in your queue if the topic is sensitive or you have kept approvals on.",
  },
  {
    number: "5",
    title: (
      <>
        The interaction is <span className={HL}>Logged</span>
      </>
    ),
    railLabel: "Interaction is logged",
    body: "Counted so the month-end report can tie conversations to outcomes.",
  },
];

const FLOW_VISUALS = [
  {
    icon: MessageCircle,
    panelTitle: "Inbox lights up",
    panelHint: "Any channel · any hour",
    chips: ["Comments", "DMs", "Requests"],
  },
  {
    icon: Eye,
    panelTitle: "Intent detected",
    panelHint: "Question · buy · praise · risk",
    chips: ["Buying signal", "Praise", "Complaint"],
  },
  {
    icon: Sparkles,
    panelTitle: "Reply in your voice",
    panelHint: "Revenue-ready answer",
    chips: ["Booking link", "Checkout", "Store"],
  },
  {
    icon: ShieldAlert,
    panelTitle: "Send or escalate",
    panelHint: "Auto · or your queue",
    chips: ["Send now", "Approve", "Edit draft"],
  },
  {
    icon: ThumbsUp,
    panelTitle: "Logged for reporting",
    panelHint: "Tied to outcomes",
    chips: ["Views", "Replies", "Conversions"],
  },
];

const RELATED = [
  {
    label: "Post Creation & Publishing",
    body: "The calendar and campaigns that start the conversations.",
    to: `${MARKETING_AGENT_BASE}/post-creation-publishing`,
  },
  {
    label: "Social Analytics & Reporting",
    body: "Which conversations became customers.",
    to: `${MARKETING_AGENT_BASE}/social-analytics`,
  },
  {
    label: "Marketing Automation Agent overview",
    body: "Back to the full Marketing Automation Agent.",
    to: MARKETING_AGENT_BASE,
  },
];

function ProductSchema() {
  const json = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        name: "Social Engagement",
        description:
          "AI-Harness Social Engagement: every comment, DM, and question answered in your brand voice within moments, with buying questions routed to bookings and checkout, and sensitive ones brought to you.",
        brand: { "@type": "Brand", name: "AI-Harness" },
        url: `https://ai-harness.com${PATH}`,
        category: "Social Media Engagement Software",
        isPartOf: {
          "@type": "SoftwareApplication",
          name: "AI-Harness Marketing Automation Agent",
          url: `https://ai-harness.com${MARKETING_AGENT_BASE}`,
        },
      },
      {
        "@type": "SoftwareApplication",
        name: "AI-Harness Social Engagement",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        url: `https://ai-harness.com${PATH}`,
        featureList: [
          "AI comment replies",
          "Social media inbox for SMBs",
          "DM automation",
          "Routing to bookings and checkout",
          "Sensitive-topic escalation",
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

function FeatureVisual({
  feature,
  pillSide,
}: {
  feature: (typeof FEATURES)[number];
  pillSide: "left" | "right";
}) {
  if ("imageSrc" in feature && feature.imageSrc) {
    return (
      <CapsuleFeatureImage
        src={feature.imageSrc}
        alt={feature.imageAlt ?? ""}
        pillSide={pillSide}
      />
    );
  }

  if (feature.metrics) {
    return (
      <div className="overflow-hidden rounded-[28px] border border-ink-200/80 bg-white shadow-lift">
        <div className="border-b border-ink-200 bg-ink-50/80 px-5 py-4">
          <p className="text-sm font-medium text-ink-800">Outreach · Engagement</p>
          <p className="mt-1 text-xs text-ink-500">Across published posts</p>
        </div>
        <div className="grid grid-cols-2 gap-3 p-5">
          {[
            { label: "Views", icon: Eye },
            { label: "Likes", icon: ThumbsUp },
            { label: "Comments", icon: MessageCircle },
            { label: "Clicks", icon: MousePointerClick },
          ].map(({ label, icon: Icon }) => (
            <div
              key={label}
              className="rounded-2xl border border-ink-200/80 bg-white px-4 py-3 shadow-soft"
            >
              <div className="flex items-center gap-2 text-ink-400">
                <Icon className="h-3.5 w-3.5" strokeWidth={2} />
                <p className="text-[11px] font-medium tracking-wide uppercase">{label}</p>
              </div>
              <p className="mt-1 text-xl font-medium tracking-tight text-ink-900">-</p>
            </div>
          ))}
        </div>
        {(feature.caption || feature.buildNote) && (
          <div className="border-t border-ink-100 px-5 py-4 text-xs leading-relaxed text-ink-500">
            {feature.caption ? <p>{feature.caption}</p> : null}
            {feature.buildNote ? <p className="mt-1.5">{feature.buildNote}</p> : null}
          </div>
        )}
      </div>
    );
  }

  const Icon = feature.icon;
  return (
    <div className="overflow-hidden rounded-[28px] border border-ink-200/80 bg-ink-50 shadow-soft">
      <div className="flex aspect-[4/3] flex-col items-center justify-center gap-4 p-8 text-center">
        <span className="grid h-14 w-14 place-items-center rounded-2xl bg-white text-ink-600 shadow-soft ring-1 ring-ink-200/80">
          <Icon className="h-6 w-6" strokeWidth={1.75} />
        </span>
        <p className="max-w-xs text-sm leading-relaxed text-ink-500">
          Product shot placeholder · {feature.eyebrow}
        </p>
      </div>
    </div>
  );
}

export default function SocialEngagement() {
  return (
    <>
      <Seo
        path={PATH}
        title="AI Social Media Engagement for Local Businesses"
        description="Every comment, DM, and question answered in your brand voice within moments, with buying questions routed to bookings and checkout, and the sensitive ones brought to you."
        keywords="social media engagement software, ai comment replies, respond to social media messages, social media inbox for SMBs, restaurant social media engagement, retail customer questions, turn comments into sales, dm automation"
        breadcrumbs={[
          { label: "Marketing Automation Agent", path: MARKETING_AGENT_BASE },
          { label: "Social Engagement", path: PATH },
        ]}
      />
      <FaqJsonLd faqs={FAQS} />
      <ProductSchema />

      <MarketingAgentChrome>
        <Hero />
        <ProblemSection />
        <FeaturesSection />
        <AgentFlowStepsSection
          title={
            <>
              From comment to <span className={HL}>Customer</span>, step by step
            </>
          }
          steps={FLOW_STEPS}
          visuals={FLOW_VISUALS}
        />
        <RelatedSection />
        <FaqSection />
        <div className="relative overflow-hidden border-t border-ink-100/70 py-16 sm:py-20">
          <SoftPastelBackdrop side="right" />
          <div className="relative z-10">
            <CTASection
              title="The conversation never waits for you again."
              description="See Social Engagement working inside your Marketing Automation Agent. Start free with $10 in credits."
              primaryCta={{ label: "Start free", to: "/signup" }}
              secondaryCta={{ label: "Talk to us", to: "/contact" }}
              footnote="Free to start with $10 in credits · No credit card · Part of the Marketing Automation Agent"
            />
          </div>
        </div>
      </MarketingAgentChrome>
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
              Social Engagement
            </p>
            <h1 className="mt-4 text-[clamp(2rem,4.5vw,3.35rem)] font-medium leading-[1.08] tracking-[-0.025em] text-ink-900">
              Every <span className={HL}>Comment Answered</span>. Every question turned into a{" "}
              <span className={HL}>Customer</span>.
            </h1>
            <p className="mt-5 text-lg font-normal leading-[1.7] text-ink-600 sm:text-xl">
              Interest shows up as a comment at 9:40 PM and becomes a customer, or a missed one, by
              morning. Your agent answers in moments, in your voice, and brings you in only when
              judgment is needed.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button to="/signup" size="lg">
                Start free
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button to="/demo" variant="secondary" size="lg">
                See a question become a booking
              </Button>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-ink-500">
              Free to start with $10 in credits · No credit card · Part of the Marketing Automation
              Agent
            </p>
          </ScrollReveal>

          <ScrollReveal delay={80} className="relative min-w-0">
            <MarketingHeroImage
              src="/illustrations/custom/marketing-hero-social-engagement.png"
              alt="Bistro owner reviewing an AI reply draft for a reservation question, engagement overview, and approval queue"
            />
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}

function ProblemSection() {
  return (
    <section className="relative overflow-hidden border-y border-ink-100 bg-white py-16 sm:py-20">
      <Container className="relative z-10">
        <ScrollReveal className="mx-auto max-w-3xl">
          <p className="text-sm font-medium text-ink-500">
            The problem
          </p>
          <h2 className="mt-4 text-[clamp(1.75rem,3.2vw,2.5rem)] font-medium leading-[1.15] tracking-[-0.02em] text-ink-900">
            Engagement is where marketing becomes <span className={HL}>Revenue</span>, and it runs
            on a clock most owners cannot work
          </h2>
          <p className="mt-5 text-lg font-normal leading-[1.75] text-ink-700 sm:text-xl">
            A reservation question, a size check, a where-are-you-located: each is a buying signal
            with a short shelf life, and every hour it waits, the odds fall. Watching every channel
            for those moments is a full-time job. This page shows how the agent does that job
            continuously.
          </p>
        </ScrollReveal>
      </Container>
    </section>
  );
}

function FeaturesSection() {
  return (
    <section className="relative overflow-hidden border-b border-ink-100/70">
      <div className="relative overflow-hidden py-16 sm:pb-12 sm:pt-24">
        <SoftPastelBackdrop side="right" />
        <Container className="relative z-10">
          <ScrollReveal className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium text-ink-500">
              What this page shows
            </p>
            <h2 className="mt-4 text-[clamp(1.75rem,3.2vw,2.75rem)] font-medium leading-[1.12] tracking-[-0.02em] text-ink-900">
              Watching, answering, escalating, and measuring, without you living in the{" "}
              <span className={HL}>Inbox</span>
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
                      <p className="text-sm font-medium text-ink-500">
                        {feature.eyebrow}
                      </p>
                    </div>
                    <h3 className="mt-4 text-[clamp(1.5rem,2.5vw,2rem)] font-medium leading-[1.15] tracking-[-0.02em] text-ink-900">
                      {feature.title}
                    </h3>
                    <p className="mt-4 text-lg font-normal leading-[1.7] text-ink-600">
                      {feature.body}
                    </p>
                    {feature.bullets ? (
                      <ul className="mt-6 space-y-3">
                        {feature.bullets.map((item) => (
                          <li key={item} className="flex items-start gap-3 text-[15px] text-ink-700">
                            <CheckCircle2
                              className="mt-0.5 h-5 w-5 shrink-0 text-brand-600"
                              strokeWidth={2}
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
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
    <section className="relative overflow-hidden border-b border-ink-100/70 py-16 sm:py-20">
      <SoftPastelBackdrop side="left" />
      <Container className="relative z-10">
        <ScrollReveal className="max-w-3xl">
          <h2 className="text-[clamp(1.75rem,3.2vw,2.5rem)] font-medium leading-[1.15] tracking-[-0.02em] text-ink-900">
            Do more with your <span className={HL}>Marketing Automation</span> Agent
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
          <FaqAccordion items={FAQS} variant="lines" className="font-inter" />
        </div>
      </Container>
    </section>
  );
}
