/**
 * PictureSet: render an <img> wrapped in <picture> with AVIF + WebP
 * fallbacks so modern browsers download the smallest format they can decode.
 *
 * Expected file layout in /public:
 *   /hero.avif   ← preferred (~95% of users)
 *   /hero.webp   ← fallback for older Safari etc.
 *   /hero.png    ← universal fallback (always required)
 *
 * Generate the .webp + .avif siblings with:
 *   npm run optimize:images
 *
 * Usage:
 *   <PictureSet
 *     base="/hero"
 *     alt="..."
 *     width={1376}
 *     height={768}
 *     fetchPriority="high"
 *     loading="eager"
 *     decoding="async"
 *     className="block h-auto w-full"
 *   />
 */

import { useState, type ImgHTMLAttributes, type SyntheticEvent } from "react";

type Props = Omit<ImgHTMLAttributes<HTMLImageElement>, "src" | "srcSet"> & {
  /**
   * Path WITHOUT extension. The component appends .avif / .webp / .png.
   * Either "/hero" or "/hero.png" works (the .png suffix is stripped
   * automatically for convenience).
   */
  base: string;
  /** Required for accessibility, same as a normal <img alt>. */
  alt: string;
  /** Optional className applied to the inner <img>, not the <picture>. */
  className?: string;
};

export default function PictureSet({ base, alt, className, onError, ...rest }: Props) {
  const stem = base.replace(/\.(png|jpe?g|webp|avif)$/i, "");
  const pngSrc = `${stem}.png`;
  /** If AVIF/WebP 404 or fail to decode, fall back to a plain PNG <img>. */
  const [usePngOnly, setUsePngOnly] = useState(false);

  const handleError = (event: SyntheticEvent<HTMLImageElement>) => {
    if (!usePngOnly) {
      setUsePngOnly(true);
      return;
    }
    onError?.(event);
  };

  if (usePngOnly) {
    return (
      <img src={pngSrc} alt={alt} className={className} onError={onError} {...rest} />
    );
  }

  return (
    <picture>
      <source srcSet={`${stem}.avif`} type="image/avif" />
      <source srcSet={`${stem}.webp`} type="image/webp" />
      <img
        src={pngSrc}
        alt={alt}
        className={className}
        onError={handleError}
        {...rest}
      />
    </picture>
  );
}
