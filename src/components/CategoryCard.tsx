import React from 'react'
import { Card, CardContent, CardHeader } from './ui/card'
import Image from 'next/image'
import Link from 'next/link'

interface CatProps {
    name: string
    cover: string,
    slug: string,
    onClick?: () => void
}

const CategoryCard = ({ name, cover, slug, onClick }: CatProps) => {
    return (

        <Link href={`/categories/${slug}`}>

            <Card
                onClick={onClick}
                className="
            w-full sm:w-50 
                overflow-hidden
                cursor-pointer 
                shadow-none 
                ring-2 ring-transparent 
                transition-all duration-300
                hover:ring-secondary
                "
            >
                <CardContent className="p-0">
                    <Image
                        src={cover}
                        width={250}
                        height={250}
                        alt={`${name} category image`}
                        className="
                        w-full 
                        h-40 
                        object-cover 
                        transition-transform duration-300
                        "
                    />
                </CardContent>

                <CardHeader className="p-3">
                    <h3 className="heading-4 text-secondary text-center font-semibold">
                        {name}
                    </h3>
                </CardHeader>
            </Card>
        </Link>
    )
}

export default CategoryCard
