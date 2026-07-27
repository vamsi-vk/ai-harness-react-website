import { useEffect, useState } from "react";
import { cn } from "../../lib/cn";

const MESSAGES = [
  "Initializing AI…",
  "Loading Intelligence…",
  "Preparing Experience…",
  "Welcome.",
] as const;

const SESSION_KEY = "aih-home-intro-seen";

type HomeIntroLoaderProps = {
  onDone: () => void;
};

export default function HomeIntroLoader({ onDone }: HomeIntroLoaderProps) {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const seen = sessionStorage.getItem(SESSION_KEY) === "1";

    if (reduced || seen) {
      setVisible(false);
      onDone();
      return;
    }

    const start = performance.now();
    const duration = 2800;
    let frame = 0;

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      setProgress(Math.round(t * 100));
      setMessageIndex(Math.min(MESSAGES.length - 1, Math.floor(t * MESSAGES.length)));
      if (t < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        sessionStorage.setItem(SESSION_KEY, "1");
        setExiting(true);
        window.setTimeout(() => {
          setVisible(false);
          onDone();
        }, 520);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [onDone]);

  if (!visible) return null;

  const circumference = 2 * Math.PI * 42;
  const offset = circumference * (1 - progress / 100);

  return (
    <div
      className={cn(
        "fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-ink-950 transition-[opacity,transform,filter] duration-500 ease-out",
        exiting && "scale-[1.04] opacity-0 blur-md",
      )}
      aria-busy="true"
      aria-live="polite"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-80"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 20% 30%, rgba(120,57,224,0.45), transparent 60%), radial-gradient(ellipse 40% 50% at 80% 70%, rgba(154,111,240,0.35), transparent 55%), radial-gradient(ellipse 60% 40% at 50% 100%, rgba(100,40,212,0.25), transparent 50%)",
        }}
      />
      <div aria-hidden className="home-loader-particles pointer-events-none absolute inset-0" />

      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        <div className="relative mb-8 grid h-28 w-28 place-items-center">
          <svg className="absolute inset-0 h-full w-full -rotate-90" viewBox="0 0 100 100" aria-hidden>
            <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="3" />
            <circle
              cx="50"
              cy="50"
              r="42"
              fill="none"
              stroke="url(#homeLoaderGrad)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              className="transition-[stroke-dashoffset] duration-150 ease-out"
            />
            <defs>
              <linearGradient id="homeLoaderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#B89AF8" />
                <stop offset="100%" stopColor="#7839E0" />
              </linearGradient>
            </defs>
          </svg>
          <img
            src="/favicon.svg"
            alt=""
            width={48}
            height={48}
            className="h-12 w-12 rounded-xl shadow-[0_0_40px_rgba(120,57,224,0.55)]"
          />
        </div>
        <p className="font-serif text-2xl tracking-tight text-white sm:text-3xl">AI-Harness</p>
        <p className="mt-3 min-h-[1.5rem] text-sm font-medium tracking-wide text-white/70">
          {MESSAGES[messageIndex]}
        </p>
        <p className="mt-2 tabular-nums text-xs text-white/40">{progress}%</p>
      </div>
    </div>
  );
}
