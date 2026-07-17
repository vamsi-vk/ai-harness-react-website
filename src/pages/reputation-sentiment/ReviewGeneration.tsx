import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Inbox,
  Mail,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  UserRound,
} from "lucide-react";
import { Link } from "react-router-dom";
import type { ReactNode } from "react";
import Container from "../../components/Container";
import Button from "../../components/Button";
import Seo from "../../components/Seo";
import FaqJsonLd from "../../components/FaqJsonLd";
import FaqAccordion from "../../components/FaqAccordion";
import CTASection from "../../components/CTASection";
import ScrollReveal from "../../components/ScrollReveal";
import AgentFlowStepsSection from "../../components/AgentFlowStepsSection";
import {
  REPUTATION_AGENT_BASE,
  ReputationAgentChrome,
} from "../../components/reputation-sentiment/ReputationAgentSubNav";
import SoftPastelBackdrop from "../../components/marketing-automation/SoftPastelBackdrop";
import { MarketingHeroImage } from "../../components/marketing-automation/MarketingHeroImage";
import { TITLE_HL_BRAND as HL } from "../../components/agent-title-highlight";

const PATH = `${REPUTATION_AGENT_BASE}/review-generation`;

const FAQS = [
  {
    q: "How do I get more reviews for my local business?",
    a: "Invite every happy customer at the right moment, on the channel they answer. Done by hand this fails on consistency; the agent detects each new customer and sends one well-timed invitation automatically, so the stream never depends on a busy human remembering.",
  },
  {
    q: "When is the best time to ask for a review?",
    a: "While the experience is still warm: shortly after the meal ends, or once the purchase is confirmed as delivered and right. The agent times each invitation to that window instead of batching requests days later.",
  },
  {
    q: "Is automated review requesting allowed?",
    a: "Yes, when it is done honestly: every customer invited, no filtering by sentiment, no incentives, in line with the platforms’ guidelines. The agent is built to those rules by default.",
  },
  {
    q: "Which channels does it use to ask?",
    a: "Text and email, chosen per customer based on how they interacted with you. A phone booking usually earns a text; an online order usually earns an email.",
  },
];

const FEATURES: {
  id: string;
  eyebrow: string;
  title: ReactNode;
  body: string;
  icon: typeof UserRound;
  reverse?: boolean;
}[] = [
  {
    id: "customer-detection",
    eyebrow: "Customer Detection",
    title: (
      <>
        It notices new customers as they <span className={HL}>Happen</span>
      </>
    ),
    body: "Through your bookings, orders, point of sale, and connected tools, the agent knows who just finished dinner, picked up an order, or checked out, without anyone keeping a list.",
    icon: UserRound,
  },
  {
    id: "channel-choice",
    eyebrow: "Channel Choice",
    title: (
      <>
        It picks the <span className={HL}>Channel</span> each customer answers
      </>
    ),
    body: "A text for the diner who booked by phone. An email for the online shopper with a receipt in the inbox. One invitation per customer, matched to how they already talk to you, never a blast.",
    icon: Mail,
    reverse: true,
  },
  {
    id: "perfect-timing",
    eyebrow: "Perfect Timing",
    title: (
      <>
        It asks at the moment of the <span className={HL}>Smile</span>
      </>
    ),
    body: "The invitation lands while the experience is still warm: after dessert settles, after the package arrives and fits. One tap takes the customer straight to the review box.",
    icon: Clock3,
  },
  {
    id: "honest-by-design",
    eyebrow: "Honest By Design",
    title: (
      <>
        Every ask follows the <span className={HL}>Rules</span>
      </>
    ),
    body: "Invitations go to every customer, with no gating and no incentives, in line with platform guidelines. The rating you build is one you can stand behind in public.",
    icon: ShieldCheck,
    reverse: true,
  },
];

