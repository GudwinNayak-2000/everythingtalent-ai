import { Button } from '@/components/ui/button'
import React from 'react'
import HeaderChip from '../components/header-chip'
import { Mail } from 'lucide-react'
import StackingCard from '../components/stacking-card'

const OurJourney = () => {
  return (
    <section className='relative w-full mx-auto max-w-7xl justify-items-center items-center py-10'>
       <div className="flex flex-col space-y-4 items-center justify-center">
        <HeaderChip text="our journey"/>
       <h2 className='text-5xl font-bold'>Our Journey</h2>
        <p className='text-lg max-w-xl w-full text-center'>Explore the milestones that have shaped our path to innovation, where every step brings us closer to transforming the future.</p>
        <Button className='h-10  px-6 w-fit'>
            Subscribe to Updates
            <Mail/>
        </Button>
       </div>
       <StackingCard/>
    </section>
  )
}

export default OurJourney