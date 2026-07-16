import {
  ArrowRight,
  CheckCircle2,
  MessageSquare,
  type LucideIcon,
} from "lucide-react";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import Button from "../components/Button";
import Seo from "../components/Seo";
import FaqJsonLd from "../components/FaqJsonLd";
import FaqAccordion from "../components/FaqAccordion";
import CTASection from "../components/CTASection";
import ScrollReveal from "../components/ScrollReveal";
import { cn } from "../lib/cn";
import {
  AUTOMATED_REVIEW_AGENT_BASE,
  AutomatedReviewAgentChrome,
} from "../components/automated-reviews/AutomatedReviewAgentSubNav";
import { REPUTATION_AGENT_BASE } from "../components/reputation-sentiment/ReputationAgentSubNav";

const FAQS = [
  {
    q: "How do I get more Google reviews automatically?",
    a: "Connect the agent to your point of sale, bookings, or order tools; it detects each finished visit and sends one honest, well-timed invitation by text or email with a one-tap path to the review box. No staff scripts, no remembering.",
  },
  {
    q: "Is automated review requesting allowed?",
    a: "Yes, when it is done honestly: every customer invited, no filtering by sentiment, no incentives, consistent with platform guidelines. That is the only way this agent operates.",
  },
  {
    q: "Text or email, which works better?",
    a: "Whichever matches how the customer reached you, which is why the agent chooses per person: phone bookings usually earn a text, online orders usually earn an email.",
  },
  {
    q: "What happens after a review comes in?",
    a: "It flows straight into your Reputation & Sentiment Agent: a prompt, on-brand response through Review Management, a data point in sentiment and analytics, and, if it is a great story, a ready-to-approve social post.",
  },
];

type Step = {
  number: string;
  title: string;
  body: string;
  icon?: LucideIcon;
};

const STEPS: Step[] = [
  {
    number: "1",
    title: "The visit ends",
    body: "A table pays the check; an online order is marked picked up or delivered. The agent knows your point of sale, bookings, and connected tools.",
  },
  {
    number: "2",
    title: "The right moment is chosen",
    body: "Not during dessert and not three days later: the window when the experience is still warm and the phone is already in hand.",
  },
  {
    number: "3",
    title: "One invitation goes out",
    body: "A text to the guest who booked by phone, an email to the shopper with a receipt in the inbox. Short, warm, in your voice, one tap to the review box.",
  },
  {
    number: "4",
    title: "The review posts",
    body: "The customer writes while the memory is fresh, which is when reviews are specific, and specific reviews persuade.",
  },
  {
    number: "5",
    title: "The hand-off happens automatically",
    body: "The new review flows to your Reputation & Sentiment Agent: a same-day thank-you through Review Management, a data point in your sentiment themes, and a candidate for review marketing.",
  },
  {
    number: "6",
    title: "The tally shows up where you plan",
    body: "At month end, your reporting shows invitations sent, reviews earned, and rating movement, so the growth is measured, not felt.",
  },
];

