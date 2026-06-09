import { useEffect, useState } from "react";
import {
  Search,
  Plus,
  ChevronDown,
  ChevronRight,
  Bell,
  Boxes,
  Wrench,
  DollarSign,
  Target,
  Users,
  ListChecks,
  FolderKanban,
  Cpu,
  Sparkles,
  Link2,
  Info,
  Folder,
} from "lucide-react";

type Tone = "brand" | "amber" | "emerald" | "rose" | "violet" | "sky";

type Ticket = {
  id: string;
  title: string;
  label?: { text: string; tone: Tone };
  assignee: { initials: string; gradient: string; isAi?: boolean };
};

type Column = {
  title: string;
  count: number;
  dot: string;
  tickets: Ticket[];
};

const AS = { initials: "AS", gradient: "from-emerald-500 to-teal-600" };
const DE = { initials: "DE", gradient: "from-sky-500 to-blue-600" };
const MO = { initials: "MO", gradient: "from-orange-500 to-rose-500" };
const BA = { initials: "BA", gradient: "from-violet-500 to-fuchsia-500", isAi: true };
const FS = { initials: "FS", gradient: "from-blue-500 to-indigo-600", isAi: true };
const RV = { initials: "RV", gradient: "from-fuchsia-500 to-pink-500", isAi: true };

const liveTicket: Ticket = {
  id: "AH-204",
  title: "Skill-based routing for task assignment",
  label: { text: "Engineering", tone: "sky" },
  assignee: FS,
};

const columns: Column[] = [
  {
    title: "TODO",
    count: 41,
    dot: "bg-ink-400",
    tickets: [
      {
        id: "AH-241",
        title: "Configure intake automation for finance requests",
        label: { text: "Workflow", tone: "violet" },
        assignee: BA,
      },
      {
        id: "AH-238",
        title: "Define Compliance Reviewer agent role",
        label: { text: "Governance", tone: "amber" },
        assignee: MO,
      },
      {
        id: "AH-235",
        title: "Onboard 2 new agents to Customer Ops",
        assignee: DE,
      },
    ],
  },
  {
    title: "IN PROGRESS",
    count: 7,
    dot: "bg-amber-400",
    tickets: [
      {
        id: "AH-198",
        title: "Weekly ops digest from execution logs",
        assignee: AS,
      },
      {
        id: "AH-194",
        title: "Cost-per-outcome on team dashboards",
        assignee: BA,
      },
    ],
  },
  {
    title: "IN REVIEW",
    count: 8,
    dot: "bg-violet-400",
    tickets: [
      {
        id: "AH-181",
        title: "Reviewer agent permission scope",
        label: { text: "Security", tone: "rose" },
        assignee: DE,
      },
      {
        id: "AH-176",
        title: "Audit trail export to SIEM pipeline",
        label: { text: "Compliance", tone: "emerald" },
        assignee: MO,
      },
      {
        id: "AH-172",
        title: "Shared context across linked projects",
        assignee: RV,
      },
    ],
  },
  {
    title: "QA",
    count: 13,
    dot: "bg-sky-400",
    tickets: [
      {
        id: "AH-159",
        title: "Rollback on workflow failure",
        assignee: AS,
      },
      {
        id: "AH-156",
        title: "Human + AI reviewer handoff",
        label: { text: "Reliability", tone: "violet" },
        assignee: FS,
      },
      {
        id: "AH-151",
        title: "Role-based access on agent dashboard",
        assignee: BA,
      },
    ],
  },
  {
    title: "BLOCKED",
    count: 4,
    dot: "bg-rose-500",
    tickets: [
      {
        id: "AH-138",
        title: "Cross-project SLA visibility",
        label: { text: "Blocked", tone: "rose" },
        assignee: MO,
      },
    ],
  },
];

const labelTone: Record<Tone, string> = {
  brand: "bg-brand-50 text-brand-700 ring-brand-200/60",
  amber: "bg-amber-50 text-amber-700 ring-amber-200/60",
  emerald: "bg-emerald-50 text-emerald-700 ring-emerald-200/60",
  rose: "bg-rose-50 text-rose-700 ring-rose-200/60",
  violet: "bg-violet-50 text-violet-700 ring-violet-200/60",
  sky: "bg-sky-50 text-sky-700 ring-sky-200/60",
};

