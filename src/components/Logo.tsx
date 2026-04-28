import { Link } from "react-router-dom";

type LogoProps = {
  dark?: boolean;
  className?: string;
};

export default function Logo({ dark = false, className = "" }: LogoProps) {
  return (
    <Link to="/" className={`group flex items-center gap-2.5 ${className}`}>
      <img src="/original-logo.png" alt="AI Harness logo" className="h-9 w-9" />
      <span className="flex flex-col leading-tight">
        <span className={`text-[17px] font-semibold tracking-tight ${dark ? "text-white" : "text-ink-900"}`}>
          AI-Harness
        </span>
        <span className="text-[11px] font-medium tracking-[0.01em] text-brand-600">
          From Months to Minutes
        </span>
      </span>
    </Link>
  );
}
