import { Link } from "react-router-dom";
import {
  ArrowRight,
  Bot,
  Brain,
  Clock3,
  FileText,
  Globe2,
  Layers,
  Network,
  Plus,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import Container from "../components/Container";
import Button from "../components/Button";
import Eyebrow from "../components/Eyebrow";
import Seo from "../components/Seo";
import { DESKS, DESK_ORDER } from "../lib/desks";

/**
 * Universal pain points shown on the overview page — the ones that apply to
 * any international company entering the US market, before country specifics.
 */
const universalReasons = [
  {
    title: "Distance kills US-speed deals",
    body:
      "American buyers expect same-day responses and US-format materials. Routing every decision back through HQ approval loops loses deals before they start.",
    callout: "A pod that responds while HQ sleeps",
  },
  {
    title: "Trade show leads go cold",
    body:
      "You exhibit at CES or HIMSS, collect two hundred badges, and fly home. Without same-week follow-up on the ground, the investment quietly evaporates.",
    callout: "Every lead worked within 72 hours",
  },
  {
    title: "Consultants deliver decks, not pipeline",
    body:
      "Market-entry firms hand you strategy documents. What you need is someone making calls, booking meetings, and signing distributors on your behalf.",
    callout: "KPIs: meetings booked, partners signed",
  },
];

/**
 * Platform capabilities, drawn from the AI-Harness platform overview and
 * framed specifically for international market-entry workloads.
 */
const capabilities = [
  {
    icon: <Network className="h-5 w-5" />,
    title: "Hybrid Human + AI Workforce",
    body:
      "Humans and AI Agents co-exist in the same project, assigned tasks through identical workflows, with shared context across every handoff — no manual translation between systems.",
  },
  {
    icon: <Bot className="h-5 w-5" />,
    title: "Role-based AI Agents",
    body:
      "Agents configured for the actual jobs of US market entry: SMEs, task executors, reviewers, collaborators. Each with defined role boundaries, tools, and decision frameworks.",
  },
  {
    icon: <Workflow className="h-5 w-5" />,
    title: "Workflow & Task Orchestration",
    body:
      "Structured project pipelines route work across humans and agents automatically. Trade show follow-up runs on a 72-hour pipeline; reporting auto-generates from the audit trail.",
  },
  {
    icon: <Brain className="h-5 w-5" />,
    title: "Skill & Capability Injection",
    body:
      "Agents gain new skills, tools, and data-source access without redeploying workflows. Add a CRM, a sector data feed, or a compliance checker — and every pod inherits it.",
  },
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    title: "Governance & Audit Trail",
    body:
      "Immutable logs across humans and agents. Role-based access, transparent decision records for AI-driven actions, approval gates and budget limits on every agent.",
  },
  {
    icon: <Layers className="h-5 w-5" />,
    title: "Enterprise Scalability",
    body:
      "One country today, three tomorrow. Multi-country rollouts share governance, reporting, and audit infrastructure — without resetting your playbook each time.",
  },
];

const howItWorks = [
  {
    n: "1",
    title: "Assess your readiness",
    body:
      "An evidence-based evaluation of pricing, certifications, localization gaps, and buyer landscape, with a clear go / fix-first / no-go recommendation.",
  },
  {
    n: "2",
    title: "Deploy your hybrid pod",
    body:
      "We configure your pod on AI-Harness (humans, agents, guardrails, and KPIs) with bilingual documentation your HQ can review before launch.",
  },
  {
    n: "3",
    title: "Operate, report, expand",
    body:
      "Outreach, meetings, and monthly reports — generated from the audit trail, not a consultant's memory. Add a second country when you're ready.",
  },
];

const headerStats = [
  {
    value: "72h",
    label: "Every trade show lead worked, on the ground",
    icon: <Clock3 className="h-4 w-4" />,
  },
  {
    value: "24/7",
    label: "Agents work HQ and US Pacific hours",
    icon: <Globe2 className="h-4 w-4" />,
  },
  {
    value: "Full",
    label: "Audit trail on humans and agents",
    icon: <ShieldCheck className="h-4 w-4" />,
  },
  {
    value: "Monthly",
    label: "Formal written reports to HQ, in native language",
    icon: <FileText className="h-4 w-4" />,
  },
];

