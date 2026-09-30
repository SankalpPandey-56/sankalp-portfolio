import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ArrowLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "inline" | "block" | "quiet";
  className?: string;
  external?: boolean;
};

/**
 * The site's one link treatment: small caps label + up-right arrow.
 * variant "block" is the big footer-style link; "inline" for meta rows;
 * "quiet" for low-emphasis links.
 */
export function ArrowLink({ href, children, variant = "inline", className, external = true }: ArrowLinkProps) {
  const isExternal = external && /^https?:|^mailto:/.test(href);
  const classes = cn(
    "group/link inline-flex items-baseline gap-1.5 font-mono text-[0.6875rem] uppercase tracking-[0.14em]",
    variant === "inline" && "text-paper transition-colors hover:text-ember",
    variant === "quiet" && "text-paper-dim transition-colors hover:text-paper",
    variant === "block" &&
      "text-xl md:text-2xl font-sans normal-case tracking-normal text-paper link-line w-fit",
    className
  );

  const inner = (
    <>
      <span>{children}</span>
      <ArrowUpRight
        className={cn(
          "inline-block self-center transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5",
          variant === "block" ? "size-5 md:size-6" : "size-3.5"
        )}
        strokeWidth={1.5}
        aria-hidden="true"
      />
    </>
  );

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {inner}
    </Link>
  );
}
