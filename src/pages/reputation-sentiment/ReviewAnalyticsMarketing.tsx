import {
  ArrowRight,
  BarChart3,
  FileText,
  LineChart,
  Megaphone,
  TrendingUp,
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
  REPUTATION_AGENT_BASE,
  ReputationAgentChrome,
} from "../../components/reputation-sentiment/ReputationAgentSubNav";

const PATH = `${REPUTATION_AGENT_BASE}/review-analytics-marketing`;

const FAQS = [
  {
    q: "What is reputation analytics?",
    a: "Reputation analytics is the tracking of rating trends, review volume, response speed, and sentiment themes over time and per location, so reputation can be managed like any other business metric instead of watched like weather.",
  },
  {
    q: "How do I compare my reputation against competitors?",
    a: "The agent benchmarks your rating, review volume, and responsiveness against nearby businesses in your category, the same side-by-side a customer sees when choosing, and reports where you lead and where you trail.",
  },
  {
    q: "Can reviews really be used as marketing?",
    a: "Yes, and they outperform most ads because they are proof rather than promise. The agent turns your strongest reviews into on-brand social posts through the Marketing Automation Agent, ready for your approval.",
  },
  {
    q: "What reports do I get?",
    a: "A monthly, plain-English reputation report per location: rating trend, sentiment themes, competitive position, response performance, and recommended actions.",
  },
];

const FEATURES = [
  {
    id: "trends",
    eyebrow: "Trends, Not Snapshots",
    title: "Your reputation as a moving picture",
    body: "Rating trend, review volume, and response speed tracked over time and per location, so a slow drift gets caught in week two instead of month six.",
    icon: TrendingUp,
  },
  {
    id: "benchmarked",
    eyebrow: "Benchmarked",
    title: "Measured against the street",
    body: "See how your rating, review volume, and responsiveness compare with nearby businesses in your category, the same side-by-side a customer silently runs when choosing between you.",
    icon: BarChart3,
    reverse: true,
  },
  {
    id: "sentiment",
    eyebrow: "Sentiment Themes",
    title: "What to fix, and what to double down on",
    body: "Recurring praise and recurring complaints grouped from real customer language: the dish everyone photographs, the checkout line at noon, the sizing note that keeps appearing. One fixed cause outperforms a hundred polite apologies.",
    icon: LineChart,
  },
  {
    id: "review-marketing",
    eyebrow: "Review Marketing",
    title: "Your best stories, published",
    body: "The agent hands winning reviews to your Marketing Automation Agent as designed, ready-to-approve social posts, so real customers do the persuading on your feed.",
    icon: Megaphone,
    reverse: true,
    link: {
      label: "See the Marketing Automation Agent",
      to: "/agents/marketing-automation",
    },
  },
  {
    id: "reports",
    eyebrow: "Reports",
    title: "A reputation report your whole team reads",
    body: "Monthly, plain-English, per location: what moved, why it moved, and what to do next, in the same voice as the rest of your AI-Harness reporting.",
    icon: FileText,
  },
];

const FLOW_STEPS = [
  {
    number: "1",
    title: "Everything is captured",
    body: "Every review, reply, and rating movement as it happens, per platform and per location.",
  },
  {
    number: "2",
    title: "Themes and benchmarks land",
    body: "Sentiment grouping turns words into themes; benchmarks put your numbers next to the local field.",
  },
  {
    number: "3",
    title: "Standout reviews become posts",
    body: "Drafted into social posts and queued for your approval.",
  },
  {
    number: "4",
    title: "The monthly report arrives",
    body: "The trend, the causes, the comparison, and the next moves.",
  },
];

const RELATED = [
  {
    label: "Review Generation",
    body: "Keep fresh reviews flowing in the first place.",
    to: `${REPUTATION_AGENT_BASE}/review-generation`,
  },
  {
    label: "Review Management",
    body: "Every review answered in your voice.",
    to: `${REPUTATION_AGENT_BASE}/review-management`,
  },
  {
    label: "Reputation & Sentiment overview",
    body: "Back to the full Reputation & Sentiment Agent.",
    to: REPUTATION_AGENT_BASE,
  },
];

