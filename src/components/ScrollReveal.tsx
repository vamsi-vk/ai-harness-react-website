import {
  type CSSProperties,
  type ElementType,
  type ReactNode,
  type Ref,
} from "react";
import { cn } from "../lib/cn";
import { useInViewOnce } from "../lib/useInViewOnce";

type ScrollRevealProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
  className?: string;
  delay?: number;
};

export default function ScrollReveal<T extends ElementType = "div">({
  as,
  children,
  className,
  delay = 0,
}: ScrollRevealProps<T>) {
  const Tag = (as ?? "div") as ElementType;
  const { ref, inView } = useInViewOnce<HTMLElement>(0.1);

  return (
    <Tag
      ref={ref as Ref<HTMLElement>}
      className={cn("scroll-reveal", inView && "scroll-reveal-visible", className)}
      style={{ "--scroll-reveal-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  );
}
