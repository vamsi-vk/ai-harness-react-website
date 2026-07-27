import { Navigate, useParams } from "react-router-dom";
import {
  ArrowRight,
  ArrowLeft,
  Check,
  Clock3,
  FileText,
  Globe2,
  ShieldCheck,
  Users,
} from "lucide-react";
import Container from "../components/Container";
import Button from "../components/Button";
import Eyebrow from "../components/Eyebrow";
import Seo from "../components/Seo";
import { DESKS, isDeskId, type DeskConfig } from "../lib/desks";

type PodMember = {
  kind: "human" | "ai";
  name: string;
  body: string;
};

type ServicePackage = {
  jp: string;
  title: string;
  body: string;
  features: string[];
};

type WorkforceMember = {
  initials: string;
  name: string;
  kind: "human" | "ai";
  gradient: string;
};

const monthlyReportRows: Array<{ label: string; value: string }> = [
  { label: "Qualified meetings booked", value: "14" },
  { label: "Active opportunities", value: "9" },
  { label: "Distributor candidates in diligence", value: "3" },
  { label: "Trade show follow-ups completed", value: "187" },
];

const humans: WorkforceMember[] = [
  {
    initials: "KT",
    name: "Bilingual Account Director",
    kind: "human",
    gradient: "from-success-400 to-success-500",
  },
  {
    initials: "JM",
    name: "US Sales Lead",
    kind: "human",
    gradient: "from-brand-400 to-brand-500",
  },
];

function getAgents(desk: DeskConfig): WorkforceMember[] {
  return [
    {
      initials: "RA",
      name: "Account Research Agent",
      kind: "ai",
      gradient: "from-brand-400 to-brand-500",
    },
    {
      initials: "FU",
      name: "Trade Show Follow-up Agent",
      kind: "ai",
      gradient: "from-brand-400 to-brand-500",
    },
    {
      initials: "CR",
      name: "CRM & Pipeline Agent",
      kind: "ai",
      gradient: "from-brand-500 to-brand-600",
    },
    {
      initials: "RA",
      name: `${desk.reportingAgentNative} Reporting Agent`,
      kind: "ai",
      gradient: "from-brand-500 to-brand-600",
    },
  ];
}

function getPodMembers(desk: DeskConfig): PodMember[] {
  return [
    {
      kind: "human",
      name: "Bilingual Account Director",
      body: `Single point of contact; communicates with HQ in ${desk.language}.`,
    },
    {
      kind: "human",
      name: "US Sales Lead",
      body: "Runs meetings and negotiations with American buyers and distributors.",
    },
    {
      kind: "ai",
      name: "Account Research Agent",
      body: "Maps target accounts, buyers, and competitors at scale.",
    },
    {
      kind: "ai",
      name: "Trade Show Follow-up Agent",
      body: "Researches badge scans and drafts follow-ups within 72 hours.",
    },
    {
      kind: "ai",
      name: "CRM & Pipeline Agent",
      body: "Logs every touch; provides real-time pipeline visibility.",
    },
    {
      kind: "ai",
      name: `${desk.reportingAgentNative} Reporting Agent`,
      body: `Assembles formal monthly reports in ${desk.language} from the audit trail.`,
    },
  ];
}

function getServicePackages(desk: DeskConfig): ServicePackage[] {
  const [a, b, c] = desk.servicePackageNativeLabels;
  return [
    {
      jp: a,
      title: "US Market Readiness Assessment",
      body:
        "A candid evaluation before you invest: pricing, certifications, localization, buyer landscape, and a go / fix-first / no-go recommendation.",
      features: [
        "4–6 week fixed-scope project",
        "Agent-accelerated market mapping",
        "Bilingual readiness report",
      ],
    },
    {
      jp: b,
      title: "Pipeline Building & Sales Representation",
      body:
        "Your outsourced US sales pod: targeted outreach, qualified meetings, distributor sourcing, and deal support through signature, under your brand.",
      features: [
        "Monthly retainer, 6-month minimum",
        "KPIs: meetings booked, partners signed",
        "Full pod transparency on the platform",
      ],
    },
    {
      jp: c,
      title: "Trade Show Activation",
      body:
        "Pre-show meeting scheduling, bilingual booth support, and the disciplined 90-day, agent-driven follow-up that turns badge scans into revenue.",
      features: [
        "Pre-booked meetings before doors open",
        "100% of leads worked within 72 hours",
        "90-day follow-up to first orders",
      ],
    },
  ];
}

