import { useId, useState } from "react";
import { Link } from "react-router-dom";
import { HOME_INDUSTRY_SLIDES } from "../../data/homeIndustrySlides";
import { cn } from "../../lib/cn";
import Logo from "../Logo";

function IntegrationPill({ label }: { label: string }) {
  return (
    <span className="block rounded-md border border-ink-200/90 bg-white px-2.5 py-1.5 text-center text-[11px] font-medium leading-tight text-ink-700 shadow-sm">
      {label}
    </span>
  );
}

function IntegrationHub({ slide }: { slide: (typeof HOME_INDUSTRY_SLIDES)[number] }) {
  return (
    <div className="flex h-full flex-col rounded-xl border border-ink-200/80 bg-white p-4 sm:p-5">
      <p className="text-center text-xs font-medium text-ink-500">{slide.integrationCaption}</p>
      <div className="mt-4 grid flex-1 grid-cols-[1fr_auto_1fr] items-center gap-3">
        <div className="flex flex-col gap-2">
          {slide.integrationsIn.map((label) => (
            <IntegrationPill key={label} label={label} />
          ))}
        </div>
        <div className="flex flex-col items-center gap-1 px-1">
          <div className="hidden h-px w-8 bg-ink-200 sm:block" aria-hidden />
          <div className="scale-[0.72] sm:scale-[0.8]">
            <Logo dark />
          </div>
          <div className="hidden h-px w-8 bg-ink-200 sm:block" aria-hidden />
        </div>
        <div className="flex flex-col gap-2">
          {slide.integrationsOut.map((label) => (
            <IntegrationPill key={label} label={label} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function HomeIndustriesTabSlider() {
  const [active, setActive] = useState(0);
  const tablistId = useId();
  const slide = HOME_INDUSTRY_SLIDES[active];

  return (
    <div className="mt-10 sm:mt-12">
      <div
        role="tablist"
        aria-label="Industries"
        id={tablistId}
        className="flex flex-wrap items-center justify-center gap-2 sm:gap-3"
      >
        {HOME_INDUSTRY_SLIDES.map((item, index) => {
          const selected = index === active;
          return (
            <button
              key={item.name}
              type="button"
              role="tab"
              id={`${tablistId}-tab-${index}`}
              aria-selected={selected}
              aria-controls={`${tablistId}-panel`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(index)}
              className={cn(
                "rounded-none px-3 py-2 text-sm font-medium transition-colors sm:px-4 sm:text-[15px]",
                selected
                  ? "text-ink-900 underline decoration-2 underline-offset-8 decoration-brand-500"
                  : "text-ink-600 hover:text-ink-900",
              )}
            >
              {item.tabLabel}
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        id={`${tablistId}-panel`}
        aria-labelledby={`${tablistId}-tab-${active}`}
        className="mt-6 rounded-2xl border border-ink-200/70 bg-ink-50/90 p-5 sm:mt-8 sm:p-6 lg:p-8"
      >
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)_minmax(0,0.42fr)] lg:items-stretch lg:gap-6 xl:gap-8">
          <div className="flex min-h-0 flex-col justify-between">
            <div>
              <p className="text-sm font-medium text-ink-500">{slide.eyebrow}</p>
              <blockquote className="mt-4 text-xl font-normal leading-snug tracking-[-0.02em] text-ink-900 sm:text-2xl sm:leading-snug">
                &ldquo;{slide.quote}&rdquo;
              </blockquote>
            </div>
            <div className="mt-8">
              <p className="text-sm font-semibold text-ink-900">{slide.quoteAuthor}</p>
              <p className="text-sm text-ink-600">{slide.quoteCompany}</p>
              <div className="mt-5 flex flex-wrap gap-x-3 gap-y-1 text-sm">
                <Link
                  to="/industries"
                  className="font-medium text-brand-700 hover:text-brand-800"
                >
                  See AI-Harness for {slide.name}
                </Link>
                <span className="text-ink-300">·</span>
                <Link to="/signup" className="font-medium text-ink-600 hover:text-ink-900">
                  Start free
                </Link>
              </div>
            </div>
          </div>

          <div className="min-h-[220px] lg:min-h-[280px]">
            <IntegrationHub slide={slide} />
          </div>

          <div className="relative min-h-[200px] overflow-hidden rounded-xl lg:min-h-[280px]">
            <img
              key={slide.image}
              src={slide.image}
              alt={slide.imageAlt}
              width={480}
              height={640}
              loading="lazy"
              decoding="async"
              className="h-full min-h-[200px] w-full object-cover object-center lg:min-h-[280px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
