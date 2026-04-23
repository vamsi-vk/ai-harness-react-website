import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ChevronRight } from "lucide-react";
import Logo from "./Logo";
import Button from "./Button";
import { cn } from "../lib/cn";

const navItems = [
  { label: "Platform", to: "/platform" },
  { label: "Solutions", to: "/solutions" },
  { label: "Industries", to: "/industries" },
  { label: "Security", to: "/security" },
  { label: "Pricing", to: "/pricing" },
  { label: "Resources", to: "/resources" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-ink-200/70 bg-white/80 backdrop-blur-xl"
          : "border-b border-transparent bg-white/0",
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-6 sm:px-8">
        <div className="flex items-center gap-10">
          <Logo />
          <nav className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  cn(
                    "rounded-full px-3.5 py-2 text-[14px] font-medium transition-colors",
                    isActive ? "text-ink-900 bg-ink-100" : "text-ink-600 hover:text-ink-900 hover:bg-ink-50",
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
        <div className="hidden items-center gap-2 lg:flex">
          <Link
            to="/login"
            className="rounded-full px-3.5 py-2 text-[14px] font-medium text-ink-600 hover:bg-ink-50 hover:text-ink-900"
          >
            Sign in
          </Link>
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
              {navItems.map((item) => (
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
              ))}
              <div className="mt-3 flex flex-col gap-2 border-t border-ink-200 pt-4">
                <Button to="/login" variant="ghost" size="md">Sign in</Button>
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
