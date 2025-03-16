import { Button } from '@/components/ui/button'
import React from 'react'
import HeaderChip from '../components/header-chip'
import { Mail } from 'lucide-react'
import StackingCard from '../components/stacking-card'

const OurJourney = () => {
  return (
    <section className='relative w-full mx-auto md:max-w-7xl justify-items-center items-center py-10'>
       <div className="flex flex-col space-y-4 items-center justify-center">
        <HeaderChip text="our values & milestones"/>
       <h2 className='text-5xl font-bold'>Our <span className='bg-gradient-to-r from-fuchsia-500 via-blue-500 to-amber-400 bg-clip-text text-transparent'>Journey</span> </h2>
        <p className='text-lg max-w-xl w-full text-center'>Explore the milestones that have shaped our path to innovation, where every step brings us closer to transforming the future.</p>
        <Button className='gap-4 py-3 w-fit h-fit whitespace-nowrap ring-offset-background focus-visible:outline-none 
                           focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none 
                           disabled:opacity-50 group relative hidden  md:inline-flex animate-rainbow cursor-pointer items-center justify-center
                            bg-[length:200%] font-medium  transition-all duration-500 ease-in-out
                          /* Added white border */ hover:border-none before:absolute before:bottom-[-20%] before:left-1/2 
                           before:z-0 before:h-1/5 before:w-3/5 before:-translate-x-1/2 before:animate-rainbow 
                           before:bg-[linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))] 
                           before:bg-[length:200%] before:[filter:blur(calc(0.8*1rem))] 
                           before:opacity-75 before:transition-opacity before:duration-1000 hover:before:opacity-100 hover:scale-[1.02] 
                            after:absolute after:inset-0 after:rounded-md after:p-[2px] after:bg-[linear-gradient(121.31deg,#8B5CF6_-12.16%,#EC4899_48.37%,#F59E0B_112.89%)] 
                            after:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] after:[-webkit-mask-composite:destination-out] after:[mask-composite:exclude] after:opacity-0 after:transition-opacity after:duration-300 hover:after:opacity-100
                           dark:bg-transparent bg-black text-white dark:text-white dark:hover:ring-0 [&>span]:relative [&>span]:z-10 rounded-md px-8 text-sm sm:text-md'>
            Subscribe to Updates
            <Mail/>
        </Button>
       </div>
       <StackingCard/>
    </section>
  )
}

export default OurJourney