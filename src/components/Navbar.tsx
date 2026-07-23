import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ChevronRight, ChevronDown } from "lucide-react";
import Logo from "./Logo";
import Button from "./Button";
import PlatformNavMenu, {
  PLATFORM_PRODUCTS,
  PLATFORM_SIDEBAR_ITEMS,
} from "./PlatformNavMenu";
import SolutionsNavMenu, { SOLUTIONS_MENU_ITEMS } from "./SolutionsNavMenu";
import { cn } from "../lib/cn";
import {
  isProductChromeCompact,
  isProductChromePath,
} from "../lib/productChrome";

type DropdownItem = {
  label: string;
  to: string;
  description?: string;
};

type NavItem = {
  label: string;
  to: string;
  children?: DropdownItem[];
  megaMenu?: "platform" | "solutions";
};

const navItems: NavItem[] = [
  {
    label: "Platform",
    to: "/platform",
    megaMenu: "platform",
    children: [
      ...PLATFORM_SIDEBAR_ITEMS.map(({ label, to, description }) => ({
        label,
        to,
        description,
      })),
      ...PLATFORM_PRODUCTS.map(({ label, to, description }) => ({
        label,
        to,
        description,
      })),
    ],
  },
  {
    label: "Solutions",
    to: "/solutions",
    megaMenu: "solutions",
    children: SOLUTIONS_MENU_ITEMS.map(({ label, to, description }) => ({
      label,
      to,
      description,
    })),
  },
  { label: "Industries", to: "/industries" },
  { label: "International", to: "/international-businesses" },
  { label: "Security", to: "/security" },
  { label: "Contact", to: "/contact" },
];

function isNavPathActive(pathname: string, to: string) {
  if (to === "/") return pathname === "/";
  return pathname === to || pathname.startsWith(`${to}/`);
}

/**
 * Parent tab highlight.
 * Skip children that point at another top-level nav root (e.g. SMB → /platform
 * must not light up Solutions while you're on Platform).
 */
