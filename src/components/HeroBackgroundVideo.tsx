import { useEffect, useMemo, useRef, useState } from "react";
import { cn } from "../lib/cn";

type Props = {
  /** One clip or a playlist (plays in order, then loops). Paths under public/. */
  src: string | string[];
  poster: string;
  /** Light = white wash. Dark = cinematic overlay. None = video only. */
  tone?: "light" | "dark" | "none";
  /** 0–100; extra flat overlay on top of tone gradients (ignored when tone is none) */
  overlayOpacity?: number;
  /** 1 = normal; 0.5 = half speed */
  playbackRate?: number;
  /** CSS object-position for the video, e.g. "70% center" */
  objectPosition?: string;
  /** cinematic = side vignette; uniform = even dim like Birdeye hero */
  overlayStyle?: "cinematic" | "uniform";
  className?: string;
};

export default function HeroBackgroundVideo({
  src,
  poster,
  tone = "dark",
  overlayOpacity = tone === "dark" ? 35 : tone === "light" ? 62 : 0,
  playbackRate = 1,
  objectPosition = "center",
  overlayStyle = "cinematic",
  className = "",
}: Props) {
  const sources = useMemo(
    () => (Array.isArray(src) ? src : [src]),
    [Array.isArray(src) ? src.join("\0") : src],
  );
  const playlist = sources.length > 1;
  const videoRef = useRef<HTMLVideoElement>(null);
  const [clipIndex, setClipIndex] = useState(0);
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
    video.playbackRate = playbackRate;
    void video.play().catch(() => setPosterOnly(true));
  }, [clipIndex, posterOnly, playbackRate]);

  useEffect(() => {
    setClipIndex(0);
  }, [sources.join("\0")]);

  const handleEnded = () => {
    if (!playlist) return;
    setClipIndex((i) => (i + 1) % sources.length);
  };

  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      {posterOnly ? (
        <img
          src={poster}
          alt=""
          className="h-full w-full scale-105 object-cover"
          style={{ objectPosition }}
        />
      ) : (
        <video
          ref={videoRef}
          key={sources[clipIndex]}
          className="h-full w-full scale-105 object-cover"
          style={{ objectPosition }}
          autoPlay
          muted
          loop={!playlist}
          playsInline
          preload="auto"
          poster={poster}
          onEnded={handleEnded}
          onError={() => setPosterOnly(true)}
        >
          <source src={sources[clipIndex]} type="video/mp4" />
        </video>
      )}
      {tone === "none" ? null : tone === "dark" ? (
        overlayStyle === "uniform" ? (
          <div
            className="absolute inset-0 bg-ink-950"
            style={{ opacity: overlayOpacity / 100 }}
          />
        ) : (
          <>
            <div
              className="absolute inset-0 bg-ink-950"
              style={{ opacity: overlayOpacity / 100 }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-ink-950/90 via-ink-950/55 to-ink-950/25" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-transparent to-ink-950/40" />
          </>
        )
      ) : (
        <>
          <div className="absolute inset-0 bg-white" style={{ opacity: overlayOpacity / 100 }} />
          <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-white/20 to-white" />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/40" />
        </>
      )}
    </div>
  );
}
