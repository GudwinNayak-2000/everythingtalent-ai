
import React from 'react'
import AboutTabs from '../components/tabs'
import HeaderChip from '../components/header-chip'

const OurVision = () => {
    return (
        <section className='relative w-full mx-auto max-w-7xl justify-items-center items-center py-10'>
          <div className="w-full flex flex-col space-y-6 items-center justify-center">
            <HeaderChip text="our standards"/>
            <div className='flex flex-col space-y-8 items-center justify-center w-full'>
                <h2 className='text-5xl font-bold'>The Fuel for <span>Our</span> <span>Vision</span></h2>
                <p className='text-xl'>Driven by vision, we provide comprehensive solutions to meet all your hiring needs.</p>
            </div>
            <AboutTabs/>
          </div>
        </section>
    )
}

export default OurVision