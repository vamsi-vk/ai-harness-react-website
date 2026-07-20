export type FlowAccent = "violet" | "sky" | "emerald" | "amber" | "rose" | "fuchsia";

export const FLOW_ACCENT_CYCLE: FlowAccent[] = [
  "violet",
  "sky",
  "emerald",
  "amber",
  "rose",
  "fuchsia",
];

export const FLOW_ACCENT_STYLES: Record<
  FlowAccent,
  {
    glow: string;
    ring: string;
    dot: string;
    line: string;
    railActive: string;
    railIdle: string;
  }
> = {
  violet: {
    glow: "from-violet-500/28 via-fuchsia-400/12 to-transparent",
    ring: "from-violet-500/45 via-brand-400/35 to-violet-300/45",
    dot: "bg-violet-600 shadow-[0_0_0_4px_rgba(124,58,237,0.22)]",
    line: "from-violet-500",
    railActive:
      "border-[#7C3AED] bg-gradient-to-r from-[#7C3AED] to-[#9A6FF0] text-white shadow-[0_12px_28px_-12px_rgba(124,58,237,0.55)]",
    railIdle: "border-brand-200/90 bg-white text-ink-700 hover:border-brand-300 hover:bg-brand-50/60",
  },
  sky: {
    glow: "from-sky-500/24 via-cyan-400/12 to-transparent",
    ring: "from-sky-500/40 via-cyan-400/30 to-sky-300/40",
    dot: "bg-sky-600 shadow-[0_0_0_4px_rgba(2,132,199,0.22)]",
    line: "from-sky-500",
    railActive: "border-sky-600 bg-gradient-to-r from-sky-600 to-cyan-500 text-white shadow-[0_12px_28px_-12px_rgba(2,132,199,0.45)]",
    railIdle: "border-brand-200/90 bg-white text-ink-700 hover:border-brand-300 hover:bg-brand-50/60",
  },
  emerald: {
    glow: "from-emerald-500/24 via-teal-400/12 to-transparent",
    ring: "from-emerald-500/40 via-teal-400/30 to-emerald-300/40",
    dot: "bg-emerald-600 shadow-[0_0_0_4px_rgba(5,150,105,0.22)]",
    line: "from-emerald-500",
    railActive: "border-emerald-600 bg-gradient-to-r from-emerald-600 to-teal-500 text-white shadow-[0_12px_28px_-12px_rgba(5,150,105,0.45)]",
    railIdle: "border-brand-200/90 bg-white text-ink-700 hover:border-brand-300 hover:bg-brand-50/60",
  },
  amber: {
    glow: "from-amber-500/26 via-orange-400/12 to-transparent",
    ring: "from-amber-500/40 via-orange-400/30 to-amber-300/40",
    dot: "bg-amber-600 shadow-[0_0_0_4px_rgba(217,119,6,0.22)]",
    line: "from-amber-500",
    railActive: "border-amber-600 bg-gradient-to-r from-amber-600 to-orange-500 text-white shadow-[0_12px_28px_-12px_rgba(217,119,6,0.45)]",
    railIdle: "border-brand-200/90 bg-white text-ink-700 hover:border-brand-300 hover:bg-brand-50/60",
  },
  rose: {
    glow: "from-rose-500/24 via-pink-400/12 to-transparent",
    ring: "from-rose-500/40 via-pink-400/30 to-rose-300/40",
    dot: "bg-rose-600 shadow-[0_0_0_4px_rgba(225,29,72,0.22)]",
    line: "from-rose-500",
    railActive: "border-rose-600 bg-gradient-to-r from-rose-600 to-pink-500 text-white shadow-[0_12px_28px_-12px_rgba(225,29,72,0.45)]",
    railIdle: "border-brand-200/90 bg-white text-ink-700 hover:border-brand-300 hover:bg-brand-50/60",
  },
  fuchsia: {
    glow: "from-fuchsia-500/26 via-purple-400/12 to-transparent",
    ring: "from-fuchsia-500/45 via-purple-400/35 to-fuchsia-300/45",
    dot: "bg-fuchsia-600 shadow-[0_0_0_4px_rgba(192,38,211,0.22)]",
    line: "from-fuchsia-500",
    railActive: "border-fuchsia-600 bg-gradient-to-r from-fuchsia-600 to-purple-500 text-white shadow-[0_12px_28px_-12px_rgba(192,38,211,0.5)]",
    railIdle: "border-brand-200/90 bg-white text-ink-700 hover:border-brand-300 hover:bg-brand-50/60",
  },
};

export function flowAccentForIndex(index: number, override?: FlowAccent): FlowAccent {
  if (override) return override;
  return FLOW_ACCENT_CYCLE[index % FLOW_ACCENT_CYCLE.length];
}
