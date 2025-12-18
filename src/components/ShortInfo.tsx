import { cn } from '@/lib/utils'

const monthsName = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
]

interface ShortInfoProps {
    author?: string
    date?: string
    target: 'date' | 'author' | 'both'
    className?: string
}

function formatText(
    target: ShortInfoProps['target'],
    author?: string,
    date?: string
) {
    let dateText = ""
    let authorText = ""

    if (date) {
        const parsedDate = new Date(date)
        if (!isNaN(parsedDate.getTime())) {
            const year = parsedDate.getFullYear()
            const day = parsedDate.getDate()
            const monthName = monthsName[parsedDate.getMonth()]
            dateText = `${year} ${day} ${monthName}`
        }
    }

    if (author) {
        const parts = author.trim().split(" ")
        if (parts.length >= 2) {
            authorText = `${parts[0]} ${parts[1][0]}.`
        } else {
            authorText = parts[0]
        }
    }

    if (target === 'date') return dateText
    if (target === 'author') return authorText
    console.log(`${authorText} - ${dateText}`)
    return `${authorText} - ${dateText}`
}

const ShortInfo = ({ author, date, target, className }: ShortInfoProps) => {
    const text = formatText(target, author, date)

    if (!text) return null

    return (
        <p className={cn("text-secondary/60 body-6 font-medium", className)}>
            {text}
        </p>
    )
}

export default ShortInfo
