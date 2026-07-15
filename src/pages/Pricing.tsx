import { useState } from "react";
import { Check, Sparkles, ArrowRight, Minus, Plus } from "lucide-react";
import Container from "../components/Container";
import Button from "../components/Button";
import Eyebrow from "../components/Eyebrow";
import SectionHeading from "../components/SectionHeading";
import CTASection from "../components/CTASection";
import FaqJsonLd from "../components/FaqJsonLd";
import { cn } from "../lib/cn";

type Plan = {
  name: string;
  description: string;
  priceMonthly: number | null;
  priceYearly: number | null;
  priceNote?: string;
  ctaLabel: string;
  ctaTo: string;
  ctaVariant: "primary" | "secondary" | "white";
  highlight?: boolean;
  features: string[];
  footer?: string;
};

const plans: Plan[] = [
  {
    name: "Starter", description: "For teams exploring their first AI-powered workflows.", priceMonthly: 0, priceYearly: 0, ctaLabel: "Start free", ctaTo: "/signup", ctaVariant: "secondary", features: [
      "Up to 5 users", "Up to 3 AI agents", "Project & task workspace", "Basic audit log", "Community support", ], footer: "Your own instance with $10 free credits", }, {
    name: "Business", description: "For operating teams scaling AI across critical workflows.", priceMonthly: 49, priceYearly: 39, priceNote: "per user / month", ctaLabel: "Get started", ctaTo: "/signup", ctaVariant: "primary", highlight: true, features: [
      "Unlimited agents & projects", "Role-based access control", "Advanced workflow automation", "Cost & budget guardrails", "SSO (SAML / OIDC)", "Priority support with SLA", ], }, {
    name: "Enterprise", description: "For organizations deploying AI across the business.", priceMonthly: null, priceYearly: null, priceNote: "Custom pricing", ctaLabel: "Talk to sales", ctaTo: "/demo", ctaVariant: "secondary", features: [
      "Everything in Business", "Private cloud / on-prem deployment", "Bring your own models", "SCIM, advanced RBAC & audit", "Dedicated success manager", "Custom policy packs & integrations", "Procurement & legal support", ], },
];

const compareSections: Array<{
  title: string;
  rows: Array<{ label: string; values: [string, string, string] }>;
}> = [
  {
    title: "Agents & Workflows", rows: [
      { label: "AI agents", values: ["Up to 3", "Unlimited", "Unlimited"] }, { label: "Projects", values: ["Up to 5", "Unlimited", "Unlimited"] }, { label: "Workflow templates", values: ["Starter set", "Full library", "Full library + custom"] }, { label: "Skill & tool injection", values: ["Basic", "Advanced", "Advanced + custom"] }, ], }, {
    title: "Governance & Security", rows: [
      { label: "Audit log", values: ["Basic", "Advanced", "Advanced + export"] }, { label: "Role-based access", values: ["Fixed roles", "Custom roles", "Full RBAC + SCIM"] }, { label: "Approval workflows", values: ["N/A", "Yes", "Yes + custom"] }, { label: "Budget & cost guardrails", values: ["N/A", "Yes", "Yes + cost centers"] }, { label: "SSO", values: ["Google / Microsoft", "SAML / OIDC", "SAML / OIDC + SCIM"] }, { label: "Data residency", values: ["US / EU", "US / EU", "Customer-choice"] }, ], }, {
    title: "Support & Services", rows: [
      { label: "Support", values: ["Community", "Priority with SLA", "Dedicated TAM + SLA"] }, { label: "Implementation", values: ["Self-serve", "Guided onboarding", "White-glove"] }, { label: "Custom integrations", values: ["N/A", "Partner services", "Included"] }, ], },
];

