import { Calendar, Users, Sparkles } from "lucide-react";
import Container from "../components/Container";
import Button from "../components/Button";
import Eyebrow from "../components/Eyebrow";
import Seo from "../components/Seo";
import CalendlyEmbed from "../components/CalendlyEmbed";

export default function RequestDemo() {
  return (
    <>
      <Seo
        path="/demo"
        title="Book a demo | See AI-Harness live"
        description="A 30-minute working session, not a pitch. We map AI-Harness to your organization with concrete examples and a draft rollout plan."
      />
      <section className="relative overflow-hidden pb-20 pt-20">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-spotlight" />
        <Container className="relative">
          <div className="grid gap-14 lg:grid-cols-[1fr_1.15fr] lg:items-stretch">
            <div className="flex flex-col">
              <Eyebrow>Book a demo</Eyebrow>
              <h1 className="mt-6 text-[40px] font-semibold leading-[1.04] tracking-[-0.02em] text-ink-900 sm:text-[52px]">
                See AI-Harness <span className="text-gradient">live.</span>
              </h1>
              <p className="mt-5 text-[16.5px] leading-relaxed text-ink-600">
                In 30 minutes, we'll walk through how AI-Harness would map to your organization, with
                concrete examples from teams already operating this way.
              </p>
              <ul className="mt-10 space-y-5">
                {[
                  {
                    icon: <Calendar className="h-5 w-5" />,
                    title: "30-minute tailored walkthrough",
                    desc: "A working session, not a pitch. Bring your team and your questions.",
                  },
                  {
                    icon: <Users className="h-5 w-5" />,
                    title: "Mapped to your org",
                    desc: "We'll model the first workflow against your structure and compliance constraints.",
                  },
                  {
                    icon: <Sparkles className="h-5 w-5" />,
                    title: "Clear next steps",
                    desc: "Leave with a draft rollout plan and the ROI framing for your leadership team.",
                  },
                ].map((b) => (
                  <li key={b.title} className="flex gap-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-brand-50 text-brand-700 ring-1 ring-inset ring-brand-200/60">
                      {b.icon}
                    </span>
                    <div>
                      <p className="font-semibold text-ink-900">{b.title}</p>
                      <p className="mt-1 text-[14.5px] leading-relaxed text-ink-600">{b.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-10 rounded-2xl border border-ink-200 bg-white p-5 lg:mt-auto lg:pt-5">
                <p className="text-[13.5px] text-ink-700">
                  <span className="font-semibold text-ink-900">Prefer self-serve?</span> Get your own
                  instance with $10 free credits in minutes, no credit card required.
                </p>
                <div className="mt-3">
                  <Button to="/signup" variant="secondary" size="sm">
                    Start free instead
                  </Button>
                </div>
              </div>
            </div>

            <div className="h-full overflow-hidden rounded-[28px] border border-ink-200 bg-white shadow-lift">
              <CalendlyEmbed />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
