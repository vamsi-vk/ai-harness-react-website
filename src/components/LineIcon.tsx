import type { LucideIcon } from "lucide-react";
import { cn } from "../lib/cn";

type LineIconProps = {
  icon: LucideIcon;
  size?: "md" | "lg" | "xl";
  tone?: "brand" | "muted" | "success";
  className?: string;
};

const sizes = {
  md: { wrap: "h-14 w-14", icon: "h-8 w-8" },
  lg: { wrap: "h-[4.75rem] w-[4.75rem]", icon: "h-11 w-11" },
  xl: { wrap: "h-24 w-24", icon: "h-14 w-14 sm:h-16 sm:w-16" },
};

const tones = {
  brand: {
    glow: "bg-brand-500/15",
    ring: "bg-brand-50 ring-brand-200/70",
    icon: "text-brand-600",
  },
  muted: {
    glow: "bg-ink-400/10",
    ring: "bg-ink-50 ring-ink-200/80",
    icon: "text-ink-400",
  },
  success: {
    glow: "bg-brand-500/20",
    ring: "bg-brand-50 ring-brand-300/80",
    icon: "text-brand-600",
  },
};

export default function LineIcon({
  icon: Icon,
  size = "lg",
  tone = "brand",
  className,
}: LineIconProps) {
  const s = sizes[size];
  const t = tones[tone];

  return (
    <div className={cn("relative grid shrink-0 place-items-center", s.wrap, className)}>
      <div
        aria-hidden
        className={cn("absolute inset-0 rounded-full blur-xl", t.glow)}
      />
      <div
        aria-hidden
        className={cn("absolute inset-[10%] rounded-full ring-1", t.ring)}
      />
      <Icon
        className={cn("relative", s.icon, t.icon)}
        strokeWidth={1.65}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </div>
  );
}
