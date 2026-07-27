import { ArrowRight, BarChart3, Bot, User } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Container from "./Container";
import ScrollReveal from "./ScrollReveal";

const STEPS: {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
  mockup: "setup" | "agents" | "performance";
}[] = [
  {
    number: "01",
    title: "Tell it about your business",
    description:
      "Answer a few plain-language questions about what you do, your hours, and your services. No setup project, no tech skills.",
    icon: User,
    mockup: "setup",
  },
  {
    number: "02",
    title: "Turn on the agents you need",
    description:
      "Start with one agent (sales, reputation, reviews, proposals, or marketing) and add more whenever you are ready. Each one works on its own.",
    icon: Bot,
    mockup: "agents",
  },
  {
    number: "03",
    title: "Approve and grow",
    description:
      "Your agents get to work while you review a clean summary. You approve what matters, set spending limits, and stay in control.",
    icon: BarChart3,
    mockup: "performance",
  },
];

function SetupMockup() {
  return (
    <div className="rounded-xl border border-ink-200/80 bg-white p-4 shadow-[0_8px_24px_rgba(15,23,42,0.06)]">
      <p className="text-sm font-medium text-ink-900">Let&apos;s get to know your business 👋</p>
      <div className="mt-3 space-y-2.5">
        {["What does your business do?", "What are your hours?", "What services do you offer?"].map(
          (label) => (
            <div key={label} className="rounded-lg border border-ink-200/80 bg-ink-50/80 px-3 py-2.5">
              <p className="text-xs font-normal text-ink-500 sm:text-sm">{label}</p>
            </div>
          ),
        )}
      </div>
      <div className="mt-3.5 flex items-center justify-center gap-1.5 rounded-lg bg-brand-600 py-2.5 text-xs font-medium text-white sm:text-sm">
        Continue
        <ArrowRight className="h-3.5 w-3.5" />
      </div>
    </div>
  );
}

