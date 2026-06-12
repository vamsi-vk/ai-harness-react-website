/**
 * Shared per-desk configuration for the International Businesses surface.
 *
 * Three pages render off this module:
 *   - `/international-businesses`                    (overview + country picker)
 *   - `/international-businesses/:country`           (per-country desk page)
 *   - `/international-businesses/:country/consultation`  (per-country form)
 *
 * Each desk is the same managed service offered to companies headquartered
 * in a different country/region. Universal copy (capabilities, process,
 * graduation path) lives on the overview page; country-specific content
 * (pain points entering the US market, US strategies, native-script tokens,
 * fiscal cadence) lives on the country page and is sourced from `DeskConfig`.
 *
 * Adding a 4th desk later: add the entry below + a key to `DESK_ORDER`. No
 * other code changes required as long as the new entry fills every field.
 */

export type DeskId = "japan" | "china" | "taiwan";

export type Bullet = {
  title: string;
  body: string;
};

export type DeskConfig = {
  id: DeskId;
  /** Display name, e.g. "Japan Desk". */
  name: string;
  /** Country adjective used in body copy, e.g. "Japanese", "Chinese", "Taiwanese". */
  countryAdjective: string;
  /** Country name (noun), e.g. "Japan", "China", "Taiwan". */
  countryName: string;
  /** HQ city referenced in time-zone callouts, e.g. "Tokyo", "Shanghai", "Taipei". */
  hqCity: string;
  /** Spoken/written language for reports and consultation, e.g. "Japanese". */
  language: string;
  /** 2-letter language code shown in the language badge ("JP" / "ZH" / "ZH"). */
  langCode: string;
  /** Native-script label for the language, e.g. "日本語", "中文 简", "中文 繁". */
  nativeLabel: string;
  /** Short native country name, e.g. "日本", "中国", "台灣". */
  nativeCountry: string;
  /** Timezone abbreviation used in hour callouts, e.g. "JST", "CST", "TST". */
  timezoneAbbr: string;
  /** Sentence-fragment for fiscal-year cadence in the governance bullet list. */
  fiscalLine: string;
  /** Title of the sample monthly-report card. */
  monthlyReportTitle: string;
  /** Subtitle date string under the report title. */
  monthlyReportDate: string;
  /** Native label for the Reporting Agent ("月次報告", "月度报告", "月度報告"). */
  reportingAgentNative: string;
  /** Native-script word for "accountability", used in governance eyebrow. */
  governanceEyebrowNative: string;
  /** Native-script phrase for "consultation", used in the CTA eyebrow. */
  ctaEyebrowNative: string;
  /** Native-script phrase for "free consultation", used in the CTA footnote. */
  noObligationNative: string;
  /** Native-script "we'll reply within one business day" line shown after form submit. */
  postSubmitReplyNative: string;
  /** Per-service-package native labels (3 items, same order as `getServicePackages`). */
  servicePackageNativeLabels: [string, string, string];
  /** Discussion-topic placeholder text for the consultation form (localized example). */
  discussionPlaceholder: string;
  /** One-sentence summary shown on the country card on the overview page. */
  tagline: string;
  /** Paragraph shown under the country page hero — frames the country's US market situation. */
  marketEntrySummary: string;
  /** Country-specific challenges their companies face entering the US market. */
  painPoints: Bullet[];
  /** Country-specific US market entry strategies we run. */
  strategies: Bullet[];
};

