import { ArrowRight, FileText, MessageSquare, Star, TrendingUp } from "lucide-react";
import { useEffect, type ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { scrollToHashWithRetry } from "../lib/scrollToHash";
import { cn } from "../lib/cn";
import Container from "../components/Container";
import Button from "../components/Button";
import AgentBenefitsAccordion from "../components/AgentBenefitsAccordion";
import CTASection from "../components/CTASection";
import Seo from "../components/Seo";
import FaqJsonLd from "../components/FaqJsonLd";
import FaqAccordion from "../components/FaqAccordion";
import AgentHeroGallery from "../components/AgentHeroGallery";
import IndustriesGallery from "../components/IndustriesGallery";
import WorkforceStickyScroll from "../components/WorkforceStickyScroll";
import AgentProofAccordion from "../components/AgentProofAccordion";
import HowItWorksSteps from "../components/HowItWorksSteps";
import { AdvantageCard, ADVANTAGES } from "../components/WhyChooseSection";
import ScrollReveal from "../components/ScrollReveal";

const FAQS = [
  {
    q: "Do I need to be technical to use AI-Harness?",
    a: "No. You set it up by answering plain-language questions about your business. If you can send a text, you can run it.",
  },
  {
    q: "Is this one big automation, or separate agents?",
    a: "Separate agents. Each one (sales, reputation, reviews, and proposals) is its own teammate with its own job. Turn on one or run them together.",
  },
  {
    q: "How is this different from a chatbot?",
    a: "A chatbot answers questions. AI-Harness agents actually do the work: Capturing leads, replying to reviews, asking for reviews, and drafting proposals inside your business.",
  },
  {
    q: "Will it replace my staff?",
    a: "No. It takes the repetitive busywork off their plate so they can focus on customers and the work only people can do.",
  },
  {
    q: "How fast can I get started?",
    a: "Minutes. Ready-to-go agents start working the day you sign up, and you can add more over time.",
  },
  {
    q: "What does it cost?",
    a: "Start free with $10 in credits, no credit card. Paid plans scale with your business.",
  },
  {
    q: "Is my customer data safe?",
    a: "Yes. Your data is never used to train AI models, and security is built in from day one.",
  },
  {
    q: "What if an agent gets something wrong?",
    a: "You are in control. Review everything it does, approve sensitive actions before they happen, and step in anytime.",
  },
];

type ComparisonRow = { oldWay: string; withAgent: string };

type AgentSection = {
  id: string;
  number: string;
  name: string;
  role: string;
  headline: string;
  intro: string;
  icon: ReactNode;
  image?: { src: string; alt: string };
  imagePosition?: "left" | "right";
  benefits: string[];
  comparisons: ComparisonRow[];
  outcome: string;
  caseStudy: { company: string; story: string };
};

const AGENTS: AgentSection[] = [
  {
    id: "sales-pipeline",
    number: "1",
    name: "Sales Pipeline & CRM Agent",
    role: "your marketing and sales engine",
    headline: "Never let a lead go cold again.",
    intro:
      "This is your marketing and sales engine, a separate agent focused on one thing: Turning interest into booked business. It captures every lead, follows up automatically, and keeps your customer records tidy in one place.",
    icon: <TrendingUp className="h-6 w-6" strokeWidth={2} />,
    image: {
      src: "/illustrations/custom/sales-pipeline-agent-detail.png",
      alt: "Sales Pipeline and CRM Agent capturing a new lead and sending follow-up messages automatically",
    },
    benefits: [
      "Capture every lead: Answer after-hours calls and capture every web form and message, then sort and prioritize so you know who to chase first.",
      "Follow up automatically: Send timely, personal follow-ups so nothing slips, day, night, and weekends.",
      "Keep customers organized (CRM): Every contact, note, and payment in one clean record your whole team can pick up.",
    ],
    comparisons: [
      { oldWay: "Leads pile up in texts, emails, and sticky notes.", withAgent: "Every lead is captured and prioritized for you automatically." },
      { oldWay: "You follow up when you remember, usually too late.", withAgent: "Fast, personal follow-up runs on autopilot, day and night." },
      { oldWay: "Customer info is scattered across apps and your memory.", withAgent: "One clean customer record anyone on the team can use." },
      { oldWay: "Hot leads go cold while you are busy on the job.", withAgent: "The agent nudges quiet leads so they book with you, not a competitor." },
    ],
    outcome:
      "The business that replies first usually wins the sale. Answer and follow up on every lead within minutes, and you book noticeably more of the leads you already pay for, without spending more on ads. This agent turns the demand you already have into paying customers.",
    caseStudy: {
      company: "Summit Plumbing Co., a 9-person plumbing business in Austin, TX",
      story:
        "Before AI-Harness, roughly 4 in 10 after-hours calls went to voicemail and most callers never rang back. After turning on the Sales Pipeline & CRM Agent, every call and web message is captured, quotes go out within minutes, and quiet leads get a nudge. The result: about 24 more booked jobs a month and quote-to-close time cut from around two days to under an hour.",
    },
  },
  {
    id: "reputation",
    number: "2",
    name: "Reputation & Sentiment Agent",
    role: "your reputation manager",
    headline: "Every review answered, on-brand, in minutes.",
    intro:
      "A separate agent whose only job is your reputation. It watches your reviews across the sites customers actually check, reads the mood behind each one, and drafts a warm, on-brand reply.",
    icon: <MessageSquare className="h-6 w-6" strokeWidth={2} />,
    image: {
      src: "/illustrations/custom/reputation-agent-detail.png",
      alt: "Protect your reputation with on-brand review replies in minutes",
    },
    imagePosition: "right",
    benefits: [
      "Monitor everywhere: Keep an eye on reviews across Google, Facebook, Yelp, and more from one simple screen.",
      "Reply on-brand with sentiment: Read urgency and photos, then write a friendly reply in your voice and the customer's language.",
      "Spot the trends: Flag recurring complaints and wins so you fix problems early and lean into what customers love.",
    ],
    comparisons: [
      { oldWay: "Reviews are scattered across Google, Facebook, and more.", withAgent: "All your reviews land in one easy dashboard." },
      { oldWay: "A bad review sits unanswered for days.", withAgent: "Every review gets a fast, on-brand reply." },
      { oldWay: "You write every response from scratch.", withAgent: "Replies are drafted for you in seconds, in your voice." },
      { oldWay: "You cannot tell what customers keep praising or hating.", withAgent: "Clear trends show you exactly what to fix and promote." },
    ],
    outcome:
      "Faster, on-brand replies lift your star rating and build the trust that wins customers over the shop next door. More stars and fresh replies also push you higher in local search, so new buyers find you first.",
    caseStudy: {
      company: "Maple & Oak Bistro, a family restaurant in Portland, OR",
      story:
        "Reviews were piling up unanswered across Google and Facebook. After turning on the Reputation & Sentiment Agent, every review now gets an on-brand reply within minutes. Over three months the rating moved from 4.1 to 4.6, and more first-time diners arrived saying they found the restaurant through search.",
    },
  },
  {
    id: "reviews",
    number: "3",
    name: "Automated Review Agent",
    role: "your review growth engine",
    headline: "More 5-star reviews, without lifting a finger.",
    intro:
      "A separate agent focused only on growing your reviews. It automatically asks every happy customer for a review at the right moment, by text and email.",
    icon: <Star className="h-6 w-6" strokeWidth={2} />,
    image: {
      src: "/illustrations/custom/reviews-agent-detail.png",
      alt: "Grow your reviews with automated review requests and more five-star ratings",
    },
    benefits: [
      "Ask automatically: Send a friendly review request after each sale or finished job, by SMS and email.",
      "Perfect timing: Reach customers when they are happiest, so far more of them actually leave a review.",
      "Make it effortless: One-tap links go straight to Google and the review sites that matter for your business.",
    ],
    comparisons: [
      { oldWay: "You mean to ask for reviews, but rarely do.", withAgent: "Every customer gets asked, automatically." },
      { oldWay: "Your rating stalls while other shops pull ahead.", withAgent: "Fresh reviews roll in every week." },
      { oldWay: "Asking each customer by hand eats your time.", withAgent: "Runs in the background with zero manual effort." },
      { oldWay: "Your best work goes unnoticed online.", withAgent: "Your five-star work shows up where shoppers are looking." },
    ],
    outcome:
      "A steady stream of fresh 5-star reviews lifts your rating, improves placement when locals search, and turns searchers into buyers. Reviews are free marketing that keeps paying you back, without adding hours to your week.",
    caseStudy: {
      company: "Bright Smile Dental, a two-location practice in Columbus, OH",
      story:
        "The team rarely had time to ask for reviews. After turning on the Automated Review Agent, every patient now gets a review request by text and email after their visit. In the first 90 days new reviews grew by about 120%.",
    },
  },
  {
    id: "proposals",
    number: "4",
    name: "Proposal Drafting Agent",
    role: "your proposal writer",
    headline: "Win more work with proposals done in minutes.",
    intro:
      "A separate agent that turns a customer request or RFP into a polished, accurate first-draft proposal, using your own services, pricing, and past wins.",
    icon: <FileText className="h-6 w-6" strokeWidth={2} />,
    image: {
      src: "/illustrations/custom/proposals-agent.png",
      alt: "Proposal Drafting Agent turning a request into a ready-to-send proposal in minutes",
    },
    benefits: [
      "Read the request: Understand what the customer is asking for and what your proposal needs to include.",
      "Draft it for you: Write a clear, on-brand proposal from your services, pricing, and previous work.",
      "Keep it accurate: Flag anything missing so nothing important gets left out before you send.",
    ],
    comparisons: [
      { oldWay: "Proposals take hours you simply do not have.", withAgent: "A solid first draft is ready in minutes." },
      { oldWay: "You lose work to whoever replies first.", withAgent: "You reply fast, while the lead is still hot." },
      { oldWay: "You copy-paste from old docs and hope it is right.", withAgent: "Consistent, accurate proposals every time." },
      { oldWay: "Big jobs slip because quoting is a chore.", withAgent: "You can comfortably say yes to more opportunities." },
    ],
    outcome:
      "Faster turnaround on every proposal means a higher win rate on the work you quote. Send polished first drafts in minutes instead of days, and stop losing jobs to whoever replies first.",
    caseStudy: {
      company: "Harbor Creative, a 6-person marketing agency in San Diego, CA",
      story:
        "Proposals used to take a full afternoon each. After turning on the Proposal Drafting Agent, first drafts are ready in minutes and the team replies the same day. Their win rate on quoted work climbed by roughly 18%.",
    },
  },
];

const AGENT_ACCENTS: Record<
  string,
  {
    gradient: string;
    badge: string;
    pill: string;
    tick: string;
    tickOpen: string;
    itemBg: string;
    itemBgOpen: string;
    openStyle: string;
    chevronOpen: string;
    imageShadow: string;
    imageRing: string;
    imageGlow: string;
  }
> = {
  "sales-pipeline": {
    gradient: "from-indigo-600 via-blue-600 to-violet-800",
    badge: "from-indigo-500 to-violet-600",
    pill: "border-indigo-200/70 bg-indigo-50/80 text-indigo-800",
    tick: "text-indigo-500",
    tickOpen: "text-indigo-600",
    itemBg: "bg-gradient-to-br from-indigo-50/60 via-white to-white",
    itemBgOpen: "bg-gradient-to-br from-indigo-50/90 via-white to-violet-50/40",
    openStyle:
      "border-indigo-200/80 shadow-[0_8px_30px_rgba(99,102,241,0.1)] ring-1 ring-indigo-100/80",
    chevronOpen: "text-indigo-500",
    imageShadow: "shadow-[0_28px_80px_-28px_rgba(99,102,241,0.28)]",
    imageRing: "ring-indigo-200/80",
    imageGlow: "bg-indigo-500/20",
  },
  reputation: {
    gradient: "from-rose-500 via-pink-600 to-rose-800",
    badge: "from-rose-400 to-pink-600",
    pill: "border-rose-200/70 bg-rose-50/80 text-rose-800",
    tick: "text-rose-500",
    tickOpen: "text-rose-600",
    itemBg: "bg-gradient-to-br from-rose-50/60 via-white to-white",
    itemBgOpen: "bg-gradient-to-br from-rose-50/90 via-white to-pink-50/40",
    openStyle:
      "border-rose-200/80 shadow-[0_8px_30px_rgba(244,63,94,0.1)] ring-1 ring-rose-100/80",
    chevronOpen: "text-rose-500",
    imageShadow: "shadow-[0_28px_80px_-28px_rgba(244,63,94,0.28)]",
    imageRing: "ring-rose-200/80",
    imageGlow: "bg-rose-500/20",
  },
  reviews: {
    gradient: "from-amber-500 via-orange-500 to-rose-600",
    badge: "from-amber-400 to-orange-500",
    pill: "border-orange-200/70 bg-orange-50/80 text-orange-800",
    tick: "text-orange-500",
    tickOpen: "text-orange-600",
    itemBg: "bg-gradient-to-br from-orange-50/60 via-white to-white",
    itemBgOpen: "bg-gradient-to-br from-orange-50/90 via-white to-amber-50/40",
    openStyle:
      "border-orange-200/80 shadow-[0_8px_30px_rgba(249,115,22,0.1)] ring-1 ring-orange-100/80",
    chevronOpen: "text-orange-500",
    imageShadow: "shadow-[0_28px_80px_-28px_rgba(249,115,22,0.28)]",
    imageRing: "ring-orange-200/80",
    imageGlow: "bg-orange-500/20",
  },
  proposals: {
    gradient: "from-cyan-500 via-sky-600 to-blue-800",
    badge: "from-cyan-400 to-sky-600",
    pill: "border-sky-200/70 bg-sky-50/80 text-sky-800",
    tick: "text-cyan-500",
    tickOpen: "text-cyan-600",
    itemBg: "bg-gradient-to-br from-sky-50/60 via-white to-white",
    itemBgOpen: "bg-gradient-to-br from-sky-50/90 via-white to-cyan-50/40",
    openStyle:
      "border-sky-200/80 shadow-[0_8px_30px_rgba(56,189,248,0.1)] ring-1 ring-sky-100/80",
    chevronOpen: "text-cyan-500",
    imageShadow: "shadow-[0_28px_80px_-28px_rgba(56,189,248,0.28)]",
    imageRing: "ring-sky-200/80",
    imageGlow: "bg-cyan-500/20",
  },
};

function splitAgentName(name: string) {
  const match = name.match(/^(.+)\s+Agent$/);
  if (!match) return { main: name, suffix: "" };
  return { main: match[1], suffix: " Agent" };
}

function AgentTitleHead({ agent }: { agent: AgentSection }) {
  const accent = AGENT_ACCENTS[agent.id] ?? AGENT_ACCENTS["sales-pipeline"];
  const { main, suffix } = splitAgentName(agent.name);

  return (
    <div>
      <div
        className={cn(
          "mb-5 inline-flex items-center gap-2.5 rounded-full border px-3 py-1.5 shadow-sm",
          accent.pill,
        )}
      >
        <span
          className={cn(
            "grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-gradient-to-br text-white shadow-sm",
            accent.badge,
          )}
        >
          {agent.icon}
        </span>
        <span className="text-sm font-medium tracking-[0.14em] uppercase sm:text-base">Agent</span>
      </div>
      <h2 className="text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-[1.1] tracking-[-0.02em]">
        <span
          className={cn(
            "bg-gradient-to-r bg-clip-text text-transparent",
            accent.gradient,
          )}
        >
          {main}
        </span>
        {suffix ? <span className="text-ink-900">{suffix}</span> : null}
      </h2>
    </div>
  );
}

export default function AiAgents() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;
    return scrollToHashWithRetry(location.hash);
  }, [location.pathname, location.hash]);

  return (
    <>
      <Seo
        path="/ai-agents"
        title="AI Workforce for Small & Mid-Size Businesses | AI-Harness"
        description="AI-Harness gives your business a team of AI agents, each built for one job: leads, reviews, reputation, and proposals. Work keeps moving 24/7. Start free."
        keywords="AI agents for small and mid-size businesses, AI workforce for small businesses, automate customer follow-up, get more reviews, AI sales assistant, never miss a lead, AI proposal writer"
      />
      <FaqJsonLd faqs={FAQS} />
      <Hero />
      <WorkforceStickyScroll />
      {AGENTS.map((agent, index) => (
        <AgentDetail key={agent.id} agent={agent} index={index} />
      ))}
      <HowItWorksSteps />
      <IndustriesWhySection />
      <FaqSection />
      <ScrollReveal>
        <CTASection
          title="Ready to put your AI workforce to work?"
          description="Hire the agents you need: One to capture leads, one to manage your reputation, one to grow your reviews, and one to draft your proposals. Together they help your business win more customers and grow revenue, 24/7."
          primaryCta={{ label: "Start free, no credit card", to: "/signup" }}
          secondaryCta={{ label: "Book a demo", to: "/demo" }}
          footnote="Set up in minutes · Works with the tools you already use · Your data stays yours"
        />
      </ScrollReveal>
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden pb-16 pt-14 sm:pb-20 sm:pt-20">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-spotlight" />
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid opacity-60 [mask-image:linear-gradient(to_bottom,white_0%,white_60%,transparent_100%)]" />
      <Container className="relative">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-12 xl:gap-16">
          <ScrollReveal className="font-inter flex flex-col lg:text-left">
            <h1 className="type-display text-ink-900">
              The AI Workforce Built for{" "}
              <span className="text-gradient">Small & Mid-Size Businesses</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg font-normal leading-[1.7] tracking-[-0.015em] text-ink-700 sm:text-[1.35rem] sm:leading-[1.65]">
              AI-Harness puts a team of AI agents to work across your marketing & sales pipelines, reviews
              management, reputation management, and proposals management, so no lead & operation is missed and
              work keeps moving 24/7.
            </p>
            <p className="mt-5 text-base font-normal leading-[1.65] tracking-[-0.01em] text-ink-600 sm:text-lg">
              Each agent is a separate teammate with its own job. Turn on one, or run them together.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row lg:justify-start">
              <Button to="/signup" size="lg">
                Start free, no credit card
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button to="/demo" variant="secondary" size="lg">
                Book a demo
              </Button>
            </div>
            <p className="type-caption mt-5 text-ink-500">
              Set up in minutes · Works with the tools you already use · Your data stays yours, never used to train AI
            </p>
          </ScrollReveal>

          <ScrollReveal delay={100} className="relative flex w-full items-center justify-center overflow-visible py-2 lg:justify-end lg:py-4">
            <AgentHeroGallery />
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}

