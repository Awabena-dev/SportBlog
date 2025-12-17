'use client'
import Banner from '@/components/FootballNewsBanner'
import { footballNews } from '@/content'
import { useEffect, useState } from 'react'

import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { MoveLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'


const FootballNews = () => {

    const [api, setapi] = useState<CarouselApi>();
    const [selectedIndex, setselectedIndex] = useState(0);

    useEffect(() => {
        if (!api) return;

        const onSelect = () => setselectedIndex(api.selectedScrollSnap());

        api.on('select', onSelect);

        api.on('reInit', onSelect);

        return () => {
            api.off('select', onSelect);
            api.off('reInit', onSelect);
        }
    }, [api]);


    return (
        <section className='max-wrapper py-20'>
            <Carousel setApi={setapi}>
                <CarouselContent>
                    <CarouselItem>
                        <Banner author={'Awab abd Elmohsen'} date={footballNews[0].date} title={footballNews[0].title} summary={footballNews[0].summary} category={footballNews[0].category} img={footballNews[0].img} />
                    </CarouselItem>
                    <CarouselItem>
                        <Banner author={'Awab abd Elmohsen'} date={footballNews[0].date} title={footballNews[0].title} summary={footballNews[0].summary} category={footballNews[0].category} img={footballNews[0].img} />
                    </CarouselItem>
                    <CarouselItem>
                        <Banner author={'Awab abd Elmohsen'} date={footballNews[0].date} title={footballNews[0].title} summary={footballNews[0].summary} category={footballNews[0].category} img={footballNews[0].img} />
                    </CarouselItem>
                    <CarouselItem>
                        <Banner author={'Awab abd Elmohsen'} date={footballNews[0].date} title={footballNews[0].title} summary={footballNews[0].summary} category={footballNews[0].category} img={footballNews[0].img} />
                    </CarouselItem>
                </CarouselContent>
                <div className='w-full  flex items-center justify-end py-4'>
                    <div className='flex items-center gap-x-4'>
                        <CarouselPrevious

                            variant='secondary'
                            size={'moveIcon'}
                            className=' rounded-[5px] text-primary-50 w-17.5 h-12.5 relative'>

                        </CarouselPrevious>
                        {[1, 2, 3, 4].map((btn, index) => (
                            <Button
                                onClick={() => { api?.scrollTo(index) }}
                                size={'navBtn'}
                                key={index}
                                className={cn(' bg-transparent text-secondary-light hover:bg-secondary hover:text-primary-50',
                                    selectedIndex === index && 'text-primary-50 bg-secondary')}>
                                {btn}
                            </Button>
                        ))}
                        <CarouselNext
                            variant='secondary'
                            size={'moveIcon'}
                            className=' rounded-[5px] text-primary-50 w-17.5 h-12.5 relative' />
                    </div>
                </div>
            </Carousel>

        </section>
    )
}

export default FootballNews