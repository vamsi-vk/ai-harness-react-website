import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "../lib/cn";
import ScrollReveal from "./ScrollReveal";

export type FaqAccordionItem = {
  q: string;
  a: string;
};

type Props = {
  items: FaqAccordionItem[];
  className?: string;
  /** `cards` = numbered cards (default). `lines` = thin-divider list. */
  variant?: "cards" | "lines";
};

export default function FaqAccordion({ items, className, variant = "cards" }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(variant === "lines" ? null : 0);

  if (variant === "lines") {
    return (
      <div className={cn("border-t border-ink-200/80", className)}>
        {items.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div key={faq.q} className="border-b border-ink-200/80">
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-center justify-between gap-8 py-7 text-left sm:py-8"
                aria-expanded={isOpen}
              >
                <span className="min-w-0 flex-1 text-[1.0625rem] font-normal leading-snug tracking-[-0.01em] text-ink-900 sm:text-xl">
                  {faq.q}
                </span>
                <ChevronDown
                  className={cn(
                    "h-6 w-6 shrink-0 text-ink-900 transition-transform duration-300",
                    isOpen && "rotate-180",
                  )}
                  aria-hidden
                  strokeWidth={2}
                />
              </button>
              <div
                className={cn(
                  "grid transition-[grid-template-rows,opacity] duration-300 ease-out",
                  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                )}
              >
                <div className="overflow-hidden">
                  <p className="max-w-4xl pb-7 pr-12 text-base font-normal leading-[1.7] text-ink-600 sm:pb-8 sm:text-lg">
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div className={cn("font-inter space-y-3", className)}>
      {items.map((faq, index) => {
        const isOpen = openIndex === index;

        return (
          <ScrollReveal key={faq.q} delay={index * 50}>
            <div
              className={cn(
                "overflow-hidden rounded-2xl border bg-white transition-all duration-300",
                isOpen
                  ? "border-brand-200/80 shadow-[0_10px_40px_rgba(120, 57, 224,0.08)] ring-1 ring-brand-100/80"
                  : "border-ink-200/70 shadow-[0_1px_2px_rgba(15,23,42,0.04)] hover:border-ink-300",
              )}
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-start gap-4 px-5 py-4.5 text-left sm:gap-5 sm:px-6 sm:py-5"
                aria-expanded={isOpen}
              >
                <span
                  className={cn(
                    "mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-xl font-mono text-xs font-medium transition-colors duration-300 sm:text-sm",
                    isOpen
                      ? "bg-brand-500 text-white shadow-[0_4px_14px_rgba(120, 57, 224,0.35)]"
                      : "bg-brand-50 text-brand-600",
                  )}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="min-w-0 flex-1 pt-1">
                  <h3 className="text-lg font-medium leading-snug tracking-[-0.01em] text-ink-900 sm:text-xl">
                    {faq.q}
                  </h3>
                </span>
                <ChevronDown
                  className={cn(
                    "mt-1 h-5 w-5 shrink-0 transition-transform duration-300",
                    isOpen ? "rotate-180 text-brand-500" : "text-ink-400",
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
                  <p className="px-5 pb-5 pl-[4.5rem] text-base font-normal leading-[1.7] tracking-[-0.01em] text-ink-700 sm:px-6 sm:pb-6 sm:pl-[5.5rem] sm:text-lg">
                    {faq.a}
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
