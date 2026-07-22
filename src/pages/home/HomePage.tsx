import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Container from "../../components/Container";
import Button from "../../components/Button";
import Seo from "../../components/Seo";
import FaqJsonLd from "../../components/FaqJsonLd";
import HomeHeroMosaic from "../../components/home/HomeHeroMosaic";
import LightPillar from "../../components/backgrounds/LightPillar";
import FaqAccordion from "../../components/FaqAccordion";
import ScrollReveal from "../../components/ScrollReveal";
import { TITLE_HL as HL } from "../../components/agent-title-highlight";
import { HOME_AGENT_GROUPS, HOME_FAQS } from "../../data/homeContent";
import { HOME_INDUSTRY_SLIDES } from "../../data/homeIndustrySlides";
import { useEffect, useId, useState } from "react";
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
        title="AI Agents That Run Your Business, Done For You"
        description="AI-Harness gives your business a team of AI agents that get you found, win reviews, follow up leads, book appointments, and get you paid. Not a chatbot, agents that do the work. You approve, they run it. Start free."
        keywords="ai agents for business, ai workforce, ai employees for business, ai marketing agents, what is an ai agent, ai review management, get found on ai search, ai social media manager, ai appointment booking, ai lead follow up"
      />
      <FaqJsonLd faqs={HOME_FAQS} />
      <HomeSchema />

      <Hero />
      <Agents />
      <Industries />
      <HowItWorks />
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
        "@type": "SoftwareApplication",
        name: "AI-Harness",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        url: "https://ai-harness.com/",
        description:
          "AI-Harness gives your business a team of AI agents that get you found, win reviews, follow up leads, book appointments, and get you paid.",
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
          <h1 className="text-[clamp(1.85rem,3.8vw,3.15rem)] font-medium leading-[1.12] tracking-[-0.03em] text-white">
            Your <span className={HL}>AI workforce</span>, running the{" "}
            <span className={HL}>busy work</span> while you run the{" "}
            <span className={HL}>business</span>.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg sm:leading-[1.75]">
            A team of AI agents that make your brand more visible, turn attention into customers,
            and put more revenue on the board, getting you found, winning your reviews, following up
            your leads, booking your appointments, and getting you paid. You set the direction and
            approve what matters. They do the work, day and night.
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
              See it in action
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
          <p className="mt-5 text-sm text-white/50">$10 free credits · No credit card</p>
        </ScrollReveal>
      </Container>
    </section>
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
          <div className="relative min-h-[280px] bg-ink-900 sm:min-h-[360px] lg:min-h-[560px]">
            <img
              key={activeMission.image}
              src={activeMission.image}
              alt={activeMission.imageAlt}
              width={1200}
              height={800}
              loading="eager"
              decoding="async"
              fetchPriority="high"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-t from-ink-950 via-ink-950/40 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-ink-950/20 lg:to-ink-950"
            />
            <div className="absolute inset-x-0 bottom-0 z-10 p-6 sm:p-8 lg:hidden">
              <p className="font-serif text-2xl text-white">{agentGroupTitle(group.title)}</p>
              <p className="mt-2 text-sm leading-relaxed text-white/75">{activeMission.blurb}</p>
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
      </Container>
    </section>
  );
}

