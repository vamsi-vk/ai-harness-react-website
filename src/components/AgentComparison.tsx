import { ArrowRight, CircleCheck, CircleX } from "lucide-react";

type ComparisonRow = { oldWay: string; withAgent: string };

export default function AgentComparison({ rows }: { rows: ComparisonRow[] }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-ink-200/90 bg-white shadow-soft ring-1 ring-ink-100/80">
      <div className="grid border-b border-ink-200/80 bg-gradient-to-r from-ink-50/80 via-white to-brand-50/50 lg:grid-cols-[minmax(0,1fr)_2.5rem_minmax(0,1fr)]">
        <div className="flex items-center justify-center gap-2 px-4 py-3 sm:px-5">
          <span className="grid h-7 w-7 place-items-center rounded-full bg-ink-100 text-ink-400 ring-1 ring-ink-200/80">
            <CircleX className="h-3.5 w-3.5" strokeWidth={2.25} />
          </span>
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-ink-500 sm:text-sm">
            The old way
          </p>
        </div>
        <div
          aria-hidden
          className="hidden place-items-center border-x border-ink-200/70 bg-white lg:grid"
        >
          <ArrowRight className="h-4 w-4 text-brand-500" strokeWidth={2.25} />
        </div>
        <div className="flex items-center justify-center gap-2 border-t border-ink-200/70 px-4 py-3 sm:px-5 lg:border-t-0">
          <span className="grid h-7 w-7 place-items-center rounded-full bg-brand-100 text-brand-600 ring-1 ring-brand-200/80">
            <CircleCheck className="h-3.5 w-3.5" strokeWidth={2.25} />
          </span>
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-brand-700 sm:text-sm">
            With AI-Harness
          </p>
        </div>
      </div>

      <ul className="divide-y divide-ink-100">
        {rows.map((row, index) => (
          <li
            key={row.oldWay}
            className="group transition-colors duration-200 hover:bg-brand-50/20"
          >
            <div className="grid lg:grid-cols-[minmax(0,1fr)_2.5rem_minmax(0,1fr)]">
              <div className="flex gap-3 px-4 py-3.5 sm:px-5 sm:py-4">
                <CircleX
                  className="mt-0.5 h-4 w-4 shrink-0 text-ink-300 lg:hidden"
                  strokeWidth={2}
                  aria-hidden
                />
                <p className="text-base font-normal leading-[1.65] text-ink-700 sm:text-lg">{row.oldWay}</p>
              </div>

              <div
                aria-hidden
                className="hidden place-items-center lg:grid"
              >
                <span className="grid h-7 w-7 place-items-center rounded-full bg-brand-50 text-brand-500 opacity-0 ring-1 ring-brand-200/60 transition-opacity duration-200 group-hover:opacity-100">
                  <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.25} />
                </span>
              </div>

              <div className="flex gap-3 border-t border-ink-100 bg-gradient-to-r from-brand-50/35 to-white px-4 py-3.5 sm:px-5 sm:py-4 lg:border-l lg:border-t-0 lg:border-ink-100">
                <CircleCheck
                  className="mt-0.5 h-4 w-4 shrink-0 text-brand-500 lg:hidden"
                  strokeWidth={2}
                  aria-hidden
                />
                <p className="text-base font-normal leading-[1.65] text-ink-900 sm:text-lg">{row.withAgent}</p>
              </div>
            </div>

            <p className="sr-only">
              Comparison {index + 1}: instead of {row.oldWay}, {row.withAgent}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
