interface BadgeProps {
  children: React.ReactNode
  variant?: 'primary' | 'success' | 'warning' | 'error'
  icon?: React.ReactNode
  className?: string
}

export default function Badge({
  children,
  variant = 'primary',
  icon,
  className = '',
}: BadgeProps) {
  const variantStyles = {
    primary: 'badge-primary',
    success: 'badge-success',
    warning: 'badge-warning',
    error: 'badge-error',
  }

  const badgeClassName = `
    badge
    ${variantStyles[variant]}
    ${className}
  `.trim()

  return (
    <span className={badgeClassName}>
      {icon && <span>{icon}</span>}
      {children}
    </span>
  )
}