const filterAvatars = [
  { initials: "SO", gradient: "from-fuchsia-500 to-rose-500" },
  { initials: "AB", gradient: "from-indigo-500 to-violet-600" },
  { initials: "DE", gradient: "from-emerald-500 to-teal-600" },
  { initials: "MO", gradient: "from-orange-500 to-rose-500" },
];

function TicketCard({
  ticket,
  isMoving = false,
}: {
  ticket: Ticket;
  isMoving?: boolean;
}) {
  return (
    <article
      className={`rounded-lg border bg-white p-2.5 shadow-[0_1px_0_rgba(15,23,42,0.04)] ${
        isMoving
          ? "animate-ticket-drop animate-ticket-glow border-brand-200"
          : "border-ink-200"
      }`}
    >
      <p className="text-[10px] font-medium text-ink-400">{ticket.id}</p>
      <p className="mt-0.5 text-[12px] font-medium leading-snug text-ink-900">
        {ticket.title}
      </p>
      {ticket.label && (
        <span
          className={`mt-2 inline-flex items-center rounded-full px-2 py-0.5 text-[9.5px] font-medium ring-1 ring-inset ${labelTone[ticket.label.tone]}`}
        >
          {ticket.label.text}
        </span>
      )}
      <div className="mt-2 flex items-center justify-between">
        <span className="text-[10px] text-ink-300">·</span>
        <span
          className={`grid h-5 w-5 place-items-center rounded-full bg-gradient-to-br ${ticket.assignee.gradient} text-[9px] font-semibold text-white ${
            ticket.assignee.isAi ? "animate-agent-ring" : ""
          }`}
          title={ticket.assignee.initials}
        >
          {ticket.assignee.initials}
        </span>
      </div>
    </article>
  );
}