function getStats(desk: DeskConfig) {
  return [
    {
      value: "72h",
      label: "Trade show leads followed up, all of them",
      icon: <Clock3 className="h-4 w-4" />,
    },
    {
      value: "24/7",
      label: `Agents work ${desk.timezoneAbbr} and Pacific hours`,
      icon: <Globe2 className="h-4 w-4" />,
    },
    {
      value: "Full",
      label: "Audit trail on humans and agents",
      icon: <ShieldCheck className="h-4 w-4" />,
    },
    {
      value: "Monthly",
      label: `Formal written reports to HQ, in ${desk.language}`,
      icon: <FileText className="h-4 w-4" />,
    },
  ];
}

function getGovernancePoints(desk: DeskConfig): string[] {
  return [
    "Immutable audit trail across humans and agents",
    "Approval gates and budget limits on every agent",
    "Shared CRM access: your pipeline, visible in real time",
    desk.fiscalLine,
  ];
}

export default function InternationalCountry() {
  const { country } = useParams<{ country: string }>();

  if (!country || !isDeskId(country)) {
    // Unknown country in the URL — bounce back to the overview rather than
    // 404. The overview's country-picker is the source of truth for valid
    // selections, so sending the user there gives a recoverable experience.
    return <Navigate to="/international-businesses" replace />;
  }

  const desk = DESKS[country];

  return (
    <>
      <Seo
        path={`/international-businesses/${desk.id}`}
        title={`${desk.name} | International Businesses`}
        description={`${desk.name} helps ${desk.countryAdjective} companies build US pipeline through bilingual account directors and governed AI agents: qualified meetings, channel partners, and monthly reporting in ${desk.language}, all on one platform.`}
        keywords={`${desk.name}, AI managed service, US revenue, bilingual account director, AI agents ${desk.countryAdjective}, AI-Harness international`}
        breadcrumbs={[
          { label: "Solutions", path: "/solutions/enterprise" },
          { label: "International Businesses", path: "/international-businesses" },
          { label: desk.name, path: `/international-businesses/${desk.id}` },
        ]}
      />
      <Hero desk={desk} />
      <StatsRow desk={desk} />
      <Challenges desk={desk} />
      <StrategySection desk={desk} />
      <HybridPod desk={desk} />
      <ServicePackages desk={desk} />
      <Governance desk={desk} />
      <GetStarted desk={desk} />
    </>
  );
}

function Hero({ desk }: { desk: DeskConfig }) {
  return (
    <section className="relative overflow-hidden pb-10 pt-10 sm:pb-12 sm:pt-14">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-spotlight" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grid opacity-60 [mask-image:linear-gradient(to_bottom,white_0%,white_55%,transparent_100%)]"
      />
      <Container className="relative">
        <BackLink />

        <div className="mt-7 grid items-center gap-10 lg:grid-cols-[1fr_1.05fr]">
          <div>
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-1.5 text-[12.5px] font-medium text-ink-500"
            >
              <span>International Businesses</span>
              <span className="text-ink-300">·</span>
              <span className="text-ink-900">{desk.name}</span>
            </nav>

            <div className="mt-5">
              <Eyebrow>
                <span className="mr-1 rounded bg-white/40 px-1 py-[1px] text-[9.5px] font-bold ring-1 ring-inset ring-brand-200/60">
                  {desk.nativeCountry}
                </span>
                {desk.name}
              </Eyebrow>
            </div>

            <h1 className="mt-5 text-[34px] font-semibold leading-[1.05] tracking-[-0.02em] text-ink-900 sm:text-[48px]">
              Your US revenue team
              <br />
              <span className="text-gradient">for {desk.countryName}.</span>
            </h1>

            <p className="mt-5 max-w-lg text-[15.5px] leading-relaxed text-ink-600 sm:text-[16px]">
              {desk.marketEntrySummary}
            </p>

            <div className="mt-7 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
              <Button
                to={`/international-businesses/${desk.id}/consultation`}
                size="md"
                className="bg-gradient-to-r from-brand-600 to-brand-700 text-white shadow-lift hover:from-brand-700 hover:to-brand-800"
              >
                Talk to the {desk.name}
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button to="/platform" variant="secondary" size="md">
                See the platform
              </Button>
            </div>

            <p className="mt-6 text-[13px] text-ink-500">
              {desk.timezoneAbbr}-friendly hours · Bay Area based
            </p>
          </div>

          <div className="w-full">
            <WorkspaceCard desk={desk} />
          </div>
        </div>
      </Container>
    </section>
  );
}

