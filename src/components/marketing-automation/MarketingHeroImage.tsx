import PictureSet from "../PictureSet";
import { MARKETING_HERO_IMAGE_CLASS } from "./marketingImageClasses";

type MarketingHeroImageProps = {
  src: string;
  alt: string;
  className?: string;
};

export function MarketingHeroImage({ src, alt, className }: MarketingHeroImageProps) {
  return (
    <PictureSet
      base={src}
      alt={alt}
      className={className ?? MARKETING_HERO_IMAGE_CLASS}
      sizes="(max-width: 1024px) 100vw, 560px"
      loading="eager"
      fetchPriority="high"
      decoding="async"
    />
  );
}
