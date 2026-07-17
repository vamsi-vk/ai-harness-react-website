import { useEffect, useState, type ReactNode } from "react";
import {
  ArrowRight,
  BarChart3,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Link2,
  Megaphone,
  MessageCircle,
  PenLine,
  Sparkles,
  Target,
  type LucideIcon,
} from "lucide-react";
import Container from "../components/Container";
import Button from "../components/Button";
import Seo from "../components/Seo";
import FaqJsonLd from "../components/FaqJsonLd";
import FaqAccordion from "../components/FaqAccordion";
import ScrollReveal from "../components/ScrollReveal";
import {
  MARKETING_AGENT_BASE,
  MarketingAgentChrome,
} from "../components/marketing-automation/MarketingAgentSubNav";
import SoftPastelBackdrop from "../components/marketing-automation/SoftPastelBackdrop";
import { MarketingHeroImage } from "../components/marketing-automation/MarketingHeroImage";
import { TITLE_HL as HL } from "../components/agent-title-highlight";
import { Link } from "react-router-dom";
import { cn } from "../lib/cn";

const PALETTE_EYEBROW = "text-brand-600";
const PALETTE_ACCENT = "text-brand-600";

/** Fixed brand CTAs for this page — do not follow the palette picker */
const MARKETING_BTN_PRIMARY =
  "!border-transparent !bg-[#7C3AED] !text-white hover:!bg-[#6D28D9] !shadow-[0_12px_28px_-12px_rgba(124,58,237,0.4)]";
const MARKETING_BTN_SECONDARY =
  "!border-[#7C3AED]/45 !bg-white !text-[#7C3AED] hover:!border-[#7C3AED] hover:!bg-[#7C3AED]/[0.06] hover:!text-[#6D28D9]";
const MARKETING_BTN_OUTLINE =
  "inline-flex h-11 shrink-0 items-center justify-center rounded-full border border-[#7C3AED]/45 bg-white px-5 text-sm font-medium text-[#7C3AED] transition hover:border-[#7C3AED] hover:bg-[#7C3AED]/[0.06] hover:text-[#6D28D9]";

const FAQS = [
  {
    q: "What does an AI marketing automation agent do?",
    a: "An AI marketing automation agent plans your content calendar, writes and publishes posts, answers comments and messages, and reports which activity brought in revenue, all under your approval. In AI-Harness it runs your marketing as a governed teammate rather than a tool you have to operate.",
  },
  {
    q: "How much of my time does it need?",
    a: "About twenty minutes to review and approve a month of drafted posts and campaigns, plus any moment you choose to step in. Approvals are built in, so nothing goes out that you have not allowed.",
  },
  {
    q: "Which platforms does it publish to?",
    a: "Facebook, Instagram, LinkedIn, X, TikTok, and YouTube, from one composer and one calendar. Connect a channel once in the Outreach tab and the agent handles it from then on.",
  },
  {
    q: "Will the posts sound like my business?",
    a: "Yes. The agent learns your voice from your existing posts, offers, and answers, so a family restaurant sounds warm and a streetwear shop sounds sharp. You can edit or regenerate any draft before it publishes.",
  },
  {
    q: "How is this different from a scheduling tool?",
    a: "A scheduler publishes what you write. This agent plans the calendar, writes the content, publishes at the right time, answers what comes back, and reports what drove revenue. It is the difference between a tool you operate and a teammate who owns the outcome.",
  },
];

type Step = {
  number: string;
  title: ReactNode;
  body: string;
  icon: LucideIcon;
  visual?: "channels" | "goals" | "image" | "placeholder";
  imageSrc?: string;
  imageAlt?: string;
  link?: { label: string; to: string; page: string };
};

