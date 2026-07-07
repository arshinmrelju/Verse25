import { forwardRef } from 'react'
import { motion } from 'framer-motion'
import { cn } from '../../utils/cn'

type Variant = 'primary' | 'secondary' | 'ghost' | 'outline'
type Size = 'sm' | 'md' | 'lg'

interface ButtonProps {
  variant?: Variant
  size?: Size
  className?: string
  children: React.ReactNode
  disabled?: boolean
  onClick?: () => void
}

const variantStyles: Record<Variant, string> = {
  primary: 'bg-christmas-gold text-forest-dark font-semibold hover:bg-christmas-gold-light shadow-lg shadow-christmas-gold/20',
  secondary: 'bg-christmas-red text-cream font-semibold hover:bg-christmas-red-dark shadow-lg shadow-christmas-red/20',
  ghost: 'text-cream/70 hover:text-cream hover:bg-white/5',
  outline: 'border border-christmas-gold/50 text-christmas-gold hover:bg-christmas-gold/10',
}

const sizeStyles: Record<Size, string> = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-5 py-2.5 text-base',
  lg: 'px-7 py-3.5 text-lg',
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className, children, disabled, onClick }, ref) => {
    return (
      <motion.button
        ref={ref}
        whileTap={disabled ? undefined : { scale: 0.95 }}
        whileHover={disabled ? undefined : { scale: 1.02 }}
        onClick={onClick}
        className={cn(
          'inline-flex items-center justify-center gap-2 rounded-xl font-body transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-christmas-gold/50 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer',
          variantStyles[variant],
          sizeStyles[size],
          className,
        )}
        disabled={disabled}
      >
        {children}
      </motion.button>
    )
  },
)

Button.displayName = 'Button'
