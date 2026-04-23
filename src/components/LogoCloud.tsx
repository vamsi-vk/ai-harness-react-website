const logos = [
  "Helix Financial",
  "Meridian Health",
  "Northforge",
  "Arcadia",
  "Statera Legal",
  "Vantage BPO",
  "Lumen Retail",
  "Continuum",
  "Atlas Insurance",
  "Bright Labs",
];

export default function LogoCloud() {
  const row = [...logos, ...logos];
  return (
    <div className="relative mx-auto max-w-6xl overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent" />
      <div className="flex w-max animate-marquee items-center gap-12 py-2">
        {row.map((name, i) => (
          <div
            key={`${name}-${i}`}
            className="flex items-center gap-3 whitespace-nowrap text-ink-400"
          >
            <span className="grid h-7 w-7 place-items-center rounded-md bg-ink-100 text-ink-500">
              <svg viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor">
                <circle cx="10" cy="10" r="3.2" />
                <circle cx="10" cy="10" r="7" fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.6" />
              </svg>
            </span>
            <span className="text-[15px] font-semibold tracking-tight text-ink-500">{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
