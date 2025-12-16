import CategorySlice from '@/components/CategorySlice'
import Title from '@/components/SectionTitle'
import React from 'react'

const Category = () => {
    return (
        <section className='max-wrapper min-h-screen'>
            <Title>Category</Title>

            {/* category silces */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 justify-items-center place-items-center gap-6 mt-6'>
                <CategorySlice label='FOOTBALL' imgSrc='/Hero/f1-car.png' />
                <CategorySlice label='BASKETBALL' imgSrc='/Hero/f1-car.png' revers={true} />
                <CategorySlice label='CAR SPORT' imgSrc='/Hero/f1-car.png' />
                <CategorySlice label='TABLE TENNIS' imgSrc='/Hero/f1-car.png' revers={true} className='flex md:hidden xl:flex' />
            </div>
        </section>
    )
}

export default Category