function ProductSchema() {
  const json = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        name: "Review Analytics & Marketing",
        description:
          "AI-Harness Review Analytics & Marketing: track rating trends, response speed, and sentiment per location, benchmark against nearby competition, and turn your best reviews into ready-to-post social proof.",
        brand: { "@type": "Brand", name: "AI-Harness" },
        url: `https://ai-harness.com${PATH}`,
        category: "Reputation Analytics Software",
        isPartOf: {
          "@type": "SoftwareApplication",
          name: "AI-Harness Reputation & Sentiment Agent",
          url: `https://ai-harness.com${REPUTATION_AGENT_BASE}`,
        },
      },
      {
        "@type": "SoftwareApplication",
        name: "AI-Harness Review Analytics & Marketing",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        url: `https://ai-harness.com${PATH}`,
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

export default function ReviewAnalyticsMarketing() {
  return (
    <>
      <Seo
        path={PATH}
        title="Reputation Analytics & Review Marketing"
        description="Track rating trends, response speed, and sentiment per location, benchmark against nearby competition, and turn your best reviews into ready-to-post social proof."
        keywords="reputation analytics, review insights, competitor reputation benchmarking, review marketing, share reviews on social media, reputation trends by location, sentiment report, customer proof marketing"
        breadcrumbs={[
          { label: "Reputation & Sentiment Agent", path: REPUTATION_AGENT_BASE },
          { label: "Review Analytics & Marketing", path: PATH },
        ]}
      />
      <FaqJsonLd faqs={FAQS} />
      <ProductSchema />

      <ReputationAgentChrome>
        <Hero />
        <ProblemSection />
        <FeaturesSection />
        <FlowSection />
        <RelatedSection />
        <FaqSection />
        <div className="py-16 sm:py-20">
          <CTASection
            title="Proof, measured and put to work."
            description="Explore Review Analytics & Marketing inside your Reputation & Sentiment Agent. Start free with $10 in credits."
            primaryCta={{ label: "Start free", to: "/signup" }}
            secondaryCta={{ label: "Talk to us", to: "/contact" }}
            footnote="Free to start with $10 in credits · No credit card · Part of the Reputation & Sentiment Agent"
          />
        </div>
      </ReputationAgentChrome>
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink-50 pb-16 pt-12 sm:pb-20 sm:pt-16">

      <Container className="relative">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <ScrollReveal className="max-w-xl">
            <p className="text-sm font-medium text-ink-500">
              Review Analytics & Marketing
            </p>
            <h1 className="mt-4 text-[clamp(2rem,4.5vw,3.35rem)] font-medium leading-[1.08] tracking-[-0.025em] text-ink-900">
              Measure your reputation. Then make it sell.
            </h1>
            <p className="mt-5 text-lg font-normal leading-[1.7] text-ink-600 sm:text-xl">
              A rating without context is just a number. The agent turns your reviews into a managed
              business metric, and turns the best of them into the most persuasive marketing you own.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button to="/signup" size="lg">
                Start free
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button to="/demo" variant="secondary" size="lg">
                See a reputation report
              </Button>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-ink-500">
              Free to start with $10 in credits · No credit card · Part of the Reputation & Sentiment
              Agent
            </p>
          </ScrollReveal>

          <ScrollReveal delay={80}>
            <div className="overflow-hidden rounded-[28px] border border-ink-200 bg-ink-100 shadow-lift ring-1 ring-ink-200/60">
              <div className="flex aspect-[4/3] flex-col justify-between p-6 sm:p-8">
                <div className="flex items-center gap-2 text-sm font-medium text-ink-700">
                  <LineChart className="h-4 w-4 text-brand-600" />
                  Reputation report · Monthly
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {["Rating trend", "Volume", "Response speed", "vs Nearby"].map((label) => (
                    <div
                      key={label}
                      className="rounded-2xl border border-ink-200/80 bg-white px-4 py-3 shadow-soft"
                    >
                      <p className="text-xs font-medium tracking-wide text-ink-400 uppercase">
                        {label}
                      </p>
                      <p className="mt-1 text-xl font-medium tracking-tight text-ink-900">—</p>
                    </div>
                  ))}
                </div>
                <p className="text-xs leading-relaxed text-ink-500">
                  Product shot placeholder · re-capture report + review-to-post flow
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
            Most owners know their star rating and nothing underneath it
          </h2>
          <p className="mt-5 text-lg font-normal leading-[1.75] text-ink-700 sm:text-xl">
            Which way it is trending, which location is drifting, how you compare to the competitors
            a customer sees right beside you, and which stories deserve an audience: those answers
            exist inside your reviews, but nobody has time to mine them. This page shows how the
            agent runs your reputation like a metric and your proof like a channel.
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
            Trends, benchmarks, themes, marketing, and reports
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
                    <p className="mt-4 text-lg font-normal leading-[1.7] text-ink-600">{feature.body}</p>
                    {feature.link ? (
                      <Link
                        to={feature.link.to}
                        className="mt-5 inline-flex items-center gap-2 text-[15px] font-medium text-brand-700 transition hover:gap-2.5 hover:text-brand-800"
                      >
                        {feature.link.label}
                        <ArrowRight className="h-4 w-4" />
                      </Link>
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
          <p className="text-sm font-medium text-ink-500">The flow</p>
          <h2 className="mt-4 text-[clamp(1.75rem,3.2vw,2.5rem)] font-medium leading-[1.15] tracking-[-0.02em] text-ink-900">
            From live capture to next month’s moves
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
                    <h3 className="text-xl font-medium tracking-tight text-ink-900">{step.title}</h3>
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
            Do more with your Reputation & Sentiment Agent
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
