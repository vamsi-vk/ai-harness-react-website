export const HOME_FAQS = [
  {
    q: "What is an AI agent platform?",
    a: "An AI agent platform is software that gives your business a workforce of AI agents, each assigned a real job it plans, does, and reports back on, rather than a single tool you operate. AI-Harness is an AI agent platform for local business, with agents that run your marketing and social, grow and answer your reviews, and get you found across search.",
  },
  {
    q: "What is an AI agent, and what can it do for my business?",
    a: "An AI agent is an AI worker that owns a task from start to finish, so work like running your social, answering reviews, and keeping your listings accurate actually gets done, not just described. You approve what matters and the agent handles the rest.",
  },
  {
    q: "Will AI-Harness help my business get found on ChatGPT and other AI search?",
    a: "Yes. AI assistants and answer engines like ChatGPT recommend local businesses based on accurate, well-structured information across the web, so the same work the agents do to lift you in Google, complete listings, fresh reviews, consistent details, is what makes you more likely to be the business an AI names when a customer asks.",
  },
  {
    q: "How is this different from the marketing tools I already juggle?",
    a: "Most tools hand you one more dashboard to operate. AI-Harness gives you agents that own the outcome and work as one connected AI workforce from a single view of your business, so the work gets done instead of just becoming another login to manage.",
  },
  {
    q: "Will this take my team’s jobs?",
    a: "No. It handles tasks, not relationships, and frees your people for the work where they add the most value.",
  },
  {
    q: "Do I need to be technical?",
    a: "No. If you can answer a few questions about your business, you can run it. Nothing to code or install.",
  },
  {
    q: "How do I stay in control?",
    a: "You choose what runs automatically and what waits for your approval. Every action is logged, and each agent has a spending limit it cannot cross.",
  },
  {
    q: "Will the content sound like my business?",
    a: "Yes. Each agent learns your voice from your own posts and replies, and you can edit or regenerate anything before it goes out.",
  },
  {
    q: "Is my customer data safe?",
    a: "Yes. Your data stays yours, is never sold, and is never used to train models.",
  },
];

export type HomeAgentCard = {
  headline?: string;
  headlinePrefix?: string;
  headlineHighlight?: string;
  headlineSuffix?: string;
  outcome: string;
  name: string;
  seeTo: string;
  live: boolean;
};

export const HOME_AGENT_GROUPS: { title: string; agents: HomeAgentCard[] }[] = [
  {
    title: "Get seen and win customers",
    agents: [
      {
        outcome:
          "Your business gets listed and stays accurate everywhere, so you are the answer customers find on search and when they ask AI.",
        name: "Visibility and Listing",
        seeTo: "/agents/visibility-listing",
        live: true,
      },
      {
        outcome:
          "Your social media, run for you. Plans the month, writes and publishes posts, answers comments and DMs in your voice, and reports what brought in revenue.",
        name: "Marketing Automation AI Agent",
        seeTo: "/agents/marketing-automation",
        live: true,
      },
    ],
  },
  {
    title: "Protect your reputation",
    agents: [
      {
        outcome:
          "Every review answered, even the hard ones. Replies to every review in your voice within minutes, reads the patterns behind the feedback so you fix the real cause, and turns your best reviews into ready-to-post marketing. Trust that keeps building instead of leaking away.",
        name: "Reputation & Sentiment AI Agent",
        seeTo: "/agents/reputation-sentiment",
        live: true,
      },
      {
        outcome:
          "A steady stream of fresh five-star reviews. Invites every happy customer at the right moment, on the channel they answer, so your rating reflects the real room and keeps the strongest signal on who customers choose next working for you.",
        name: "Automated Review AI Agent",
        seeTo: "/agents/automated-reviews",
        live: true,
      },
    ],
  },
  {
    title: "Run the rest of the business",
    agents: [
      {
        outcome: "The calendar fills itself, no-shows drop.",
        name: "Appointment & Booking Agent",
        seeTo: "/ai-agents",
        live: false,
      },
      {
        outcome: "Quotes and proposals out the door same day.",
        name: "Proposal Drafting Agent",
        seeTo: "/platform",
        live: false,
      },
    ],
  },
];

export const HOME_PROFIT_POINTS = [
  {
    title: "More customers, found and won",
    body: "Your agents get you found across Google, Apple, and AI search, and turn that attention into calls, bookings, and visits, so more revenue comes through the door.",
  },
  {
    title: "Higher margins, lower manual cost",
    body: "The busywork that used to eat evenings and headcount now runs on its own, so more of every sale stays as profit.",
  },
  {
    title: "Nothing missed, day or night",
    body: "Reviews answered, listings kept accurate, and your social always on, around the clock, so no opportunity quietly leaks away.",
  },
] as const;

