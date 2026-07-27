import Button from "./Button";
import Container from "./Container";
import { ArrowRight } from "lucide-react";
import { cn } from "../lib/cn";

type CtaConfig = {
  label: string;
  to: string;
};

type Props = {
  title?: string;
  description?: string;
  primaryCta?: CtaConfig;
  secondaryCta?: CtaConfig;
  footnote?: string | false;
};

type Bubble = {
  size: number;
  opacity: number;
  depth: "far" | "mid" | "near";
  kind: "glass" | "ring";
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
};

/** Soft 3D glass orbs — far = bokeh blur, near = sharper glass */
const BUBBLES: Bubble[] = [
  { top: "-5rem", left: "-4rem", size: 260, opacity: 0.55, depth: "far", kind: "glass" },
  { top: "6%", right: "-6rem", size: 210, opacity: 0.5, depth: "far", kind: "glass" },
  { bottom: "-6rem", left: "8%", size: 280, opacity: 0.45, depth: "far", kind: "glass" },
  { bottom: "-3rem", right: "-4rem", size: 200, opacity: 0.5, depth: "mid", kind: "glass" },
  { top: "-2.5rem", left: "38%", size: 96, opacity: 0.7, depth: "near", kind: "glass" },
  { top: "38%", left: "-2rem", size: 72, opacity: 0.65, depth: "near", kind: "glass" },
  { top: "18%", left: "14%", size: 42, opacity: 0.75, depth: "near", kind: "glass" },
  { top: "62%", left: "22%", size: 28, opacity: 0.8, depth: "near", kind: "glass" },
  { top: "22%", right: "16%", size: 56, opacity: 0.7, depth: "mid", kind: "glass" },
  { bottom: "16%", right: "10%", size: 120, opacity: 0.55, depth: "mid", kind: "glass" },
  { top: "48%", right: "-1.5rem", size: 88, opacity: 0.6, depth: "near", kind: "glass" },
  { top: "8%", left: "58%", size: 64, opacity: 0.45, depth: "mid", kind: "ring" },
  { bottom: "28%", left: "4%", size: 110, opacity: 0.4, depth: "mid", kind: "ring" },
  { top: "55%", right: "28%", size: 48, opacity: 0.5, depth: "near", kind: "ring" },
];

const DEPTH_CLASS = {
  far: "cta-orb cta-orb-far",
  mid: "cta-orb cta-orb-mid",
  near: "cta-orb cta-orb-near",
} as const;

export default function CTASection({
  title = "Turn AI into your highly reliable teammate.",
  description = "Ship AI-powered workflows your leadership team can actually trust. Start with $10 free credits, no credit card, no consultants.",
  primaryCta = { label: "Start free", to: "/signup" },
  secondaryCta = { label: "Talk to an expert", to: "/demo" },
  footnote = "Your own instance in minutes · $10 free credits · No credit card · SOC 2-ready controls",
}: Props) {
  return (
    <section className="relative overflow-visible py-12 sm:py-16">
      <Container className="relative overflow-visible">
        {/* Soft field behind the floating card */}
        <div
          aria-hidden
          className="pointer-events-none absolute -inset-8 z-0 sm:-inset-12 md:-inset-16"
        >
          <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-[#F8F9FB] via-[#EEF2F6] to-[#E8EDF3]" />
          <div className="absolute -left-12 top-4 h-96 w-96 rounded-full bg-ink-400/[0.08] blur-3xl" />
          <div className="absolute -right-10 bottom-0 h-[28rem] w-[28rem] rounded-full bg-ink-400/[0.06] blur-3xl" />

          <div className="cta-dot-grid absolute right-2 top-2 h-40 w-40 opacity-50" />
          <div className="cta-dot-grid absolute bottom-4 right-8 h-36 w-36 opacity-40" />
          <div className="cta-dot-grid absolute left-4 bottom-6 h-32 w-32 opacity-35" />

          <div className="absolute -right-24 -top-24 h-[22rem] w-[22rem] rounded-full border border-ink-300/35" />
          <div className="absolute -right-10 -top-10 h-52 w-52 rounded-full border border-ink-300/25" />
          <div className="absolute -bottom-28 -left-20 h-[26rem] w-[26rem] rounded-full border border-ink-300/40" />

          {BUBBLES.map((b, i) => (
            <div
              key={i}
              className={cn(
                "absolute rounded-full",
                b.kind === "ring" ? "cta-orb-ring" : DEPTH_CLASS[b.depth],
              )}
              style={{
                width: b.size,
                height: b.size,
                opacity: b.opacity,
                top: b.top,
                left: b.left,
                right: b.right,
                bottom: b.bottom,
              }}
            />
          ))}

          {/* Overlapping orbs in front of the card */}
          <div
            className="cta-orb cta-orb-near absolute -right-6 top-[12%] z-20 h-28 w-28 rounded-full opacity-70"
          />
          <div
            className="cta-orb cta-orb-mid absolute -left-4 bottom-[18%] z-20 h-36 w-36 rounded-full opacity-55"
          />
          <div
            className="cta-orb cta-orb-near absolute right-[12%] -bottom-5 z-20 h-16 w-16 rounded-full opacity-65"
          />
        </div>

        {/* Light gray floating card */}
        <div className="cta-abstract relative z-10 overflow-hidden rounded-[32px] px-8 py-16 sm:px-14 sm:py-20 md:px-20">
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="cta-orb cta-orb-mid absolute -left-16 -top-20 h-56 w-56 opacity-45" />
            <div className="cta-orb cta-orb-far absolute -bottom-24 -right-16 h-64 w-64 opacity-40" />
            <div className="cta-orb cta-orb-near absolute right-[18%] top-8 h-14 w-14 opacity-55" />
            <div className="cta-orb-ring absolute bottom-10 left-[22%] h-24 w-24 opacity-35" />
          </div>

          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <h2 className="text-[36px] font-normal tracking-[-0.02em] text-ink-900 sm:text-[48px] sm:leading-[1.05]">
              {title}
            </h2>
            <p className="mt-5 text-lg font-normal leading-relaxed text-ink-500">
              {description}
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button to={primaryCta.to} variant="primary" size="lg">
                {primaryCta.label}
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button to={secondaryCta.to} variant="secondary" size="lg">
                {secondaryCta.label}
              </Button>
            </div>
            {footnote && (
              <p className="mt-5 text-sm font-normal text-ink-500">{footnote}</p>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
