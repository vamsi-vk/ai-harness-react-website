import { Link, type To } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight, Bot, ShieldCheck, Workflow, Users, Gauge, FileCheck2, Sparkles, Layers, LineChart, Lock, Brain, CheckCircle2, Factory, ShoppingBag, Laptop, Briefcase, CircleHelp,
} from "lucide-react";
import Container from "../components/Container";
import Button from "../components/Button";
import Eyebrow from "../components/Eyebrow";
import SectionHeading from "../components/SectionHeading";
import FeatureCard from "../components/FeatureCard";
import LogoCloud from "../components/LogoCloud";
import CTASection from "../components/CTASection";
import HeroBoard from "../components/HeroBoard";
import Seo from "../components/Seo";
import PictureSet from "../components/PictureSet";
import { useFooterVisible } from "../lib/useFooterVisible";

export default function Home() {
  return (
    <>
      <Seo
        path="/"
        title="AI-Harness | The Human + AI Workforce Platform"
        description="Embed accountable AI agents into the projects, tasks, and workflows your teams already run. Unified human + AI workforce, with shared context, governance, and full audit trails."
        keywords="AI workforce platform, AI agents, human AI collaboration, AI workflow automation, AI governance, enterprise AI platform"
      />
      <Hero />
      <ExecutiveQuestionsPopup />
      <TrustedBy />
      <SolutionsPreview />
      <ValueProps />
      <PlatformPillars />
      <HowItWorks />
      <WorkflowShowcase />
      <GovernanceBlock />
      <IndustriesPreview />
      <CTASection />
    </>
  );
}

type RoleQuestion = {
  question: string;
  to: To;
};

type ExecutiveRole = {
  id: string;
  label: string;
  prompt: string;
  questions: RoleQuestion[];
};

