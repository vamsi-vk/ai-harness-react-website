import { useEffect, useMemo, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Clock3,
  Globe2,
  Languages,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import Container from "../components/Container";
import Button from "../components/Button";
import Eyebrow from "../components/Eyebrow";
import Seo from "../components/Seo";
import {
  DESKS,
  ENGLISH_LANGUAGE,
  getNativeLanguage,
  isDeskId,
  type DeskConfig,
  type DeskId,
} from "../lib/desks";

type TimeSlotId = "morning" | "afternoon" | "evening" | "pacific";

type TimeSlot = {
  id: TimeSlotId;
  /** Label template; `{HQ}` is replaced with the desk's HQ city. */
  label: string;
  /** Sub-label hint shown beneath the label. */
  hint: string;
};

const TIME_SLOTS: TimeSlot[] = [
  { id: "morning", label: "Morning · {HQ}", hint: "9:00 – 12:00 local" },
  { id: "afternoon", label: "Afternoon · {HQ}", hint: "13:00 – 17:00 local" },
  { id: "evening", label: "Evening · {HQ}", hint: "18:00 – 21:00 local" },
  { id: "pacific", label: "Pacific business hours", hint: "Bay Area · PT" },
];

const STAGE_OPTIONS = [
  "Just exploring the US market",
  "Planning an upcoming US trade show",
  "Have inbound interest from US buyers",
  "Operating a US subsidiary already",
];

export default function InternationalConsultation() {
  const { country } = useParams<{ country: string }>();

  if (!country || !isDeskId(country)) {
    return <Navigate to="/international-businesses" replace />;
  }

  const deskId: DeskId = country;
  const desk = DESKS[deskId];
  const seoPath = `/international-businesses/${deskId}/consultation`;

  return (
    <>
      <Seo
        path={seoPath}
        title={`Book a consultation · ${desk.name}`}
        description={`Book a 45-minute consultation with the ${desk.name}. In English or ${desk.language}, at ${desk.timezoneAbbr} or Pacific hours. An honest read on your US readiness, whether or not you work with us.`}
        keywords={`${desk.name}, consultation, US market entry, ${desk.countryAdjective} companies, AI-Harness`}
        breadcrumbs={[
          { label: "Solutions", path: "/solutions/enterprise" },
          { label: "International Businesses", path: "/international-businesses" },
          { label: desk.name, path: `/international-businesses/${desk.id}` },
          { label: "Consultation", path: seoPath },
        ]}
      />
      <section className="relative overflow-hidden pb-20 pt-12 sm:pt-16">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-spotlight" />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-grid opacity-60 [mask-image:linear-gradient(to_bottom,white_0%,white_55%,transparent_100%)]"
        />
        <Container className="relative">
          <BackLink desk={desk} />
          <div className="mt-5">
            <Breadcrumb desk={desk} />
          </div>

          <div className="mt-10 grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-start">
            <HeroIntro desk={desk} />
            <ConsultationForm desk={desk} />
          </div>
        </Container>
      </section>
    </>
  );
}

function BackLink({ desk }: { desk: DeskConfig }) {
  return (
    <Button
      to={`/international-businesses/${desk.id}`}
      variant="secondary"
      size="sm"
      className="bg-white/80 backdrop-blur"
    >
      <ArrowLeft className="h-3.5 w-3.5" />
      Back to {desk.name}
    </Button>
  );
}

function Breadcrumb({ desk }: { desk: DeskConfig }) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="flex flex-wrap items-center gap-1.5 text-[12.5px] font-medium text-ink-500"
    >
      <Link to="/solutions/enterprise" className="hover:text-ink-700">
        Solutions
      </Link>
      <span className="text-ink-300">/</span>
      <Link to="/international-businesses" className="hover:text-ink-700">
        International Businesses
      </Link>
      <span className="text-ink-300">/</span>
      <Link
        to={`/international-businesses/${desk.id}`}
        className="hover:text-ink-700"
      >
        {desk.name}
      </Link>
      <span className="text-ink-300">·</span>
      <span className="text-ink-900">Consultation</span>
    </nav>
  );
}

