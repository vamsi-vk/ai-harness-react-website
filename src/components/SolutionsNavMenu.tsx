import { ArrowRight, Building2, Store, type LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "../lib/cn";

type SolutionItem = {
  label: string;
  description: string;
  to: string;
  icon: LucideIcon;
  badge?: string;
};

export const SOLUTIONS_MENU_ITEMS: SolutionItem[] = [
  {
    label: "Solution - For Enterprise",
    description: "Governed AI workforce for larger teams, multi-location ops, and deeper controls.",
    to: "/solutions/enterprise",
    icon: Building2,
    badge: "NEW",
  },
  {
    label: "Solution - For SMBs",
    description: "AI agents that get you found, win reviews, and run the day-to-day for local businesses.",
    to: "/",
    icon: Store,
    badge: "NEW",
  },
];

export default function SolutionsNavMenu({
  className,
  onNavigate,
}: {
  className?: string;
  onNavigate?: () => void;
}) {
  return (
    <div className={cn("w-full", className)}>
      <div className="px-5 pb-5 pt-6 sm:px-6">
        <p className="mb-4 text-[11px] font-semibold tracking-[0.16em] text-ink-400 uppercase">
          Solutions
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          {SOLUTIONS_MENU_ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.label}
                to={item.to}
                onClick={onNavigate}
                className="group relative flex min-h-[9.5rem] flex-col rounded-2xl border border-ink-200/90 bg-white p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-200 hover:bg-brand-50/40 hover:shadow-soft"
              >
                {item.badge ? (
                  <span className="absolute top-3.5 right-3.5 rounded-full bg-brand-100 px-1.5 py-0.5 text-[10px] font-bold tracking-wide text-brand-700 uppercase">
                    {item.badge}
                  </span>
                ) : null}
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-ink-50 text-ink-700 ring-1 ring-ink-200/70 transition duration-200 group-hover:bg-white group-hover:text-brand-600">
                  <Icon className="h-5 w-5" strokeWidth={2} />
                </span>
                <span className="mt-3.5 pr-10 text-[15px] font-semibold text-ink-900 transition-colors group-hover:text-brand-700">
                  {item.label}
                </span>
                <span className="mt-1.5 text-[13px] leading-relaxed text-ink-500">
                  {item.description}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col gap-3 border-t border-ink-100 bg-ink-50/60 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[13px] text-ink-500">Pick the path that fits your business size.</p>
        <Link
          to="/solutions"
          onClick={onNavigate}
          className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-brand-700 transition duration-200 hover:gap-2.5 hover:text-brand-800"
        >
          Explore Solutions
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
