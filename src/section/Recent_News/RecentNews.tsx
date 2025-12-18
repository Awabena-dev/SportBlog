import BigPost from '@/components/BigPost'
import NewsPost from '@/components/NewsPost'
import Title from '@/components/SectionTitle'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'


const bigPost = {
    auther: 'Day 5 HightLight',
    title: 'Baku 2023 World TeakWondo Championship',
    img: '/RecentNews/4.png',
    date: "2025-06-11"
}

const RecentNews = () => {
    return (
        <section className='pb-20'>
            <div className='max-wrapper flex flex-col md:flex-row md:justify-between gap-6'>

                <div>
                    <Title>Recent News</Title>
                    {/* news */}
                    <div className='flex gap-6 flex-wrap items-center'>
                        <div className='pt-6'>
                            <BigPost
                                img={bigPost.img}
                                title={bigPost.title}
                                author={bigPost.auther}
                                summary=''
                                date=''
                                size='md' />
                        </div>

                        <div className='flex flex-col gap-4'>
                            {Array(2).fill(0).map((pos, index) => (
                                <NewsPost
                                    key={index}
                                    img={bigPost.img}
                                    author={bigPost.auther}
                                    date={bigPost.date}
                                    title={bigPost.title}
                                    summary=''
                                    variant='simple' />
                            ))}
                            <Button size={'xl'} variant={'Primary'} className='max-w-fit x cursor-pointer'>
                                More
                                <ArrowRight />
                            </Button>
                        </div>
                    </div>
                </div>


                <div>
                    {/* Ranking */}
                    <Title>Rankeing</Title>

                    {/* #TODO Replace with real image ranking */}
                    <Image src={'/Category/4.png'} width={300} height={300} alt="ranking imgge" className='mt-6' />
                </div>

            </div>
        </section>
    )
}

export default RecentNews