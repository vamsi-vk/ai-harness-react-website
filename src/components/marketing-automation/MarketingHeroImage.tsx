import PictureSet from "../PictureSet";

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
      className={
        className ??
        "aspect-[5/4] h-auto min-h-[16rem] w-full object-cover object-center sm:min-h-[18rem] lg:aspect-[4/3] lg:min-h-[22rem] xl:min-h-[24rem]"
      }
      sizes="(max-width: 1024px) 100vw, 560px"
      priority
    />
  );
}
