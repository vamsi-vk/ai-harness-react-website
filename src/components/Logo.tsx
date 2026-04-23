import { Link } from "react-router-dom";

type LogoProps = {
  dark?: boolean;
  className?: string;
};

export default function Logo({ dark = false, className = "" }: LogoProps) {
  return (
    <Link to="/" className={`group flex items-center gap-2.5 ${className}`}>
      <span className="relative grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 shadow-lift">
        <svg viewBox="0 0 24 24" className="h-5 w-5 text-white" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 19 L12 5 L19 19" />
          <path d="M8.2 13 H15.8" />
        </svg>
      </span>
      <span className={`text-[17px] font-semibold tracking-tight ${dark ? "text-white" : "text-ink-900"}`}>
        AI<span className="text-brand-600">·</span>Harness
      </span>
    </Link>
  );
}