function isNavParentActive(pathname: string, item: NavItem) {
  if (isNavPathActive(pathname, item.to)) return true;

  const otherRoots = navItems
    .filter((other) => other.label !== item.label && other.to !== "/")
    .map((other) => other.to);

  return (
    item.children?.some((child) => {
      if (child.to === "/") return false;
      // Cross-link into another primary section — that section owns the highlight
      if (
        otherRoots.some(
          (root) => child.to === root || child.to.startsWith(`${root}/`),
        )
      ) {
        return false;
      }
      return isNavPathActive(pathname, child.to);
    }) ?? false
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [chromeCompact, setChromeCompact] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openMobileGroup, setOpenMobileGroup] = useState<string | null>(null);
  const location = useLocation();
  const dropdownTimer = useRef<number | null>(null);
  const productChrome = isProductChromePath(location.pathname);
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => {
      if (productChrome) {
        setChromeCompact(isProductChromeCompact(window.scrollY));
      } else {
        setChromeCompact(false);
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [productChrome]);

  const handleEnter = (label: string) => {
    if (dropdownTimer.current) {
      window.clearTimeout(dropdownTimer.current);
      dropdownTimer.current = null;
    }
    setOpenDropdown(label);
  };

  const handleLeave = () => {
    if (dropdownTimer.current) {
      window.clearTimeout(dropdownTimer.current);
    }
    dropdownTimer.current = window.setTimeout(() => {
      setOpenDropdown(null);
    }, 180);
  };

  useEffect(() => {
    setOpen(false);
    setOpenDropdown(null);
    setOpenMobileGroup(null);
    // Close on hash changes too (e.g. switching between desks via the
    // International Businesses dropdown stays on the same pathname).
  }, [location.pathname, location.hash]);

  const navOnHome = isHome && !productChrome;
  const headerFixed = productChrome || navOnHome;

  const navLinkIdle = "text-ink-600 hover:bg-ink-50 hover:text-ink-900";
  const navLinkActive = "bg-ink-100 text-ink-900";

  return (
    <header
      className={cn(
        "z-50 w-full border-b border-ink-200/80 bg-white transition-all duration-300 ease-out",
        headerFixed ? "fixed inset-x-0 top-0" : "sticky top-0",
        productChrome && chromeCompact && !open
          ? "pointer-events-none -translate-y-full"
          : "translate-y-0",
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-6 px-6 sm:px-8">
        <Logo />
        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) =>
            item.children ? (
              <div
                key={item.to}
                className="relative"
                onMouseEnter={() => handleEnter(item.label)}
                onMouseLeave={handleLeave}
              >
                {(() => {
                  const isActive = isNavParentActive(location.pathname, item);
                  return (
                    <div
                      className={cn(
                        "inline-flex items-center rounded-full transition-colors",
                        isActive ? navLinkActive : navLinkIdle,
                      )}
                    >
                      <Link
                        to={item.to}
                        onClick={() => setOpenDropdown(null)}
                        className="rounded-l-full px-3.5 py-2 pr-1 text-[14px] font-medium"
                      >
                        {item.label}
                      </Link>
                      <button
                        type="button"
                        onClick={() =>
                          setOpenDropdown((cur) => (cur === item.label ? null : item.label))
                        }
                        aria-haspopup="menu"
                        aria-expanded={openDropdown === item.label}
                        aria-label={`${item.label} menu`}
                        className="inline-flex rounded-r-full py-2 pl-0.5 pr-2.5"
                      >
                        <ChevronDown
                          className={cn(
                            "h-3.5 w-3.5 transition-transform duration-300 ease-out",
                            openDropdown === item.label ? "rotate-180" : "",
                          )}
                        />
                      </button>
                    </div>
                  );
                })()}
                {openDropdown === item.label && (
                  <div
                    role="menu"
                    className={cn(
                      "z-40 pt-3",
                      item.megaMenu === "platform"
                        ? "fixed left-1/2 top-16 w-[min(calc(100vw-2rem),72rem)] -translate-x-1/2"
                        : item.megaMenu === "solutions"
                          ? "fixed left-1/2 top-16 w-[min(calc(100vw-2rem),42rem)] -translate-x-1/2"
                          : "absolute top-full left-1/2 w-72 -translate-x-1/2",
                    )}
                    onMouseEnter={() => handleEnter(item.label)}
                    onMouseLeave={handleLeave}
                  >
                    <div
                      className={cn(
                        "overflow-hidden rounded-2xl border border-ink-200 bg-white shadow-[0_28px_80px_-24px_rgba(15,23,42,0.35)] ring-1 ring-black/[0.03]",
                        "animate-nav-dropdown origin-top",
                      )}
                    >
                      {item.megaMenu === "platform" ? (
                        <PlatformNavMenu onNavigate={() => setOpenDropdown(null)} />
                      ) : item.megaMenu === "solutions" ? (
                        <SolutionsNavMenu onNavigate={() => setOpenDropdown(null)} />
                      ) : (
                        <div className="p-2">
                          {item.children?.map((child) => (
                            <Link
                              key={child.to + child.label}
                              to={child.to}
                              role="menuitem"
                              className="flex flex-col gap-0.5 rounded-xl px-3 py-2.5 transition-colors hover:bg-brand-50"
                            >
                              <span className="text-[14px] font-semibold text-ink-900">
                                {child.label}
                              </span>
                              {child.description && (
                                <span className="text-[12.5px] leading-snug text-ink-500">
                                  {child.description}
                                </span>
                              )}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  cn(
                    "rounded-full px-3.5 py-2 text-[14px] font-medium transition-colors",
                    isActive ? navLinkActive : navLinkIdle,
                  )
                }
              >
                {item.label}
              </NavLink>
            ),
          )}
        </nav>
        <div className="hidden items-center gap-2 lg:flex">
          <Button to="/demo" variant="secondary" size="sm">
            Book a demo
          </Button>
          <Button to="/signup" variant="primary" size="sm">
            Start free
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-xl border border-ink-200 text-ink-700 lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-ink-200 bg-white/95 backdrop-blur-xl lg:hidden">
          <div className="mx-auto w-full max-w-7xl px-6 py-4 sm:px-8">
            <nav className="flex flex-col">
              {navItems.map((item) =>
                item.children ? (
                  <div key={item.to} className="flex flex-col">
                    <div className="flex items-center rounded-lg hover:bg-ink-50">
                      <NavLink
                        to={item.to}
                        onClick={() => {
                          setOpen(false);
                          setOpenMobileGroup(null);
                        }}
                        className={({ isActive }) =>
                          cn(
                            "flex-1 rounded-lg px-3 py-3 text-[15px] font-medium",
                            isActive || isNavParentActive(location.pathname, item)
                              ? "text-ink-900"
                              : "text-ink-700",
                          )
                        }
                      >
                        {item.label}
                      </NavLink>
                      <button
                        type="button"
                        onClick={() =>
                          setOpenMobileGroup((cur) =>
                            cur === item.label ? null : item.label,
                          )
                        }
                        className="mr-2 grid h-9 w-9 shrink-0 place-items-center rounded-lg text-ink-600"
                        aria-label={`Expand ${item.label} menu`}
                        aria-expanded={openMobileGroup === item.label}
                      >
                        <ChevronDown
                          className={cn(
                            "h-4 w-4 transition-transform",
                            openMobileGroup === item.label ? "rotate-180" : "",
                          )}
                        />
                      </button>
                    </div>
                    {openMobileGroup === item.label && (
                      <div className="pl-3">
                        {item.megaMenu === "platform" ? (
                          <PlatformNavMenu
                            className="w-full"
                            onNavigate={() => {
                              setOpen(false);
                              setOpenMobileGroup(null);
                            }}
                          />
                        ) : item.megaMenu === "solutions" ? (
                          <SolutionsNavMenu
                            className="w-full"
                            onNavigate={() => {
                              setOpen(false);
                              setOpenMobileGroup(null);
                            }}
                          />
                        ) : (
                          item.children?.map((child) => (
                            <NavLink
                              key={child.to + child.label}
                              to={child.to}
                              end={child.to === "/"}
                              className={({ isActive }) =>
                                cn(
                                  "block rounded-lg px-3 py-2.5 text-[14.5px]",
                                  isActive
                                    ? "bg-brand-50 font-semibold text-brand-700"
                                    : "text-ink-700 hover:bg-ink-50",
                                )
                              }
                            >
                              {child.label}
                            </NavLink>
                          ))
                        )}
                      </div>
                    )}
                  </div>
                ) : (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    className={({ isActive }) =>
                      cn(
                        "rounded-lg px-3 py-3 text-[15px] font-medium",
                        isActive ? "bg-ink-100 text-ink-900" : "text-ink-700 hover:bg-ink-50",
                      )
                    }
                  >
                    {item.label}
                  </NavLink>
                ),
              )}
              <div className="mt-3 flex flex-col gap-2 border-t border-ink-200 pt-4">
                <Button to="/demo" variant="secondary" size="md">Book a demo</Button>
                <Button to="/signup" variant="primary" size="md">Start free</Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
