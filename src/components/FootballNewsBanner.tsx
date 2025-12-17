import { PostNewsProps } from '@/Type'
import React from 'react'
import CategorySpan from './CategorySpan'
import ShortInfo from './ShortInfo'

interface Props extends PostNewsProps {
    category: string
}

const Banner = ({ author, date, title, summary, img, category }: Props) => {
    return (
        <div className='w-full relative h-125 bg-cover bg-center flex flex-col justify-between px-8 py-4 z-20' style={{ backgroundImage: `url(${img})` }}>
            {/* Overlay */}
            <div className='w-full h-full absolute top-0 left-0 bg-black/70 -z-10'></div>
            {/* Category */}
            <CategorySpan>{category}</CategorySpan>

            <div className='flex flex-col gap-y-4'>
                <ShortInfo target='both' date={date} author={author} className='text-primary-50' />
                <h2 className='heading-2 max-w-[80%] line-clamp-2 text-primary-50 font-bold font-squada-one'>{title}</h2>
                <p className='body-1 max-w-[80%] line-clamp-3 text-primary-50'>{summary}</p>
            </div>

            {/* ButtonGroup */}
        </div>
    )
}

export default Banner