function ProductSchema() {
  const json = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        name: "Automated Review Agent",
        description:
          "From the paid check or the picked-up order to a posted five-star review, automatically: honest, well-timed review requests by text and email, with no staff effort involved.",
        brand: { "@type": "Brand", name: "AI-Harness" },
        url: `https://ai-harness.com${AUTOMATED_REVIEW_AGENT_BASE}`,
        category: "Review Request Software",
      },
      {
        "@type": "SoftwareApplication",
        name: "AI-Harness Automated Review Agent",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        url: `https://ai-harness.com${AUTOMATED_REVIEW_AGENT_BASE}`,
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

export default function AutomatedReviewAgent() {
  return (
    <>
      <Seo
        path={AUTOMATED_REVIEW_AGENT_BASE}
        title="Automated Review Agent | Get More Google Reviews"
        description="From the paid check or the picked-up order to a posted five-star review, automatically: honest, well-timed review requests by text and email, with no staff effort involved."
        keywords="get more google reviews, automated review requests, review request software, sms review request, email review request, review invitation timing, restaurant review requests, retail review requests"
        breadcrumbs={[
          { label: "Automated Review Agent", path: AUTOMATED_REVIEW_AGENT_BASE },
        ]}
      />
      <FaqJsonLd faqs={FAQS} />
      <ProductSchema />

      <AutomatedReviewAgentChrome>
        <Hero />
        <ProblemSection />
        <HowItWorksSection />
        <BusinessImpactSection />
        <ReputationSystemSection />
        <DashboardSection />
        <FaqSection />
        <div className="py-16 sm:py-20">
          <CTASection
            title="Every happy customer, invited. Every invitation, on time."
            description="Hire your Automated Review Agent. Start free with $10 in credits, no credit card."
            primaryCta={{ label: "Start free", to: "/signup" }}
            secondaryCta={{ label: "Talk to us", to: "/contact" }}
            footnote="Free to start with $10 in credits · No credit card · Honest asks only, per platform guidelines"
          />
        </div>
      </AutomatedReviewAgentChrome>
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
              Automated Review Agent
            </p>
            <h1 className="mt-4 text-[clamp(2rem,4.5vw,3.35rem)] font-medium leading-[1.08] tracking-[-0.025em] text-ink-900">
              Get more Google reviews without asking a single customer yourself
            </h1>
            <p className="mt-5 text-lg font-normal leading-[1.7] text-ink-600 sm:text-xl">
              Happy customers leave every day without saying a word online. This agent notices each
              one and sends a single, honest, perfectly timed invitation by text or email, one tap
              from the review box. The stream of fresh reviews your visibility runs on, keeps
              flowing while you work.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button to="/signup" size="lg">
                Start free
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="#how-it-works" variant="secondary" size="lg">
                Follow one customer&apos;s journey
              </Button>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-ink-500">
              Free to start with $10 in credits · No credit card · Honest asks only, per platform
              guidelines
            </p>
          </ScrollReveal>

          <ScrollReveal delay={80} className="relative">
            <div className="overflow-hidden rounded-[28px] border border-ink-200 bg-ink-100 shadow-lift ring-1 ring-ink-200/60">
              <div className="flex aspect-[4/3] flex-col justify-between p-6 sm:p-8">
                <div className="flex items-center gap-2 text-sm font-medium text-ink-700">
                  <MessageSquare className="h-4 w-4 text-brand-600" />
                  Invitation flow · Checkout → review
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {["Invites sent", "Reviews earned", "Avg. rating", "Open rate"].map((label) => (
                    <div
                      key={label}
                      className="rounded-2xl border border-ink-200/80 bg-white px-4 py-3 shadow-soft"
                    >
                      <p className="text-xs font-medium tracking-wide text-ink-400 uppercase">
                        {label}
                      </p>
                      <p className="mt-1 text-2xl font-medium tracking-tight text-ink-900">—</p>
                    </div>
                  ))}
                </div>
                <p className="text-xs leading-relaxed text-ink-500">
                  Product shot placeholder · add the invitation-flow screenshot when the capture
                  exists
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
    <section className="border-y border-ink-100 bg-white py-16 sm:py-20">
      <Container>
        <ScrollReveal className="mx-auto max-w-3xl">
          <p className="text-sm font-medium text-ink-500">
            The problem
          </p>
          <h2 className="mt-4 text-[clamp(1.75rem,3.2vw,2.5rem)] font-medium leading-[1.15] tracking-[-0.02em] text-ink-900">
            The math of reviews is unfair by default
          </h2>
          <p className="mt-5 text-lg font-normal leading-[1.75] text-ink-700 sm:text-xl">
            Delighted customers rarely write unless invited, while the disappointed need no prompt.
            Fixing it by hand means a busy team remembering to ask at the register, on the check, at
            the door, and busy teams forget. The result is a public rating that understands the real
            room. This agent exists to make the asking automatic, honest, and constant, because
            fresh reviews are what near-me search and AI recommendations run on.
          </p>
        </ScrollReveal>
      </Container>
    </section>
  );
}

function StepVisual({ step }: { step: Step }) {
  return (
    <div
      aria-label={`Image placeholder for step ${step.number}: ${step.title}`}
      className="aspect-[4/3] overflow-hidden rounded-[28px] border border-dashed border-ink-300 bg-ink-100 ring-1 ring-ink-200/50"
    />
  );
}

function HowItWorksSection() {
  return (
    <section id="how-it-works" className="scroll-mt-28 bg-ink-50 py-16 sm:py-24">
      <Container>
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium text-ink-500">
            How it works
          </p>
          <h2 className="mt-4 text-[clamp(1.75rem,3.2vw,2.75rem)] font-medium leading-[1.12] tracking-[-0.02em] text-ink-900">
            From checkout to posted review
          </h2>
        </ScrollReveal>

        <div className="mt-14 space-y-16 sm:mt-20 sm:space-y-24">
          {STEPS.map((step, index) => {
            const reverse = index % 2 === 1;
            return (
              <ScrollReveal key={step.number} delay={(index % 3) * 40}>
                <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
                  <div className={cn(reverse ? "order-2 lg:order-1" : "order-2 lg:order-2")}>
                    <StepVisual step={step} />
                  </div>
                  <div className={cn(reverse ? "order-1 lg:order-2" : "order-1 lg:order-1")}>
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-ink-100 text-sm font-medium text-ink-600 ring-1 ring-ink-200/80">
                      {step.number}
                    </span>
                    <h3 className="mt-4 text-[clamp(1.5rem,2.5vw,2rem)] font-medium leading-[1.15] tracking-[-0.02em] text-ink-900">
                      {step.title}
                    </h3>
                    <p className="mt-4 text-lg font-normal leading-[1.7] text-ink-600">{step.body}</p>
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

function BusinessImpactSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <ScrollReveal className="mx-auto max-w-3xl">
          <p className="text-sm font-medium text-ink-500">
            What this means
          </p>
          <h2 className="mt-4 text-[clamp(1.75rem,3.2vw,2.5rem)] font-medium leading-[1.15] tracking-[-0.02em] text-ink-900">
            What this means for the business
          </h2>
          <p className="mt-5 text-lg font-normal leading-[1.75] text-ink-700 sm:text-xl">
            The asking never depends on a human remembering again. Your rating starts reflecting the
            room, the shelf, and the service as they actually are, and every new review compounds
            your visibility in the searches and recommendations that decide who finds you next.
          </p>
        </ScrollReveal>
      </Container>
    </section>
  );
}

function ReputationSystemSection() {
  return (
    <section className="border-y border-ink-100 bg-ink-50 py-16 sm:py-20">
      <Container>
        <ScrollReveal className="mx-auto max-w-3xl">
          <p className="text-sm font-medium text-ink-500">
            Part of one reputation system
          </p>
          <h2 className="mt-4 text-[clamp(1.75rem,3.2vw,2.5rem)] font-medium leading-[1.15] tracking-[-0.02em] text-ink-900">
            This agent executes the growth side of your reputation
          </h2>
          <p className="mt-5 text-lg font-normal leading-[1.7] text-ink-700 sm:text-xl">
            Pair it with Review Management for the answering and Review Analytics &amp; Marketing for
            the measuring and the marketing, all under the Reputation &amp; Sentiment Agent.
          </p>
          <Link
            to={`${REPUTATION_AGENT_BASE}/review-generation`}
            className="mt-6 inline-flex items-center gap-2 text-[15px] font-medium text-brand-700 transition hover:gap-2.5 hover:text-brand-800"
          >
            See where it fits: Review Generation inside the reputation hub
            <ArrowRight className="h-4 w-4" />
          </Link>
        </ScrollReveal>
      </Container>
    </section>
  );
}

function DashboardSection() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <ScrollReveal className="order-2 lg:order-1">
            <p className="text-sm font-medium text-ink-500">
              On your AI-Harness dashboard
            </p>
            <h2 className="mt-4 text-[clamp(1.75rem,3.2vw,2.5rem)] font-medium leading-[1.15] tracking-[-0.02em] text-ink-900">
              Invitations, deliveries, and earned reviews, tracked end to end
            </h2>
            <p className="mt-5 text-lg font-normal leading-[1.7] text-ink-600">
              Visible in your workspace, counted in your reporting, and recorded end to end, with
              approvals available if you want to see invitation copy before it ever sends.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Invitations sent by text and email",
                "Reviews earned and rating movement",
                "Approve-first copy review when you want it",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] text-ink-700">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" strokeWidth={2} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-relaxed text-ink-500">
              Build note: Add the invitation-flow screenshot when the capture exists.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={80} className="order-1 lg:order-2">
            <div className="overflow-hidden rounded-[28px] border border-ink-200 bg-ink-100 shadow-lift ring-1 ring-ink-200/60">
              <div className="border-b border-ink-200 bg-white px-5 py-4">
                <p className="text-sm font-medium text-ink-800">Automated reviews</p>
                <p className="mt-1 text-xs text-ink-500">
                  Invitations · Deliveries · Reviews earned
                </p>
              </div>
              <div className="space-y-4 p-5">
                <div className="grid grid-cols-3 gap-3">
                  {["Sent", "Opened", "Posted"].map((label) => (
                    <div key={label} className="rounded-2xl border border-ink-200 bg-white px-3 py-3">
                      <p className="text-[11px] font-medium text-ink-400 uppercase">{label}</p>
                      <p className="mt-1 text-xl font-medium text-ink-900">—</p>
                    </div>
                  ))}
                </div>
                <div className="flex h-40 items-center justify-center rounded-2xl border border-dashed border-ink-300 bg-white text-sm text-ink-500">
                  Invitation-flow screenshot placeholder
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}

function FaqSection() {
  return (
    <section className="border-t border-ink-100 bg-ink-50 py-20 sm:py-28">
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
