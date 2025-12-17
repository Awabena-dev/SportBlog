import { PostNewsProps } from '@/Type'
import { cn } from '@/lib/utils';
import Image from 'next/image'
import React from 'react'
import ShortInfo from './ShortInfo';

type NewsPostVariant = 'full' | 'simple'


interface Props extends PostNewsProps {
    variants?: NewsPostVariant;
}


const NewsPost = ({ author, date, title, summary, img, variants = 'simple' }: Props) => {
    return (
        <div className='max-w-125 max-h-37.5 flex gap-x-4'>
            <Image src={img} width={235} height={150} alt='cover'
                className={cn(variants === 'full'
                    ? 'w-36.5 md:w-50 aspect-video'
                    : 'w-26.5 md:w-18.75'
                )} />

            <div className={
                cn('flex flex-col gap-y-2 py-1',
                    variants === 'full'
                        ? 'border-t border-primary-600'
                        : 'border-t-0 ')} >
                {/* author and date */}
                <ShortInfo author={author} date={date} target={'both'} className='text-secondary' />

                {/* title */}
                <h2 className={cn(variants === 'full'
                    ? 'body-3 text-secondray font-bold line-clamp-2'
                    : 'body-5 text-secondray font-semibold line-clamp-2')}>
                    {title}
                </h2>

                {/* summary */}
                <p className='body-5 text-secondary-light line-clamp-3'>{summary}</p>
            </div>
        </div>
    )
}

export default NewsPost