function AgentHeroBlock({ agent }: { agent: AgentSection }) {
  const imageOnRight = agent.imagePosition === "right";
  const accent = AGENT_ACCENTS[agent.id] ?? AGENT_ACCENTS["sales-pipeline"];

  return (
    <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
      <ScrollReveal
        className={cn("relative w-full", imageOnRight && "lg:order-2")}
        delay={imageOnRight ? 80 : 0}
      >
        {agent.image ? (
          <div className="relative">
            <div
              aria-hidden
              className={cn(
                "pointer-events-none absolute inset-x-8 -bottom-6 h-24 rounded-full blur-3xl",
                accent.imageGlow,
              )}
            />
            <div
              className={cn(
                "relative overflow-hidden rounded-3xl bg-white ring-1",
                accent.imageShadow,
                accent.imageRing,
              )}
            >
            <img
              src={agent.image.src}
              alt={agent.image.alt}
              className="h-auto w-full"
              loading="lazy"
              decoding="async"
            />
          </div>
          </div>
        ) : (
          <div
            className={cn(
              "relative flex aspect-[4/3] flex-col items-center justify-center rounded-3xl border border-ink-200/80 bg-gradient-to-br from-brand-50/80 via-white to-brand-50/40 p-10 ring-1",
              accent.imageShadow,
              accent.imageRing,
            )}
          >
            <div className="grid h-20 w-20 place-items-center rounded-2xl bg-brand-50 text-brand-700 ring-1 ring-brand-200/60">
              {agent.icon}
            </div>
          </div>
        )}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button to="/demo" variant="secondary" size="lg">
            Book a demo
          </Button>
          <Button to="/signup" size="lg">
            Add this agent to your workflow
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </ScrollReveal>

      <ScrollReveal
        className={cn("font-inter w-full max-w-2xl", imageOnRight && "lg:order-1")}
        delay={imageOnRight ? 0 : 80}
      >
        <AgentTitleHead agent={agent} />
        <p className="mt-5 text-lg font-normal leading-[1.65] tracking-[-0.01em] text-ink-600 sm:text-xl">
          A distinct AI-Harness agent ·{" "}
          <span className="text-ink-800">{agent.role}</span>
        </p>
        {!agent.image && (
          <h3 className="mt-6 text-2xl font-medium leading-snug tracking-[-0.015em] text-ink-900 sm:text-[1.75rem]">
            {agent.headline}
          </h3>
        )}
        <p className="mt-6 text-lg font-normal leading-[1.7] tracking-[-0.01em] text-ink-800 sm:text-[1.3125rem]">
          {agent.intro}
        </p>
        <AgentBenefitsAccordion
          benefits={agent.benefits}
          accent={AGENT_ACCENTS[agent.id] ?? AGENT_ACCENTS["sales-pipeline"]}
          className="mt-8"
        />
      </ScrollReveal>
    </div>
  );
}

