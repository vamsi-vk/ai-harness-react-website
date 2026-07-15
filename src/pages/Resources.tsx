import { ArrowRight, BookOpen, FileText, Newspaper, Play, Sparkles } from "lucide-react";
import Container from "../components/Container";
import Button from "../components/Button";
import Eyebrow from "../components/Eyebrow";
import SectionHeading from "../components/SectionHeading";
import CTASection from "../components/CTASection";

export default function Resources() {
  return (
    <>
      <Hero />
      <Featured />
      <Library />
      <Newsletter />
      <CTASection title="See AI-Harness in action." description="Start your free account, or talk to our team about a guided proof of value." />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden pb-10 pt-20">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-spotlight" />
      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>Resources</Eyebrow>
          <h1 className="mt-6 text-[36px] font-semibold leading-[1.04] tracking-[-0.02em] text-ink-900 sm:text-[60px]">
            The playbook for <span className="text-gradient">AI-era operations.</span>
          </h1>
          <p className="mt-5 text-lg text-ink-600 sm:text-xl">
            Research, practical guides, customer stories, and product updates, made for the leaders rolling
            AI out to the business.
          </p>
        </div>
      </Container>
    </section>
  );
}

function Featured() {
  const items = [
    {
      tag: "Guide", title: "The CFO's guide to AI unit economics", summary: "How to budget, allocate, and measure ROI when AI agents become line items in your P&L.", icon: <FileText className="h-4 w-4" />, }, {
      tag: "Research", title: "2026 State of the AI Workforce", summary: "500+ enterprise leaders on deployment patterns, governance, and the workflows AI is owning.", icon: <Newspaper className="h-4 w-4" />, }, {
      tag: "Customer Story", title: "How Helix Financial scaled AI across KYC", summary: "A step-by-step look at the rollout that cut case processing time by 4.2× in 90 days.", icon: <Sparkles className="h-4 w-4" />, }, ];
  return (
    <section id="blog" className="py-16">
      <Container>
        <div className="grid gap-5 lg:grid-cols-3">
          {items.map((i, idx) => (
            <div
              key={i.title}
              className={`relative flex flex-col overflow-hidden rounded-3xl border p-8 transition-all hover:-translate-y-0.5 hover:shadow-lift ${
                idx === 0
                  ? "border-transparent bg-gradient-to-br from-ink-950 to-ink-900 text-white"
                  : "border-ink-200 bg-white"
              }`}
            >
              <span
                className={`inline-flex w-fit items-center gap-2 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] ${
                  idx === 0 ? "bg-white/10 text-brand-200" : "bg-brand-50 text-brand-700"
                }`}
              >
                {i.icon}
                {i.tag}
              </span>
              <h3 className={`mt-6 text-xl font-semibold leading-tight ${idx === 0 ? "text-white" : "text-ink-900"}`}>
                {i.title}
              </h3>
              <p className={`mt-3 text-[15px] leading-relaxed ${idx === 0 ? "text-ink-300" : "text-ink-600"}`}>
                {i.summary}
              </p>
              <div className={`mt-auto pt-6 text-[14px] font-semibold ${idx === 0 ? "text-white" : "text-brand-700"}`}>
                Read more <ArrowRight className="ml-1 inline h-4 w-4" />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Library() {
  const categories = [
    {
      title: "Documentation", icon: <BookOpen className="h-5 w-5" />, items: ["Quickstart guide", "Agent framework reference", "Workflow modeling", "Security & governance controls", "REST & Webhooks API"], id: "docs", }, {
      title: "Guides & Playbooks", icon: <FileText className="h-5 w-5" />, items: [
        "Rolling out AI in financial services", "Building an internal agent catalog", "Cost & budget governance patterns", "Human-in-the-loop design patterns", ], }, {
      title: "Customer Stories", icon: <Sparkles className="h-5 w-5" />, items: [
        "Helix Financial, KYC transformation", "Meridian Health, clinical ops at scale", "Northforge, engineering velocity", "Vantage BPO, contact center uplift", ], id: "stories", }, {
      title: "Webinars & Video", icon: <Play className="h-5 w-5" />, items: [
        "Executive intro to AI-Harness (18 min)", "Governance deep-dive for CISOs", "Designing an AI-native operating model", "Partner & integration showcase", ], }, {
      title: "Changelog", icon: <Newspaper className="h-5 w-5" />, items: [
        "Multi-region data residency", "Approval workflow templates", "Skill marketplace (beta)", "Budget guardrails 2.0", ], id: "changelog", }, ];

  return (
    <section className="py-20">
      <Container>
        <SectionHeading
          eyebrow="The library"
          title={<>Everything you need, <span className="text-gradient">in one place.</span></>}
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((c) => (
            <div id={c.id} key={c.title} className="scroll-mt-24 rounded-3xl border border-ink-200 bg-white p-7">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-50 text-brand-700 ring-1 ring-inset ring-brand-200/60">
                  {c.icon}
                </span>
                <h3 className="text-lg font-semibold text-ink-900">{c.title}</h3>
              </div>
              <ul className="mt-5 space-y-2.5">
                {c.items.map((i) => (
                  <li key={i}>
                    <a
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      className="flex items-center justify-between gap-4 rounded-lg px-2 py-1.5 text-[14.5px] text-ink-700 hover:bg-ink-50 hover:text-ink-900"
                    >
                      <span>{i}</span>
                      <ArrowRight className="h-3.5 w-3.5 text-ink-400" />
                    </a>
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

function Newsletter() {
  return (
    <section className="py-20">
      <Container>
        <div className="mx-auto max-w-4xl rounded-[28px] border border-ink-200 bg-gradient-to-br from-brand-50 via-white to-brand-50 p-10 sm:p-14">
          <div className="grid gap-8 sm:grid-cols-[1.2fr_1fr] sm:items-center">
            <div>
              <Eyebrow>Newsletter</Eyebrow>
              <h3 className="mt-4 text-3xl font-semibold tracking-tight text-ink-900">The AI Workforce Digest</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-600">
                A monthly read on how modern operations teams are rolling out AI, benchmarks, patterns, and
                what's working (and what isn't).
              </p>
            </div>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col gap-3 sm:flex-row"
            >
              <input
                type="email"
                required
                placeholder="you@company.com"
                className="h-11 flex-1 rounded-full border border-ink-200 bg-white px-4 text-[14.5px] outline-none placeholder:text-ink-400 focus:border-brand-500"
              />
              <Button>Subscribe</Button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