function ExecutiveQuestionsPopup() {
  const roles: ExecutiveRole[] = [
    {
      id: "ceo",
      label: "CEO & Board",
      prompt: "Role-based insights for executive leadership",
      questions: [
        { question: "Where can I see AI ROI across teams?", to: { pathname: "/solutions", hash: "#role-ceo-board" } },
        { question: "How do we scale safely without losing control?", to: "/security" },
        { question: "What platform capabilities support board reporting?", to: "/platform" },
      ],
    },
    {
      id: "coo",
      label: "COO",
      prompt: "Role-based insights for operational execution",
      questions: [
        { question: "How do we standardize AI execution across functions?", to: { pathname: "/solutions", hash: "#role-coo" } },
        { question: "How can operations teams improve throughput quickly?", to: { pathname: "/solutions", hash: "#operations" } },
        { question: "How do we monitor workflow performance in real time?", to: "/platform" },
      ],
    },
    {
      id: "cio-cto",
      label: "CIO / CTO",
      prompt: "Role-based insights for technology leadership",
      questions: [
        { question: "How does this integrate with our existing stack?", to: { pathname: "/solutions", hash: "#role-cio-cto" } },
        { question: "What controls do we get for governance and security?", to: "/security" },
        { question: "Can we bring our own models and tooling?", to: { pathname: "/platform", hash: "#integrations" } },
      ],
    },
    {
      id: "cfo",
      label: "CFO",
      prompt: "Role-based insights for finance leadership",
      questions: [
        { question: "How do we track spend by team and outcome?", to: { pathname: "/solutions", hash: "#role-cfo" } },
        { question: "How are budget controls enforced?", to: "/security" },
        { question: "Where can I review finance-focused workflows?", to: { pathname: "/solutions", hash: "#finance" } },
      ],
    },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [selectedRoleId, setSelectedRoleId] = useState(roles[0].id);
  const selectedRole = roles.find((role) => role.id === selectedRoleId) ?? roles[0];
  const footerVisible = useFooterVisible();

  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-hidden={footerVisible}
        tabIndex={footerVisible ? -1 : 0}
        className={`fixed bottom-8 right-1/2 z-30 inline-flex -translate-x-1/2 items-center gap-2.5 rounded-full border-2 border-white/80 bg-gradient-to-r from-brand-700 via-brand-600 to-brand-700 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_18px_44px_-14px_rgba(37,99,235,0.75)] ring-2 ring-brand-200/70 transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110 sm:right-8 sm:translate-x-0 ${
          footerVisible
            ? "pointer-events-none translate-y-6 opacity-0"
            : "opacity-100"
        }`}
      >
        <CircleHelp className="h-4 w-4 text-white" />
        Role-based insights
      </button>

      {isOpen ? (
        <div className="fixed inset-0 z-40 flex items-center justify-center p-4 sm:p-6">
          <button
            type="button"
            aria-label="Close questions popup"
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-ink-950/55 backdrop-blur-sm"
          />
          <div className="relative w-full max-w-3xl rounded-3xl border border-ink-200 bg-white p-6 shadow-lift sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-medium text-ink-500">
                  Executive question guide
                </p>
                <h3 className="mt-2 text-2xl font-semibold tracking-tight text-ink-900">
                  Select a leadership role.
                </h3>
              </div>
              <button
                type="button"
                aria-label="Close popup"
                onClick={() => setIsOpen(false)}
                className="grid h-9 w-9 place-items-center rounded-full border border-ink-200 text-lg text-ink-700 transition-colors hover:bg-ink-50"
              >
                ×
              </button>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {roles.map((role) => (
                <button
                  key={role.id}
                  type="button"
                  onClick={() => setSelectedRoleId(role.id)}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                    selectedRole.id === role.id
                      ? "border-brand-700 bg-brand-700 text-white"
                      : "border-ink-200 bg-white text-ink-700 hover:bg-ink-50"
                  }`}
                >
                  {role.label}
                </button>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-ink-200 bg-ink-50/70 p-5">
              <p className="text-sm font-semibold text-ink-900">{selectedRole.prompt}</p>
              <div className="mt-4 grid gap-3">
                {selectedRole.questions.map((item) => (
                  <Link
                    key={item.question}
                    to={item.to}
                    onClick={() => setIsOpen(false)}
                    className="group inline-flex items-center justify-between gap-3 rounded-xl border border-ink-200 bg-white px-4 py-3 text-left text-[15px] font-medium text-ink-800 transition-all hover:-translate-y-0.5 hover:border-ink-300 hover:shadow-soft"
                  >
                    {item.question}
                    <ArrowRight className="h-4 w-4 shrink-0 text-ink-400 transition-transform group-hover:translate-x-0.5 group-hover:text-ink-800" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 sm:pt-20 sm:pb-28">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-spotlight" />
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid opacity-60 [mask-image:linear-gradient(to_bottom,white_0%,white_60%,transparent_100%)]" />
      <Container className="relative">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <Eyebrow>The Human + AI Workforce Platform</Eyebrow>
          <h1 className="mt-6 text-[36px] font-semibold tracking-[-0.025em] leading-[1.02] text-ink-900 sm:text-[68px]">
            Human-Led. <span className="text-gradient">AI-Powered.</span> One Team.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-600 sm:text-xl">
            AI-Harness brings accountable AI agents into the projects, tasks, and workflows your teams already run, assigned, tracked, and reviewed alongside every other teammate, with shared context and full audit trails.
          </p>
          <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
            <Button to="/signup" size="lg">
              Start free
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button to="/demo" variant="secondary" size="lg">
              Book a demo
            </Button>
          </div>
          <p className="mt-5 text-sm text-ink-500">
            AI as first-class teammates · Unified project & task workflows · End-to-end governance and auditability
          </p>
        </div>

        <div className="relative mx-auto mt-16 max-w-6xl">
          <div aria-hidden className="absolute inset-x-8 -bottom-12 h-40 rounded-full bg-brand-500/30 blur-3xl" />
          <div className="relative overflow-hidden rounded-[28px] border border-ink-200/80 bg-white shadow-lift ring-1 ring-black/[0.02]">
            <div className="flex items-center gap-2 border-b border-ink-200/80 bg-ink-50/70 px-5 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-error-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-warning-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-success-400/70" />
              <span className="ml-3 text-xs font-medium text-ink-500">ai-harness.com / workspace / projects / MVP1</span>
            </div>
            <HeroBoard />
          </div>
          <FloatingStat
            className="left-[-16px] top-14 hidden sm:flex"
            icon={<Bot className="h-4 w-4" />}
            label="Owned by AI agents"
            value="32% of board"
          />
          <FloatingStat
            className="right-[-16px] bottom-16 hidden sm:flex"
            icon={<ShieldCheck className="h-4 w-4" />}
            label="Audit trail coverage"
            value="100%"
          />
        </div>
      </Container>
    </section>
  );
}

function FloatingStat({
  icon, label, value, className = "",
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  className?: string;
}) {
  return (
    <div
      className={`absolute z-10 flex items-center gap-3 rounded-2xl border border-ink-200 bg-white/95 px-4 py-3 shadow-lift backdrop-blur ${className}`}
    >
      <div className="grid h-9 w-9 place-items-center rounded-xl bg-brand-50 text-brand-700">
        {icon}
      </div>
      <div className="flex flex-col">
        <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-ink-500">{label}</span>
        <span className="text-lg font-semibold text-ink-900">{value}</span>
      </div>
    </div>
  );
}

function TrustedBy() {
  return (
    <section className="pb-16">
      <Container>
        <p className="mb-8 text-center text-sm font-medium uppercase tracking-[0.14em] text-ink-500">
          Trusted by modern enterprise teams
        </p>
        <LogoCloud />
      </Container>
    </section>
  );
}

function ValueProps() {
  const items = [
    {
      icon: <Users className="h-5 w-5" />, title: "Hybrid workforce, one system", description:
        "Humans and AI agents are assigned, tracked, and reviewed through the same processes, no brittle handoffs.", }, {
      icon: <Workflow className="h-5 w-5" />, title: "Embedded in real work", description:
        "Agents own tasks inside your existing operating cadence, not a disconnected chat window.", }, {
      icon: <ShieldCheck className="h-5 w-5" />, title: "Governance by default", description:
        "Every decision is logged and auditable. Leaders retain clear oversight and control over AI agents as adoption scales.", }, {
      icon: <Layers className="h-5 w-5" />, title: "Built to scale", description:
        "Start with one team and expand across departments with clear governance and consistent execution.", }, ];
  const stats = [
    { value: 68, decimals: 0, suffix: "%", label: "Faster cycle times on repeatable processes" },
    { value: 4.2, decimals: 1, suffix: "×", label: "Increase in throughput per operations team" },
    { value: 40, decimals: 0, suffix: "%", label: "Lower cost-to-serve across customer operations" },
    { value: 100, decimals: 0, suffix: "%", label: "AI actions captured in the audit trail" },
  ];

  return (
    <section className="py-20">
      <Container>
        <SectionHeading
          eyebrow="Why AI-Harness"
          title={
            <>
              AI that <span className="text-gradient">operates like a team</span>, <br />
              not a tool.
            </>
          }
          description="Most AI pilots fail to scale because they sit outside core operations. AI-Harness embeds accountable AI agents directly into live workflows, with the governance and traceability enterprise leaders require."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <FeatureCard key={item.title} {...item} />
          ))}
        </div>
        <div className="relative mt-12 overflow-hidden rounded-3xl border border-ink-900 bg-gradient-to-br from-ink-950 via-ink-900 to-brand-950 p-1">
          <div aria-hidden className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-brand-500/30 blur-3xl" />
          <div aria-hidden className="pointer-events-none absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-brand-500/25 blur-3xl" />
          <div className="relative rounded-[22px] border border-white/10 bg-ink-950/70 p-6 sm:p-8">
            <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-medium text-ink-300">Outcomes at a glance</p>
                <h3 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                  The metrics leaders care about most.
                </h3>
              </div>
              <p className="max-w-md text-[14px] text-ink-300">
                Benchmarks customers report after deploying AI-Harness in core operations.
              </p>
            </div>
            <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="bg-ink-950/80 p-6">
                  <div className="text-4xl font-semibold tracking-tight text-white">
                    <CountUpValue target={s.value} decimals={s.decimals} suffix={s.suffix} />
                  </div>
                  <p className="mt-2 text-[14px] leading-snug text-ink-300">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function CountUpValue({
  target,
  decimals = 0,
  suffix = "",
  duration = 1200,
}: {
  target: number;
  decimals?: number;
  suffix?: string;
  duration?: number;
}) {
  // Initialize with the *target* value so the very first paint and any
  // pre-rendered/indexable HTML contain the real number. The animation, when
  // it runs, briefly drops to 0 and tweens back up; purely a progressive
  // enhancement on top of correct, crawler-readable content.
  const [value, setValue] = useState<number>(target);
  const ref = useRef<HTMLSpanElement | null>(null);
  const hasAnimatedRef = useRef(false);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (hasAnimatedRef.current) return;
    if (typeof IntersectionObserver === "undefined") return;

    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      hasAnimatedRef.current = true;
      return;
    }

    const el = ref.current;
    if (!el) return;

    const startAnimation = () => {
      if (hasAnimatedRef.current) return;
      hasAnimatedRef.current = true;

      const start = performance.now();

      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setValue(target * eased);
        if (progress < 1) {
          rafRef.current = requestAnimationFrame(tick);
        } else {
          setValue(target);
          rafRef.current = null;
        }
      };

      // Drop to 0 immediately on the same frame the animation starts so we
      // never paint a half-state (target → 0 → tween).
      setValue(0);
      rafRef.current = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting) {
          startAnimation();
          observer.disconnect();
        }
      },
      // Fire as soon as any part of the section enters the viewport so the
      // brief `target → 0` swap happens while the user's eye is still above
      // the section. By the time they focus on it, the count-up is mid-way.
      { threshold: 0, rootMargin: "0px 0px -10% 0px" },
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [target, duration]);

  // The aria-label always reflects the *target* so screen readers, the AX
  // tree, and any scraper that respects ARIA see the real number even while
  // the count-up is in flight.
  const label = `${target.toFixed(decimals)}${suffix}`;
  return (
    <span ref={ref} aria-label={label} role="text">
      {value.toFixed(decimals)}
      {suffix}
    </span>
  );
}

function PlatformPillars() {
  const pillars = [
    {
      icon: <ShieldCheck className="h-5 w-5" />, title: "Governance & Audit", description:
        "Immutable action logs, role-based controls, approval gates, and budget limits, built in, not bolted on.", }, {
      icon: <Gauge className="h-5 w-5" />, title: "Operational Intelligence", description:
        "Live dashboards for throughput, quality, cost per outcome, and where human attention is most needed.", }, {
      icon: <Workflow className="h-5 w-5" />, title: "Data Ownership & Control", description:
        "Maintain full ownership of your data with strict access controls, tenant isolation, and policy-based usage across every AI interaction.", }, {
      icon: <Bot className="h-5 w-5" />, title: "Intelligent Agent Framework", description:
        "Create, configure, and evolve AI agents with defined roles, skills, guardrails, and data access, all in one place.", }, {
      icon: <Brain className="h-5 w-5" />, title: "Shared Context Layer", description:
        "Agents inherit full project context, history, goals, stakeholders, so no information is lost on handoff.", }, {
      icon: <Sparkles className="h-5 w-5" />, title: "Skill & Capability Injection", description:
        "Give agents new tools, data sources, and decision frameworks without disrupting running workflows.", }, ];

  return (
    <section className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="The platform"
          title={
            <>
              The capabilities that turn AI
              <br className="hidden sm:block" />
              into <span className="text-gradient">governed business execution.</span>
            </>
          }
          description="The building blocks you need to move AI from proof-of-concept to production, without compromising on oversight, quality, or speed."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p) => (
            <FeatureCard key={p.title} {...p} />
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <Link
            to="/platform"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:text-brand-800"
          >
            Explore the full platform
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </Container>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      n: "01", title: "Model your organization", description:
        "Design the org chart, projects, and workflows you want AI to operate in. Use your existing structure, no process overhaul required.", }, {
      n: "02", title: "Deploy role-based agents", description:
        "Configure AI agents with specific roles, analysts, reviewers, SMEs, executors, and equip them with the skills, data, and guardrails they need.", }, {
      n: "03", title: "Operate with confidence", description:
        "Tasks flow to the right teammate, human or AI, with full context. Leadership sees progress, cost, and quality in real time.", }, ];

  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div>
            <SectionHeading
              align="left"
              eyebrow="How it works"
              title={<>From pilot to production, <span className="text-gradient">without the chaos.</span></>}
              description="A clear path from day one. Define how work gets done, deploy agents into your workflows, and scale with guardrails built in."
            />
            <ol className="mt-10 space-y-6">
              {steps.map((s) => (
                <li key={s.n} className="relative flex gap-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 font-mono text-sm font-semibold text-brand-700 ring-1 ring-inset ring-brand-200/60">
                    {s.n}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-ink-900">{s.title}</h3>
                    <p className="mt-1.5 text-[15px] leading-relaxed text-ink-600">{s.description}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="mt-10 flex gap-3">
              <Button to="/signup">
                Start free
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button to="/platform" variant="secondary">
                See the platform
              </Button>
            </div>
          </div>
          <div className="relative">
            <div aria-hidden className="absolute -inset-4 rounded-[36px] bg-gradient-to-br from-brand-100 via-white to-brand-100 blur-2xl opacity-60" />
            <div className="relative overflow-hidden rounded-[28px] border border-ink-200 bg-white shadow-lift">
              <PictureSet
                base="/lifecycle"
                alt="AI agent lifecycle"
                width={1376}
                height={768}
                loading="lazy"
                decoding="async"
                className="block h-auto w-full"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function WorkflowShowcase() {
  return (
    <section className="py-16 sm:py-20 bg-ink-50/70">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div className="order-2 relative overflow-hidden rounded-[28px] border border-ink-200 bg-white shadow-lift lg:order-1">
            <PictureSet
              base="/workflow"
              alt="Unified workflow board"
              width={1376}
              height={768}
              loading="lazy"
              decoding="async"
              className="block h-auto w-full"
            />
          </div>
          <div className="order-1 lg:order-2">
            <SectionHeading
              align="left"
              eyebrow="Unified workflow"
              title={<>One place to plan, <span className="text-gradient">execute</span>, and review.</>}
              description="Give your operations one shared surface where people, projects, and agents meet, from strategy down to the next task due."
            />
            <ul className="mt-8 space-y-4">
              {[
                "Structured projects with stages, states, and clear ownership", "Automatic routing to the best-fit human or AI agent for each task", "Real-time visibility into progress, blockers, and cost", "Full conversation and decision history on every work item", ].map((line) => (
                <li key={line} className="flex items-start gap-3 text-[15px] text-ink-700">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                  {line}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}

function GovernanceBlock() {
  const items = [
    { icon: <FileCheck2 className="h-5 w-5" />, title: "Immutable audit trail" },
    { icon: <Lock className="h-5 w-5" />, title: "Role-based access & approvals" },
    { icon: <LineChart className="h-5 w-5" />, title: "Cost, usage & quality telemetry" },
    { icon: <ShieldCheck className="h-5 w-5" />, title: "Policy-aware agent guardrails" },
  ];

  return (
    <section className="relative py-16 sm:py-20">
      <Container>
        <div className="relative overflow-hidden rounded-[32px] bg-ink-950 px-8 py-16 sm:px-14 sm:py-20 md:px-20">
          <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid-dark opacity-50" />
          <div aria-hidden className="pointer-events-none absolute -right-20 -top-20 h-[380px] w-[380px] rounded-full bg-brand-600/30 blur-3xl" />

          <div className="relative grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:items-center">
            <div>
              <Eyebrow tone="dark">Governance &amp; Trust</Eyebrow>
              <h2 className="mt-5 text-[36px] font-semibold tracking-[-0.02em] leading-[1.05] text-white sm:text-[48px]">
                Where Execution Meets Board-Level Governance.
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-300">
                AI-Harness is built for regulated, high-stakes environments. Every agent action is logged, scoped, and reversible, so scaling AI never means losing control.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {items.map((it) => (
                  <div
                    key={it.title}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3.5"
                  >
                    <span className="grid h-9 w-9 place-items-center rounded-xl bg-white/10 text-white">
                      {it.icon}
                    </span>
                    <span className="text-[15px] font-medium text-white">{it.title}</span>
                  </div>
                ))}
              </div>
              <div className="mt-9">
                <Button to="/security" variant="white">
                  Explore security &amp; governance
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="relative">
              <PictureSet
                base="/governance"
                alt="Governance visualization"
                width={1376}
                height={768}
                loading="lazy"
                decoding="async"
                className="h-auto w-full rounded-2xl"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function IndustriesPreview() {
  const industries = [
    { icon: <Briefcase className="h-5 w-5" />, name: "Professional Services" }, { icon: <Factory className="h-5 w-5" />, name: "Manufacturing & Supply Chain" }, { icon: <ShoppingBag className="h-5 w-5" />, name: "Retail & eCommerce" }, { icon: <Laptop className="h-5 w-5" />, name: "Technology & SaaS" }, ];

  return (
    <section className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Industries"
          title={<>Built for the industries where <span className="text-gradient">execution matters.</span></>}
          description="AI-Harness helps your teams execute faster, operate consistently, and scale AI with control, using proven workflows, agent templates, and policy guardrails."
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((it) => (
            <Link
              key={it.name}
              to="/industries"
              className="group flex items-center gap-4 rounded-2xl border border-ink-200 bg-white p-5 transition-all hover:-translate-y-0.5 hover:border-ink-300 hover:shadow-soft"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-700 ring-1 ring-inset ring-brand-200/60">
                {it.icon}
              </span>
              <span className="text-[15px] font-semibold text-ink-900">{it.name}</span>
              <ArrowRight className="ml-auto h-4 w-4 text-ink-400 transition-transform group-hover:translate-x-0.5 group-hover:text-ink-900" />
            </Link>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Button to="/industries" variant="secondary">
            See all industries
          </Button>
        </div>
      </Container>
    </section>
  );
}

function SolutionsPreview() {
  const useCases = [
    { label: "Operations & Shared Services", hash: "#operations" },
    { label: "Customer Operations", hash: "#customer" },
    { label: "Engineering & Product", hash: "#engineering" },
    { label: "Finance & FP&A", hash: "#finance" },
  ];
  const executiveRoles = [
    { label: "For the CEO & Board", hash: "#role-ceo-board" },
    { label: "For the COO", hash: "#role-coo" },
    { label: "For the CIO / CTO", hash: "#role-cio-cto" },
    { label: "For the CFO", hash: "#role-cfo" },
  ];

  return (
    <section className="pb-8 sm:pb-12">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-ink-600/80 bg-gradient-to-br from-ink-800 via-ink-800 to-brand-900 p-6 shadow-lift sm:p-8">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-brand-500/25 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-24 -left-20 h-56 w-56 rounded-full bg-brand-400/20 blur-3xl"
          />
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-medium text-ink-300">
                Solutions Snapshot
              </p>
              <h2 className="mt-2 text-[30px] font-semibold leading-tight tracking-[-0.02em] text-white sm:text-[36px]">
                From CEO to team lead: AI-Harness in your workflow.
              </h2>
              <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-ink-200">
                See where AI-Harness drives outcomes first, and how value maps to executive priorities
                from CEO to functional leaders.
              </p>
            </div>
            <div className="relative inline-flex">
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-xl bg-brand-200/50 blur-sm"
              />
              <span
                aria-hidden
                className="pointer-events-none absolute -inset-1 rounded-2xl border border-brand-200/60 animate-ping [animation-duration:2.4s]"
              />
              <Link
                to="/solutions"
                className="group relative inline-flex h-11 min-w-[172px] items-center justify-center gap-2 rounded-xl bg-white px-5 text-sm font-semibold tracking-[0.01em] text-ink-900 shadow-soft transition-all hover:-translate-y-0.5 hover:bg-brand-50 hover:text-brand-800"
              >
                View all solutions
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-white/20 bg-white/[0.08] p-5 backdrop-blur">
              <h3 className="text-[15px] font-semibold text-white">Popular use cases</h3>
              <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {useCases.map((item) => (
                  <Link
                    key={item.label}
                    to={{ pathname: "/solutions", hash: item.hash }}
                    className="inline-flex h-9 items-center justify-center rounded-full border border-white/25 bg-white/15 px-3 text-center text-[13px] font-medium text-ink-100 transition-colors hover:bg-white/25"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-white/20 bg-white/[0.08] p-5 backdrop-blur">
              <h3 className="text-[15px] font-semibold text-white">Built for leadership teams</h3>
              <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {executiveRoles.map((item) => (
                  <Link
                    key={item.label}
                    to={{ pathname: "/solutions", hash: item.hash }}
                    className="inline-flex h-9 items-center justify-center rounded-full border border-white/25 bg-white/15 px-3 text-center text-[13px] font-medium text-ink-100 transition-colors hover:bg-white/25"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}


