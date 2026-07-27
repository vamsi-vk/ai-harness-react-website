import { Link } from "react-router-dom";
import { cn } from "../lib/cn";
import type { ReactNode, ComponentPropsWithoutRef } from "react";

type Variant = "primary" | "secondary" | "ghost" | "white";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg font-semibold tracking-tight transition-all duration-200 whitespace-nowrap";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand-600 text-white hover:bg-brand-700 hover:-translate-y-px shadow-soft hover:shadow-lift",
  secondary:
    "bg-white text-ink-800 border border-ink-200 hover:border-ink-300 hover:bg-ink-50 shadow-soft",
  ghost:
    "text-ink-500 hover:text-ink-800 hover:bg-ink-100",
  white:
    "bg-white text-ink-800 hover:bg-ink-50 shadow-soft hover:shadow-lift hover:-translate-y-px",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm", md: "h-11 px-5 text-[15px]", lg: "h-13 px-7 text-base py-3.5",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

type LinkButtonProps = CommonProps & {
  to: string;
  href?: never;
};

type AnchorButtonProps = CommonProps & {
  href: string;
  to?: never;
};

type NativeButtonProps = CommonProps &
  ComponentPropsWithoutRef<"button"> & {
    to?: never;
    href?: never;
  };

type Props = LinkButtonProps | AnchorButtonProps | NativeButtonProps;

export default function Button(props: Props) {
  const { variant = "primary", size = "md", className, children } = props;
  const classes = cn(base, variants[variant], sizes[size], className);

  if ("to" in props && props.to) {
    return (
      <Link to={props.to} className={classes}>
        {children}
      </Link>
    );
  }
  if ("href" in props && props.href) {
    return (
      <a href={props.href} className={classes}>
        {children}
      </a>
    );
  }
  const { variant: _v, size: _s, className: _c, children: _ch, to: _t, href: _h,...rest } = props as NativeButtonProps & { to?: string; href?: string };
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
