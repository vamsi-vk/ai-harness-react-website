import { Link } from "react-router-dom";

type LogoProps = {
  dark?: boolean;
  className?: string;
};

export default function Logo({ dark = false, className = "" }: LogoProps) {
  return (
    <Link to="/" className={`inline-flex items-center ${className}`}>
      <img
        src={dark ? "/ai-harness-logo-dark.png" : "/ai-harness-logo-light.png"}
        alt="AI-Harness logo"
        className="h-10 w-auto sm:h-11"
      />
    </Link>
  );
}
