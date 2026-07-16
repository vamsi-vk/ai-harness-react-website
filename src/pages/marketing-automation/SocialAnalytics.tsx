import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  FileText,
  LayoutDashboard,
  LineChart,
  RefreshCw,
  Share2,
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

const PATH = `${MARKETING_AGENT_BASE}/social-analytics`;

const FAQS = [
  {
    q: "What should a local business measure on social media?",
    a: "Start with reach and engagement, views, likes, comments, and clicks, to see what earns attention, then tie those to actions that make money: bookings, calls, direction requests, and checkout clicks. The agent tracks both layers and connects them in the monthly report.",
  },
  {
    q: "How do I know if social media is driving sales?",
    a: "By connecting activity to outcomes. The report ties specific posts and campaigns to the bookings, walk-ins, and sales that followed, so you see which content earned revenue instead of guessing from likes.",
  },
  {
    q: "What is in the monthly report?",
    a: "A plain-English summary: top posts and why they worked, campaigns scored against their goals, engagement trends, and a recommended plan for next month, already drafted for your approval.",
  },
  {
    q: "Can I see results per campaign?",
    a: "Yes. Every Run Campaign plan gets its own scorecard against the goal you set, so seasonal pushes, product drops, and weekly themes are judged separately.",
  },
];

const FEATURES = [
  {
    id: "one-dashboard",
    eyebrow: "One Dashboard",
    title: "The whole picture at a glance",
    body: "Post Overview shows Scheduled, Published, Drafts, and Failed; Engagement shows Total Views, Likes, Comments, and Clicks across published posts, with movement against the previous week. Two seconds tells you whether the machine is running.",
    caption: "Post Overview and Engagement on the Outreach dashboard.",
    buildNote:
      "On the live page, animate the counters and link each card to its filtered view. Re-capture on a branded demo workspace before publish.",
    icon: LayoutDashboard,
    dashboard: true,
  },
  {
    id: "metrics-to-meaning",
    eyebrow: "From Metrics to Meaning",
    title: "A report written in plain English",
    body: "At month end the agent explains which posts drove bookings, calls, walk-ins, and sales, which flopped and probably why, and which themes deserve a bigger slot next month. Read it in five minutes; act on it in one.",
    icon: FileText,
    reverse: true,
  },
  {
    id: "campaign-scorecards",
    eyebrow: "Campaign Scorecards",
    title: "Every campaign gets its own readout",
    body: "Each Run Campaign arc reports against the goal it was built for, with reach, engagement, and clicks per post, so a weekend-offer push and a product-drop launch are judged on their own terms.",
    icon: BarChart3,
  },
  {
    id: "loop-closes",
    eyebrow: "The Loop Closes",
    title: "Next month drafts itself",
    body: "Findings become the next plan automatically: winning themes rebooked, weak slots reworked, and the drafted calendar waiting for your twenty-minute approval. Reporting that ends in action, not in a spreadsheet.",
    icon: RefreshCw,
    reverse: true,
  },
  {
    id: "numbers-that-travel",
    eyebrow: "Numbers That Travel",
    title: "Proof you can show anyone",
    body: "Clean summaries you can hand a partner, a bookkeeper, or your own team, so marketing spend gets defended with evidence instead of feelings.",
    icon: Share2,
  },
];

const FLOW_STEPS = [
  {
    number: "1",
    title: "Everything is tracked",
    body: "Every post, comment, and click from the moment it happens.",
  },
  {
    number: "2",
    title: "The dashboard keeps score",
    body: "In real time, across every connected channel.",
  },
  {
    number: "3",
    title: "The agent writes the report",
    body: "At month end: what worked, what did not, and what changes.",
  },
  {
    number: "4",
    title: "Next month arrives pre-drafted",
    body: "Built from those findings, waiting for your approval.",
  },
];

