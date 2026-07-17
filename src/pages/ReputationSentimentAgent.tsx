import {
  ArrowRight,
  CheckCircle2,
  LayoutDashboard,
  MessageSquare,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
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
import { TITLE_HL_BRAND as HL } from "../components/agent-title-highlight";

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
  },
  {
    number: "4",
    title: (
      <>
        It measures <span className={HL}>Reputation</span> like the business metric it is
      </>
    ),
    body: "Rating trend, review volume, and response speed, tracked over time, per location, and against nearby competition, on one dashboard your whole team can read.",
  },
  {
    number: "5",
    title: (
      <>
        It turns your best reviews into your best <span className={HL}>Marketing</span>
      </>
    ),
    body: "Five-star stories flow to your Marketing Automation Agent as ready-to-approve social posts, so real customers do the persuading.",
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
              alt="Salon owner monitoring star reviews, attention queue, and rating trends"
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
            Your <span className={HL}>Reputation</span> is working for you or against you every hour
            you are open
          </h2>
          <p className="mt-5 text-lg font-normal leading-[1.75] text-ink-700 sm:text-xl">
            Most of that work happens where you cannot see it. New reviews land during the dinner
            rush or the Saturday register line. Old ones sit unanswered while hundreds of future
            customers read the silence. The pattern hiding across platforms, the slow-Tuesday
            complaints, the sizing-runs-small refrain, never gets connected. The agent takes over
            that whole job: growing reviews, answering them, understanding them, and turning them
            into growth, with you approving only what deserves an owner’s judgment.
          </p>
        </ScrollReveal>
      </Container>
    </section>
  );
}

function HowItWorksSection() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <Container>
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium text-ink-500">
            How it works
          </p>
          <h2 className="mt-4 text-[clamp(1.75rem,3.2vw,2.75rem)] font-medium leading-[1.12] tracking-[-0.02em] text-ink-900">
            How the agent cares for your <span className={HL}>Reputation</span>, end to end
          </h2>
        </ScrollReveal>

        <div className="mx-auto mt-12 max-w-4xl space-y-4 sm:mt-16">
          {STEPS.map((step, index) => (
            <ScrollReveal key={step.number} delay={index * 40}>
              <article className="rounded-3xl border border-ink-200/90 bg-white px-5 py-6 sm:px-8 sm:py-7">
                <div className="flex gap-4 sm:gap-5">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-ink-100 text-sm font-medium text-ink-600 ring-1 ring-ink-200/80">
                    {step.number}
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-xl font-medium tracking-tight text-ink-900 sm:text-[1.35rem]">
                      {step.title}
                    </h3>
                    <p className="mt-2.5 text-base font-normal leading-[1.7] text-ink-600 sm:text-lg">
                      {step.body}
                    </p>
                    {step.link ? (
                      <Link
                        to={step.link.to}
                        className="mt-4 inline-flex items-center gap-2 text-[15px] font-medium text-brand-700 transition hover:gap-2.5 hover:text-brand-800"
                      >
                        {step.link.label}
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    ) : null}
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </Container>
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
