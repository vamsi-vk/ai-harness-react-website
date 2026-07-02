import { useState } from "react";
import { BarChart3, ChevronDown } from "lucide-react";
import { cn } from "../lib/cn";
import AgentComparison from "./AgentComparison";
import ScrollReveal from "./ScrollReveal";

type ComparisonRow = { oldWay: string; withAgent: string };

type Accent = {
  tick: string;
  tickOpen: string;
  itemBg: string;
  itemBgOpen: string;
  openStyle: string;
  chevronOpen: string;
};

type Props = {
  comparisons: ComparisonRow[];
  outcome: string;
  caseStudy: { company: string; story: string };
  accent: Accent;
  className?: string;
};

export default function AgentProofAccordion({
  comparisons,
  outcome,
  caseStudy,
  accent,
  className,
}: Props) {
  const [open, setOpen] = useState(false);

  return (
    <ScrollReveal className={className}>
      <div
        className={cn(
          "overflow-hidden rounded-2xl border transition-all duration-300",
          open
            ? cn(accent.itemBgOpen, accent.openStyle)
            : cn(accent.itemBg, "border-ink-200/70 hover:border-ink-300"),
        )}
      >
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex w-full items-start gap-3 px-4 py-4 text-left sm:gap-4 sm:px-6 sm:py-5"
          aria-expanded={open}
        >
          <BarChart3
            className={cn(
              "mt-0.5 h-5 w-5 shrink-0 transition-colors duration-300",
              open ? accent.tickOpen : accent.tick,
            )}
            strokeWidth={2.25}
            aria-hidden
          />
          <span className="min-w-0 flex-1 pt-0.5">
            <span className="type-card-title text-ink-900">
              Compare, impact & real results
            </span>
            <span className="type-body mt-1 block text-ink-500">
              The old way vs with AI-Harness, what it means for revenue, and an illustrative case study.
            </span>
          </span>
          <ChevronDown
            className={cn(
              "mt-1 h-5 w-5 shrink-0 transition-transform duration-300",
              open ? cn("rotate-180", accent.chevronOpen) : "text-ink-400",
            )}
            aria-hidden
          />
        </button>

        <div
          className={cn(
            "grid transition-[grid-template-rows,opacity] duration-300 ease-out",
            open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
          )}
        >
          <div className="overflow-hidden">
            <div className="space-y-6 border-t border-ink-200/70 px-4 pb-5 pt-5 sm:space-y-8 sm:px-6 sm:pb-6 sm:pt-6">
              <AgentComparison rows={comparisons} />

              <div className="rounded-2xl border border-brand-200/80 bg-gradient-to-br from-brand-50/80 via-white to-brand-50/40 p-6 shadow-soft sm:p-7">
                <h3 className="type-card-title text-ink-900">Impact & revenue</h3>
                <p className="type-body-lg mt-4 text-ink-700">{outcome}</p>
              </div>

              <div className="rounded-2xl border border-brand-200 bg-gradient-to-br from-brand-50 via-white to-brand-50/40 p-6 shadow-soft sm:p-7">
                <p className="type-eyebrow text-brand-700">Real result (illustrative)</p>
                <p className="type-card-title mt-4 text-ink-900">{caseStudy.company}</p>
                <p className="type-body-lg mt-4 text-ink-700">{caseStudy.story}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
