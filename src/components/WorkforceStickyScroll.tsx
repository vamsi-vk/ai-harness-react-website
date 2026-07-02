import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import { ArrowRight, FileText, MessageSquare, Star, TrendingUp } from "lucide-react";
import Container from "./Container";
import { cn } from "../lib/cn";
import ScrollReveal from "./ScrollReveal";

type WorkforceCard = {
  job: string;
  agent: string;
  description: string;
  icon: ReactNode;
  href: string;
  image: string;
  imageAlt: string;
  imageFit?: "cover" | "contain";
  gradient: string;
  glow: string;
};

const CARDS: WorkforceCard[] = [
  {
    job: "Never miss a lead",
    agent: "Sales Pipeline & CRM Agent",
    description: "Captures leads, follows up, and keeps customers organized.",
    icon: <TrendingUp className="h-6 w-6" strokeWidth={2} />,
    href: "#sales-pipeline",
    image: "/illustrations/custom/sales-pipeline-agent-slider.png",
    imageAlt: "Sales Pipeline and CRM Agent capturing leads and following up automatically",
    gradient: "from-indigo-500 via-blue-600 to-violet-900",
    glow: "rgba(99,102,241,0.42)",
  },
  {
    job: "Protect your reputation",
    agent: "Reputation & Sentiment Agent",
    description: "Reads and replies to reviews in your voice.",
    icon: <MessageSquare className="h-6 w-6" strokeWidth={2} />,
    href: "#reputation",
    image: "/illustrations/custom/reputation-agent-slider.png",
    imageAlt: "Reputation and Sentiment Agent replying to reviews in your brand voice",
    gradient: "from-rose-400 via-pink-600 to-rose-900",
    glow: "rgba(244,63,94,0.38)",
  },
  {
    job: "Grow your reviews",
    agent: "Automated Review Agent",
    description: "Asks happy customers for reviews, automatically.",
    icon: <Star className="h-6 w-6" strokeWidth={2} />,
    href: "#reviews",
    image: "/illustrations/custom/reviews-agent.png",
    imageAlt: "Automated Review Agent growing five-star reviews",
    gradient: "from-amber-400 via-orange-500 to-rose-600",
    glow: "rgba(251,146,60,0.4)",
  },
  {
    job: "Win more work",
    agent: "Proposal Drafting Agent",
    description: "Turns requests into ready-to-send proposals.",
    icon: <FileText className="h-6 w-6" strokeWidth={2} />,
    href: "#proposals",
    image: "/illustrations/custom/proposals-agent.png",
    imageAlt: "Proposal Drafting Agent turning requests into ready-to-send proposals",
    gradient: "from-cyan-500 via-sky-600 to-blue-900",
    glow: "rgba(56,189,248,0.4)",
  },
];

type CardMotion = {
  progress: number;
  parallax: number;
};

function useCardMotion(cardRefs: React.MutableRefObject<(HTMLDivElement | null)[]>) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [motion, setMotion] = useState<CardMotion[]>(
    () => CARDS.map(() => ({ progress: 0, parallax: 0 })),
  );

  useEffect(() => {
    if (typeof window === "undefined") return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      setMotion(CARDS.map(() => ({ progress: 1, parallax: 0 })));
      return;
    }

    let raf = 0;

    const update = () => {
      const cards = cardRefs.current;
      const vh = window.innerHeight;
      const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
      const focusY = vh * 0.42;

      let bestIndex = 0;
      let bestDistance = Infinity;

      const nextMotion = cards.map((el, index) => {
        if (!el) return { progress: 1, parallax: 0 };

        const rect = el.getBoundingClientRect();
        const cardCenter = rect.top + rect.height * 0.5;
        const distance = Math.abs(cardCenter - focusY);

        if (distance < bestDistance) {
          bestDistance = distance;
          bestIndex = index;
        }

        const revealStart = vh * 0.92;
        const revealEnd = isDesktop ? vh * 0.38 : vh * 0.55;
        const progress = Math.min(1, Math.max(0, (revealStart - rect.top) / (revealStart - revealEnd)));
        const parallax = isDesktop ? (rect.top - focusY) * 0.05 : 0;

        return { progress, parallax };
      });

      setActiveIndex(bestIndex);
      setMotion(nextMotion);
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [cardRefs]);

  return { activeIndex, motion };
}

const STICKY_STACK_STEP = 14;

