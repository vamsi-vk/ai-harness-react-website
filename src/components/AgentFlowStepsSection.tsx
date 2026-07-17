import { useEffect, useState, type ReactNode } from "react";
import { ArrowRight, type LucideIcon } from "lucide-react";
import Container from "./Container";
import ScrollReveal from "./ScrollReveal";
import { cn } from "../lib/cn";

export type AgentFlowStep = {
  number: string;
  title: ReactNode;
  body: string;
  /** Short plain label for the desktop step rail when title is a rich ReactNode */
  railLabel?: string;
};

export type AgentFlowVisual = {
  icon: LucideIcon;
  panelTitle: string;
  panelHint: string;
  chips: string[];
};

type AgentFlowStepsSectionProps = {
  eyebrow?: string;
  title: ReactNode;
  steps: AgentFlowStep[];
  visuals: AgentFlowVisual[];
  className?: string;
};

function FlowStepVisualCard({
  visual,
  index,
  total,
}: {
  visual: AgentFlowVisual;
  index: number;
  total: number;
}) {
  const Icon = visual.icon;

  return (
    <div className="flex flex-col rounded-[28px] border border-ink-200 bg-gradient-to-br from-ink-900 via-ink-800 to-ink-900 p-6 text-white shadow-lift sm:p-7">
      <div>
        <p className="text-xs font-medium tracking-[0.14em] text-white/55 uppercase">
          {visual.panelHint}
        </p>
        <div className="mt-4 flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-xl bg-white/10 ring-1 ring-white/15">
            <Icon className="h-5 w-5" strokeWidth={1.85} />
          </span>
          <p className="text-lg font-semibold tracking-tight sm:text-xl">{visual.panelTitle}</p>
        </div>
      </div>

      <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
        <div className="flex flex-wrap gap-2">
          {visual.chips.map((chip) => (
            <span
              key={chip}
              className="rounded-full bg-white/10 px-3 py-1.5 text-xs font-medium text-white/90 ring-1 ring-white/10"
            >
              {chip}
            </span>
          ))}
        </div>
        <div className="mt-4 space-y-2">
          <div className="h-2.5 w-[80%] rounded-full bg-white/15" />
          <div className="h-2.5 w-[60%] rounded-full bg-white/10" />
          <div className="h-2.5 w-[66%] rounded-full bg-white/10" />
        </div>
      </div>

      <p className="mt-5 text-sm leading-relaxed text-white/65">
        Step {String(index + 1).padStart(2, "0")} of {String(total).padStart(2, "0")}
      </p>
    </div>
  );
}

function FlowVisualSlider({
  visuals,
  activeIndex,
  reduceMotion,
}: {
  visuals: AgentFlowVisual[];
  activeIndex: number;
  reduceMotion: boolean;
}) {
  return (
    <div className="relative overflow-hidden rounded-[28px]">
      <div
        className={cn(
          "flex will-change-transform",
          reduceMotion ? "" : "transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
        )}
        style={{ transform: `translate3d(-${activeIndex * 100}%, 0, 0)` }}
      >
        {visuals.map((visual, index) => (
          <div key={`${visual.panelTitle}-${index}`} className="w-full shrink-0 px-0.5">
            <FlowStepVisualCard visual={visual} index={index} total={visuals.length} />
          </div>
        ))}
      </div>
    </div>
  );
}

