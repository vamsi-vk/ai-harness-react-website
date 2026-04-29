import {
  ShieldCheck, Lock, FileCheck2, Key, Eye, Server, Globe, Activity, CheckCircle2, ArrowRight, Fingerprint, ClipboardList,
} from "lucide-react";
import Container from "../components/Container";
import Button from "../components/Button";
import Eyebrow from "../components/Eyebrow";
import SectionHeading from "../components/SectionHeading";
import FeatureCard from "../components/FeatureCard";
import CTASection from "../components/CTASection";

export default function Security() {
  return (
    <>
      <SecurityHero />
      <PillarsBlock />
      <ComplianceBlock />
      <DataHandling />
      <AgentGovernance />
      <TrustCenter />
      <CTASection
        title="AI at enterprise scale, without the enterprise risk."
        description="Every action auditable. Every policy enforceable. Every deployment in your control."
      />
    </>
  );
}

function SecurityHero() {
  return (
    <section className="relative overflow-hidden bg-ink-950 text-white pb-20 pt-24">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid-dark opacity-40" />
      <div aria-hidden className="pointer-events-none absolute -left-40 top-10 h-[420px] w-[420px] rounded-full bg-brand-600/25 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-indigo-500/20 blur-3xl" />
      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="max-w-2xl">
            <Eyebrow tone="dark">Security &amp; Governance</Eyebrow>
            <h1 className="mt-6 text-[40px] font-semibold leading-[1.08] tracking-[-0.02em] text-white sm:text-[52px]">
              Built for risk, compliance,
              <br className="hidden sm:block" /> and execution teams.
            </h1>
            <p className="mt-5 max-w-xl text-[18px] leading-relaxed text-ink-300 sm:text-[21px]">
              From approvals to audit trails, AI-Harness embeds governance into daily operations.
              Every action is traceable, every policy enforceable, and every outcome measurable,
              so scaling AI never becomes a compliance liability.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button to="/demo" variant="white" size="lg">
                Request trust &amp; security brief
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button to="/contact" size="lg" className="border border-white/15 bg-white/5 text-white hover:bg-white/10">
                Contact security team
              </Button>
            </div>
          </div>
          <div className="relative">
            <img src="/governance.png" alt="Security & governance" className="w-full rounded-3xl" />
          </div>
        </div>
      </Container>
    </section>
  );
}

