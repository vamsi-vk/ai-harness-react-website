import {
  Users2,
  Headphones,
  CircuitBoard,
  Megaphone,
  Scale,
  DollarSign,
  ShieldCheck,
  ArrowRight,
  Workflow,
  Target,
  CheckCircle2,
} from "lucide-react";
import type { ReactNode } from "react";
import Container from "../components/Container";
import Button from "../components/Button";
import Eyebrow from "../components/Eyebrow";
import SectionHeading from "../components/SectionHeading";
import CTASection from "../components/CTASection";

type UseCase = {
  id: string;
  title: string;
  tagline: string;
  icon: ReactNode;
  bullets: string[];
  kpi: string;
  kpiLabel: string;
};

const useCases: UseCase[] = [
  {
    id: "operations",
    title: "Operations & Shared Services",
    tagline: "Industrialize the back office with accountable AI.",
    icon: <Workflow className="h-6 w-6" />,
    bullets: [
      "Document intake, validation, and exception handling",
      "Vendor, supplier, and partner onboarding",
      "Reconciliation, audit prep, and reporting",
      "Policy-compliant approvals with human-in-the-loop",
    ],
    kpi: "4.2×",
    kpiLabel: "Throughput per operations team",
  },
  {
    id: "customer",
    title: "Customer Operations",
    tagline: "Meet customers where they are — 24/7, on brand, on policy.",
    icon: <Headphones className="h-6 w-6" />,
    bullets: [
      "Tier-1 triage, classification, and auto-resolution",
      "Case summarization and next-best-action drafting",
      "Churn, escalation, and QA monitoring at scale",
      "Clean handoffs between AI and human agents",
    ],
    kpi: "61%",
    kpiLabel: "Tickets auto-resolved",
  },
  {
    id: "engineering",
    title: "Engineering & Product",
    tagline: "Coordinate multiple coding agents without losing the plot.",
    icon: <CircuitBoard className="h-6 w-6" />,
    bullets: [
      "Parallel agents working against shared backlogs",
      "Review, test, and deployment oversight",
      "Incident response and on-call runbooks",
      "PM research, user interview synthesis, spec drafting",
    ],
    kpi: "3.5×",
    kpiLabel: "Eng velocity per team",
  },
  {
    id: "marketing",
    title: "Marketing & Growth",
    tagline: "Campaign velocity without sacrificing brand or compliance.",
    icon: <Megaphone className="h-6 w-6" />,
    bullets: [
      "Research, briefs, and audience development",
      "Content and lifecycle operations",
      "Paid media experiment management",
      "Campaign performance analysis and reporting",
    ],
    kpi: "4×",
    kpiLabel: "Campaign output per FTE",
  },
  {
    id: "legal-compliance",
    title: "Legal, Risk & Compliance",
    tagline: "AI that earns its seat at the review table.",
    icon: <Scale className="h-6 w-6" />,
    bullets: [
      "Contract review, playbook enforcement, redlines",
      "Regulatory change tracking and assessment",
      "Third-party risk and vendor evaluations",
      "Internal audit and evidence workflows",
    ],
    kpi: "70%",
    kpiLabel: "Faster contract cycles",
  },
  {
    id: "finance",
    title: "Finance & FP&A",
    tagline: "Close faster, forecast sharper, narrate clearer.",
    icon: <DollarSign className="h-6 w-6" />,
    bullets: [
      "Month-end close orchestration",
      "Variance analysis and board-pack drafting",
      "Procurement and expense review",
      "Forecast scenarios with explainable assumptions",
    ],
    kpi: "−40%",
    kpiLabel: "Close cycle time",
  },
  {
    id: "hr",
    title: "People & Talent",
    tagline: "Scale talent operations with empathy and control.",
    icon: <Users2 className="h-6 w-6" />,
    bullets: [
      "Recruiting operations and candidate screening",
      "Onboarding and internal knowledge answers",
      "Policy Q&A and employee service operations",
      "Learning and performance ops",
    ],
    kpi: "55%",
    kpiLabel: "Faster time-to-onboard",
  },
  {
    id: "security",
    title: "Security & IT Operations",
    tagline: "A governed control plane for your SOC and ITOps agents.",
    icon: <ShieldCheck className="h-6 w-6" />,
    bullets: [
      "Alert triage, enrichment, and escalation",
      "Tier-1 service desk automation",
      "Change management and runbook orchestration",
      "Access review and audit evidence",
    ],
    kpi: "3×",
    kpiLabel: "Analyst effective capacity",
  },
];

export default function UseCases() {
  return (
    <>
      <UseCasesHero />
      <UseCaseGrid />
      <ByRole />
      <CTASection
        title="Put AI to work where it counts most."
        description="Start with a single workflow. Expand to an entire department. AI-Harness scales with your operational ambitions."
      />
    </>
  );
}

