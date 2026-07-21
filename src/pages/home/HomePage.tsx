import { ArrowRight, Bot, CheckCircle2, LineChart, Lock, MessageSquare, ShieldCheck, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import Container from "../../components/Container";
import Button from "../../components/Button";
import Seo from "../../components/Seo";
import FaqJsonLd from "../../components/FaqJsonLd";
import FaqAccordion from "../../components/FaqAccordion";
import CTASection from "../../components/CTASection";
import ScrollReveal from "../../components/ScrollReveal";
import HeroBackgroundVideo from "../../components/HeroBackgroundVideo";
import {
  HOME_AGENT_GROUPS,
  HOME_FAQS,
  HOME_INDUSTRIES,
} from "../../data/homeContent";

function HomeSchema() {
  const json = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        name: "AI-Harness",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        url: "https://ai-harness.com/",
        description:
          "AI-Harness gives your business a team of AI agents that get you found, win reviews, follow up leads, book appointments, and get you paid.",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
          description: "Start free with $10 in credits, no credit card required",
        },
        publisher: { "@type": "Organization", name: "AI-Harness" },
      },
    ],
  });
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}

export default function HomePage() {
  return (
    <>
      <Seo
        path="/"
        title="AI Agents That Run Your Business, Done For You"
        description="AI-Harness gives your business a team of AI agents that get you found, win reviews, follow up leads, book appointments, and get you paid. Not a chatbot, agents that do the work. You approve, they run it. Start free."
        keywords="ai agents for business, ai workforce, ai employees for business, ai marketing agents, what is an ai agent, ai review management, get found on ai search, ai social media manager, ai appointment booking, ai lead follow up"
      />
      <FaqJsonLd faqs={HOME_FAQS} />
      <HomeSchema />

      <HeroSection />
      <ShiftSection />
      <WorkforceSection />
      <IndustriesSection />
      <HowItWorksSection />
      <GrowSection />
      <ControlSection />
      <ProofSection />
      <PricingTeaserSection />
      <EnterpriseSection />
      <FaqSection />
      <div className="py-16 sm:py-20">
        <CTASection
          title="Your business, running every day. Your evenings, back."
          description="Hire your first AI agent in the next few minutes. Start free with $10 in credits, no credit card, no consultants."
          primaryCta={{ label: "Start free", to: "/signup" }}
          secondaryCta={{ label: "Talk to us", to: "/contact" }}
          footnote="Free to start with $10 in credits · No credit card"
        />
      </div>
    </>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-[min(88vh,820px)] overflow-hidden pb-20 pt-16 sm:pb-28 sm:pt-24">
      <HeroBackgroundVideo
        src="/video/hero-bg.mp4"
        poster="/illustrations/custom/hero-office.png"
        overlayOpacity={62}
      />
      <Container className="relative z-10">
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium tracking-[0.16em] text-brand-700 uppercase">
            Human-Led AI Agents For Your Business
          </p>
          <h1 className="mt-4 text-[clamp(2rem,4.5vw,3.35rem)] font-medium leading-[1.08] tracking-[-0.025em] text-ink-900">
            Your AI workforce, running the busy work while you run the business
          </h1>
          <p className="mt-5 text-lg font-normal leading-[1.7] text-ink-600 sm:text-xl">
            A team of AI agents that make your brand more visible, turn attention into customers,
            and put more revenue on the board, getting you found, winning your reviews, following
            up your leads, booking your appointments, and getting you paid. You set the direction
            and approve what matters. They do the work, day and night.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button to="/signup" size="lg">
              Start free
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button to="/demo" variant="secondary" size="lg">
              See it in action
            </Button>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-ink-500">
            Free to start with $10 in credits · No credit card
          </p>
        </ScrollReveal>
      </Container>
    </section>
  );
}

