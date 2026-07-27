import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import Container from "../Container";
import ScrollReveal from "../ScrollReveal";
import SoftPastelBackdrop from "../marketing-automation/SoftPastelBackdrop";
import { cn } from "../../lib/cn";
import PictureSet from "../../components/PictureSet";

export type ReviewJourneyStep = {
  number: string;
  title: ReactNode;
  body: string;
  railLabel: string;
  imageSrc: string;
  imageAlt: string;
  /** Subtle glow behind the stage */
  accent: "violet" | "sky" | "emerald" | "amber" | "rose";
};

const ACCENT_STYLES: Record<
  ReviewJourneyStep["accent"],
  { glow: string; ring: string; dot: string; line: string }
> = {
  violet: {
    glow: "from-violet-500/25 via-fuchsia-400/10 to-transparent",
    ring: "from-violet-500/40 via-brand-400/30 to-violet-300/40",
    dot: "bg-violet-600 shadow-[0_0_0_4px_rgba(124,58,237,0.2)]",
    line: "from-violet-500",
  },
  sky: {
    glow: "from-sky-500/20 via-cyan-400/10 to-transparent",
    ring: "from-sky-500/35 via-cyan-400/25 to-sky-300/35",
    dot: "bg-sky-600 shadow-[0_0_0_4px_rgba(2,132,199,0.2)]",
    line: "from-sky-500",
  },
  emerald: {
    glow: "from-emerald-500/20 via-teal-400/10 to-transparent",
    ring: "from-emerald-500/35 via-teal-400/25 to-emerald-300/35",
    dot: "bg-emerald-600 shadow-[0_0_0_4px_rgba(5,150,105,0.2)]",
    line: "from-emerald-500",
  },
  amber: {
    glow: "from-amber-500/22 via-orange-400/10 to-transparent",
    ring: "from-amber-500/35 via-orange-400/25 to-amber-300/35",
    dot: "bg-amber-600 shadow-[0_0_0_4px_rgba(217,119,6,0.2)]",
    line: "from-amber-500",
  },
  rose: {
    glow: "from-rose-500/20 via-pink-400/10 to-transparent",
    ring: "from-rose-500/35 via-pink-400/25 to-rose-300/35",
    dot: "bg-rose-600 shadow-[0_0_0_4px_rgba(225,29,72,0.2)]",
    line: "from-rose-500",
  },
};

const AUTO_ADVANCE_MS = 5500;

type ReviewGenerationJourneySectionProps = {
  eyebrow?: string;
  title: ReactNode;
  steps: ReviewJourneyStep[];
  className?: string;
};

