import Button from "./Button";
import Container from "./Container";
import { ArrowRight } from "lucide-react";

type Props = {
  title?: string;
  description?: string;
};

export default function CTASection({
  title = "Turn AI into your most reliable teammate.", description = "Ship AI-powered workflows your leadership team can actually trust. Start free, no credit card, no consultants.",
}: Props) {
  return (
    <section className="relative">
      <Container>
        <div className="relative overflow-hidden rounded-[32px] bg-ink-950 px-8 py-16 sm:px-14 sm:py-20 md:px-20">
          <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid-dark opacity-60" />
          <div aria-hidden className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-brand-600/30 blur-3xl" />
          <div aria-hidden className="pointer-events-none absolute -bottom-40 right-0 h-[420px] w-[420px] rounded-full bg-indigo-500/20 blur-3xl" />

          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <h2 className="text-[36px] font-semibold tracking-[-0.02em] text-white sm:text-[48px] sm:leading-[1.05]">
              {title}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-300">{description}</p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button to="/signup" variant="white" size="lg">
                Start free
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button to="/demo" size="lg" className="border border-white/15 bg-white/5 text-white hover:bg-white/10">
                Talk to an expert
              </Button>
            </div>
            <p className="mt-5 text-sm text-ink-400">
              14-day free trial · No credit card · SOC 2-ready controls
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