export default function InternationalBusinesses() {
  return (
    <>
      <Seo
        path="/international-businesses"
        title="International Businesses | AI-Harness"
        description="AI-Harness helps international companies enter the US market with bilingual account directors and governed AI agents. Country-specific teams for Japan, China, and Taiwan."
        keywords="US market entry, international businesses, Japan Desk, China Desk, Taiwan Desk, bilingual account director, AI-Harness"
        breadcrumbs={[
          { label: "Solutions", path: "/solutions" },
          { label: "International Businesses", path: "/international-businesses" },
        ]}
      />
      <Hero />
      <StatsRow />
      <UniversalChallenge />
      <Capabilities />
      <HowItWorks />
      <CountrySelector />
      <BottomCTA />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden pb-10 pt-12 sm:pb-14 sm:pt-16">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-spotlight" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grid opacity-60 [mask-image:linear-gradient(to_bottom,white_0%,white_55%,transparent_100%)]"
      />
      <Container className="relative">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-1.5 text-[12.5px] font-medium text-ink-500"
            >
              <span>Solutions</span>
              <span className="text-ink-300">/</span>
              <span className="text-ink-900">International Businesses</span>
            </nav>

            <div className="mt-5">
              <Eyebrow>Managed services for international companies</Eyebrow>
            </div>

            <h1 className="mt-5 text-[36px] font-semibold leading-[1.04] tracking-[-0.02em] text-ink-900 sm:text-[52px]">
              Where international ambition{" "}
              <span className="text-gradient">meets US execution.</span>
            </h1>

            <p className="mt-5 max-w-xl text-[15.5px] leading-relaxed text-ink-600 sm:text-[16.5px]">
              We help companies headquartered outside the US build real
              pipeline inside it. Bilingual account directors run relationships;
              governed AI agents handle the high-volume work — research,
              follow-up, CRM hygiene, monthly reporting — under one auditable
              workspace your HQ can inspect.
            </p>

            <div className="mt-7 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
              <Button
                href="#country-selector"
                size="md"
                className="bg-gradient-to-r from-brand-600 to-indigo-600 text-white shadow-lift hover:from-brand-700 hover:to-indigo-700"
              >
                Select your country
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button to="/platform" variant="secondary" size="md">
                See the platform
              </Button>
            </div>

            <p className="mt-6 text-[13px] text-ink-500">
              Taiwan · China · Japan · More countries coming
            </p>
          </div>

          <div className="w-full">
            <PlatformCard />
          </div>
        </div>
      </Container>
    </section>
  );
}

/**
 * Visual showpiece for the hero: a stylised workspace mockup illustrating
 * the human+agent split on AI-Harness, used as a counterweight to the
 * narrative-heavy left column.
 */
function PlatformCard() {
  return (
    <div className="relative">
      <div
        aria-hidden
        className="absolute -inset-6 rounded-[40px] bg-gradient-to-br from-brand-200/60 via-white to-indigo-200/60 opacity-80 blur-2xl"
      />
      <div className="relative overflow-hidden rounded-[20px] border border-ink-900/80 bg-gradient-to-br from-ink-950 via-ink-900 to-indigo-950 shadow-lift">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-brand-500/30 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-16 -left-10 h-40 w-40 rounded-full bg-indigo-500/25 blur-3xl"
        />

        <div className="relative flex items-center justify-between border-b border-white/10 px-4 py-2.5">
          <div className="flex items-center gap-1.5 text-[11px] font-medium text-ink-400">
            <span className="text-ink-300">ai-harness.com</span>
            <span className="text-ink-500">/</span>
            <span>workspace</span>
            <span className="text-ink-500">/</span>
            <span className="text-white">international</span>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 px-2 py-0.5 text-[9.5px] font-semibold uppercase tracking-[0.08em] text-emerald-300 ring-1 ring-inset ring-emerald-400/30">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-live-dot" />
            3 countries · Live
          </span>
        </div>

        <ul className="relative divide-y divide-white/10">
          {DESK_ORDER.map((id) => {
            const desk = DESKS[id];
            return (
              <li key={id} className="flex items-center gap-3 px-5 py-3.5">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-white/[0.06] text-[12px] font-semibold tracking-[0.04em] text-white ring-1 ring-inset ring-white/10">
                  {desk.nativeCountry}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-[13.5px] font-semibold text-white">
                    {desk.countryName}
                  </p>
                  <p className="mt-0.5 truncate text-[12px] text-ink-400">
                    {desk.timezoneAbbr} hours · {desk.language} reporting
                  </p>
                </div>
                <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-brand-500/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-brand-200 ring-1 ring-inset ring-brand-400/30">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-300 animate-live-dot" />
                  Pod active
                </span>
              </li>
            );
          })}
        </ul>

        <div className="relative flex items-center justify-between border-t border-white/10 px-4 py-2.5 text-[11px]">
          <span className="font-medium text-ink-400">Audit trail</span>
          <span className="inline-flex items-center gap-1.5 font-semibold text-emerald-300">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-live-dot" />
            Active across every country
          </span>
        </div>
      </div>
    </div>
  );
}