function AgentsMockup() {
  const agents = [
    { name: "Review Agent", on: true },
    { name: "Outreach Agent", on: true },
    { name: "Reputation Agent", on: false },
  ];

  return (
    <div className="rounded-xl border border-ink-200/80 bg-white p-4 shadow-[0_8px_24px_rgba(15,23,42,0.06)]">
      <p className="text-sm font-medium text-ink-900">AI Agents</p>
      <div className="mt-3 space-y-2.5">
        {agents.map((agent) => (
          <div
            key={agent.name}
            className="flex items-center justify-between rounded-lg border border-ink-200/70 bg-ink-50/60 px-3 py-2.5"
          >
            <div className="flex items-center gap-2.5">
              <span className="grid h-6 w-6 place-items-center rounded-md bg-brand-100 text-brand-600">
                <Bot className="h-3.5 w-3.5" />
              </span>
              <span className="text-xs font-medium text-ink-800 sm:text-sm">{agent.name}</span>
            </div>
            <span
              className={`h-4 w-7 rounded-full p-0.5 ${agent.on ? "bg-brand-600" : "bg-ink-300"}`}
            >
              <span
                className={`block h-3 w-3 rounded-full bg-white transition ${agent.on ? "translate-x-3" : "translate-x-0"}`}
              />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function PerformanceMockup() {
  const metrics = [
    { label: "New Leads", value: "47", change: "+23%" },
    { label: "Reviews", value: "128", change: "+18%" },
    { label: "Appointments", value: "31", change: "+12%" },
  ];

  return (
    <div className="rounded-xl border border-ink-200/80 bg-white p-4 shadow-[0_8px_24px_rgba(15,23,42,0.06)]">
      <p className="text-sm font-medium text-ink-900">Performance Overview</p>
      <div className="mt-3 grid grid-cols-3 gap-2">
        {metrics.map((m) => (
          <div key={m.label} className="rounded-lg border border-ink-200/70 bg-ink-50/60 p-2.5 text-center">
            <p className="text-[10px] font-normal text-ink-600 sm:text-xs">{m.label}</p>
            <p className="text-sm font-medium text-ink-900 sm:text-base">{m.value}</p>
            <p className="text-[10px] font-medium text-success-600 sm:text-xs">{m.change}</p>
          </div>
        ))}
      </div>
      <div className="mt-2.5 rounded-lg border border-brand-200/60 bg-brand-50/50 p-3">
        <p className="text-xs font-normal text-ink-600 sm:text-sm">Revenue Generated</p>
        <p className="text-base font-medium text-brand-700 sm:text-lg">$12,480</p>
        <div className="mt-1.5 flex h-8 items-end gap-0.5">
          {[35, 50, 42, 68, 58, 82, 75].map((h, i) => (
            <span
              key={i}
              className="flex-1 rounded-sm bg-brand-500/80"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function StepMockup({ type }: { type: (typeof STEPS)[number]["mockup"] }) {
  if (type === "setup") return <SetupMockup />;
  if (type === "agents") return <AgentsMockup />;
  return <PerformanceMockup />;
}

function StepCard({ step, index }: { step: (typeof STEPS)[number]; index: number }) {
  const Icon = step.icon;

  return (
    <ScrollReveal as="article" className="relative flex flex-col" delay={index * 80}>
      <div className="relative flex flex-1 flex-col overflow-hidden rounded-3xl border border-white/70 bg-white/75 p-6 font-inter shadow-[0_20px_60px_-24px_rgba(124,58,237,0.18)] backdrop-blur-md sm:p-7">
        <span
          aria-hidden
          className="pointer-events-none absolute -left-1 -top-4 select-none text-[5.5rem] font-bold leading-none text-brand-200/50 sm:text-[6.5rem]"
        >
          {step.number}
        </span>

        <div className="relative">
          <div className="grid h-12 w-12 place-items-center rounded-full bg-brand-600 text-white shadow-[0_8px_24px_rgba(124,58,237,0.35)]">
            <Icon className="h-5 w-5" strokeWidth={2} />
          </div>
          <h3 className="mt-5 text-xl font-medium leading-snug tracking-[-0.015em] text-ink-900 sm:text-2xl">
            {step.title}
          </h3>
          <p className="mt-3 text-base font-normal leading-[1.65] tracking-[-0.01em] text-ink-700 sm:text-lg">
            {step.description}
          </p>
        </div>

        <div className="mt-6 flex-1">
          <StepMockup type={step.mockup} />
        </div>
      </div>

      {index < STEPS.length - 1 && (
        <div
          aria-hidden
          className="pointer-events-none absolute -right-5 top-1/2 z-10 hidden h-3 w-3 -translate-y-1/2 rounded-full bg-brand-400 shadow-[0_0_12px_rgba(120, 57, 224,0.8)] lg:block"
        />
      )}
    </ScrollReveal>
  );
}

export default function HowItWorksSteps() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-brand-50/80 via-white to-brand-50/40"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-4 top-8 h-24 w-24 bg-[radial-gradient(circle,rgba(120, 57, 224,0.15)_1.5px,transparent_1.5px)] [background-size:10px_10px] opacity-60"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-8 right-4 h-24 w-24 bg-[radial-gradient(circle,rgba(120, 57, 224,0.15)_1.5px,transparent_1.5px)] [background-size:10px_10px] opacity-60"
      />

      <Container className="relative">
        <ScrollReveal className="font-inter mx-auto max-w-3xl text-center">
          <h2 className="text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-ink-900">
            How it works in <span className="text-gradient">3 simple steps</span>
          </h2>
          <p className="mt-4 text-lg font-normal text-ink-700 sm:text-xl">No IT project, no setup fee.</p>
        </ScrollReveal>

        <div className="relative mx-auto mt-14 max-w-6xl lg:mt-16">
          <svg
            aria-hidden
            className="pointer-events-none absolute left-[18%] right-[18%] top-[42%] hidden h-8 w-[64%] text-brand-400/70 lg:block"
            viewBox="0 0 800 40"
            preserveAspectRatio="none"
          >
            <path
              d="M0 20 C120 4, 200 36, 320 20 S520 4, 640 20 S760 36, 800 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>

          <div className="grid gap-8 lg:grid-cols-3 lg:gap-6">
            {STEPS.map((step, index) => (
              <StepCard key={step.title} step={step} index={index} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