function Industries() {
  const [active, setActive] = useState(0);
  const tablistId = useId();
  const slide = HOME_INDUSTRY_SLIDES[active];
  const count = HOME_INDUSTRY_SLIDES.length;

  const goTo = (index: number) => {
    const next = ((index % count) + count) % count;
    if (next === active) return;
    setActive(next);
  };

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

  return (
    <section className="bg-ink-950 text-white">
      <Container className="py-16 sm:py-20 lg:py-24">
        <ScrollReveal className="max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.2em] text-brand-300 uppercase">
            Industries
          </p>
          <h2 className="mt-5 text-[clamp(2rem,4vw,3.25rem)] font-medium leading-[1.08] tracking-[-0.03em] text-white">
            Tuned to how <span className="text-brand-300">your business</span> runs
          </h2>
        </ScrollReveal>
      </Container>

      <div className="border-t border-white/10">
        <div className="mx-auto grid max-w-[1400px] lg:grid-cols-[minmax(280px,0.38fr)_minmax(0,0.62fr)]">
          <div className="relative z-10 flex flex-col border-b border-white/10 lg:border-r lg:border-b-0">
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

          <div
            role="tabpanel"
            id={`${tablistId}-panel`}
            aria-labelledby={`${tablistId}-tab-${active}`}
            className="relative min-h-[420px] overflow-hidden bg-ink-900 sm:min-h-[520px] lg:min-h-[640px]"
          >
            <img
              key={slide.image}
              src={slide.image}
              alt={slide.imageAlt}
              width={1400}
              height={900}
              loading="eager"
              decoding="async"
              fetchPriority="high"
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
                    See {slide.name}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <button
                    type="button"
                    onClick={() => goTo(active + 1)}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-white/70 transition hover:text-white"
                  >
                    Next industry
                    <ArrowRight className="h-4 w-4" />
                  </button>
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
    title: "Connect and teach it your voice",
    body: "Link the tools you already use. Your agents learn your voice, hours, and rules from what you have already published.",
  },
  {
    n: "02",
    title: "Approve the plan in minutes",
    body: "Agents come back with what they intend to do. You review and approve, about twenty minutes for a month of work.",
  },
  {
    n: "03",
    title: "They work. You stay in control.",
    body: "Agents run across every channel, day and night. Anything sensitive waits for your tap.",
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

function InControl() {
  return (
    <section className="relative overflow-hidden">
      <div className="grid lg:grid-cols-2">
        <div className="relative min-h-[420px] lg:min-h-[640px]">
          <img
            src="/illustrations/custom/home-redesign-control.png"
            alt="Business owner calmly reviewing work on a laptop in a bright US office"
            width={1200}
            height={900}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
        <div className="flex items-center bg-ink-950 px-6 py-16 sm:px-12 sm:py-20 lg:px-16">
          <ScrollReveal className="max-w-lg">
            <p className="text-xs font-semibold tracking-[0.2em] text-brand-300 uppercase">
              Always in control
            </p>
            <h2 className="mt-5 text-[clamp(1.85rem,3.5vw,2.75rem)] font-medium leading-[1.12] tracking-[-0.03em] text-white">
              More automation should mean the right control, not less of it.
            </h2>
            <ul className="mt-10 space-y-6 text-[15px] leading-relaxed text-white/75">
              <li>
                <span className="font-semibold text-white">You approve, they act.</span> Nothing
                sensitive goes out in your name until you allow it.
              </li>
              <li>
                <span className="font-semibold text-white">Never a surprise bill.</span> Set a monthly
                limit per agent; it pauses when reached.
              </li>
              <li>
                <span className="font-semibold text-white">Every action on the record.</span> Every
                reply, post, and follow-up is logged.
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
          <p className="text-xs font-semibold tracking-[0.2em] text-ink-500 uppercase">
            After the first month
          </p>
          <blockquote className="mt-8 font-serif text-[clamp(1.65rem,3.5vw,2.5rem)] leading-snug text-ink-900">
            “Reviews answered themselves. I finally stopped chasing every Google ping after close.”
          </blockquote>
          <p className="mt-6 text-sm font-medium text-ink-500">Owner · Local service business</p>
          <p className="mx-auto mt-10 max-w-md text-xs leading-relaxed text-ink-400">
            Placeholder voice for layout. Replace with a named customer result when ready.
          </p>
        </ScrollReveal>
      </Container>
    </section>
  );
}

function Pricing() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <ScrollReveal>
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-medium leading-[1.1] tracking-[-0.03em] text-ink-900">
              Start <span className={HL}>free</span>. Add agents as they earn their place.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-600">
              Begin with the one job that hurts most. Grow into a full workforce when you are ready.
              No credit card to start.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button to="/signup">Start free</Button>
              <Button to="/contact" variant="secondary">
                See plans
              </Button>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <img
              src="/illustrations/custom/home-redesign-grow-agents.png"
              alt="Business owner starting with one AI agent on a tablet and room to add more as the business grows"
              width={1200}
              height={900}
              loading="lazy"
              decoding="async"
              className="h-auto w-full object-cover"
            />
          </ScrollReveal>
        </div>
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
            Bigger team, more locations, or deeper controls? Explore the governed enterprise
            experience.
          </p>
          <Button to="/enterprise" variant="secondary" size="lg">
            AI-Harness for Enterprise
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
      <img
        src="/illustrations/custom/home-redesign-cta.png"
        alt=""
        width={1920}
        height={1080}
        loading="lazy"
        decoding="async"
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
            Hire your first AI agent in minutes. Start free, no credit card, no consultants.
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
