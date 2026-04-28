import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight, Bot, ShieldCheck, Workflow, Users, Gauge, FileCheck2, Sparkles, Layers, LineChart, Lock, Brain, CheckCircle2, Factory, ShoppingBag, Laptop, Briefcase,
} from "lucide-react";
import Container from "../components/Container";
import Button from "../components/Button";
import Eyebrow from "../components/Eyebrow";
import SectionHeading from "../components/SectionHeading";
import FeatureCard from "../components/FeatureCard";
import LogoCloud from "../components/LogoCloud";
import CTASection from "../components/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedBy />
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

function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 sm:pt-20 sm:pb-28">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-spotlight" />
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid opacity-60 [mask-image:linear-gradient(to_bottom,white_0%,white_60%,transparent_100%)]" />
      <Container className="relative">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <Eyebrow>The Enterprise AI Workforce Platform</Eyebrow>
          <h1 className="mt-6 text-[36px] font-semibold tracking-[-0.025em] leading-[1.02] text-ink-900 sm:text-[68px]">
            Human-Led. <span className="text-gradient">AI-Powered.</span> One Team.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-600 sm:text-xl">
            AI-Harness embeds accountable AI teammates into real processes, so your team moves faster without losing governance.
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
            Faster execution across business functions · Governed AI operations · End-to-end traceability and accountability
          </p>
        </div>

        <div className="relative mx-auto mt-16 max-w-6xl">
          <div aria-hidden className="absolute inset-x-8 -bottom-12 h-40 rounded-full bg-brand-500/30 blur-3xl" />
          <div className="relative overflow-hidden rounded-[28px] border border-ink-200/80 bg-white shadow-lift ring-1 ring-black/[0.02]">
            <div className="flex items-center gap-2 border-b border-ink-200/80 bg-ink-50/70 px-5 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
              <span className="ml-3 text-xs font-medium text-ink-500">ai-harness.com / command-center</span>
            </div>
            <img
              src="/screenshot-dashboard.png"
              alt="AI-Harness Command Center dashboard"
              className="block w-full"
              loading="eager"
            />
          </div>
          <FloatingStat
            className="left-[-16px] top-14 hidden sm:flex"
            icon={<Gauge className="h-4 w-4" />}
            label="Avg. task throughput"
            value="+312%"
          />
          <FloatingStat
            className="right-[-16px] bottom-16 hidden sm:flex"
            icon={<ShieldCheck className="h-4 w-4" />}
            label="Audit-logged actions"
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
        <div className="relative mt-12 overflow-hidden rounded-3xl border border-ink-900 bg-gradient-to-br from-ink-950 via-ink-900 to-indigo-950 p-1">
          <div aria-hidden className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-brand-500/30 blur-3xl" />
          <div aria-hidden className="pointer-events-none absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-indigo-500/25 blur-3xl" />
          <div className="relative rounded-[22px] border border-white/10 bg-ink-950/70 p-6 sm:p-8">
            <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-300">Outcomes at a glance</p>
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
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const isAnimatingRef = useRef(false);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;

        if (!entry.isIntersecting) {
          setValue(0);
          if (rafRef.current) cancelAnimationFrame(rafRef.current);
          isAnimatingRef.current = false;
          return;
        }

        if (isAnimatingRef.current) return;
        isAnimatingRef.current = true;
        const start = performance.now();
        const startValue = 0;

        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setValue(startValue + (target - startValue) * eased);
          if (progress < 1) {
            rafRef.current = requestAnimationFrame(tick);
          } else {
            isAnimatingRef.current = false;
          }
        };

        rafRef.current = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [target, duration]);

  return <span ref={ref}>{value.toFixed(decimals)}{suffix}</span>;
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
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="The platform"
          title={
            <>
              Six AI-Harness capabilities
              <br className="hidden sm:block" />
              to scale AI with <span className="text-gradient">control and results.</span>
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
    <section className="py-20 sm:py-28">
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
            <div aria-hidden className="absolute -inset-4 rounded-[36px] bg-gradient-to-br from-brand-100 via-white to-indigo-100 blur-2xl opacity-60" />
            <div className="relative overflow-hidden rounded-[28px] border border-ink-200 bg-white shadow-lift">
              <img src="/lifecycle.png" alt="AI agent lifecycle" className="block w-full" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function WorkflowShowcase() {
  return (
    <section className="py-20 sm:py-28 bg-ink-50/70">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div className="order-2 relative overflow-hidden rounded-[28px] border border-ink-200 bg-white shadow-lift lg:order-1">
            <img src="/workflow.png" alt="Unified workflow board" className="block w-full" />
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
    { icon: <FileCheck2 className="h-5 w-5" />, title: "Immutable audit trail" }, { icon: <Lock className="h-5 w-5" />, title: "Role-based access & approvals" }, { icon: <LineChart className="h-5 w-5" />, title: "Cost, usage & quality telemetry" }, { icon: <ShieldCheck className="h-5 w-5" />, title: "Policy-aware agent guardrails" }, ];

  return (
    <section className="relative py-20 sm:py-28">
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
              <img src="/governance.png" alt="Governance visualization" className="w-full rounded-2xl" />
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
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Industries"
          title={<>Built for the industries where <span className="text-gradient">execution matters.</span></>}
          description="AI-Harness helps your teams execute faster, operate consistently, and scale AI with control, using industry-ready workflows, agent templates, and policy guardrails."
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