function PillarsBlock() {
  const items = [
    {
      icon: <Fingerprint className="h-5 w-5" />, title: "Identity & Access", description: "SAML / OIDC SSO, SCIM provisioning, role-based access, and fine-grained permission scopes across every resource.", }, {
      icon: <Activity className="h-5 w-5" />, title: "Complete Audit Trail", description: "Immutable log of every prompt, tool call, data access, and decision, searchable and exportable for audit and review.", }, {
      icon: <ClipboardList className="h-5 w-5" />, title: "Approval Workflows", description: "Human-in-the-loop gates for high-impact actions. Configurable thresholds by role, value, risk score, or outcome category.", }, {
      icon: <Lock className="h-5 w-5" />, title: "Policy Enforcement", description: "Apply domain-specific policy packs to agents, from content and PII handling to financial thresholds and regulatory rules.", }, {
      icon: <Eye className="h-5 w-5" />, title: "Observability", description: "Live telemetry on agent behavior, cost, and quality. Export to your SIEM, data warehouse, or observability stack.", }, {
      icon: <Server className="h-5 w-5" />, title: "Flexible Deployment", description: "Cloud, private cloud, VPC, or on-prem. Bring your own models, your own keys, your own data residency.", }, ];
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Six pillars of control"
          title={<>Defense in depth, <span className="text-gradient">across every layer.</span></>}
          description="A layered security model, designed with CISOs, legal, and operations leaders in mind."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <FeatureCard key={it.title} {...it} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function ComplianceBlock() {
  const items = [
    { title: "SOC 2 Type II", sub: "Annual audit, available under NDA" }, { title: "ISO 27001", sub: "Certification on roadmap 2026" }, { title: "GDPR & CCPA", sub: "Data subject rights & DPA included" }, { title: "HIPAA", sub: "BAA available on Enterprise" }, { title: "PCI-aware", sub: "Controls for regulated payments workflows" }, { title: "EU AI Act-ready", sub: "Policy packs & risk classification support" }, ];
  return (
    <section className="py-16 sm:py-20 bg-ink-50/70">
      <Container>
        <SectionHeading
          eyebrow="Compliance"
          title={<>Aligned with the standards your <span className="text-gradient">legal team already trusts.</span></>}
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((i) => (
            <div key={i.title} className="flex items-center gap-4 rounded-2xl border border-ink-200 bg-white p-6">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-50 text-brand-700 ring-1 ring-inset ring-brand-200/60">
                <ShieldCheck className="h-5 w-5" />
              </span>
              <div>
                <p className="font-semibold text-ink-900">{i.title}</p>
                <p className="text-[13.5px] text-ink-600">{i.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function DataHandling() {
  const rows = [
    { k: "Encryption in transit", v: "TLS 1.3 across every network boundary" }, { k: "Encryption at rest", v: "AES-256 with customer-managed keys (Enterprise)" }, { k: "Data residency", v: "US, EU, UK, APAC, customer-selectable" }, { k: "Tenancy isolation", v: "Strict tenant isolation, per-customer encryption contexts" }, { k: "Secrets management", v: "First-class secret vault, rotation, scoped access" }, { k: "Model provider choice", v: "Use your approved models, OpenAI, Anthropic, Bedrock, Azure, self-hosted" }, ];

  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div>
            <Eyebrow>Data handling</Eyebrow>
            <h2 className="mt-5 text-[36px] font-semibold leading-[1.05] tracking-[-0.02em] text-ink-900 sm:text-[36px]">
              Your data, <span className="text-gradient">on your terms.</span>
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-600">
              Your organization decides where data lives, which models see it, and how it's handled. AI-Harness
              never uses customer data to train models, and never co-mingles tenants.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                "We do not train on your data, ever.", "No tenant co-mingling. Strict isolation at every layer.", "Customer-managed encryption keys on Enterprise.", "Private networking and customer VPC deployments available.", ].map((i) => (
                <li key={i} className="flex gap-3 text-[15px] text-ink-800">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                  {i}
                </li>
              ))}
            </ul>
          </div>
          <div className="overflow-hidden rounded-2xl border border-ink-200 bg-white">
            {rows.map((r, i) => (
              <div
                key={r.k}
                className={`grid gap-3 border-b border-ink-100 px-5 py-4 last:border-b-0 sm:grid-cols-[1.1fr_1.5fr] sm:gap-6 sm:px-6 sm:py-5 ${
                  i % 2 === 0 ? "bg-white" : "bg-ink-50/50"
                }`}
              >
                <div className="flex items-center gap-3 text-[14px] font-semibold text-ink-900">
                  <Key className="h-4 w-4 text-brand-600" /> {r.k}
                </div>
                <div className="text-[14.5px] text-ink-700">{r.v}</div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function AgentGovernance() {
  const items = [
    "Budget ceilings per agent, team, or workspace", "Automatic throttling when an agent approaches its limit", "Policy packs for industry-specific guardrails", "Approval thresholds by value, risk, or category", "Full session replay of any agent's decisions", "Reversible actions, roll back any agent change", ];
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="rounded-[32px] bg-gradient-to-br from-brand-50 via-white to-indigo-50 p-10 sm:p-14 border border-ink-200">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
            <div>
              <Eyebrow>Agent Governance</Eyebrow>
              <h2 className="mt-5 text-[32px] font-semibold leading-[1.08] tracking-[-0.02em] text-ink-900 sm:text-[40px]">
                Human-led execution with <span className="text-gradient">guardrails teams can trust.</span>
              </h2>
              <p className="mt-5 text-[16.5px] leading-relaxed text-ink-700">
                AI-Harness keeps people in control with budget, policy, and approval controls enforced at the
                platform layer. Agents support your teams and operate within the rules you set.
              </p>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {items.map((i) => (
                <li key={i} className="flex items-start gap-3 rounded-2xl border border-ink-200 bg-white p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                  <span className="text-[14.5px] text-ink-800">{i}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}

function TrustCenter() {
  const docs = [
    { icon: <FileCheck2 className="h-5 w-5" />, title: "SOC 2 Type II Report", sub: "Available under NDA" }, { icon: <ShieldCheck className="h-5 w-5" />, title: "Security Whitepaper", sub: "Technical and control overview" }, { icon: <Globe className="h-5 w-5" />, title: "DPA & Subprocessor List", sub: "Up-to-date GDPR-aligned DPA" }, { icon: <ClipboardList className="h-5 w-5" />, title: "Questionnaires", sub: "CAIQ, SIG, custom responses" }, ];
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Trust center"
          title={<>All the <span className="text-gradient">documentation</span> your team needs.</>}
          description="Available to prospects under NDA. Customers get continuous access in-product."
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {docs.map((d) => (
            <div key={d.title} className="rounded-2xl border border-ink-200 bg-white p-6">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-700 ring-1 ring-inset ring-brand-200/60">
                {d.icon}
              </span>
              <p className="mt-5 font-semibold text-ink-900">{d.title}</p>
              <p className="mt-1 text-[13.5px] text-ink-600">{d.sub}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Button to="/contact" variant="secondary">Request trust documents</Button>
        </div>
      </Container>
    </section>
  );
}
