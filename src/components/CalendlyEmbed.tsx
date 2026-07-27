import { useRef, useState } from "react";
import { InlineWidget, useCalendlyEventListener } from "react-calendly";

/** Full Calendly event URL, e.g. https://calendly.com/your-team/30min */
export const CALENDLY_URL =
  import.meta.env.VITE_CALENDLY_URL?.trim() || "";

type Step = "calendar" | "details";

const CALENDAR_HEIGHT = 490;
/** Fits Enter Details through Schedule Event without a tall empty footer */
const DETAILS_HEIGHT = 740;
const DETAILS_MAX = 780;

type CalendlyEmbedProps = {
  className?: string;
};

export default function CalendlyEmbed({ className = "" }: CalendlyEmbedProps) {
  const [height, setHeight] = useState(CALENDAR_HEIGHT);
  const stepRef = useRef<Step>("calendar");

  useCalendlyEventListener({
    // Month view or time-slot list
    onEventTypeViewed: () => {
      stepRef.current = "calendar";
      setHeight(CALENDAR_HEIGHT);
    },
    // Enter Details form (name / email / schedule)
    onDateAndTimeSelected: () => {
      stepRef.current = "details";
      setHeight(DETAILS_HEIGHT);
    },
    onPageHeightResize: (e) => {
      const next = Number.parseInt(String(e.data.payload.height), 10);
      if (!Number.isFinite(next) || next < 100) return;

      if (stepRef.current === "details") {
        // Prefer Calendly's height when sane; clamp so we don't get a huge empty footer
        const fitted = next + 8;
        setHeight(Math.min(DETAILS_MAX, Math.max(700, Math.min(fitted, DETAILS_MAX))));
        return;
      }

      // Calendar / time list — Calendly over-reports; keep the card compact
      setHeight(CALENDAR_HEIGHT);
    },
  });

  if (!CALENDLY_URL) {
    return (
      <div
        className={`flex min-h-[380px] flex-col items-center justify-center gap-2 px-6 py-12 text-center ${className}`}
      >
        <p className="text-[15px] font-medium text-ink-900">Booking unavailable</p>
        <p className="max-w-sm text-[14px] leading-relaxed text-ink-600">
          Set <code className="rounded bg-ink-100 px-1.5 py-0.5 text-[13px]">VITE_CALENDLY_URL</code>{" "}
          to your Calendly event link, then restart the dev server.
        </p>
      </div>
    );
  }

  return (
    <div className={`overflow-hidden ${className}`}>
      <div className="border-b border-ink-200 px-6 py-4 sm:px-8">
        <p className="text-[13px] font-semibold tracking-[0.08em] text-ink-500 uppercase">
          Pick a time
        </p>
        <p className="mt-1 text-[15px] font-medium text-ink-900">
          Book your 30-minute demo
        </p>
      </div>
      <div
        className="relative overflow-hidden bg-white"
        style={{
          clipPath:
            "polygon(0 0, calc(100% - 118px) 0, 100% 118px, 100% 100%, 0 100%)",
        }}
      >
        <InlineWidget
          url={CALENDLY_URL}
          styles={{
            height: `${height}px`,
            minWidth: "320px",
          }}
          pageSettings={{
            backgroundColor: "ffffff",
            hideEventTypeDetails: true,
            hideLandingPageDetails: true,
            hideGdprBanner: true,
            primaryColor: "7839E0",
            textColor: "1F2937",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute right-0 top-0 z-20 h-[130px] w-[130px] bg-white"
          style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%)" }}
        />
      </div>
    </div>
  );
}
