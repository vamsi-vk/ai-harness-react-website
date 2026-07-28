import { useState, type ReactElement } from "react";
import { Mail, MessageSquare, PhoneCall, Building2, MapPin, ArrowRight, Linkedin, Instagram, Youtube, Share2 } from "lucide-react";
import Container from "../components/Container";
import Button from "../components/Button";
import Eyebrow from "../components/Eyebrow";
import Seo from "../components/Seo";

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" className={className}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117l11.966 15.644Z" />
    </svg>
  );
}

const socials: Array<{ label: string; href: string; Icon: (props: { className?: string }) => ReactElement }> = [
  { label: "LinkedIn", href: "https://linkedin.com/company/ai-harness-com/", Icon: ({ className }) => <Linkedin className={className} /> },
  { label: "X (Twitter)", href: "https://x.com/ai_harness", Icon: XIcon },
  { label: "Instagram", href: "https://instagram.com/ai.harness", Icon: ({ className }) => <Instagram className={className} /> },
  { label: "YouTube", href: "https://youtube.com/@ai-harness", Icon: ({ className }) => <Youtube className={className} /> },
];

export default function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <Seo
        path="/contact"
        title="Contact Us | Talk to the AI-Harness team"
        description="Get in touch with sales, support, partners, or security. The AI-Harness team responds within one business day."
      />
      <section className="relative overflow-hidden pb-4 pt-10 sm:pb-6 sm:pt-12">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-spotlight" />
        <Container className="relative">
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow>Contact Us</Eyebrow>
            <h1 className="mt-3 text-[30px] font-semibold leading-[1.04] tracking-[-0.02em] text-ink-900 sm:text-[40px]">
              We'd love to <span className="text-gradient">hear from you.</span>
            </h1>
            <p className="mt-2 text-[15px] text-ink-600 sm:text-base">
              Whether you're evaluating the platform or building a case inside your organization, our team is here.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-7 sm:py-8">
        <Container>
          <div className="grid gap-4 lg:grid-cols-[0.95fr_1.25fr]">
            <div className="space-y-2.5">
              {[
                { icon: <MessageSquare className="h-5 w-5" />, title: "Sales", sub: "sales@ai-harness.com", desc: "Deals, pilots, and enterprise rollouts." }, { icon: <Mail className="h-5 w-5" />, title: "Support", sub: "support@ai-harness.com", desc: "Customer support and product help." }, { icon: <PhoneCall className="h-5 w-5" />, title: "Press & partners", sub: "partners@ai-harness.com", desc: "Media and partnership inquiries." }, { icon: <Building2 className="h-5 w-5" />, title: "Security", sub: "security@ai-harness.com", desc: "Responsible disclosure and security team." }, ].map((c) => (
                <div key={c.title} className="flex items-start gap-3 rounded-2xl border border-ink-200 bg-white p-3.5">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-700 ring-1 ring-inset ring-brand-200/60">
                    {c.icon}
                  </span>
                  <div>
                    <p className="text-[15px] font-semibold text-ink-900">{c.title}</p>
                    <p className="text-[14px] text-brand-700">{c.sub}</p>
                    <p className="mt-0.5 text-[13px] text-ink-600">{c.desc}</p>
                  </div>
                </div>
              ))}
              <div className="hidden items-start gap-4 rounded-2xl border border-ink-200 bg-white p-4 lg:flex">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-700 ring-1 ring-inset ring-brand-200/60">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-semibold text-ink-900">Offices</p>
                  <p className="mt-1 text-[13.5px] text-ink-600">San Francisco · Singapore · India</p>
                </div>
              </div>
              <div className="hidden rounded-2xl border border-ink-200 bg-white p-4 lg:block">
                <div className="flex items-start gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-700 ring-1 ring-inset ring-brand-200/60">
                    <Share2 className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-semibold text-ink-900">Follow us</p>
                    <p className="mt-1 text-[13.5px] text-ink-600">
                      Product launches, customer stories, and AI research.
                    </p>
                  </div>
                </div>
                <div className="mt-3 grid grid-cols-2 gap-2">
                  {socials.map(({ label, href, Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="group flex items-center gap-3 rounded-xl border border-ink-200 bg-white px-3.5 py-2.5 transition-colors hover:border-brand-300 hover:bg-brand-50/40"
                    >
                      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-ink-100 text-ink-700 transition-colors group-hover:bg-brand-100 group-hover:text-brand-700">
                        <Icon className="h-4 w-4" />
                      </span>
                      <span className="block truncate text-[13px] font-semibold text-ink-900">{label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-[28px] border border-ink-200 bg-white p-4.5 shadow-soft sm:p-5">
              {sent ? (
                <div className="flex flex-col items-center justify-center py-14 text-center">
                  <div className="grid h-14 w-14 place-items-center rounded-full bg-brand-50 text-brand-700">
                    <ArrowRight className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 text-2xl font-semibold text-ink-900">Thanks, we'll be in touch.</h3>
                  <p className="mt-3 max-w-md text-[15px] text-ink-600">
                    A member of our team will reach out within 1 business day. In the meantime, feel free to start
                    a free account and explore the platform.
                  </p>
                  <div className="mt-6">
                    <Button to="/signup">Start free</Button>
                  </div>
                </div>
              ) : (
                <>
                <h2 className="text-2xl font-semibold leading-tight tracking-[-0.01em] text-ink-900">
                  Send us a message
                </h2>
                <p className="mt-2 text-[15px] text-ink-600">Usually replies within one business day.</p>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSent(true);
                  }}
                  className="mt-6 space-y-4"
                >
                  <div className="grid gap-4">
                    <Field label="Full name" name="fullName" required />
                    <Field
                      label="Work email"
                      name="email"
                      type="email"
                      required
                      hint="Use your corporate email. Gmail, Outlook, and disposable addresses aren't accepted."
                    />
                    <Field label="Company" name="company" required />
                    <Field label="Job title" name="title" />
                  </div>
                  <Field label="How can we help?" name="message" as="textarea" rows={4} />
                  <div className="flex flex-col gap-3 pt-1">
                    <p className="text-xs text-ink-500">
                      By submitting, you agree to our Privacy Policy.
                    </p>
                    <Button className="w-full">
                      Send message
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </form>
                </>
              )}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

function Field({
  label, name, type = "text", required, as = "input", rows = 3, options = [], hint,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  as?: "input" | "textarea" | "select";
  rows?: number;
  options?: string[];
  hint?: string;
}) {
  const className =
    "mt-1.5 w-full rounded-2xl border border-ink-200 bg-white px-4 py-3 text-[16px] text-ink-900 outline-none placeholder:text-ink-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-100";
  return (
    <label className="block text-[14px] font-medium text-ink-800">
      {label} {required && <span className="text-brand-600">*</span>}
      {as === "input" && <input type={type} name={name} required={required} className={className} />}
      {as === "textarea" && <textarea name={name} rows={rows} className={className} />}
      {as === "select" && (
        <select name={name} className={className}>
          <option value="">Select…</option>
          {options.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
      )}
      {hint ? <span className="mt-1.5 block text-[12.5px] font-normal text-ink-500">{hint}</span> : null}
    </label>
  );
}
