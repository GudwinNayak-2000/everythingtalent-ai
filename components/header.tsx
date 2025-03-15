"use client"

import Image from 'next/image'
import Logo from '@/assets/icons/logo.webp'
import { ThemeToggleBtn } from './theme-toggle-btn'
import { ArrowRight, ChevronRight } from 'lucide-react'
import { Button } from './ui/button'



const Header = () => {
    return (
        <header className='fixed w-full top-0 left-0 z-99 my-1 bg-slate-100 dark:bg-slate-950 lg:bg-transparent dark:lg:bg-transparent backdrop-blur '>
            <div className='container mx-auto px-16'>
                <nav className='w-full h-12 px-6 flex items-center justify-between'>
                    <div className='flex h-full py-[2px] items-center space-x-4 border-2 border-slate-700/30 dark:border-slate-300/30 rounded-lg px-4'>
                        <div className='flex items-center'>
                            <Image src={Logo} alt='logo' width={32} height={32} />
                        </div>
                        <div className='h-6 w-[0.75px] bg-slate-700/30 dark:bg-slate-300/30'></div>
                        <ul className='flex h-full items-center space-x-8'>
                            <li>
                                <a href="/home">Home</a>
                            </li>
                            <li>
                                <a href="/products">Products</a>
                            </li>
                            <li>
                                <a href="">Solutions</a>
                            </li>
                            <li>
                                <a href="/pricing">Pricing</a>
                            </li>
                            <li>
                                <a href="/blog">Blog</a>
                            </li>
                            <li>
                                <a href="/support">Support</a>
                            </li>
                            <li>
                                <a href="/about">About</a>
                            </li>
                        </ul>
                    </div>
                    <div className='flex h-full items-center space-x-4 border-2 border-slate-700/30 dark:border-slate-300/30 rounded-lg px-1'>
                        <div className='flex items-center gap-2'>
                          <Button variant="ghost" className='gap-4 w-fit h-fit whitespace-nowrap ring-offset-background focus-visible:outline-none 
                           focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none 
                           disabled:opacity-50 group relative inline-flex animate-rainbow cursor-pointer items-center justify-center
                            bg-[length:200%] font-medium  transition-all duration-500 ease-in-out
                          /* Added white border */ hover:border-none before:absolute before:bottom-[-20%] before:left-1/2 
                           before:z-0 before:h-1/5 before:w-3/5 before:-translate-x-1/2 before:animate-rainbow 
                           before:bg-[linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))] 
                           before:bg-[length:200%] before:[filter:blur(calc(0.8*1rem))] 
                           before:opacity-75 before:transition-opacity before:duration-1000 hover:before:opacity-100 hover:scale-[1.02] 
                            after:absolute after:inset-0 after:rounded-md after:p-[2px] after:bg-[linear-gradient(121.31deg,#8B5CF6_-12.16%,#EC4899_48.37%,#F59E0B_112.89%)] 
                            after:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] after:[-webkit-mask-composite:destination-out] after:[mask-composite:exclude] after:opacity-0 after:transition-opacity after:duration-300 hover:after:opacity-100
                           dark:bg-transparent bg-white text-black dark:text-white dark:hover:ring-0 [&>span]:relative [&>span]:z-10 rounded-md px-8 text-sm sm:text-md'>
                            Request a Demo
                            <ChevronRight className="w-6 h-6"/>
                          </Button>
                          <ThemeToggleBtn />
                           <Button variant="ghost" className='gap-4 w-fit h-fit whitespace-nowrap ring-offset-background focus-visible:outline-none 
                           focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none 
                           disabled:opacity-50 group relative inline-flex animate-rainbow cursor-pointer items-center justify-center
                            bg-[length:200%] font-medium  transition-all duration-500 ease-in-out
                          /* Added white border */ hover:border-none before:absolute before:bottom-[-20%] before:left-1/2 
                           before:z-0 before:h-1/5 before:w-3/5 before:-translate-x-1/2 before:animate-rainbow 
                           before:bg-[linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))] 
                           before:bg-[length:200%] before:[filter:blur(calc(0.8*1rem))] 
                           before:opacity-75 before:transition-opacity before:duration-1000 hover:before:opacity-100 hover:scale-[1.02] 
                            after:absolute after:inset-0 after:rounded-md after:p-[2px] after:bg-[linear-gradient(121.31deg,#8B5CF6_-12.16%,#EC4899_48.37%,#F59E0B_112.89%)] 
                            after:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] after:[-webkit-mask-composite:destination-out] after:[mask-composite:exclude] after:opacity-0 after:transition-opacity after:duration-300 hover:after:opacity-100
                           dark:bg-white bg-white text-black dark:text-black dark:hover:ring-0 [&>span]:relative [&>span]:z-10 rounded-md px-8 text-sm sm:text-md' >
                            Login
                            <ArrowRight className='w-6 h-6'/>
                          </Button>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header