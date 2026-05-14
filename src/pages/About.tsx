import { Fragment, type ReactNode } from "react";
import {
  AlertTriangle, ArrowDown, ArrowRight, BadgeCheck, Bot, Boxes, Briefcase, Building2, ClipboardCheck, Cog, Compass, Cpu, Eye, Feather, FileCheck2, Fingerprint, Gauge, Hammer, Headphones, Lock, MessageSquare, Network, Puzzle, ScrollText, Shield, ShieldAlert, ShieldCheck, SlidersHorizontal, Target, TrendingUp, UserCheck, Users, Users2, Workflow, Zap,
} from "lucide-react";
import Container from "../components/Container";
import Button from "../components/Button";
import Eyebrow from "../components/Eyebrow";
import SectionHeading from "../components/SectionHeading";
import CTASection from "../components/CTASection";
import Seo from "../components/Seo";
import { cn } from "../lib/cn";

export default function About() {
  return (
    <>
      <Seo
        path="/about"
        title="About Us"
        description="AI-Harness is building the control plane for the human + AI workforce. Move from AI experiments to accountable execution with agents, workflows, guardrails, and audit trails built for real business operations."
        keywords="AI-Harness about, AI workforce platform, AI agents, AI governance, accountable AI, human AI collaboration, AI workflow platform"
      />
      <Hero />
      <Problem />
      <Beliefs />
      <Mission />
      <WhatWeBuild />
      <WhoWeServe />
      <WhyNow />
      <Principles />
      <Leadership />
      <Careers />
      <CTASection
        title="Ready to turn AI into accountable execution?"
        description="Build, deploy, and govern AI agents your team can actually trust."
        primaryCta={{ label: "Talk to an expert", to: "/demo" }}
        secondaryCta={{ label: "Start free", to: "/signup" }}
        footnote={false}
      />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden pb-20 pt-24 sm:pb-28 sm:pt-28">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-spotlight" />
      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>Our story</Eyebrow>
          <h1 className="mt-6 text-[36px] font-semibold leading-[1.04] tracking-[-0.02em] text-ink-900 sm:text-[60px]">
            We're building the <span className="text-gradient">control plane</span> for the human + AI workforce.
          </h1>
          <p className="mt-6 text-lg text-ink-600 sm:text-xl">
            AI-Harness helps companies move from AI experiments to accountable execution, with agents,
            workflows, guardrails, and audit trails built for real business operations.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Button to="/demo" size="lg">
              Talk to an expert
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button to="/platform" variant="secondary" size="lg">
              Explore the platform
            </Button>
          </div>
        </div>

        <FlowDiagram />
      </Container>
    </section>
  );
}

type FlowNodeData = {
  icon: ReactNode;
  label: string;
  sub: string;
  tint: string;
  highlight?: boolean;
};

function AhMark() {
  return (
    <span className="text-[13px] font-bold leading-none tracking-wide text-white">AH</span>
  );
}