const FLOW_STEPS: { number: string; title: ReactNode; body: string; railLabel: string }[] = [
  {
    number: "1",
    title: (
      <>
        A customer <span className={HL}>Finishes</span>
      </>
    ),
    railLabel: "Customer finishes",
    body: "Pays the check, picks up the order, or walks out with the bag.",
  },
  {
    number: "2",
    title: (
      <>
        The agent <span className={HL}>Detects</span> the visit
      </>
    ),
    railLabel: "Agent detects the visit",
    body: "Through your connected tools.",
  },
  {
    number: "3",
    title: (
      <>
        It selects <span className={HL}>Text Or Email</span>
      </>
    ),
    railLabel: "Selects text or email",
    body: "Based on how that customer reached you.",
  },
  {
    number: "4",
    title: (
      <>
        The invitation lands <span className={HL}>Warm</span>
      </>
    ),
    railLabel: "Invitation lands warm",
    body: "One tap from the review box.",
  },
  {
    number: "5",
    title: (
      <>
        The new review <span className={HL}>Flows In</span>
      </>
    ),
    railLabel: "Review flows in",
    body: "Straight into Review Management for a same-day thank-you, and into your analytics as fresh proof.",
  },
];

const FLOW_VISUALS = [
  {
    icon: CheckCircle2,
    panelTitle: "Visit complete",
    panelHint: "Checkout · pickup · walk-out",
    chips: ["Paid", "Picked up", "Left happy"],
  },
  {
    icon: UserRound,
    panelTitle: "Visit detected",
    panelHint: "Connected tools",
    chips: ["POS", "Booking", "CRM"],
  },
  {
    icon: Mail,
    panelTitle: "Channel chosen",
    panelHint: "Text or email",
    chips: ["SMS", "Email", "Right tone"],
  },
  {
    icon: Sparkles,
    panelTitle: "Warm invite",
    panelHint: "One tap to review",
    chips: ["Thank you", "Review link", "Same day"],
  },
  {
    icon: Inbox,
    panelTitle: "Review arrives",
    panelHint: "Into management + analytics",
    chips: ["Thank-you queue", "Fresh proof", "Tracked"],
  },
];

