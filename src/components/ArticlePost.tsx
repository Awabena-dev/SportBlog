import { ArticlePostType } from '@/Type'
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from 'next/image'
import CategorySpan from './CategorySpan'
import ShortInfo from './ShortInfo'


const ArticlePost = ({ author, date, title, summary, img, category, authorImg }: ArticlePostType) => {
    return (
        <Card className='group w-full md:max-w-92.5 shadow-none'>
            <CardHeader>
                <div className='relative'>
                    <Image
                        src={img}
                        width={370}
                        height={270}
                        alt='Article Cover'
                        className='w-full sm:max-w-92.5'
                    />
                    {/* category span */}
                    <CategorySpan className=' absolute top-2 right-2 z-10'>{category}</CategorySpan>
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/70 transition-opacity duration-300 group-hover:bg-black/60" />
                </div>
            </CardHeader>
            <CardContent>
                {/* authe name & image */}
                <div className='flex items-center gap-4'>
                    <Image
                        src={authorImg}
                        width={32}
                        height={32}
                        alt={`${author} Image`}
                        className=' rounded-full mb-2' />
                    <h3 className='body-2 text-secondary'>{author}</h3>

                </div>

                {/* date */}
                <ShortInfo date={date} target='date' />

                <h2 className='heading-4 my-2 text-black font-semibold line-clamp-2'>{title}</h2>
                <p className='body-2 text-secondary'>{summary}</p>
            </CardContent>
        </Card>
    )
}

export default ArticlePost