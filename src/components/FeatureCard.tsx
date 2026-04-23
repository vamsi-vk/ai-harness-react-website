import type { ReactNode } from "react";
import { cn } from "../lib/cn";

type Props = {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
  tone?: "light" | "dark";
};

export default function FeatureCard({ icon, title, description, className, tone = "light" }: Props) {
  const dark = tone === "dark";
  return (
    <div
      className={cn(
        "group relative flex flex-col gap-4 rounded-2xl p-6 transition-all duration-200",
        dark
          ? "border border-white/10 bg-white/[0.03] hover:bg-white/[0.05]"
          : "border border-ink-200 bg-white hover:-translate-y-0.5 hover:border-ink-300 hover:shadow-soft",
        className,
      )}
    >
      <div
        className={cn(
          "grid h-11 w-11 place-items-center rounded-xl",
          dark
            ? "bg-white/10 text-white ring-1 ring-inset ring-white/10"
            : "bg-brand-50 text-brand-700 ring-1 ring-inset ring-brand-200/60",
        )}
      >
        {icon}
      </div>
      <div>
        <h3 className={cn("text-lg font-semibold tracking-tight", dark ? "text-white" : "text-ink-900")}>
          {title}
        </h3>
        <p className={cn("mt-2 text-[15px] leading-relaxed", dark ? "text-ink-400" : "text-ink-600")}>
          {description}
        </p>
      </div>
    </div>
  );
}