function ShiftSection() {
  return (
    <section className="border-y border-ink-100 bg-ink-50/60 py-16 sm:py-20">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <ScrollReveal>
            <h2 className="text-[clamp(1.75rem,3.2vw,2.5rem)] font-medium leading-[1.15] tracking-[-0.02em] text-ink-900">
              A chatbot answers. An AI agent does the job.
            </h2>
            <p className="mt-5 text-lg font-normal leading-[1.75] text-ink-700">
              The way customers find you has changed. They ask AI where to go, they judge you by your
              reviews, and they message long after you have closed. Most tools just hand you another
              screen and more homework. AI-Harness works the other way: each agent owns a real job,
              does it, and reports back, so you approve outcomes instead of operating software.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={60}>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-ink-200 bg-white p-6 shadow-soft">
                <p className="text-sm font-medium text-ink-500">Chatbot</p>
                <p className="mt-2 text-lg font-medium text-ink-900">Answers a question</p>
              </div>
              <div className="rounded-3xl border border-brand-200/80 bg-brand-50/50 p-6 shadow-soft ring-1 ring-brand-100">
                <p className="text-sm font-medium text-brand-700">AI agent</p>
                <p className="mt-2 text-lg font-medium text-ink-900">Does the job</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}

function WorkforceSection() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <Container>
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-[clamp(1.75rem,3.2vw,2.75rem)] font-medium leading-[1.12] tracking-[-0.02em] text-ink-900">
            One platform. A full team of agents.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-600">
            Turn on the agents you need, add more as they earn their place, and let them work as one
            connected team, from getting found to getting paid.
          </p>
        </ScrollReveal>

        <div className="mt-14 space-y-14 sm:mt-16">
          {HOME_AGENT_GROUPS.map((group, gi) => (
            <div key={group.title}>
              <ScrollReveal delay={gi * 40}>
                <h3 className="text-sm font-medium tracking-[0.14em] text-brand-700 uppercase">
                  {group.title}
                </h3>
              </ScrollReveal>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {group.agents.map((agent, ai) => (
                  <ScrollReveal key={agent.name} delay={gi * 40 + ai * 30}>
                    <article className="flex h-full flex-col rounded-3xl border border-ink-200/90 bg-white p-6 shadow-soft transition hover:border-brand-200/80">
                      <p className="flex-1 text-[15px] leading-relaxed text-ink-700">{agent.outcome}</p>
                      <p className="mt-4 text-base font-medium text-ink-900">→ {agent.name}</p>
                      <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
                        <Button to={agent.seeTo} size="sm" variant={agent.live ? "primary" : "secondary"}>
                          {agent.seeLabel}
                        </Button>
                        <Button to="/signup" size="sm" variant="ghost">
                          Start free
                        </Button>
                      </div>
                    </article>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          ))}
        </div>

        <ScrollReveal className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button to="/ai-agents" size="lg">
            Meet the full workforce
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button to="/signup" variant="secondary" size="lg">
            Start free
          </Button>
        </ScrollReveal>
      </Container>
    </section>
  );
}

function IndustriesSection() {
  return (
    <section className="border-y border-ink-100 bg-brand-50/30 py-16 sm:py-20">
      <Container>
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-[clamp(1.75rem,3.2vw,2.5rem)] font-medium leading-[1.15] tracking-[-0.02em] text-ink-900">
            Tuned to how your business runs
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-600">
            Not generic software with your logo on top. The agents adapt to the moments that make you
            money in your line of work.
          </p>
        </ScrollReveal>
        <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
          {HOME_INDUSTRIES.map((item, index) => (
            <ScrollReveal key={item.name} delay={index * 40}>
              <div className="h-full rounded-3xl border border-ink-200/80 bg-white p-6">
                <h3 className="text-lg font-medium text-ink-900">{item.name}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-600">{item.body}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  <Link
                    to="/industries"
                    className="text-sm font-medium text-brand-700 hover:text-brand-800"
                  >
                    See AI-Harness for {item.name}
                  </Link>
                  <span className="text-ink-300">·</span>
                  <Link to="/signup" className="text-sm font-medium text-ink-600 hover:text-ink-900">
                    Start free
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal className="mt-10 flex justify-center gap-3">
          <Button to="/industries" variant="secondary">
            See your industry
          </Button>
          <Button to="/signup">Start free</Button>
        </ScrollReveal>
      </Container>
    </section>
  );
}

const HOW_STEPS = [
  {
    title: "Connect and teach it your voice, once",
    body: "Link the tools you already use and answer a few plain questions. Your agents learn your voice, hours, and rules from what you have already published.",
  },
  {
    title: "Approve the plan in minutes",
    body: "Your agents come back with what they intend to do. You review, edit, and approve, about twenty minutes for a month of work.",
  },
  {
    title: "They work, you stay in control",
    body: "Agents run across every channel, day and night, and hand off to each other cleanly. Anything sensitive waits for your tap.",
  },
];

function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-white py-16 sm:py-24">
      <Container>
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-[clamp(1.75rem,3.2vw,2.5rem)] font-medium leading-[1.15] tracking-[-0.02em] text-ink-900">
            From your first agent to a working team, in an afternoon
          </h2>
        </ScrollReveal>
        <div className="mx-auto mt-12 grid max-w-5xl gap-6 sm:mt-14 lg:grid-cols-3">
          {HOW_STEPS.map((step, index) => (
            <ScrollReveal key={step.title} delay={index * 50}>
              <div className="h-full rounded-3xl border border-ink-200/90 bg-ink-50/50 p-6">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-brand-50 text-sm font-medium text-brand-700 ring-1 ring-brand-200/70">
                  {index + 1}
                </span>
                <h3 className="mt-4 text-lg font-medium text-ink-900">{step.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-600">{step.body}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal className="mt-10 flex justify-center gap-3">
          <Button to="/signup">Start free</Button>
          <Button to="/demo" variant="secondary">
            Book a walkthrough
          </Button>
        </ScrollReveal>
      </Container>
    </section>
  );
}

function GrowSection() {
  return (
    <section className="border-y border-ink-100 bg-ink-50/60 py-16 sm:py-20">
      <Container>
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-[clamp(1.75rem,3.2vw,2.5rem)] font-medium leading-[1.15] tracking-[-0.02em] text-ink-900">
            Start with one agent. Scale to a workforce.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-700">
            Behind the scenes your agents share one view of your business, so they hand work off to
            each other cleanly and act at the right moment instead of waiting to be told. Start with
            the one job that hurts most, then expand across your whole operation, one location or
            many, without ripping anything out. And the workforce keeps getting stronger: new agents
            and capabilities are added over time, so the platform grows into more of your business as
            you do.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={60} className="mx-auto mt-10 flex max-w-lg justify-center">
          <div className="flex items-center gap-3 rounded-3xl border border-ink-200 bg-white px-6 py-5 shadow-soft">
            <Bot className="h-8 w-8 text-brand-600" />
            <ArrowRight className="h-5 w-5 text-ink-400" />
            <div className="flex -space-x-2">
              {[Sparkles, MessageSquare, LineChart].map((Icon, i) => (
                <span
                  key={i}
                  className="grid h-10 w-10 place-items-center rounded-full border-2 border-white bg-brand-50 text-brand-700"
                >
                  <Icon className="h-4 w-4" />
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}

const CONTROL_POINTS = [
  {
    icon: ShieldCheck,
    title: "You approve, they act",
    body: "Nothing sensitive goes out in your name until you allow it.",
  },
  {
    icon: LineChart,
    title: "Never a surprise bill",
    body: "Set a monthly limit per agent; it pauses when it is reached.",
  },
  {
    icon: CheckCircle2,
    title: "Every action on the record",
    body: "Every reply, post, and follow-up is logged and searchable.",
  },
  {
    icon: Lock,
    title: "Your data stays yours",
    body: "Never sold, never used to train models.",
  },
];

function ControlSection() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <Container>
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-[clamp(1.75rem,3.2vw,2.5rem)] font-medium leading-[1.15] tracking-[-0.02em] text-ink-900">
            More automation should mean the right control, not less of it
          </h2>
        </ScrollReveal>
        <div className="mx-auto mt-10 grid max-w-5xl gap-4 sm:mt-12 sm:grid-cols-2">
          {CONTROL_POINTS.map((item, index) => {
            const Icon = item.icon;
            return (
              <ScrollReveal key={item.title} delay={index * 40}>
                <div className="flex gap-4 rounded-3xl border border-ink-200/90 bg-white p-6">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-700">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-lg font-medium text-ink-900">{item.title}</h3>
                    <p className="mt-1 text-[15px] leading-relaxed text-ink-600">{item.body}</p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

function ProofSection() {
  return (
    <section className="border-y border-ink-100 bg-ink-50/50 py-16 sm:py-20">
      <Container>
        <ScrollReveal className="text-center">
          <h2 className="text-[clamp(1.75rem,3.2vw,2.5rem)] font-medium leading-[1.15] tracking-[-0.02em] text-ink-900">
            What owners say after the first month
          </h2>
        </ScrollReveal>
        <div className="mx-auto mt-10 grid max-w-5xl gap-4 sm:grid-cols-3">
          {[1, 2, 3].map((slot) => (
            <ScrollReveal key={slot} delay={slot * 40}>
              <div className="rounded-3xl border border-dashed border-ink-300 bg-white/80 p-6 text-center">
                <p className="text-sm text-ink-500">
                  Result slot {slot} — supply one number, one line, and a named customer when ready.
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-xl text-center text-xs text-ink-500">
          Trust row: add 4–6 named client logos with permission. Leave empty rather than borrow.
        </p>
      </Container>
    </section>
  );
}

function PricingTeaserSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-[clamp(1.75rem,3.2vw,2.5rem)] font-medium leading-[1.15] tracking-[-0.02em] text-ink-900">
            Start free. Add agents as they earn their place.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-600">
            Simple monthly plans with single-agent options, so you can begin with the one job that
            hurts most and grow into a full workforce when you are ready. No credit card to start.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button to="/contact" variant="secondary">
              See plans
            </Button>
            <Button to="/signup">Start free</Button>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}

function EnterpriseSection() {
  return (
    <section className="border-t border-ink-100 bg-brand-50/40 py-16 sm:py-20">
      <Container>
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <p className="text-lg leading-relaxed text-ink-700">
            Bigger team, more locations, or deeper controls and reporting? AI-Harness scales into a
            fully governed workforce with the oversight larger operations require.
          </p>
          <Button to="/platform" className="mt-8" variant="secondary" size="lg">
            Explore AI-Harness for Enterprise
          </Button>
        </ScrollReveal>
      </Container>
    </section>
  );
}

function FaqSection() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <Container>
        <ScrollReveal>
          <h2 className="max-w-4xl text-[clamp(2.25rem,5vw,3.5rem)] font-normal leading-[1.1] tracking-[-0.03em] text-ink-900">
            Frequently Asked Questions
          </h2>
        </ScrollReveal>
        <div className="mt-10 sm:mt-14">
          <FaqAccordion items={HOME_FAQS} variant="lines" className="font-poppins" />
        </div>
      </Container>
    </section>
  );
}
