import Link from 'next/link'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'success' | 'outline'
  size?: 'small' | 'medium' | 'large'
  href?: string
  onClick?: () => void
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  className?: string
  icon?: React.ReactNode
}

export default function Button({
  children,
  variant = 'primary',
  size = 'medium',
  href,
  onClick,
  disabled = false,
  type = 'button',
  className = '',
  icon,
}: ButtonProps) {
  const baseStyles = 'button'
  
  const variantStyles = {
    primary: 'button-primary',
    secondary: 'button-secondary',
    success: 'button-success',
    outline: 'button-secondary',
  }
  
  const sizeStyles = {
    small: 'button-small',
    medium: '',
    large: 'button-large',
  }
  
  const combinedClassName = `
    ${baseStyles}
    ${variantStyles[variant]}
    ${sizeStyles[size]}
    ${className}
  `.trim()

  // If href provided, render as Link
  if (href) {
    return (
      <Link href={href} className={combinedClassName}>
        {icon && <span>{icon}</span>}
        {children}
      </Link>
    )
  }

  // Otherwise render as button
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClassName}
    >
      {icon && <span>{icon}</span>}
      {children}
    </button>
  )
}
