import { useEffect, useState } from "react";
import { useInViewOnce } from "../../lib/useInViewOnce";

type CountUpStatProps = {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  decimals?: number;
};

export default function CountUpStat({
  value,
  suffix = "",
  prefix = "",
  label,
  decimals = 0,
}: CountUpStatProps) {
  const { ref, inView } = useInViewOnce<HTMLDivElement>(0.4);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplay(value);
      return;
    }

    const start = performance.now();
    const duration = 1400;
    let frame = 0;

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(value * eased);
      if (t < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value]);

  return (
    <div ref={ref} className="text-center">
      <p className="font-serif text-[clamp(2.5rem,5vw,3.75rem)] leading-none tracking-tight text-ink-900">
        {prefix}
        {display.toFixed(decimals)}
        {suffix}
      </p>
      <p className="mt-3 text-sm font-medium text-ink-500">{label}</p>
    </div>
  );
}
