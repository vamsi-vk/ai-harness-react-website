import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { ArrowRight, type LucideIcon } from "lucide-react";
import Container from "./Container";
import ScrollReveal from "./ScrollReveal";
import SoftPastelBackdrop from "./marketing-automation/SoftPastelBackdrop";
import { cn } from "../lib/cn";
import {
  FLOW_ACCENT_STYLES,
  flowAccentForIndex,
  type FlowAccent,
} from "./agent-journey-accents";

export type AgentFlowStep = {
  number: string;
  title: ReactNode;
  body: string;
  railLabel?: string;
  imageSrc?: string;
  imageAlt?: string;
  accent?: FlowAccent;
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
  sectionId?: string;
};

/** Viewport heights of scroll runway per step (desktop / mobile) */
const SCROLL_VH_PER_STEP = { desktop: 72, mobile: 58 };

function clamp(n: number, min: number, max: number) {
  return Math.min(max, Math.max(min, n));
}

function FlowBrandPanel({
  visual,
  index,
  total,
  accent,
}: {
  visual: AgentFlowVisual;
  index: number;
  total: number;
  accent: FlowAccent;
}) {
  const Icon = visual.icon;
  const styles = FLOW_ACCENT_STYLES[accent];

  return (
    <div className="flex h-full min-h-[16rem] flex-col bg-white p-5 sm:min-h-[18rem] sm:p-6">
      <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-600">{visual.panelHint}</p>
      <div className="mt-4 flex items-center gap-3">
        <span className={cn("grid h-11 w-11 place-items-center rounded-xl text-white", styles.dot)}>
          <Icon className="h-5 w-5" strokeWidth={1.85} />
        </span>
        <p className="text-lg font-semibold tracking-tight text-ink-900 sm:text-xl">{visual.panelTitle}</p>
      </div>
      <div className="mt-5 flex-1 rounded-2xl border border-brand-100/90 bg-gradient-to-br from-brand-50/80 via-white to-violet-50/40 p-4">
        <div className="flex flex-wrap gap-2">
          {visual.chips.map((chip) => (
            <span
              key={chip}
              className="rounded-full border border-brand-200/80 bg-white px-3 py-1.5 text-xs font-medium text-brand-800 shadow-sm"
            >
              {chip}
            </span>
          ))}
        </div>
        <div className="mt-5 space-y-2.5">
          <div className="h-2 w-[78%] rounded-full bg-brand-100" />
          <div className="h-2 w-[55%] rounded-full bg-brand-50" />
          <div className="h-2 w-[64%] rounded-full bg-brand-50" />
        </div>
      </div>
      <p className="mt-4 text-sm tabular-nums text-ink-500">
        Step {String(index + 1).padStart(2, "0")} of {String(total).padStart(2, "0")}
      </p>
    </div>
  );
}

