import { PostNewsProps } from '@/Type'
import React from 'react'

interface Props extends PostNewsProps {
    category: string,
}

const BigPost = ({ category, author, date, title, img }: Props) => {
    return (
        <div className='relative max-w-full sm:max-w-125 min-h-75 sm:min-h-150 bg-center bg-cover z-10 flex flex-col p-6 justify-between' style={{ backgroundImage: `url(${img})` }}>
            {/* overlay */}
            <div className=' absolute top-0 left-0 w-full h-full bg-black/70 -z-10'></div>
            <span className='body-1 max-w-fit py-2 px-4 text-primary-200 font-medium border border-primary-200 bg-transparent'>{category}</span>

            <div>
                <div className='flex items-center'>
                    <p className='text-white'>{`${author} - `}</p>
                    <p className='text-white'>{date}</p>
                </div>
                <h2 className='heading-2 text-white font-bold line-clamp-2'>{title}</h2>
            </div>
        </div>
    )
}

export default BigPost