import { Link } from "react-router-dom";
import { useState } from "react";
import { ArrowRight, Check, ShieldCheck, MailCheck, RefreshCw, X } from "lucide-react";
import Container from "../components/Container";
import Button from "../components/Button";
import Seo from "../components/Seo";
import { cn } from "../lib/cn";

const EMAIL_REGEX =
  /^[A-Za-z0-9._%+-]+@[A-Za-z0-9-]+(?:\.[A-Za-z0-9-]+)*\.[A-Za-z]{2,}$/;

const PUBLIC_EMAIL_DOMAINS = new Set([
  "gmail.com", "googlemail.com", "yahoo.com", "yahoo.co.uk", "yahoo.co.in", "ymail.com", "rocketmail.com", "outlook.com", "hotmail.com", "hotmail.co.uk", "live.com", "msn.com", "icloud.com", "me.com", "mac.com", "aol.com", "proton.me", "protonmail.com", "gmx.com", "gmx.de", "yandex.com", "yandex.ru", "mail.com", "tutanota.com", "fastmail.com", "zoho.com",
]);

const DISPOSABLE_EMAIL_DOMAINS = new Set([
  "mailinator.com", "tempmail.com", "temp-mail.org", "temp-mail.io", "10minutemail.com", "10minutemail.net", "guerrillamail.com", "guerrillamail.net", "guerrillamail.org", "throwaway.email", "throwawaymail.com", "yopmail.com", "getnada.com", "nada.email", "fakeinbox.com", "trashmail.com", "trashmail.net", "sharklasers.com", "maildrop.cc", "dispostable.com", "mintemail.com", "mohmal.com", "spamgourmet.com", "tempinbox.com", "tempr.email", "tempmailo.com", "moakt.com", "emailondeck.com",
]);

function validateWorkEmail(email: string): string | null {
  const trimmed = email.trim().toLowerCase();
  if (!trimmed) return "Email is required.";
  if (!EMAIL_REGEX.test(trimmed)) return "Enter a valid email address.";
  const domain = trimmed.split("@")[1];
  if (PUBLIC_EMAIL_DOMAINS.has(domain)) {
    return "Please use your work email. Public providers like Gmail or Outlook aren't accepted.";
  }
  if (DISPOSABLE_EMAIL_DOMAINS.has(domain)) {
    return "Disposable email addresses aren't allowed. Please use your work email.";
  }
  return null;
}

function generateCode() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

type PasswordChecks = {
  length: boolean;
  upper: boolean;
  lower: boolean;
  number: boolean;
  special: boolean;
};

function getPasswordChecks(password: string): PasswordChecks {
  return {
    length: password.length >= 8, upper: /[A-Z]/.test(password), lower: /[a-z]/.test(password), number: /\d/.test(password), special: /[^A-Za-z0-9]/.test(password),
  };
}

function passwordStrengthScore(checks: PasswordChecks): number {
  return Object.values(checks).filter(Boolean).length;
}

const STRENGTH_LABELS = ["", "Very weak", "Weak", "Fair", "Strong", "Very strong"];
const STRENGTH_BAR_COLORS = [
  "bg-ink-200", "bg-red-500", "bg-orange-500", "bg-amber-500", "bg-emerald-500", "bg-emerald-600",
];
const STRENGTH_TEXT_COLORS = [
  "text-ink-500", "text-red-600", "text-orange-600", "text-amber-700", "text-emerald-600", "text-emerald-700",
];

type Step = "form" | "verify" | "done";

type FieldErrors = {
  name?: string;
  email?: string;
  company?: string;
  password?: string;
  terms?: string;
};

