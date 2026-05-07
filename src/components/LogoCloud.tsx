type LogoItem = {
  name: string;
  image?: string;
};

const logos: LogoItem[] = [
  { name: "Podium", image: "/podium-logo.png" }, { name: "Clintrust.ai", image: "/clintrust-logo.png" },
];

export default function LogoCloud() {
  return (
    <div className="relative mx-auto max-w-6xl">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 hidden w-24 bg-gradient-to-r from-white to-transparent sm:block" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 hidden w-24 bg-gradient-to-l from-white to-transparent sm:block" />
      <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-5 py-2 sm:gap-16">
        {logos.map((logo) => (
          <div
            key={logo.name}
            className="flex items-center gap-4 text-ink-400"
          >
            {logo.image ? (
              <span className="grid h-12 w-12 place-items-center overflow-hidden rounded-md border border-ink-200 bg-white">
                <img
                  src={logo.image}
                  alt={`${logo.name} logo`}
                  width={48}
                  height={48}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
              </span>
            ) : (
              <span className="grid h-11 w-11 place-items-center rounded-md bg-ink-100 text-ink-500">
                <svg viewBox="0 0 20 20" className="h-6 w-6" fill="currentColor">
                  <circle cx="10" cy="10" r="3.2" />
                  <circle cx="10" cy="10" r="7" fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.6" />
                </svg>
              </span>
            )}
            <span className="text-[19px] font-semibold tracking-tight text-ink-500">{logo.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
