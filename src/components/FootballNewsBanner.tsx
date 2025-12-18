import { PostNewsProps } from '@/Type'
import CategorySpan from './CategorySpan'
import ShortInfo from './ShortInfo'

interface BannerProps extends PostNewsProps {
    category: string
}

const Banner = ({
    author,
    date,
    title,
    summary,
    img,
    category,
}: BannerProps) => {
    return (
        <article
            className="relative w-full h-125 bg-cover bg-center px-8 py-4 flex flex-col justify-between"
            style={{ backgroundImage: `url(${img})` }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/70 z-0" />

            {/* Content */}
            <div className="relative z-10 flex flex-col justify-between h-full">
                <CategorySpan>{category}</CategorySpan>

                <div className="flex flex-col gap-y-4">
                    <ShortInfo
                        target='both'
                        date={date}
                        author={author}
                        className="text-primary-50"
                    />

                    <h2 className="heading-2 max-w-[80%] line-clamp-2 text-primary-50 font-bold font-squada-one">
                        {title}
                    </h2>

                    <p className="body-1 max-w-[80%] line-clamp-3 text-primary-50">
                        {summary}
                    </p>
                </div>
            </div>
        </article>
    )
}

export default Banner
