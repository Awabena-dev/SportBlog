import { PostNewsProps } from '@/Type'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import ShortInfo from './ShortInfo'

type NewsPostVariant = 'full' | 'simple'

interface NewsPostProps extends PostNewsProps {
    variant?: NewsPostVariant
}

const NewsPost = ({
    author,
    date,
    title,
    summary,
    img,
    variant = 'simple',
}: NewsPostProps) => {
    const isFull = variant === 'full'

    return (
        <article className="max-w-125 flex gap-x-4">
            <Image
                src={img}
                width={235}
                height={150}
                alt={title}
                sizes="(min-width: 768px) 200px, 120px"
                className={cn(
                    isFull
                        ? 'w-36.5 md:w-50 aspect-video'
                        : 'w-26.5 md:w-18.75'
                )}
            />

            <div
                className={cn(
                    'flex flex-col gap-y-2 py-1',
                    isFull && 'border-t border-primary-600'
                )}
            >
                {/* Author & Date */}
                <ShortInfo
                    author={author}
                    date={date}
                    target="both"
                    className="text-secondary"
                />

                {/* Title */}
                <h3
                    className={cn(
                        isFull
                            ? 'body-3 text-secondary font-bold line-clamp-2'
                            : 'body-5 text-secondary font-semibold line-clamp-2'
                    )}
                >
                    {title}
                </h3>

                {/* Summary (only full) */}
                {isFull && (
                    <p className="body-5 text-secondary-light line-clamp-3">
                        {summary}
                    </p>
                )}
            </div>
        </article>
    )
}

export default NewsPost
