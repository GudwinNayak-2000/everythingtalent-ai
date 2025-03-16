import { WorldMap } from '@/components/ui/world-map'
import React from 'react'
import OverlayCard from '../components/overlay-card'

const OurMission = () => {
  return (
    <section className='mx-auto'>
      <div className="w-full relative">
      <WorldMap/>
      <div className='z-50'>
      <OverlayCard title="Join Our" description="Help us reimagine the future of hiring in the tech industry."/>
      </div>
      </div>
    </section>
  )
}

export default OurMission