const STEPS: Step[] = [
  {
    number: "1",
    title: (
      <>
        Connect your <span className={HL}>Channels</span> and teach it your{" "}
        <span className={HL}>Voice</span>
      </>
    ),
    body: "Link Facebook, Instagram, LinkedIn, X, TikTok, and YouTube once from the Outreach tab. The agent studies what you have already published, your menu or catalog, your offers, and how you talk to customers, so the bistro sounds like the bistro and the boutique sounds like the boutique.",
    icon: Link2,
    visual: "image",
    imageSrc: "/illustrations/custom/marketing-connect-channels.png",
    imageAlt:
      "Connecting social channels and teaching the agent your brand voice from the Outreach tab",
  },
  {
    number: "2",
    title: (
      <>
        It <span className={HL}>Plans the Month</span> before you ask
      </>
    ),
    body: "Give it a goal in one line (fill Tuesday nights, sell through the summer line) and the agent drafts a themed plan: posts, campaign arcs, offers, and publish times matched to when your customers actually decide. Lunch scrollers pick tonight’s table; weekend browsers pick Saturday’s errand.",
    icon: CalendarDays,
    visual: "image",
    imageSrc: "/illustrations/custom/marketing-plans-month.png",
    imageAlt:
      "Monthly plan on a laptop with goals and a checklist for posts, campaigns, offers, and publish times",
  },
  {
    number: "3",
    title: (
      <>
        You approve in <span className={HL}>Minutes</span>, not{" "}
        <span className={HL}>Evenings</span>
      </>
    ),
    body: "Everything lands as drafts on your calendar. The bistro owner swaps one photo and one price; the boutique owner reorders the launch sequence. Tap approve, and that is the marketing work for the month, about twenty minutes of it.",
    icon: CheckCircle2,
    visual: "image",
    imageSrc: "/illustrations/custom/marketing-approve-minutes.png",
    imageAlt:
      "Business owners celebrating a quick approval after reviewing the month’s marketing drafts",
  },
  {
    number: "4",
    title: (
      <>
        Posts <span className={HL}>Publish Themselves</span> at the right time
      </>
    ),
    body: "Approved posts flow to the Content Calendar and go out across every connected channel automatically, with Best Time to Post choosing the slot when you have not. Nothing depends on anyone remembering.",
    icon: Megaphone,
    visual: "image",
    imageSrc: "/illustrations/custom/marketing-publish-calendar.png",
    imageAlt:
      "Desk calendar with scheduled social posts and a paper airplane publishing to Instagram, Facebook, X, LinkedIn, and YouTube",
    link: {
      label: "See exactly how posts get made, scheduled, and published",
      to: `${MARKETING_AGENT_BASE}/post-creation-publishing`,
      page: "Post Creation & Publishing",
    },
  },
  {
    number: "5",
    title: (
      <>
        Every comment, question, and DM gets{" "}
        <span className={HL}>Answered</span>
      </>
    ),
    body: "Do you take reservations for eight? Is this in a size nine downtown? The agent replies in moments, in your voice, and routes buying questions to your booking link, your checkout, or the right location. Anything sensitive comes to you first with a drafted reply.",
    icon: MessageCircle,
    visual: "image",
    imageSrc: "/illustrations/custom/marketing-answered-engagement.png",
    imageAlt:
      "Store teammate answering a customer question quickly, the same care the agent brings to every comment and DM",
    link: {
      label: "Watch how the agent handles every interaction",
      to: `${MARKETING_AGENT_BASE}/social-engagement`,
      page: "Social Engagement",
    },
  },
  {
    number: "6",
    title: (
      <>
        <span className={HL}>Campaigns</span> run as{" "}
        <span className={HL}>One Motion</span>
      </>
    ),
    body: "A weekend special, a product drop, a festival promo: the agent generates the whole arc (teasers, countdowns, launch posts, and reminders) and schedules it across the calendar in a single pass.",
    icon: Sparkles,
    visual: "image",
    imageSrc: "/illustrations/custom/marketing-campaigns-motion.png",
    imageAlt:
      "Team planning a full campaign arc in one session: teasers, launch, and follow-ups moving together",
  },
  {
    number: "7",
    title: (
      <>
        You see what <span className={HL}>Grew Revenue</span>
      </>
    ),
    body: "Views, likes, comments, and clicks roll into a plain-English report: which posts drove bookings, calls, and walk-ins, what flopped, and next month’s plan already drafted from what worked.",
    icon: BarChart3,
    visual: "image",
    imageSrc: "/illustrations/custom/marketing-grew-revenue.png",
    imageAlt:
      "Team collaborating in a bright workspace, planning the next month from what drove revenue",
    link: {
      label: "Explore the reporting that closes the loop",
      to: `${MARKETING_AGENT_BASE}/social-analytics`,
      page: "Social Analytics & Reporting",
    },
  },
];

const MONTH_POINTS = [
  {
    id: "time",
    icon: Clock3,
    label: (
      <>
        Your <span className={HL}>Time</span>
      </>
    ),
    body: "About twenty minutes to approve the month, plus any moment you choose to step in.",
  },
  {
    id: "agent",
    icon: CalendarDays,
    label: (
      <>
        Your <span className={HL}>Agent</span>
      </>
    ),
    body: "The calendar planned and filled, every post published on schedule, every comment and DM answered, and a report that ties the activity back to bookings, walk-ins, and sales.",
  },
  {
    id: "customers",
    icon: MessageCircle,
    label: (
      <>
        Your <span className={HL}>Customers</span>
      </>
    ),
    body: "A brand that shows up every single day, answers within moments, and always knows what is on this weekend.",
  },
];

function ProductSchema() {
  const json = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        name: "Marketing Automation Agent",
        description:
          "AI-Harness Marketing Automation Agent that plans the month, creates and publishes posts, answers every comment, and reports what grew revenue for restaurants, retail, and growing SMBs.",
        brand: { "@type": "Brand", name: "AI-Harness" },
        url: `https://ai-harness.com${MARKETING_AGENT_BASE}`,
        category: "Marketing Automation Software",
      },
      {
        "@type": "SoftwareApplication",
        name: "AI-Harness Marketing Automation Agent",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        url: `https://ai-harness.com${MARKETING_AGENT_BASE}`,
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
          description: "Start free with $10 in credits, no credit card required",
        },
        publisher: { "@type": "Organization", name: "AI-Harness" },
      },
    ],
  });

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />
  );
}

