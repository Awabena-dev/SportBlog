import ArticlePost from '@/components/ArticlePost'
import { sportsNews } from '@/content'

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

const SportArticles = () => {
    return (
        <section className='pb-20'>
            <div className='max-wrapper'>


                <Carousel>
                    <CarouselContent>
                        {Array(7).fill('_').map((art, index) => {
                            return (
                                <CarouselItem className='basis-full sm:basis-1/2 md:basis-1/3'>
                                    <ArticlePost
                                        key={index}
                                        category={"foot ball"}
                                        img={sportsNews[0].img}
                                        title={sportsNews[0].title}
                                        author={sportsNews[0].author}
                                        summary={sportsNews[0].summary}
                                        date={sportsNews[0].date}
                                        authorImg='/avatar/1.png' />
                                </CarouselItem>
                            )
                        })}

                    </CarouselContent>
                    <div className='w-full  flex items-center justify-end py-4'>
                        <div className='flex items-center gap-x-4'>
                            <CarouselPrevious

                                variant='secondary'
                                size={'moveIcon'}
                                className=' rounded-[5px] text-primary-50 w-17.5 h-12.5 relative'>

                            </CarouselPrevious>
                            <CarouselNext
                                variant='secondary'
                                size={'moveIcon'}
                                className=' rounded-[5px] text-primary-50 w-17.5 h-12.5 relative' />
                        </div>
                    </div>
                </Carousel>

            </div>
        </section>
    )
}

export default SportArticles