import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ChevronRight, ChevronDown } from "lucide-react";
import Logo from "./Logo";
import Button from "./Button";
import { cn } from "../lib/cn";

type DropdownItem = {
  label: string;
  to: string;
  description?: string;
};

type NavItem = {
  label: string;
  to: string;
  children?: DropdownItem[];
};

const navItems: NavItem[] = [
  { label: "Platform", to: "/platform" },
  { label: "Solutions", to: "/solutions" },
  { label: "Industries", to: "/industries" },
  { label: "International Businesses", to: "/international-businesses" },
  { label: "Security", to: "/security" },
  { label: "Contact Us", to: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openMobileGroup, setOpenMobileGroup] = useState<string | null>(null);
  const location = useLocation();
  const dropdownTimer = useRef<number | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setOpenDropdown(null);
    setOpenMobileGroup(null);
    // Close on hash changes too (e.g. switching between desks via the
    // International Businesses dropdown stays on the same pathname).
  }, [location.pathname, location.hash]);

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
    }, 120);
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-ink-200/70 bg-white/80 backdrop-blur-xl"
          : "border-b border-transparent bg-white/0",
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
                <button
                  type="button"
                  onClick={() =>
                    setOpenDropdown((cur) => (cur === item.label ? null : item.label))
                  }
                  aria-haspopup="menu"
                  aria-expanded={openDropdown === item.label}
                  className={cn(
                    "inline-flex items-center gap-1 rounded-full px-3.5 py-2 text-[14px] font-medium transition-colors",
                    location.pathname.startsWith(item.to)
                      ? "bg-ink-100 text-ink-900"
                      : "text-ink-600 hover:bg-ink-50 hover:text-ink-900",
                  )}
                >
                  {item.label}
                  <ChevronDown
                    className={cn(
                      "h-3.5 w-3.5 transition-transform",
                      openDropdown === item.label ? "rotate-180" : "",
                    )}
                  />
                </button>
                {openDropdown === item.label && (
                  <div
                    role="menu"
                    className="absolute left-1/2 top-full z-40 w-72 -translate-x-1/2 pt-3"
                  >
                    <div className="overflow-hidden rounded-2xl border border-ink-200 bg-white p-2 shadow-lift ring-1 ring-black/[0.02]">
                      {item.children.map((child) => (
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
                    isActive
                      ? "bg-ink-100 text-ink-900"
                      : "text-ink-600 hover:bg-ink-50 hover:text-ink-900",
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
                    <button
                      type="button"
                      onClick={() =>
                        setOpenMobileGroup((cur) =>
                          cur === item.label ? null : item.label,
                        )
                      }
                      className="flex items-center justify-between rounded-lg px-3 py-3 text-[15px] font-medium text-ink-700 hover:bg-ink-50"
                    >
                      {item.label}
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 transition-transform",
                          openMobileGroup === item.label ? "rotate-180" : "",
                        )}
                      />
                    </button>
                    {openMobileGroup === item.label && (
                      <div className="pl-3">
                        {item.children.map((child) => (
                          <NavLink
                            key={child.to + child.label}
                            to={child.to}
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
                        ))}
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