const faqs = [
  {
    q: "How does the free Starter plan work?", a: "When you sign up, we provision a new instance for your team with $10 in free credits to start, up to 5 users and 3 AI agents. You get the core workspace, project and task management, and a basic audit log. No credit card required.", }, {
    q: "What counts as a user?", a: "A user is any human seat in your workspace, analysts, managers, and admins. AI agents are not charged per agent in Business; they are part of your workspace quota. Enterprise includes agent count in your MSA.", }, {
    q: "Do I need to bring my own model provider?", a: "Yes. AI-Harness is a control plane, not an inference provider. You bring OpenAI, Anthropic, Google, AWS Bedrock, Azure OpenAI, or any self-hosted model, and we orchestrate your agents on top.", }, {
    q: "Can I deploy AI-Harness in my own cloud?", a: "Yes, Enterprise customers can deploy AI-Harness in their own cloud (AWS, Azure, GCP) or VPC, or run it on-premises. Data never leaves your environment.", }, {
    q: "What's your security and compliance posture?", a: "AI-Harness is built for regulated environments with role-based access, immutable audit logs, approval gates, and data residency controls. We are SOC 2 Type II aligned with ongoing certification. Speak to our team for detailed documentation.", }, {
    q: "Do you offer volume or non-profit discounts?", a: "Yes. We offer volume discounts for large Business deployments, and dedicated programs for non-profits, research institutions, and public sector. Contact our team.", },
];

export default function Pricing() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("yearly");

  return (
    <>
      <PricingHero billing={billing} setBilling={setBilling} />
      <PlansGrid billing={billing} />
      <CompareTable />
      <ValueRibbon />
      <FaqJsonLd faqs={faqs} />
      <FAQ />
      <CTASection
        title="Start free. Grow into the platform."
        description="You can be live in minutes. Upgrade when your workflows and governance needs demand it, not before."
      />
    </>
  );
}

function PricingHero({
  billing, setBilling,
}: {
  billing: "monthly" | "yearly";
  setBilling: (v: "monthly" | "yearly") => void;
}) {
  return (
    <section className="relative overflow-hidden pb-10 pt-20">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-spotlight" />
      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>Pricing</Eyebrow>
          <h1 className="mt-6 text-[36px] font-semibold leading-[1.04] tracking-[-0.02em] text-ink-900 sm:text-[60px]">
            Simple, <span className="text-gradient">transparent pricing.</span>
          </h1>
          <p className="mt-5 text-lg text-ink-600 sm:text-xl">
            One platform for your AI workforce. Start free, scale into enterprise, no surprise fees, no per-agent tax.
          </p>
          <div className="mt-8 inline-flex items-center gap-1 rounded-full border border-ink-200 bg-white p-1 shadow-soft">
            <button
              type="button"
              onClick={() => setBilling("monthly")}
              className={cn(
                "rounded-full px-4 py-1.5 text-sm font-medium transition-colors", billing === "monthly" ? "bg-ink-900 text-white" : "text-ink-600 hover:text-ink-900", )}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setBilling("yearly")}
              className={cn(
                "inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium transition-colors", billing === "yearly" ? "bg-ink-900 text-white" : "text-ink-600 hover:text-ink-900", )}
            >
              Yearly
              <span className={cn(
                "rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.1em]", billing === "yearly" ? "bg-brand-500 text-white" : "bg-brand-50 text-brand-700", )}>
                Save 20%
              </span>
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}

