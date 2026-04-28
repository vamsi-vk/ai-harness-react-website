import { Link } from "react-router-dom";
import { useState } from "react";
import { ArrowRight, Check, ShieldCheck } from "lucide-react";
import Container from "../components/Container";
import Button from "../components/Button";
import Logo from "../components/Logo";

export default function SignUp() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="relative overflow-hidden py-16 sm:py-20">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-spotlight" />
      <Container className="relative">
        <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div className="max-w-lg">
            <Logo />
            <h1 className="mt-8 text-[40px] font-semibold leading-[1.05] tracking-[-0.02em] text-ink-900 sm:text-[52px]">
              Start your <span className="text-gradient">free workspace.</span>
            </h1>
            <p className="mt-5 text-[16.5px] leading-relaxed text-ink-600">
              Deploy your first AI agent in minutes. Free forever for small teams, scale up when you're ready.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                "Up to 5 users and 3 AI agents", "Full project & task workspace", "Audit trail from day one", "No credit card required", ].map((b) => (
                <li key={b} className="flex items-center gap-3 text-[15px] text-ink-800">
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-brand-50 text-brand-700">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  {b}
                </li>
              ))}
            </ul>
            <div className="mt-10 flex items-center gap-3 rounded-2xl border border-ink-200 bg-white p-4">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-50 text-brand-700">
                <ShieldCheck className="h-5 w-5" />
              </span>
              <p className="text-[13.5px] text-ink-700">
                Enterprise-ready from day one. SSO, SCIM, and audit logs are built in, not bolted on.
              </p>
            </div>
          </div>

          <div className="relative">
            <div aria-hidden className="absolute -inset-4 rounded-[40px] bg-gradient-to-br from-brand-200/40 via-white to-indigo-200/40 blur-2xl" />
            <div className="relative rounded-[28px] border border-ink-200 bg-white p-8 shadow-lift sm:p-10">
              {submitted ? (
                <div className="flex flex-col items-center py-10 text-center">
                  <div className="grid h-14 w-14 place-items-center rounded-full bg-brand-50 text-brand-700">
                    <ArrowRight className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 text-2xl font-semibold text-ink-900">Check your inbox.</h3>
                  <p className="mt-3 max-w-sm text-[15px] text-ink-600">
                    We've sent a magic link to verify your email and set up your workspace.
                  </p>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-semibold text-ink-900">Create your workspace</h2>
                  <p className="mt-2 text-[14px] text-ink-600">Takes less than a minute.</p>
                  <form
                    className="mt-6 space-y-4"
                    onSubmit={(e) => {
                      e.preventDefault();
                      setSubmitted(true);
                    }}
                  >
                    <Input label="Full name" name="name" required />
                    <Input label="Work email" name="email" type="email" required />
                    <Input label="Company name" name="company" required />
                    <Input label="Create a password" name="password" type="password" required />
                    <label className="flex items-start gap-3 text-[13px] text-ink-600">
                      <input type="checkbox" required className="mt-0.5 h-4 w-4 rounded border-ink-300 text-brand-600 focus:ring-brand-500" />
                      <span>
                        I agree to the{" "}
                        <a href="#" onClick={(e) => e.preventDefault()} className="text-brand-700 hover:underline">
                          Terms
                        </a>{" "}
                        and{" "}
                        <a href="#" onClick={(e) => e.preventDefault()} className="text-brand-700 hover:underline">
                          Privacy Policy
                        </a>.
                      </span>
                    </label>
                    <Button className="w-full">
                      Start free
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </form>
                  <div className="my-6 flex items-center gap-3 text-[12px] uppercase tracking-[0.14em] text-ink-400">
                    <span className="h-px flex-1 bg-ink-200" /> or continue with <span className="h-px flex-1 bg-ink-200" />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <SocialButton label="Google" />
                    <SocialButton label="Microsoft" />
                  </div>
                  <p className="mt-6 text-center text-[13.5px] text-ink-600">
                    Already have an account?{" "}
                    <Link to="/login" className="font-semibold text-brand-700 hover:text-brand-800">
                      Sign in
                    </Link>
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
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

function SocialButton({ label }: { label: string }) {
  return (
    <button
      type="button"
      onClick={(e) => e.preventDefault()}
      className="flex h-11 items-center justify-center gap-2 rounded-full border border-ink-200 bg-white text-[14px] font-medium text-ink-800 hover:bg-ink-50"
    >
      {label}
    </button>
  );
}