function UseCasesHero() {
  return (
    <section className="relative overflow-hidden pb-16 pt-20">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-spotlight" />
      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>Solutions</Eyebrow>
          <h1 className="mt-6 text-[44px] font-semibold leading-[1.04] tracking-[-0.02em] text-ink-900 sm:text-[60px]">
            High-value workflows where <span className="text-gradient">AI pays for itself.</span>
          </h1>
          <p className="mt-5 text-lg text-ink-600 sm:text-xl">
            From the back office to the front line, AI-Harness powers the operating workflows that
            are expensive, repeatable, and critical to get right.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Button to="/signup" size="lg">
              Start free
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button to="/demo" variant="secondary" size="lg">
              Book a demo
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

function UseCaseGrid() {
  return (
    <section className="py-16">
      <Container>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {useCases.map((u) => (
            <div
              id={u.id}
              key={u.id}
              className="group relative flex scroll-mt-24 flex-col overflow-hidden rounded-3xl border border-ink-200 bg-white p-7 transition-all hover:-translate-y-0.5 hover:border-ink-300 hover:shadow-lift"
            >
              <div className="flex items-center justify-between">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-50 text-brand-700 ring-1 ring-inset ring-brand-200/60">
                  {u.icon}
                </span>
                <div className="rounded-full bg-gradient-to-br from-ink-950 to-ink-800 px-3.5 py-1.5 text-right">
                  <div className="text-lg font-semibold text-white">{u.kpi}</div>
                  <div className="text-[10px] font-medium uppercase tracking-[0.12em] text-ink-400">
                    {u.kpiLabel}
                  </div>
                </div>
              </div>
              <h3 className="mt-6 text-xl font-semibold tracking-tight text-ink-900">{u.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-600">{u.tagline}</p>
              <ul className="mt-5 space-y-2.5">
                {u.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-[14px] text-ink-700">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function ByRole() {
  const roles = [
    {
      title: "For the CEO & Board",
      description: "A single source of truth for how AI is being used, at what cost, and with what outcomes. Stay strategic — not operational.",
      points: [
        "Executive dashboards across every business unit",
        "Approval and escalation visibility at a glance",
        "Spend, outcomes, and risk in one view",
      ],
    },
    {
      title: "For the COO",
      description: "Standardize how AI gets deployed across departments. Measure the leverage and protect against drift.",
      points: [
        "Common playbooks across teams",
        "Operational KPIs tied to AI investment",
        "Safe rollout patterns and guardrails",
      ],
    },
    {
      title: "For the CIO / CTO",
      description: "A governed platform that integrates into your identity, data, and model infrastructure — without adding another silo.",
      points: [
        "SSO, SCIM, audit, and data residency",
        "Open integrations with your model and data stack",
        "Bring your own agents — no framework rewrite",
      ],
    },
    {
      title: "For the CFO",
      description: "Transparent economics for AI. Budgets, cost centers, and unit economics your finance team can actually reconcile.",
      points: [
        "Cost attribution to project, team, and outcome",
        "Budget ceilings with automated enforcement",
        "Usage analytics and forecasting",
      ],
    },
    {
      title: "For the CHRO",
      description: "Scale AI as a workforce concept, not a technology project. Clear roles, clear accountability, clear upskilling paths.",
      points: [
        "Role-based agent modeling that mirrors your org",
        "Change-management-ready rollout patterns",
        "Transparent hand-offs between people and AI",
      ],
    },
    {
      title: "For the CRO / CCO",
      description: "Serve customers faster without losing the human touch or the compliance guardrails.",
      points: [
        "Assisted and autonomous workflows side-by-side",
        "Consistent brand voice and policy adherence",
        "Escalation paths that never drop the ball",
      ],
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-ink-50/70">
      <Container>
        <SectionHeading
          eyebrow="By Role"
          title={<>Value that lands with <span className="text-gradient">every seat at the table.</span></>}
          description="AI-Harness is not a skunkworks project. It's a platform your executive team can rally around — with something concrete for each function."
        />
        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {roles.map((r) => (
            <div key={r.title} className="rounded-2xl border border-ink-200 bg-white p-6">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-50 text-brand-700 ring-1 ring-inset ring-brand-200/60">
                  <Target className="h-5 w-5" />
                </span>
                <h3 className="text-[17px] font-semibold text-ink-900">{r.title}</h3>
              </div>
              <p className="mt-4 text-[15px] leading-relaxed text-ink-600">{r.description}</p>
              <ul className="mt-4 space-y-2">
                {r.points.map((p) => (
                  <li key={p} className="flex gap-2.5 text-[14px] text-ink-700">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
