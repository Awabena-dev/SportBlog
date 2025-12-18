import { cn } from '@/lib/utils'
import React from 'react'

interface CategorySpanProps {
    children?: React.ReactNode
    className?: string
}

const CategorySpan = ({ children, className }: CategorySpanProps) => {
    return (
        <span
            className={cn(
                'body-1 max-w-fit py-2 px-4 text-primary-200 font-medium border border-primary-200 bg-transparent',
                className
            )}
        >
            {children}
        </span>
    )
}

export default CategorySpan