/**
 * "Your language only is fine too" line, in each desk's native script. Shown
 * as a small reassurance under the language benefit so non-English speakers
 * on the HQ side feel comfortable submitting without selecting English.
 */
const NATIVE_ONLY_OK: Record<DeskId, string> = {
  japan: "日本語のみのご希望でも結構です。",
  china: "如仅需中文交流亦可。",
  taiwan: "如僅需中文交流亦可。",
};

function HeroIntro({ desk }: { desk: DeskConfig }) {
  const benefits = [
    {
      icon: <Clock3 className="h-5 w-5" />,
      title: "45-minute working session",
      desc: "Not a pitch. We answer your questions, sketch a starting workflow, and give you an honest read on your US readiness.",
    },
    {
      icon: <Languages className="h-5 w-5" />,
      title: `In English or ${desk.language}`,
      desc: `Pick one or both on the form. We staff the call to match. ${NATIVE_ONLY_OK[desk.id]}`,
    },
    {
      icon: <Globe2 className="h-5 w-5" />,
      title: `${desk.timezoneAbbr} or Pacific hours`,
      desc: `We book at hours that work for ${desk.hqCity} mornings or US Pacific time. Your team shouldn't have to take the call at midnight.`,
    },
    {
      icon: <ShieldCheck className="h-5 w-5" />,
      title: "No obligation",
      desc: `${desk.noObligationNative} · 30 days to decide whether you'd like to engage further. Nothing automatic, nothing pushy.`,
    },
  ];

  return (
    <div>
      <Eyebrow>Consultation · {desk.ctaEyebrowNative}</Eyebrow>
      <h1 className="mt-5 text-[36px] font-semibold leading-[1.04] tracking-[-0.02em] text-ink-900 sm:text-[48px]">
        Book a 45-minute consultation with the{" "}
        <span className="text-gradient">{desk.name}.</span>
      </h1>
      <p className="mt-5 max-w-lg text-[15.5px] leading-relaxed text-ink-600 sm:text-[16px]">
        Tell us a bit about your company. We'll come back within one business
        day to schedule time that works for your team in {desk.hqCity}.
      </p>

      <ul className="mt-9 space-y-5">
        {benefits.map((b) => (
          <li key={b.title} className="flex gap-4">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-brand-50 text-brand-700 ring-1 ring-inset ring-brand-200/60">
              {b.icon}
            </span>
            <div>
              <p className="font-semibold text-ink-900">{b.title}</p>
              <p className="mt-1 text-[14.5px] leading-relaxed text-ink-600">
                {b.desc}
              </p>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-9 rounded-2xl border border-ink-200 bg-white p-5">
        <div className="flex items-start gap-3">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-brand-50 text-brand-700 ring-1 ring-inset ring-brand-200/60">
            <Sparkles className="h-4 w-4" />
          </span>
          <div>
            <p className="text-[14px] font-semibold text-ink-900">
              Trade show next quarter?
            </p>
            <p className="mt-1 text-[13.5px] leading-relaxed text-ink-600">
              Mention it below. We'll come to the call with a pre-show meeting
              plan and a 90-day follow-up workflow already sketched out.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ConsultationForm({ desk }: { desk: DeskConfig }) {
  const [sent, setSent] = useState(false);
  // English is always included and locked, so we only track whether the
  // desk's native language is also selected. Resets to `true` on desk
  // change so the form arrives pre-paired with the most natural choice.
  const [nativeSelected, setNativeSelected] = useState(true);
  const [timeSlots, setTimeSlots] = useState<TimeSlotId[]>(["morning", "afternoon"]);

  useEffect(() => {
    setNativeSelected(true);
  }, [desk.id]);

  const timeSlotsForDesk = useMemo(
    () =>
      TIME_SLOTS.map((slot) => ({
        ...slot,
        label: slot.label.replace("{HQ}", desk.hqCity),
      })),
    [desk.hqCity],
  );

  if (sent) {
    return <SuccessCard desk={desk} />;
  }

  const toggleTimeSlot = (id: TimeSlotId) => {
    setTimeSlots((current) =>
      current.includes(id) ? current.filter((s) => s !== id) : [...current, id],
    );
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
  };

  const nativeLanguage = getNativeLanguage(desk.id);

  return (
    <div className="rounded-[28px] border border-ink-200 bg-white p-7 shadow-lift sm:p-9">
      <form onSubmit={handleSubmit} className="space-y-6" noValidate>
        <input type="hidden" name="desk" value={desk.id} />

        <div className="grid gap-4 sm:grid-cols-2">
          <Input label="First name" name="firstName" required />
          <Input label="Last name" name="lastName" required />
          <Input label="Work email" name="email" type="email" required />
          <Input label="Phone (optional)" name="phone" />
          <Input label="Company" name="company" required />
          <Input label="Job title" name="title" required />
        </div>

        <Input
          label={`Company HQ`}
          name="hq"
          placeholder={desk.hqCity}
          required
        />

        <Select
          label="Where are you in US market entry?"
          name="stage"
          options={STAGE_OPTIONS}
        />

        <CheckboxGroup
          label="Preferred call language"
          helper={`English is always on the call. Add ${nativeLanguage.label} if you'd like a bilingual staff for HQ-side participants.`}
        >
          <CheckboxPill
            checked
            locked
            onChange={() => {}}
            name="languages"
            value={ENGLISH_LANGUAGE.id}
            primary={ENGLISH_LANGUAGE.label}
            secondary="Always included"
          />
          <CheckboxPill
            checked={nativeSelected}
            onChange={() => setNativeSelected((v) => !v)}
            name="languages"
            value={nativeLanguage.id}
            primary={nativeLanguage.label}
            secondary={nativeLanguage.native}
          />
        </CheckboxGroup>

        <CheckboxGroup
          label={`Preferred time windows`}
          helper={`Pick any that work. We'll find the overlap with ${desk.hqCity} and US Pacific time.`}
        >
          {timeSlotsForDesk.map((slot) => (
            <CheckboxPill
              key={slot.id}
              checked={timeSlots.includes(slot.id)}
              onChange={() => toggleTimeSlot(slot.id)}
              name="timeSlots"
              value={slot.id}
              primary={slot.label}
              secondary={slot.hint}
            />
          ))}
        </CheckboxGroup>

        <Textarea
          label="What would you like to discuss?"
          name="message"
          rows={4}
          placeholder={desk.discussionPlaceholder}
        />

        <p className="text-xs text-ink-500">
          By submitting, you agree to our Privacy Policy. We'll only use your
          details to schedule this consultation. No marketing list, no shared
          contacts.
        </p>

        <Button className="w-full">
          Book consultation · {desk.ctaEyebrowNative}
          <ArrowRight className="h-4 w-4" />
        </Button>
      </form>
    </div>
  );
}

function SuccessCard({ desk }: { desk: DeskConfig }) {
  return (
    <div className="rounded-[28px] border border-ink-200 bg-white p-9 shadow-lift sm:p-11">
      <div className="flex flex-col items-center py-8 text-center">
        <div className="grid h-14 w-14 place-items-center rounded-full bg-brand-50 text-brand-700">
          <CheckCircle2 className="h-6 w-6" />
        </div>
        <h3 className="mt-6 text-2xl font-semibold text-ink-900">
          You're booked with the {desk.name}.
        </h3>
        <p className="mt-3 max-w-md text-[15px] leading-relaxed text-ink-600">
          A bilingual account director will email you within one business day
          to confirm the time that works best for {desk.hqCity}.
        </p>
        <p className="mt-2 max-w-md text-[14px] leading-relaxed text-ink-500">
          {desk.postSubmitReplyNative}
        </p>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          <Button
            to={`/international-businesses/${desk.id}`}
            variant="secondary"
            size="md"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to {desk.name}
          </Button>
          <Button to="/platform" size="md">
            See the platform
          </Button>
        </div>
      </div>
    </div>
  );
}

function Input({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <label className="block text-[14px] font-medium text-ink-800">
      {label}
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-1.5 w-full rounded-xl border border-ink-200 bg-white px-3.5 py-2.5 text-[14.5px] text-ink-900 outline-none placeholder:text-ink-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
      />
    </label>
  );
}

function Select({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: string[];
}) {
  return (
    <label className="block text-[14px] font-medium text-ink-800">
      {label}
      <select
        name={name}
        className="mt-1.5 w-full rounded-xl border border-ink-200 bg-white px-3.5 py-2.5 text-[14.5px] text-ink-900 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
        defaultValue=""
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
  label,
  name,
  rows = 3,
  placeholder,
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

function CheckboxGroup({
  label,
  helper,
  required,
  error,
  children,
}: {
  label: string;
  helper?: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <fieldset>
      <legend className="block text-[14px] font-medium text-ink-800">
        {label}
        {required && (
          <span className="ml-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-brand-600">
            · required
          </span>
        )}
      </legend>
      {helper && (
        <p className="mt-1 text-[12.5px] leading-snug text-ink-500">{helper}</p>
      )}
      <div className="mt-2.5 grid gap-2 sm:grid-cols-2">{children}</div>
      {error && (
        <p className="mt-2 text-[12.5px] font-medium text-error-600">{error}</p>
      )}
    </fieldset>
  );
}

function CheckboxPill({
  checked,
  onChange,
  name,
  value,
  primary,
  secondary,
  locked = false,
}: {
  checked: boolean;
  onChange: () => void;
  name: string;
  value: string;
  primary: string;
  secondary?: string;
  /**
   * When true, the option is rendered as permanently-on: still visually
   * checked and still submitted with the form, but the user can't uncheck
   * it. Used for the English language pill.
   */
  locked?: boolean;
}) {
  const containerClass = locked
    ? "flex cursor-default items-start gap-3 rounded-xl border border-ink-200 bg-ink-50/70 px-3.5 py-2.5"
    : "group flex cursor-pointer items-start gap-3 rounded-xl border px-3.5 py-2.5 transition-all duration-150 " +
      (checked
        ? "border-brand-300 bg-brand-50/70 shadow-sm ring-1 ring-inset ring-brand-200/70"
        : "border-ink-200 bg-white hover:border-ink-300 hover:bg-ink-50/60");

  return (
    <label className={containerClass}>
      <input
        type="checkbox"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        disabled={locked}
        aria-readonly={locked || undefined}
        className="sr-only"
      />
      <span
        aria-hidden
        className={
          "mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded border transition-colors " +
          (checked
            ? locked
              ? "border-ink-400 bg-ink-400 text-white"
              : "border-brand-600 bg-brand-600 text-white"
            : "border-ink-300 bg-white text-transparent group-hover:border-ink-400")
        }
      >
        <svg
          viewBox="0 0 12 12"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-2.5 w-2.5"
        >
          <path d="M2 6.5 5 9.5 10 3.5" />
        </svg>
      </span>
      <span className="min-w-0 flex-1">
        <span
          className={
            "block text-[13.5px] font-semibold leading-snug " +
            (locked ? "text-ink-700" : checked ? "text-ink-900" : "text-ink-800")
          }
        >
          {primary}
        </span>
        {secondary && (
          <span
            className={
              "mt-0.5 block text-[11.5px] leading-snug " +
              (locked ? "font-medium text-ink-500" : "text-ink-500")
            }
          >
            {secondary}
          </span>
        )}
      </span>
    </label>
  );
}