function PlansGrid({ billing }: { billing: "monthly" | "yearly" }) {
  return (
    <section className="pb-16">
      <Container>
        <div className="grid gap-5 lg:grid-cols-3">
          {plans.map((plan) => {
            const price = billing === "monthly" ? plan.priceMonthly : plan.priceYearly;
            const isEnterprise = price === null;
            return (
              <div
                key={plan.name}
                className={cn(
                  "relative flex flex-col rounded-3xl border p-8", plan.highlight
                    ? "border-transparent bg-gradient-to-br from-ink-950 to-ink-900 text-white shadow-lift ring-1 ring-white/10"
                    : "border-ink-200 bg-white text-ink-900 shadow-soft", )}
              >
                {plan.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-brand-500 to-brand-600 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-white shadow-lift">
                      <Sparkles className="h-3 w-3" /> Most popular
                    </span>
                  </div>
                )}
                <div>
                  <h3 className={cn("text-xl font-semibold", plan.highlight ? "text-white" : "text-ink-900")}>
                    {plan.name}
                  </h3>
                  <p className={cn("mt-2 text-[14.5px] leading-relaxed", plan.highlight ? "text-ink-300" : "text-ink-600")}>
                    {plan.description}
                  </p>
                </div>
                <div className="mt-7">
                  {isEnterprise ? (
                    <div>
                      <div className={cn("text-4xl font-semibold tracking-tight", plan.highlight ? "text-white" : "text-ink-900")}>
                        Let's talk
                      </div>
                      <p className={cn("mt-2 text-sm", plan.highlight ? "text-ink-400" : "text-ink-500")}>
                        {plan.priceNote}
                      </p>
                    </div>
                  ) : price === 0 ? (
                    <div>
                      <div className={cn("text-5xl font-semibold tracking-tight", plan.highlight ? "text-white" : "text-ink-900")}>
                        $0
                      </div>
                      <p className={cn("mt-2 text-sm", plan.highlight ? "text-ink-400" : "text-ink-500")}>
                        {plan.footer}
                      </p>
                    </div>
                  ) : (
                    <div>
                      <div className="flex items-baseline gap-1">
                        <span className={cn("text-5xl font-semibold tracking-tight", plan.highlight ? "text-white" : "text-ink-900")}>
                          ${price}
                        </span>
                        <span className={cn("text-sm", plan.highlight ? "text-ink-300" : "text-ink-500")}>
                          {plan.priceNote}
                        </span>
                      </div>
                      <p className={cn("mt-2 text-sm", plan.highlight ? "text-ink-400" : "text-ink-500")}>
                        Billed {billing}. Minimum 5 users.
                      </p>
                    </div>
                  )}
                </div>
                <div className="mt-6">
                  <Button
                    to={plan.ctaTo}
                    variant={plan.highlight ? "white" : plan.ctaVariant}
                    className="w-full"
                  >
                    {plan.ctaLabel}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
                <ul className="mt-8 space-y-3">
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      className={cn("flex items-start gap-3 text-[14.5px]", plan.highlight ? "text-ink-200" : "text-ink-700")}
                    >
                      <span
                        className={cn(
                          "mt-0.5 grid h-5 w-5 place-items-center rounded-full", plan.highlight ? "bg-white/10 text-white" : "bg-brand-50 text-brand-700", )}
                      >
                        <Check className="h-3 w-3" />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

function CompareTable() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="overflow-x-auto rounded-2xl border border-ink-200 bg-white">
          <div className="min-w-[760px]">
          <div className="grid grid-cols-4 border-b border-ink-200 bg-ink-50/80 px-6 py-4 text-[12px] font-semibold uppercase tracking-[0.12em] text-ink-500">
            <div>Feature</div>
            <div className="text-center">Starter</div>
            <div className="text-center text-brand-700">Business</div>
            <div className="text-center">Enterprise</div>
          </div>
          {compareSections.map((sec) => (
            <div key={sec.title}>
              <div className="border-b border-ink-200 bg-ink-50/50 px-6 py-3 text-[13px] font-semibold text-ink-800">
                {sec.title}
              </div>
              {sec.rows.map((row) => (
                <div
                  key={row.label}
                  className="grid grid-cols-4 items-center border-b border-ink-100 px-6 py-4 text-[14.5px] last:border-b-0"
                >
                  <div className="text-ink-700">{row.label}</div>
                  {row.values.map((v, i) => (
                    <div key={i} className={cn("text-center", i === 1 ? "font-semibold text-ink-900" : "text-ink-700")}>
                      {v === "N/A" ? <span className="text-ink-400">N/A</span> : v}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function ValueRibbon() {
  const items = [
    "$10 free credits to start", "No credit card required", "Cancel anytime", "Volume discounts available", ];
  return (
    <section className="py-8">
      <Container>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 rounded-full bg-brand-50 px-6 py-4 text-sm font-medium text-brand-800 ring-1 ring-inset ring-brand-200/60">
          {items.map((i) => (
            <span key={i} className="inline-flex items-center gap-2">
              <Check className="h-4 w-4 text-brand-600" /> {i}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading
            align="left"
            eyebrow="FAQ"
            title={<>Answers to the <span className="text-gradient">usual questions.</span></>}
            description="Not here? Our team is happy to help, reach out any time."
          />
          <div className="divide-y divide-ink-200 rounded-2xl border border-ink-200 bg-white">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <button
                  key={f.q}
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-start justify-between gap-6 p-6 text-left"
                >
                  <div>
                    <p className="text-[16px] font-semibold text-ink-900">{f.q}</p>
                    {isOpen && (
                      <p className="mt-3 text-[15px] leading-relaxed text-ink-600">{f.a}</p>
                    )}
                  </div>
                  <span className="mt-1 grid h-8 w-8 shrink-0 place-items-center rounded-full border border-ink-200 bg-white text-ink-700">
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