function StatsRow() {
  return (
    <section className="pb-14 sm:pb-20">
      <Container>
        <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-gradient-to-br from-ink-950 via-ink-900 to-indigo-950 px-5 py-5 shadow-lift sm:px-7 sm:py-6">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-brand-500/25 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-24 -left-16 h-60 w-60 rounded-full bg-indigo-500/20 blur-3xl"
          />
          <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid-dark opacity-50" />

          <div className="relative grid gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {headerStats.map((s) => (
              <div key={s.label} className="bg-ink-950/80 px-5 py-4 sm:px-5 sm:py-4">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-white/10 text-brand-200">
                  {s.icon}
                </span>
                <div className="mt-2.5 text-[32px] font-semibold leading-none tracking-tight text-white sm:text-[38px]">
                  {s.value}
                </div>
                <p className="mt-2 text-[12.5px] leading-snug text-ink-300">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function UniversalChallenge() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="max-w-3xl">
          <Eyebrow>The pattern we see</Eyebrow>
          <h2 className="mt-5 text-[34px] font-semibold leading-[1.05] tracking-[-0.02em] text-ink-900 sm:text-[48px]">
            The same three problems block US revenue,{" "}
            <span className="text-gradient">no matter the home country.</span>
          </h2>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {universalReasons.map((r) => (
            <article
              key={r.title}
              className="group flex flex-col rounded-2xl border border-ink-200 bg-white p-6 shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:border-ink-300 hover:shadow-lift sm:p-7"
            >
              <h3 className="text-[18px] font-semibold leading-snug tracking-tight text-ink-900">
                {r.title}
              </h3>
              <p className="mt-3 text-[14.5px] leading-relaxed text-ink-600">{r.body}</p>
              <div className="mt-auto pt-6">
                <div className="inline-flex items-start gap-2 rounded-xl bg-brand-50 px-3.5 py-2.5 text-[13.5px] font-semibold text-brand-700 ring-1 ring-inset ring-brand-200/60">
                  <ArrowRight className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                  <span className="leading-snug">{r.callout}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Capabilities() {
  return (
    <section className="bg-ink-50/60 py-16 sm:py-20">
      <Container>
        <div className="max-w-3xl">
          <Eyebrow>Platform capabilities</Eyebrow>
          <h2 className="mt-5 text-[34px] font-semibold leading-[1.05] tracking-[-0.02em] text-ink-900 sm:text-[48px]">
            The engineering underneath the{" "}
            <span className="text-gradient">managed service.</span>
          </h2>
          <p className="mt-5 max-w-2xl text-[15.5px] leading-relaxed text-ink-600">
            Every engagement runs on AI-Harness: an enterprise platform that
            treats AI agents as first-class team members, alongside humans,
            with the governance and auditability your HQ expects. The same
            engine that runs banks and life-sciences workflows runs your US
            revenue pod.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((c) => (
            <article
              key={c.title}
              className="flex flex-col rounded-2xl border border-ink-200 bg-white p-6 shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:border-ink-300 hover:shadow-lift sm:p-7"
            >
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-50 text-brand-700 ring-1 ring-inset ring-brand-200/60">
                {c.icon}
              </span>
              <h3 className="mt-4 text-[17px] font-semibold leading-snug tracking-tight text-ink-900">
                {c.title}
              </h3>
              <p className="mt-2.5 text-[14.5px] leading-relaxed text-ink-600">{c.body}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button to="/platform" variant="secondary" size="md">
            Read the full platform overview
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </Container>
    </section>
  );
}

function HowItWorks() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="max-w-4xl">
          <Eyebrow>How we launch</Eyebrow>
          <h2 className="mt-5 text-[34px] font-semibold leading-[1.05] tracking-[-0.02em] text-ink-900 sm:text-[44px]">
            From readiness check to{" "}
            <span className="text-gradient">US revenue,</span> on one platform.
          </h2>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {howItWorks.map((s) => (
            <article
              key={s.n}
              className="relative flex flex-col rounded-2xl border border-ink-200 bg-white p-6 shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:border-ink-300 hover:shadow-lift sm:p-7"
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-50 font-mono text-[14px] font-semibold text-brand-700 ring-1 ring-inset ring-brand-200/60">
                {s.n}
              </span>
              <h3 className="mt-5 text-[18px] font-semibold leading-snug tracking-tight text-ink-900">
                {s.title}
              </h3>
              <p className="mt-3 text-[14.5px] leading-relaxed text-ink-600">{s.body}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

function CountrySelector() {
  return (
    <section id="country-selector" className="scroll-mt-24 bg-ink-50/60 py-16 sm:py-20">
      <Container>
        <div className="max-w-3xl">
          <Eyebrow>By country</Eyebrow>
          <h2 className="mt-5 text-[34px] font-semibold leading-[1.05] tracking-[-0.02em] text-ink-900 sm:text-[48px]">
            To learn more,{" "}
            <span className="text-gradient">select your country or region.</span>
          </h2>
          <p className="mt-5 max-w-2xl text-[15.5px] leading-relaxed text-ink-600">
            Each country runs the same platform with country-specific GTM,
            language, and reporting. Pick yours below.
          </p>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {DESK_ORDER.map((id) => {
            const desk = DESKS[id];
            return (
              <li key={id}>
                <Link
                  to={`/international-businesses/${desk.id}`}
                  aria-label={`Open ${desk.countryName}`}
                  className="group relative flex h-full min-h-[130px] flex-col justify-between overflow-hidden rounded-2xl border border-ink-200 bg-white p-5 shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-lift sm:p-6"
                >
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-gradient-to-br from-brand-100/0 to-indigo-100/0 blur-2xl transition-opacity duration-300 group-hover:from-brand-200/60 group-hover:to-indigo-200/50"
                  />

                  <div className="relative flex items-start justify-between gap-3">
                    <span className="text-[12px] font-semibold tracking-[0.08em] text-brand-700">
                      {desk.nativeCountry}
                    </span>
                    <span className="grid h-7 w-7 place-items-center rounded-full bg-ink-100 text-ink-600 transition-all duration-200 group-hover:bg-brand-600 group-hover:text-white">
                      <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>

                  <h3 className="relative mt-4 text-[24px] font-semibold leading-[1.1] tracking-[-0.02em] text-ink-900 sm:text-[28px]">
                    {desk.countryName}
                  </h3>
                </Link>
              </li>
            );
          })}

          <li>
            <Link
              to="/contact"
              aria-label="Contact us about another country or region"
              className="group relative flex h-full min-h-[130px] flex-col justify-between overflow-hidden rounded-2xl border-2 border-dashed border-ink-300 bg-white/50 p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-400 hover:bg-white sm:p-6"
            >
              <div className="relative flex items-start justify-between gap-3">
                <span className="grid h-7 w-7 place-items-center rounded-full bg-ink-100 text-ink-600 transition-colors group-hover:bg-brand-50 group-hover:text-brand-700">
                  <Plus className="h-3.5 w-3.5" />
                </span>
                <span className="grid h-7 w-7 place-items-center rounded-full bg-ink-100 text-ink-600 transition-all duration-200 group-hover:bg-brand-600 group-hover:text-white">
                  <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>

              <div className="relative mt-4">
                <h3 className="text-[20px] font-semibold leading-[1.15] tracking-[-0.02em] text-ink-900 sm:text-[22px]">
                  Other regions
                </h3>
                <p className="mt-1 text-[12.5px] leading-snug text-ink-500">
                  Can't find your country? Contact us.
                </p>
              </div>
            </Link>
          </li>
        </ul>
      </Container>
    </section>
  );
}

function BottomCTA() {
  return (
    <section className="relative pb-16 sm:pb-20 pt-4">
      <Container>
        <div className="relative overflow-hidden rounded-[28px] bg-ink-950 px-6 py-8 sm:px-12 sm:py-10 md:px-16">
          <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid-dark opacity-60" />
          <div
            aria-hidden
            className="pointer-events-none absolute -top-32 left-1/2 h-[380px] w-[380px] -translate-x-1/2 rounded-full bg-brand-600/30 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-28 right-0 h-[300px] w-[300px] rounded-full bg-indigo-500/20 blur-3xl"
          />

          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <div className="flex justify-center">
              <Eyebrow tone="dark">Not sure which country?</Eyebrow>
            </div>
            <h2 className="mt-3 text-[26px] font-semibold leading-[1.1] tracking-[-0.02em] text-white sm:text-[34px]">
              We'll point you to the right one.{" "}
              <span className="text-gradient">No obligation.</span>
            </h2>
            <p className="mt-3 text-[14.5px] leading-relaxed text-ink-300 sm:text-[15.5px]">
              If your country isn't listed yet, or you operate across multiple
              regions, get in touch — we're expanding country coverage based
              on customer pull, not roadmaps.
            </p>

            <div className="mt-5 flex flex-col items-center justify-center gap-2.5 sm:flex-row">
              <Button
                to="/contact"
                size="md"
                className="bg-gradient-to-r from-brand-600 to-indigo-600 text-white shadow-lift hover:from-brand-700 hover:to-indigo-700"
              >
                Contact us
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                href="#country-selector"
                size="md"
                className="border border-white/15 bg-white/5 text-white hover:bg-white/10"
              >
                Browse countries
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
