import React from 'react'
import StoryCard from '../components/story-card'
import { storyContent } from '@/constants/story-content'
import Image from 'next/image'
import OurStory from '@/assets/images/our-story.svg'
const StorySection = () => {
    return (
        <div className='grid grid-cols-2 max-w-7xl mx-auto justify-items-center items-center py-10'>
            <div className='flex flex-col justify-center space-y-6 h-full'>
                <h2 className='text-5xl font-bold'>The Story Behind Us</h2>
                <p className='text-lg max-w-xl'>It all started with one question: What if hiring didn't have to feel like gambling on a hunch?</p>
                <div className='grid grid-cols-2 gap-6 max-w-xl'>
                    {storyContent.map((item) => (
                        <StoryCard key={item.id} item={item} />
                    ))}
                </div>
            </div>
            <div className="relative h-[500px] transition-transform duration-200 hover:scale-x-105 overflow-hidden rounded-2xl">
                <Image alt='' src={OurStory} width={500} height={500} className='h-[500px] w-[530px] shadow-md rounded-md'/>
            </div>
        </div>
    )
}

export default StorySection