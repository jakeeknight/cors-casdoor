import React, { forwardRef, Ref } from "react"
import Link from "next/link"
import clsx from "clsx"

const baseStyles = {
  solid:
    "inline-flex justify-center rounded-lg py-2 px-3 text-sm font-semibold outline-2 outline-offset-2 transition-colors",
  outline:
    "inline-flex justify-center rounded-lg border py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] text-sm outline-2 outline-offset-2 transition-colors",
}

interface VariantStyle {
  orange?: string
  white?: string
  slate: string
}

const variantStyles: Record<"solid" | "outline", VariantStyle> = {
  solid: {
    orange:
      "relative overflow-hidden bg-orange-500 text-white before:absolute before:inset-0 active:before:bg-transparent hover:before:bg-white/10 active:bg-orange-600 active:text-white/80 before:transition-colors",
    white:
      "bg-white text-cyan-900 hover:bg-white/90 active:bg-white/90 active:text-cyan-900/70",
    slate:
      "bg-slate-800 text-white hover:bg-slate-900 active:bg-slate-800 active:text-white/80",
  },
  outline: {
    slate:
      "border-slate-300 text-slate-700 hover:border-slate-400 active:bg-slate-100 active:text-slate-700/80",
  },
}
interface ButtonProps {
  variant?: "solid" | "outline"
  color?: "orange" | "white" | "slate"
  className?: string
  href?: string
  [key: string]: any
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "solid", color = "slate", className, href, ...props }, ref) => {
    className = clsx(
      baseStyles[variant],
      variantStyles[variant][color],
      className
    )

    return href ? (
      <Link href={href} passHref legacyBehavior>
        <a
          ref={ref as Ref<HTMLAnchorElement>}
          className={className}
          {...props}
        />
      </Link>
    ) : (
      <button ref={ref} className={className} {...props} />
    )
  }
)

Button.displayName = "Button"
