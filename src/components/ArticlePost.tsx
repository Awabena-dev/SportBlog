import { ArticlePostType } from '@/Type'
import {
    Card,
    CardHeader,
    CardContent,
} from "@/components/ui/card"
import Image from 'next/image'
import CategorySpan from './CategorySpan'
import ShortInfo from './ShortInfo'

const ArticlePost = ({
    author,
    date,
    title,
    summary,
    img,
    category,
    authorImg,
}: ArticlePostType) => {
    return (
        <Card className='w-full md:max-w-92.5 shadow-none group'>
            <CardHeader className="relative p-0">
                <Image
                    src={img}
                    width={370}
                    height={270}
                    alt='Article Cover'
                    className='w-full object-cover rounded-t-xl'
                />
                {/* Category */}
                {category && (
                    <CategorySpan className='absolute top-2 right-2 z-10'>
                        {category}
                    </CategorySpan>
                )}
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/70 transition-opacity duration-300 group-hover:bg-black/60 rounded-t-xl" />
            </CardHeader>

            <CardContent className="p-4">
                {/* Author */}
                <div className='flex items-center gap-4 mb-2'>
                    <Image
                        src={authorImg}
                        width={32}
                        height={32}
                        alt={`${author} Image`}
                        className='rounded-full'
                    />
                    <h3 className='body-2 text-secondary'>{author}</h3>
                </div>

                {/* Date */}
                <ShortInfo date={date} target='date' className="mb-2" />

                {/* Title */}
                <h2 className='heading-4 text-black font-semibold line-clamp-2 mb-1'>
                    {title}
                </h2>

                {/* Summary */}
                <p className='body-2 text-secondary line-clamp-3'>
                    {summary}
                </p>
            </CardContent>
        </Card>
    )
}

export default ArticlePost
