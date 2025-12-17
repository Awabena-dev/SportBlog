'use client'
import { cn } from '@/lib/utils'
import React, { useEffect, useState } from 'react'

const monthsName = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
]

interface Props {
    author?: string
    date?: string
    target: 'date' | 'author' | 'both'
    className?: string
}

const ShortInfo = ({ author, date, target, className }: Props) => {
    const [formattedText, setFormattedText] = useState("")

    function formatData(author?: string, date?: string) {
        if (!author && !date) return ""

        let dateText = ""
        let authorText = ""

        if (date) {
            const year = date.slice(0, 4)
            const monthIndex = Number(date.slice(5, 7)) - 1
            const day = date.slice(8, 10)

            const monthName = monthsName[monthIndex] ?? "January"
            dateText = `${year} ${day} ${monthName}`
        }

        if (author) {
            authorText = author.split(" ")[0]
        }

        if (target === 'date') return dateText
        if (target === 'author') return authorText

        return `${authorText} - ${dateText}`
    }

    useEffect(() => {
        setFormattedText(formatData(author, date))
    }, [author, date, target])

    return (
        <div className="flex items-center">
            <p className={cn("text-secondary/60 body-6 font-medium", className)}>
                {formattedText}
            </p>
        </div>
    )
}

export default ShortInfo
