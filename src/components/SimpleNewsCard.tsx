import { SimpleNews } from '@/Type'
import { cn } from '@/lib/utils'

const SimpleNewsCard = ({ cover, date, title }: SimpleNews) => {
    return (
        <div
            className={cn(
                'relative w-67.5 h-57.5 bg-cover bg-center px-8 py-4 rounded-xl flex flex-col justify-end overflow-hidden'
            )}
            style={{ backgroundImage: `url(${cover})` }}
        >
            {/* Overlay */}
            <div className='absolute inset-0 z-10 bg-linear-to-b from-transparent to-primary-50' />

            {/* Content */}
            <div className='relative z-20'>
                <p className='body-6 text-secondary font-medium line-clamp-1'>
                    {date}
                </p>
                <h2 className='text-black body-4 line-clamp-2'>
                    {title}
                </h2>
            </div>
        </div>
    )
}

export default SimpleNewsCard
