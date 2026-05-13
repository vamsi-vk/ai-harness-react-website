import type { ReactElement } from "react";
import { Link } from "react-router-dom";
import { Linkedin, Instagram, Youtube } from "lucide-react";
import Logo from "./Logo";
import Container from "./Container";

type FooterColumn = {
  title: string;
  links: Array<{ label: string; to: string }>;
};

function XIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="currentColor"
      className={className}
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117l11.966 15.644Z" />
    </svg>
  );
}

const socials: Array<{ label: string; href: string; Icon: (props: { className?: string }) => ReactElement }> = [
  { label: "LinkedIn", href: "https://linkedin.com/company/ai-harness-com/", Icon: ({ className }) => <Linkedin className={className} /> },
  { label: "X (Twitter)", href: "https://x.com/ai_harness", Icon: XIcon },
  { label: "Instagram", href: "https://instagram.com/ai.harness", Icon: ({ className }) => <Instagram className={className} /> },
  { label: "YouTube", href: "https://youtube.com/@ai-harness", Icon: ({ className }) => <Youtube className={className} /> },
];

const columns: FooterColumn[] = [
  {
    title: "Platform", links: [
      { label: "Overview", to: "/platform" }, { label: "AI Agents", to: "/platform#agents" }, { label: "Workflow Engine", to: "/platform#workflows" }, { label: "Governance", to: "/security" }, { label: "Integrations", to: "/platform#integrations" }, ], }, {
    title: "Solutions", links: [
      { label: "By Use Case", to: "/solutions" }, { label: "By Industry", to: "/industries" }, { label: "For Operations", to: "/solutions#operations" }, { label: "For Engineering", to: "/solutions#engineering" }, { label: "For Customer Ops", to: "/solutions#customer" }, ], }, {
    title: "Company", links: [
      { label: "About Us", to: "/about" }, { label: "Contact", to: "/contact" }, { label: "Security & Trust", to: "/security" }, ], },
];

export default function Footer() {
  return (
    <footer id="site-footer" className="relative mt-16 overflow-hidden border-t border-ink-200 bg-ink-950 text-ink-300">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-500/40 to-transparent" />
      <div aria-hidden className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-brand-600/20 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-indigo-500/15 blur-3xl" />

      <Container className="relative py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <Logo dark />
            <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-ink-400">
              The enterprise control plane for a unified human + AI workforce. Deploy, govern, and scale
              AI agents across every workflow, with full transparency.
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              <Link
                to="/signup"
                className="inline-flex h-10 items-center justify-center rounded-full bg-white px-5 text-sm font-semibold text-ink-900 hover:bg-ink-100"
              >
                Start free
              </Link>
              <Link
                to="/demo"
                className="inline-flex h-10 items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 text-sm font-semibold text-white hover:bg-white/10"
              >
                Book a demo
              </Link>
            </div>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-ink-300 transition-colors hover:border-white/30 hover:bg-white/10 hover:text-white"
                >
                  <Icon className="h-[18px] w-[18px]" />
                </a>
              ))}
            </div>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold uppercase tracking-[0.14em] text-white">{col.title}</h4>
              <ul className="mt-5 space-y-3 text-[14.5px]">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link to={l.to} className="text-ink-400 transition-colors hover:text-white">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-start gap-4 border-t border-white/10 pt-8 text-sm text-ink-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} AI-Harness, Inc. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <Link to="/security" className="hover:text-white">Security</Link>
            <Link to="/contact" className="hover:text-white">Privacy</Link>
            <Link to="/contact" className="hover:text-white">Terms</Link>
            <Link to="/contact" className="hover:text-white">DPA</Link>
            <Link to="/contact" className="hover:text-white">Contact</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
