import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Megaphone,
  PenLine,
  ShieldCheck,
  Sparkles,
  Wand2,
} from "lucide-react";
import { Link } from "react-router-dom";
import Container from "../../components/Container";
import Button from "../../components/Button";
import Seo from "../../components/Seo";
import FaqJsonLd from "../../components/FaqJsonLd";
import FaqAccordion from "../../components/FaqAccordion";
import CTASection from "../../components/CTASection";
import ScrollReveal from "../../components/ScrollReveal";
import {
  MARKETING_AGENT_BASE,
  MarketingAgentChrome,
} from "../../components/marketing-automation/MarketingAgentSubNav";

const PATH = `${MARKETING_AGENT_BASE}/post-creation-publishing`;

const FAQS = [
  {
    q: "Can AI create social media posts for my business?",
    a: "Yes. Describe the offer in one line and AI Generate writes a complete caption in your brand voice, with a live preview of exactly how the post will look. You approve, edit, or regenerate before anything publishes.",
  },
  {
    q: "Can I publish to all my social platforms from one place?",
    a: "Yes. Connect Facebook, Instagram, LinkedIn, X, TikTok, and YouTube once, then create, schedule, and publish to any of them from a single composer and one shared calendar.",
  },
  {
    q: "What is an AI content calendar?",
    a: "An AI content calendar is a posting schedule the agent plans and fills for you: themed posts and campaigns drafted in advance, timed to when your customers decide, and visible in Week or Month view so gaps never sneak up on you.",
  },
  {
    q: "Can it make Reels and Stories too?",
    a: "Yes. The composer switches between Post, Reel, and Story formats, and the live preview updates so you see each format the way your audience will.",
  },
];

const FEATURES = [
  {
    id: "create-post",
    eyebrow: "Create Post",
    title: "One screen from idea to live post",
    body: "Choose your accounts, write your caption or tap AI Generate, and watch a live preview render exactly what customers will see on their feed. Switch between Post, Reel, and Story in the same composer, and pull images, video, or GIFs from your media library. A restaurant can turn a weekend offer into a finished, on-brand post before the coffee cools.",
    caption:
      "Create Post: Accounts, captions, AI Generate, live preview, and publish controls on one screen.",
    buildNote:
      "Pair this shot with a short screen recording on the live page. Re-capture on a branded demo workspace; the current capture shows a test account.",
    icon: PenLine,
    placeholder: ["Accounts", "Caption", "Live preview", "Publish"],
  },
  {
    id: "ai-generate",
    eyebrow: "AI Generate",
    title: "Your voice, written on demand",
    body: "One line about the offer becomes a complete caption in your brand voice. Regenerate until it lands or edit any word before it goes out. The agent writes to sell the experience, the plate, the fit, the Saturday morning line at the door, not just the discount.",
    icon: Wand2,
    reverse: true,
  },
  {
    id: "best-time",
    eyebrow: "Best Time to Post",
    title: "Timing chosen for you",
    body: "The composer suggests the next high-impact slot based on when your audience actually decides: lunch scrollers for restaurants, weekend browsers for retail. Save Draft to keep polishing, Schedule to lock the slot, or Publish Now when the moment is now.",
    icon: Clock3,
  },
  {
    id: "run-campaign",
    eyebrow: "Run Campaign",
    title: "A themed series in one pass",
    body: "Pick a theme like Weekend specials and offers, Fresh daily deals, New arrivals this week, Customer love and reviews, or Festival and seasonal promos. Set the goal, the number of posts, and the days. Generate Campaign returns a named plan with every post drafted and ready to schedule: a full retail launch arc or a week of dinner-service pushes in under a minute.",
    caption:
      "Run Campaign: theme, goal, post count, and days go in; a scheduled multi-post plan comes out.",
    buildNote:
      "On the live page, show the generated campaign card expanding into its scheduled posts.",
    icon: Megaphone,
    reverse: true,
    themes: [
      "Weekend specials and offers",
      "Fresh daily deals",
      "New arrivals this week",
      "Customer love and reviews",
      "Festival and seasonal promos",
    ],
  },
  {
    id: "content-calendar",
    eyebrow: "Content Calendar",
    title: "The month, visible and honest",
    body: "Week and Month views lay every scheduled and published post on one timeline, so a gap is visible before it becomes silence. The Post Overview cards above show Scheduled, Published, Drafts, and Failed immediately.",
    icon: CalendarDays,
  },
  {
    id: "approvals",
    eyebrow: "Approvals",
    title: "You decide how much runs on its own",
    body: "Keep every generated post waiting for your tap or let trusted formats publish on schedule. Either way, the calendar shows exactly what went out, when, and where.",
    icon: ShieldCheck,
    reverse: true,
  },
];

