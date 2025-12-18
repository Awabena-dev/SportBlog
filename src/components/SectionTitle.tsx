import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface TitleProps {
    children: ReactNode
    className?: string
}

const Title = ({ children, className }: TitleProps) => {
    return (
        <h2 className={cn('heading-3 text-secondary font-medium', className)}>
            {children}
        </h2>
    )
}

export default Title
