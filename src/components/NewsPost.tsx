import { PostNewsProps } from '@/Type'
import Image from 'next/image'
import React from 'react'

const NewsPost = ({ author, date, title, summary, img }: PostNewsProps) => {
    return (
        <div className='max-w-125 max-h-37.5 flex gap-x-4'>
            <Image src={img} width={235} height={150} alt='cover' className='w-36.5 md:w-50 aspect-video' />

            <div className='flex flex-col gap-y-2 py-1 border-t border-primary-600'>
                {/* author and date */}
                <div className='flex items-center'>
                    <p className='text-secondary/60 body-6 font-medium'>{`${author} -`}</p>
                    <p className='text-secondary/60 body-6 font-medium'>{date}</p>
                </div>

                {/* title */}
                <h2 className='body-3 text-secondray font-bold line-clamp-2'>{title}</h2>

                {/* summary */}
                <p className='body-5 text-secondary-light line-clamp-3'>{summary}</p>
            </div>
        </div>
    )
}

export default NewsPost