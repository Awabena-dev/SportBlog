'use client'
import { CategoryProp } from '@/Type'
import CategoryCard from '@/components/CategoryCard'
import SearchBox from '@/components/SearchBox'
import Title from '@/components/SectionTitle'
import { useState } from 'react'




const CategoriesBlock = ({ data }: { data: CategoryProp[] }) => {


    const [searchValue, setSearchValue] = useState('');

    const filteredCategories = data.filter(cat => (
        cat.name.toLowerCase().includes(searchValue?.toLowerCase())
    ))

    return (
        <section className='min-h-screen'>
            <div className='max-wrapper'>
                <Title>Categories</Title>
                <p className='body-3 text-secondary-light'>Browse all different categories</p>

                {/* SearchBox */}
                <SearchBox
                    categoriesNum={15}
                    setSearchValue={setSearchValue}
                    className='mt-6' />

                {/* categories */}
                <div className='flex mt-6 flex-wrap gap-4 justify-center'>
                    {filteredCategories.map((cat) => (
                        <CategoryCard
                            key={cat.id}
                            name={cat.name}
                            cover={cat.cover}
                            slug={cat.slug} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default CategoriesBlock