const RELATED = [
  {
    label: "Post Creation & Publishing",
    body: "Where the winning content gets made.",
    to: `${MARKETING_AGENT_BASE}/post-creation-publishing`,
  },
  {
    label: "Social Engagement",
    body: "The conversations behind the click numbers.",
    to: `${MARKETING_AGENT_BASE}/social-engagement`,
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
        name: "Social Analytics & Reporting",
        description:
          "AI-Harness Social Analytics & Reporting: one dashboard for Scheduled, Published, Views, Likes, Comments, and Clicks, and a plain-English monthly report that ties your posts to bookings, walk-ins, and sales.",
        brand: { "@type": "Brand", name: "AI-Harness" },
        url: `https://ai-harness.com${PATH}`,
        category: "Social Media Analytics Software",
        isPartOf: {
          "@type": "SoftwareApplication",
          name: "AI-Harness Marketing Automation Agent",
          url: `https://ai-harness.com${MARKETING_AGENT_BASE}`,
        },
      },
      {
        "@type": "SoftwareApplication",
        name: "AI-Harness Social Analytics & Reporting",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        url: `https://ai-harness.com${PATH}`,
        featureList: [
          "Social media analytics dashboard",
          "Monthly plain-English reporting",
          "Campaign scorecards",
          "Social media ROI for local businesses",
          "Next-month plan from findings",
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
  if (feature.dashboard) {
    return (
      <div className="overflow-hidden rounded-[28px] border border-ink-200/80 bg-white shadow-lift">
        <div className="border-b border-ink-200 bg-ink-50/80 px-5 py-4">
          <p className="text-sm font-medium text-ink-800">Outreach</p>
          <p className="mt-1 text-xs text-ink-500">Post Overview · Engagement</p>
        </div>
        <div className="space-y-4 p-5">
          <div>
            <p className="mb-2 text-[11px] font-medium tracking-wide text-ink-400 uppercase">
              Post Overview
            </p>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              {["Scheduled", "Published", "Drafts", "Failed"].map((label) => (
                <div
                  key={label}
                  className="rounded-2xl border border-ink-200/80 bg-white px-3 py-3"
                >
                  <p className="text-[10px] font-medium text-ink-400 uppercase">{label}</p>
                  <p className="mt-1 text-lg font-medium text-ink-900">-</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="mb-2 text-[11px] font-medium tracking-wide text-ink-400 uppercase">
              Engagement
            </p>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              {["Views", "Likes", "Comments", "Clicks"].map((label) => (
                <div
                  key={label}
                  className="rounded-2xl border border-ink-200/80 bg-white px-3 py-3"
                >
                  <p className="text-[10px] font-medium text-ink-400 uppercase">{label}</p>
                  <p className="mt-1 text-lg font-medium text-ink-900">-</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        {(feature.caption || feature.buildNote) && (
          <div className="border-t border-ink-100 px-5 py-4 text-xs leading-relaxed text-ink-500">
            {feature.caption ? <p>{feature.caption}</p> : null}
            {feature.buildNote ? <p className="mt-1.5">{feature.buildNote}</p> : null}
          </div>
        )}
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

export default function SocialAnalytics() {
  return (
    <>
      <Seo
        path={PATH}
        title="Social Media Analytics & Reporting for SMBs"
        description="One dashboard for Scheduled, Published, Views, Likes, Comments, and Clicks, and a plain-English monthly report that ties your posts to bookings, walk-ins, and sales."
        keywords="social media analytics dashboard, social media reporting software, measure social media performance, social media roi for local businesses, restaurant social analytics, retail campaign reporting, monthly marketing report"
        breadcrumbs={[
          { label: "Marketing Automation Agent", path: MARKETING_AGENT_BASE },
          { label: "Social Analytics & Reporting", path: PATH },
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
            title="Marketing that reports to you."
            description="Explore Social Analytics & Reporting inside your Marketing Automation Agent. Start free with $10 in credits."
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
              Social Analytics & Reporting
            </p>
            <h1 className="mt-4 text-[clamp(2rem,4.5vw,3.35rem)] font-medium leading-[1.08] tracking-[-0.025em] text-ink-900">
              Know what your marketing did for revenue, not just for likes
            </h1>
            <p className="mt-5 text-lg font-normal leading-[1.7] text-ink-600 sm:text-xl">
              Numbers are easy to collect and hard to use. Your agent turns views, likes, comments,
              and clicks into a plain-English answer to the only question that matters: what should
              we do more of next month.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button to="/signup" size="lg">
                Start free
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button to="/demo" variant="secondary" size="lg">
                See a monthly report
              </Button>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-ink-500">
              Free to start with $10 in credits · No credit card · Part of the Marketing Automation
              Agent
            </p>
          </ScrollReveal>

          <ScrollReveal delay={80} className="relative">
            <div className="overflow-hidden rounded-[28px] border border-ink-200 bg-ink-100 shadow-lift ring-1 ring-ink-200/60">
              <div className="flex aspect-[4/3] flex-col justify-between p-6 sm:p-8">
                <div className="flex items-center gap-2 text-sm font-medium text-ink-700">
                  <LineChart className="h-4 w-4 text-brand-600" />
                  Monthly report · Summary
                </div>
                <div className="space-y-3">
                  {[
                    "Top posts that drove bookings",
                    "Campaigns scored against goals",
                    "Next month plan, already drafted",
                  ].map((line) => (
                    <div
                      key={line}
                      className="flex items-start gap-3 rounded-2xl border border-ink-200/80 bg-white px-4 py-3 shadow-soft"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                      <p className="text-[15px] text-ink-700">{line}</p>
                    </div>
                  ))}
                </div>
                <p className="text-xs leading-relaxed text-ink-500">
                  Product shot placeholder · re-capture report view on a branded demo
                </p>
              </div>
            </div>
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
            Most local businesses market blind
          </h2>
          <p className="mt-5 text-lg font-normal leading-[1.75] text-ink-700 sm:text-xl">
            The platforms hand back metrics, but nobody has time to stitch five analytics tabs into
            a decision, so posting stays a habit instead of a strategy. Measurement is how marketing
            earns its budget. This page shows how the agent does the measuring, the explaining, and
            the next-month planning for you.
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
            From live dashboard to month-end decisions that draft next month’s plan
          </h2>
        </ScrollReveal>

        <div className="mt-14 space-y-16 sm:mt-20 sm:space-y-24">
          {FEATURES.map((feature, index) => {
            const Icon = feature.icon;
            const reverse = Boolean(feature.reverse);
            return (
              <ScrollReveal key={feature.id} delay={(index % 3) * 40}>
                <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
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
            Tracked live, explained at month end, drafted for next month
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
          <FaqAccordion items={FAQS} variant="lines" className="font-inter" />
        </div>
      </Container>
    </section>
  );
}
