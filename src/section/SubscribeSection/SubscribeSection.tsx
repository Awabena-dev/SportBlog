import React from 'react'
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button'
import { MoveUpRight } from 'lucide-react'
import Image from 'next/image'

const SubscribeSection = () => {
    return (
        <section className="w-full bg-primary-200 pt-20 pb-6">
            <div className="max-wrapper flex items-center justify-center md:justify-between flex-col md:flex-row ">
                <div className="w-full max-w-lg space-y-6">

                    {/* Title */}
                    <h2 className="heading-1 bg-linear-to-b from-secondary to-primary-600 bg-clip-text text-transparent font-squada-one">
                        NEWSLETTER <br /> SUBSCRIPTION
                    </h2>

                    {/* Form */}
                    <form className="flex items-center">
                        <Input
                            type="email"
                            required
                            placeholder="you@example.com"
                            className="h-14 rounded-r-none border-r-0 border-secondary shadow-none focus-visible:ring-0"
                        />

                        <Button
                            type="submit"
                            aria-label="Subscribe to newsletter"
                            className="h-14 px-5 rounded-l-none"
                        >
                            <MoveUpRight className="w-5 h-5" />
                        </Button>
                    </form>

                </div>

                {/* Image */}
                <Image
                    src={'/Football/usa-football.png'}
                    width={520}
                    height={385}
                    alt='usa football'
                    className='w-full sm:max-w-125' />
            </div>
        </section>
    )
}

export default SubscribeSection
