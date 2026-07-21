import { useEffect, useRef, useState } from "react";

type Props = {
  /** Path under public/, e.g. /video/hero-bg.mp4 */
  src: string;
  poster: string;
  /** 0–100; higher = more opaque overlay for text contrast */
  overlayOpacity?: number;
  className?: string;
};

export default function HeroBackgroundVideo({
  src,
  poster,
  overlayOpacity = 72,
  className = "",
}: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [posterOnly, setPosterOnly] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || posterOnly) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      setPosterOnly(true);
      return;
    }

    video.muted = true;
    void video.play().catch(() => setPosterOnly(true));
  }, [posterOnly]);

  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      {posterOnly ? (
        <img src={poster} alt="" className="h-full w-full scale-105 object-cover" />
      ) : (
        <video
          ref={videoRef}
          className="h-full w-full scale-105 object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={poster}
          onError={() => setPosterOnly(true)}
        >
          <source src={src} type="video/mp4" />
        </video>
      )}
      <div className="absolute inset-0 bg-white" style={{ opacity: overlayOpacity / 100 }} />
      <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-white/20 to-white" />
      <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/40" />
    </div>
  );
}