export default function ReviewGenerationJourneySection({
  eyebrow = "Follow one customer",
  title,
  steps,
  className,
}: ReviewGenerationJourneySectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const pauseUntilRef = useRef(0);
  const sectionRef = useRef<HTMLElement>(null);

  const safeIndex = Math.min(activeIndex, Math.max(steps.length - 1, 0));
  const step = steps[safeIndex];
  const accent = ACCENT_STYLES[step.accent];
  const progress = steps.length <= 1 ? 100 : (safeIndex / (steps.length - 1)) * 100;

  const goTo = useCallback(
    (index: number) => {
      const next = Math.max(0, Math.min(steps.length - 1, index));
      setActiveIndex(next);
      pauseUntilRef.current = Date.now() + 12_000;
    },
    [steps.length],
  );

  const goPrev = useCallback(() => goTo(safeIndex - 1), [goTo, safeIndex]);
  const goNext = useCallback(() => goTo(safeIndex + 1), [goTo, safeIndex]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const motionMedia = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(motionMedia.matches);
    sync();
    motionMedia.addEventListener("change", sync);
    return () => motionMedia.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (!isPlaying || reduceMotion) return;
    const id = window.setInterval(() => {
      if (Date.now() < pauseUntilRef.current) return;
      setActiveIndex((current) => (current + 1 >= steps.length ? 0 : current + 1));
    }, AUTO_ADVANCE_MS);
    return () => window.clearInterval(id);
  }, [isPlaying, reduceMotion, steps.length]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (!sectionRef.current?.contains(document.activeElement) && document.activeElement !== document.body) {
        return;
      }
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        goPrev();
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        goNext();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goNext, goPrev]);

  return (
    <section
      ref={sectionRef}
      id="review-journey"
      className={cn(
        "relative scroll-mt-28 overflow-hidden border-y border-ink-100/80 py-16 sm:py-24",
        className,
      )}
      aria-roledescription="carousel"
      aria-label="Customer review journey"
    >
      <SoftPastelBackdrop side="left" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(124,58,237,0.12),transparent)]"
      />

      <Container className="relative z-10">
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium text-ink-500">{eyebrow}</p>
          <h2 className="mt-4 text-[clamp(1.75rem,3.2vw,2.75rem)] font-medium leading-[1.12] tracking-[-0.02em] text-ink-900">
            {title}
          </h2>
          <p className="mt-4 text-base text-ink-600 sm:text-lg">
            Tap a milestone, use the arrows, or press play. The story moves at your pace.
          </p>
        </ScrollReveal>

        {/* Timeline rail */}
        <div className="mx-auto mt-12 max-w-4xl sm:mt-14">
          <div className="relative hidden sm:block">
            <div className="absolute left-[10%] right-[10%] top-5 h-0.5 rounded-full bg-ink-200/90" />
            <div
              className={cn(
                "absolute left-[10%] top-5 h-0.5 rounded-full bg-gradient-to-r to-brand-500 transition-[width] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
                accent.line,
              )}
              style={{ width: `${10 + progress * 0.8}%` }}
            />
            <ol className="relative flex justify-between gap-2">
              {steps.map((s, index) => {
                const isActive = index === safeIndex;
                const isPast = index < safeIndex;
                const nodeAccent = ACCENT_STYLES[s.accent];
                return (
                  <li key={s.number} className="flex flex-1 flex-col items-center">
                    <button
                      type="button"
                      onClick={() => goTo(index)}
                      className="group flex flex-col items-center gap-2 text-center"
                      aria-current={isActive ? "step" : undefined}
                    >
                      <span
                        className={cn(
                          "grid h-10 w-10 place-items-center rounded-full text-sm font-semibold tabular-nums transition-all duration-500",
                          isActive
                            ? cn("text-white", nodeAccent.dot)
                            : isPast
                              ? "bg-ink-800 text-white ring-1 ring-ink-800"
                              : "bg-white text-ink-500 ring-1 ring-ink-200 group-hover:ring-ink-300",
                        )}
                      >
                        {s.number}
                      </span>
                      <span
                        className={cn(
                          "max-w-[7.5rem] text-xs font-medium leading-snug transition-colors",
                          isActive ? "text-ink-900" : "text-ink-500 group-hover:text-ink-700",
                        )}
                      >
                        {s.railLabel}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ol>
          </div>

          {/* Mobile step chips */}
          <div className="flex gap-2 overflow-x-auto pb-2 sm:hidden [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {steps.map((s, index) => (
              <button
                key={s.number}
                type="button"
                onClick={() => goTo(index)}
                className={cn(
                  "shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-all",
                  index === safeIndex
                    ? "border-ink-900 bg-ink-900 text-white shadow-soft"
                    : "border-ink-200 bg-white text-ink-600",
                )}
              >
                {s.railLabel}
              </button>
            ))}
          </div>
        </div>

        {/* Stage */}
        <div className="mx-auto mt-10 max-w-6xl lg:mt-12">
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-12 xl:gap-16">
            <div className="relative min-w-0">
              <div
                aria-hidden
                className={cn(
                  "pointer-events-none absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br opacity-80 blur-2xl transition-all duration-700",
                  accent.glow,
                  reduceMotion ? "" : "animate-pulse [animation-duration:4s]",
                )}
              />

              <div className="relative overflow-hidden rounded-[2rem] bg-ink-900 p-1 shadow-[0_32px_64px_-24px_rgba(15,23,42,0.45)] ring-1 ring-ink-800/80 sm:rounded-[2.25rem] sm:p-1.5">
                <div
                  className={cn(
                    "rounded-[calc(2rem-4px)] bg-gradient-to-br p-[2px] sm:rounded-[calc(2.25rem-6px)]",
                    accent.ring,
                  )}
                >
                  <div className="relative overflow-hidden rounded-[calc(2rem-6px)] bg-ink-950 sm:rounded-[calc(2.25rem-8px)]">
                    <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
                      <span className="h-2.5 w-2.5 rounded-full bg-rose-400/90" />
                      <span className="h-2.5 w-2.5 rounded-full bg-amber-400/90" />
                      <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/90" />
                      <p className="ml-2 truncate text-xs font-medium text-white/50">
                        Live journey · Step {step.number} of {steps.length}
                      </p>
                    </div>

                    <div className="relative aspect-[4/3] w-full">
                      {steps.map((s, index) => (
                        <PictureSet
      base={s.imageSrc}
                          key={s.number}
                         
                          alt={index === safeIndex ? s.imageAlt : ""}
                          className={cn(
                            "absolute inset-0 h-full w-full object-cover object-center transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
                            index === safeIndex
                              ? "scale-100 opacity-100"
                              : "pointer-events-none scale-[1.03] opacity-0",
                          )}
                          loading={index <= 1 ? "eager" : "lazy"}
                         
                          aria-hidden={index !== safeIndex}
                         sizes="(max-width: 1024px) 100vw, 800px"/>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Thumbnail strip */}
              <div className="mt-4 hidden gap-2 sm:flex">
                {steps.map((s, index) => (
                  <button
                    key={`thumb-${s.number}`}
                    type="button"
                    onClick={() => goTo(index)}
                    className={cn(
                      "relative h-14 w-[4.5rem] shrink-0 overflow-hidden rounded-xl ring-2 transition-all",
                      index === safeIndex
                        ? "ring-brand-500 ring-offset-2 ring-offset-ink-50"
                        : "opacity-55 ring-transparent hover:opacity-90",
                    )}
                  >
                    <PictureSet
      base={s.imageSrc} alt="" className="h-full w-full object-cover"  sizes="(max-width: 1024px) 100vw, 800px"/>
                  </button>
                ))}
              </div>
            </div>

            <div className="flex min-w-0 flex-col">
              <p className="text-sm font-medium tabular-nums text-ink-400">
                Step {String(safeIndex + 1).padStart(2, "0")} / {String(steps.length).padStart(2, "0")}
              </p>
              <h3
                key={`title-${safeIndex}`}
                className={cn(
                  "mt-3 text-[clamp(1.65rem,2.8vw,2.35rem)] font-medium leading-[1.12] tracking-[-0.02em] text-ink-900 transition-all duration-500",
                  !reduceMotion && "translate-y-0 opacity-100",
                )}
              >
                {step.title}
              </h3>
              <p
                key={`body-${safeIndex}`}
                className={cn(
                  "mt-4 text-lg font-normal leading-[1.7] text-ink-600 transition-all duration-500 delay-75",
                )}
              >
                {step.body}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={goPrev}
                  disabled={safeIndex === 0}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink-200 bg-white text-ink-700 transition hover:border-ink-300 hover:bg-ink-50 disabled:pointer-events-none disabled:opacity-40"
                  aria-label="Previous step"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={goNext}
                  disabled={safeIndex === steps.length - 1}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink-200 bg-white text-ink-700 transition hover:border-ink-300 hover:bg-ink-50 disabled:pointer-events-none disabled:opacity-40"
                  aria-label="Next step"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setIsPlaying((p) => !p);
                    pauseUntilRef.current = 0;
                  }}
                  className={cn(
                    "inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium transition",
                    isPlaying
                      ? "border-ink-900 bg-ink-900 text-white"
                      : "border-ink-200 bg-white text-ink-800 hover:border-ink-300",
                  )}
                >
                  {isPlaying ? (
                    <>
                      <Pause className="h-4 w-4" />
                      Pause story
                    </>
                  ) : (
                    <>
                      <Play className="h-4 w-4" />
                      Play journey
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
