import {
  Bot, Workflow, Brain, ShieldCheck, Layers, Sparkles, Gauge, Users, Puzzle, Activity, Target, Network, ArrowRight, CheckCircle2, Zap, Database, Cog,
} from "lucide-react";
import Container from "../components/Container";
import Button from "../components/Button";
import Eyebrow from "../components/Eyebrow";
import SectionHeading from "../components/SectionHeading";
import FeatureCard from "../components/FeatureCard";
import CTASection from "../components/CTASection";
import PictureSet from "../components/PictureSet";
import Seo from "../components/Seo";

export default function Platform() {
  return (
    <>
      <Seo
        path="/platform"
        title="Platform | Agents, workflows, and governance"
        description="The AI-Harness platform: configurable AI agents, a workflow engine for projects and tasks, integrations across your stack, and enterprise governance, built for humans and AI to ship together."
        keywords="AI platform, AI agent framework, workflow engine, AI governance, enterprise AI integrations"
      />
      <PlatformHero />
      <CapabilitiesOverview />
      <AgentsSection />
      <WorkflowsSection />
      <GovernanceSection />
      <IntegrationsSection />
      <StackDiagram />
      <CTASection
        title="One platform. Every workflow. Every teammate."
        description="Bring your humans and your AI agents together in a single governed workspace. Start free, scale when you're ready."
      />
    </>
  );
}

