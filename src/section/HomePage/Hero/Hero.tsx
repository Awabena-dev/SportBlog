'use client';
import TodayBlock from '@/components/TodayBlock'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { Dispatch, SetStateAction, useEffect, useRef } from 'react'



const Hero = ({ setplayerHeight }: { setplayerHeight: Dispatch<SetStateAction<number>> }) => {

    const playerDiv = useRef<HTMLDivElement>(null)


    useEffect(() => {

        let height = 0

        function calcHeigth() {
            if (!playerDiv.current) return

            height = playerDiv.current?.offsetHeight
            setplayerHeight(height)
        }
        calcHeigth()

        addEventListener('resize', calcHeigth)

        return () => {
            removeEventListener('resize', calcHeigth)
        }
    }, [setplayerHeight])


    return (
        <section className='min-h-full w-full py-20 pt-5'>
            <div className='relative max-wrapper h-full flex justify-between'>

                {/* Player and content */}
                <div
                    ref={playerDiv}
                    className='max-wrapper w-full md:w-fit absolute left-1/2 -translate-x-1/2 z-5 '>
                    <Image
                        src={"/Hero/basketball-player.png"}
                        width={720}
                        height={540}
                        alt='player'
                        className="w-full md:w-180 aspect-square md:h-120" />

                    <div className='w-full flex flex-col items-center -translate-y-10'>
                        <h2 className='body-3  mb-4 max-w-90'>A basketball-focused platform covering the latest news,
                            top goals, and game-changing highlights from courts around the world.</h2>
                        <Button>
                            CONTNUE READING
                        </Button>
                    </div>
                </div>

                {/* ball image */}
                <Image
                    src={"/Hero/basketball.png"}
                    width={715}
                    height={513}
                    alt='basketball'
                    className=' absolute top-0 left-0' />

                {/* Title */}
                <h1 className='display-1 text-gradient font-squada-one font-bold'>
                    Top <br />
                    SCORER TO <br />
                    THE FINAL
                </h1>

                {/* today card */}
                <TodayBlock className='hidden mmd:block' />
            </div>

        </section>
    )
}

export default Hero