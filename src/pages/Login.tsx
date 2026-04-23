import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Container from "../components/Container";
import Button from "../components/Button";
import Logo from "../components/Logo";

export default function Login() {
  return (
    <section className="relative overflow-hidden py-20">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-spotlight" />
      <Container className="relative">
        <div className="mx-auto max-w-md rounded-[28px] border border-ink-200 bg-white p-8 shadow-lift sm:p-10">
          <div className="flex justify-center">
            <Logo />
          </div>
          <h1 className="mt-8 text-center text-3xl font-semibold tracking-tight text-ink-900">
            Welcome back.
          </h1>
          <p className="mt-2 text-center text-[14.5px] text-ink-600">Sign in to your AI-Harness workspace.</p>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-8 space-y-4"
          >
            <Input label="Work email" name="email" type="email" required />
            <Input label="Password" name="password" type="password" required />
            <div className="flex items-center justify-between text-[13px]">
              <label className="flex items-center gap-2 text-ink-600">
                <input type="checkbox" className="h-4 w-4 rounded border-ink-300 text-brand-600 focus:ring-brand-500" />
                Remember me
              </label>
              <a href="#" onClick={(e) => e.preventDefault()} className="font-semibold text-brand-700 hover:text-brand-800">
                Forgot password?
              </a>
            </div>
            <Button className="w-full">
              Sign in
              <ArrowRight className="h-4 w-4" />
            </Button>
          </form>

          <div className="my-6 flex items-center gap-3 text-[12px] uppercase tracking-[0.14em] text-ink-400">
            <span className="h-px flex-1 bg-ink-200" /> or <span className="h-px flex-1 bg-ink-200" />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <SocialButton label="SSO" />
            <SocialButton label="Google" />
          </div>

          <p className="mt-8 text-center text-[14px] text-ink-600">
            New to AI-Harness?{" "}
            <Link to="/signup" className="font-semibold text-brand-700 hover:text-brand-800">
              Create a free account
            </Link>
          </p>
        </div>
      </Container>
    </section>
  );
}

function Input({
  label,
  name,
  type = "text",
  required,
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