export const HOME_TEAM_DEPARTMENTS = [
  {
    label: "Marketing and social",
    agent: "Marketing Automation AI Agent",
    blurb: "Plans, posts, and engages across every channel in your voice.",
    seeTo: "/agents/marketing-automation",
    icon: "megaphone" as const,
  },
  {
    label: "Reviews",
    agent: "Reputation & Sentiment AI Agent",
    blurb: "Answers every review and surfaces the patterns behind them.",
    seeTo: "/agents/reputation-sentiment",
    icon: "message" as const,
  },
  {
    label: "Review growth",
    agent: "Automated Review AI Agent",
    blurb: "Invites happy customers at the right moment for fresh five-stars.",
    seeTo: "/agents/automated-reviews",
    icon: "chart" as const,
  },
  {
    label: "Visibility",
    agent: "Visibility and Listing AI Agent",
    blurb: "Keeps you found and accurate across maps, search, and AI answers.",
    seeTo: "/agents/visibility-listing",
    icon: "map" as const,
  },
] as const;

export const HOME_WHAT_CHANGES = [
  {
    title: "Marketing & Social",
    agent: "Marketing Automation AI Agent",
    before:
      "Posting slips on busy weeks, the feed goes quiet, and the algorithm moves on to whoever stayed visible.",
    after:
      "An always-on social presence and campaigns that turn attention into customers, with about twenty minutes of approvals.",
    lifts: ["Revenue", "Operations"],
    outcomeLabel: "Reach",
    outcomeValue: "Always on",
    outcomeKind: "spark" as const,
    icon: "megaphone" as const,
  },
  {
    title: "Reviews & Reputation",
    agent: "Reputation & Sentiment AI Agent",
    before:
      "Reviews pile up unanswered and the patterns behind them go unseen, so trust quietly leaks away.",
    after:
      "Every review answered in your voice within minutes, and the recurring themes surfaced so you fix the real cause.",
    lifts: ["Revenue"],
    outcomeLabel: "Trust",
    outcomeValue: "Every review answered",
    outcomeKind: "stars" as const,
    icon: "message" as const,
  },
  {
    title: "Review Growth",
    agent: "Automated Review AI Agent",
    before: "Happy customers leave without a word online, and your rating undersells the real room.",
    after:
      "Every happy customer invited at the right moment, so fresh five-star reviews keep arriving on their own.",
    lifts: ["Revenue"],
    outcomeLabel: "Fresh reviews",
    outcomeValue: "Steady stream",
    outcomeKind: "bars" as const,
    icon: "chart" as const,
  },
  {
    title: "Local Visibility",
    agent: "Visibility and Listing AI Agent",
    before:
      "Listings drift out of date and the customer searching nearby finds the business down the street first.",
    after:
      "Found first and accurate everywhere customers search and ask AI, so more of them walk through your door.",
    lifts: ["Revenue", "Operations"],
    outcomeLabel: "Search",
    outcomeValue: "Found first",
    outcomeKind: "map" as const,
    icon: "map" as const,
  },
  {
    title: "Your Time & Margins",
    agent: "The whole workforce",
    before:
      "You do the busywork at night and on weekends, and keeping up means paying for more hands.",
    after:
      "About twenty minutes of approvals, the work running on its own, and more of every sale kept as profit.",
    lifts: ["Operations", "Margins"],
    outcomeLabel: "Your time",
    outcomeValue: "~20 min / month",
    outcomeKind: "clock" as const,
    icon: "clock" as const,
  },
] as const;

export const HOME_INDUSTRIES = [
  {
    name: "Restaurants",
    body: "Get found by hungry diners searching nearby, keep your social full of tonight’s specials, and turn a great meal into a five-star review before the table is cleared.",
  },
  {
    name: "Retail",
    body: "Show up first when shoppers search, launch new arrivals across every channel, and keep every store detail and review working wherever customers look.",
  },
  {
    name: "Real Estate",
    body: "Get found in local search, keep your feed and profiles active, and let a steady stream of five-star reviews keep working for you between deals.",
  },
  {
    name: "Dental & Medical",
    body: "Be the practice new patients find first, keep your profiles accurate everywhere, and grow the reviews patients rely on when choosing care.",
  },
  {
    name: "Home & Professional Services",
    body: "Get found the moment someone searches, stay visible across every map, and turn finished jobs into the reviews that win the next one.",
  },
  {
    name: "Beauty & Wellness",
    body: "Fill your feed with the work that sells, get found by locals searching nearby, and turn happy regulars into a steady stream of glowing reviews.",
  },
];
