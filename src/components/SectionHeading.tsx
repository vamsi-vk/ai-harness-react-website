import type { ReactNode } from "react";
import Eyebrow from "./Eyebrow";
import { cn } from "../lib/cn";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
};

export default function SectionHeading({
  eyebrow, title, description, align = "center", tone = "light", className,
}: Props) {
  const isCenter = align === "center";
  const dark = tone === "dark";
  return (
    <div className={cn(isCenter ? "mx-auto max-w-3xl text-center" : "max-w-3xl", className)}>
      {eyebrow && (
        <div className={cn("mb-5", isCenter ? "flex justify-center" : "")}>
          <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
        </div>
      )}
      <h2
        className={cn(
          "text-[34px] sm:text-[44px] leading-[1.05] font-semibold tracking-[-0.02em]", dark ? "text-white" : "text-ink-900", )}
      >
        {title}
      </h2>
      {description && (
        <p className={cn("mt-5 text-lg leading-relaxed", dark ? "text-ink-300" : "text-ink-600")}>{description}</p>
      )}
    </div>
  );
}
