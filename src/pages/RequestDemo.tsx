import { useState } from "react";
import { ArrowRight, CheckCircle2, Calendar, Users, Sparkles } from "lucide-react";
import Container from "../components/Container";
import Button from "../components/Button";
import Eyebrow from "../components/Eyebrow";
import Seo from "../components/Seo";

export default function RequestDemo() {
  const [sent, setSent] = useState(false);
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
        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <div>
            <Eyebrow>Book a demo</Eyebrow>
            <h1 className="mt-6 text-[40px] font-semibold leading-[1.04] tracking-[-0.02em] text-ink-900 sm:text-[52px]">
              See AI-Harness <span className="text-gradient">live.</span>
            </h1>
            <p className="mt-5 text-[16.5px] leading-relaxed text-ink-600">
              In 30 minutes, we'll walk through how AI-Harness would map to your organization, with concrete
              examples from teams already operating this way.
            </p>
            <ul className="mt-10 space-y-5">
              {[
                { icon: <Calendar className="h-5 w-5" />, title: "30-minute tailored walkthrough", desc: "A working session, not a pitch. Bring your team and your questions." }, { icon: <Users className="h-5 w-5" />, title: "Mapped to your org", desc: "We'll model the first workflow against your structure and compliance constraints." }, { icon: <Sparkles className="h-5 w-5" />, title: "Clear next steps", desc: "Leave with a draft rollout plan and the ROI framing for your leadership team." }, ].map((b) => (
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
            <div className="mt-10 rounded-2xl border border-ink-200 bg-white p-5">
              <p className="text-[13.5px] text-ink-700">
                <span className="font-semibold text-ink-900">Prefer self-serve?</span> Get your own instance with
                $10 free credits in minutes, no credit card required.
              </p>
              <div className="mt-3">
                <Button to="/signup" variant="secondary" size="sm">
                  Start free instead
                </Button>
              </div>
            </div>
          </div>

          <div className="rounded-[28px] border border-ink-200 bg-white p-8 shadow-lift sm:p-10">
            {sent ? (
              <div className="flex flex-col items-center py-12 text-center">
                <div className="grid h-14 w-14 place-items-center rounded-full bg-brand-50 text-brand-700">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-2xl font-semibold text-ink-900">You're on the list.</h3>
                <p className="mt-3 max-w-sm text-[15px] text-ink-600">
                  A member of our team will reach out within 1 business day to find time that works for you.
                </p>
                <div className="mt-6">
                  <Button to="/signup">Start your free workspace</Button>
                </div>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="space-y-5"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <Input label="First name" name="firstName" required />
                  <Input label="Last name" name="lastName" required />
                  <Input label="Work email" name="email" type="email" required />
                  <Input label="Phone (optional)" name="phone" />
                  <Input label="Company" name="company" required />
                  <Input label="Job title" name="title" required />
                </div>
                <Select label="Company size" name="size" options={["1–10", "11–50", "51–200", "201–1,000", "1,000–5,000", "5,000+"]} />
                <Select
                  label="Where are you in your AI journey?"
                  name="journey"
                  options={["Exploring", "Running pilots", "Scaling across teams", "Already deployed at scale"]}
                />
                <Textarea
                  label="What would you like to explore on the call?"
                  name="message"
                  rows={4}
                  placeholder="e.g., KYC automation across 3 markets with compliance oversight…"
                />
                <p className="text-xs text-ink-500">
                  By submitting, you agree to our Privacy Policy.
                </p>
                <Button className="w-full">
                  Request demo
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </form>
            )}
          </div>
        </div>
      </Container>
    </section>
    </>
  );
}

function Input({
  label, name, type = "text", required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block text-[14px] font-medium text-ink-800">
      {label}
      <input
        name={name}
        type={type}
        required={required}
        className="mt-1.5 w-full rounded-xl border border-ink-200 bg-white px-3.5 py-2.5 text-[14.5px] text-ink-900 outline-none placeholder:text-ink-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
      />
    </label>
  );
}

function Select({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <label className="block text-[14px] font-medium text-ink-800">
      {label}
      <select
        name={name}
        className="mt-1.5 w-full rounded-xl border border-ink-200 bg-white px-3.5 py-2.5 text-[14.5px] text-ink-900 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
      >
        <option value="">Select…</option>
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </label>
  );
}

function Textarea({
  label, name, rows = 3, placeholder,
}: {
  label: string;
  name: string;
  rows?: number;
  placeholder?: string;
}) {
  return (
    <label className="block text-[14px] font-medium text-ink-800">
      {label}
      <textarea
        name={name}
        rows={rows}
        placeholder={placeholder}
        className="mt-1.5 w-full rounded-xl border border-ink-200 bg-white px-3.5 py-2.5 text-[14.5px] text-ink-900 outline-none placeholder:text-ink-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
      />
    </label>
  );
}
