import { forwardRef } from "react";
import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-full font-sans font-semibold " +
  "transition-all duration-200 ease-premium disabled:opacity-50 disabled:pointer-events-none " +
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

const variants = {
  primary: "bg-navy-500 text-white hover:bg-navy-600 active:bg-navy-700 shadow-sm",
  secondary: "bg-navy-800 text-white hover:bg-navy-900",
  outline: "border border-navy-500 text-navy-500 hover:bg-navy-50",
  ghost: "text-ink hover:bg-surface-muted",
  gold: "bg-gold-500 text-navy-900 hover:bg-gold-600",
} as const;

const sizes = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-sm",
  lg: "h-[3.25rem] px-8 text-base",
} as const;

type Variant = keyof typeof variants;
type Size = keyof typeof sizes;

interface CommonProps {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
}

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined; to?: undefined };

type ButtonAsAnchor = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string; to?: undefined };

type ButtonAsLink = CommonProps & { to: string; href?: undefined; external?: never };

type ButtonProps = ButtonAsButton | ButtonAsAnchor | ButtonAsLink;

/**
 * Polymorphic button: renders a <button>, an external <a>, or an internal
 * React Router <Link> depending on which props are passed.
 */
export const Button = forwardRef<HTMLElement, ButtonProps>(function Button(
  { variant = "primary", size = "md", className, children, ...props },
  ref
) {
  const classes = cn(baseStyles, variants[variant], sizes[size], className);

  if ("to" in props && props.to) {
    const { to, ...rest } = props;
    return (
      <Link ref={ref as React.Ref<HTMLAnchorElement>} to={to} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  if ("href" in props && props.href) {
    const { href, ...rest } = props;
    return (
      <a ref={ref as React.Ref<HTMLAnchorElement>} href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button ref={ref as React.Ref<HTMLButtonElement>} className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
});
