import { PostNewsProps } from '@/Type'
import CategorySpan from './CategorySpan'
import ShortInfo from './ShortInfo'
import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'

type PostSize = 'lg' | 'md'

interface BigPostProps extends PostNewsProps {
    category?: string
    size?: PostSize
    className?: string
}

const postVariants = cva(
    'relative w-full bg-center bg-cover flex flex-col overflow-hidden rounded-xl',
    {
        variants: {
            size: {
                md: 'sm:max-w-[270px] min-h-[160px] sm:min-h-[300px] p-4',
                lg: 'sm:max-w-[520px] min-h-[280px] sm:min-h-[420px] p-6',
            },
        },
        defaultVariants: { size: 'lg' },
    }
)

const BigPost = ({ category, author, title, img, size = 'lg', className }: BigPostProps) => {
    return (
        <div
            className={cn(
                postVariants({ size }),
                category ? 'justify-between' : 'justify-end',
                'group cursor-pointer',
                className
            )}
            style={{ backgroundImage: `url(${img})` }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/70 transition-opacity duration-300 group-hover:bg-black/60" />

            {/* Content */}
            <div className="relative z-10 flex h-full flex-col justify-between">
                {category && <CategorySpan>{category}</CategorySpan>}

                <div className="space-y-2">
                    {author && (
                        <ShortInfo
                            author={author}
                            target="author"
                            className="text-primary-50"
                        />
                    )}

                    <h2
                        className={cn(
                            size === 'lg'
                                ? 'heading-2 text-white font-bold line-clamp-2'
                                : 'body-4 text-white font-medium line-clamp-2'
                        )}
                    >
                        {title}
                    </h2>
                </div>
            </div>
        </div>
    )
}

export default BigPost
