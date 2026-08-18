"use client";

import { forwardRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

const base =
  "group relative inline-flex items-center justify-center gap-2 rounded-full font-medium transition-[transform,box-shadow,background-color,border-color] duration-300 will-change-transform focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 active:scale-[0.97]";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-accent-foreground shadow-glow hover:-translate-y-0.5 hover:shadow-[0_0_0_1px_hsl(var(--accent)/0.3),0_12px_50px_-8px_hsl(var(--accent)/0.55)]",
  secondary:
    "border border-border bg-card/60 text-foreground backdrop-blur hover:-translate-y-0.5 hover:border-accent/40 hover:bg-card",
  ghost: "text-muted-foreground hover:text-foreground hover:bg-muted/60",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-base",
};

interface ButtonBaseProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
}

type AnchorProps = ButtonBaseProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & { as: "a" };
type NativeButtonProps = ButtonBaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { as?: "button" };

type ButtonProps = AnchorProps | NativeButtonProps;

/** Shared button/link with premium hover + press micro-interactions. */
export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  function Button({ variant = "primary", size = "md", className, children, ...props }, ref) {
    const classes = cn(base, variants[variant], sizes[size], className);

    if (props.as === "a") {
      const { as: _as, ...anchorProps } = props;
      return (
        <a ref={ref as React.Ref<HTMLAnchorElement>} className={classes} {...anchorProps}>
          {children}
        </a>
      );
    }

    const { as: _as, ...buttonProps } = props as NativeButtonProps;
    return (
      <button ref={ref as React.Ref<HTMLButtonElement>} className={classes} {...buttonProps}>
        {children}
      </button>
    );
  },
);