export default function MarketingAutomationAgent() {
  return (
    <>
      <Seo
        path={MARKETING_AGENT_BASE}
        title="Marketing Automation Agent | AI Marketing for Local Businesses"
        description="Your AI-Harness Marketing Automation Agent plans the month, creates and publishes posts, answers every comment, and reports what grew revenue. Built for restaurants, retail, and growing SMBs. Start free."
        keywords="ai marketing agent, ai powered marketing platform, marketing automation for SMBs, social media automation for local businesses, restaurant marketing automation, retail marketing automation, ai social media manager, ai powered digital assistants"
        breadcrumbs={[
          { label: "Marketing Automation Agent", path: MARKETING_AGENT_BASE },
        ]}
      />
      <FaqJsonLd faqs={FAQS} />
      <ProductSchema />

      <MarketingAgentChrome>
        <Hero />
        <ProblemSection />
        <HowItWorksSection />
        <MonthLookSection />
        <DashboardSection />
        <FaqSection />
        <SoftCtaSection />
      </MarketingAgentChrome>
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-x-clip border-b border-ink-100/70 pb-12 pt-10 sm:pb-16 sm:pt-14 lg:pb-20 lg:pt-16">
      <SoftPastelBackdrop side="left" />

      <Container className="relative z-10">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-10 xl:gap-12">
          <ScrollReveal className="relative z-10 max-w-xl min-w-0">
            <p className={cn("text-sm font-medium", PALETTE_EYEBROW)}>
              Marketing Automation Agent
            </p>
            <h1 className="mt-4 text-[clamp(2rem,4.5vw,3.35rem)] font-medium leading-[1.08] tracking-[-0.025em] text-ink-900">
              The AI agent that runs your{" "}
              <span className={HL}>Marketing</span> while you run the{" "}
              <span className={HL}>Business</span>
            </h1>
            <p className="mt-5 text-lg font-normal leading-[1.7] text-ink-600 sm:text-xl">
              Planning, posting, replying, and reporting, handled end to end by an agent that learns
              your voice and works from your goals. You approve the plan in minutes. Your customers
              see a brand that never goes quiet.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:mt-7 sm:flex-row sm:items-center">
              <Button to="/signup" size="lg" className={MARKETING_BTN_PRIMARY}>
                Start free
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button to="/demo" variant="secondary" size="lg" className={MARKETING_BTN_SECONDARY}>
                See the agent in action
              </Button>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-ink-500">
              Free to start with $10 in credits · No credit card · Built for local businesses, SMBs,
              and growing brands
            </p>
          </ScrollReveal>

          <ScrollReveal delay={80} className="relative min-w-0 lg:-ml-4 xl:-ml-6">
            <MarketingHeroImage
              src="/illustrations/custom/marketing-hero-main.png"
              alt="Café owner managing social marketing with AI-powered calendar, campaign suggestions, and post previews"
              className="aspect-[5/4] h-auto min-h-[15rem] w-full object-cover object-[40%_center] sm:min-h-[17rem] lg:aspect-[4/3] lg:min-h-[20rem] xl:min-h-[22rem]"
            />
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}

function SoftGradientFrame({
  children,
  className,
  innerClassName,
  active = true,
  shape = "default",
}: {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
  active?: boolean;
  shape?: "default" | "pill-right" | "pill-left";
}) {
  const outerRound =
    shape === "pill-right"
      ? "rounded-l-[1.5rem] rounded-r-[999px] sm:rounded-l-[1.75rem]"
      : shape === "pill-left"
        ? "rounded-r-[1.5rem] rounded-l-[999px] sm:rounded-r-[1.75rem]"
        : "rounded-[1.75rem]";
  const innerRound =
    shape === "pill-right"
      ? "rounded-l-[calc(1.5rem-1.5px)] rounded-r-[999px] sm:rounded-l-[calc(1.75rem-1.5px)]"
      : shape === "pill-left"
        ? "rounded-r-[calc(1.5rem-1.5px)] rounded-l-[999px] sm:rounded-r-[calc(1.75rem-1.5px)]"
        : "rounded-[calc(1.75rem-1.5px)]";

  if (!active) {
    return (
      <div
        className={cn(
          outerRound,
          "bg-white p-1 shadow-[0_20px_50px_-24px_color-mix(in_srgb,var(--marketing-accent)_35%,transparent)]",
          className,
        )}
      >
        {children}
      </div>
    );
  }

  return (
    <div
      className={cn(outerRound, "p-[1.5px]", className)}
      style={{
        background:
          "linear-gradient(to bottom right, color-mix(in srgb, var(--marketing-p1) 35%, transparent), color-mix(in srgb, var(--marketing-p2) 30%, transparent), color-mix(in srgb, var(--marketing-p3) 35%, transparent))",
        boxShadow:
          shape === "default"
            ? "0 18px 40px -24px color-mix(in srgb, var(--marketing-accent) 18%, transparent)"
            : "0 16px 28px -8px rgba(15, 23, 42, 0.18), 0 6px 12px -6px rgba(15, 23, 42, 0.1)",
      }}
    >
      <div
        className={cn(
          "h-full overflow-hidden bg-white shadow-[inset_0_0_28px_color-mix(in_srgb,var(--marketing-p2)_4%,transparent)]",
          innerRound,
          innerClassName,
        )}
      >
        {children}
      </div>
    </div>
  );
}

function ProblemSection() {
  return (
    <section className="relative overflow-hidden border-y border-ink-100 bg-white py-16 sm:py-20">
      <Container className="relative z-10">
        <ScrollReveal>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-16">
            <div className="min-w-0">
              <ProblemCollageVisual />
            </div>
            <div>
              <p className={cn("text-sm font-medium", PALETTE_EYEBROW)}>
                The problem
              </p>
              <h2 className="mt-4 text-[clamp(1.75rem,3.2vw,2.5rem)] font-medium leading-[1.15] tracking-[-0.02em] text-ink-900">
                <span className={HL}>Marketing</span> is the{" "}
                <span className={HL}>Growth Engine</span> most local
                businesses cannot keep running
              </h2>
              <p className="mt-5 text-lg font-normal leading-[1.75] text-ink-700 sm:text-xl">
                Consistency is what wins on social, and consistency is exactly what a packed week
                destroys. A restaurant owner closing at 11 PM is not drafting tomorrow’s post. A retail
                team knee-deep in inventory is not answering DMs. So the page goes quiet, the algorithm
                moves on, and customers drift to whoever stayed visible. The Marketing Automation Agent
                exists so your marketing keeps working on the days you cannot.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}

function ProblemCollageVisual() {
  return (
    <img
      src="/illustrations/custom/marketing-problem-hero.png"
      alt="Café owner juggling a quiet social calendar, unanswered comments, and the growth that marketing automation restores"
      className="aspect-[4/3] h-auto w-full object-cover object-center"
      loading="lazy"
      decoding="async"
    />
  );
}

const CONNECT_CHANNELS = [
  {
    name: "Instagram",
    subtitle: "Business, Creator, or Personal",
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8" aria-hidden>
        <defs>
          <radialGradient id="ig-grad" cx="30%" cy="107%" r="150%">
            <stop offset="0%" stopColor="#fdf497" />
            <stop offset="5%" stopColor="#fdf497" />
            <stop offset="45%" stopColor="#fd5949" />
            <stop offset="60%" stopColor="#d6249f" />
            <stop offset="90%" stopColor="#285AEB" />
          </radialGradient>
        </defs>
        <path
          fill="url(#ig-grad)"
          d="M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.64.07-4.85.07s-3.58-.01-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.64-.07-4.85s.01-3.58.07-4.85C2.38 3.92 3.9 2.38 7.15 2.23 8.42 2.17 8.8 2.16 12 2.16M12 0C8.74 0 8.33.01 7.05.07 2.7.27.27 2.69.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.2 4.36 2.62 6.78 6.98 6.98C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c4.35-.2 6.78-2.62 6.98-6.98.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95C23.73 2.69 21.31.27 16.95.07 15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.41-11.85a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"
        />
      </svg>
    ),
  },
  {
    name: "Threads",
    subtitle: "Profile",
    icon: (
      <svg viewBox="0 0 192 192" className="h-8 w-8" aria-hidden>
        <path
          fill="#111827"
          d="M141.537 88.9883C140.71 88.5919 139.87 88.2104 139.019 87.8451C137.537 60.5382 122.616 44.905 97.5619 44.745C97.4484 44.7443 97.3355 44.7443 97.222 44.7443C82.2364 44.7443 69.7731 51.1409 62.102 62.7807L75.881 72.2328C81.6116 63.5383 90.6052 61.6848 97.2286 61.6848C97.3051 61.6848 97.3819 61.6848 97.4576 61.6855C105.707 61.7381 111.932 64.1366 115.961 68.814C118.893 72.2193 120.854 76.925 121.825 82.8638C114.511 81.6207 106.601 81.2385 98.145 81.7233C74.3247 83.0954 59.0111 96.9879 60.0396 116.292C60.5615 126.084 65.4397 134.508 73.775 140.011C80.8224 144.663 89.899 146.938 99.3323 146.423C111.79 145.74 121.563 140.987 128.381 132.296C133.559 125.696 136.834 117.143 138.28 106.366C144.217 109.949 148.617 114.664 151.047 120.332C155.179 129.967 155.42 145.8 142.501 158.708C131.182 170.016 117.576 174.908 97.0135 175.059C74.2042 174.89 56.9538 167.575 45.7381 153.317C35.2355 139.966 29.8077 120.682 29.6052 96C29.8077 71.3178 35.2355 52.0336 45.7381 38.6827C56.9538 24.4249 74.2039 17.11 97.0132 16.9405C119.988 17.1113 137.539 24.4614 149.184 38.788C154.894 45.8136 159.199 54.6488 162.037 64.9503L178.184 60.6422C174.744 47.9622 169.331 37.0357 161.965 27.974C147.036 9.60668 125.202 0.195148 97.0695 0H96.9569C68.8816 0.19447 47.2921 9.6418 32.7883 28.0793C19.8819 44.4864 13.2244 67.3157 13.0007 95.9325L13 96L13.0007 96.0675C13.2244 124.684 19.8819 147.514 32.7883 163.921C47.2921 182.358 68.8816 191.806 96.9569 192H97.0695C122.03 191.827 139.624 185.292 154.118 170.811C173.081 151.866 172.51 128.119 166.26 113.541C161.776 103.087 153.227 94.5962 141.537 88.9883ZM98.4405 129.507C88.0005 130.095 77.1544 125.409 76.6196 115.372C76.2232 107.93 81.9158 99.626 99.0812 98.6368C101.047 98.5234 102.976 98.468 104.871 98.468C111.106 98.468 116.939 99.0737 122.242 100.233C120.264 124.935 108.662 128.946 98.4405 129.507Z"
        />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    subtitle: "Page or Profile",
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8" aria-hidden>
        <path
          fill="#0A66C2"
          d="M22.23 0H1.77C.8 0 0 .77 0 1.73v20.54C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.73V1.73C24 .77 23.2 0 22.23 0zM7.12 20.45H3.56V9h3.56v11.45zM5.34 7.43c-1.14 0-2.06-.93-2.06-2.06 0-1.14.92-2.06 2.06-2.06 1.14 0 2.06.92 2.06 2.06 0 1.13-.92 2.06-2.06 2.06zm15.11 13.02h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28z"
        />
      </svg>
    ),
  },
  {
    name: "Facebook",
    subtitle: "Page or Group",
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8" aria-hidden>
        <path
          fill="#1877F2"
          d="M24 12.07C24 5.41 18.63 0 12 0S0 5.41 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.95.93-1.95 1.89v2.26h3.32l-.53 3.49h-2.79V24C19.62 23.1 24 18.1 24 12.07"
        />
      </svg>
    ),
  },
  {
    name: "YouTube",
    subtitle: "Channel",
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8" aria-hidden>
        <path
          fill="#FF0000"
          d="M23.5 6.2a3.02 3.02 0 0 0-2.12-2.14C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.38.56A3.02 3.02 0 0 0 .5 6.2 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.8 3.02 3.02 0 0 0 2.12 2.14C4.5 20.5 12 20.5 12 20.5s7.5 0 9.38-.56a3.02 3.02 0 0 0 2.12-2.14A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.8zM9.75 15.57V8.43L15.82 12l-6.07 3.57z"
        />
      </svg>
    ),
  },
  {
    name: "TikTok",
    subtitle: "Profile",
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8" aria-hidden>
        <path
          fill="#111827"
          d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.16 15.2a6.34 6.34 0 0 0 10.86 4.46V10.9a8.23 8.23 0 0 0 4.82 1.55V8.99a4.85 4.85 0 0 1-.75-.3z"
        />
      </svg>
    ),
  },
  {
    name: "X",
    subtitle: "Profile",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden>
        <path
          fill="#111827"
          d="M18.9 1.15h3.5l-7.65 8.74L24 22.85h-7.42l-5.81-7.6-6.65 7.6H.61l8.18-9.35L0 1.15h7.61l5.25 6.95 6.04-6.95zm-1.23 19.5h1.94L6.43 3.13H4.35l13.32 17.52z"
        />
      </svg>
    ),
  },
  {
    name: "Pinterest",
    subtitle: "Profile",
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8" aria-hidden>
        <path
          fill="#E60023"
          d="M12.02.15C5.5.15.2 5.44.2 11.96c0 4.97 3.05 9.23 7.4 11.01-.1-.94-.19-2.38.04-3.4.21-.91 1.35-5.77 1.35-5.77s-.34-.69-.34-1.71c0-1.6.93-2.8 2.08-2.8.98 0 1.46.74 1.46 1.62 0 .99-.63 2.46-.95 3.83-.27 1.14.57 2.08 1.7 2.08 2.04 0 3.6-2.15 3.6-5.25 0-2.75-1.97-4.67-4.79-4.67-3.26 0-5.18 2.45-5.18 4.98 0 .98.38 2.04.85 2.61a.34.34 0 0 1 .08.33c-.09.37-.29 1.15-.33 1.31-.05.21-.17.26-.4.16-1.49-.7-2.42-2.88-2.42-4.63 0-3.77 2.74-7.24 7.91-7.24 4.15 0 7.38 2.96 7.38 6.91 0 4.12-2.6 7.44-6.2 7.44-1.21 0-2.35-.63-2.74-1.38l-.75 2.85c-.27 1.04-1 2.33-1.49 3.12A12.07 12.07 0 0 0 12.02 24c6.52 0 11.81-5.29 11.81-11.81C23.83 5.44 18.54.15 12.02.15"
        />
      </svg>
    ),
  },
  {
    name: "Google Business",
    subtitle: "Profile",
    icon: (
      <svg viewBox="0 0 40 40" className="h-9 w-9" aria-hidden>
        <rect width="40" height="40" rx="8" fill="#1A73E8" />
        <path
          fill="#fff"
          d="M11 28V14.5c0-.83.67-1.5 1.5-1.5H20l1.2 1.5H27.5c.83 0 1.5.67 1.5 1.5V28c0 .83-.67 1.5-1.5 1.5h-15c-.83 0-1.5-.67-1.5-1.5zm2.5-12.5v11h13v-11h-5.2l-1.2-1.5H13.5zm6.5 8.25a2.75 2.75 0 1 1 0-5.5 2.75 2.75 0 0 1 0 5.5z"
        />
        <circle cx="26.5" cy="25.5" r="3.5" fill="#fff" />
        <path
          fill="#1A73E8"
          d="M26.5 23.2c-.55 0-1 .36-1.18.86A1.75 1.75 0 0 0 24.75 25c0 .97.78 1.75 1.75 1.75s1.75-.78 1.75-1.75c0-.36-.11-.69-.3-.96A1.24 1.24 0 0 0 26.5 23.2z"
        />
      </svg>
    ),
  },
] as const;

