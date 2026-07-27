import { useRef, type MouseEvent, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { cn } from "../../lib/cn";

type MagneticCtaProps = {
  to: string;
  children: ReactNode;
  className?: string;
  variant?: "light" | "ghost";
};

export default function MagneticCta({
  to,
  children,
  className,
  variant = "light",
}: MagneticCtaProps) {
  const ref = useRef<HTMLAnchorElement>(null);

  const onMove = (e: MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.22}px, ${y * 0.22}px)`;
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "translate(0, 0)";
  };

  return (
    <Link
      ref={ref}
      to={to}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={cn(
        "inline-flex h-12 items-center justify-center gap-2 px-8 text-[15px] font-semibold transition-[transform,background-color,box-shadow,border-color] duration-200 will-change-transform",
        variant === "light"
          ? "rounded-full bg-white text-ink-900 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.45)] hover:bg-white/95"
          : "rounded-full border border-white/50 bg-white/10 text-white backdrop-blur-md hover:border-white/80 hover:bg-white/15",
        className,
      )}
    >
      {children}
    </Link>
  );
}