export default function HeroBoard() {
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCycle((c) => c + 1);
    }, 5000);
    return () => window.clearInterval(interval);
  }, []);

  const movedToReview = cycle % 2 === 1;
  const liveCount = (title: string) => {
    if (title === "IN PROGRESS") return movedToReview ? 6 : 7;
    if (title === "IN REVIEW") return movedToReview ? 9 : 8;
    return null;
  };

  return (
    <div className="grid grid-cols-1 bg-ink-50/40 text-ink-900 lg:grid-cols-[200px_1fr]">
      {/* Sidebar */}
      <aside className="hidden flex-col border-r border-ink-200 bg-white/80 lg:flex">
        <div className="flex items-center gap-2 border-b border-ink-200 px-3.5 py-3">
          <span className="grid h-7 w-7 place-items-center rounded-lg bg-gradient-to-br from-slate-700 to-slate-900 text-[11px] font-bold text-white">
            AA
          </span>
          <p className="min-w-0 flex-1 truncate text-[12.5px] font-semibold">AUTO AI-Harness</p>
          <Search className="h-3.5 w-3.5 text-ink-400" />
        </div>

        <nav className="space-y-0.5 px-2 py-2.5 text-[12px]">
          {[
            { icon: Boxes, label: "Hybrid Org Chart" },
            { icon: Wrench, label: "Skills" },
            { icon: DollarSign, label: "Costs" },
            { icon: Target, label: "Goals" },
            { icon: Bell, label: "Attention Queue", badge: 9 },
            { icon: Users, label: "Team" },
            { icon: ListChecks, label: "Tasks" },
          ].map(({ icon: Icon, label, badge }) => (
            <div
              key={label}
              className="flex items-center gap-2.5 rounded-md px-2.5 py-1.5 text-ink-700"
            >
              <Icon className="h-3.5 w-3.5 text-ink-500" />
              <span className="flex-1 truncate">{label}</span>
              {badge ? (
                <span className="rounded-full bg-rose-100 px-1.5 text-[10px] font-semibold text-rose-700">
                  {badge}
                </span>
              ) : null}
            </div>
          ))}
        </nav>

        <div className="border-t border-ink-200 px-2 py-2.5">
          <div className="flex items-center gap-2 px-2.5 py-1 text-ink-500">
            <FolderKanban className="h-3.5 w-3.5" />
            <span className="flex-1 text-[12px] font-medium text-ink-700">Projects</span>
            <Plus className="h-3 w-3" />
          </div>
          <ul className="mt-1 space-y-0.5 text-[12px]">
            {[
              { label: "MVP1", active: true },
              { label: "Website" },
              { label: "Sales" },
              { label: "Onboarding" },
              { label: "Control Plane" },
              { label: "DevSecOps" },
              { label: "AI-Harness Development" },
            ].map((p) => (
              <li key={p.label}>
                <div
                  className={`flex items-center gap-2 rounded-md px-3 py-1.5 ${
                    p.active ? "bg-brand-50 font-medium text-brand-700" : "text-ink-700"
                  }`}
                >
                  <Folder className={`h-3 w-3 ${p.active ? "text-emerald-500" : "text-ink-400"}`} />
                  <span className="truncate">{p.label}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="border-t border-ink-200 px-2 py-2.5">
          <div className="flex items-center gap-2 px-2.5 py-1 text-ink-500">
            <Cpu className="h-3.5 w-3.5" />
            <span className="flex-1 text-[12px] font-medium text-ink-700">Agents</span>
            <Plus className="h-3 w-3" />
          </div>
          <ul className="mt-1 space-y-0.5 text-[12px]">
            <li>
              <div className="flex items-center gap-2 rounded-md px-3 py-1.5 text-ink-700">
                <ChevronDown className="h-3 w-3 text-ink-400" />
                <Folder className="h-3 w-3 text-amber-400" />
                <span className="truncate font-medium">CEO</span>
              </div>
              <ul className="mt-0.5 space-y-0.5 pl-5">
                {["Business Analyst", "Full Stack Engineer"].map((a) => (
                  <li key={a}>
                    <div className="flex items-center gap-2 rounded-md px-3 py-1 text-ink-700">
                      <span className="grid h-3 w-3 place-items-center">
                        <span className="h-1.5 w-1.5 rounded-full border border-ink-400" />
                      </span>
                      <span className="truncate">{a}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>

        <div className="mt-auto border-t border-ink-200 px-2 py-2.5">
          <div className="flex items-center gap-2 rounded-md px-2.5 py-1.5 text-[12px] text-ink-700">
            <Link2 className="h-3.5 w-3.5 text-ink-500" />
            <span className="flex-1 truncate">AI-Harness.com</span>
            <ChevronRight className="h-3 w-3 text-ink-400" />
            <Info className="h-3 w-3 text-ink-400" />
          </div>
        </div>
      </aside>

      {/* Main */}
      <div className="min-w-0">
        {/* Top bar */}
        <div className="flex items-center justify-between border-b border-ink-200 bg-white px-4 py-2.5">
          <div className="flex items-center gap-1.5 text-[12px] text-ink-500">
            <span>Projects</span>
            <span className="text-ink-300">›</span>
            <span className="font-medium text-ink-900">MVP1</span>
          </div>
          <div className="flex items-center gap-3 text-ink-500">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2 py-0.5 text-[10.5px] font-semibold text-emerald-700 ring-1 ring-inset ring-emerald-200/70">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-live-dot" />
              Live
            </span>
            <span className="relative">
              <Bell className="h-4 w-4" />
              <span className="absolute -right-1 -top-1 grid h-3 w-3 place-items-center rounded-full bg-rose-500 text-[8px] font-bold text-white">
                3
              </span>
            </span>
            <span className="grid h-7 w-7 place-items-center rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 text-[11px] font-semibold text-white">
              V
            </span>
          </div>
        </div>

        {/* Project header + tabs */}
        <div className="border-b border-ink-200 bg-white px-4 pt-3.5">
          <div className="flex items-center gap-2.5">
            <span className="grid h-6 w-6 place-items-center rounded-md bg-emerald-500 text-white">
              <Sparkles className="h-3.5 w-3.5" />
            </span>
            <h2 className="text-[17px] font-semibold tracking-tight text-ink-900">MVP1</h2>
          </div>
          <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-1.5 text-[12px] text-ink-500">
            {["Backlog", "Tasks", "Overview", "Configuration", "Workflow", "Budget", "Archive"].map(
              (tab, i) => (
                <span key={tab} className={`relative pb-2 ${i === 1 ? "font-semibold text-ink-900" : ""}`}>
                  {tab}
                  {i === 1 && (
                    <span className="absolute inset-x-0 -bottom-px h-0.5 rounded-full bg-ink-900" />
                  )}
                </span>
              )
            )}
          </div>
        </div>

        {/* Filter bar */}
        <div className="flex flex-wrap items-center gap-2 border-b border-ink-200 bg-white px-4 py-2.5 text-[11.5px] text-ink-500">
          <button className="rounded-md p-1.5 hover:bg-ink-100" aria-label="List view">
            <Boxes className="h-3.5 w-3.5" />
          </button>
          <button className="rounded-md bg-ink-100 p-1.5" aria-label="Board view">
            <FolderKanban className="h-3.5 w-3.5" />
          </button>
          <div className="ml-1 flex items-center gap-2 rounded-md border border-ink-200 px-2.5 py-1.5">
            <Search className="h-3 w-3" />
            <span>Search tasks…</span>
          </div>
          <div className="ml-2 flex -space-x-1.5">
            {filterAvatars.map((a) => (
              <span
                key={a.initials}
                className={`grid h-5 w-5 place-items-center rounded-full bg-gradient-to-br ${a.gradient} text-[9px] font-semibold text-white ring-1 ring-white`}
              >
                {a.initials}
              </span>
            ))}
            <span className="grid h-5 w-5 place-items-center rounded-full bg-ink-100 text-[9px] font-semibold text-ink-700 ring-1 ring-white">
              +14
            </span>
          </div>
          <span className="text-[11px] text-ink-400">0 selected</span>
          <div className="ml-auto flex items-center gap-1.5">
            {["Status", "Priority", "Reporter", "Labels"].map((f) => (
              <span key={f} className="flex items-center gap-1 rounded-md border border-ink-200 px-2 py-1">
                {f}
                <ChevronDown className="h-3 w-3" />
              </span>
            ))}
            <button className="ml-1 inline-flex items-center gap-1 rounded-md bg-ink-900 px-2.5 py-1.5 text-[11px] font-medium text-white">
              <Plus className="h-3 w-3" />
              New Task
            </button>
          </div>
        </div>

        {/* Board */}
        <div className="overflow-x-auto bg-ink-50/60 px-3 py-4">
          <div className="flex min-w-[900px] gap-3">
            {columns.map((col) => {
              const showLiveHere =
                (col.title === "IN PROGRESS" && !movedToReview) ||
                (col.title === "IN REVIEW" && movedToReview);
              const dynamicCount = liveCount(col.title);
              const displayedCount = dynamicCount ?? col.count;
              return (
                <div key={col.title} className="w-[180px] shrink-0">
                  <div className="flex items-center justify-between px-1 pb-2.5">
                    <div className="flex items-center gap-2">
                      <span
                        className={`h-2 w-2 rounded-full ${col.dot} ${
                          col.title === "IN PROGRESS" ? "animate-live-dot" : ""
                        }`}
                      />
                      <span className="text-[10.5px] font-semibold uppercase tracking-wider text-ink-700">
                        {col.title}
                      </span>
                    </div>
                    <span
                      key={`${col.title}-${displayedCount}`}
                      className={`text-[10.5px] font-semibold text-ink-500 ${
                        dynamicCount !== null ? "animate-count-bump" : ""
                      }`}
                    >
                      {displayedCount}
                    </span>
                  </div>
                  <div className="space-y-2">
                    {showLiveHere && (
                      <TicketCard
                        key={`live-${cycle}`}
                        ticket={liveTicket}
                        isMoving
                      />
                    )}
                    {col.tickets.map((t) => (
                      <TicketCard key={t.id} ticket={t} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