function FlowDiagram() {
  const nodes: FlowNodeData[] = [
    {
      icon: <Users className="h-5 w-5" />,
      label: "Human team",
      sub: "Operators, reviewers, leaders",
      tint: "from-emerald-500 to-teal-600",
    },
    {
      icon: <AhMark />,
      label: "AI-Harness",
      sub: "Control plane",
      tint: "from-brand-600 via-indigo-600 to-fuchsia-600",
      highlight: true,
    },
    {
      icon: <Bot className="h-5 w-5" />,
      label: "AI agents",
      sub: "Scoped, accountable, observable",
      tint: "from-violet-500 to-fuchsia-500",
    },
    {
      icon: <Building2 className="h-5 w-5" />,
      label: "Business systems",
      sub: "CRM, ERP, ITSM, data, comms",
      tint: "from-sky-500 to-blue-600",
    },
  ];

  const wrappers = [
    { icon: <ShieldCheck className="h-3.5 w-3.5" />, label: "Guardrails" },
    { icon: <ClipboardCheck className="h-3.5 w-3.5" />, label: "Approvals" },
    { icon: <FileCheck2 className="h-3.5 w-3.5" />, label: "Audit trails" },
  ];

  return (
    <div className="relative mx-auto mt-16 max-w-5xl sm:mt-20">
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-x-4 -inset-y-6 -z-10 rounded-[40px] bg-gradient-to-b from-brand-100/30 via-white to-indigo-100/30 blur-xl"
      />

      <div className="relative rounded-[32px] border border-dashed border-brand-300/70 bg-white/70 p-6 shadow-soft backdrop-blur sm:p-10">
        <div className="absolute -top-3.5 left-1/2 inline-flex -translate-x-1/2 items-center gap-2 rounded-full border border-ink-200 bg-white px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-500 shadow-soft">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
          Governance wrap
        </div>

        <div className="mb-8 flex flex-wrap justify-center gap-2 sm:mb-10">
          {wrappers.map((w) => (
            <span
              key={w.label}
              className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-[12px] font-semibold text-ink-700 shadow-soft ring-1 ring-inset ring-ink-200"
            >
              <span className="text-brand-600">{w.icon}</span>
              {w.label}
            </span>
          ))}
        </div>

        <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-2">
          {nodes.map((n, i) => (
            <Fragment key={n.label}>
              <div className="flex-1">
                <FlowNode {...n} />
              </div>
              {i < nodes.length - 1 && <FlowConnector />}
            </Fragment>
          ))}
        </div>

        <p className="mt-8 text-center text-[12.5px] text-ink-500 sm:mt-10">
          Every action is scoped, reviewable, and logged, end to end.
        </p>
      </div>
    </div>
  );
}

function FlowNode({ icon, label, sub, tint, highlight }: FlowNodeData) {
  return (
    <div
      className={cn(
        "group relative h-full rounded-2xl border bg-white p-4 shadow-soft transition-all duration-200 sm:p-5",
        highlight
          ? "border-brand-400/70 ring-1 ring-brand-300/40 hover:-translate-y-0.5 hover:shadow-lift"
          : "border-ink-200 hover:-translate-y-0.5 hover:border-ink-300",
      )}
    >
      <span
        className={cn(
          "inline-grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br text-white shadow-soft",
          tint,
          highlight && "animate-agent-ring",
        )}
      >
        {icon}
      </span>
      <p className="mt-4 text-[15px] font-semibold text-ink-900">{label}</p>
      <p className="mt-1 text-[12.5px] leading-relaxed text-ink-500">{sub}</p>
    </div>
  );
}

function FlowConnector() {
  return (
    <>
      <div
        className="relative hidden h-px shrink-0 self-center sm:block sm:w-8 md:w-10"
        aria-hidden
      >
        <div className="absolute inset-0 bg-gradient-to-r from-brand-300/60 via-indigo-400/70 to-brand-300/60" />
        <span className="absolute left-0 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.7)] animate-data-flow-h" />
        <ArrowRight className="absolute -right-2 top-1/2 h-4 w-4 -translate-y-1/2 text-indigo-500" />
      </div>
      <div
        className="relative mx-auto block h-8 w-px shrink-0 sm:hidden"
        aria-hidden
      >
        <div className="absolute inset-0 bg-gradient-to-b from-brand-300/60 via-indigo-400/70 to-brand-300/60" />
        <span className="absolute left-1/2 top-0 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.7)] animate-data-flow-v" />
        <ArrowDown className="absolute -bottom-2 left-1/2 h-4 w-4 -translate-x-1/2 text-indigo-500" />
      </div>
    </>
  );
}

function Highlight({ children }: { children: ReactNode }) {
  return (
    <mark className="box-decoration-clone rounded-md bg-brand-50 px-1.5 py-0.5 text-inherit ring-1 ring-inset ring-brand-100/70">
      {children}
    </mark>
  );
}

