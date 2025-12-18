import { Facebook, Instagram, Twitter } from 'lucide-react'
import React from 'react'

const Footer = () => {
    return (
        <footer>
            <div className='max-wrapper flex items-center justify-between flex-wrap'>

                {/* shocail media */}
                <div className='flex items-center gap-x-4'>
                    <div className=' h-6 w-6 sm:h-12 sm:w-12 bg-secondary rounded-[6px] flex items-center justify-center'>
                        <Facebook className='size-3.5 sm:size-6 fill-primary-50 text-primary-50' />
                    </div>
                    <div className='h-6 w-6 sm:h-12 sm:w-12 bg-secondary rounded-[6px] flex items-center justify-center'>
                        <Instagram className='size-3.5 sm:size-6 text-primary-50' />
                    </div>
                    <div className='h-6 w-6 sm:h-12 sm:w-12 bg-secondary rounded-[6px] flex items-center justify-center'>
                        <Twitter className='size-3.5 sm:size-6 fill-primary-50 text-primary-50' />
                    </div>
                </div>

                {/* Copy Right */}
                <p className='body-6'>{'all rights revered @SportNews 2025'}</p>
            </div>
        </footer>
    )
}

export default Footer