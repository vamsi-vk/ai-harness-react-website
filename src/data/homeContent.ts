export const HOME_FAQS = [
  {
    q: "What is an AI agent, and how is it different from a chatbot?",
    a: "A chatbot answers a question; an AI agent does the job. Your agents plan, act, and report back, so tasks like posting your social, answering reviews, and following up leads actually get done, not just described.",
  },
  {
    q: "Can AI-Harness run my business for me?",
    a: "It runs the repeatable work your business depends on, marketing, reviews, follow-ups, bookings, and invoicing, while you keep the judgment calls and the human moments only an owner can own.",
  },
  {
    q: "Will this take my team's jobs?",
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
  outcome: string;
  name: string;
  seeLabel: string;
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
        name: "Listings & Search Visibility Agent",
        seeLabel: "See the Listings & Search Visibility Agent",
        seeTo: "/ai-agents",
        live: false,
      },
      {
        outcome:
          "Your brand stays alive across every channel, with campaigns built for each location and content aimed at the audience most likely to buy.",
        name: "Social Media Agent",
        seeLabel: "See the Marketing Automation Agent",
        seeTo: "/agents/marketing-automation",
        live: true,
      },
      {
        outcome:
          "Every lead gets caught, qualified, and followed up until it books or buys, so fewer opportunities turn into lost revenue.",
        name: "Sales Pipeline & CRM Agent",
        seeLabel: "See the Sales Pipeline & CRM Agent",
        seeTo: "/ai-agents#sales-pipeline",
        live: true,
      },
    ],
  },
  {
    title: "Protect your reputation",
    agents: [
      {
        outcome:
          "Reviews come in, and your Reputation Agent answers every one in your voice, even the hard ones, so trust keeps building instead of leaking away.",
        name: "Reputation & Sentiment Agent",
        seeLabel: "See the Reputation & Sentiment Agent",
        seeTo: "/agents/reputation-sentiment",
        live: true,
      },
      {
        outcome:
          "A steady stream of fresh reviews arrives on its own, the strongest signal on who chooses you next.",
        name: "Automated Review Agent",
        seeLabel: "See the Automated Review Agent",
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
        seeLabel: "See the Appointment & Booking Agent",
        seeTo: "/ai-agents",
        live: false,
      },
      {
        outcome: "Quotes and proposals out the door same day.",
        name: "Proposal Drafting Agent",
        seeLabel: "See the Proposal Drafting Agent",
        seeTo: "/ai-agents#proposals",
        live: true,
      },
      {
        outcome: "Money in, without the chasing.",
        name: "Payments & Invoicing Agent",
        seeLabel: "See the Payments & Invoicing Agent",
        seeTo: "/ai-agents",
        live: false,
      },
      {
        outcome: "Your best customers, bringing you more.",
        name: "Referral Agent",
        seeLabel: "See the Referral Agent",
        seeTo: "/ai-agents",
        live: false,
      },
    ],
  },
];

export const HOME_INDUSTRIES = [
  {
    name: "Restaurants",
    body: "Fill the quiet nights, answer every booking question in moments, and turn a great meal into a five-star review before the table is cleared.",
  },
  {
    name: "Retail",
    body: "Launch new arrivals across every channel, answer stock questions the second they land, and keep every store detail right wherever customers look.",
  },
  {
    name: "Real Estate",
    body: "Reply to every enquiry in minutes, book the viewing, and follow up the buyers still deciding while your reviews keep working between deals.",
  },
  {
    name: "Dental & Medical",
    body: "Keep the schedule full, cut no-shows with smart reminders, and grow the reviews new patients rely on when choosing care.",
  },
  {
    name: "Home & Professional Services",
    body: "Catch every missed-call enquiry, get the quote out same day, and chase the invoice so no job and no payment slips.",
  },
  {
    name: "Beauty & Wellness",
    body: "Keep the chairs and rooms full, keep your feed alive with the work that sells, and turn happy regulars into referrals.",
  },
];
