import {
  ArrowRight,
  BarChart3,
  Bot,
  Check,
  Clock3,
  MapPin,
  Megaphone,
  MessageSquare,
  Plus,
  Star,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";
import Container from "../../components/Container";
import Button from "../../components/Button";
import Seo from "../../components/Seo";
import FaqJsonLd from "../../components/FaqJsonLd";
import HomeHeroMosaic from "../../components/home/HomeHeroMosaic";
import LightPillar from "../../components/backgrounds/LightPillar";
import FaqAccordion from "../../components/FaqAccordion";
import ScrollReveal from "../../components/ScrollReveal";
import PictureSet from "../../components/PictureSet";
import { TITLE_HL as HL } from "../../components/agent-title-highlight";
import {
  HOME_AGENT_GROUPS,
  HOME_FAQS,
  HOME_PROFIT_POINTS,
  HOME_TEAM_DEPARTMENTS,
  HOME_WHAT_CHANGES,
} from "../../data/homeContent";
import { HOME_INDUSTRY_SLIDES } from "../../data/homeIndustrySlides";
import { useEffect, useId, useRef, useState } from "react";
import { cn } from "../../lib/cn";

/**
 * Clean editorial homepage: full-bleed photography, typography-led sections,
 * no video, no card grids.
 */
export default function HomePage() {
  return (
    <>
      <Seo
        path="/"
        title="AI Agent Platform for Local Business | Your AI Workforce | AI-Harness"
        description="AI-Harness is the AI agent platform that gives your business an AI workforce, agents that run your marketing and social, grow and answer your reviews, and get you found across Google, Apple, and AI search. More profit, less busywork. You approve, they run it. Start free."
        keywords="ai agent platform, ai agents for business, ai workforce, ai employees for business, agentic platform for local business, ai marketing agents, ai review management, ai reputation management, business listing management, get found on ai search, get found on chatgpt, ai social media manager"
      />
      <FaqJsonLd faqs={HOME_FAQS} />
      <HomeSchema />

      <Hero />
      <MoreProfit />
      <FullTeam />
      <Agents />
      <WhatChanges />
      <Industries />
      <HowItWorks />
      <BuiltToGrow />
      <InControl />
      <Proof />
      <Pricing />
      <Enterprise />
      <Faq />
      <FinalCta />
    </>
  );
}

function HomeSchema() {
  const json = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: "AI-Harness",
        url: "https://ai-harness.com/",
        logo: "https://ai-harness.com/ai-harness-favicon.png",
        description:
          "AI-Harness is the AI agent platform that gives local businesses an AI workforce for marketing, reviews, and visibility.",
      },
      {
        "@type": "WebSite",
        name: "AI-Harness",
        url: "https://ai-harness.com/",
        description:
          "AI agent platform for local business. Your AI workforce for marketing, reviews, and getting found across search.",
        publisher: { "@type": "Organization", name: "AI-Harness" },
      },
      {
        "@type": "SoftwareApplication",
        name: "AI-Harness",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        url: "https://ai-harness.com/",
        description:
          "AI-Harness is the AI agent platform that gives your business an AI workforce, agents that run your marketing and social, grow and answer your reviews, and get you found across Google, Apple, and AI search.",
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
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}

function Hero() {
  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden bg-ink-950">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <LightPillar className="h-full w-full" pillarRotation={30} quality="medium" />
        {/* Soft left veil so headline stays readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950/70 via-ink-950/35 to-transparent" />
      </div>
      <HomeHeroMosaic />

      <Container className="relative z-10 flex min-h-[100svh] flex-col justify-center py-28 pt-32 sm:pt-36 lg:pb-28">
        <ScrollReveal className="max-w-xl text-left lg:max-w-[28rem] xl:max-w-xl">
          <p className="text-xs font-semibold tracking-[0.18em] text-white/55 uppercase">
            The AI agent platform · An AI workforce for your business
          </p>
          <h1 className="mt-4 text-[clamp(1.85rem,3.8vw,3.15rem)] font-medium leading-[1.12] tracking-[-0.03em] text-white">
            Your <span className={HL}>AI workforce</span>, on one platform of{" "}
            <span className={HL}>AI agents</span> built to grow your{" "}
            <span className={HL}>business</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg sm:leading-[1.75]">
            AI-Harness puts a team of AI agents to work across your business: running your marketing
            and social, growing and answering your reviews, and getting you found everywhere
            customers search, so no opportunity is missed and more profit lands on the board,
            without adding headcount. You set the direction and approve what matters. The agents do
            the work, day and night.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Button to="/signup" size="lg">
              Start free
            </Button>
            <Button
              to="/demo"
              size="lg"
              variant="white"
              className="bg-white text-brand-600 hover:bg-white hover:text-brand-700"
            >
              See the platform in action
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
          <p className="mt-5 text-sm text-white/50">
            Free to start with $10 in credits · No credit card
          </p>
        </ScrollReveal>
      </Container>
    </section>
  );
}

function MoreProfit() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-16">
          <ScrollReveal>
            <p className="text-xs font-semibold tracking-[0.2em] text-ink-500 uppercase">
              More profit, less busywork
            </p>
            <h2 className="mt-5 text-[clamp(2rem,4vw,3.25rem)] font-medium leading-[1.08] tracking-[-0.03em] text-ink-900">
              Put more profit on the board,{" "}
              <span className={HL}>without adding headcount</span>
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-600">
              The work that grows a local business, being found, staying visible, winning reviews,
              keeping the brand alive, is expensive when people do it by hand and impossible to keep
              up on a busy week. AI-Harness hands that work to AI agents that run it around the
              clock, so you bring in more of the customers you are missing today, and keep more of
              every sale as profit instead of spending it on hours and extra hands.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <PictureSet
              base="/illustrations/custom/home-hero-life-revenue-growth.png"
              alt="Revenue and growth climbing in the AI-Harness workspace"
              width={800}
              height={600}
              sizes="(max-width: 1024px) 100vw, 28rem"
              className="h-auto w-full max-w-md object-contain lg:ml-auto"
            />
          </ScrollReveal>
        </div>

        <ul className="mt-16 grid gap-10 border-t border-ink-200 pt-12 sm:grid-cols-3 sm:gap-8">
          {HOME_PROFIT_POINTS.map((point, i) => (
            <ScrollReveal key={point.title} delay={i * 60} as="li">
              <p className="font-mono text-[11px] tracking-wider text-brand-500">
                0{i + 1}
              </p>
              <h3 className="mt-3 text-lg font-semibold tracking-tight text-ink-900">
                {point.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-600">{point.body}</p>
            </ScrollReveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}

function FullTeam() {
  const deptIcons = {
    megaphone: Megaphone,
    message: MessageSquare,
    chart: BarChart3,
    map: MapPin,
  } as const;

  const deptAccents = {
    megaphone: "from-indigo-500 to-violet-600",
    message: "from-rose-400 to-pink-600",
    chart: "from-amber-400 to-orange-500",
    map: "from-emerald-500 to-green-600",
  } as const;

  const deptText = {
    megaphone: "text-indigo-700",
    message: "text-rose-700",
    chart: "text-amber-800",
    map: "text-emerald-800",
  } as const;

  return (
    <section className="bg-[#F7F6FB] py-14 sm:py-20">
      <Container>
        <div className="grid items-start gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <ScrollReveal className="max-w-xl lg:pt-2">
            <p className="text-xs font-semibold tracking-[0.2em] text-ink-500 uppercase">
              One connected workforce
            </p>
            <h2 className="mt-4 text-[clamp(1.75rem,3.4vw,2.75rem)] font-medium leading-[1.12] tracking-[-0.03em] text-ink-900">
              A full team of AI agents, one for every part of{" "}
              <span className={HL}>your business</span>
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-600 sm:text-base">
              Not one more app to log into. An AI workforce. Each agent owns a department of your
              growth, shares one view of your business, and hands work off so the whole operation
              moves as one team while you approve what matters.
            </p>
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-ink-500">
              <span className="inline-flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
                Shared workspace
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
                Work flows between agents
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
                You stay in control
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={80}>
            <div className="overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-soft sm:rounded-3xl">
              <ul>
                {HOME_TEAM_DEPARTMENTS.map((dept, i) => {
                  const Icon = deptIcons[dept.icon];
                  return (
                    <li key={dept.label} className={cn(i > 0 && "border-t border-ink-100")}>
                      <Link
                        to={dept.seeTo}
                        className="group flex items-start gap-3 px-4 py-4 transition hover:bg-ink-50/70 sm:items-center sm:gap-4 sm:px-5 sm:py-4"
                      >
                        <span
                          className={cn(
                            "grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br text-white shadow-soft transition group-hover:scale-[1.03]",
                            deptAccents[dept.icon],
                          )}
                        >
                          <Icon className="h-5 w-5" strokeWidth={2} />
                        </span>
                        <div className="min-w-0 flex-1">
                          <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-0.5">
                            <p className="text-sm font-semibold tracking-tight text-ink-900 sm:text-[15px]">
                              {dept.label}
                            </p>
                            <p className={cn("text-xs font-medium sm:text-sm", deptText[dept.icon])}>
                              {dept.agent}
                            </p>
                          </div>
                          <p className="mt-1 text-[13px] leading-snug text-ink-500">{dept.blurb}</p>
                        </div>
                        <ArrowRight className="mt-2.5 h-4 w-4 shrink-0 text-ink-300 transition group-hover:translate-x-0.5 group-hover:text-ink-600 sm:mt-0" />
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <div className="border-t border-ink-100 bg-brand-50/40 px-4 py-3 sm:px-5">
                <p className="text-center text-[12px] leading-relaxed text-ink-500 sm:text-left">
                  Shared workspace · Work flowing between agents · One owner overseeing
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}

const WHAT_CHANGE_ICONS = {
  megaphone: Megaphone,
  message: MessageSquare,
  chart: BarChart3,
  map: MapPin,
  clock: Clock3,
} as const;

function OutcomeVisual({
  kind,
  label,
  value,
}: {
  kind: (typeof HOME_WHAT_CHANGES)[number]["outcomeKind"];
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl border border-brand-100 bg-brand-50/60 px-2.5 py-2">
      <p className="text-[10px] font-semibold tracking-[0.12em] text-ink-400 uppercase">{label}</p>
      <p className="mt-0.5 text-xs font-semibold tracking-tight text-brand-700">{value}</p>
      <div className="mt-1.5" aria-hidden>
        {kind === "spark" && (
          <svg viewBox="0 0 120 24" className="h-4 w-full text-success-500">
            <path
              d="M2 18 C18 16, 22 12, 34 11 S52 14, 64 9 S86 4, 118 3"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        )}
        {kind === "stars" && (
          <div className="flex gap-0.5 text-brand-500">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-2.5 w-2.5 fill-current" />
            ))}
          </div>
        )}
        {kind === "bars" && (
          <div className="flex h-4 items-end gap-0.5">
            {[40, 55, 48, 72, 88].map((h, i) => (
              <span
                key={i}
                className="w-1.5 rounded-sm bg-brand-400/80"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        )}
        {kind === "map" && (
          <div className="relative h-4 overflow-hidden rounded bg-brand-100/70">
            <MapPin className="absolute top-1/2 left-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 text-brand-600" />
          </div>
        )}
        {kind === "clock" && (
          <div className="flex items-center gap-1.5 text-brand-600">
            <Clock3 className="h-3 w-3" />
            <span className="h-1 flex-1 overflow-hidden rounded-full bg-brand-100">
              <span className="block h-full w-[18%] rounded-full bg-brand-500" />
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

function agentGroupTitle(title: string) {
  switch (title) {
    case "Get seen and win customers":
      return (
        <>
          Get <span className={HL}>seen</span> and win customers
        </>
      );
    case "Protect your reputation":
      return (
        <>
          Protect your <span className={HL}>reputation</span>
        </>
      );
    case "Run the rest of the business":
      return (
        <>
          Run the rest of the <span className={HL}>business</span>
        </>
      );
    default:
      return title;
  }
}

const WORKFORCE_MISSIONS = [
  {
    title: "Get seen and win customers",
    short: "Get found",
    blurb: "Show up where buyers look, stay active on social, and follow every lead until it books.",
    image: "/illustrations/custom/home-workforce-seen.png",
    imageAlt: "Cafe owner checking her phone in a bright US cafe",
  },
  {
    title: "Protect your reputation",
    short: "Win trust",
    blurb: "Answer every review in your voice and keep fresh ratings coming in without chasing customers.",
    image: "/illustrations/custom/home-workforce-reputation.png",
    imageAlt: "Business owner reviewing customer feedback on a tablet",
  },
  {
    title: "Run the rest of the business",
    short: "Run ops",
    blurb: "Bookings, proposals, payments, and referrals handled so your day is not eaten by admin.",
    image: "/illustrations/custom/home-workforce-ops.png",
    imageAlt: "Professional planning the day at a home office desk",
  },
] as const;

function Agents() {
  const [mission, setMission] = useState(0);
  const [openAgent, setOpenAgent] = useState(0);
  const activeMission = WORKFORCE_MISSIONS[mission];
  const group =
    HOME_AGENT_GROUPS.find((g) => g.title === activeMission.title) ?? HOME_AGENT_GROUPS[0];

  useEffect(() => {
    setOpenAgent(0);
  }, [mission]);

  const selectMission = (index: number) => {
    if (index === mission) return;
    setMission(index);
  };

  useEffect(() => {
    const run = () => {
      WORKFORCE_MISSIONS.forEach((item, index) => {
        if (index === mission) return;
        const img = new Image();
        img.decoding = "async";
        img.src = item.image;
      });
    };
    if (typeof window.requestIdleCallback === "function") {
      const id = window.requestIdleCallback(run, { timeout: 2000 });
      return () => window.cancelIdleCallback(id);
    }
    const t = window.setTimeout(run, 400);
    return () => window.clearTimeout(t);
  }, [mission]);

  return (
    <section className="relative overflow-hidden bg-[#F3F1EC] py-20 sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-brand-300/25 blur-3xl"
      />
      <Container>
        <div className="grid items-end gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <ScrollReveal>
            <p className="text-xs font-semibold tracking-[0.2em] text-ink-500 uppercase">
              Your AI team
            </p>
            <h2 className="mt-5 text-[clamp(2.25rem,4.5vw,3.5rem)] font-medium leading-[1.05] tracking-[-0.03em] text-ink-900">
              Meet the agents that{" "}
              <span className="font-serif italic text-brand-600">do the work</span>
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-600">
              Not a dashboard full of tools. A team you can hire for the jobs that keep slipping:
              visibility, reputation, and the ops that fill your calendar.
            </p>
          </ScrollReveal>
          {/* Tabs stay outside ScrollReveal — Safari hit-testing breaks on transformed parents */}
          <div className="relative z-10 lg:pb-2">
            <p className="text-sm font-medium text-ink-500">Start with a mission</p>
            <div
              role="tablist"
              aria-label="Agent missions"
              className="mt-3 flex flex-col gap-2"
            >
              {WORKFORCE_MISSIONS.map((item, index) => {
                const selected = index === mission;
                return (
                  <button
                    key={item.title}
                    type="button"
                    role="tab"
                    aria-selected={selected}
                    aria-controls="home-mission-panel"
                    onClick={() => selectMission(index)}
                    className={cn(
                      "flex items-center justify-between gap-4 rounded-2xl px-4 py-3.5 text-left",
                      selected
                        ? "bg-ink-950 text-white shadow-lift"
                        : "bg-white/70 text-ink-700 hover:bg-white",
                    )}
                  >
                    <span>
                      <span className="block text-[11px] font-semibold tracking-[0.16em] uppercase opacity-60">
                        0{index + 1}
                      </span>
                      <span className="mt-0.5 block text-base font-semibold tracking-tight sm:text-lg">
                        {item.short}
                      </span>
                    </span>
                    <ArrowRight
                      className={cn(
                        "h-4 w-4 shrink-0",
                        selected ? "opacity-100" : "opacity-0",
                      )}
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div
          id="home-mission-panel"
          role="tabpanel"
          className="mt-12 grid overflow-hidden rounded-[1.75rem] bg-ink-950 lg:mt-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]"
        >
          <div className="grid lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-start">
            {/* Photo stays fixed — self-start stops the grid row from stretching a blank band under the image */}
            <div className="relative self-start lg:sticky lg:top-28">
              <div className="relative h-[16rem] w-full overflow-hidden sm:h-[20rem] lg:h-[34rem]">
                <img
                  key={activeMission.image}
                  src={activeMission.image}
                  alt={activeMission.imageAlt}
                  width={1200}
                  height={800}
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                  className="absolute inset-0 h-full w-full object-cover object-center"
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-t from-ink-950 via-ink-950/40 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-ink-950/25 lg:to-ink-950"
                />
                <div className="absolute inset-x-0 bottom-0 z-10 p-6 sm:p-8 lg:hidden">
                  <p className="font-serif text-2xl text-white">{agentGroupTitle(group.title)}</p>
                  <p className="mt-2 text-sm leading-relaxed text-white/75">{activeMission.blurb}</p>
                </div>
              </div>
            </div>

          <div className="relative flex flex-col justify-between p-6 sm:p-8 lg:p-10">
            <div className="hidden lg:block">
              <p className="text-xs font-semibold tracking-[0.18em] text-brand-300 uppercase">
                Mission 0{mission + 1}
              </p>
              <h3 className="mt-3 text-[clamp(1.5rem,2.4vw,2rem)] font-medium tracking-tight text-white">
                {agentGroupTitle(group.title)}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-white/65">{activeMission.blurb}</p>
            </div>

            <ul className="mt-6 space-y-2 lg:mt-10">
              {group.agents.map((agent, index) => {
                const open = openAgent === index;
                return (
                  <li key={agent.name}>
                    <button
                      type="button"
                      aria-expanded={open}
                      onClick={() => setOpenAgent(open ? -1 : index)}
                      className={cn(
                        "w-full rounded-2xl border px-4 py-4 text-left transition-colors duration-200 sm:px-5",
                        open
                          ? "border-brand-400/50 bg-white/[0.08]"
                          : "border-white/10 bg-transparent hover:border-white/20 hover:bg-white/[0.04]",
                      )}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="min-w-0">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="text-base font-semibold text-white sm:text-lg">
                              {agent.name}
                            </span>
                            {agent.live ? (
                              <span className="inline-flex items-center gap-1.5 rounded-full bg-success/15 px-2 py-0.5 text-[11px] font-semibold tracking-wide text-success-300 uppercase">
                                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-success" />
                                Live
                              </span>
                              {agent.live ? (
                                <span className="inline-flex items-center gap-1.5 rounded-full bg-success/15 px-2 py-0.5 text-[11px] font-semibold tracking-wide text-success-300 uppercase">
                                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-success" />
                                  Live
                                </span>
                              ) : (
                                <span className="text-[11px] font-semibold tracking-wide text-white/35 uppercase">
                                  Soon
                                </span>
                              )}
                            </div>
                            {open ? (
                              <div className="mt-3">
                                <p className="text-[15px] leading-relaxed text-white/70">
                                  {agent.outcome}
                                </p>
                                {agent.live ? (
                                  <Link
                                    to={agent.seeTo}
                                    onClick={(e) => e.stopPropagation()}
                                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-200 hover:text-white"
                                  >
                                    Open this agent
                                    <ArrowRight className="h-3.5 w-3.5" />
                                  </Link>
                                ) : null}
                              </div>
                            ) : null}
                          </div>
                          <span
                            className={cn(
                              "mt-1 grid h-7 w-7 shrink-0 place-items-center rounded-full border border-white/15 text-white/70 transition-transform duration-200",
                              open && "rotate-90 border-brand-300/40 text-brand-200",
                            )}
                          >
                            <ArrowRight className="h-3.5 w-3.5" />
                          </span>
                        </div>
                      </button>
                    </li>
                  );
                })}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3 border-t border-white/10 pt-6">
                <Button to="/platform" variant="white">
                  See all products
                </Button>
                <Button to="/signup" className="border border-white/20 bg-transparent text-white hover:bg-white/10">
                  Start free
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function WhatChanges() {
  return (
    <section className="bg-[#F7F6FB] py-12 sm:py-16">
      <Container>
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] font-semibold tracking-[0.2em] text-brand-600 uppercase">
            ✦ Before and after ✦
          </p>
          <h2 className="mt-3 text-[clamp(1.65rem,3.2vw,2.35rem)] font-medium leading-[1.12] tracking-[-0.03em] text-ink-900">
            What changes when an AI workforce{" "}
            <span className="text-brand-600">joins your team</span>
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-ink-600 sm:text-[15px]">
            The growth work that used to lose to busy weeks finally gets done every day. You
            approve what matters, the agents run the rest.
          </p>
        </ScrollReveal>

        <div className="mt-6 overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-soft sm:mt-8">
          <div className="hidden border-b border-ink-200 bg-gradient-to-r from-ink-50 via-white to-brand-50/80 px-3 py-4 sm:px-4 lg:grid lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.1fr)_auto_minmax(0,1.1fr)_minmax(110px,0.55fr)] lg:items-center lg:gap-3 lg:px-5">
            <p className="text-[12px] font-bold tracking-[0.12em] text-ink-800 uppercase">
              The work
            </p>
            <p className="inline-flex w-fit items-center rounded-full bg-red-50 px-2.5 py-1 text-[12px] font-bold tracking-[0.08em] text-red-700 uppercase ring-1 ring-red-200/80">
              Your team today, doing it by hand
            </p>
            <span aria-hidden className="block w-6" />
            <p className="inline-flex w-fit items-center rounded-full bg-brand-100 px-2.5 py-1 text-[12px] font-bold tracking-[0.08em] text-brand-800 uppercase ring-1 ring-brand-300/70">
              With your AI-Harness workforce
            </p>
            <p className="text-right text-[12px] font-bold tracking-[0.12em] text-ink-700 uppercase">
              Result
            </p>
          </div>
          {HOME_WHAT_CHANGES.map((row, i) => {
            const Icon = WHAT_CHANGE_ICONS[row.icon];
            return (
              <div
                key={row.title}
                className={cn(
                  "px-3 py-3 sm:px-4 sm:py-3.5 lg:px-5",
                  i > 0 && "border-t border-ink-100",
                )}
              >
                <div className="grid gap-2.5 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.1fr)_auto_minmax(0,1.1fr)_minmax(110px,0.55fr)] lg:items-center lg:gap-3">
                  <div className="flex items-center gap-2.5">
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-brand-500 to-brand-700 text-white">
                      <Icon className="h-3.5 w-3.5" />
                    </span>
                    <div className="min-w-0">
                      <h3 className="text-sm font-semibold tracking-tight text-ink-900">
                        {row.title}
                      </h3>
                      <p className="truncate text-[11px] text-ink-500">{row.agent}</p>
                      <p className="mt-0.5 text-[10px] font-semibold tracking-[0.12em] text-brand-600 uppercase">
                        {row.lifts.join(" · ")}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-red-500 text-white">
                      <X className="h-2.5 w-2.5" strokeWidth={3} />
                    </span>
                    <div className="min-w-0">
                      <p className="mb-1 inline-flex rounded-full bg-red-50 px-2 py-0.5 text-[10px] font-bold tracking-[0.1em] text-red-700 uppercase ring-1 ring-red-200/70 lg:hidden">
                        Your team today, doing it by hand
                      </p>
                      <p className="text-[12px] leading-snug text-ink-600 sm:text-[13px]">
                        {row.before}
                      </p>
                    </div>
                  </div>

                  <div className="hidden justify-center lg:flex">
                    <span className="grid h-6 w-6 place-items-center rounded-full bg-brand-50 text-brand-600 ring-1 ring-brand-200">
                      <ArrowRight className="h-3 w-3" />
                    </span>
                  </div>

                  <div className="flex gap-2">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-success-500 text-white">
                      <Check className="h-2.5 w-2.5" strokeWidth={3} />
                    </span>
                    <div className="min-w-0">
                      <p className="mb-1 inline-flex rounded-full bg-brand-100 px-2 py-0.5 text-[10px] font-bold tracking-[0.1em] text-brand-800 uppercase ring-1 ring-brand-300/70 lg:hidden">
                        With your AI-Harness workforce
                      </p>
                      <p className="text-[12px] leading-snug text-ink-700 sm:text-[13px]">
                        {row.after}
                      </p>
                    </div>
                  </div>

                  <OutcomeVisual
                    kind={row.outcomeKind}
                    label={row.outcomeLabel}
                    value={row.outcomeValue}
                  />
                </div>
              </div>
            );
          })}
        </div>

        <ScrollReveal className="mt-6 flex flex-col items-center gap-2">
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            <Button to="/contact" variant="secondary" size="sm">
              See how the workforce pays for itself
            </Button>
            <Button to="/signup" size="sm">
              Start free
              <ArrowRight className="h-3.5 w-3.5" />
            </Button>
          </div>
          <p className="text-center text-[11px] text-ink-400">
            No credit card required · Setup in minutes · Cancel anytime
          </p>
        </ScrollReveal>
      </Container>
    </section>
  );
}

function Industries() {
  const [active, setActive] = useState(0);
  const [inView, setInView] = useState(true);
  const sectionRef = useRef<HTMLElement | null>(null);
  const tablistId = useId();
  const slide = HOME_INDUSTRY_SLIDES[active];
  const count = HOME_INDUSTRY_SLIDES.length;

  const goTo = (index: number) => {
    const next = ((index % count) + count) % count;
    if (next === active) return;
    setActive(next);
  };

  // Prefetch other industry images without stacking six multi-MB nodes in the DOM.
  useEffect(() => {
    const run = () => {
      HOME_INDUSTRY_SLIDES.forEach((item, index) => {
        if (index === active) return;
        const img = new Image();
        img.decoding = "async";
        img.src = item.image;
      });
    };
    if (typeof window.requestIdleCallback === "function") {
      const id = window.requestIdleCallback(run, { timeout: 2500 });
      return () => window.cancelIdleCallback(id);
    }
    const t = window.setTimeout(run, 500);
    return () => window.clearTimeout(t);
  }, [active]);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.25 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    const id = window.setInterval(() => {
      setActive((current) => (current + 1) % count);
    }, 5000);
    return () => window.clearInterval(id);
  }, [inView, count]);

  return (
    <section ref={sectionRef} className="bg-ink-950 text-white">
      <Container className="py-16 sm:py-20 lg:py-24">
        <ScrollReveal className="max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.2em] text-brand-300 uppercase">
            Built for your business
          </p>
          <h2 className="mt-5 text-[clamp(2rem,4vw,3.25rem)] font-medium leading-[1.08] tracking-[-0.03em] text-white">
            The same agents, tuned to how{" "}
            <span className="text-brand-300">your business</span> grows
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/65 sm:text-lg">
            Not generic software with your logo on top. Your visibility, social, and reputation
            agents adapt to the moments that make you money in your line of work.
          </p>
        </ScrollReveal>
      </Container>

      <div className="border-t border-white/10">
        <div className="mx-auto grid max-w-[1400px] lg:grid-cols-[minmax(280px,0.38fr)_minmax(0,0.62fr)]">
          {/* Industry rail: primary interactive control */}
          <div className="relative flex flex-col border-b border-white/10 lg:border-r lg:border-b-0">
            <p className="px-6 pt-6 text-xs font-semibold tracking-[0.18em] text-white/45 uppercase sm:px-8">
              Choose an industry
            </p>
            <div
              role="tablist"
              aria-label="Industries"
              id={tablistId}
              className="flex gap-2 overflow-x-auto px-4 py-4 [-ms-overflow-style:none] [scrollbar-width:none] sm:px-6 lg:flex-col lg:gap-0 lg:overflow-visible lg:px-0 lg:py-4 [&::-webkit-scrollbar]:hidden"
            >
              {HOME_INDUSTRY_SLIDES.map((item, index) => {
                const selected = index === active;
                return (
                  <button
                    key={item.name}
                    type="button"
                    role="tab"
                    id={`${tablistId}-tab-${index}`}
                    aria-selected={selected}
                    aria-controls={`${tablistId}-panel`}
                    tabIndex={0}
                    onClick={() => goTo(index)}
                    onKeyDown={(e) => {
                      if (e.key === "ArrowDown" || e.key === "ArrowRight") {
                        e.preventDefault();
                        goTo(active + 1);
                      } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
                        e.preventDefault();
                        goTo(active - 1);
                      }
                    }}
                    className={cn(
                      "relative shrink-0 text-left lg:w-full",
                      "rounded-full px-5 py-3 lg:rounded-none lg:px-8 lg:py-5",
                      selected
                        ? "bg-white text-ink-950 lg:bg-white/[0.07] lg:text-white"
                        : "bg-white/10 text-white/70 hover:bg-white/15 hover:text-white lg:bg-transparent lg:hover:bg-white/[0.04]",
                    )}
                  >
                    <span className="flex items-baseline gap-3 lg:gap-4">
                      <span
                        className={cn(
                          "hidden font-mono text-[11px] tracking-wider lg:inline",
                          selected ? "text-brand-300" : "text-white/30",
                        )}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="block text-[15px] font-semibold tracking-tight sm:text-base lg:text-[1.35rem] lg:leading-tight">
                        {item.tabLabel}
                      </span>
                    </span>
                    {selected ? (
                      <span
                        aria-hidden
                        className="absolute top-1/2 left-0 hidden h-8 w-1 -translate-y-1/2 rounded-r-full bg-brand-400 lg:block"
                      />
                    ) : null}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Stage */}
          <div
            role="tabpanel"
            id={`${tablistId}-panel`}
            aria-labelledby={`${tablistId}-tab-${active}`}
            className="relative min-h-[420px] overflow-hidden bg-ink-900 sm:min-h-[520px] lg:min-h-[640px]"
          >
            <PictureSet
              key={slide.image}
              base={slide.image}
              alt={slide.imageAlt}
              width={1400}
              height={900}
              sizes="(max-width: 1024px) 100vw, 66vw"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/35 to-transparent"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-gradient-to-r from-ink-950/50 via-transparent to-transparent"
            />

            <div className="absolute inset-x-0 bottom-0 z-10 p-6 sm:p-8 lg:p-10">
              <div key={slide.name} className="max-w-xl">
                <p className="text-sm font-medium text-brand-200">{slide.eyebrow}</p>
                <blockquote className="mt-3 font-serif text-[clamp(1.35rem,2.6vw,2rem)] leading-snug text-white">
                  “{slide.quote}”
                </blockquote>
                <p className="mt-4 text-sm text-white/70">
                  {slide.quoteAuthor} · {slide.quoteCompany}
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <Link
                    to="/industries"
                    className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-ink-900 transition hover:bg-white/90"
                  >
                    See AI-Harness for {slide.name}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    to="/signup"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-white/70 transition hover:text-white"
                  >
                    Start free
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const HOW_STEPS = [
  {
    n: "01",
    title: "Connect and teach it your voice, once",
    body: "Link the tools you already use and answer a few plain questions. Your agents learn your voice, hours, and rules from what you have already published.",
  },
  {
    n: "02",
    title: "Approve the plan in minutes",
    body: "Your agents come back with what they intend to do. You review, edit, and approve, about twenty minutes for a month of work.",
  },
  {
    n: "03",
    title: "They work, you stay in control",
    body: "Agents run across every channel, day and night, and hand off to each other cleanly. Anything sensitive waits for your tap.",
  },
];

function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-20 sm:py-28">
      <Container>
        <ScrollReveal className="max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.2em] text-ink-500 uppercase">
            How it works
          </p>
          <h2 className="mt-5 text-[clamp(2rem,4vw,3rem)] font-medium leading-[1.1] tracking-[-0.03em] text-ink-900">
            From your first agent to a working team,{" "}
            <span className={HL}>in an afternoon</span>
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-600">
            Once you turn on your agents, here is how fast they get to work.
          </p>
        </ScrollReveal>

        <ol className="mt-16 space-y-0 border-t border-ink-200">
          {HOW_STEPS.map((step, i) => (
            <ScrollReveal key={step.n} delay={i * 60} as="li">
              <div className="grid gap-4 border-b border-ink-200 py-10 sm:grid-cols-[5rem_1fr] sm:gap-10 lg:grid-cols-[6rem_minmax(0,0.9fr)_minmax(0,1fr)]">
                <span className="font-serif text-3xl text-brand-500">{step.n}</span>
                <h3 className="text-xl font-semibold tracking-tight text-ink-900 sm:pt-1">
                  {step.title}
                </h3>
                <p className="text-[15px] leading-relaxed text-ink-600 sm:col-span-2 lg:col-span-1 lg:pt-1">
                  {step.body}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </ol>

        <ScrollReveal className="mt-12 flex flex-wrap gap-4">
          <Button to="/signup">Start free</Button>
          <Button to="/demo" variant="secondary">
            Book a walkthrough
          </Button>
        </ScrollReveal>
      </Container>
    </section>
  );
}

function BuiltToGrowVisual() {
  return (
    <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
      {/* Soft brand blob */}
      <div
        aria-hidden
        className="absolute top-1/2 left-1/2 h-[92%] w-[92%] -translate-x-1/2 -translate-y-1/2 rounded-[42%_58%_48%_52%] bg-gradient-to-br from-brand-200/70 via-brand-100/80 to-brand-50"
      />
      <div
        aria-hidden
        className="absolute top-[8%] right-[4%] h-24 w-24 rounded-full bg-brand-300/25 blur-2xl"
      />

      <div className="relative grid grid-cols-[1.05fr_0.95fr] items-center gap-2 sm:gap-3">
        <div className="relative z-[1] overflow-hidden rounded-[1.35rem] shadow-lift ring-1 ring-white/60 sm:rounded-[1.75rem]">
          <PictureSet
            base="/illustrations/custom/home-built-to-grow-owner.png"
            alt="Local business owner ready to grow with AI agents"
            width={900}
            height={1200}
            sizes="(max-width: 768px) 55vw, 420px"
            className="aspect-[3/4] h-full w-full object-cover object-[center_15%]"
          />
        </div>

        <div className="relative z-[2] flex flex-col gap-2.5 pr-1 sm:gap-3 sm:pr-2">
          {/* Active first agent */}
          <div className="rounded-2xl bg-brand-600 p-3 text-white shadow-lift sm:rounded-[1.25rem] sm:p-3.5">
            <div className="flex items-start justify-between gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-white/15 ring-1 ring-white/25">
                <Bot className="h-4 w-4" />
              </span>
              <span className="grid h-5 w-5 place-items-center rounded-full bg-white text-brand-700">
                <Check className="h-3 w-3" strokeWidth={3} />
              </span>
            </div>
            <p className="mt-3 text-sm font-semibold tracking-tight">Your first agent</p>
            <p className="mt-1 text-[11px] leading-snug text-white/75">
              Live and working on the job that hurts most
            </p>
          </div>

          {/* Empty slots to scale */}
          {[1, 2].map((slot) => (
            <div
              key={slot}
              className="rounded-2xl border border-dashed border-brand-300/80 bg-white/75 p-3 backdrop-blur-sm sm:rounded-[1.25rem] sm:p-3.5"
            >
              <span className="grid h-9 w-9 place-items-center rounded-full bg-brand-50 text-brand-600 ring-1 ring-brand-200">
                <Plus className="h-4 w-4" />
              </span>
              <p className="mt-3 text-sm font-semibold tracking-tight text-brand-800/80">
                Add next agent
              </p>
              <p className="mt-1 text-[11px] leading-snug text-brand-700/55">
                Expand as each one earns its place
              </p>
            </div>
          ))}

          {/* Progress dots */}
          <div className="mt-1 flex items-center justify-between px-2" aria-hidden>
            <span className="h-px flex-1 bg-brand-200" />
            <span className="mx-1.5 flex gap-2">
              <span className="h-2 w-2 rounded-full bg-brand-600" />
              <span className="h-2 w-2 rounded-full border border-brand-400 bg-white" />
              <span className="h-2 w-2 rounded-full border border-brand-400 bg-white" />
            </span>
            <span className="h-px flex-1 bg-brand-200" />
          </div>
        </div>
      </div>
    </div>
  );
}

function BuiltToGrow() {
  return (
    <section className="overflow-hidden bg-[#F7F6FB] py-14 sm:py-20">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-16">
          <ScrollReveal className="max-w-xl">
            <p className="text-xs font-semibold tracking-[0.2em] text-ink-500 uppercase">
              Built to grow with you
            </p>
            <h2 className="mt-4 text-[clamp(1.75rem,3.4vw,2.75rem)] font-medium leading-[1.12] tracking-[-0.03em] text-ink-900">
              Start with one agent.
              <span className="mt-1 block">
                Scale to a full <span className={HL}>AI workforce</span>.
              </span>
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-600 sm:text-base">
              Your agents share one view of your business, hand work off cleanly, and act at the
              right moment. Start with the job that hurts most, then expand across locations without
              ripping anything out.
            </p>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-600 sm:text-base">
              New agents and capabilities keep landing over time, so your AI workforce grows into
              more of your business as you do.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button to="/signup" size="sm">
                Start free
                <ArrowRight className="h-3.5 w-3.5" />
              </Button>
              <Button to="/platform" variant="secondary" size="sm">
                See the platform
              </Button>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={80}>
            <BuiltToGrowVisual />
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}

function InControl() {
  return (
    <section className="relative overflow-hidden">
      <div className="grid lg:grid-cols-2">
        <div className="relative min-h-[420px] lg:min-h-[640px]">
          <PictureSet
            base="/illustrations/custom/home-redesign-control.png"
            alt="Business owner calmly reviewing work on a laptop in a bright US office"
            width={1200}
            height={900}
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
        <div className="flex items-center bg-ink-950 px-6 py-16 sm:px-12 sm:py-20 lg:px-16">
          <ScrollReveal className="max-w-lg">
            <p className="text-xs font-semibold tracking-[0.2em] text-brand-300 uppercase">
              You stay in control
            </p>
            <h2 className="mt-5 text-[clamp(1.85rem,3.5vw,2.75rem)] font-medium leading-[1.12] tracking-[-0.03em] text-white">
              More automation should mean the right control, not less of it.
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-white/65">
              This is where AI-Harness is built differently from other AI tools. The agents are
              fast, but nothing important happens without you, and everything they do is on the
              record.
            </p>
            <ul className="mt-10 space-y-6 text-[15px] leading-relaxed text-white/75">
              <li>
                <span className="font-semibold text-white">You approve, they act.</span> Nothing
                sensitive goes out in your name until you allow it.
              </li>
              <li>
                <span className="font-semibold text-white">Never a surprise bill.</span> Set a monthly
                limit per agent; it pauses when the limit is reached.
              </li>
              <li>
                <span className="font-semibold text-white">Every action on the record.</span> Every
                reply, post, and update is logged and searchable.
              </li>
              <li>
                <span className="font-semibold text-white">Your data stays yours.</span> Never sold,
                never used to train models.
              </li>
            </ul>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

function Proof() {
  return (
    <section className="bg-[#F7F6F4] py-20 sm:py-28">
      <Container>
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold tracking-[0.2em] text-ink-500 uppercase">Proof</p>
          <h2 className="mt-5 text-[clamp(1.85rem,3.5vw,2.75rem)] font-medium leading-[1.12] tracking-[-0.03em] text-ink-900">
            What owners say after the first month
          </h2>
          <p className="mx-auto mt-8 max-w-lg text-base leading-relaxed text-ink-500">
            Verified customer results and logos will appear here once we have permission to share
            them. No placeholder statistics in the meantime.
          </p>
        </ScrollReveal>
      </Container>
    </section>
  );
}

function Pricing() {
  return (
    <section className="relative overflow-hidden bg-ink-950 py-16 sm:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(136,80,232,0.28),transparent_55%),radial-gradient(ellipse_at_bottom_right,rgba(136,80,232,0.12),transparent_45%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[42rem] -translate-x-1/2 rounded-full bg-brand-500/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand-400/40 to-transparent"
      />

      <Container className="relative z-10">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold tracking-[0.2em] text-brand-300 uppercase">
            Pricing
          </p>
          <h2 className="mt-4 text-[clamp(1.75rem,3.4vw,2.75rem)] font-medium leading-[1.12] tracking-[-0.03em] text-white">
            Start <span className="text-brand-300">free</span>. Add agents as they earn their place.
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-white/70 sm:text-base">
            Simple monthly plans with single-agent options, so you can begin with the one job that
            hurts most and grow into a full AI workforce when you are ready. No credit card to
            start.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button
              to="/contact"
              variant="white"
              className="bg-white text-brand-700 hover:bg-white hover:text-brand-800"
            >
              See plans
            </Button>
            <Button to="/signup">Start free</Button>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}

function Enterprise() {
  return (
    <section className="border-y border-ink-100 bg-[#F7F6F4] py-16 sm:py-20">
      <Container>
        <ScrollReveal className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <p className="max-w-2xl text-lg leading-relaxed text-ink-700">
            Bigger team, more locations, or deeper controls and reporting? AI-Harness scales into a
            fully governed AI workforce with the oversight larger operations require.
          </p>
          <Button to="/enterprise" variant="secondary" size="lg">
            Explore AI-Harness for Enterprise
          </Button>
        </ScrollReveal>
      </Container>
    </section>
  );
}

function Faq() {
  return (
    <section className="border-t border-ink-100 bg-white py-20 sm:py-28">
      <Container>
        <ScrollReveal>
          <h2 className="max-w-4xl text-[clamp(2.25rem,5vw,3.5rem)] font-normal leading-[1.1] tracking-[-0.03em] text-ink-900">
            Frequently Asked Questions
          </h2>
        </ScrollReveal>
        <div className="mt-10 sm:mt-14">
          <FaqAccordion items={HOME_FAQS} variant="lines" className="font-inter" />
        </div>
      </Container>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="relative isolate min-h-[min(70vh,560px)] overflow-hidden">
      <PictureSet
        base="/illustrations/custom/home-redesign-cta.png"
        alt=""
        width={1920}
        height={1080}
        sizes="100vw"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      {/* Cool brand wash — kills residual warm cast */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-brand-950/75 via-ink-950/55 to-brand-900/40 mix-blend-multiply"
      />
      <div aria-hidden className="absolute inset-0 bg-ink-950/35" />
      <Container className="relative z-10 flex min-h-[min(70vh,560px)] items-center py-20">
        <ScrollReveal className="max-w-xl">
          <h2 className="text-[clamp(2rem,4vw,3.25rem)] font-medium leading-[1.1] tracking-[-0.03em] text-white">
            Your business, running every day.
            <span className="mt-2 block font-serif italic text-white/90">Your evenings, back.</span>
          </h2>
          <p className="mt-5 text-lg text-white/85">
            Hire your first AI agent in the next few minutes. Start free with $10 in credits, no
            credit card, no consultants.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Button to="/signup" size="lg">
              Start free
            </Button>
            <Button
              to="/contact"
              size="lg"
              variant="white"
              className="bg-white text-brand-600 hover:bg-white hover:text-brand-700"
            >
              Talk to us
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