const FLOW_STEPS = [
  {
    number: "1",
    title: "Connect once",
    body: "Link your channels in the Outreach tab; the agent learns your voice from what you have already published.",
  },
  {
    number: "2",
    title: "Say what you want",
    body: "One line, a set of photos from the stockroom, or just a theme chip.",
  },
  {
    number: "3",
    title: "Review the drafts",
    body: "Captions, creative, and suggested times land ready for your edits or your approval.",
  },
  {
    number: "4",
    title: "Schedule or publish",
    body: "Best Time to Post fills the calendar; Publish Now handles the urgent ones.",
  },
  {
    number: "5",
    title: "Watch the calendar stay full",
    body: "Campaigns and recurring themes keep next week drafted before you ask for it.",
  },
];

const RELATED = [
  {
    label: "Social Engagement",
    body: "Every comment and DM answered in your voice, around the clock.",
    to: `${MARKETING_AGENT_BASE}/social-engagement`,
  },
  {
    label: "Social Analytics & Reporting",
    body: "See which posts drove bookings, walk-ins, and sales.",
    to: `${MARKETING_AGENT_BASE}/social-analytics`,
  },
  {
    label: "Marketing Automation Agent overview",
    body: "Back to the full Marketing Automation Agent.",
    to: MARKETING_AGENT_BASE,
  },
];

