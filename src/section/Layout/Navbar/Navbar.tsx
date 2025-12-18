"use client";

import { Button } from '@/components/ui/button'
import { Search, Menu } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import MobileNav from './MobileNav'
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';


// Navbar Links Update Her
const navLinks = [
    {
        id: 1,
        path: '/',
        name: "Home"
    },
    {
        id: 2,
        path: '/categories',
        name: "Category"
    },
    {
        id: 3,
        path: '/Trending',
        name: "Trending News"
    },
    {
        id: 4,
        path: '/Recent',
        name: "Recent News"
    },
    {
        id: 5,
        path: '/Ranking',
        name: "Ranking!"
    },
    {
        id: 6,
        path: '/Articales',
        name: "Articale"
    },
]


function Navbar() {

    const [isOpen, setisOpen] = useState(false);
    const path = usePathname();

    // toggle the open/close menu.
    const toggle = () => { setisOpen(prev => !prev); };

    return (
        <header className='fixed bg-primary-50 top-0 left-0 w-full  h-23 z-99'>
            <div className='max-wrapper flex items-center justify-between h-full'>

                {/* Logo */}
                <Image src={"/Layout/logo.svg"} width={154} height={42} alt='Logo' className='w-24 h-6.5 md:w-38.5 md:h-10.5' />

                {/* Desktop Navigation */}
                <nav>
                    <ul className=' hidden md:flex items-center gap-3.5'>
                        {navLinks.map((link) => {

                            const isActive = path === link.path;

                            return (
                                <li key={link.id} className={cn(
                                    'body-1 text-secondary/60 font-normal hover:text-black hover:font-bold transition-all duration-300',
                                    isActive && "text-black font-bold"
                                )}><Link href={link.path}>{link.name}</Link></li>
                            )
                        })}
                    </ul>
                </nav>


                {/* Serch button */}
                <div className='flex items-center gap-4'>
                    <Button
                        variant={'Primary'}
                        size={'lg'}
                        className='p-2 md:py-2.5 md:px-3.5'>
                        <Search className=' size-5 md:size-4' />
                        <p className=' hidden md:block'>Search</p>
                    </Button>

                    {/* Menu */}
                    <div onClick={() => { toggle() }} className='block md:hidden'>
                        <Menu className='size-5' />
                    </div>
                </div>

                {/* Mobile Navbar(HumberMenu) */}
                <MobileNav isOpen={isOpen} toggle={toggle} navLinks={navLinks} />

            </div>
        </header>
    );
}

export default Navbar