const RELATED = [
  {
    label: "Review Management",
    body: "Every review answered in your voice, with escalation built in.",
    to: `${REPUTATION_AGENT_BASE}/review-management`,
  },
  {
    label: "Review Analytics & Marketing",
    body: "Measure the trend and put the proof to work.",
    to: `${REPUTATION_AGENT_BASE}/review-analytics-marketing`,
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
        name: "Review Generation",
        description:
          "AI-Harness Review Generation: the agent notices new customers, picks the channel each one will answer, and times the invitation so fresh reviews keep arriving on their own.",
        brand: { "@type": "Brand", name: "AI-Harness" },
        url: `https://ai-harness.com${PATH}`,
        category: "Review Generation Software",
        isPartOf: {
          "@type": "SoftwareApplication",
          name: "AI-Harness Reputation & Sentiment Agent",
          url: `https://ai-harness.com${REPUTATION_AGENT_BASE}`,
        },
      },
      {
        "@type": "SoftwareApplication",
        name: "AI-Harness Review Generation",
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

export default function ReviewGeneration() {
  return (
    <>
      <Seo
        path={PATH}
        title="AI Review Generation for Local Businesses"
        description="The agent notices new customers, picks the channel each one will answer, and times the invitation to the moment they are happiest, so fresh reviews keep arriving on their own."
        keywords="ai review generation, grow customer reviews, review generation for local businesses, get reviews without asking, review request timing, best channel for review requests, restaurant review growth, retail review growth"
        breadcrumbs={[
          { label: "Reputation & Sentiment Agent", path: REPUTATION_AGENT_BASE },
          { label: "Review Generation", path: PATH },
        ]}
      />
      <FaqJsonLd faqs={FAQS} />
      <ProductSchema />

      <ReputationAgentChrome>
        <Hero />
        <ProblemSection />
        <FeaturesSection />
        <PoweredBySection />
        <AgentFlowStepsSection
          title={
            <>
              From checkout to a <span className={HL}>Same-Day Thank-You</span>
            </>
          }
          steps={FLOW_STEPS}
          visuals={FLOW_VISUALS}
        />
        <RelatedSection />
        <FaqSection />
        <div className="py-16 sm:py-20">
          <CTASection
            title="Fresh reviews, arriving on their own."
            description="Turn on Review Generation inside your Reputation & Sentiment Agent. Start free with $10 in credits."
            primaryCta={{ label: "Start free", to: "/signup" }}
            secondaryCta={{ label: "Talk to us", to: "/contact" }}
            footnote="Free to start with $10 in credits · No credit card · Honest asks only, per platform guidelines"
          />
        </div>
      </ReputationAgentChrome>
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-ink-100/70 pb-16 pt-12 sm:pb-20 sm:pt-16">
      <SoftPastelBackdrop side="left" />

      <Container className="relative z-10">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-16">
          <ScrollReveal className="relative z-10 max-w-xl min-w-0">
            <p className="text-sm font-medium text-ink-500">
              Review Generation
            </p>
            <h1 className="mt-4 text-[clamp(2rem,4.5vw,3.35rem)] font-medium leading-[1.08] tracking-[-0.025em] text-ink-900">
              A steady stream of <span className={HL}>New Reviews</span>, without you asking
            </h1>
            <p className="mt-5 text-lg font-normal leading-[1.7] text-ink-600 sm:text-xl">
              Your happiest customers walk out every day without saying a word online. The agent
              notices each one, chooses the channel they will actually answer, and asks at the
              moment the experience is still warm.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button to="/signup" size="lg">
                Start free
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button to="/demo" variant="secondary" size="lg">
                Watch one review get earned
              </Button>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-ink-500">
              Free to start with $10 in credits · No credit card · Honest asks only, per platform
              guidelines
            </p>
          </ScrollReveal>

          <ScrollReveal delay={80} className="relative min-w-0">
            <MarketingHeroImage
              src="/illustrations/custom/reputation-hero-review-generation.png"
              alt="Restaurant manager sending well-timed review invitations after each visit"
            />
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
            Ratings <span className={HL}>Undersell</span> most good businesses for one simple reason
          </h2>
          <p className="mt-5 text-lg font-normal leading-[1.75] text-ink-700 sm:text-xl">
            Satisfied customers rarely review unless invited, while the annoyed need no invitation.
            Asking by hand depends on a busy human remembering at the register or the door, so it
            almost never happens consistently. Review generation is the discipline of inviting every
            happy customer, every time, the right way, and it is exactly the kind of always-on work
            an agent does better than a person.
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
            Detect, choose channel, time the ask, stay <span className={HL}>Honest</span>
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

function PoweredBySection() {
  return (
    <section className="border-y border-ink-100 bg-ink-50/60 py-16 sm:py-20">
      <Container>
        <ScrollReveal className="mx-auto max-w-3xl">
          <p className="text-sm font-medium text-ink-500">
            Powered by
          </p>
          <h2 className="mt-4 text-[clamp(1.75rem,3.2vw,2.5rem)] font-medium leading-[1.15] tracking-[-0.02em] text-ink-900">
            The <span className={HL}>Automated Review Agent</span> does the sending
          </h2>
          <p className="mt-5 text-lg font-normal leading-[1.7] text-ink-700 sm:text-xl">
            Inside your reputation system, this capability runs on the Automated Review Agent, the
            teammate dedicated to the journey from checkout to posted review.
          </p>
          <Link
            to="/agents/automated-reviews"
            className="mt-6 inline-flex items-center gap-2 text-[15px] font-medium text-brand-700 transition hover:gap-2.5 hover:text-brand-800"
          >
            Meet the Automated Review Agent, the full page
            <ArrowRight className="h-4 w-4" />
          </Link>
        </ScrollReveal>
      </Container>
    </section>
  );
}

function RelatedSection() {
  return (
    <section className="border-t border-ink-100 bg-ink-50 py-16 sm:py-20">
      <Container>
        <ScrollReveal className="max-w-3xl">
          <h2 className="text-[clamp(1.75rem,3.2vw,2.5rem)] font-medium leading-[1.15] tracking-[-0.02em] text-ink-900">
            Do more with your <span className={HL}>Reputation &amp; Sentiment</span> Agent
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
    <section className="bg-white py-20 sm:py-28">
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