function ProductSchema() {
  const json = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        name: "Post Creation & Publishing",
        description:
          "AI-Harness Post Creation & Publishing: create posts in one screen, generate full campaigns in one click, and publish to Facebook, Instagram, LinkedIn, X, TikTok, and YouTube on a calendar that fills itself.",
        brand: { "@type": "Brand", name: "AI-Harness" },
        url: `https://ai-harness.com${PATH}`,
        category: "Social Media Publishing Software",
        isPartOf: {
          "@type": "SoftwareApplication",
          name: "AI-Harness Marketing Automation Agent",
          url: `https://ai-harness.com${MARKETING_AGENT_BASE}`,
        },
      },
      {
        "@type": "SoftwareApplication",
        name: "AI-Harness Post Creation & Publishing",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        url: `https://ai-harness.com${PATH}`,
        featureList: [
          "AI social media post generator",
          "Multi-platform publishing",
          "AI content calendar",
          "Campaign generator",
          "Best time to post",
        ],
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

function FeatureVisual({
  feature,
}: {
  feature: (typeof FEATURES)[number];
}) {
  if (feature.themes) {
    return (
      <div className="overflow-hidden rounded-[28px] border border-ink-200/80 bg-white shadow-lift">
        <div className="border-b border-ink-200 bg-ink-50/80 px-5 py-4">
          <p className="text-sm font-medium text-ink-800">Run Campaign</p>
          <p className="mt-1 text-xs text-ink-500">Theme · Goal · Posts · Days</p>
        </div>
        <div className="space-y-2 p-5">
          {feature.themes.map((theme) => (
            <div
              key={theme}
              className="rounded-2xl border border-ink-200/80 bg-white px-4 py-3 text-[15px] text-ink-700"
            >
              {theme}
            </div>
          ))}
        </div>
        {feature.caption || feature.buildNote ? (
          <div className="border-t border-ink-100 px-5 py-4 text-xs leading-relaxed text-ink-500">
            {feature.caption ? <p>{feature.caption}</p> : null}
            {feature.buildNote ? <p className="mt-1.5">{feature.buildNote}</p> : null}
          </div>
        ) : null}
      </div>
    );
  }

  if (feature.placeholder) {
    return (
      <div className="overflow-hidden rounded-[28px] border border-ink-200 bg-ink-100 shadow-lift ring-1 ring-ink-200/60">
        <div className="flex aspect-[4/3] flex-col justify-between p-6 sm:p-8">
          <div className="flex items-center gap-2 text-sm font-medium text-ink-700">
            <Sparkles className="h-4 w-4 text-brand-600" />
            Create Post · Composer
          </div>
          <div className="grid grid-cols-2 gap-3">
            {feature.placeholder.map((label) => (
              <div
                key={label}
                className="rounded-2xl border border-ink-200/80 bg-white px-4 py-3 shadow-soft"
              >
                <p className="text-xs font-medium tracking-wide text-ink-400 uppercase">{label}</p>
                <p className="mt-1 text-xl font-medium tracking-tight text-ink-900">—</p>
              </div>
            ))}
          </div>
          <div className="text-xs leading-relaxed text-ink-500">
            {feature.caption ? <p>{feature.caption}</p> : null}
            {feature.buildNote ? <p className="mt-1.5">{feature.buildNote}</p> : null}
          </div>
        </div>
      </div>
    );
  }

  const Icon = feature.icon;
  return (
    <div className="overflow-hidden rounded-[28px] border border-ink-200/80 bg-ink-50 shadow-soft">
      <div className="flex aspect-[4/3] flex-col items-center justify-center gap-4 p-8 text-center">
        <span className="grid h-14 w-14 place-items-center rounded-2xl bg-white text-ink-600 shadow-soft ring-1 ring-ink-200/80">
          <Icon className="h-6 w-6" strokeWidth={1.75} />
        </span>
        <p className="max-w-xs text-sm leading-relaxed text-ink-500">
          Product shot placeholder · {feature.eyebrow}
        </p>
      </div>
    </div>
  );
}

export default function PostCreationPublishing() {
  return (
    <>
      <Seo
        path={PATH}
        title="AI Post Creation & Publishing for Local Businesses"
        description="Create posts in one screen, generate full campaigns in one click, and publish to Facebook, Instagram, LinkedIn, X, TikTok, and YouTube on a calendar that fills itself."
        keywords="ai social media post generator, social media publishing software, ai content calendar, schedule social media posts, social media campaign generator, create posts with ai, restaurant social media posts, retail product launch posts"
        breadcrumbs={[
          { label: "AI Agents", path: "/ai-agents" },
          { label: "Marketing Automation Agent", path: MARKETING_AGENT_BASE },
          { label: "Post Creation & Publishing", path: PATH },
        ]}
      />
      <FaqJsonLd faqs={FAQS} />
      <ProductSchema />

      <MarketingAgentChrome>
        <Hero />
        <ProblemSection />
        <FeaturesSection />
        <FlowSection />
        <RelatedSection />
        <FaqSection />
        <div className="py-16 sm:py-20">
          <CTASection
            title="A calendar that fills itself. Posts that sound like you."
            description="Explore Post Creation & Publishing inside your Marketing Automation Agent. Start free with $10 in credits."
            primaryCta={{ label: "Start free", to: "/signup" }}
            secondaryCta={{ label: "Talk to us", to: "/contact" }}
            footnote="Free to start with $10 in credits · No credit card · Part of the Marketing Automation Agent"
          />
        </div>
      </MarketingAgentChrome>
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink-50 pb-16 pt-12 sm:pb-20 sm:pt-16">

      <Container className="relative">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-16">
          <ScrollReveal className="max-w-xl">
            <p className="text-sm font-medium text-ink-500">
              Post Creation & Publishing
            </p>
            <h1 className="mt-4 text-[clamp(2rem,4.5vw,3.35rem)] font-medium leading-[1.08] tracking-[-0.025em] text-ink-900">
              From one idea to a month of published posts
            </h1>
            <p className="mt-5 text-lg font-normal leading-[1.7] text-ink-600 sm:text-xl">
              Type an idea or tap AI Generate. Preview the post exactly as customers will see it.
              Publish now, schedule it for the best time, or turn one theme into a whole campaign.
              This is where your marketing gets done.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button to="/signup" size="lg">
                Start free
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button to="/demo" variant="secondary" size="lg">
                Watch a post get made
              </Button>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-ink-500">
              Free to start with $10 in credits · No credit card · Part of the Marketing Automation
              Agent
            </p>
          </ScrollReveal>

          <ScrollReveal delay={80} className="relative">

            <FeatureVisual feature={FEATURES[0]} />
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}

function ProblemSection() {
  return (
    <section className="border-y border-ink-100 bg-ink-50/60 py-16 sm:py-20">
      <Container>
        <ScrollReveal className="mx-auto max-w-3xl">
          <p className="text-sm font-medium text-ink-500">
            The problem
          </p>
          <h2 className="mt-4 text-[clamp(1.75rem,3.2vw,2.5rem)] font-medium leading-[1.15] tracking-[-0.02em] text-ink-900">
            Content is the tax every local business pays attention, and it is due every day
          </h2>
          <p className="mt-5 text-lg font-normal leading-[1.75] text-ink-700 sm:text-xl">
            Writing captions, resizing photos, remembering five logins, and guessing the right
            posting time turns one post into a forty-minute chore, so in most weeks it simply does
            not happen. This page shows how the agent removes the chore and keeps the standard.
          </p>
        </ScrollReveal>
      </Container>
    </section>
  );
}

function FeaturesSection() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <Container>
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium text-ink-500">
            What this page shows
          </p>
          <h2 className="mt-4 text-[clamp(1.75rem,3.2vw,2.75rem)] font-medium leading-[1.12] tracking-[-0.02em] text-ink-900">
            Everything from a single idea to a full month on the calendar
          </h2>
        </ScrollReveal>

        <div className="mt-14 space-y-16 sm:mt-20 sm:space-y-24">
          {FEATURES.map((feature, index) => {
            const Icon = feature.icon;
            const reverse = Boolean(feature.reverse);
            return (
              <ScrollReveal key={feature.id} delay={(index % 3) * 40}>
                <div
                  className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-14 ${
                    reverse ? "" : ""
                  }`}
                >
                  <div className={reverse ? "order-2 lg:order-1" : "order-2 lg:order-2"}>
                    <FeatureVisual feature={feature} />
                  </div>
                  <div className={reverse ? "order-1 lg:order-2" : "order-1 lg:order-1"}>
                    <div className="flex items-center gap-3">
                      <span className="grid h-10 w-10 place-items-center rounded-xl bg-ink-100 text-ink-600 ring-1 ring-ink-200/80">
                        <Icon className="h-5 w-5" strokeWidth={1.75} />
                      </span>
                      <p className="text-sm font-medium text-ink-500">
                        {feature.eyebrow}
                      </p>
                    </div>
                    <h3 className="mt-4 text-[clamp(1.5rem,2.5vw,2rem)] font-medium leading-[1.15] tracking-[-0.02em] text-ink-900">
                      {feature.title}
                    </h3>
                    <p className="mt-4 text-lg font-normal leading-[1.7] text-ink-600">
                      {feature.body}
                    </p>
                    {feature.id === "create-post" || feature.id === "run-campaign" ? (
                      <ul className="mt-6 space-y-3">
                        {(feature.id === "create-post"
                          ? [
                              "Choose accounts and formats in one composer",
                              "AI Generate or write your own caption",
                              "Live preview before publish or schedule",
                            ]
                          : [
                              "Pick a theme and set the goal",
                              "Choose post count and days",
                              "Get a named plan ready to schedule",
                            ]
                        ).map((item) => (
                          <li key={item} className="flex items-start gap-3 text-[15px] text-ink-700">
                            <CheckCircle2
                              className="mt-0.5 h-5 w-5 shrink-0 text-brand-600"
                              strokeWidth={2}
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

function FlowSection() {
  return (
    <section className="border-y border-ink-100 bg-ink-50 py-16 sm:py-20">
      <Container>
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium text-ink-500">
            The flow
          </p>
          <h2 className="mt-4 text-[clamp(1.75rem,3.2vw,2.5rem)] font-medium leading-[1.15] tracking-[-0.02em] text-ink-900">
            Step by step, from connect to a calendar that stays full
          </h2>
        </ScrollReveal>

        <div className="mx-auto mt-12 max-w-4xl space-y-4 sm:mt-14">
          {FLOW_STEPS.map((step, index) => (
            <ScrollReveal key={step.number} delay={index * 40}>
              <article className="rounded-3xl border border-ink-200/90 bg-white px-5 py-6 sm:px-8 sm:py-7">
                <div className="flex gap-4 sm:gap-5">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-ink-100 text-sm font-medium text-ink-600 ring-1 ring-ink-200/80">
                    {step.number}
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-xl font-medium tracking-tight text-ink-900 sm:text-[1.35rem]">
                      {step.title}
                    </h3>
                    <p className="mt-2.5 text-base font-normal leading-[1.7] text-ink-600 sm:text-lg">
                      {step.body}
                    </p>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

function RelatedSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <ScrollReveal className="max-w-3xl">
          <h2 className="text-[clamp(1.75rem,3.2vw,2.5rem)] font-medium leading-[1.15] tracking-[-0.02em] text-ink-900">
            Do more with your Marketing Automation Agent
          </h2>
        </ScrollReveal>
        <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-3">
          {RELATED.map((item, index) => (
            <ScrollReveal key={item.to} delay={index * 50}>
              <Link
                to={item.to}
                className="group flex h-full flex-col rounded-3xl border border-ink-200/90 bg-white p-6 transition hover:border-brand-200 hover:shadow-soft"
              >
                <p className="text-lg font-medium text-ink-900 group-hover:text-brand-700">
                  {item.label}
                </p>
                <p className="mt-2 flex-1 text-[15px] leading-relaxed text-ink-600">{item.body}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-[15px] font-medium text-brand-700 transition group-hover:gap-2.5">
                  Explore
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

function FaqSection() {
  return (
    <section className="border-t border-ink-100 bg-white py-20 sm:py-28">
      <Container>
        <ScrollReveal>
          <h2 className="max-w-4xl text-[clamp(2.25rem,5vw,3.5rem)] font-normal leading-[1.1] tracking-[-0.03em] text-ink-900">
            Frequently Asked Questions
          </h2>
        </ScrollReveal>
        <div className="mt-10 sm:mt-14">
          <FaqAccordion items={FAQS} variant="lines" className="font-poppins" />
        </div>
      </Container>
    </section>
  );
}
