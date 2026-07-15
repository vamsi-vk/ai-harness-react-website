import { useEffect, type ReactNode } from "react";
import { createPortal } from "react-dom";
import {
  X,
  ShieldCheck,
  Lock,
  Eye,
  Fingerprint,
  Activity,
  ClipboardList,
  Server,
  Key,
  CheckCircle2,
  FileText,
  ScrollText,
  Database,
} from "lucide-react";

export type LegalModalKind = "security" | "privacy" | "terms" | "dpa";

type Props = {
  kind: LegalModalKind | null;
  onClose: () => void;
};

export default function LegalModal({ kind, onClose }: Props) {
  // Lock body scroll + close on Escape while the modal is open
  useEffect(() => {
    if (!kind) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [kind, onClose]);

  if (!kind) return null;

  const content = CONTENT[kind];

  return createPortal(
    <div
      aria-modal="true"
      role="dialog"
      aria-labelledby="legal-modal-title"
      className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-8 sm:px-8 sm:py-12"
    >
      {/* Blurred backdrop */}
      <button
        type="button"
        aria-label="Close dialog"
        onClick={onClose}
        className="absolute inset-0 bg-ink-950/55 backdrop-blur-md transition-opacity animate-fade-up"
      />

      {/* Dialog card */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative z-10 flex max-h-[85vh] w-full max-w-2xl flex-col overflow-hidden rounded-3xl border border-ink-200 bg-white text-ink-800 shadow-lift animate-fade-up"
      >
        {/* Decorative gradient header strip */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-500/50 to-transparent" />

        {/* Header */}
        <div className="flex items-start gap-4 border-b border-ink-200/80 bg-gradient-to-br from-brand-50/70 via-white to-brand-50/60 px-7 py-6 sm:px-8">
          <span className="mt-1 grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-white text-ink-600 ring-1 ring-inset ring-ink-200/80 shadow-soft">
            {content.icon}
          </span>
          <div className="min-w-0 flex-1">
            <p className="text-sm font-medium text-ink-500">
              {content.eyebrow}
            </p>
            <h2
              id="legal-modal-title"
              className="mt-1 text-[22px] font-semibold leading-tight tracking-[-0.01em] text-ink-900 sm:text-[24px]"
            >
              {content.title}
            </h2>
            <p className="mt-1.5 text-[13.5px] leading-relaxed text-ink-600">
              {content.subtitle}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-ink-200 bg-white text-ink-600 transition-colors hover:bg-ink-50 hover:text-ink-900"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Scrollable body */}
        <div className="flex-1 overflow-y-auto px-7 py-6 sm:px-8 sm:py-7">
          {content.body}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between gap-3 border-t border-ink-200/80 bg-ink-50/60 px-7 py-4 sm:px-8">
          <p className="text-[12.5px] text-ink-500">
            Last updated {content.updated} · AI-Harness, Inc.
          </p>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-9 items-center justify-center rounded-full bg-ink-900 px-4 text-[13px] font-semibold text-white transition-colors hover:bg-ink-800"
          >
            Close
          </button>
        </div>
      </div>
    </div>,
    document.body,
  );
}

/* ----------------------------- Content blocks ----------------------------- */

type ModalContent = {
  eyebrow: string;
  title: string;
  subtitle: string;
  icon: ReactNode;
  updated: string;
  body: ReactNode;
};

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mb-6 last:mb-0">
      <h3 className="text-[15px] font-semibold tracking-tight text-ink-900">{title}</h3>
      <div className="mt-2 text-[14px] leading-relaxed text-ink-700">{children}</div>
    </section>
  );
}

function Bullets({ items }: { items: Array<ReactNode> }) {
  return (
    <ul className="mt-2 space-y-2">
      {items.map((item, i) => (
        <li key={i} className="flex gap-2.5 text-[14px] leading-relaxed text-ink-700">
          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function KeyRow({ k, v, Icon }: { k: string; v: string; Icon: typeof Key }) {
  return (
    <div className="grid grid-cols-[1fr_1.4fr] gap-4 border-b border-ink-100 px-4 py-3 last:border-b-0">
      <div className="flex items-center gap-2 text-[13px] font-semibold text-ink-900">
        <Icon className="h-3.5 w-3.5 text-brand-600" /> {k}
      </div>
      <div className="text-[13.5px] text-ink-700">{v}</div>
    </div>
  );
}

const CONTENT: Record<LegalModalKind, ModalContent> = {
  security: {
    eyebrow: "Security",
    title: "Enterprise security & governance",
    subtitle:
      "How AI-Harness keeps your data, models, and AI agents safe across the unified human + AI workforce.",
    icon: <ShieldCheck className="h-5 w-5" />,
    updated: "June 2026",
    body: (
      <>
        <Section title="Defense in depth">
          AI-Harness treats AI Agents as first-class team members. Every action,
          human or agent, runs through the same governance layer with identity,
          access, and policy enforced end-to-end.
          <Bullets
            items={[
              <span>
                <strong className="text-ink-900">Identity &amp; Access:</strong>{" "}
                SAML / OIDC SSO, SCIM provisioning, role-based access, and
                fine-grained permission scopes.
              </span>,
              <span>
                <strong className="text-ink-900">Audit trail:</strong> Immutable
                log of every prompt, tool call, data access, and decision.
                Searchable and exportable.
              </span>,
              <span>
                <strong className="text-ink-900">Approval workflows:</strong>{" "}
                Human-in-the-loop gates for high-impact actions, configurable by
                role, value, or risk.
              </span>,
              <span>
                <strong className="text-ink-900">Policy enforcement:</strong>{" "}
                Domain-specific policy packs for PII handling, financial
                thresholds, and regulatory rules.
              </span>,
              <span>
                <strong className="text-ink-900">Observability:</strong> Live
                telemetry on agent behavior, cost, and quality. Export to your
                SIEM or data warehouse.
              </span>,
            ]}
          />
        </Section>

        <Section title="Compliance &amp; certifications">
          <Bullets
            items={[
              "SOC 2 Type II: annual audit, available under NDA.",
              "ISO 27001: certification on roadmap for 2026.",
              "GDPR & CCPA: data subject rights and DPA included.",
              "HIPAA: BAA available on Enterprise plans.",
              "EU AI Act-ready: policy packs and risk classification support.",
            ]}
          />
        </Section>

        <Section title="Agent governance">
          AI-Harness keeps people in control with platform-enforced budgets,
          policies, and approvals, so agents support your teams within the
          rules you set.
          <div className="mt-3 grid gap-2 sm:grid-cols-2">
            {[
              { Icon: Lock, t: "Budget ceilings per agent or team" },
              { Icon: Activity, t: "Full session replay & rollback" },
              { Icon: Fingerprint, t: "Role-based agent boundaries" },
              { Icon: Eye, t: "Real-time decision transparency" },
            ].map(({ Icon, t }) => (
              <div
                key={t}
                className="flex items-center gap-2 rounded-xl border border-ink-200 bg-white px-3 py-2.5 text-[13px] text-ink-800"
              >
                <Icon className="h-4 w-4 text-brand-600" /> {t}
              </div>
            ))}
          </div>
        </Section>

        <Section title="Deployment flexibility">
          Cloud, private cloud, VPC, or on-premise. Bring your own models, your
          own keys, and your own data residency. AI-Harness adapts to small
          teams and large enterprise environments alike.
        </Section>
      </>
    ),
  },

  privacy: {
    eyebrow: "Privacy",
    title: "Privacy Policy",
    subtitle:
      "How we collect, use, and protect personal data across the AI-Harness platform.",
    icon: <Eye className="h-5 w-5" />,
    updated: "June 2026",
    body: (
      <>
        <Section title="Our commitment">
          AI-Harness is built around governance, traceability, and
          auditability. We collect the minimum personal data needed to operate
          the platform, never sell it, and never use customer content to train
          third-party models.
        </Section>

        <Section title="Information we collect">
          <Bullets
            items={[
              <span>
                <strong className="text-ink-900">Account data:</strong> name,
                work email, organization, and authentication identifiers
                provided by your SSO.
              </span>,
              <span>
                <strong className="text-ink-900">Usage data:</strong> workflow
                events, task transitions, and agent activity used to render
                dashboards and audit logs.
              </span>,
              <span>
                <strong className="text-ink-900">Customer content:</strong>{" "}
                projects, tasks, prompts, files, and outputs you submit. Treated
                as confidential and isolated per tenant.
              </span>,
              <span>
                <strong className="text-ink-900">Operational telemetry:</strong>{" "}
                performance, error, and security signals used to keep the
                service reliable.
              </span>,
            ]}
          />
        </Section>

        <Section title="How we use it">
          <Bullets
            items={[
              "Deliver, secure, and improve the AI-Harness platform.",
              "Provide audit trails and governance evidence to your administrators.",
              "Respond to support requests and notify you of material changes.",
              "Detect, prevent, and respond to fraud, abuse, and security incidents.",
            ]}
          />
        </Section>

        <Section title="What we never do">
          <Bullets
            items={[
              "We do not train AI models on your customer content.",
              "We do not sell or rent personal data to advertisers or third parties.",
              "We do not co-mingle data across tenants. Strict isolation at every layer.",
            ]}
          />
        </Section>

        <Section title="Your rights">
          Depending on your region (GDPR, UK GDPR, CCPA), you may request
          access, correction, deletion, restriction, or portability of your
          personal data. Submit requests through your workspace admin or by
          contacting{" "}
          <a
            href="mailto:support@ai-harness.com"
            className="font-semibold text-brand-700 hover:text-brand-800"
          >
            support@ai-harness.com
          </a>
          .
        </Section>

        <Section title="International transfers">
          When personal data moves between regions, we rely on Standard
          Contractual Clauses and equivalent safeguards. Data residency
          (US, EU, UK, APAC) is customer-selectable on Enterprise plans.
        </Section>
      </>
    ),
  },

  terms: {
    eyebrow: "Terms",
    title: "Terms of Service",
    subtitle:
      "The agreement that governs your use of the AI-Harness platform and services.",
    icon: <ScrollText className="h-5 w-5" />,
    updated: "June 2026",
    body: (
      <>
        <Section title="1. Acceptance of terms">
          By accessing or using AI-Harness, you agree to these Terms on behalf
          of yourself and your organization. If you do not have authority to
          bind the organization, do not use the service.
        </Section>

        <Section title="2. The service">
          AI-Harness provides an enterprise control plane for a unified human +
          AI workforce, including AI Agent creation, workflow and project
          management, governance, and audit capabilities described in your
          Order Form.
        </Section>

        <Section title="3. Your responsibilities">
          <Bullets
            items={[
              "Provide accurate account information and keep credentials secure.",
              "Configure agents, policies, and approval workflows appropriate to your context.",
              "Comply with all applicable laws when using AI Agents and outputs.",
              "Maintain rights to all customer content you submit to the platform.",
            ]}
          />
        </Section>

        <Section title="4. Acceptable use">
          You agree not to use AI-Harness to: violate law; infringe intellectual
          property; transmit malicious code; attempt to bypass governance,
          security, or rate limits; or build a competing product by scraping or
          benchmarking against our service.
        </Section>

        <Section title="5. Intellectual property">
          You retain all rights to your customer content. AI-Harness retains
          all rights to the platform, agent runtime, and associated software.
          Outputs generated by agents from your inputs are yours, subject to
          the rights of any third-party model providers you choose to connect.
        </Section>

        <Section title="6. Fees, term &amp; termination">
          Subscriptions, renewal terms, and fees are set out in your Order
          Form. Either party may terminate for material breach not cured within
          30 days of written notice. We may suspend access immediately for
          security or acceptable-use violations.
        </Section>

        <Section title="7. Disclaimers &amp; liability">
          The service is provided on an enterprise SLA but “as-is” for any
          AI-generated outputs. To the maximum extent permitted by law, neither
          party is liable for indirect, incidental, or consequential damages.
          Aggregate liability is capped at fees paid in the preceding 12 months.
        </Section>

        <Section title="8. Governing law">
          These Terms are governed by the laws of the State of Delaware, USA,
          without regard to conflict-of-laws principles. Disputes will be
          resolved in the state or federal courts located in Delaware.
        </Section>
      </>
    ),
  },

  dpa: {
    eyebrow: "DPA",
    title: "Data Processing Agreement",
    subtitle:
      "How AI-Harness processes personal data on your behalf, in line with GDPR, UK GDPR, and CCPA.",
    icon: <FileText className="h-5 w-5" />,
    updated: "June 2026",
    body: (
      <>
        <Section title="Roles of the parties">
          For personal data contained in customer content, you (the Customer)
          act as <strong className="text-ink-900">Controller</strong> and
          AI-Harness acts as <strong className="text-ink-900">Processor</strong>
          . AI-Harness processes personal data only on your documented
          instructions, including those reflected in the platform configuration.
        </Section>

        <Section title="Scope &amp; subject matter">
          <Bullets
            items={[
              <span>
                <strong className="text-ink-900">Subject matter:</strong>{" "}
                processing of personal data necessary to provide the AI-Harness
                platform and AI Agent execution.
              </span>,
              <span>
                <strong className="text-ink-900">Nature &amp; purpose:</strong>{" "}
                hosting, processing, and securing customer content; executing
                workflows; producing audit logs.
              </span>,
              <span>
                <strong className="text-ink-900">Data subjects:</strong> your
                employees, contractors, and end-users represented in your
                workflows.
              </span>,
              <span>
                <strong className="text-ink-900">Data categories:</strong>{" "}
                identifiers, professional info, and any personal data you
                choose to include in tasks, prompts, or files.
              </span>,
            ]}
          />
        </Section>

        <Section title="Security measures">
          <div className="mt-2 overflow-hidden rounded-xl border border-ink-200 bg-white">
            <KeyRow Icon={Lock} k="Encryption in transit" v="TLS 1.3 across every network boundary" />
            <KeyRow Icon={Key} k="Encryption at rest" v="AES-256, customer-managed keys on Enterprise" />
            <KeyRow Icon={Server} k="Tenancy isolation" v="Strict per-tenant isolation and encryption contexts" />
            <KeyRow Icon={Database} k="Data residency" v="US, EU, UK, APAC (customer-selectable)" />
            <KeyRow Icon={ClipboardList} k="Audit logging" v="Immutable, exportable record of every action" />
          </div>
        </Section>

        <Section title="Sub-processors">
          AI-Harness uses vetted sub-processors for hosting, observability, and
          support. The current list is maintained in the in-product Trust
          Center, and we will notify Controllers in advance of any material
          change so you can object.
        </Section>

        <Section title="International transfers">
          For transfers from the EEA, UK, or Switzerland, we rely on the
          European Commission's Standard Contractual Clauses and the UK
          International Data Transfer Addendum, supplemented by technical and
          organizational measures.
        </Section>

        <Section title="Data subject rights &amp; breach notification">
          <Bullets
            items={[
              <span>
                We provide tools and reasonable assistance for you to honor
                access, correction, deletion, and portability requests.
              </span>,
              <span>
                We will notify you without undue delay, and in any case within
                72 hours, after becoming aware of a personal data breach
                affecting your data.
              </span>,
              <span>
                On termination, customer content is deleted or returned in line
                with your Order Form and applicable retention requirements.
              </span>,
            ]}
          />
        </Section>

        <Section title="Contact">
          For DPA execution, sub-processor questions, or transfer documentation,
          contact{" "}
          <a
            href="mailto:dpo@ai-harness.com"
            className="font-semibold text-brand-700 hover:text-brand-800"
          >
            dpo@ai-harness.com
          </a>
          .
        </Section>
      </>
    ),
  },
};