function ConnectChannelsVisual() {
  return (
    <div className="overflow-hidden bg-ink-50">
      <div className="flex items-center justify-between border-b border-ink-200/80 bg-white px-5 py-3.5">
        <p className="text-sm font-medium text-ink-900">Connect a New Channel</p>
        <span
          aria-hidden
          className="grid h-7 w-7 place-items-center rounded-full text-ink-400"
        >
          ×
        </span>
      </div>
      <div className="p-4 sm:p-5">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-3.5">
          {CONNECT_CHANNELS.map((channel) => (
            <div
              key={channel.name}
              className="flex flex-col items-center rounded-2xl border border-ink-100 bg-white px-3 py-4 text-center shadow-soft sm:py-5"
            >
              <span className="grid h-10 w-10 place-items-center">{channel.icon}</span>
              <p className="mt-3 text-sm font-medium text-ink-900">{channel.name}</p>
              <p className="mt-0.5 text-[11px] leading-snug text-ink-500">{channel.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const GOAL_EXAMPLES = [
  "Fill Tuesday nights",
  "Sell through the summer line",
  "Book Friday brunch tables",
  "Move the weekend drop",
] as const;

const PLAN_PREVIEW = [
  {
    label: "Posts",
    detail: "18 themed drafts",
    Icon: PenLine,
    accent: "from-ink-400 to-ink-600",
    iconWrap: "bg-ink-100 text-ink-600",
  },
  {
    label: "Campaign arcs",
    detail: "3 launch sequences",
    Icon: Sparkles,
    accent: "from-success-400 to-success-600",
    iconWrap: "bg-success-50 text-success-600",
  },
  {
    label: "Offers",
    detail: "Matched to the goal",
    Icon: Target,
    accent: "from-warning-400 to-warning-600",
    iconWrap: "bg-warning-50 text-warning-600",
  },
  {
    label: "Publish times",
    detail: "Best Time to Post",
    Icon: Clock3,
    accent: "from-error-400 to-error-500",
    iconWrap: "bg-error-50 text-error-600",
  },
] as const;

function GoalTypingVisual() {
  const [goalIndex, setGoalIndex] = useState(0);
  const [typed, setTyped] = useState("");
  const [phase, setPhase] = useState<"typing" | "holding" | "deleting">("typing");
  const [showPlan, setShowPlan] = useState(false);

  useEffect(() => {
    const full = GOAL_EXAMPLES[goalIndex];
    let timer: ReturnType<typeof setTimeout>;

    if (phase === "typing") {
      if (typed.length < full.length) {
        timer = setTimeout(() => setTyped(full.slice(0, typed.length + 1)), 55);
      } else {
        setShowPlan(true);
        timer = setTimeout(() => setPhase("holding"), 1600);
      }
    } else if (phase === "holding") {
      timer = setTimeout(() => {
        setShowPlan(false);
        setPhase("deleting");
      }, 900);
    } else if (typed.length > 0) {
      timer = setTimeout(() => setTyped(full.slice(0, typed.length - 1)), 28);
    } else {
      setGoalIndex((i) => (i + 1) % GOAL_EXAMPLES.length);
      setPhase("typing");
    }

    return () => clearTimeout(timer);
  }, [typed, phase, goalIndex]);

  return (
    <div className="overflow-hidden bg-gradient-to-br from-ink-50 via-white to-[#EEF2FF]/60 p-5 sm:p-7">
      <div className="overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-lift">
        <div className="relative overflow-hidden border-b border-ink-100 bg-gradient-to-r from-ink-50 via-white to-success-50/30 px-5 py-4">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-6 -top-8 h-28 w-28 rounded-full bg-ink-300/25 blur-2xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-10 left-10 h-24 w-24 rounded-full bg-success-400/15 blur-2xl"
          />
          <div className="relative flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-ink-600 to-ink-800 text-white shadow-soft">
              <Target className="h-5 w-5" strokeWidth={2} />
            </span>
            <div>
              <p className="text-sm font-semibold text-ink-900">Set a goal</p>
              <p className="text-xs text-ink-500">One line. The agent plans the month.</p>
            </div>
            <span
              className={cn(
                "ml-auto rounded-full px-2.5 py-1 text-[11px] font-semibold tracking-wide transition-colors",
                showPlan
                  ? "bg-success-100 text-success-700"
                  : "bg-ink-100 text-ink-600",
              )}
            >
              {showPlan ? "Ready" : "Live"}
            </span>
          </div>
        </div>

        <div className="space-y-5 p-5 sm:p-6">
          <div>
            <p className="text-[11px] font-medium tracking-[0.12em] text-ink-500 uppercase">
              Goal
            </p>
            <div
              className={cn(
                "mt-2 flex min-h-[3.5rem] items-center rounded-xl border-2 px-4 py-3 transition-all duration-300",
                showPlan
                  ? "border-success-300 bg-success-50/60 shadow-[0_0_0_4px_rgba(34,197,94,0.08)]"
                  : "border-ink-300 bg-gradient-to-r from-ink-50 to-white shadow-[0_0_0_4px_rgba(107,114,128,0.08)]",
              )}
              aria-live="polite"
            >
              <p className="text-[15px] font-semibold leading-snug text-ink-900 sm:text-base">
                {typed || (
                  <span className="font-medium text-ink-300">Type a goal…</span>
                )}
                <span
                  aria-hidden
                  className={cn(
                    "ml-0.5 inline-block h-[1.05em] w-[2px] translate-y-[2px] align-middle animate-pulse",
                    showPlan ? "bg-success-600" : "bg-ink-700",
                  )}
                />
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {PLAN_PREVIEW.map((item, index) => {
              const Icon = item.Icon;
              return (
                <div
                  key={item.label}
                  className={cn(
                    "relative overflow-hidden rounded-2xl border border-ink-100 bg-white p-3.5 shadow-soft transition-all duration-500",
                    showPlan
                      ? "translate-y-0 scale-100 opacity-100"
                      : "translate-y-3 scale-[0.98] opacity-45",
                  )}
                  style={{ transitionDelay: showPlan ? `${index * 70}ms` : "0ms" }}
                >
                  <div
                    aria-hidden
                    className={cn("absolute inset-y-0 left-0 w-1 bg-gradient-to-b", item.accent)}
                  />
                  <div className="pl-2.5">
                    <span
                      className={cn(
                        "inline-grid h-8 w-8 place-items-center rounded-lg",
                        item.iconWrap,
                      )}
                    >
                      <Icon className="h-4 w-4" strokeWidth={2} />
                    </span>
                    <p className="mt-2.5 text-[11px] font-medium tracking-[0.1em] text-ink-400 uppercase">
                      {item.label}
                    </p>
                    <p className="mt-0.5 text-sm font-semibold text-ink-900">{item.detail}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div
            className={cn(
              "flex items-center gap-2.5 rounded-xl px-3.5 py-3 text-sm font-medium transition-all duration-300",
              showPlan
                ? "bg-gradient-to-r from-success-50 to-success-100/80 text-success-800 ring-1 ring-success-200/80"
                : "bg-gradient-to-r from-ink-50 to-ink-100/80 text-ink-700 ring-1 ring-ink-200/80",
            )}
          >
            <span
              className={cn(
                "grid h-7 w-7 shrink-0 place-items-center rounded-full text-white",
                showPlan
                  ? "bg-gradient-to-br from-success-500 to-success-600"
                  : "bg-gradient-to-br from-ink-600 to-ink-800",
              )}
            >
              <Sparkles className="h-3.5 w-3.5" strokeWidth={2} />
            </span>
            <span>
              {showPlan
                ? "Draft plan ready · publish times matched to buyers"
                : "Agent is listening · keep typing your goal"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function StepVisual({
  step,
  pillSide = "right",
}: {
  step: Step;
  pillSide?: "right" | "left";
}) {
  let visual: ReactNode;

  if (step.visual === "channels") {
    visual = <ConnectChannelsVisual />;
  } else if (step.visual === "goals") {
    visual = <GoalTypingVisual />;
  } else if (step.visual === "image" && step.imageSrc) {
    visual = (
      <div className="overflow-hidden">
        <img
          src={step.imageSrc}
          alt={step.imageAlt ?? ""}
          className="aspect-[5/4] h-auto min-h-[15rem] w-full object-cover object-center sm:min-h-[17rem] lg:aspect-[4/3] lg:min-h-[20rem] xl:min-h-[22rem]"
          loading="lazy"
          decoding="async"
        />
      </div>
    );
  } else {
    visual = (
      <div
        aria-label={`Image placeholder for step ${step.number}`}
        className="aspect-[5/4] min-h-[15rem] overflow-hidden border border-dashed border-ink-200 bg-gradient-to-br from-[#F5F3FF] via-white to-[#EFF6FF] sm:min-h-[17rem] lg:aspect-[4/3] lg:min-h-[20rem]"
      />
    );
  }

  const shape = pillSide === "left" ? "pill-left" : "pill-right";
  const plateRound =
    shape === "pill-right"
      ? "rounded-l-[1.5rem] rounded-r-[999px] sm:rounded-l-[1.75rem]"
      : "rounded-r-[1.5rem] rounded-l-[999px] sm:rounded-r-[1.75rem]";

  return (
    <div
      className={cn(
        "relative pb-3 sm:pb-4",
        pillSide === "right" ? "pl-3 sm:pl-4" : "pr-3 sm:pr-4",
      )}
    >
      {/* Offset plate — extra border on the side + below */}
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-0 bg-[#E5E7EB] shadow-[0_18px_30px_-10px_rgba(15,23,42,0.16)] ring-1 ring-[#D1D5DB]",
          plateRound,
          pillSide === "right" ? "right-3 sm:right-4" : "left-3 sm:left-4",
        )}
      />
      <div className="relative z-10">
        <SoftGradientFrame shape={shape}>{visual}</SoftGradientFrame>
      </div>
    </div>
  );
}

function HowItWorksSection() {
  return (
    <section className="relative overflow-hidden border-b border-ink-100/70">
      <div className="relative overflow-hidden py-16 sm:pb-12 sm:pt-24">
        <SoftPastelBackdrop side="right" />
        <Container className="relative z-10">
          <ScrollReveal className="mx-auto max-w-3xl text-center">
            <p className={cn("text-sm font-medium", PALETTE_EYEBROW)}>How it works</p>
            <h2 className="mt-4 text-[clamp(1.75rem,3.2vw,2.75rem)] font-medium leading-[1.12] tracking-[-0.02em] text-ink-900">
              How the agent runs your{" "}
              <span className={HL}>Marketing</span>, start to finish
            </h2>
            <p className="mt-5 text-lg font-normal leading-[1.7] text-ink-600">
              One agent, one connected workflow, from the first idea to the revenue report. A
              neighborhood bistro and a two-location sneaker boutique stand in as examples throughout.
            </p>
          </ScrollReveal>
        </Container>
      </div>

      {STEPS.map((step, index) => {
        const Icon = step.icon;
        const reverse = index % 2 === 1;
        const softBand = index % 2 === 1;

        return (
          <div
            key={step.number}
            className={cn(
              "relative overflow-hidden py-16 sm:py-24",
              softBand ? undefined : "bg-white",
            )}
          >
            {softBand ? (
              <SoftPastelBackdrop side={index % 4 === 1 ? "left" : "right"} />
            ) : null}

            <Container className="relative z-10">
              <ScrollReveal delay={(index % 3) * 40}>
                <div
                  className={cn(
                    "grid items-center gap-10 lg:gap-12 xl:gap-14",
                    reverse
                      ? "lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.9fr)]"
                      : "lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.15fr)]",
                  )}
                >
                  <div className={cn(reverse ? "order-2 lg:order-1" : "order-2 lg:order-2")}>
                    <StepVisual step={step} pillSide={reverse ? "right" : "left"} />
                  </div>
                  <div className={cn(reverse ? "order-1 lg:order-2" : "order-1 lg:order-1")}>
                    <div className="flex items-center gap-3">
                      <span className="grid h-10 w-10 place-items-center rounded-full bg-[linear-gradient(135deg,color-mix(in_srgb,var(--marketing-p1)_15%,white),color-mix(in_srgb,var(--marketing-p2)_10%,white),color-mix(in_srgb,var(--marketing-p3)_15%,white))] text-sm font-medium text-[var(--marketing-accent)] ring-1 ring-[color-mix(in_srgb,var(--marketing-accent)_20%,transparent)]">
                        {step.number}
                      </span>
                      <span className="grid h-10 w-10 place-items-center rounded-xl bg-white text-[var(--marketing-p2)] shadow-[0_8px_24px_-12px_color-mix(in_srgb,var(--marketing-accent)_35%,transparent)] ring-1 ring-[color-mix(in_srgb,var(--marketing-p2)_20%,transparent)]">
                        <Icon className="h-5 w-5" strokeWidth={1.75} />
                      </span>
                    </div>
                    <h3 className="mt-4 text-[clamp(1.5rem,2.5vw,2rem)] font-medium leading-[1.15] tracking-[-0.02em] text-ink-900">
                      {step.title}
                    </h3>
                    <p className="mt-4 text-lg font-normal leading-[1.7] text-ink-600">
                      {step.body}
                    </p>
                    {step.link ? (
                      <Link
                        to={step.link.to}
                        className={cn(
                          "mt-6 inline-flex items-center gap-2 text-[15px] font-medium transition hover:gap-2.5",
                          PALETTE_ACCENT,
                          "hover:text-[var(--marketing-p2)]",
                        )}
                      >
                        {step.link.label}
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    ) : null}
                  </div>
                </div>
              </ScrollReveal>
            </Container>
          </div>
        );
      })}
    </section>
  );
}

function MonthLookSection() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20">
      <Container className="relative z-10">
        <ScrollReveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className={cn("text-sm font-medium", PALETTE_EYEBROW)}>A typical month</p>
            <h2 className="mt-3 max-w-xl text-[clamp(1.75rem,3.2vw,2.5rem)] font-medium leading-[1.15] tracking-[-0.02em] text-ink-900">
              What a month looks like with the{" "}
              <span className={HL}>Agent</span> on the team
            </h2>
          </div>
          <Link to="/demo" className={MARKETING_BTN_OUTLINE}>
            See the agent at work
          </Link>
        </ScrollReveal>

        <div className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-3 sm:gap-6">
          {MONTH_POINTS.map((item, index) => {
            const Icon = item.icon;
            return (
              <ScrollReveal key={item.id} delay={index * 60}>
                <SoftGradientFrame className="h-full">
                  <article className="flex h-full flex-col p-7 sm:p-8">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-[linear-gradient(135deg,color-mix(in_srgb,var(--marketing-p1)_15%,white),color-mix(in_srgb,var(--marketing-p2)_10%,white),color-mix(in_srgb,var(--marketing-p4)_15%,white))] text-[var(--marketing-accent)]">
                      <Icon className="h-6 w-6" strokeWidth={1.75} />
                    </span>
                    <h3 className="mt-5 text-xl font-medium tracking-tight text-ink-900">
                      {item.label}
                    </h3>
                    <p className="mt-4 text-base font-normal leading-[1.7] text-ink-700 sm:text-lg">
                      {item.body}
                    </p>
                  </article>
                </SoftGradientFrame>
              </ScrollReveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

function DashboardSection() {
  return (
    <section className="relative overflow-hidden border-y border-ink-100/70 py-16 sm:py-24">
      <SoftPastelBackdrop side="right" />

      <Container className="relative z-10">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <ScrollReveal className="order-2 lg:order-1">
            <p className={cn("text-sm font-medium", PALETTE_EYEBROW)}>
              On your AI-Harness dashboard
            </p>
            <h2 className="mt-4 text-[clamp(1.75rem,3.2vw,2.5rem)] font-medium leading-[1.15] tracking-[-0.02em] text-ink-900">
              Marketing lives under the <span className={HL}>Outreach</span>{" "}
              tab
            </h2>
            <p className="mt-5 text-lg font-normal leading-[1.7] text-ink-600">
              Across the top, Post Overview cards show Scheduled, Published, Drafts, and Failed at a
              glance: a two-second answer to whether the week is covered. Below them, Engagement
              cards track Total Views, Likes, Comments, and Clicks across your published posts. The
              Content Calendar lays the whole plan on a weekly or monthly timeline, and Run Campaign
              and New Post sit top right for the moments you want to start something yourself.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Post Overview for scheduled, published, drafts, and failed",
                "Engagement cards for views, likes, comments, and clicks",
                "Content Calendar with Run Campaign and New Post ready",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] text-ink-700">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[var(--marketing-accent)]" strokeWidth={2} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal delay={80} className="order-1 lg:order-2">
            <img
              src="/illustrations/custom/marketing-outreach-dashboard.png"
              alt="Café owner reviewing Outreach Post Overview, engagement metrics, and content calendar"
              className="aspect-[4/3] h-auto w-full object-cover object-center"
              loading="lazy"
              decoding="async"
            />
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}

function FaqSection() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <Container>
        <ScrollReveal>
          <h2 className="max-w-4xl text-[clamp(2.25rem,5vw,3.5rem)] font-normal leading-[1.1] tracking-[-0.03em] text-ink-900">
            Frequently Asked Questions
          </h2>
        </ScrollReveal>
        <div className="mt-10 sm:mt-14">
          <FaqAccordion items={FAQS} variant="lines" className="font-inter" />
        </div>
      </Container>
    </section>
  );
}

function SoftCtaSection() {
  return (
    <section className="relative overflow-hidden border-t border-ink-100/70 py-16 sm:py-20">
      <SoftPastelBackdrop side="right" />

      <Container className="relative z-10">
        <SoftGradientFrame>
          <div className="relative overflow-hidden px-8 py-14 sm:px-14 sm:py-16 md:px-20 md:py-20">
            <div
              aria-hidden
              className="pointer-events-none absolute -left-16 top-0 h-56 w-56 rounded-full blur-3xl"
              style={{ background: "color-mix(in srgb, var(--marketing-p1) 6%, transparent)" }}
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -right-10 bottom-0 h-64 w-64 rounded-full blur-3xl"
              style={{ background: "color-mix(in srgb, var(--marketing-p4) 5%, transparent)" }}
            />

            <div className="relative z-10 mx-auto max-w-3xl text-center">
              <p className={cn("text-sm font-medium", PALETTE_EYEBROW)}>Ready when you are</p>
              <h2 className="mt-3 text-[clamp(1.75rem,3.2vw,2.5rem)] font-medium leading-[1.15] tracking-[-0.02em] text-ink-900">
                Your <span className={HL}>Marketing</span>, running every
                day. Your evenings, back.
              </h2>
              <p className="mt-5 text-lg font-normal leading-[1.7] text-ink-600">
                Hire your Marketing Automation Agent. Start free with $10 in credits, no credit card.
              </p>
              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button to="/signup" size="lg" className={MARKETING_BTN_PRIMARY}>
                  Start free
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button to="/contact" variant="secondary" size="lg" className={MARKETING_BTN_SECONDARY}>
                  Talk to us
                </Button>
              </div>
              <p className="mt-5 text-sm font-normal text-ink-500">
                Free to start with $10 in credits · No credit card · Built for local businesses,
                SMBs, and growing brands
              </p>
            </div>
          </div>
        </SoftGradientFrame>
      </Container>
    </section>
  );
}
