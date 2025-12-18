import { SimpleNews } from '@/Type'
import { cn } from '@/lib/utils'
import ShortInfo from './ShortInfo'

interface SimpleNewsCardProps extends SimpleNews {
    className?: string
}

const SimpleNewsCard = ({
    cover,
    date,
    title,
    className,
}: SimpleNewsCardProps) => {
    return (
        <article
            className={cn(
                'relative w-67.5 h-57.5 rounded-xl overflow-hidden flex flex-col justify-end px-8 py-4 bg-cover bg-center',
                className
            )}
            style={{ backgroundImage: `url(${cover})` }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 z-10 bg-linear-to-b from-transparent to-primary-50" />

            {/* Content */}
            <div className="relative z-20">
                <ShortInfo date={date} target="date" />
                <h3 className="body-4 text-black line-clamp-2">
                    {title}
                </h3>
            </div>
        </article>
    )
}

export default SimpleNewsCard
