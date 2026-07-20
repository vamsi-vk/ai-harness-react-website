import {
  ArrowRight,
  Clock3,
  Globe2,
  Languages,
  ListTodo,
  MessageCircleWarning,
  PenLine,
  ShieldAlert,
  Sparkles,
  Tags,
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
  REPUTATION_AGENT_BASE,
  ReputationAgentChrome,
} from "../../components/reputation-sentiment/ReputationAgentSubNav";
import SoftPastelBackdrop from "../../components/marketing-automation/SoftPastelBackdrop";
import { MarketingHeroImage } from "../../components/marketing-automation/MarketingHeroImage";
import { CapsuleFeatureImage } from "../../components/marketing-automation/CapsuleFeatureImage";
import { TITLE_HL_BRAND as HL } from "../../components/agent-title-highlight";
import { cn } from "../../lib/cn";

const PATH = `${REPUTATION_AGENT_BASE}/review-management`;

const FAQS = [
  {
    q: "Should a business respond to every review?",
    a: "Yes. Responses signal to future customers, and to search and recommendation systems, that the business listens. The agent makes every-review coverage possible without giving your week to it.",
  },
  {
    q: "How fast should review responses be?",
    a: "Within hours, not days: the writer is most receptive early, and silent readers judge the speed. The agent drafts within minutes and posts as fast as your approval settings allow.",
  },
  {
    q: "Can AI answer negative reviews safely?",
    a: "Yes, with the right guardrails. The agent never argues, acknowledges the specific issue, offers a path forward, and routes anything critical to you first with a drafted reply, so nothing defensive ever posts in your name.",
  },
  {
    q: "Do I stay in control of what gets posted?",
    a: "Completely. You set which replies need approval, you can edit any draft, and a full record of every response exists whenever you want to review it.",
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
}[] = [
  {
    id: "all-platforms",
    eyebrow: "All Platforms, One Stream",
    title: (
      <>
        It watches so you <span className={HL}>Do Not Have To</span>
      </>
    ),
    body: "Every new review across Google, Facebook, and the platforms your customers use flows into one stream the moment it posts, around the clock.",
    icon: Globe2,
    imageSrc: "/illustrations/custom/reputation-mgmt-all-platforms.png",
    imageAlt: "Unified review inbox streaming new reviews from Google, Facebook, and other platforms",
  },
  {
    id: "replies-in-voice",
    eyebrow: "Replies In Your Voice",
    title: (
      <>
        Fast, specific, <span className={HL}>Brand-Safe</span>
      </>
    ),
    body: "Within minutes, praise gets a warm, specific thank-you that invites the next visit, and criticism gets acknowledgment and a path forward, never an argument. A wrong-size complaint at the boutique gets an exchange path; a long-wait complaint at the restaurant gets an honest acknowledgment and what is changing.",
    icon: Sparkles,
    imageSrc: "/illustrations/custom/reputation-mgmt-replies-voice.png",
    imageAlt: "AI-drafted praise and criticism replies ready to approve in brand voice",
    reverse: true,
  },
  {
    id: "escalation",
    eyebrow: "Escalation",
    title: (
      <>
        The critical ones come to you <span className={HL}>First</span>
      </>
    ),
    body: "Refund demands, safety claims, and anything sensitive route to your attention queue with full context and a drafted reply you can edit before it posts. Your judgment where it matters, the agent’s stamina everywhere else.",
    icon: ShieldAlert,
    imageSrc: "/illustrations/custom/reputation-mgmt-escalation.png",
    imageAlt: "Sensitive review in the attention queue with context and an editable draft reply",
  },
  {
    id: "your-controls",
    eyebrow: "Your Controls",
    title: (
      <>
        Approve-first or automatic, and always on the <span className={HL}>Record</span>
      </>
    ),
    body: "Start with every reply awaiting your tap; grant autonomy for routine responses as trust builds. Every reply the agent has ever sent in your name sits in a searchable record.",
    icon: ListTodo,
    imageSrc: "/illustrations/custom/reputation-mgmt-your-controls.png",
    imageAlt: "Approve-first settings and searchable history of every reply sent",
    reverse: true,
  },
  {
    id: "every-language",
    eyebrow: "Every Language",
    title: (
      <>
        It answers in the <span className={HL}>Language</span> of the review
      </>
    ),
    body: "A review written in Spanish or French gets a reply in kind, in the same brand voice, so no customer is left waiting on a translation.",
    icon: Languages,
    imageSrc: "/illustrations/custom/reputation-mgmt-every-language.png",
    imageAlt: "Spanish and French reviews with matching reply drafts in the same brand voice",
  },
];

const FLOW_STEPS: AgentFlowStep[] = [
  {
    number: "1",
    title: (
      <>
        A hard review lands at <span className={HL}>9:42 PM</span>
      </>
    ),
    railLabel: "Hard review lands",
    body: "Great food, forty-minute wait. The owner is closing; nobody is watching the review page. Except the agent.",
    imageSrc: "/illustrations/custom/reputation-mgmt-flow-01.png",
    imageAlt: "Critical review arrives after hours",
    accent: "rose",
  },
  {
    number: "2",
    title: (
      <>
        It reads <span className={HL}>Sentiment</span> and tags the issue
      </>
    ),
    railLabel: "Reads sentiment",
    body: "Wait time, Friday service — within moments.",
    imageSrc: "/illustrations/custom/reputation-mgmt-flow-02.png",
    imageAlt: "Sentiment and issue tags on the review",
    accent: "violet",
  },
  {
    number: "3",
    title: (
      <>
        A calm reply drafts in the <span className={HL}>House Voice</span>
      </>
    ),
    railLabel: "Reply drafts in house voice",
    body: "Thanks for the honesty, here is what is changing, come back and let us show you.",
    imageSrc: "/illustrations/custom/reputation-mgmt-flow-03.png",
    imageAlt: "Calm on-brand reply draft",
    accent: "sky",
  },
  {
    number: "4",
    title: (
      <>
        It waits in the <span className={HL}>Attention Queue</span>
      </>
    ),
    railLabel: "Attention queue",
    body: "The owner approves with one tap before locking up, and the reply posts at 9:47.",
    imageSrc: "/illustrations/custom/reputation-mgmt-flow-04.png",
    imageAlt: "Attention queue with one-tap approve",
    accent: "amber",
  },
  {
    number: "5",
    title: (
      <>
        The issue joins the <span className={HL}>Pattern</span>
      </>
    ),
    railLabel: "Issue joins the pattern",
    body: "If Friday waits keep appearing, next week’s report says so plainly. The same flow handles a boutique’s wrong-size review with an exchange link instead.",
    imageSrc: "/illustrations/custom/reputation-mgmt-flow-05.png",
    imageAlt: "Issue captured in sentiment patterns for reporting",
    accent: "emerald",
  },
];

const FLOW_VISUALS = [
  {
    icon: MessageCircleWarning,
    panelTitle: "Review lands late",
    panelHint: "9:42 PM · owner closing",
    chips: ["Two-star", "After hours", "Unwatched"],
  },
  {
    icon: Tags,
    panelTitle: "Sentiment tagged",
    panelHint: "Issue in moments",
    chips: ["Wait time", "Friday", "Service"],
  },
  {
    icon: PenLine,
    panelTitle: "Calm reply drafted",
    panelHint: "House voice",
    chips: ["Thanks", "What changes", "Come back"],
  },
  {
    icon: Clock3,
    panelTitle: "Attention queue",
    panelHint: "One-tap approve",
    chips: ["Edit", "Approve", "Post"],
  },
  {
    icon: Sparkles,
    panelTitle: "Pattern captured",
    panelHint: "Feeds next week's report",
    chips: ["Themes", "Trends", "Actions"],
  },
];

const RELATED = [
  {
    label: "Review Generation",
    body: "Keep fresh reviews flowing in the first place.",
    to: `${REPUTATION_AGENT_BASE}/review-generation`,
  },
  {
    label: "Review Analytics & Marketing",
    body: "Measure the trend and put the proof to work.",
    to: `${REPUTATION_AGENT_BASE}/review-analytics-marketing`,
  },
  {
    label: "Reputation & Sentiment overview",
    body: "Back to the full Reputation & Sentiment Agent.",
    to: REPUTATION_AGENT_BASE,
  },
];

function ProductSchema() {
  const json = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        name: "Review Management",
        description:
          "AI-Harness Review Management: watches every platform, drafts brand-safe replies in your voice within minutes, and escalates critical feedback with a response ready to edit and approve.",
        brand: { "@type": "Brand", name: "AI-Harness" },
        url: `https://ai-harness.com${PATH}`,
        category: "Review Management Software",
        isPartOf: {
          "@type": "SoftwareApplication",
          name: "AI-Harness Reputation & Sentiment Agent",
          url: `https://ai-harness.com${REPUTATION_AGENT_BASE}`,
        },
      },
      {
        "@type": "SoftwareApplication",
        name: "AI-Harness Review Management",
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

export default function ReviewManagement() {
  return (
    <>
      <Seo
        path={PATH}
        title="AI Review Management & Responses"
        description="The agent watches every platform, drafts brand-safe replies in your voice within minutes, and escalates critical feedback to you with a response ready to edit and approve."
        keywords="review management software, ai review responses, respond to reviews automatically, manage google reviews, negative review response, restaurant review replies, retail review replies, multilingual review responses"
        breadcrumbs={[
          { label: "Reputation & Sentiment Agent", path: REPUTATION_AGENT_BASE },
          { label: "Review Management", path: PATH },
        ]}
      />
      <FaqJsonLd faqs={FAQS} />
      <ProductSchema />

      <ReputationAgentChrome>
        <Hero />
        <ProblemSection />
        <FeaturesSection />
        <AgentFlowStepsSection
          eyebrow="The flow"
          sectionId="review-management-flow"
          title={
            <>
              From a 9:42 PM two-star to a <span className={HL}>9:47 Reply</span>
            </>
          }
          steps={FLOW_STEPS}
          visuals={FLOW_VISUALS}
        />
        <RelatedSection />
        <FaqSection />
        <div className="py-16 sm:py-20">
          <CTASection
            title="Your side of every public conversation, handled."
            description="Turn on Review Management inside your Reputation & Sentiment Agent. Start free with $10 in credits."
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
              Review Management
            </p>
            <h1 className="mt-4 text-[clamp(2rem,4.5vw,3.35rem)] font-medium leading-[1.08] tracking-[-0.025em] text-ink-900">
              Every review <span className={HL}>Answered Well</span>, even the ones that sting
            </h1>
            <p className="mt-5 text-lg font-normal leading-[1.7] text-ink-600 sm:text-xl">
              A review is a public conversation with hundreds of silent readers. The agent makes
              sure your side of it is fast, warm, on brand, and never defensive, and hands you the
              few that genuinely need an owner.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button to="/signup" size="lg">
                Start free
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button to="/demo" variant="secondary" size="lg">
                See a hard review handled
              </Button>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-ink-500">
              Free to start with $10 in credits · No credit card · Approve-first or automatic, your
              call
            </p>
          </ScrollReveal>

          <ScrollReveal delay={80} className="relative min-w-0">
            <MarketingHeroImage
              src="/illustrations/custom/reputation-hero-review-management.png"
              alt="Owner drafting an AI reply to a 2-star review, with content calendar and engagement metrics nearby"
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
            Every unanswered review <span className={HL}>Costs Twice</span>
          </h2>
          <p className="mt-5 text-lg font-normal leading-[1.75] text-ink-700 sm:text-xl">
            The customer who wrote it stays unhappy, and everyone who reads it afterward learns that
            this business does not respond. But keeping up means checking several platforms daily and
            writing careful, non-defensive replies under time pressure, a job that loses to the dinner
            rush and the delivery schedule every single day. The agent does that job continuously,
            and to a standard.
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
              Watch, reply, escalate, control — in every <span className={HL}>Language</span>
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
            Do more with your <span className={HL}>Reputation &amp; Sentiment</span> Agent
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
