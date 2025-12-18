import TodayBlock from '@/components/TodayBlock'
import { cn } from '@/lib/utils'

const TodayNews = ({ playerHeight }: { playerHeight: number }) => {
    return (
        <div
            className={cn('max-wrapper block mmd:hidden')}
            style={{ paddingTop: playerHeight / 1.5 }}
        >
            <TodayBlock />
        </div>
    )
}

export default TodayNews
