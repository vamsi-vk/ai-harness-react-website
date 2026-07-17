import { useEffect, useState, type ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { Megaphone } from "lucide-react";
import Container from "../Container";
import { cn } from "../../lib/cn";
import { isProductChromeCompact } from "../../lib/productChrome";
import { MarketingPaletteProvider } from "./MarketingPalette";

export const MARKETING_AGENT_BASE = "/agents/marketing-automation";

export const MARKETING_AGENT_TABS = [
  {
    id: "overview",
    label: "Overview",
    to: MARKETING_AGENT_BASE,
  },
  {
    id: "post-creation",
    label: "Post Creation & Publishing",
    to: `${MARKETING_AGENT_BASE}/post-creation-publishing`,
  },
  {
    id: "social-engagement",
    label: "Social Engagement",
    to: `${MARKETING_AGENT_BASE}/social-engagement`,
  },
  {
    id: "social-analytics",
    label: "Social Analytics & Reporting",
    to: `${MARKETING_AGENT_BASE}/social-analytics`,
  },
] as const;

export function MarketingAgentSubNav() {
  const location = useLocation();
  const [chromeCompact, setChromeCompact] = useState(false);

  useEffect(() => {
    const onScroll = () => setChromeCompact(isProductChromeCompact(window.scrollY));
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={cn(
        "sticky z-[45] border-b border-ink-200 bg-white transition-[top,box-shadow] duration-300 ease-out",
        chromeCompact
          ? "top-0 shadow-[0_10px_30px_-18px_rgba(15,23,42,0.25)]"
          : "top-16 shadow-none",
      )}
    >
      <Container>
        <div className="flex h-14 items-center justify-between gap-3 lg:gap-6">
          <Link
            to={MARKETING_AGENT_BASE}
            className="inline-flex shrink-0 items-center gap-2.5 text-ink-900"
          >
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand-50 text-brand-600 ring-1 ring-brand-200/80">
              <Megaphone className="h-4 w-4" strokeWidth={2} />
            </span>
            <span className="hidden text-[15px] font-medium tracking-tight sm:inline">
              Marketing Automation Agent
            </span>
            <span className="text-[15px] font-medium tracking-tight sm:hidden">
              Marketing Agent
            </span>
          </Link>

          <div className="flex min-w-0 flex-1 items-center justify-end gap-2 sm:gap-3">
            <nav
              aria-label="Marketing Automation Agent sections"
              className="flex items-center gap-0.5 overflow-x-auto"
            >
              {MARKETING_AGENT_TABS.map((tab) => {
                const active =
                  tab.to === MARKETING_AGENT_BASE
                    ? location.pathname === MARKETING_AGENT_BASE
                    : location.pathname.startsWith(tab.to);
                return (
                  <Link
                    key={tab.id}
                    to={tab.to}
                    className={cn(
                      "relative shrink-0 px-2.5 py-4 text-[13px] transition-colors duration-200 sm:px-3.5 sm:text-[14px]",
                      active
                        ? "font-medium text-ink-900"
                        : "font-normal text-ink-500 hover:text-ink-800",
                    )}
                  >
                    {tab.label}
                    <span
                      aria-hidden
                      className={cn(
                        "absolute inset-x-2.5 bottom-0 h-[3px] rounded-full bg-brand-600 transition-opacity duration-200 sm:inset-x-3.5",
                        active ? "opacity-100" : "opacity-0",
                      )}
                    />
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      </Container>
    </div>
  );
}

export function MarketingAgentChrome({ children }: { children: ReactNode }) {
  return (
    <MarketingPaletteProvider>
      <div className="font-inter">
        <div aria-hidden className="h-16 shrink-0" />
        <MarketingAgentSubNav />
        {children}
      </div>
    </MarketingPaletteProvider>
  );
}
