interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  padding?: 'none' | 'small' | 'medium' | 'large'
  onClick?: () => void
}

export default function Card({
  children,
  className = '',
  hover = false,
  padding = 'medium',
  onClick,
}: CardProps) {
  const paddingStyles = {
    none: 'p-0',
    small: 'p-2',
    medium: '', // default from .card class
    large: 'p-4',
  }

  const cardClassName = `
    card
    ${hover ? '' : 'hover:transform-none'}
    ${paddingStyles[padding]}
    ${onClick ? 'cursor-pointer' : ''}
    ${className}
  `.trim()

  return (
    <div className={cardClassName} onClick={onClick}>
      {children}
    </div>
  )
}

interface CardHeaderProps {
  children: React.ReactNode
  className?: string
}

export function CardHeader({ children, className = '' }: CardHeaderProps) {
  return <div className={`card-header ${className}`}>{children}</div>
}

interface CardTitleProps {
  children: React.ReactNode
  className?: string
}

export function CardTitle({ children, className = '' }: CardTitleProps) {
  return <h3 className={`card-title ${className}`}>{children}</h3>
}

interface CardBodyProps {
  children: React.ReactNode
  className?: string
}

export function CardBody({ children, className = '' }: CardBodyProps) {
  return <div className={`card-body ${className}`}>{children}</div>
}

interface CardFooterProps {
  children: React.ReactNode
  className?: string
}

export function CardFooter({ children, className = '' }: CardFooterProps) {
  return <div className={`card-footer ${className}`}>{children}</div>
}
