import {
  Building2, Factory, ShoppingBag, Umbrella, Laptop, Briefcase, Landmark, Megaphone, ArrowRight, CheckCircle2, ArrowUp,
} from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import Container from "../components/Container";
import Button from "../components/Button";
import Eyebrow from "../components/Eyebrow";
import SectionHeading from "../components/SectionHeading";
import CTASection from "../components/CTASection";
import PictureSet from "../components/PictureSet";
import Seo from "../components/Seo";
import { useFooterVisible } from "../lib/useFooterVisible";

type Industry = {
  id: string;
  name: string;
  tagline: string;
  icon: ReactNode;
  description: string;
  useCases: string[];
  metrics: Array<{ value: string; label: string }>;
  personas: string[];
};

const industries: Industry[] = [
  {
    id: "financial-services", name: "Financial Services & Banking", tagline: "From back office to front office, with controls intact.", icon: <Building2 className="h-6 w-6" />, description:
      "Automate repetitive operations, accelerate analyst workflows, and embed compliance oversight into every AI-driven decision, without compromising regulator-grade traceability.", useCases: [
      "KYC, AML, and transaction monitoring triage", "Credit underwriting support and document review", "Middle-office reconciliation and exception handling", "Client reporting, RFP, and research drafting", "Risk and audit evidence collection", ], metrics: [
      { value: "4.2×", label: "Faster KYC case processing" }, { value: "63%", label: "Lower cost-per-review" }, ], personas: ["COO", "CRO", "Head of Operations", "Chief Compliance Officer"], }, {
    id: "insurance", name: "Insurance", tagline: "Underwrite and service at the speed of the customer.", icon: <Umbrella className="h-6 w-6" />, description:
      "Bring AI agents into claims, underwriting, and policy servicing, with the clear decision trails your regulators and reinsurers expect.", useCases: [
      "First-notice-of-loss intake and triage", "Straight-through-processing for standard claims", "Underwriter copilot for risk assessment", "Broker and agent support automation", "Fraud signal aggregation and review", ], metrics: [
      { value: "45%", label: "Reduction in claim cycle time" }, { value: "2.8×", label: "Underwriter capacity" }, ], personas: ["COO", "Chief Claims Officer", "Chief Underwriting Officer"], }, {
    id: "professional-services", name: "Professional Services & Consulting", tagline: "Turn your methodologies into an always-on team.", icon: <Briefcase className="h-6 w-6" />, description:
      "Encode your firm's expertise into role-based agents that support research, proposal development, and client delivery, with utilization and margin analytics baked in.", useCases: [
      "Proposal, RFP, and pitch generation", "Research, market scans, and competitive analysis", "Engagement documentation and deliverable drafting", "Project staffing and resource orchestration", "Knowledge management and precedent reuse", ], metrics: [
      { value: "38%", label: "Faster proposal cycles" }, { value: "+22pts", label: "Engagement margin uplift" }, ], personas: ["Managing Partner", "COO", "Head of Delivery", "Knowledge Leader"], }, {
    id: "technology", name: "Technology & SaaS", tagline: "Run engineering and customer operations like a high-performance team.", icon: <Laptop className="h-6 w-6" />, description:
      "Coordinate multiple coding, research, and customer-facing agents under one roof, with engineering velocity metrics, cost visibility, and an auditable record of every change.", useCases: [
      "Coordinated multi-agent engineering workflows", "Customer support tier-1 triage and escalation", "Product analytics research and user interviews", "DevOps incident response and runbooks", "Content, marketing, and lifecycle operations", ], metrics: [
      { value: "3.5×", label: "Engineering throughput per team" }, { value: "61%", label: "Support ticket auto-resolution" }, ], personas: ["CTO", "VP Engineering", "Head of Customer Success", "CPO"], }, {
    id: "manufacturing", name: "Manufacturing & Supply Chain", tagline: "Operational intelligence that reaches the shop floor.", icon: <Factory className="h-6 w-6" />, description:
      "Embed AI agents into procurement, planning, and quality workflows. Keep the humans where they add the most value, on exceptions, strategy, and supplier relationships.", useCases: [
      "Supplier onboarding and document validation", "Purchase order exception handling", "Demand planning and forecasting analysis", "Quality report drafting and root-cause triage", "Compliance and regulatory documentation", ], metrics: [
      { value: "35%", label: "Faster supplier onboarding" }, { value: "28%", label: "Reduction in PO exceptions" }, ], personas: ["COO", "Chief Supply Chain Officer", "Head of Procurement"], }, {
    id: "retail", name: "Retail & eCommerce", tagline: "Merchandising, service, and marketing operations at scale.", icon: <ShoppingBag className="h-6 w-6" />, description:
      "Run merchandising, customer service, and marketing operations with AI teammates, while keeping your brand voice, pricing rules, and customer data fully governed.", useCases: [
      "Product content and catalog operations", "Customer service automation and escalation", "Promotional planning and A/B test coordination", "Supplier and marketplace seller operations", "Fraud and returns workflow triage", ], metrics: [
      { value: "55%", label: "Faster product onboarding" }, { value: "42%", label: "Lower cost-to-serve" }, ], personas: ["COO", "VP Customer Experience", "Head of Merchandising"], }, {
    id: "public-sector", name: "Government & Public Sector", tagline: "Modernize citizen services with full transparency.", icon: <Landmark className="h-6 w-6" />, description:
      "Bring AI into policy research, service delivery, and back-office modernization, with the immutable audit log, access controls, and data residency public institutions require.", useCases: [
      "Policy research and briefing generation", "Citizen inquiry triage and case routing", "Grant and benefits application processing", "Procurement and vendor evaluation support", "Cross-agency knowledge sharing", ], metrics: [
      { value: "44%", label: "Faster case resolution" }, { value: "100%", label: "Auditable decision trails" }, ], personas: ["CIO", "Digital Services Lead", "Program Director"], }, {
    id: "media", name: "Media, Marketing & Communications", tagline: "Industrialize creative operations without industrializing the output.", icon: <Megaphone className="h-6 w-6" />, description:
      "Scale research, content production, and campaign operations with agents that follow brand guidelines, and hand off to humans when judgment matters most.", useCases: [
      "Research briefs and audience analysis", "Content production and localization pipelines", "Campaign planning and reporting automation", "Social listening and response workflows", "PR and communications response triage", ], metrics: [
      { value: "4×", label: "Increase in campaign throughput" }, { value: "−40%", label: "Production cost per asset" }, ], personas: ["CMO", "Head of Growth", "Head of Content Ops"], },
];

