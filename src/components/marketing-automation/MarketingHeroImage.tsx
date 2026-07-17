type MarketingHeroImageProps = {
  src: string;
  alt: string;
  className?: string;
};

export function MarketingHeroImage({ src, alt, className }: MarketingHeroImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      className={
        className ??
        "aspect-[5/4] h-auto min-h-[16rem] w-full object-cover object-center sm:min-h-[18rem] lg:aspect-[4/3] lg:min-h-[22rem] xl:min-h-[24rem]"
      }
      loading="eager"
      decoding="async"
    />
  );
}