function BackLink() {
  return (
    <Button
      to="/international-businesses"
      variant="secondary"
      size="sm"
      className="bg-white/80 backdrop-blur"
    >
      <ArrowLeft className="h-3.5 w-3.5" />
      Back to International Businesses
    </Button>
  );
}

function WorkspaceCard({ desk }: { desk: DeskConfig }) {
  const agents = getAgents(desk);
  return (
    <div className="relative">
      <div
        aria-hidden
        className="absolute -inset-6 rounded-[40px] bg-gradient-to-br from-brand-200/60 via-white to-brand-200/60 opacity-80 blur-2xl"
      />
      <div className="relative overflow-hidden rounded-[20px] border border-ink-900/80 bg-gradient-to-br from-ink-950 via-ink-900 to-brand-950 shadow-lift">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-brand-500/30 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-16 -left-10 h-40 w-40 rounded-full bg-brand-500/25 blur-3xl"
        />

        <div className="relative flex items-center justify-between border-b border-white/10 px-4 py-2.5">
          <div className="flex items-center gap-1.5 text-[11px] font-medium text-ink-400">
            <span className="text-ink-300">ai-harness.com</span>
            <span className="text-ink-500">/</span>
            <span>workspace</span>
            <span className="text-ink-500">/</span>
            <span className="text-white">{desk.id}-desk</span>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-success-500/15 px-2 py-0.5 text-[9.5px] font-semibold uppercase tracking-[0.08em] text-success-300 ring-1 ring-inset ring-success-400/30">
            <span className="h-1.5 w-1.5 rounded-full bg-success-400 animate-live-dot" />
            Hybrid pod · Live
          </span>
        </div>

        <div className="relative space-y-3.5 px-4 py-4">
          <Group
            label="Humans · Relationships & Judgment"
            tone="emerald"
            members={humans}
          />
          <Group
            label="Agents · Governed Execution"
            tone="brand"
            members={agents}
          />
        </div>

        <div className="relative flex items-center justify-between border-t border-white/10 px-4 py-2.5 text-[11px]">
          <span className="font-medium text-ink-400">Audit trail</span>
          <span className="inline-flex items-center gap-1.5 font-semibold text-success-300">
            <span className="h-1.5 w-1.5 rounded-full bg-success-400 animate-live-dot" />
            Active on every action
          </span>
        </div>
      </div>
    </div>
  );
}