export const DESKS: Record<DeskId, DeskConfig> = {
  japan: {
    id: "japan",
    name: "Japan Desk",
    countryAdjective: "Japanese",
    countryName: "Japan",
    hqCity: "Tokyo",
    language: "Japanese",
    langCode: "JP",
    nativeLabel: "日本語",
    nativeCountry: "日本",
    timezoneAbbr: "JST",
    fiscalLine: "Quarterly reviews timed to your April–March fiscal year",
    monthlyReportTitle: "月次活動報告書",
    monthlyReportDate: "Monthly Report · 2024年5月",
    reportingAgentNative: "月次報告",
    governanceEyebrowNative: "説明責任",
    ctaEyebrowNative: "ご相談",
    noObligationNative: "無料相談",
    postSubmitReplyNative: "1営業日以内にご連絡いたします",
    servicePackageNativeLabels: [
      "市場適合性診断",
      "商談創出 · 営業代行",
      "展示会活用支援",
    ],
    discussionPlaceholder:
      "e.g., CES出展のフォローアップ、米国販売代理店候補のリスト化…",
    tagline:
      "Build US pipeline while Tokyo sleeps. Bilingual account directors and 72-hour trade show follow-up.",
    marketEntrySummary:
      "Japanese companies bring world-class products and patient capital to the US market. What they often lack is on-the-ground velocity. The Japan Desk closes that gap with bilingual account directors and governed AI agents — your US revenue team operating while Tokyo sleeps.",
    painPoints: [
      {
        title: "HQ approval loops kill US-speed deals",
        body:
          "Tokyo's morning is California's evening. By the time HQ weighs in, the buyer has already talked to two competitors.",
      },
      {
        title: "Trade show ROI evaporates without local follow-up",
        body:
          "Two hundred badges from CES, and no one in time zone to work them inside the 72-hour window that matters.",
      },
      {
        title: "Bilingual US sales talent is rare and expensive",
        body:
          "The few people who can sell in English and report in 日本語 are already at FANG-tier compensation.",
      },
      {
        title: "Cultural directness gap with American buyers",
        body:
          "Keiretsu-style consensus reads as indecision. US buyers want a price, a date, and a term sheet they can sign.",
      },
    ],
    strategies: [
      {
        title: "Bilingual account directors",
        body:
          "Single point of contact who runs meetings in English and reports to Tokyo in Japanese, on April–March cadence.",
      },
      {
        title: "Trade show activation",
        body:
          "Pre-show meeting scheduling, bilingual booth support, and 90-day agent-driven follow-up turning badge scans into pipeline.",
      },
      {
        title: "Distributor-led GTM",
        body:
          "For capital-equipment and industrial sectors, we source, qualify, and sign US distributors against your scorecard.",
      },
      {
        title: "HQ-grade monthly reporting",
        body:
          "Formal 月次活動報告書 generated from the audit trail, not consultant recollection.",
      },
    ],
  },
  china: {
    id: "china",
    name: "China Desk",
    countryAdjective: "Chinese",
    countryName: "China",
    hqCity: "Shanghai",
    language: "Mandarin",
    langCode: "ZH",
    nativeLabel: "中文 简",
    nativeCountry: "中国",
    timezoneAbbr: "CST",
    fiscalLine: "Quarterly reviews timed to your calendar fiscal year",
    monthlyReportTitle: "月度活动报告",
    monthlyReportDate: "Monthly Report · 2024年5月",
    reportingAgentNative: "月度报告",
    governanceEyebrowNative: "问责制",
    ctaEyebrowNative: "咨询",
    noObligationNative: "免费咨询",
    postSubmitReplyNative: "我们将在1个工作日内与您联系",
    servicePackageNativeLabels: [
      "市场契合度评估",
      "渠道开发 · 销售代表",
      "展会激活与转化",
    ],
    discussionPlaceholder:
      "例如:CES展会跟进、美国分销商候选名单的建立…",
    tagline:
      "Compliance-first US market entry. Brand-aware positioning, governed agents, bilingual contracts.",
    marketEntrySummary:
      "Chinese companies entering the US market navigate a more complex mix of regulatory, brand-perception, and contracting differences than peers from any other region. The China Desk runs your US GTM as a compliance-first, brand-aware managed service — bilingual humans and governed AI agents operating to American buyers' tempo.",
    painPoints: [
      {
        title: "Geopolitical headwinds across the cross-border surface",
        body:
          "Export controls, CFIUS scrutiny, and shifting data-flow rules make every cross-border move a compliance question first, a sales question second.",
      },
      {
        title: "US brand perception requires deliberate positioning",
        body:
          "American buyers often ask 'where's your US team?' before they ask about your product. Brand positioning has to be built, not assumed.",
      },
      {
        title: "Different contracting norms",
        body:
          "US LOIs aren't Chinese MoUs. Term sheets carry legal weight; verbal commitments don't. Both sides routinely misread the other.",
      },
      {
        title: "Unfamiliar regulatory landscape",
        body:
          "FDA for medtech, FCC for hardware, FTC for SaaS, plus state-by-state privacy laws — none of it intuitive coming from PRC frameworks.",
      },
    ],
    strategies: [
      {
        title: "Compliance-first market entry",
        body:
          "US entity, banking, and a sector-specific regulatory roadmap — completed before the first sales call, not after the first deal.",
      },
      {
        title: "US-localized brand and positioning",
        body:
          "A US-facing identity, visible US team, and customer references built from day one — so the brand question never derails a sales cycle.",
      },
      {
        title: "Channel-first for hardware; direct for SaaS",
        body:
          "We match the GTM motion to your sector. Hardware moves through distributors and integrators; SaaS through direct enterprise sales.",
      },
      {
        title: "Bilingual reporting + bilingual contracts",
        body:
          "All HQ-facing reporting in 中文 简. All US-facing contracts in US-format English with clean MNDAs and clear LOIs.",
      },
    ],
  },
  taiwan: {
    id: "taiwan",
    name: "Taiwan Desk",
    countryAdjective: "Taiwanese",
    countryName: "Taiwan",
    hqCity: "Taipei",
    language: "Mandarin",
    langCode: "ZH",
    nativeLabel: "中文 繁",
    nativeCountry: "台灣",
    timezoneAbbr: "TST",
    fiscalLine: "Quarterly reviews timed to your calendar fiscal year",
    monthlyReportTitle: "月度活動報告",
    monthlyReportDate: "Monthly Report · 2024年5月",
    reportingAgentNative: "月度報告",
    governanceEyebrowNative: "問責制",
    ctaEyebrowNative: "諮詢",
    noObligationNative: "免費諮詢",
    postSubmitReplyNative: "我們將在1個工作日內與您聯繫",
    servicePackageNativeLabels: [
      "市場契合度評估",
      "通路開發 · 銷售代表",
      "展會啟動與轉化",
    ],
    discussionPlaceholder:
      "例如:CES展會跟進、美國經銷商候選名單的建立…",
    tagline:
      "Convert manufacturing strength into US enterprise accounts. Bilingual ops, sector-targeted GTM.",
    marketEntrySummary:
      "Taiwanese companies bring deep engineering and manufacturing strength to the US market — and need an owned-relationship sales infrastructure to match. The Taiwan Desk gives you bilingual account directors and governed AI agents to convert OEM/ODM relationships into direct US enterprise accounts.",
    painPoints: [
      {
        title: "Differentiating from PRC brands in the buyer's mind",
        body:
          "American buyers often conflate Taiwan with China. Without deliberate positioning, you absorb headwinds that aren't yours to carry.",
      },
      {
        title: "Manufacturing depth, thin US sales infrastructure",
        body:
          "World-class production capability, but few owned-relationship US accounts and limited direct enterprise sales muscle.",
      },
      {
        title: "Smaller US Taiwanese diaspora",
        body:
          "The natural network of bilingual sales hires is meaningfully smaller than for Japan or China, making US hiring slower and pricier.",
      },
      {
        title: "OEM-to-direct transition is a learned skill",
        body:
          "Selling under someone else's brand for decades makes direct US enterprise sales something to build, not something to default into.",
      },
    ],
    strategies: [
      {
        title: "Position on manufacturing strength",
        body:
          "Lead with semiconductors, hardware, or medtech credentials. US buyers respect Taiwanese engineering — make it the front door.",
      },
      {
        title: "Convert OEM relationships into direct accounts",
        body:
          "Find the end customers behind your existing OEM/ODM partners and build owned, named US accounts on top of them.",
      },
      {
        title: "Bilingual ops in Traditional Chinese",
        body:
          "All HQ reporting in 中文 繁, on calendar-year cadence Taipei expects. US-facing contracts in clean US-format English.",
      },
      {
        title: "Sector-targeted US trade show strategy",
        body:
          "COMPUTEX is home turf — but the US revenue lives at CES, RSA, HIMSS, and SEMICON West. We pick the shows that actually pencil out.",
      },
    ],
  },
};

export const DESK_ORDER: DeskId[] = ["taiwan", "china", "japan"];

export function isDeskId(value: string): value is DeskId {
  return value === "japan" || value === "china" || value === "taiwan";
}

/**
 * Language option used in the consultation form. The form always offers
 * exactly two: `ENGLISH_LANGUAGE` (locked, always selected) and the active
 * desk's native language, which is toggleable.
 */
export type LanguageOption = {
  id: "en" | "ja" | "zh-cn" | "zh-tw";
  label: string;
  /** Native-script short label shown below the English label. */
  native: string;
};

export const ENGLISH_LANGUAGE: LanguageOption = {
  id: "en",
  label: "English",
  native: "EN",
};

const NATIVE_LANGUAGES: Record<DeskId, LanguageOption> = {
  japan: { id: "ja", label: "Japanese", native: "日本語" },
  china: { id: "zh-cn", label: "Mandarin (Simplified)", native: "中文 简" },
  taiwan: { id: "zh-tw", label: "Mandarin (Traditional)", native: "中文 繁" },
};

/** Return the desk's variable second language (the one paired with English). */
export function getNativeLanguage(deskId: DeskId): LanguageOption {
  return NATIVE_LANGUAGES[deskId];
}
