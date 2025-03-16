import React from 'react'
import HeaderChip from '../components/header-chip'
import MasonryGrid from '../components/values-masonry'

const OurValues = () => {
  return (
    <section className='relative w-full max-w-full mx-auto md:max-w-7xl justify-items-center items-center py-10'>
        <div className='w-full flex flex-col space-y-4 items-center justify-center'>
            <HeaderChip text="our values"/>
            <h2 className='text-5xl font-bold'>Our Philosophy in <span className='bg-gradient-to-r from-fuchsia-500 via-blue-500 to-amber-400 bg-clip-text text-transparent'>Action</span></h2>
            <p className='text-lg'>At Everything Talent, Bringing Our Values to Life Through Meaningful Actions</p>
            <MasonryGrid/>

        </div>
    </section>
  )
}

export default OurValues