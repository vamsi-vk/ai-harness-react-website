import {
  ArrowRight,
  Bot,
  MapPinned,
  Megaphone,
  MessageSquare,
  Network,
  Puzzle,
  ShieldCheck,
  Sparkles,
  Star,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "../lib/cn";

type PlatformSidebarItem = {
  label: string;
  description: string;
  to: string;
  icon: LucideIcon;
  badge?: string;
};

type PlatformLink = {
  label: string;
  to: string;
  icon: LucideIcon;
};

type PlatformProduct = {
  label: string;
  description: string;
  to: string;
  icon: LucideIcon;
  badge?: string;
  /** Optional badge color variant; defaults to brand purple */
  badgeTone?: "brand" | "indigo" | "rose" | "amber" | "emerald" | "sky" | "onSolid";
  /** Icon tile colors — match Platform agent section accents */
  iconTone?: "brand" | "indigo" | "rose" | "amber" | "emerald" | "sky" | "onSolid";
  hoverTone?: "brand" | "indigo" | "rose" | "amber" | "emerald" | "sky";
  /** Solid card fill from platform workforce stack */
  solidBg?: string;
};

/** Placeholder data — replace with final Platform content when ready. */
export const PLATFORM_SIDEBAR_ITEMS: PlatformSidebarItem[] = [
  {
    label: "Overview",
    description: "Placeholder · how the platform works",
    to: "/platform",
    icon: Sparkles,
    badge: "NEW",
  },
  {
    label: "Agents",
    description: "Placeholder · role-based AI teammates",
    to: "/platform#agents",
    icon: Bot,
  },
  {
    label: "Workflows",
    description: "Placeholder · connect and orchestrate work",
    to: "/platform#workflows",
    icon: Workflow,
  },
  {
    label: "Governance",
    description: "Placeholder · control, audit, and guardrails",
    to: "/platform#governance",
    icon: ShieldCheck,
  },
];

export const PLATFORM_LINKS: PlatformLink[] = [
  {
    label: "Integrations",
    to: "/platform#integrations",
    icon: Puzzle,
  },
  {
    label: "Infrastructure",
    to: "/platform",
    icon: Network,
  },
];

export const PLATFORM_PRODUCTS: PlatformProduct[] = [
  {
    label: "Marketing Automation Agent",
    description: "Plans, publishes, replies, and reports what grew revenue.",
    to: "/agents/marketing-automation",
    icon: Megaphone,
    badge: "NEW",
    badgeTone: "onSolid",
    iconTone: "onSolid",
    hoverTone: "indigo",
    solidBg: "#0444CB",
  },
  {
    label: "Reputation & Sentiment",
    description: "Reads and replies to reviews in your voice across every site.",
    to: "/agents/reputation-sentiment",
    icon: MessageSquare,
    badge: "NEW",
    badgeTone: "onSolid",
    iconTone: "onSolid",
    hoverTone: "rose",
    solidBg: "#CD1266",
  },
  {
    label: "Automated Review Agent",
    description: "Asks happy customers for reviews automatically — fresh five-stars that keep arriving.",
    to: "/agents/automated-reviews",
    icon: Star,
    badge: "NEW",
    badgeTone: "onSolid",
    iconTone: "onSolid",
    hoverTone: "amber",
    solidBg: "#FFA116",
  },
  {
    label: "Visibility and Listing AI Agent",
    description: "Lists your business everywhere customers search and works to rank you first.",
    to: "/agents/visibility-listing",
    icon: MapPinned,
    badge: "NEW",
    badgeTone: "onSolid",
    iconTone: "onSolid",
    hoverTone: "emerald",
    solidBg: "#22742F",
  },
  {
    label: "Product five",
    description: "Placeholder description for the fifth platform product card.",
    to: "/platform",
    icon: ShieldCheck,
    badge: "Coming Soon",
    badgeTone: "sky",
    iconTone: "sky",
    hoverTone: "sky",
  },
  {
    label: "Product six",
    description: "Placeholder description for the sixth platform product card.",
    to: "/platform",
    icon: Puzzle,
    badge: "Coming Soon",
    badgeTone: "sky",
    iconTone: "sky",
    hoverTone: "sky",
  },
];

const BADGE_TONES: Record<NonNullable<PlatformProduct["badgeTone"]>, string> = {
  brand: "bg-brand-100 text-brand-700",
  indigo: "bg-indigo-100 text-indigo-800",
  rose: "bg-rose-100 text-rose-800",
  amber: "bg-amber-100 text-amber-800",
  emerald: "bg-emerald-100 text-emerald-800",
  sky: "bg-sky-100 text-sky-800",
  onSolid: "bg-white/20 text-white",
};

const ICON_TONES: Record<NonNullable<PlatformProduct["iconTone"]>, string> = {
  brand: "bg-brand-50 text-brand-700 ring-brand-200/70",
  indigo: "bg-indigo-50 text-indigo-700 ring-indigo-200/80",
  rose: "bg-rose-50 text-rose-700 ring-rose-200/80",
  amber: "bg-amber-50 text-amber-700 ring-amber-200/80",
  emerald: "bg-emerald-50 text-emerald-700 ring-emerald-200/80",
  sky: "bg-sky-50 text-sky-700 ring-sky-200/80",
  onSolid: "bg-white/15 text-white ring-white/25",
};

const HOVER_TONES: Record<NonNullable<PlatformProduct["hoverTone"]>, string> = {
  brand: "hover:border-brand-300 hover:bg-white",
  indigo: "hover:brightness-110",
  rose: "hover:brightness-110",
  amber: "hover:border-amber-200 hover:bg-white",
  emerald: "hover:brightness-110",
  sky: "hover:border-sky-200 hover:bg-white",
};

const CARD_BG_TONES: Record<NonNullable<PlatformProduct["hoverTone"]>, string> = {
  brand: "border-brand-100 bg-brand-50/70",
  indigo: "border-indigo-100 bg-indigo-50/80",
  rose: "border-rose-100 bg-rose-50/80",
  amber: "border-amber-100 bg-amber-50/80",
  emerald: "border-emerald-100 bg-emerald-50/80",
  sky: "border-sky-100 bg-sky-50/80",
};

const TITLE_HOVER_TONES: Record<NonNullable<PlatformProduct["hoverTone"]>, string> = {
  brand: "group-hover:text-brand-700",
  indigo: "group-hover:text-white",
  rose: "group-hover:text-white",
  amber: "group-hover:text-amber-900",
  emerald: "group-hover:text-white",
  sky: "group-hover:text-sky-800",
};

type Props = {
  onNavigate?: () => void;
  className?: string;
};

export default function PlatformNavMenu({ onNavigate, className }: Props) {
  return (
    <div className={cn("w-full", className)}>
      <div className="grid lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.5fr)]">
        {/* Left: PLATFORM */}
        <div className="border-b border-ink-100 lg:border-b-0 lg:border-r">
          <p className="px-6 pt-6 text-[11px] font-semibold tracking-[0.16em] text-ink-400 uppercase">
            Platform
          </p>
          <div className="grid sm:grid-cols-[minmax(0,1.2fr)_minmax(0,0.9fr)]">
            {/* Sidebar list */}
            <div className="bg-ink-50/80 px-3 py-4 sm:min-h-[22rem]">
              {PLATFORM_SIDEBAR_ITEMS.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.label}
                    to={item.to}
                    onClick={onNavigate}
                    className="group flex items-start gap-3.5 rounded-2xl px-3.5 py-3.5 transition-colors duration-200 hover:bg-white"
                  >
                    <span className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white text-brand-600 shadow-sm ring-1 ring-ink-200/80 transition duration-200 group-hover:scale-105">
                      <Icon className="h-5 w-5" strokeWidth={2} />
                    </span>
                    <span className="min-w-0">
                      <span className="flex items-center gap-2">
                        <span className="text-[15px] font-semibold text-ink-900 transition-colors group-hover:text-brand-700">
                          {item.label}
                        </span>
                        {item.badge ? (
                          <span className="rounded-full bg-brand-100 px-1.5 py-0.5 text-[10px] font-bold tracking-wide text-brand-700 uppercase">
                            {item.badge}
                          </span>
                        ) : null}
                      </span>
                      <span className="mt-1 block text-[13px] leading-snug text-ink-500">
                        {item.description}
                      </span>
                    </span>
                  </Link>
                );
              })}
            </div>

            {/* Mid links */}
            <div className="flex flex-col gap-5 px-5 py-5">
              <div className="space-y-1.5">
                {PLATFORM_LINKS.map((link) => {
                  const Icon = link.icon;
                  return (
                    <Link
                      key={link.label}
                      to={link.to}
                      onClick={onNavigate}
                      className="flex items-center gap-3 rounded-xl px-2.5 py-2.5 text-[14.5px] font-semibold text-ink-800 transition-colors duration-200 hover:bg-ink-50 hover:text-brand-700"
                    >
                      <Icon className="h-5 w-5 text-ink-400" strokeWidth={2} />
                      {link.label}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Right: PRODUCTS */}
        <div className="px-5 pb-5 pt-6 sm:px-6">
          <p className="mb-4 text-[11px] font-semibold tracking-[0.16em] text-ink-400 uppercase">
            Products
          </p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {PLATFORM_PRODUCTS.map((product) => {
              const Icon = product.icon;
              const tone = product.hoverTone ?? "brand";
              const solid = Boolean(product.solidBg);
              return (
                <Link
                  key={product.label}
                  to={product.to}
                  onClick={onNavigate}
                  className={cn(
                    "group relative flex min-h-[9.5rem] flex-col rounded-2xl border p-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-soft",
                    solid
                      ? "border-transparent text-white"
                      : CARD_BG_TONES[tone],
                    HOVER_TONES[tone],
                  )}
                  style={solid ? { backgroundColor: product.solidBg } : undefined}
                >
                  {product.badge ? (
                    <span
                      className={cn(
                        "absolute top-3.5 right-3.5 rounded-full px-1.5 py-0.5 text-[10px] font-bold tracking-wide uppercase",
                        BADGE_TONES[product.badgeTone ?? "brand"],
                      )}
                    >
                      {product.badge}
                    </span>
                  ) : null}
                  <span
                    className={cn(
                      "grid h-10 w-10 place-items-center rounded-xl ring-1 transition duration-200",
                      ICON_TONES[product.iconTone ?? "brand"],
                      solid ? "group-hover:bg-white/25" : "group-hover:bg-white",
                    )}
                  >
                    <Icon className="h-5 w-5" strokeWidth={2} />
                  </span>
                  <span
                    className={cn(
                      "mt-3.5 text-[15px] font-semibold transition-colors",
                      solid ? "text-white" : "text-ink-900",
                      TITLE_HOVER_TONES[tone],
                    )}
                  >
                    {product.label}
                  </span>
                  <span
                    className={cn(
                      "mt-1.5 text-[13px] leading-relaxed",
                      solid ? "text-white/80" : "text-ink-500",
                    )}
                  >
                    {product.description}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex flex-col gap-3 border-t border-ink-100 bg-ink-50/60 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[13px] text-ink-500">
          Trust signals placeholder · ratings &amp; partner logos go here
        </p>
        <Link
          to="/platform"
          onClick={onNavigate}
          className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-brand-700 transition duration-200 hover:gap-2.5 hover:text-brand-800"
        >
          See all platform features
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
