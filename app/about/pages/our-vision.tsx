
import React from 'react'
import AboutTabs from '../components/tabs'
import HeaderChip from '../components/header-chip'

const OurVision = () => {
    return (
        <section className='max-w-7xl mx-auto z-10'>
          <div className="w-full h-full text-center flex flex-col space-y-6 items-center justify-center">
            <HeaderChip text="our standards"/>
            <div className='flex flex-col z-10 space-y-8 items-center justify-center w-full'>
                <h2 className='text-5xl font-bold'>The Fuel for <span>Our</span> <span>Vision</span></h2>
                <p className='text-md md:text-xl'>Driven by vision, we provide comprehensive solutions to meet all your hiring needs.</p>
            </div>
            <AboutTabs/>
          </div>
        </section>
    )
}

export default OurVision