function WorkforceScrollCard({
  card,
  index,
  activeIndex,
  active,
  motion,
  cardRef,
  isFirst,
  isLast,
}: {
  card: WorkforceCard;
  index: number;
  activeIndex: number;
  active: boolean;
  motion: CardMotion;
  cardRef: (el: HTMLDivElement | null) => void;
  isFirst: boolean;
  isLast: boolean;
}) {
  const { progress, parallax } = motion;
  const isStacked = index < activeIndex;
  const isUpcoming = index > activeIndex;
  const scale = isStacked
    ? 0.97 - (activeIndex - index - 1) * 0.015
    : 0.95 + progress * 0.05;
  const opacity = isStacked || active ? 1 : isUpcoming ? 0.4 + progress * 0.6 : 1;

  const style: CSSProperties = {
    opacity,
    transform: `scale(${scale})`,
    transition: "box-shadow 0.45s cubic-bezier(0.16, 1, 0.3, 1)",
    willChange: "transform, opacity",
  };

  return (
    <div
      ref={cardRef}
      className={cn(
        "lg:sticky",
        "mb-10",
        isFirst && "lg:mt-9",
        !isLast && "lg:mb-[max(36vh,15rem)]",
      )}
      style={{
        zIndex: index + 1,
        top: `calc(var(--wf-sticky-base) + ${index * STICKY_STACK_STEP}px)`,
      }}
    >
      <a
        href={card.href}
        className={cn(
          "group relative flex min-h-[min(52vh,460px)] flex-col overflow-hidden rounded-[28px] border border-white/10 bg-ink-900/80 p-5 shadow-[0_24px_80px_-24px_rgba(0,0,0,0.75)] backdrop-blur-sm sm:p-6",
          "transition-[box-shadow,border-color] duration-500 ease-out hover:border-white/20",
          active && "border-white/20 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.9)]",
        )}
        style={style}
      >
        <div
          aria-hidden
          className={cn(
            "pointer-events-none absolute inset-0 bg-gradient-to-br opacity-90 transition-opacity duration-500",
            card.gradient,
            active ? "opacity-100" : "opacity-80",
          )}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full blur-3xl transition-opacity duration-500"
          style={{
            background: card.glow,
            opacity: active ? 0.9 : 0.45,
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.18),transparent_55%)]"
        />

        <div className="relative flex min-h-0 flex-1 flex-col gap-5 lg:flex-row lg:items-stretch lg:gap-6">
          <div className="flex flex-1 flex-col justify-center gap-5 lg:max-w-[52%] lg:py-1">
            <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/15 text-white ring-1 ring-white/25 backdrop-blur-sm">
              {card.icon}
            </div>

            <div>
              <p className="type-eyebrow text-white/75">
                {card.job}
              </p>
              <h3 className="type-card-title mt-2 max-w-md text-white">
                {card.agent}
              </h3>
              <p className="type-body mt-3 max-w-md text-white/85">
                {card.description}
              </p>
              <span className="type-caption mt-4 inline-flex items-center gap-2 font-semibold text-white/90 transition group-hover:gap-3">
                Learn more
                <ArrowRight className="h-4 w-4" />
              </span>
            </div>
          </div>

          <div className="relative min-h-[10.5rem] flex-1 overflow-hidden rounded-2xl border border-white/15 bg-black/20 sm:min-h-[12rem] lg:min-h-0">
            <img
              src={card.image}
              alt={card.imageAlt}
              className={cn(
                "absolute inset-0 h-full w-full transition-transform duration-300 ease-out will-change-transform group-hover:scale-[1.03]",
                card.imageFit === "contain"
                  ? "object-contain object-center p-1"
                  : "object-cover object-top",
              )}
              style={{ transform: `translateY(${parallax}px) scale(1.02)` }}
              loading="lazy"
              decoding="async"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
          </div>
        </div>
      </a>
    </div>
  );
}

export default function WorkforceStickyScroll() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const { activeIndex, motion } = useCardMotion(cardRefs);

  const setCardRef = (index: number) => (el: HTMLDivElement | null) => {
    cardRefs.current[index] = el;
  };

  return (
    <section
      className="relative bg-ink-950 text-white [--wf-sticky-base:6rem] xl:[--wf-sticky-base:7rem]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(124,58,237,0.22),transparent_60%)]"
      />
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden bg-grid-dark opacity-[0.14]" />

      <Container className="relative">
        <div className="grid gap-10 lg:grid-cols-5 lg:gap-14 xl:gap-16">
          <div className="lg:col-span-2">
            <ScrollReveal className="lg:sticky lg:top-24 lg:h-fit lg:max-h-[calc(100vh-7rem)] lg:py-16 xl:top-28">
          <p className="type-eyebrow text-brand-300">
                Your AI team
              </p>
              <h2 className="type-section mt-4 text-white">
                Meet your{" "}
                <span className="text-gradient">AI workforce</span>
              </h2>
              <p className="type-body-lg mt-6 max-w-md text-white/75">
                AI-Harness is not one big automation. It is a set of distinct AI agents, each hired
                for a specific job. Here is who does what.
              </p>
              <div className="mt-8 hidden items-center gap-3 lg:flex">
                {CARDS.map((card, index) => (
                  <span
                    key={card.agent}
                    className={cn(
                      "h-1.5 rounded-full transition-all duration-500 ease-out",
                      activeIndex === index ? "w-8 bg-white" : "w-1.5 bg-white/25",
                    )}
                  />
                ))}
              </div>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-3">
            <div className="flex flex-col pt-4 lg:pt-16">
              {CARDS.map((card, index) => (
                <WorkforceScrollCard
                  key={card.agent}
                  card={card}
                  index={index}
                  activeIndex={activeIndex}
                  isFirst={index === 0}
                  isLast={index === CARDS.length - 1}
                  active={activeIndex === index}
                  motion={motion[index] ?? { progress: 1, parallax: 0 }}
                  cardRef={setCardRef(index)}
                />
              ))}
              <div
                aria-hidden
                className="pointer-events-none hidden shrink-0 lg:block lg:h-[max(36vh,15rem)]"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
