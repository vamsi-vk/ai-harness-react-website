import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUp, ChevronDown, MoreHorizontal, X } from "lucide-react";
import { cn } from "../lib/cn";
import { useFooterVisible } from "../lib/useFooterVisible";

type ChatMessage = {
  id: string;
  role: "bot" | "user";
  text: string;
};

const SCROLL_THRESHOLD = 120;
const POP_DELAY_MS = 5000;
const TEASER_DELAY_MS = 4000;
const SALES_PHONE_DISPLAY = "+1 (888) 427-8437";
const SALES_PHONE_HREF = "tel:+18884278437";
const TEASER_MESSAGE = "Need help? Our team can walk you through AI-Harness.";

const QUICK_REPLIES = [
  { label: SALES_PHONE_DISPLAY, href: SALES_PHONE_HREF, external: true },
  { label: "Book a demo", href: "/demo", external: false },
] as const;

const BOT_REPLIES: Record<string, string> = {
  "What can AI-Harness do?":
    "AI-Harness gives your business a team of AI agents, each built for one job: capturing leads, managing reputation, growing reviews, and drafting proposals. They work 24/7 inside your existing workflows.",
  "How do AI agents work?":
    "Each agent is a separate teammate with its own role. Turn on one or run them together. They connect to the tools you already use and handle repetitive work so your team can focus on customers.",
  "How do I get started?":
    "You can start free with $10 in credits. No credit card required. Setup takes minutes, and ready-to-go agents begin working the same day.",
  "Book a demo":
    "Happy to help! Book a live walkthrough and see the agents in action on your use cases.",
};

const WELCOME_MESSAGE =
  "Hi there! I'm the AI-Harness demo assistant. Ask me anything, or pick an option below.";

function ChatPill({
  label,
  href,
  external,
  onClick,
}: {
  label: string;
  href: string;
  external?: boolean;
  onClick?: () => void;
}) {
  const className =
    "rounded-full border border-white/15 bg-ink-800 px-3.5 py-1.5 text-xs font-medium text-white/90 transition hover:border-white/25 hover:bg-ink-700";

  if (external) {
    return (
      <a href={href} className={className} onClick={onClick}>
        {label}
      </a>
    );
  }

  return (
    <Link to={href} className={className} onClick={onClick}>
      {label}
    </Link>
  );
}

function getBotReply(input: string): string {
  const exact = BOT_REPLIES[input];
  if (exact) return exact;

  const lower = input.toLowerCase();
  if (lower.includes("demo") || lower.includes("book")) {
    return BOT_REPLIES["Book a demo"];
  }
  if (lower.includes("price") || lower.includes("cost")) {
    return "Start free with $10 in credits. Paid plans scale with your business. No credit card needed to begin.";
  }
  if (lower.includes("agent")) {
    return BOT_REPLIES["How do AI agents work?"];
  }

  return "Great question! AI-Harness agents automate leads, reviews, reputation, and proposals for small and mid-size businesses. Want to try it or book a demo?";
}

