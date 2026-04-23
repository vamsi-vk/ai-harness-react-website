import type { ReactNode } from "react";
import { cn } from "../lib/cn";

export default function Eyebrow({ children, className, tone = "light" }: { children: ReactNode; className?: string; tone?: "light" | "dark" }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em]",
        tone === "light"
          ? "bg-brand-50 text-brand-700 ring-1 ring-inset ring-brand-200/60"
          : "bg-white/10 text-brand-200 ring-1 ring-inset ring-white/15",
        className,
      )}
    >
      <span className={cn("h-1.5 w-1.5 rounded-full", tone === "light" ? "bg-brand-500" : "bg-brand-300")} />
      {children}
    </span>
  );
}
