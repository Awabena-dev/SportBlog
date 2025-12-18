"use client"
import { cn } from '@/lib/utils'
import { X } from 'lucide-react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// *------------------------------ Type -------------------------*
type navLinks = {
    id: number;
    path: string;
    name: string;
}

interface mobileNavProp {
    isOpen: boolean
    toggle: () => void
    navLinks: navLinks[]
}

// *------------------------------ Compent -------------------------*



const MobileNav = ({ isOpen, toggle, navLinks }: mobileNavProp) => {
    const path = usePathname();

    return (
        <>
            <div onClick={() => toggle()} className={cn(' fixed top-0 left-0 w-full h-full bg-primary-50/60 backdrop-blur-sm z-10 transition-all duration-150', isOpen ? "translate-x-0" : "translate-x-full")}></div>
            <div className={cn('w-[60%] h-full py-6 px-4 bg-primary-400 fixed top-0 right-0 z-50 transition-all duration-300 delay-150', isOpen ? "translate-x-0" : "translate-x-full")}>

                {/* close menu */}
                <div>
                    <button onClick={toggle} aria-label="Close menu" className='cursor-pointer'>
                        <X className="size-6 mb-6" />
                    </button>
                </div>

                {/* Navlinks */}
                <nav>
                    <ul className='flex flex-col gap-y-2.5'>
                        {navLinks.map((link) => {
                            const isActive = path === link.path;

                            return <li key={link.id}
                                className={cn(
                                    'text-2xl text-secondary/60 font-normal hover:text-black hover:font-bold transition-all duration-300',
                                    isActive && "text-black font-bold"
                                )}>
                                <Link href={link.path}>{link.name}</Link>
                            </li>
                        })}
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default MobileNav