import type { LucideIcon } from "lucide-react";
import {
  Building2,
  Lock,
  ShieldCheck,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import Container from "./Container";
import LineIcon from "./LineIcon";
import ScrollReveal from "./ScrollReveal";

const ADVANTAGES: {
  title: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Built for local and mid-size businesses",
    description:
      "Simple, affordable, and ready the day you sign up. No consultants, no complexity.",
    icon: Building2,
  },
  {
    title: "Live in minutes, not months",
    description:
      "That is the idea behind “From Months to Minutes.” Ready-to-go agents start working right away.",
    icon: Zap,
  },
  {
    title: "Distinct agents, hire only what you need",
    description:
      "Turn on one agent or several. Each is a separate teammate with its own job.",
    icon: Users,
  },
  {
    title: "You are always in control",
    description:
      "Approve what matters, set spending limits, and step in anytime.",
    icon: ShieldCheck,
  },
  {
    title: "Your data stays yours",
    description:
      "We never train AI models on your business data, and strong security comes standard.",
    icon: Lock,
  },
  {
    title: "Grows with you",
    description:
      "Agents take the manual load off your team and turn one-time customers into repeat revenue.",
    icon: TrendingUp,
  },
];

function AdvantageCard({
  title,
  description,
  icon,
  index,
}: (typeof ADVANTAGES)[number] & { index: number }) {
  return (
    <ScrollReveal delay={index * 60} className="group flex flex-col items-center px-4 py-6 text-center sm:px-6 sm:py-8">
      <LineIcon icon={icon} size="xl" tone="brand" className="transition duration-300 group-hover:scale-105" />
      <h3 className="type-card-title mt-7 max-w-xs text-ink-900 sm:mt-8">
        {title}
      </h3>
      <p className="type-body mt-4 max-w-xs text-ink-600">
        {description}
      </p>
    </ScrollReveal>
  );
}

export default function WhyChooseSection() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <Container>
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          <p className="type-eyebrow text-ink-500">Why choose us</p>
          <h2 className="type-section mt-4 text-ink-900">
            Why local businesses choose{" "}
            <span className="text-gradient">AI-Harness</span>
          </h2>
        </ScrollReveal>

        <div className="mx-auto mt-12 max-w-6xl sm:mt-16">
          <div className="grid gap-2 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 lg:gap-x-6 lg:gap-y-4">
            {ADVANTAGES.map((item, index) => (
              <AdvantageCard key={item.title} {...item} index={index} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
