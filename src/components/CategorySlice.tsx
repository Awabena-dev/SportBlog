import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'

interface Props {
    label: string,
    imgSrc: string,
    revers?: boolean,
    className?: string
}


const CategorySlice = ({
    label,
    imgSrc,
    className,
    revers = false
}: Props) => {
    return (
        <div className={cn('max-w-67.5 flex flex-col gap-y-6', revers ? "flex-col-reverse" : "flex-col", className)}>
            <div className='w-full h-30 bg-primary-200 rounded-[6px] flex items-center justify-center'>
                <h3 className='heading-2 bg-linear-to-b from-secondary to-primary-600 bg-clip-text text-transparent'>{label}</h3>
            </div>

            <Image src={imgSrc} width={270} height={288} alt={`${label} category`} />
        </div>
    )
}

export default CategorySlice