function FlowStage({
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
  const step = steps[activeIndex];
  const visual = visuals[activeIndex] ?? visuals[0];
  const accent = flowAccentForIndex(activeIndex, step?.accent);
  const styles = FLOW_ACCENT_STYLES[accent];
  const hasImage = Boolean(step?.imageSrc);

  return (
    <div className="relative min-w-0">
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute -inset-4 rounded-[2rem] bg-gradient-to-br opacity-90 blur-2xl transition-all duration-700 sm:-inset-6",
          styles.glow,
          !reduceMotion && "animate-pulse [animation-duration:4.5s]",
        )}
      />
      <div className="relative overflow-hidden rounded-[1.75rem] bg-ink-900 p-1 shadow-[0_28px_56px_-20px_rgba(15,23,42,0.5)] ring-1 ring-ink-800/90 sm:rounded-[2rem] sm:p-1.5">
        <div className={cn("rounded-[calc(1.75rem-4px)] bg-gradient-to-br p-[2px] sm:rounded-[calc(2rem-6px)]", styles.ring)}>
          <div className="overflow-hidden rounded-[calc(1.75rem-6px)] bg-ink-950 sm:rounded-[calc(2rem-8px)]">
            <div className="flex items-center gap-2 border-b border-white/10 px-4 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-rose-400/90" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400/90" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/90" />
              <p className="ml-2 truncate text-[11px] font-medium text-white/50 sm:text-xs">
                {visual?.panelHint ?? "Live preview"}
              </p>
            </div>
            <div className="relative aspect-[4/3] w-full">
              {steps.map((s, index) => {
                const v = visuals[index] ?? visuals[0];
                if (s.imageSrc) {
                  return (
                    <img
                      key={s.number}
                      src={s.imageSrc}
                      alt={index === activeIndex ? (s.imageAlt ?? "") : ""}
                      className={cn(
                        "absolute inset-0 h-full w-full object-cover object-center transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
                        index === activeIndex ? "scale-100 opacity-100" : "pointer-events-none scale-[1.02] opacity-0",
                      )}
                      loading={index <= 1 ? "eager" : "lazy"}
                      decoding="async"
                      aria-hidden={index !== activeIndex}
                    />
                  );
                }
                return (
                  <div
                    key={s.number}
                    className={cn(
                      "absolute inset-0 transition-all duration-700",
                      index === activeIndex ? "opacity-100" : "pointer-events-none opacity-0",
                    )}
                    aria-hidden={index !== activeIndex}
                  >
                    {v ? (
                      <FlowBrandPanel
                        visual={v}
                        index={index}
                        total={steps.length}
                        accent={flowAccentForIndex(index, s.accent)}
                      />
                    ) : null}
                  </div>
                );
              })}
              {hasImage && visual?.chips.length ? (
                <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink-950/95 via-ink-950/70 to-transparent p-4 pt-10">
                  <div className="flex flex-wrap gap-2">
                    {visual.chips.map((chip) => (
                      <span
                        key={chip}
                        className="rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-white/95 ring-1 ring-white/20 backdrop-blur-sm"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FlowStepCopy({
  step,
  visual,
  activeIndex,
  total,
  accent,
}: {
  step: AgentFlowStep;
  visual: AgentFlowVisual | undefined;
  activeIndex: number;
  total: number;
  accent: FlowAccent;
}) {
  const Icon = visual?.icon;
  const styles = FLOW_ACCENT_STYLES[accent];

  return (
    <div className="min-w-0">
      {Icon ? (
        <span className={cn("grid h-12 w-12 place-items-center rounded-2xl text-white shadow-soft", styles.dot)}>
          <Icon className="h-5 w-5" strokeWidth={1.85} />
        </span>
      ) : null}
      <p className="mt-5 text-sm font-medium tabular-nums text-ink-400">
        Step {String(activeIndex + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
      </p>
      <h3 className="mt-2 text-[clamp(1.35rem,2vw,1.85rem)] font-medium leading-[1.15] tracking-[-0.02em] text-ink-900">
        {step.title}
      </h3>
      <p className="mt-4 text-[15px] leading-[1.7] text-ink-600 lg:text-base">{step.body}</p>
      {visual?.chips ? (
        <div className="mt-5 flex flex-wrap gap-2">
          {visual.chips.map((chip) => (
            <span
              key={chip}
              className="rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-800 ring-1 ring-brand-200/80"
            >
              {chip}
            </span>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default function AgentFlowStepsSection({
  eyebrow = "The flow",
  title,
  steps,
  visuals,
  className,
  sectionId = "agent-flow",
}: AgentFlowStepsSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const scrollLockRef = useRef(false);

  const safeIndex = Math.min(activeIndex, Math.max(steps.length - 1, 0));
  const step = steps[safeIndex];
  const visual = visuals[safeIndex] ?? visuals[0];
  const accent = flowAccentForIndex(safeIndex, step?.accent);
  const styles = FLOW_ACCENT_STYLES[accent];
  const progress = steps.length <= 1 ? 100 : (safeIndex / (steps.length - 1)) * 100;
  const showThumbStrip = steps.length > 1;

  const vhPerStep = isDesktop ? SCROLL_VH_PER_STEP.desktop : SCROLL_VH_PER_STEP.mobile;
  const trackMinHeight = steps.length * vhPerStep;

  const railLabel = (s: AgentFlowStep) =>
    s.railLabel ?? (typeof s.title === "string" ? s.title : `Step ${s.number}`);

  const updateIndexFromScroll = useCallback(() => {
    const track = trackRef.current;
    if (!track || scrollLockRef.current) return;

    const rect = track.getBoundingClientRect();
    const scrollable = track.offsetHeight - window.innerHeight;
    if (scrollable <= 0) {
      setActiveIndex(0);
      return;
    }

    const scrolled = clamp(-rect.top, 0, scrollable);
    const ratio = scrolled / scrollable;
    const next = clamp(Math.round(ratio * (steps.length - 1)), 0, steps.length - 1);
    setActiveIndex(next);
  }, [steps.length]);

  const scrollToStep = useCallback(
    (index: number) => {
      const track = trackRef.current;
      if (!track) return;

      const scrollable = track.offsetHeight - window.innerHeight;
      if (scrollable <= 0) {
        setActiveIndex(index);
        return;
      }

      const ratio = steps.length <= 1 ? 0 : index / (steps.length - 1);
      const top = track.offsetTop + ratio * scrollable;

      scrollLockRef.current = true;
      window.scrollTo({ top, behavior: reduceMotion ? "auto" : "smooth" });
      setActiveIndex(index);

      window.setTimeout(() => {
        scrollLockRef.current = false;
      }, reduceMotion ? 0 : 650);
    },
    [reduceMotion, steps.length],
  );

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

  useEffect(() => {
    if (reduceMotion) return;

    updateIndexFromScroll();
    window.addEventListener("scroll", updateIndexFromScroll, { passive: true });
    window.addEventListener("resize", updateIndexFromScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", updateIndexFromScroll);
      window.removeEventListener("resize", updateIndexFromScroll);
    };
  }, [reduceMotion, updateIndexFromScroll, trackMinHeight]);

  const thumbStrip = showThumbStrip ? (
    <div className="mt-3 flex gap-2">
      {steps.map((s, index) => {
        const itemAccent = flowAccentForIndex(index, s.accent);
        const itemStyles = FLOW_ACCENT_STYLES[itemAccent];
        const isActive = index === safeIndex;
        if (s.imageSrc) {
          return (
            <button
              key={`thumb-${s.number}`}
              type="button"
              onClick={() => scrollToStep(index)}
              className={cn(
                "relative h-12 w-[3.25rem] overflow-hidden rounded-lg ring-2 transition-all",
                isActive
                  ? "ring-brand-500 ring-offset-2 ring-offset-white"
                  : "opacity-50 ring-transparent hover:opacity-90",
              )}
            >
              <img src={s.imageSrc} alt="" className="h-full w-full object-cover" />
            </button>
          );
        }
        return (
          <button
            key={`thumb-${s.number}`}
            type="button"
            onClick={() => scrollToStep(index)}
            className={cn(
              "grid h-12 w-12 place-items-center rounded-lg text-xs font-semibold tabular-nums ring-2 transition-all",
              isActive
                ? cn("text-white ring-brand-500 ring-offset-2 ring-offset-white", itemStyles.dot)
                : "bg-white text-ink-500 ring-ink-200/90 hover:ring-brand-200",
            )}
          >
            {String(index + 1).padStart(2, "0")}
          </button>
        );
      })}
    </div>
  ) : null;

  const railButtons = (
    <div className="flex flex-col gap-2.5">
      {steps.map((s, index) => {
        const isActive = safeIndex === index;
        const itemAccent = flowAccentForIndex(index, s.accent);
        const itemStyles = FLOW_ACCENT_STYLES[itemAccent];
        return (
          <button
            key={s.number}
            type="button"
            onClick={() => scrollToStep(index)}
            className={cn(
              "group flex items-center justify-between gap-3 rounded-2xl border px-4 py-3 text-left transition-all duration-300",
              isActive ? itemStyles.railActive : cn("text-ink-700", itemStyles.railIdle),
            )}
            aria-current={isActive ? "step" : undefined}
          >
            <span className="text-sm font-medium">
              <span
                className={cn(
                  "mr-2 inline-grid h-7 w-7 place-items-center rounded-full text-xs tabular-nums ring-1",
                  isActive ? "bg-white/20 ring-white/30" : "bg-ink-50 ring-ink-200/80",
                )}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              {railLabel(s)}
            </span>
            <ArrowRight
              className={cn(
                "h-4 w-4 shrink-0 transition group-hover:translate-x-0.5",
                isActive ? "text-white/90" : "text-ink-300",
              )}
            />
          </button>
        );
      })}
    </div>
  );

  return (
    <section
      ref={sectionRef}
      id={sectionId}
      className={cn("relative scroll-mt-28 border-y border-ink-100/80", className)}
      aria-label="Step-by-step flow"
    >
      <SoftPastelBackdrop side="right" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_45%_at_80%_0%,rgba(124,58,237,0.1),transparent)]"
      />

      <Container className="relative z-10 pt-16 sm:pt-20">
        <ScrollReveal className="mx-auto max-w-3xl text-center lg:mx-0 lg:max-w-none lg:text-left">
          <p className="text-sm font-medium text-ink-500">{eyebrow}</p>
          <h2 className="mt-3 text-[clamp(1.75rem,3.2vw,2.35rem)] font-medium leading-[1.12] tracking-[-0.02em] text-ink-900 lg:max-w-md">
            {title}
          </h2>
          {!reduceMotion ? (
            <p className="mt-3 text-base text-ink-600 lg:max-w-sm">
              Scroll to move through each step. The preview updates as you go.
            </p>
          ) : null}
        </ScrollReveal>
      </Container>

      {reduceMotion ? (
        <Container className="relative z-10 space-y-10 py-12 sm:py-16">
          {steps.map((s, index) => {
            const v = visuals[index] ?? visuals[0];
            const itemAccent = flowAccentForIndex(index, s.accent);
            return (
              <div key={s.number} className="grid gap-8 lg:grid-cols-2 lg:items-center">
                <FlowStage
                  steps={steps}
                  visuals={visuals}
                  activeIndex={index}
                  reduceMotion
                />
                <FlowStepCopy
                  step={s}
                  visual={v}
                  activeIndex={index}
                  total={steps.length}
                  accent={itemAccent}
                />
              </div>
            );
          })}
        </Container>
      ) : (
        <div
          ref={trackRef}
          className="relative"
          style={{ minHeight: `${trackMinHeight}vh` }}
        >
          <div className="sticky top-[5.5rem] z-10 pb-16 pt-8 sm:top-28 sm:pt-10">
            <Container>
              <div className="grid grid-cols-12 items-start gap-6 xl:gap-8">
                <div className="col-span-12 lg:col-span-4">
                  <div className="relative mt-2 hidden lg:block">
                    <div className="absolute bottom-4 left-[1.35rem] top-4 w-0.5 rounded-full bg-ink-200/90" />
                    <div
                      className={cn(
                        "absolute left-[1.35rem] top-4 w-0.5 rounded-full bg-gradient-to-b to-brand-500 transition-[height] duration-500",
                        styles.line,
                      )}
                      style={{ height: `${Math.max(8, progress * 0.85)}%` }}
                    />
                  </div>
                  <div className="mt-4 hidden lg:block">{railButtons}</div>

                  <div className="flex gap-2 overflow-x-auto pb-1 lg:hidden [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                    {steps.map((s, index) => {
                      const itemAccent = flowAccentForIndex(index, s.accent);
                      const itemStyles = FLOW_ACCENT_STYLES[itemAccent];
                      const isActive = safeIndex === index;
                      return (
                        <button
                          key={s.number}
                          type="button"
                          onClick={() => scrollToStep(index)}
                          className={cn(
                            "shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-all",
                            isActive ? itemStyles.railActive : cn("text-ink-600", itemStyles.railIdle),
                          )}
                        >
                          {railLabel(s)}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="col-span-12 lg:col-span-5">
                  <FlowStage
                    steps={steps}
                    visuals={visuals}
                    activeIndex={safeIndex}
                    reduceMotion={reduceMotion}
                  />
                  {thumbStrip}
                </div>

                <div className="col-span-12 lg:col-span-3">
                  <FlowStepCopy
                    step={step}
                    visual={visual}
                    activeIndex={safeIndex}
                    total={steps.length}
                    accent={accent}
                  />
                </div>
              </div>
            </Container>
          </div>
        </div>
      )}
    </section>
  );
}