export default function SignUp() {
  const [step, setStep] = useState<Step>("form");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [password, setPassword] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [sentCode, setSentCode] = useState("");
  const [codeInput, setCodeInput] = useState("");
  const [codeError, setCodeError] = useState<string | null>(null);

  const clearError = (field: keyof FieldErrors) => {
    setErrors((prev) => {
      if (!prev[field]) return prev;
      const next = { ...prev };
      delete next[field];
      return next;
    });
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const nextErrors: FieldErrors = {};
    if (!name.trim()) nextErrors.name = "Full name is required.";
    if (!email.trim()) {
      nextErrors.email = "Work email is required.";
    } else {
      const emailErr = validateWorkEmail(email);
      if (emailErr) nextErrors.email = emailErr;
    }
    if (!company.trim()) nextErrors.company = "Company name is required.";
    if (!password) {
      nextErrors.password = "Password is required.";
    } else if (passwordStrengthScore(getPasswordChecks(password)) < 5) {
      nextErrors.password = "Password doesn't meet all requirements.";
    }
    if (!agreed) nextErrors.terms = "Please accept the Terms and Privacy Policy to continue.";

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }
    setErrors({});
    const code = generateCode();
    setSentCode(code);
    setCodeInput("");
    setCodeError(null);
    setStep("verify");
  };

  const handleVerifySubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (codeInput.trim() !== sentCode) {
      setCodeError("That code doesn't match. Check your email and try again.");
      return;
    }
    setCodeError(null);
    setStep("done");
  };

  const handleResend = () => {
    setSentCode(generateCode());
    setCodeInput("");
    setCodeError(null);
  };

  const handleUseDifferentEmail = () => {
    setStep("form");
    setSentCode("");
    setCodeInput("");
    setCodeError(null);
  };

  return (
    <>
    <Seo
      path="/signup"
      title="Sign up | Start free with AI-Harness"
      description="Create your AI-Harness workspace and start orchestrating AI agents alongside your team. Free to start, no credit card required."
      noindex
    />
    <section className="relative overflow-hidden py-16 sm:py-20">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-spotlight" />
      <Container className="relative">
        <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div className="max-w-lg">
            <h1 className="text-[40px] font-semibold leading-[1.05] tracking-[-0.02em] text-ink-900 sm:text-[52px]">
              Start your <span className="text-gradient">free workspace.</span>
            </h1>
            <p className="mt-5 text-[16.5px] leading-relaxed text-ink-600">
              Bring AI agents and your team together in one governed workspace, and take ideas to live workflows without standing up new infrastructure.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                "Get your instance setup in minutes.", "Sign Up with your corporate email.", "Full Project and Task Workspace.", "Get free $10 credits to start.", "Audit Trail from day one.", "No Credit Card Required.", ].map((b) => (
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
                Built for the enterprise from day one. SSO, SCIM, and audit logs are baked in, not bolted on.
              </p>
            </div>
          </div>

          <div className="relative">
            <div aria-hidden className="absolute -inset-4 rounded-[40px] bg-gradient-to-br from-brand-200/40 via-white to-indigo-200/40 blur-2xl" />
            <div className="relative rounded-[28px] border border-ink-200 bg-white p-8 shadow-lift sm:p-10">
              {step === "form" && (
                <>
                  <h2 className="text-2xl font-semibold text-ink-900">Create your workspace</h2>
                  <p className="mt-2 text-[14px] text-ink-600">Takes less than a minute.</p>
                  <form className="mt-6 space-y-4" onSubmit={handleFormSubmit} noValidate>
                    <Input
                      label="Full name"
                      name="name"
                      required
                      value={name}
                      onChange={(v) => {
                        setName(v);
                        clearError("name");
                      }}
                      error={errors.name}
                    />
                    <Input
                      label="Work email"
                      name="email"
                      type="email"
                      required
                      value={email}
                      onChange={(v) => {
                        setEmail(v);
                        clearError("email");
                      }}
                      error={errors.email}
                      hint="Use your corporate email. Gmail, Outlook, and disposable addresses aren't accepted."
                    />
                    <Input
                      label="Company name"
                      name="company"
                      required
                      value={company}
                      onChange={(v) => {
                        setCompany(v);
                        clearError("company");
                      }}
                      error={errors.company}
                    />
                    <div>
                      <Input
                        label="Create a password"
                        name="password"
                        type="password"
                        required
                        value={password}
                        onChange={(v) => {
                          setPassword(v);
                          clearError("password");
                        }}
                        error={errors.password}
                      />
                      {password && <PasswordStrength password={password} />}
                    </div>
                    <div>
                      <label className="flex items-start gap-3 text-[13px] text-ink-600">
                        <input
                          type="checkbox"
                          checked={agreed}
                          onChange={(e) => {
                            setAgreed(e.target.checked);
                            clearError("terms");
                          }}
                          aria-invalid={errors.terms ? true : undefined}
                          className={
                            "mt-0.5 h-4 w-4 rounded text-brand-600 focus:ring-brand-500 " +
                            (errors.terms ? "border-red-400" : "border-ink-300")
                          }
                        />
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
                      {errors.terms && (
                        <p className="mt-1.5 text-[12.5px] text-red-600">{errors.terms}</p>
                      )}
                    </div>
                    <Button className="w-full">
                      Start free
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </form>
                  <p className="mt-6 text-center text-[13.5px] text-ink-600">
                    Already have an account?{" "}
                    <Link to="/login" className="font-semibold text-brand-700 hover:text-brand-800">
                      Sign in
                    </Link>
                  </p>
                </>
              )}

              {step === "verify" && (
                <>
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-50 text-brand-700">
                    <MailCheck className="h-6 w-6" />
                  </div>
                  <h2 className="mt-5 text-2xl font-semibold text-ink-900">Verify your email</h2>
                  <p className="mt-2 text-[14px] leading-relaxed text-ink-600">
                    We've sent a 6-digit verification code to{" "}
                    <span className="font-semibold text-ink-900">{email}</span>. Enter it below to finish creating your workspace.
                  </p>

                  <div className="mt-4 rounded-xl border border-dashed border-brand-300 bg-brand-50/60 p-3 text-[12.5px] leading-relaxed text-ink-700">
                    <span className="font-semibold text-brand-700">Demo mode:</span>{" "}
                    no email backend is wired up yet, so your test code is{" "}
                    <span className="font-mono font-semibold text-ink-900">{sentCode}</span>.
                  </div>

                  <form className="mt-5 space-y-4" onSubmit={handleVerifySubmit} noValidate>
                    <Input
                      label="Verification code"
                      name="code"
                      inputMode="numeric"
                      maxLength={6}
                      autoComplete="one-time-code"
                      required
                      value={codeInput}
                      onChange={(v) => {
                        setCodeInput(v.replace(/\D/g, "").slice(0, 6));
                        if (codeError) setCodeError(null);
                      }}
                      error={codeError}
                    />
                    <Button className="w-full">
                      Verify &amp; create workspace
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </form>

                  <div className="mt-6 flex flex-col items-center gap-2 text-[13px] text-ink-600">
                    <button
                      type="button"
                      onClick={handleResend}
                      className="inline-flex items-center gap-1.5 font-semibold text-brand-700 hover:text-brand-800"
                    >
                      <RefreshCw className="h-3.5 w-3.5" />
                      Resend code
                    </button>
                    <button
                      type="button"
                      onClick={handleUseDifferentEmail}
                      className="text-ink-500 hover:text-ink-700"
                    >
                      Use a different email
                    </button>
                  </div>
                </>
              )}

              {step === "done" && (
                <div className="flex flex-col items-center py-10 text-center">
                  <div className="grid h-14 w-14 place-items-center rounded-full bg-brand-50 text-brand-700">
                    <Check className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 text-2xl font-semibold text-ink-900">Workspace created.</h3>
                  <p className="mt-3 max-w-sm text-[15px] text-ink-600">
                    Your email is verified and your workspace is being provisioned. We'll redirect you as soon as it's ready.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
    </>
  );
}

type InputProps = {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  value?: string;
  onChange?: (value: string) => void;
  error?: string | null;
  hint?: string;
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
  maxLength?: number;
  autoComplete?: string;
};

function Input({
  label, name, type = "text", required, value, onChange, error, hint, inputMode, maxLength, autoComplete,
}: InputProps) {
  const isControlled = value !== undefined && onChange !== undefined;
  return (
    <label className="block text-[14px] font-medium text-ink-800">
      {label}
      <input
        name={name}
        type={type}
        required={required}
        inputMode={inputMode}
        maxLength={maxLength}
        autoComplete={autoComplete}
        {...(isControlled
          ? { value, onChange: (e: React.ChangeEvent<HTMLInputElement>) => onChange!(e.target.value) }
          : {})}
        aria-invalid={error ? true : undefined}
        className={
          "mt-1.5 w-full rounded-xl border bg-white px-3.5 py-2.5 text-[14.5px] text-ink-900 outline-none placeholder:text-ink-400 focus:ring-2 " +
          (error
            ? "border-red-400 focus:border-red-500 focus:ring-red-100"
            : "border-ink-200 focus:border-brand-500 focus:ring-brand-100")
        }
      />
      {error ? (
        <span className="mt-1.5 block text-[12.5px] font-normal text-red-600">{error}</span>
      ) : hint ? (
        <span className="mt-1.5 block text-[12.5px] font-normal text-ink-500">{hint}</span>
      ) : null}
    </label>
  );
}

function PasswordStrength({ password }: { password: string }) {
  const checks = getPasswordChecks(password);
  const score = passwordStrengthScore(checks);
  return (
    <div className="mt-2.5">
      <div className="flex gap-1.5" aria-hidden>
        {[1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className={cn(
              "h-1.5 flex-1 rounded-full transition-colors", i <= score ? STRENGTH_BAR_COLORS[score] : "bg-ink-200", )}
          />
        ))}
      </div>
      <p className={cn("mt-2 text-[12.5px] font-semibold", STRENGTH_TEXT_COLORS[score])}>
        {STRENGTH_LABELS[score]}
      </p>
      <ul className="mt-2 space-y-1 text-[12.5px]">
        <Rule ok={checks.length} label="At least 8 characters" />
        <Rule ok={checks.upper} label="Uppercase letter" />
        <Rule ok={checks.lower} label="Lowercase letter" />
        <Rule ok={checks.number} label="Number" />
        <Rule ok={checks.special} label="Special character (!@#$%...)" />
      </ul>
    </div>
  );
}

function Rule({ ok, label }: { ok: boolean; label: string }) {
  return (
    <li className={cn("flex items-center gap-1.5", ok ? "text-ink-500" : "text-red-600")}>
      {ok ? <Check className="h-3.5 w-3.5" /> : <X className="h-3.5 w-3.5" />}
      {label}
    </li>
  );
}
