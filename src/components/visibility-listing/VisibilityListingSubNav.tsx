import { useEffect, useState, type ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { MapPinned } from "lucide-react";
import Container from "../Container";
import { cn } from "../../lib/cn";
import { isProductChromeCompact } from "../../lib/productChrome";

export const VISIBILITY_LISTING_BASE = "/agents/visibility-listing";

export const VISIBILITY_LISTING_TABS = [
  {
    id: "overview",
    label: "Overview",
    to: VISIBILITY_LISTING_BASE,
  },
  {
    id: "listings-publishing",
    label: "Listings & Publishing",
    to: `${VISIBILITY_LISTING_BASE}/listings-publishing`,
  },
  {
    id: "search-optimization",
    label: "Search Optimization",
    to: `${VISIBILITY_LISTING_BASE}/search-optimization`,
  },
  {
    id: "visibility-analytics",
    label: "Visibility Analytics",
    to: `${VISIBILITY_LISTING_BASE}/visibility-analytics`,
  },
] as const;

export function VisibilityListingSubNav() {
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
        <div className="flex h-14 items-center justify-between gap-4 lg:gap-8">
          <Link
            to={VISIBILITY_LISTING_BASE}
            className="inline-flex shrink-0 items-center gap-2.5 text-ink-900"
          >
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand-50 text-brand-700 ring-1 ring-brand-200/70">
              <MapPinned className="h-4 w-4" strokeWidth={2} />
            </span>
            <span className="hidden text-[15px] font-medium tracking-tight sm:inline">
              Visibility and Listing
            </span>
            <span className="text-[15px] font-medium tracking-tight sm:hidden">Visibility</span>
          </Link>

          <nav
            aria-label="Visibility and Listing sections"
            className="flex items-center gap-0.5 overflow-x-auto"
          >
            {VISIBILITY_LISTING_TABS.map((tab) => {
              const active =
                tab.to === VISIBILITY_LISTING_BASE
                  ? location.pathname === VISIBILITY_LISTING_BASE
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
      </Container>
    </div>
  );
}

export function VisibilityListingChrome({ children }: { children: ReactNode }) {
  return (
    <div className="font-poppins">
      <div aria-hidden className="h-16 shrink-0" />
      <VisibilityListingSubNav />
      {children}
    </div>
  );
}