function PlatformHero() {
  return (
    <section className="relative overflow-hidden pb-16 pt-20">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-spotlight" />
      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>The Platform</Eyebrow>
          <h1 className="mt-6 text-[36px] font-semibold leading-[1.04] tracking-[-0.02em] text-ink-900 sm:text-[60px]">
            The control plane for your{" "}
            <span className="text-gradient">AI workforce.</span>
          </h1>
          <p className="mt-5 text-lg text-ink-600 sm:text-xl">
            Everything you need to deploy, govern, and scale AI inside the way your organization
            already works, from agent creation to board-level oversight.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button to="/signup" size="lg">
              Start free
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button to="/demo" variant="secondary" size="lg">
              Book a demo
            </Button>
          </div>
        </div>
        <div className="relative mx-auto mt-14 max-w-6xl overflow-hidden rounded-[28px] border border-ink-200 bg-white shadow-lift">
          <PictureSet
            base="/hero"
            alt="AI-Harness platform overview"
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

function CapabilitiesOverview() {
  const tabs = [
    { icon: <Bot className="h-5 w-5" />, label: "Agents", id: "agents" }, { icon: <Workflow className="h-5 w-5" />, label: "Workflows", id: "workflows" }, { icon: <ShieldCheck className="h-5 w-5" />, label: "Governance", id: "governance" }, { icon: <Puzzle className="h-5 w-5" />, label: "Integrations", id: "integrations" }, ];

  return (
    <section className="py-10 sm:py-12">
      <Container>
        <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-3 rounded-2xl border border-ink-200 bg-ink-50/70 p-3">
          {tabs.map((t) => (
            <a
              key={t.id}
              href={`#${t.id}`}
              className="inline-flex items-center gap-2.5 rounded-full border border-ink-200 bg-white px-5 py-2.5 text-[15px] font-semibold text-ink-800 shadow-sm transition-all hover:-translate-y-0.5 hover:border-brand-200 hover:bg-white hover:text-ink-900 hover:shadow"
            >
              <span className="text-brand-600">{t.icon}</span>
              {t.label}
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}

function AgentsSection() {
  const capabilities = [
    {
      icon: <Users className="h-5 w-5" />, title: "Role-based agents", description:
        "Model agents after real job functions, SMEs, analysts, reviewers, executors. Each agent has clear scope and accountability.", }, {
      icon: <Sparkles className="h-5 w-5" />, title: "Skill & tool injection", description:
        "Equip agents with custom skills, tools, and API integrations. Capabilities compose and evolve without redeploying.", }, {
      icon: <Brain className="h-5 w-5" />, title: "Knowledge & data access", description:
        "Connect secure knowledge bases, document stores, and databases, with row-level permissions that mirror your organization.", }, {
      icon: <Cog className="h-5 w-5" />, title: "Lifecycle management", description:
        "Version, review, promote, and retire agents with confidence. Roll back bad changes instantly, no redeploy required.", }, {
      icon: <Network className="h-5 w-5" />, title: "Org chart & reporting lines", description:
        "Agents have managers, peers, and reports, just like humans. Delegation, escalation, and accountability flow naturally.", }, {
      icon: <Zap className="h-5 w-5" />, title: "Bring your own runtime", description:
        "Use the models and agent runtimes your organization has already approved. AI-Harness is the control plane, not another framework.", }, ];

  return (
    <section id="agents" className="scroll-mt-24 py-12 sm:py-14">
      <Container>
        <SectionHeading
          eyebrow="AI Agents"
          title={<>Agents that behave like <span className="text-gradient">accountable team members.</span></>}
          description="Define who they are, what they can do, who they report to, and where their authority ends. Then let them get to work."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((c) => (
            <FeatureCard key={c.title} {...c} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function WorkflowsSection() {
  return (
    <section id="workflows" className="scroll-mt-24 bg-ink-50/70 py-16 sm:py-20">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Workflow & Project Engine"
              title={<>Structured work, <span className="text-gradient">fluid execution.</span></>}
              description="Define the stages and rules that matter. Let tasks flow automatically to the best-fit teammate, human or AI."
            />
            <ul className="mt-8 space-y-4">
              {[
                { t: "Configurable project stages", d: "Design custom lifecycles for each type of work, from intake to delivery." }, { t: "Intelligent task routing", d: "Rule-based and skill-aware assignment across humans, AI, and hybrid teams." }, { t: "Goal alignment", d: "Every task traces back to a parent initiative so priorities never drift." }, { t: "Automation & heartbeats", d: "Schedule recurring work, trigger from events, or run agents continuously." }, ].map((i) => (
                <li key={i.t} className="flex gap-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                  <div>
                    <p className="font-semibold text-ink-900">{i.t}</p>
                    <p className="mt-1 text-[15px] leading-relaxed text-ink-600">{i.d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative overflow-hidden rounded-[28px] border border-ink-200 bg-white shadow-lift">
            <PictureSet
              base="/workflow"
              alt="AI-Harness workflow board"
              width={1376}
              height={768}
              loading="lazy"
              decoding="async"
              className="block h-auto w-full"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

function GovernanceSection() {
  const items = [
    { icon: <Activity className="h-5 w-5" />, title: "Full action telemetry", description: "Every prompt, tool call, and agent decision is captured and searchable." }, { icon: <ShieldCheck className="h-5 w-5" />, title: "Approval gates", description: "Require human review before high-impact or high-spend actions are executed." }, { icon: <Target className="h-5 w-5" />, title: "Budget & cost guardrails", description: "Set spend ceilings per agent, team, or project. Agents halt before they overrun." }, { icon: <Layers className="h-5 w-5" />, title: "Role-based access", description: "Granular permissions that mirror your org, not a flat admin/user toggle." }, ];

  return (
    <section id="governance" className="scroll-mt-24 py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Governance"
          title={<>Oversight that scales with <span className="text-gradient">your ambition.</span></>}
          description="Scale AI across the business without scaling risk. Board-level visibility, department-level control, task-level accountability."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <FeatureCard key={it.title} {...it} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function IntegrationsSection() {
  const categories = [
    {
      title: "Communication", tools: ["Slack", "Microsoft Teams", "Google Chat", "Email"], }, {
      title: "Work & Tickets", tools: ["Jira", "Linear", "Asana", "ServiceNow", "Zendesk"], }, {
      title: "Data & Docs", tools: ["Snowflake", "Databricks", "Google Drive", "SharePoint", "Notion"], }, {
      title: "CRM & Sales", tools: ["Salesforce", "HubSpot", "Dynamics 365"], }, {
      title: "Developer", tools: ["GitHub", "GitLab", "Bitbucket", "PagerDuty"], }, {
      title: "Identity", tools: ["Okta", "Azure AD", "Google Workspace SSO"], }, ];

  return (
    <section id="integrations" className="scroll-mt-24 bg-ink-50/70 py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Integrations"
          title={<>Meets your stack <span className="text-gradient">where it lives.</span></>}
          description="Native connectors, webhooks, and an open API so AI-Harness can plug into any system of record."
        />
        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((c) => (
            <div key={c.title} className="rounded-2xl border border-ink-200 bg-white p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-brand-700">{c.title}</p>
              <ul className="mt-4 space-y-2">
                {c.tools.map((t) => (
                  <li key={t} className="flex items-center gap-3 text-[15px] text-ink-800">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-500" /> {t}
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

function StackDiagram() {
  const layers = [
    {
      tone: "dark", label: "Governance Layer", description: "Audit, approvals, RBAC, policy, budgets, reporting", icons: [<ShieldCheck key="s" className="h-4 w-4" />, <Activity key="a" className="h-4 w-4" />, <Gauge key="g" className="h-4 w-4" />], }, {
      tone: "light", label: "Workflow & Collaboration", description: "Projects, tasks, routing, context, comments, approvals", icons: [<Workflow key="w" className="h-4 w-4" />, <Users key="u" className="h-4 w-4" />, <Target key="t" className="h-4 w-4" />], }, {
      tone: "light", label: "Agent Framework", description: "Agent creation, skills, tools, lifecycle, org chart", icons: [<Bot key="b" className="h-4 w-4" />, <Sparkles key="sp" className="h-4 w-4" />, <Cog key="c" className="h-4 w-4" />], }, {
      tone: "light", label: "Infrastructure & Integrations", description: "Your models, data, identity, and systems of record", icons: [<Database key="d" className="h-4 w-4" />, <Puzzle key="p" className="h-4 w-4" />, <Network key="n" className="h-4 w-4" />], }, ];

  return (
    <section className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Architecture"
          title={<>A layered platform, <span className="text-gradient">built for enterprise.</span></>}
          description="Four purpose-built layers. Open at the bottom, accountable at the top."
        />
        <div className="mx-auto mt-14 max-w-4xl space-y-3">
          {layers.map((l, i) => {
            const dark = l.tone === "dark";
            return (
              <div
                key={l.label}
                className={`group flex items-center justify-between gap-6 rounded-2xl border px-6 py-5 transition-all ${
                  dark
                    ? "border-transparent bg-ink-950 text-white shadow-lift"
                    : "border-ink-200 bg-white hover:border-ink-300"
                }`}
                style={{ marginLeft: `${i * 10}px`, marginRight: `${i * 10}px` }}
              >
                <div>
                  <p className={`text-xs font-semibold uppercase tracking-[0.14em] ${dark ? "text-brand-300" : "text-brand-700"}`}>
                    Layer {i + 1}
                  </p>
                  <p className={`mt-1 text-lg font-semibold ${dark ? "text-white" : "text-ink-900"}`}>{l.label}</p>
                  <p className={`mt-1 text-[14px] ${dark ? "text-ink-400" : "text-ink-600"}`}>{l.description}</p>
                </div>
                <div className="flex shrink-0 items-center gap-2">
                  {l.icons.map((icon, idx) => (
                    <span
                      key={idx}
                      className={`grid h-9 w-9 place-items-center rounded-xl ${dark ? "bg-white/10 text-white" : "bg-brand-50 text-brand-700"}`}
                    >
                      {icon}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
