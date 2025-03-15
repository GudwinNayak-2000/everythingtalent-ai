import React from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react';

type Props = {
    title: string;
    description: string;
}

const OverlayCard = ({ title, description }: Props) => {
  return (
    <div className="mx-auto flex min-h-screen max-w-screen-sm items-center justify-center">
  <div className="h-36 w-full rounded-3xl  bg-gradient-to-tr from-[#0EA5E9] via-[#E879F9] to-[#FACC15] p-1">
    <div className="flex h-full w-full rounded-3xl items-center justify-center bg-gray-800 back">
      <h1 className="text-2xl font-black text-white">{title}</h1>
      <p className="text-gray-500">{description}</p>
      <Button className="">Start Here
                <ArrowRight/>
       </Button>
    </div>
  </div>
</div>
  )
}

export default OverlayCard