function AgentBlockDivider() {
  return (
    <div className="relative py-2">
      <hr className="border-0 border-t border-ink-200/90" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-brand-300/50 to-transparent"
      />
    </div>
  );
}

function AgentDetail({ agent, index }: { agent: AgentSection; index: number }) {
  const isAlt = index % 2 === 1;

  return (
    <section
      id={agent.id}
      className={cn(
        "scroll-mt-24 py-20 sm:py-24",
        isAlt ? "bg-brand-50" : "bg-white",
      )}
    >
      <Container>
        <div className="mx-auto max-w-6xl">
          <AgentHeroBlock agent={agent} />

          <AgentBlockDivider />

          <AgentProofAccordion
            comparisons={agent.comparisons}
            outcome={agent.outcome}
            caseStudy={agent.caseStudy}
            accent={AGENT_ACCENTS[agent.id] ?? AGENT_ACCENTS["sales-pipeline"]}
          />
        </div>
      </Container>
    </section>
  );
}

function IndustriesWhySection() {
  return (
    <>
      <section className="relative overflow-hidden bg-white py-16 sm:py-24">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-industries-mesh" />
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid opacity-60" />
        <Container className="relative">
          <ScrollReveal className="font-inter mx-auto max-w-3xl text-center">
            <h2 className="text-[clamp(1.75rem,3.2vw,2.75rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-ink-900">
              Why small businesses choose{" "}
              <span className="text-gradient">AI-Harness</span>
            </h2>
          </ScrollReveal>
          <div className="mx-auto mt-12 max-w-6xl sm:mt-16">
            <div className="grid gap-2 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 lg:gap-x-6 lg:gap-y-4">
              {ADVANTAGES.map((item, index) => (
                <AdvantageCard key={item.title} {...item} index={index} />
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden py-16 sm:py-20">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-industries-mesh" />
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid opacity-60" />
        <Container className="relative">
          <ScrollReveal className="font-inter mx-auto max-w-3xl text-center">
            <h2 className="text-[clamp(1.75rem,3.2vw,2.75rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-ink-900">
              Built for <span className="text-gradient">businesses like yours</span>
            </h2>
          </ScrollReveal>
          <IndustriesGallery />
          <ScrollReveal delay={80}>
            <p className="font-inter mx-auto mt-8 max-w-2xl text-center text-base font-normal leading-relaxed text-ink-600 sm:text-lg">
              Don&apos;t see yours? If your business runs on leads, customers, reviews, and follow-ups,
              AI-Harness fits.
            </p>
          </ScrollReveal>
        </Container>
      </section>
    </>
  );
}

function FaqSection() {
  return (
    <section className="bg-ink-50/70 py-16 sm:py-20">
      <Container>
        <ScrollReveal>
          <div className="font-inter mx-auto max-w-3xl text-center">
            <h2 className="text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-ink-900">
              Frequently asked <span className="text-gradient">questions</span>
            </h2>
          </div>
        </ScrollReveal>
        <div className="mx-auto mt-12 max-w-3xl">
          <FaqAccordion items={FAQS} />
        </div>
      </Container>
    </section>
  );
}