export default function Industries() {
  return (
    <>
      <Seo
        path="/industries"
        title="Industries — AI-Harness across financial services, retail, healthcare and more"
        description="See how teams in financial services, retail, manufacturing, healthcare, technology, professional services, government, and media use AI-Harness to govern AI agents inside their workflows."
        keywords="AI for financial services, AI for retail, AI for manufacturing, AI for healthcare, enterprise AI by industry"
      />
      <IndustriesHero />
      <OverviewGrid />
      {industries.map((ind, i) => (
        <IndustrySection key={ind.id} industry={ind} invert={i % 2 === 1} />
      ))}
      <CrossIndustry />
      <CTASection
        title="Your industry. Your playbook. Our platform."
        description="Whichever industry you're in, AI-Harness adapts to your workflows, data, and compliance requirements, not the other way around."
      />
      <FloatingBackButton />
    </>
  );
}

function FloatingBackButton() {
  const [visible, setVisible] = useState(false);
  const footerVisible = useFooterVisible();

  useEffect(() => {
    const onScroll = () => {
      const listing = document.getElementById("all-industries");
      if (!listing) return;
      const listingBottom = listing.offsetTop + listing.offsetHeight;
      setVisible(window.scrollY > listingBottom - 80);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const shown = visible && !footerVisible;

  return (
    <a
      href="#all-industries"
      aria-hidden={!shown}
      tabIndex={shown ? 0 : -1}
      className={`fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 rounded-full border border-ink-200 bg-white px-4 py-2.5 text-sm font-semibold text-ink-700 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-ink-300 hover:text-ink-900 ${
        shown ? "opacity-100" : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <ArrowUp className="h-4 w-4" />
      All industries
    </a>
  );
}

function IndustriesHero() {
  return (
    <section className="relative overflow-hidden pb-16 pt-20">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-spotlight" />
      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>Industries</Eyebrow>
          <h1 className="mt-6 text-[36px] font-semibold leading-[1.04] tracking-[-0.02em] text-ink-900 sm:text-[60px]">
            Purpose-built for the industries where{" "}
            <span className="text-gradient">execution matters.</span>
          </h1>
          <p className="mt-5 text-lg text-ink-600 sm:text-xl">
            AI-Harness is used by operations, engineering, and customer leaders in regulated and
            high-complexity industries, where AI has to prove it can deliver and prove it can be trusted.
          </p>
        </div>
        <div className="relative mx-auto mt-14 max-w-5xl overflow-hidden rounded-[28px] border border-ink-200 bg-white shadow-lift">
          <PictureSet
            base="/industries"
            alt="Industries served by AI-Harness"
            width={1376}
            height={768}
            fetchPriority="high"
            decoding="async"
            loading="eager"
            className="block h-auto w-full"
          />
        </div>
      </Container>
    </section>
  );
}

function OverviewGrid() {
  return (
    <section id="all-industries" className="scroll-mt-24 py-16">
      <Container>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {industries.map((ind) => (
            <a
              key={ind.id}
              href={`#${ind.id}`}
              className="group flex items-center gap-3 rounded-2xl border border-ink-200 bg-white px-4 py-4 transition-all hover:-translate-y-0.5 hover:border-ink-300 hover:shadow-soft"
            >
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-50 text-brand-700 ring-1 ring-inset ring-brand-200/60">
                {ind.icon}
              </span>
              <span className="text-[14px] font-semibold text-ink-900 leading-tight">{ind.name}</span>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}

function IndustrySection({ industry, invert }: { industry: Industry; invert: boolean }) {
  return (
    <section id={industry.id} className="scroll-mt-24 py-16 sm:py-24">
      <Container>
        <div className={`grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center ${invert ? "lg:[&>*:first-child]:order-2" : ""}`}>
          <div>
            <div className="inline-flex items-center gap-3 rounded-full bg-brand-50 px-3.5 py-1.5 ring-1 ring-inset ring-brand-200/60">
              <span className="grid h-7 w-7 place-items-center rounded-lg bg-white text-brand-700 shadow-soft">
                {industry.icon}
              </span>
              <span className="text-[13px] font-semibold text-brand-800">{industry.name}</span>
            </div>
            <h2 className="mt-5 text-[32px] font-semibold leading-[1.08] tracking-[-0.02em] text-ink-900 sm:text-[40px]">
              {industry.tagline}
            </h2>
            <p className="mt-4 text-[16.5px] leading-relaxed text-ink-600">{industry.description}</p>

            <div className="mt-8">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">Where teams use AI-Harness</p>
              <ul className="mt-4 space-y-2.5">
                {industry.useCases.map((u) => (
                  <li key={u} className="flex gap-3 text-[15px] text-ink-800">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                    {u}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {industry.personas.map((p) => (
                <span key={p} className="rounded-full border border-ink-200 bg-white px-3 py-1 text-xs font-medium text-ink-700">
                  For {p}
                </span>
              ))}
            </div>
            <div className="mt-8">
              <a
                href="#all-industries"
                className="inline-flex items-center gap-2 rounded-full border border-ink-200 bg-white px-4 py-2 text-sm font-semibold text-ink-700 transition-all hover:border-ink-300 hover:text-ink-900 hover:shadow-soft"
              >
                <ArrowUp className="h-4 w-4" />
                Back to all industries
              </a>
            </div>
          </div>

          <div className="relative">
            <div aria-hidden className="absolute -inset-6 rounded-[40px] bg-gradient-to-br from-brand-100 via-white to-indigo-100 opacity-70 blur-2xl" />
            <div className="relative rounded-[24px] border border-ink-200 bg-white p-2 shadow-lift">
              <div className="rounded-[18px] bg-gradient-to-br from-ink-950 to-ink-900 p-8 text-white">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-300">Typical outcomes</p>
                <div className="mt-6 grid grid-cols-2 gap-6">
                  {industry.metrics.map((m) => (
                    <div key={m.label}>
                      <div className="text-4xl font-semibold tracking-tight text-white">{m.value}</div>
                      <p className="mt-2 text-[13px] leading-snug text-ink-400">{m.label}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-8 border-t border-white/10 pt-6">
                  <p className="text-[13px] leading-relaxed text-ink-400">
                    Backed by a governance model designed for {industry.name.toLowerCase()}, role-based access, complete audit trails, and policy-aware agent behavior.
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between px-4 py-4">
                <span className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-500">
                  Reference architecture available
                </span>
                <Button to="/demo" variant="secondary" size="sm">
                  Get the brief
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function CrossIndustry() {
  const points = [
    "Deploy in your cloud, your VPC, or on-prem, your data never leaves.", "Bring your own models and agent runtimes, no framework lock-in.", "Enterprise controls from day one, SSO, SCIM, audit, approvals.", "Built for global rollouts, multi-region, multi-tenant, multi-language.", ];

  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="rounded-[32px] border border-ink-200 bg-gradient-to-br from-brand-50 via-white to-indigo-50 p-10 sm:p-14">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div>
              <Eyebrow>Cross-industry</Eyebrow>
              <h2 className="mt-5 text-[32px] font-semibold leading-[1.08] tracking-[-0.02em] text-ink-900 sm:text-[40px]">
                The same platform, <span className="text-gradient">tuned to your world.</span>
              </h2>
              <p className="mt-5 text-[16.5px] leading-relaxed text-ink-700">
                AI-Harness is not vertical software, it's a control plane. We provide the core, templates, and policy packs; your teams and partners configure it to fit how your
                business actually operates.
              </p>
            </div>
            <ul className="space-y-3">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-3 rounded-2xl border border-ink-200 bg-white p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                  <span className="text-[15px] text-ink-800">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
