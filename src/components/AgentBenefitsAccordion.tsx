import { useState } from "react";
import { CheckCircle2, ChevronDown } from "lucide-react";
import { cn } from "../lib/cn";
import ScrollReveal from "./ScrollReveal";

function capitalizeFirst(text: string) {
  const trimmed = text.trim();
  if (!trimmed) return trimmed;
  return trimmed.charAt(0).toUpperCase() + trimmed.slice(1);
}

function parseLeadIn(text: string) {
  const colon = text.indexOf(":");
  if (colon === -1) return { title: text, description: "" };
  return {
    title: text.slice(0, colon).trim(),
    description: capitalizeFirst(text.slice(colon + 1)),
  };
}

type Accent = {
  tick: string;
  tickOpen: string;
  itemBg: string;
  itemBgOpen: string;
  openStyle: string;
  chevronOpen: string;
};

type Props = {
  benefits: string[];
  accent: Accent;
  className?: string;
};

export default function AgentBenefitsAccordion({ benefits, accent, className }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className={cn("font-inter space-y-2.5", className)}>
      {benefits.map((benefit, index) => {
        const { title, description } = parseLeadIn(benefit);
        const isOpen = openIndex === index;

        return (
          <ScrollReveal key={benefit} delay={index * 60}>
            <div
              className={cn(
                "overflow-hidden rounded-xl border transition-all duration-300",
                isOpen ? cn(accent.itemBgOpen, accent.openStyle) : cn(accent.itemBg, "border-ink-200/70 hover:border-ink-300"),
              )}
            >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="flex w-full items-start gap-3 px-4 py-3.5 text-left sm:gap-4 sm:px-5 sm:py-4"
              aria-expanded={isOpen}
            >
              <CheckCircle2
                className={cn(
                  "mt-0.5 h-5 w-5 shrink-0 transition-colors duration-300",
                  isOpen ? accent.tickOpen : accent.tick,
                )}
                strokeWidth={2.25}
                aria-hidden
              />
              <span className="min-w-0 flex-1 pt-0.5">
                <span className="text-lg font-medium leading-snug text-ink-900 sm:text-xl">{title}</span>
              </span>
              <ChevronDown
                className={cn(
                  "mt-1 h-4 w-4 shrink-0 transition-transform duration-300",
                  isOpen ? cn("rotate-180", accent.chevronOpen) : "text-ink-400",
                )}
                aria-hidden
              />
            </button>
            <div
              className={cn(
                "grid transition-[grid-template-rows,opacity] duration-300 ease-out",
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
              )}
            >
              <div className="overflow-hidden">
                <p className="px-4 pb-4 pl-12 text-base font-normal leading-[1.65] text-ink-700 sm:px-5 sm:pb-5 sm:pl-[3.75rem] sm:text-lg">
                  {description}
                </p>
              </div>
            </div>
            </div>
          </ScrollReveal>
        );
      })}
    </div>
  );
}