function Group({
  label,
  tone,
  members,
}: {
  label: string;
  tone: "emerald" | "brand";
  members: WorkforceMember[];
}) {
  return (
    <div>
      <p
        className={`text-[9.5px] font-semibold uppercase tracking-[0.14em] ${
          tone === "emerald" ? "text-success-300/90" : "text-brand-300"
        }`}
      >
        {label}
      </p>
      <ul className="mt-2 space-y-1.5">
        {members.map((m) => (
          <li
            key={`${m.initials}-${m.name}`}
            className="flex items-center gap-2.5 rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-1.5 backdrop-blur-sm"
          >
            <span
              className={`grid h-7 w-7 shrink-0 place-items-center rounded-md bg-gradient-to-br ${m.gradient} text-[10.5px] font-semibold text-white ${
                m.kind === "ai" ? "animate-agent-ring" : ""
              }`}
            >
              {m.initials}
            </span>
            <span className="flex-1 text-[12.5px] font-medium text-white">
              {m.name}
            </span>
            <span
              className={`inline-flex items-center rounded px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-[0.08em] ring-1 ring-inset ${
                m.kind === "human"
                  ? "bg-white/10 text-ink-100 ring-white/15"
                  : "bg-brand-500/15 text-brand-200 ring-brand-400/30"
              }`}
            >
              {m.kind === "human" ? "Human" : "AI"}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function StatsRow({ desk }: { desk: DeskConfig }) {
  const stats = getStats(desk);
  return (
    <section className="pb-16 sm:pb-20">
      <Container>
        <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-gradient-to-br from-ink-950 via-ink-900 to-brand-950 px-5 py-5 shadow-lift sm:px-7 sm:py-6">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-brand-500/25 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-24 -left-16 h-60 w-60 rounded-full bg-brand-500/20 blur-3xl"
          />
          <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid-dark opacity-50" />

          <div className="relative grid gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-ink-950/80 px-5 py-4 sm:px-5 sm:py-4">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-white/10 text-brand-200">
                  {s.icon}
                </span>
                <div className="mt-2.5 text-[32px] font-semibold leading-none tracking-tight text-white sm:text-[38px]">
                  {s.value}
                </div>
                <p className="mt-2 text-[12.5px] leading-snug text-ink-300">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function Challenges({ desk }: { desk: DeskConfig }) {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="max-w-3xl">
          <Eyebrow>The challenges</Eyebrow>
          <h2 className="mt-5 text-[34px] font-semibold leading-[1.05] tracking-[-0.02em] text-ink-900 sm:text-[44px]">
            What {desk.countryAdjective} companies actually run into{" "}
            <span className="text-gradient">entering the US market.</span>
          </h2>
          <p className="mt-5 max-w-2xl text-[15.5px] leading-relaxed text-ink-600">
            These aren't strategy-deck abstractions. They're the specific
            failure modes we've watched {desk.countryName}-based companies hit
            during US market entry, and the reasons the {desk.name} exists.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {desk.painPoints.map((p, i) => (
            <article
              key={p.title}
              className="group flex flex-col rounded-2xl border border-ink-200 bg-white p-6 shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:border-ink-300 hover:shadow-lift sm:p-7"
            >
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand-50 font-mono text-[12px] font-semibold text-brand-700 ring-1 ring-inset ring-brand-200/60">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-[18px] font-semibold leading-snug tracking-tight text-ink-900">
                {p.title}
              </h3>
              <p className="mt-3 text-[14.5px] leading-relaxed text-ink-600">{p.body}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

function StrategySection({ desk }: { desk: DeskConfig }) {
  return (
    <section className="bg-ink-50/60 py-16 sm:py-20">
      <Container>
        <div className="max-w-3xl">
          <Eyebrow>Our US strategy</Eyebrow>
          <h2 className="mt-5 text-[34px] font-semibold leading-[1.05] tracking-[-0.02em] text-ink-900 sm:text-[44px]">
            How we approach US market entry{" "}
            <span className="text-gradient">for {desk.countryName}.</span>
          </h2>
          <p className="mt-5 max-w-2xl text-[15.5px] leading-relaxed text-ink-600">
            One playbook per country, not one global template. Below is the
            specific {desk.countryAdjective} GTM motion we run, refined from
            actual engagements with {desk.countryName}-headquartered companies.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {desk.strategies.map((s) => (
            <article
              key={s.title}
              className="flex gap-4 rounded-2xl border border-ink-200 bg-white p-6 shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:border-ink-300 hover:shadow-lift sm:p-7"
            >
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-700 ring-1 ring-inset ring-brand-200/60">
                <ArrowRight className="h-4 w-4" />
              </span>
              <div className="min-w-0">
                <h3 className="text-[17px] font-semibold leading-snug tracking-tight text-ink-900">
                  {s.title}
                </h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-ink-600">{s.body}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

function HybridPod({ desk }: { desk: DeskConfig }) {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center lg:gap-14">
          <div>
            <Eyebrow>The hybrid pod</Eyebrow>
            <h2 className="mt-5 text-[34px] font-semibold leading-[1.05] tracking-[-0.02em] text-ink-900 sm:text-[44px]">
              The team behind your{" "}
              <span className="text-gradient">US pipeline.</span>
            </h2>
            <p className="mt-5 max-w-md text-[15.5px] leading-relaxed text-ink-600">
              Every {desk.name} engagement deploys a hybrid pod on the AI-Harness
              platform. Bilingual humans own first meetings and cultural judgment.
              Role-based AI agents handle the high-volume work (research,
              follow-up, CRM hygiene, and reporting) under the same governance
              your HQ expects.
            </p>

            <div className="mt-7 inline-flex items-center gap-3 rounded-2xl border border-ink-900/90 bg-gradient-to-br from-ink-950 to-ink-900 px-4 py-3 shadow-lift">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand-500/20 text-brand-300 ring-1 ring-inset ring-brand-400/30">
                <ShieldCheck className="h-4 w-4" />
              </span>
              <div className="text-left">
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-300">
                  6 specialists · 1 governed pod
                </p>
                <p className="text-[12.5px] text-ink-300">
                  Every action logged on AI-Harness
                </p>
              </div>
            </div>
          </div>

          <PodRoster desk={desk} />
        </div>
      </Container>
    </section>
  );
}

function PodRoster({ desk }: { desk: DeskConfig }) {
  const podMembers = getPodMembers(desk);
  const reportingAgentName = `${desk.reportingAgentNative} Reporting Agent`;
  const gradients: Record<string, string> = {
    "Bilingual Account Director": "from-success-400 to-success-500",
    "US Sales Lead": "from-brand-400 to-brand-500",
    "Account Research Agent": "from-brand-400 to-brand-500",
    "Trade Show Follow-up Agent": "from-brand-400 to-brand-500",
    "CRM & Pipeline Agent": "from-brand-500 to-brand-600",
    [reportingAgentName]: "from-brand-500 to-brand-600",
  };

  return (
    <div className="relative">
      <div
        aria-hidden
        className="absolute -inset-4 rounded-[32px] bg-gradient-to-br from-brand-200/60 via-white to-brand-200/60 opacity-80 blur-2xl"
      />
      <div className="relative overflow-hidden rounded-[22px] border border-ink-900/80 bg-gradient-to-br from-ink-950 via-ink-900 to-brand-950 shadow-lift">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-brand-500/30 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-24 -left-16 h-52 w-52 rounded-full bg-brand-500/25 blur-3xl"
        />

        <div className="relative flex items-center justify-between border-b border-white/10 px-5 py-4">
          <div className="flex items-center gap-2">
            <span className="grid h-7 w-7 place-items-center rounded-md bg-brand-500/20 text-brand-300 ring-1 ring-inset ring-brand-400/30">
              <Users className="h-3.5 w-3.5" />
            </span>
            <p className="text-[13px] font-semibold tracking-tight text-white">
              Your hybrid pod
            </p>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-success-500/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-success-300 ring-1 ring-inset ring-success-400/30">
            <span className="h-1.5 w-1.5 rounded-full bg-success-400 animate-live-dot" />
            On platform
          </span>
        </div>

        <ul className="relative divide-y divide-white/10">
          {podMembers.map((m) => (
            <li
              key={m.name}
              className="flex items-start gap-3.5 px-5 py-4 transition-colors hover:bg-white/[0.03]"
            >
              <span
                className={`mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-gradient-to-br ${
                  gradients[m.name] ?? "from-brand-400 to-brand-500"
                } text-[12px] font-semibold text-white shadow-soft ${
                  m.kind === "ai" ? "animate-agent-ring" : ""
                }`}
              >
                {m.name
                  .replace(/[^A-Za-z ]/g, "")
                  .split(" ")
                  .filter(Boolean)
                  .slice(0, 2)
                  .map((w) => w[0])
                  .join("")
                  .toUpperCase() || "AI"}
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-3">
                  <p className="truncate text-[14px] font-semibold text-white">{m.name}</p>
                  <span
                    className={`inline-flex shrink-0 items-center rounded px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-[0.08em] ring-1 ring-inset ${
                      m.kind === "human"
                        ? "bg-white/10 text-ink-100 ring-white/15"
                        : "bg-brand-500/15 text-brand-200 ring-brand-400/30"
                    }`}
                  >
                    {m.kind === "human" ? "Human" : "AI"}
                  </span>
                </div>
                <p className="mt-1 text-[13px] leading-relaxed text-ink-300">{m.body}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="relative flex items-center justify-between border-t border-white/10 px-5 py-3 text-[11.5px]">
          <span className="font-medium text-ink-400">
            Audit trail · governed by AI-Harness
          </span>
          <span className="inline-flex items-center gap-1.5 font-semibold text-success-300">
            <span className="h-1.5 w-1.5 rounded-full bg-success-400 animate-live-dot" />
            Active on every action
          </span>
        </div>
      </div>
    </div>
  );
}

function ServicePackages({ desk }: { desk: DeskConfig }) {
  const servicePackages = getServicePackages(desk);
  return (
    <section className="bg-ink-50/60 py-16 sm:py-20">
      <Container>
        <div className="max-w-3xl">
          <Eyebrow>Service packages</Eyebrow>
          <h2 className="mt-5 text-[34px] font-semibold leading-[1.05] tracking-[-0.02em] text-ink-900 sm:text-[48px]">
            Three ways to engage the{" "}
            <span className="text-gradient">{desk.name}.</span>
          </h2>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {servicePackages.map((pkg) => (
            <article
              key={pkg.title}
              className="flex flex-col rounded-2xl border border-ink-200 bg-white p-6 shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:border-ink-300 hover:shadow-lift sm:p-7"
            >
              <p className="text-sm font-medium text-ink-500">
                {pkg.jp}
              </p>
              <h3 className="mt-3 text-[20px] font-semibold leading-snug tracking-tight text-ink-900">
                {pkg.title}
              </h3>
              <p className="mt-3 text-[14.5px] leading-relaxed text-ink-600">{pkg.body}</p>
              <ul className="mt-auto space-y-2 pt-6">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-[13.5px] text-ink-800">
                    <ArrowRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-600" />
                    <span className="leading-snug">{f}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Governance({ desk }: { desk: DeskConfig }) {
  const governancePoints = getGovernancePoints(desk);
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="relative overflow-hidden rounded-[32px] bg-ink-950 px-6 py-12 sm:px-12 sm:py-16 md:px-14">
          <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid-dark opacity-50" />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-brand-600/30 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-28 -left-20 h-72 w-72 rounded-full bg-brand-500/20 blur-3xl"
          />

          <div className="relative grid gap-12 lg:grid-cols-[1.05fr_1fr] lg:items-center">
            <div>
              <Eyebrow tone="dark">Governance · {desk.governanceEyebrowNative}</Eyebrow>
              <h2 className="mt-5 text-[32px] font-semibold leading-[1.05] tracking-[-0.02em] text-white sm:text-[44px]">
                Accountability your HQ can inspect,{" "}
                <span className="text-gradient">not just trust.</span>
              </h2>
              <p className="mt-5 max-w-lg text-[15.5px] leading-relaxed text-ink-300">
                {desk.countryAdjective} companies demand documentation, and most
                US vendors can't provide it. {desk.name} runs on the AI-Harness
                platform, so every action by humans and agents is captured in
                an immutable audit trail. Monthly reports are generated from
                actual work records, not consultant recollection.
              </p>
              <ul className="mt-8 space-y-3.5">
                {governancePoints.map((p) => (
                  <li
                    key={p}
                    className="flex items-start gap-3 text-[14.5px] leading-relaxed text-ink-200"
                  >
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-500/20 text-brand-300 ring-1 ring-inset ring-brand-400/30">
                      <Check className="h-3 w-3" />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>

            <MonthlyReportCard desk={desk} />
          </div>
        </div>
      </Container>
    </section>
  );
}

function MonthlyReportCard({ desk }: { desk: DeskConfig }) {
  return (
    <div className="relative">
      <div
        aria-hidden
        className="absolute -inset-3 rounded-[28px] bg-gradient-to-br from-brand-500/15 to-brand-500/15 blur-xl"
      />
      <div className="relative overflow-hidden rounded-[20px] border border-white/10 bg-ink-900/70 shadow-lift backdrop-blur">
        <div className="border-b border-white/10 px-6 py-5">
          <p className="text-[20px] font-semibold tracking-tight text-white">
            {desk.monthlyReportTitle}
          </p>
          <p className="mt-1 text-[10.5px] font-semibold uppercase tracking-[0.14em] text-ink-400">
            {desk.monthlyReportDate}
          </p>
        </div>
        <ul className="divide-y divide-white/10">
          {monthlyReportRows.map((r) => (
            <li
              key={r.label}
              className="flex items-center justify-between gap-4 px-6 py-3.5"
            >
              <span className="text-[14px] text-ink-300">{r.label}</span>
              <span className="text-[22px] font-semibold tracking-tight text-white">
                {r.value}
              </span>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2 border-t border-white/10 px-6 py-3.5 text-[12.5px]">
          <span className="h-1.5 w-1.5 rounded-full bg-success-400 animate-live-dot" />
          <span className="font-medium text-success-300">
            Generated from the AI-Harness audit trail
          </span>
        </div>
      </div>
    </div>
  );
}

function GetStarted({ desk }: { desk: DeskConfig }) {
  return (
    <section className="relative pb-16 sm:pb-20">
      <Container>
        <div className="relative overflow-hidden rounded-[28px] bg-ink-950 px-6 py-8 sm:px-12 sm:py-10 md:px-16">
          <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid-dark opacity-60" />
          <div
            aria-hidden
            className="pointer-events-none absolute -top-32 left-1/2 h-[380px] w-[380px] -translate-x-1/2 rounded-full bg-brand-600/30 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-28 right-0 h-[300px] w-[300px] rounded-full bg-brand-500/20 blur-3xl"
          />

          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <div className="flex justify-center">
              <Eyebrow tone="dark">Get started · {desk.ctaEyebrowNative}</Eyebrow>
            </div>
            <h2 className="mt-3 text-[26px] font-semibold leading-[1.1] tracking-[-0.02em] text-white sm:text-[34px]">
              Talk to the {desk.name} before your{" "}
              <span className="text-gradient">next fiscal year locks.</span>
            </h2>
            <p className="mt-3 text-[14.5px] leading-relaxed text-ink-300 sm:text-[15.5px]">
              A 45-minute consultation, in English or {desk.language}, at hours
              that work for {desk.hqCity}. We'll give you an honest read on
              your US readiness, whether or not you work with us.
            </p>

            <div className="mt-5 flex flex-col items-center justify-center gap-2.5 sm:flex-row">
              <Button
                to={`/international-businesses/${desk.id}/consultation`}
                size="md"
                className="bg-gradient-to-r from-brand-600 to-brand-700 text-white shadow-lift hover:from-brand-700 hover:to-brand-800"
              >
                Book a consultation
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                to="/international-businesses"
                size="md"
                className="border border-white/15 bg-white/5 text-white hover:bg-white/10"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to overview
              </Button>
            </div>

            <p className="mt-3.5 text-[11.5px] text-ink-400">
              {desk.noObligationNative} · No obligation · 30 days to decide
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