export default function DemoChatbot() {
  const footerVisible = useFooterVisible("80px");
  const [hasScrolled, setHasScrolled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const [teaserOpen, setTeaserOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [draft, setDraft] = useState("");
  const [typing, setTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY >= SCROLL_THRESHOLD) setHasScrolled(true);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!hasScrolled) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const delay = reduceMotion ? 0 : POP_DELAY_MS;

    const timer = window.setTimeout(() => setVisible(true), delay);
    return () => window.clearTimeout(timer);
  }, [hasScrolled]);

  useEffect(() => {
    if (!visible || open) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const delay = reduceMotion ? 500 : TEASER_DELAY_MS;

    const timer = window.setTimeout(() => setTeaserOpen(true), delay);
    return () => window.clearTimeout(timer);
  }, [visible, open]);

  useEffect(() => {
    if (open) setTeaserOpen(false);
  }, [open]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing, open]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  const toggleOpen = () => {
    setTeaserOpen(false);
    setOpen((prev) => {
      const next = !prev;
      if (next && messages.length === 0) {
        setMessages([{ id: "welcome", role: "bot", text: WELCOME_MESSAGE }]);
      }
      return next;
    });
  };

  const sendMessage = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || typing) return;

    if (trimmed === "Book a demo") {
      setMessages((prev) => [
        ...prev,
        { id: `user-${Date.now()}`, role: "user", text: trimmed },
        {
          id: `bot-${Date.now() + 1}`,
          role: "bot",
          text: BOT_REPLIES["Book a demo"],
        },
      ]);
      return;
    }

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      role: "user",
      text: trimmed,
    };

    setMessages((prev) => [...prev, userMessage]);
    setDraft("");
    setTyping(true);

    window.setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: `bot-${Date.now()}`,
          role: "bot",
          text: getBotReply(trimmed),
        },
      ]);
      setTyping(false);
    }, 650);
  };

  const shown = visible;
  const nearFooter = footerVisible;

  return (
    <div
      className={cn(
        "fixed bottom-6 right-6 z-50 flex flex-col items-end sm:bottom-8 sm:right-8",
        nearFooter && "bottom-24 sm:bottom-28",
        shown || open || teaserOpen ? "pointer-events-auto" : "pointer-events-none",
      )}
      aria-hidden={!shown && !open && !teaserOpen}
    >
      {open ? (
      <div
        className="mb-2 w-[min(100vw-3rem,24rem)] origin-bottom-right overflow-hidden rounded-3xl border border-ink-800/80 bg-ink-950 shadow-[0_28px_90px_-20px_rgba(0,0,0,0.65)] transition-all duration-300 ease-out"
      >
        <div className="flex items-center gap-3 border-b border-white/10 px-4 py-3">
          <img
            src="/ai-harness-favicon.png"
            alt=""
            className="h-9 w-9 shrink-0 rounded-xl object-cover"
            decoding="async"
          />
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-semibold text-white">AI-Harness</p>
            <p className="text-xs text-white/55">The team can also help</p>
          </div>
          <button
            type="button"
            className="grid h-8 w-8 place-items-center rounded-full text-white/50 transition hover:bg-white/10 hover:text-white"
            aria-label="More options"
          >
            <MoreHorizontal className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={(event) => {
              event.preventDefault();
              event.stopPropagation();
              setOpen(false);
            }}
            className="relative z-10 grid h-8 w-8 place-items-center rounded-full text-white/50 transition hover:bg-white/10 hover:text-white"
            aria-label="Close chat"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="flex h-[min(52vh,22rem)] flex-col">
          <div className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={cn("flex", message.role === "user" ? "justify-end" : "justify-start")}
              >
                <div
                  className={cn(
                    "max-w-[88%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed",
                    message.role === "user"
                      ? "rounded-br-md bg-brand-600 text-white"
                      : "rounded-bl-md bg-ink-800 text-white/90",
                  )}
                >
                  {message.text}
                </div>
              </div>
            ))}
            {typing ? (
              <div className="flex justify-start">
                <div className="rounded-2xl rounded-bl-md bg-ink-800 px-3.5 py-3">
                  <span className="inline-flex gap-1">
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-white/50 [animation-delay:0ms]" />
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-white/50 [animation-delay:120ms]" />
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-white/50 [animation-delay:240ms]" />
                  </span>
                </div>
              </div>
            ) : null}
            <div ref={messagesEndRef} />
          </div>

          <div className="space-y-3 px-4 pb-4">
            <div className="flex flex-wrap gap-2">
              {QUICK_REPLIES.map((reply) => (
                <ChatPill key={reply.label} {...reply} />
              ))}
            </div>

            <form
              className="flex items-center gap-2 rounded-2xl border border-white/10 bg-ink-900 px-3 py-2"
              onSubmit={(event) => {
                event.preventDefault();
                sendMessage(draft);
              }}
            >
              <input
                ref={inputRef}
                value={draft}
                onChange={(event) => setDraft(event.target.value)}
                placeholder="Message..."
                className="h-9 min-w-0 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-white/35"
              />
              <button
                type="submit"
                disabled={!draft.trim() || typing}
                className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white text-ink-900 transition hover:bg-white/90 disabled:cursor-not-allowed disabled:opacity-40"
                aria-label="Send message"
              >
                <ArrowUp className="h-4 w-4" />
              </button>
            </form>

            <p className="text-center text-[11px] text-white/35">
              <Link to="/signup" className="text-white/55 underline-offset-2 hover:text-white hover:underline">
                Start free
              </Link>
              {" · "}
              <Link to="/demo" className="text-white/55 underline-offset-2 hover:text-white hover:underline">
                Book a demo
              </Link>
            </p>
          </div>
        </div>
      </div>
      ) : null}

      {!open && teaserOpen ? (
      <div
        className="mb-2 w-[min(100vw-3rem,18rem)] origin-bottom-right rounded-2xl border border-ink-800/80 bg-ink-950 p-4 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.55)] transition-all duration-300 ease-out"
      >
        <div className="flex items-start justify-between gap-2">
          <p className="text-sm leading-relaxed text-white/90">{TEASER_MESSAGE}</p>
          <button
            type="button"
            onClick={(event) => {
              event.preventDefault();
              event.stopPropagation();
              setTeaserOpen(false);
            }}
            className="relative z-10 grid h-7 w-7 shrink-0 place-items-center rounded-full text-white/50 transition hover:bg-white/10 hover:text-white"
            aria-label="Dismiss message"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {QUICK_REPLIES.map((reply) => (
            <ChatPill
              key={reply.label}
              {...reply}
              onClick={() => setTeaserOpen(false)}
            />
          ))}
        </div>
      </div>
      ) : null}

      <div
        className={cn(
          "relative shrink-0 transition-all duration-300 ease-out",
          shown ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0",
        )}
      >
        <button
          type="button"
          onClick={toggleOpen}
          className="relative h-14 w-14 overflow-visible rounded-full bg-brand-600 text-white shadow-[0_16px_40px_-12px_rgba(124,58,237,0.55)] ring-2 ring-white transition-transform duration-300 ease-out hover:scale-105"
          aria-label={open ? "Minimize chat" : "Open demo chat"}
          aria-expanded={open}
        >
          <span
            className={cn(
              "absolute inset-0 overflow-hidden rounded-full transition-all duration-300",
              open ? "scale-75 opacity-0" : "scale-100 opacity-100",
            )}
          >
            <img
              src="/ai-harness-favicon.png"
              alt=""
              className="h-full w-full object-cover"
              decoding="async"
            />
          </span>
          <span
            className={cn(
              "absolute inset-0 grid place-items-center overflow-hidden rounded-full bg-brand-600 transition-all duration-300",
              open ? "scale-100 opacity-100" : "scale-75 opacity-0",
            )}
          >
            <ChevronDown className="h-6 w-6" strokeWidth={2.25} />
          </span>
          {!open ? (
            <span
              aria-hidden
              className="absolute right-0 top-0 z-10 grid h-[18px] min-w-[18px] translate-x-1 -translate-y-1 place-items-center rounded-full bg-error-500 px-1 text-[10px] font-bold leading-none text-white shadow-sm ring-2 ring-white"
            >
              1
            </span>
          ) : null}
        </button>
      </div>
    </div>
  );
}