function FlowCopySlider({
  steps,
  visuals,
  activeIndex,
  reduceMotion,
}: {
  steps: AgentFlowStep[];
  visuals: AgentFlowVisual[];
  activeIndex: number;
  reduceMotion: boolean;
}) {
  const FallbackIcon = visuals[0]?.icon;

  return (
    <div className="relative overflow-hidden">
      <div
        className={cn(
          "flex will-change-transform",
          reduceMotion ? "" : "transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
        )}
        style={{ transform: `translate3d(-${activeIndex * 100}%, 0, 0)` }}
      >
        {steps.map((step, index) => {
          const Icon = visuals[index]?.icon ?? FallbackIcon;
          return (
            <div key={step.number} className="flex w-full shrink-0 flex-col pr-2">
              {Icon ? (
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-ink-100 text-ink-600 ring-1 ring-ink-200/80">
                  <Icon className="h-5 w-5" strokeWidth={1.85} />
                </span>
              ) : null}
              <p className="mt-5 text-sm font-medium tabular-nums text-ink-400">
                Step {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-2 text-[clamp(1.5rem,2.2vw,2rem)] font-medium leading-[1.15] tracking-[-0.02em] text-ink-900">
                {step.title}
              </h3>
              <p className="mt-4 text-lg font-normal leading-[1.7] text-ink-600">{step.body}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function AgentFlowStepsSection({
  eyebrow = "The flow",
  title,
  steps,
  visuals,
  className,
}: AgentFlowStepsSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const motionMedia = window.matchMedia("(prefers-reduced-motion: reduce)");
    const desktopMedia = window.matchMedia("(min-width: 1024px)");

    const sync = () => {
      setReduceMotion(motionMedia.matches);
      setIsDesktop(desktopMedia.matches);
    };
    sync();

    motionMedia.addEventListener("change", sync);
    desktopMedia.addEventListener("change", sync);
    return () => {
      motionMedia.removeEventListener("change", sync);
      desktopMedia.removeEventListener("change", sync);
    };
  }, []);

  const safeIndex = Math.min(activeIndex, Math.max(steps.length - 1, 0));

  return (
    <section
      className={cn(
        "relative overflow-hidden border-y border-ink-100 bg-white py-16 sm:py-20",
        className,
      )}
    >
      <Container className="relative z-10">
        {!isDesktop ? (
          <div>
            <ScrollReveal className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-medium text-ink-500">{eyebrow}</p>
              <h2 className="mt-4 text-[clamp(1.75rem,3.2vw,2.5rem)] font-medium leading-[1.15] tracking-[-0.02em] text-ink-900">
                {title}
              </h2>
            </ScrollReveal>

            <div className="mx-auto mt-10 max-w-4xl space-y-4">
              {steps.map((step, index) => {
                const isActive = safeIndex === index;
                return (
                  <button
                    key={step.number}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={cn(
                      "w-full rounded-3xl border bg-white px-5 py-6 text-left transition-all duration-300 sm:px-8 sm:py-7",
                      isActive
                        ? "border-ink-800 shadow-soft ring-1 ring-ink-200"
                        : "border-ink-200/90 opacity-70",
                    )}
                  >
                    <div className="flex gap-4 sm:gap-5">
                      <span
                        className={cn(
                          "grid h-10 w-10 shrink-0 place-items-center rounded-full text-sm font-medium ring-1",
                          isActive
                            ? "bg-ink-800 text-white ring-ink-800"
                            : "bg-ink-100 text-ink-600 ring-ink-200/80",
                        )}
                      >
                        {step.number}
                      </span>
                      <div className="min-w-0">
                        <h3 className="text-xl font-medium tracking-tight text-ink-900 sm:text-[1.35rem]">
                          {step.title}
                        </h3>
                        <p className="mt-2.5 text-base font-normal leading-[1.7] text-ink-600 sm:text-lg">
                          {step.body}
                        </p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-12 items-center gap-8 xl:gap-10">
            <div className="col-span-3 flex flex-col">
              <p className="text-sm font-medium text-ink-500">{eyebrow}</p>
              <h2 className="mt-4 text-[clamp(1.6rem,2.4vw,2.25rem)] font-medium leading-[1.15] tracking-[-0.02em] text-ink-900">
                {title}
              </h2>
              <div className="mt-6 flex flex-col gap-2">
                {steps.map((step, index) => {
                  const isActive = safeIndex === index;
                  return (
                    <button
                      key={step.number}
                      type="button"
                      onClick={() => setActiveIndex(index)}
                      className={cn(
                        "group flex items-center justify-between gap-3 rounded-full border px-4 py-2.5 text-left transition-all duration-300",
                        isActive
                          ? "border-ink-900 bg-ink-900 text-white shadow-soft"
                          : "border-ink-200 bg-white text-ink-700 hover:border-ink-300 hover:bg-ink-50",
                      )}
                      aria-current={isActive ? "step" : undefined}
                    >
                      <span className="text-sm font-medium">
                        <span
                          className={cn(
                            "mr-2 tabular-nums",
                            isActive ? "text-white/70" : "text-ink-400",
                          )}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        {step.railLabel ?? step.title}
                      </span>
                      <ArrowRight
                        className={cn(
                          "h-3.5 w-3.5 shrink-0 transition",
                          isActive ? "text-white/80" : "text-ink-300 group-hover:text-ink-500",
                        )}
                        strokeWidth={2}
                      />
                    </button>
                  );
                })}
              </div>

              <div className="mt-5 flex items-center gap-2" aria-hidden>
                {steps.map((step, index) => (
                  <button
                    key={`dot-${step.number}`}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={cn(
                      "h-1.5 rounded-full transition-all duration-500 ease-out",
                      safeIndex === index ? "w-8 bg-ink-800" : "w-1.5 bg-ink-300 hover:bg-ink-400",
                    )}
                    aria-label={`Go to step ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            <div className="col-span-5 min-w-0">
              <FlowVisualSlider
                visuals={visuals}
                activeIndex={safeIndex}
                reduceMotion={reduceMotion}
              />
            </div>

            <div className="col-span-4 min-w-0">
              <FlowCopySlider
                steps={steps}
                visuals={visuals}
                activeIndex={safeIndex}
                reduceMotion={reduceMotion}
              />
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}
