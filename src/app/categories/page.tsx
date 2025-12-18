import NavigationTrail from '@/components/NavigationTrail'
import { getCategories } from '@/lib/api/categories'
import CategoriesBlock from '@/section/CategoriesPage/CategoriesBlock'
import React from 'react'




async function page() {
    const categories = await getCategories()
    return (
        <main className='max-wrapper pt-15'>
            <NavigationTrail />
            <CategoriesBlock data={categories} />
        </main>
    )
}

export default page