import { ArrowRight, Compass, Heart, Sparkles, Users2 } from "lucide-react";
import Container from "../components/Container";
import Button from "../components/Button";
import Eyebrow from "../components/Eyebrow";
import SectionHeading from "../components/SectionHeading";
import CTASection from "../components/CTASection";

export default function About() {
  return (
    <>
      <Hero />
      <Beliefs />
      <Leadership />
      <Investors />
      <Careers />
      <CTASection
        title="Ready to run the AI-era operating model?"
        description="Join the teams shaping how modern organizations work — humans and AI, together."
      />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden pb-16 pt-24">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-spotlight" />
      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>Our Story</Eyebrow>
          <h1 className="mt-6 text-[44px] font-semibold leading-[1.04] tracking-[-0.02em] text-ink-900 sm:text-[60px]">
            We're building the operating system for <span className="text-gradient">the AI-era enterprise.</span>
          </h1>
          <p className="mt-5 text-lg text-ink-600 sm:text-xl">
            Every major technology wave has been defined by how organizations put it to work. We believe AI
            will be no different — and the companies that figure out how to run a unified human + AI workforce
            will define the next decade.
          </p>
        </div>
      </Container>
    </section>
  );
}

function Beliefs() {
  const beliefs = [
    {
      icon: <Compass className="h-5 w-5" />,
      title: "AI is a workforce, not a toolbox.",
      description:
        "Treat AI agents as accountable teammates — with roles, reports, and responsibilities — and you change what's possible.",
    },
    {
      icon: <Users2 className="h-5 w-5" />,
      title: "Humans stay in the loop that matters.",
      description:
        "The best results come when humans do what humans do best — judgment, relationships, strategy — and AI handles the rest.",
    },
    {
      icon: <Sparkles className="h-5 w-5" />,
      title: "Governance unlocks ambition.",
      description:
        "The organizations that scale AI fastest are the ones with the strongest controls — not the weakest.",
    },
    {
      icon: <Heart className="h-5 w-5" />,
      title: "Transparency is the product.",
      description:
        "Every decision traceable. Every outcome explainable. No black boxes in the workflows that matter.",
    },
  ];

  return (
    <section id="careers" className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="What we believe"
          title={<>Four ideas that <span className="text-gradient">shape everything we build.</span></>}
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {beliefs.map((b) => (
            <div key={b.title} className="rounded-3xl border border-ink-200 bg-white p-8">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-700 ring-1 ring-inset ring-brand-200/60">
                {b.icon}
              </span>
              <h3 className="mt-6 text-xl font-semibold text-ink-900">{b.title}</h3>
              <p className="mt-3 text-[15.5px] leading-relaxed text-ink-600">{b.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Leadership() {
  const team = [
    { name: "Alex Rivera", role: "Co-founder & CEO", bio: "Former VP of Platform at a Fortune 100 fintech." },
    { name: "Priya Shah", role: "Co-founder & CTO", bio: "Distributed systems engineer. Ex-ML infra at a leading cloud." },
    { name: "Marcus Chen", role: "Chief Product Officer", bio: "Led enterprise workflow products for 10+ years." },
    { name: "Sofia Lindqvist", role: "VP of Security", bio: "Built governance programs at top-tier SaaS companies." },
  ];

  return (
    <section className="py-20 sm:py-28 bg-ink-50/70">
      <Container>
        <SectionHeading
          eyebrow="Leadership"
          title={<>A team that has <span className="text-gradient">built this before.</span></>}
          description="Our leadership has run enterprise platforms, ML systems, and security programs at the scale we're building for."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((p) => (
            <div key={p.name} className="rounded-2xl border border-ink-200 bg-white p-6">
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-base font-semibold text-white">
                {p.name.split(" ").map((n) => n[0]).join("")}
              </div>
              <p className="mt-5 font-semibold text-ink-900">{p.name}</p>
              <p className="text-[13px] font-medium uppercase tracking-[0.1em] text-brand-700">{p.role}</p>
              <p className="mt-3 text-[14px] leading-relaxed text-ink-600">{p.bio}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Investors() {
  const names = ["Anchor Capital", "Northfield Ventures", "Arc Partners", "Meridian Growth", "Sequoia-backed founders"];
  return (
    <section className="py-14">
      <Container>
        <p className="text-center text-sm font-medium uppercase tracking-[0.14em] text-ink-500">Backed by</p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-[15px] font-semibold text-ink-500">
          {names.map((n) => (
            <span key={n}>{n}</span>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Careers() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="rounded-[32px] border border-ink-200 bg-gradient-to-br from-brand-50 via-white to-indigo-50 p-10 sm:p-14">
          <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-center">
            <div>
              <Eyebrow>Careers</Eyebrow>
              <h2 className="mt-5 text-[32px] font-semibold leading-[1.08] tracking-[-0.02em] text-ink-900 sm:text-[40px]">
                Come build the platform that <span className="text-gradient">changes how work gets done.</span>
              </h2>
              <p className="mt-5 text-[16.5px] leading-relaxed text-ink-700">
                We're hiring across engineering, product, design, and go-to-market. Remote-friendly across the US,
                EU, and UK.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button to="/contact">
                  See open roles
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button to="/contact" variant="secondary">
                  Refer someone great
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {["Remote-first", "Transparent comp", "Shared equity", "Wellness stipend", "Home office budget", "Learning budget"].map(
                (perk) => (
                  <div
                    key={perk}
                    className="rounded-2xl border border-ink-200 bg-white px-4 py-3 text-[14px] font-medium text-ink-800"
                  >
                    {perk}
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
