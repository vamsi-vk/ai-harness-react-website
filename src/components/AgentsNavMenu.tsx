import { FileText, MessageSquare, Star, TrendingUp, type LucideIcon } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { cn } from "../lib/cn";
import { scrollToHashWithRetry } from "../lib/scrollToHash";

export type AgentNavItem = {
  label: string;
  to: string;
  description: string;
  icon: LucideIcon;
  accent: string;
};

export const AGENT_NAV_ITEMS: AgentNavItem[] = [
  {
    label: "Sales Pipeline & CRM Agent",
    to: "/ai-agents#sales-pipeline",
    description: "Captures leads, follows up, and keeps customers organized.",
    icon: TrendingUp,
    accent: "from-indigo-500 to-violet-600",
  },
  {
    label: "Reputation & Sentiment Agent",
    to: "/ai-agents#reputation",
    description: "Reads and replies to reviews in your voice.",
    icon: MessageSquare,
    accent: "from-rose-400 to-pink-600",
  },
  {
    label: "Automated Review Agent",
    to: "/ai-agents#reviews",
    description: "Asks happy customers for reviews, automatically.",
    icon: Star,
    accent: "from-amber-400 to-orange-500",
  },
  {
    label: "Proposal Drafting Agent",
    to: "/ai-agents#proposals",
    description: "Turns requests into ready-to-send proposals.",
    icon: FileText,
    accent: "from-cyan-400 to-sky-600",
  },
];

type Props = {
  onNavigate?: () => void;
  className?: string;
};

function navigateToAgent(
  to: string,
  navigate: ReturnType<typeof useNavigate>,
  location: ReturnType<typeof useLocation>,
) {
  const [path, hash = ""] = to.split("#");
  const hashValue = hash ? `#${hash}` : "";

  if (location.pathname === path && hashValue) {
    navigate({ pathname: path, hash }, { replace: location.hash === hashValue });
    scrollToHashWithRetry(hashValue);
    return;
  }

  navigate(to);
}

export default function AgentsNavMenu({ onNavigate, className }: Props) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleAgentClick = (to: string) => {
    onNavigate?.();
    navigateToAgent(to, navigate, location);
  };

  return (
    <div className={cn("px-6 py-5", className)}>
      <div className="grid gap-4 sm:grid-cols-2">
        {AGENT_NAV_ITEMS.map((agent) => {
          const Icon = agent.icon;
          return (
            <button
              key={agent.to}
              type="button"
              onClick={() => handleAgentClick(agent.to)}
              className="group flex items-start gap-4 p-4 text-left transition-colors hover:bg-ink-50"
            >
              <span
                className={cn(
                  "grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gradient-to-br text-white shadow-sm ring-2 ring-white",
                  agent.accent,
                )}
              >
                <Icon className="h-5 w-5" strokeWidth={2} />
              </span>
              <span className="min-w-0 pt-0.5">
                <span className="block text-[14px] font-semibold leading-snug text-ink-900 group-hover:text-brand-700">
                  {agent.label}
                </span>
                <span className="mt-1.5 block text-[12.5px] leading-relaxed text-ink-500">
                  {agent.description}
                </span>
              </span>
            </button>
          );
        })}
      </div>
      <div className="mt-4 border-t border-ink-100 px-1 pb-1 pt-5">
        <button
          type="button"
          onClick={() => {
            onNavigate?.();
            navigate("/ai-agents");
          }}
          className="text-[13.5px] font-semibold text-brand-600 transition hover:text-brand-700"
        >
          View all AI agents →
        </button>
      </div>
    </div>
  );
}