function Problem() {
  const pains = [
    {
      icon: <MessageSquare className="h-5 w-5" />,
      title: "AI is trapped in chat",
      description: "Useful answers do not automatically become completed work.",
    },
    {
      icon: <AlertTriangle className="h-5 w-5" />,
      title: "Automation lacks judgment",
      description: "Traditional workflows are rigid, brittle, and hard to adapt.",
    },
    {
      icon: <ShieldAlert className="h-5 w-5" />,
      title: "Enterprises need control",
      description:
        "Leaders need visibility, permissions, auditability, and human oversight before AI can scale.",
    },
  ];

  return (
    <section className="relative py-20 sm:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-rose-300/50 to-transparent"
      />
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-rose-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-rose-700 ring-1 ring-inset ring-rose-200/70">
            <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
            The old way is broken
          </span>
          <h2 className="mt-6 text-[32px] font-semibold leading-[1.06] tracking-[-0.02em] text-ink-900 sm:text-[44px]">
            AI adoption is stuck between{" "}
            <span className="text-gradient">demos and deployment.</span>
          </h2>
          <div className="mt-6 space-y-4 text-[16.5px] leading-[1.7] text-ink-600 sm:text-[17px]">
            <p>
              Most companies can generate impressive AI outputs. Far fewer can safely delegate real work to AI.
              Chatbots are helpful, but they do not solve the harder problem: coordinating work across people,
              systems, approvals, and business rules.
            </p>
            <p>
              <Highlight>Without governance, AI creates risk.</Highlight>{" "}
              <Highlight>Without workflow integration, it creates more tabs.</Highlight>{" "}
              <Highlight>Without accountability, it cannot be trusted with important operations.</Highlight>
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {pains.map((p, i) => (
            <div
              key={p.title}
              className="group relative overflow-hidden rounded-3xl border border-ink-200 bg-white p-7 shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:border-ink-300 hover:shadow-lift"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-rose-100/60 blur-2xl transition-opacity group-hover:opacity-80"
              />
              <span
                aria-hidden
                className="absolute right-6 top-6 text-[12px] font-semibold tracking-[0.16em] text-ink-300"
              >
                0{i + 1}
              </span>
              <span className="relative grid h-11 w-11 place-items-center rounded-xl bg-rose-50 text-rose-600 ring-1 ring-inset ring-rose-200/60">
                {p.icon}
              </span>
              <h3 className="relative mt-6 text-lg font-semibold text-ink-900">
                {p.title}
              </h3>
              <p className="relative mt-3 text-[15px] leading-relaxed text-ink-600">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

type Belief = {
  icon: ReactNode;
  title: string;
  description: string;
};

function Beliefs() {
  const beliefs: Belief[] = [
    {
      icon: <Zap className="h-5 w-5" />,
      title: "AI should execute, not just answer.",
      description:
        "The future of AI is not just better responses. It is reliable action inside the workflows where business happens.",
    },
    {
      icon: <SlidersHorizontal className="h-5 w-5" />,
      title: "Control is what makes scale possible.",
      description:
        "Companies cannot deploy AI agents broadly without permissions, policies, logs, approvals, and clear boundaries.",
    },
    {
      icon: <UserCheck className="h-5 w-5" />,
      title: "Humans stay in command.",
      description:
        "AI agents should extend human teams, not replace accountability, judgment, or leadership.",
    },
    {
      icon: <BadgeCheck className="h-5 w-5" />,
      title: "Trust is a product feature.",
      description:
        "Every important AI action should be scoped, observable, reviewable, and reversible.",
    },
    {
      icon: <TrendingUp className="h-5 w-5" />,
      title: "Growth should not require proportional headcount.",
      description:
        "AI should help teams expand capacity without adding complexity, chaos, or unmanaged risk.",
    },
  ];

  const [featured, ...rest] = beliefs;

  return (
    <section id="beliefs" className="py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="What we believe"
          title={<>The next era of AI belongs to teams that can <span className="text-gradient">control it.</span></>}
        />
        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          <BeliefCard belief={featured} index={0} featured />
          {rest.map((b, i) => (
            <BeliefCard key={b.title} belief={b} index={i + 1} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function BeliefCard({
  belief, index, featured = false,
}: {
  belief: Belief;
  index: number;
  featured?: boolean;
}) {
  return (
    <article
      className={cn(
        "group relative overflow-hidden rounded-3xl border bg-white p-8 shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lift",
        featured
          ? "border-brand-300/70 ring-1 ring-brand-200/50 sm:p-10 lg:col-span-2"
          : "border-ink-200 hover:border-ink-300",
      )}
    >
      {featured && (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-50/70 via-white to-indigo-50/40"
        />
      )}
      <span
        aria-hidden
        className={cn(
          "pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full blur-3xl transition-opacity",
          featured ? "bg-brand-200/50" : "bg-brand-100/60 opacity-0 group-hover:opacity-100",
        )}
      />

      <div className="relative flex items-start gap-4">
        <span
          className={cn(
            "grid shrink-0 place-items-center rounded-xl bg-gradient-to-br text-white shadow-soft",
            featured
              ? "h-14 w-14 from-brand-600 via-indigo-600 to-fuchsia-600"
              : "h-11 w-11 from-brand-500 to-indigo-500",
          )}
        >
          {belief.icon}
        </span>
        <span className="ml-auto inline-flex items-center rounded-full border border-ink-200 bg-white/70 px-2.5 py-1 text-[11px] font-semibold tracking-[0.16em] text-ink-500 backdrop-blur">
          0{index + 1}
          <span className="ml-1 text-ink-300">/ 0{5}</span>
        </span>
      </div>

      <h3
        className={cn(
          "relative mt-6 font-semibold tracking-tight text-ink-900",
          featured ? "text-[24px] sm:text-[28px]" : "text-[19px]",
        )}
      >
        {belief.title}
      </h3>
      <p
        className={cn(
          "relative mt-3 leading-relaxed text-ink-600",
          featured ? "max-w-2xl text-[16.5px]" : "text-[15px]",
        )}
      >
        {belief.description}
      </p>
    </article>
  );
}

function Mission() {
  const pillars = [
    {
      icon: <Workflow className="h-5 w-5" />,
      label: "Reliable execution",
      description: "Agents designed for repeatable business workflows.",
      tint: "from-brand-600 via-indigo-600 to-fuchsia-600",
    },
    {
      icon: <Eye className="h-5 w-5" />,
      label: "Human oversight",
      description: "Approvals and controls built into the way work gets done.",
      tint: "from-emerald-500 to-teal-600",
    },
    {
      icon: <FileCheck2 className="h-5 w-5" />,
      label: "Operational trust",
      description: "Audit trails and governance from day one.",
      tint: "from-sky-500 to-blue-600",
    },
  ];

  return (
    <section id="mission" className="relative py-24 sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-px max-w-5xl bg-gradient-to-r from-transparent via-ink-200 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 mx-auto h-px max-w-5xl bg-gradient-to-r from-transparent via-ink-200 to-transparent"
      />
      <Container>
        <SectionHeading
          eyebrow="Our mission"
          title={
            <>
              To make AI agents{" "}
              <span className="text-gradient">safe, useful, and accountable</span>{" "}
              inside real business operations.
            </>
          }
          description="AI-Harness exists to help organizations move beyond experimentation and into execution. We are building the infrastructure that lets teams delegate work to AI agents while maintaining the governance, oversight, and reliability that businesses require."
        />

        <div className="mx-auto mt-14 grid max-w-5xl gap-4 sm:mt-16 sm:grid-cols-3 sm:gap-5">
          {pillars.map((p, i) => (
            <article
              key={p.label}
              className="group relative h-full overflow-hidden rounded-2xl border border-ink-200 bg-white p-6 shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:border-ink-300 hover:shadow-lift"
            >
              <span
                aria-hidden
                className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-brand-400/0 via-brand-500/80 to-brand-400/0 opacity-70 transition-opacity duration-200 group-hover:opacity-100"
              />
              <div className="flex items-start justify-between">
                <span
                  className={cn(
                    "inline-grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br text-white shadow-soft",
                    p.tint,
                  )}
                >
                  {p.icon}
                </span>
                <span className="text-[11px] font-semibold tracking-[0.22em] text-ink-300 transition-colors group-hover:text-ink-400">
                  0{i + 1}
                </span>
              </div>
              <h3 className="mt-5 text-[17px] font-semibold tracking-tight text-ink-900">
                {p.label}
              </h3>
              <p className="mt-2.5 text-[14.5px] leading-relaxed text-ink-600">
                {p.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

type Feature = {
  icon: ReactNode;
  title: string;
  description: string;
  tint: string;
  span?: "wide";
};

function WhatWeBuild() {
  const features: Feature[] = [
    {
      icon: <Boxes className="h-5 w-5" />,
      title: "Agent templates",
      description:
        "Deploy AI teammates for repeatable, high-value work across functions such as operations, sales, marketing, service, and internal processes.",
      tint: "from-brand-600 via-indigo-600 to-fuchsia-600",
      span: "wide",
    },
    {
      icon: <Workflow className="h-5 w-5" />,
      title: "Workflow orchestration",
      description:
        "Coordinate AI agents with human approvals, business rules, handoffs, and the systems your team already uses.",
      tint: "from-indigo-500 to-sky-500",
    },
    {
      icon: <Lock className="h-5 w-5" />,
      title: "Guardrails and permissions",
      description:
        "Define what agents can access, what they can do, and when a human needs to step in.",
      tint: "from-emerald-500 to-teal-600",
    },
    {
      icon: <ScrollText className="h-5 w-5" />,
      title: "Audit trails",
      description:
        "Track agent activity, decisions, outputs, and approvals so teams can review, improve, and govern AI work.",
      tint: "from-amber-500 to-orange-500",
    },
    {
      icon: <Gauge className="h-5 w-5" />,
      title: "Enterprise readiness",
      description:
        "Built for teams that need reliability, visibility, and control before they scale automation.",
      tint: "from-sky-500 to-blue-600",
    },
  ];

  return (
    <section id="what-we-build" className="relative overflow-hidden py-20 sm:py-28">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid opacity-60" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-white via-white/80 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-white via-white/80 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-brand-200/25 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 bottom-1/4 h-96 w-96 rounded-full bg-indigo-200/25 blur-3xl"
      />

      <Container className="relative">
        <SectionHeading
          eyebrow="What we build"
          title={<>A platform for deploying and <span className="text-gradient">governing AI agents at work.</span></>}
          description="AI-Harness gives teams the tools to launch AI agents, connect them to workflows, and supervise their actions across business operations."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {features.map((f) => (
            <FeatureTile key={f.title} feature={f} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function FeatureTile({ feature }: { feature: Feature }) {
  const isWide = feature.span === "wide";
  return (
    <article
      className={cn(
        "group relative overflow-hidden rounded-3xl border border-ink-200 bg-white p-7 shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:border-ink-300 hover:shadow-lift sm:p-8",
        isWide && "lg:col-span-2",
      )}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-brand-100/70 opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-100"
      />

      <div className="relative flex items-center justify-between">
        <span
          className={cn(
            "inline-grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br text-white shadow-soft",
            feature.tint,
          )}
        >
          {feature.icon}
        </span>
        {isWide && (
          <span className="hidden items-center gap-1.5 rounded-full border border-ink-200 bg-white/80 px-2.5 py-1 text-[10.5px] font-semibold uppercase tracking-[0.16em] text-ink-500 backdrop-blur sm:inline-flex">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
            Featured
          </span>
        )}
      </div>

      <h3
        className={cn(
          "relative mt-6 font-semibold tracking-tight text-ink-900",
          isWide ? "text-[22px] sm:text-[26px]" : "text-[18px]",
        )}
      >
        {feature.title}
      </h3>
      <p
        className={cn(
          "relative mt-3 leading-relaxed text-ink-600",
          isWide ? "max-w-2xl text-[15.5px] sm:text-[16px]" : "text-[14.5px]",
        )}
      >
        {feature.description}
      </p>

      {isWide && (
        <div className="relative mt-7 flex flex-wrap gap-2">
          {["Operations", "Sales", "Marketing", "Service", "Internal"].map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1.5 rounded-full border border-ink-200 bg-ink-50/80 px-3 py-1 text-[12px] font-medium text-ink-700"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
              {tag}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}

function WhoWeServe() {
  const audiences = [
    {
      icon: <Cog className="h-5 w-5" />,
      title: "Operations teams",
      description:
        "Automate recurring workflows while keeping approvals and accountability in place.",
      tint: "from-emerald-500 to-teal-600",
    },
    {
      icon: <Target className="h-5 w-5" />,
      title: "Revenue teams",
      description:
        "Scale research, outreach, follow-ups, CRM updates, and customer-facing workflows.",
      tint: "from-rose-500 to-orange-500",
    },
    {
      icon: <Headphones className="h-5 w-5" />,
      title: "Service teams",
      description:
        "Handle requests faster while preserving quality, escalation paths, and visibility.",
      tint: "from-sky-500 to-blue-600",
    },
    {
      icon: <Briefcase className="h-5 w-5" />,
      title: "Leadership teams",
      description:
        "Gain confidence that AI is being used consistently, safely, and in line with business priorities.",
      tint: "from-brand-600 via-indigo-600 to-fuchsia-600",
    },
  ];

  return (
    <section id="who-we-serve" className="relative py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Built for high-leverage teams"
          title={
            <>
              For organizations where speed matters, but{" "}
              <span className="text-gradient">uncontrolled automation is not an option.</span>
            </>
          }
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {audiences.map((a) => (
            <article
              key={a.title}
              className="group relative h-full overflow-hidden rounded-2xl border border-ink-200 bg-white p-6 shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:border-ink-300 hover:shadow-lift"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-400/60 to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100"
              />
              <span
                className={cn(
                  "inline-grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br text-white shadow-soft",
                  a.tint,
                )}
              >
                {a.icon}
              </span>
              <h3 className="mt-5 text-[17px] font-semibold tracking-tight text-ink-900">
                {a.title}
              </h3>
              <p className="mt-2.5 text-[14.5px] leading-relaxed text-ink-600">
                {a.description}
              </p>
            </article>
          ))}
        </div>

      </Container>
    </section>
  );
}

type Wave = {
  label: string;
  title: string;
  items: string[];
};

function WhyNow() {
  const wave1: Wave = {
    label: "Wave 1 · Then",
    title: "AI assistance",
    items: ["Write", "Summarize", "Search", "Brainstorm"],
  };
  const wave2: Wave = {
    label: "Wave 2 · Now",
    title: "AI execution",
    items: [
      "Workflows",
      "Governance",
      "Permissions",
      "Oversight",
      "Continuous improvement",
    ],
  };

  return (
    <section id="why-now" className="relative overflow-hidden py-20 sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-brand-50/40 via-white to-indigo-50/40"
      />

      <Container className="relative">
        <SectionHeading
          eyebrow="Why now"
          title={
            <>
              AI is moving from assistance to{" "}
              <span className="text-gradient">execution.</span> The operating
              model has to change with it.
            </>
          }
        />

        <div className="mx-auto mt-10 max-w-3xl space-y-5 text-center text-[16.5px] leading-[1.75] text-ink-600 sm:text-[17.5px]">
          <p>
            The first wave of AI helped people write, summarize, search, and
            brainstorm. The next wave will help teams complete work.
          </p>
          <p>
            That shift requires a new layer between AI models and business
            operations, a layer for workflows, governance, permissions,
            oversight, and continuous improvement.
          </p>
        </div>

        <div className="mx-auto mt-20 max-w-3xl text-center sm:mt-24">
          <h3 className="text-[22px] font-semibold tracking-tight text-ink-900 sm:text-[28px]">
            That is the layer{" "}
            <span className="text-gradient">AI-Harness is building.</span>
          </h3>
        </div>

        <WaveShift wave1={wave1} wave2={wave2} />
      </Container>
    </section>
  );
}

function WaveShift({ wave1, wave2 }: { wave1: Wave; wave2: Wave }) {
  return (
    <div className="mx-auto mt-6 max-w-5xl sm:mt-8">
      <div className="grid items-stretch gap-4 lg:grid-cols-[1fr_auto_1fr] lg:gap-3">
        <WaveCard wave={wave1} tone="past" />
        <WaveArrow />
        <WaveCard wave={wave2} tone="now" />
      </div>
    </div>
  );
}

function WaveCard({ wave, tone }: { wave: Wave; tone: "past" | "now" }) {
  const isNow = tone === "now";
  return (
    <article
      className={cn(
        "group relative h-full overflow-hidden rounded-3xl border p-7 shadow-soft transition-all duration-200 sm:p-8",
        isNow
          ? "border-brand-300/70 bg-white ring-1 ring-brand-200/50 hover:-translate-y-0.5 hover:shadow-lift"
          : "border-ink-200 bg-ink-50/60",
      )}
    >
      {isNow && (
        <span
          aria-hidden
          className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-brand-200/40 blur-3xl"
        />
      )}
      <div className="relative flex items-center justify-between">
        <span
          className={cn(
            "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] ring-1 ring-inset",
            isNow
              ? "bg-brand-50 text-brand-700 ring-brand-200/70"
              : "bg-white text-ink-500 ring-ink-200",
          )}
        >
          {isNow && (
            <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
          )}
          {wave.label}
        </span>
      </div>

      <h3
        className={cn(
          "relative mt-5 font-semibold tracking-tight",
          isNow
            ? "text-[24px] text-ink-900 sm:text-[28px]"
            : "text-[22px] text-ink-700 sm:text-[26px]",
        )}
      >
        {wave.title}
      </h3>

      <ul className="relative mt-6 grid gap-2.5">
        {wave.items.map((item) => (
          <li key={item} className="flex items-center gap-2.5 text-[14.5px]">
            <span
              className={cn(
                "h-1.5 w-1.5 rounded-full",
                isNow ? "bg-brand-500" : "bg-ink-400",
              )}
            />
            <span className={isNow ? "text-ink-800" : "text-ink-600"}>
              {item}
            </span>
          </li>
        ))}
      </ul>
    </article>
  );
}

function WaveArrow() {
  return (
    <>
      <div
        className="relative hidden h-px w-14 self-center md:w-16 lg:flex lg:items-center"
        aria-hidden
      >
        <div className="absolute inset-0 bg-gradient-to-r from-ink-300/40 via-indigo-400/70 to-brand-500/80" />
        <span className="absolute left-0 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.7)] animate-data-flow-h" />
        <ArrowRight className="absolute -right-2 top-1/2 h-5 w-5 -translate-y-1/2 text-brand-600" />
      </div>
      <div
        className="relative mx-auto block h-10 w-px self-center lg:hidden"
        aria-hidden
      >
        <div className="absolute inset-0 bg-gradient-to-b from-ink-300/40 via-indigo-400/70 to-brand-500/80" />
        <span className="absolute left-1/2 top-0 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.7)] animate-data-flow-v" />
        <ArrowDown className="absolute -bottom-2 left-1/2 h-5 w-5 -translate-x-1/2 text-brand-600" />
      </div>
    </>
  );
}

function Principles() {
  const principles = [
    {
      icon: <Fingerprint className="h-5 w-5" />,
      title: "Accountability by design",
      description:
        "AI work should always have clear ownership, logs, and review paths.",
      tint: "from-emerald-500 to-teal-600",
    },
    {
      icon: <Feather className="h-5 w-5" />,
      title: "Governance without friction",
      description:
        "Controls should make adoption safer without slowing teams down unnecessarily.",
      tint: "from-indigo-500 to-sky-500",
    },
    {
      icon: <Users2 className="h-5 w-5" />,
      title: "Human-in-the-loop where it matters",
      description:
        "Not every task needs approval, but every high-impact decision needs the right level of oversight.",
      tint: "from-amber-500 to-orange-500",
    },
    {
      icon: <Hammer className="h-5 w-5" />,
      title: "Useful before flashy",
      description:
        "The best AI systems do not just impress in demos. They save time, reduce bottlenecks, and complete real work.",
      tint: "from-brand-600 via-indigo-600 to-fuchsia-600",
    },
    {
      icon: <Puzzle className="h-5 w-5" />,
      title: "Composable by default",
      description:
        "Teams should be able to adapt agents, workflows, and policies as their business changes.",
      tint: "from-violet-500 to-fuchsia-500",
    },
  ];

  return (
    <section id="principles" className="relative py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="How we build"
          title={<>Principles that guide <span className="text-gradient">our platform.</span></>}
          description="The operating rules behind every agent, workflow, and control we ship."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-6 lg:gap-5">
          {principles.map((p, i) => (
            <article
              key={p.title}
              className={cn(
                "group relative h-full overflow-hidden rounded-2xl border border-ink-200 bg-white p-6 shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:border-ink-300 hover:shadow-lift",
                i < 3 ? "lg:col-span-2" : "lg:col-span-3",
              )}
            >
              <span
                aria-hidden
                className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-brand-100/60 opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-100"
              />
              <span
                className={cn(
                  "relative inline-grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br text-white shadow-soft",
                  p.tint,
                )}
              >
                {p.icon}
              </span>
              <h3 className="relative mt-5 text-[17px] font-semibold tracking-tight text-ink-900">
                {p.title}
              </h3>
              <p className="relative mt-2.5 text-[14.5px] leading-relaxed text-ink-600">
                {p.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Leadership() {
  const disciplines = [
    {
      icon: <Network className="h-5 w-5" />,
      title: "Platform engineering",
      description:
        "Operators who have run distributed platforms, workflow engines, and integration layers at enterprise scale.",
      tint: "from-brand-600 via-indigo-600 to-fuchsia-600",
    },
    {
      icon: <Cpu className="h-5 w-5" />,
      title: "AI & infrastructure",
      description:
        "Practitioners building model orchestration, agent runtimes, and the reliability work behind production AI.",
      tint: "from-indigo-500 to-sky-500",
    },
    {
      icon: <Shield className="h-5 w-5" />,
      title: "Security & governance",
      description:
        "Engineers and program leaders who have designed enterprise controls, audit trails, and access policies.",
      tint: "from-emerald-500 to-teal-600",
    },
    {
      icon: <Compass className="h-5 w-5" />,
      title: "Operations & delivery",
      description:
        "Operators with first-hand experience scaling AI inside large organizations under real business constraints.",
      tint: "from-amber-500 to-orange-500",
    },
  ];

  return (
    <section id="leadership" className="bg-ink-50/70 py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="The team behind it"
          title={
            <>
              The people building AI-Harness have{" "}
              <span className="text-gradient">shipped this kind of system before.</span>
            </>
          }
          description="Across enterprise platforms, AI infrastructure, security programs, and operational delivery, the team has run the work this category demands, with governance, audit trails, and human oversight baked in from day one."
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {disciplines.map((d) => (
            <article
              key={d.title}
              className="group h-full rounded-2xl border border-ink-200 bg-white p-6 shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:border-ink-300 hover:shadow-lift"
            >
              <span
                className={cn(
                  "inline-grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br text-white shadow-soft",
                  d.tint,
                )}
              >
                {d.icon}
              </span>
              <h3 className="mt-5 text-[17px] font-semibold tracking-tight text-ink-900">
                {d.title}
              </h3>
              <p className="mt-2.5 text-[14.5px] leading-relaxed text-ink-600">
                {d.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Careers() {
  const perks = [
    "Remote-first",
    "Transparent comp",
    "Shared equity",
    "Health & wellness",
    "Home office setup",
    "Learning & conference budget",
  ];

  return (
    <section id="careers" className="py-20 sm:py-24">
      <Container>
        <div className="rounded-[32px] border border-ink-200 bg-gradient-to-br from-brand-50 via-white to-indigo-50 p-10 sm:p-14">
          <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-center">
            <div>
              <Eyebrow>Careers</Eyebrow>
              <h2 className="mt-5 text-[32px] font-semibold leading-[1.08] tracking-[-0.02em] text-ink-900 sm:text-[40px]">
                Help build the layer between AI models and{" "}
                <span className="text-gradient">real business operations.</span>
              </h2>
              <p className="mt-5 text-[16.5px] leading-relaxed text-ink-700">
                We are hiring across engineering, product, design, security, and go-to-market. Remote-friendly across the US, EU, and UK. The work is concrete: AI agents, workflows, approvals, audit trails, and the controls teams need to scale AI safely.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button to="/contact">
                  See open roles
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button to="/contact" variant="secondary">
                  Refer someone great
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {perks.map((perk) => (
                <div
                  key={perk}
                  className="rounded-2xl border border-ink-200 bg-white px-4 py-3 text-[14px] font-medium text-ink-800"
                >
                  {perk}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
