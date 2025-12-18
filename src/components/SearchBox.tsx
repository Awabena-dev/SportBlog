'use client'

import React, { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { Search } from 'lucide-react'
import { cn } from '@/lib/utils'

interface SearchProps {
    categoriesNum?: number
    setSearchValue: Dispatch<SetStateAction<string>>
    className?: string
}

const SearchBox = ({ categoriesNum, setSearchValue, className }: SearchProps) => {
    const [value, setValue] = useState('')
    const [isFocused, setIsFocused] = useState(false)

    const debounceRef = useRef<NodeJS.Timeout | null>(null)

    // 🔹 Debounce search
    useEffect(() => {
        if (debounceRef.current) {
            clearTimeout(debounceRef.current)
        }

        debounceRef.current = setTimeout(() => {
            setSearchValue(value)
        }, 400)

        return () => {
            if (debounceRef.current) {
                clearTimeout(debounceRef.current)
            }
        }
    }, [value, setSearchValue])

    return (
        <div className={cn('flex items-center', className)}>
            <Input
                type="search"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                placeholder={`Search in ${categoriesNum ?? 0} categories`}
                className={cn(
                    'h-12 sm:h-15 border-2 border-r-0 rounded-[5px]',
                    isFocused && 'border-primary'
                )}
            />

            <Button
                onClick={() => setSearchValue(value)}
                variant="secondary"
                size="icon-lg"
                className="rounded-bl-0 rounded-tl-0 h-12 sm:h-15"
            >
                <Search className="size-6 text-primary-50" />
            </Button>
        </div>
    )
}

export default SearchBox
