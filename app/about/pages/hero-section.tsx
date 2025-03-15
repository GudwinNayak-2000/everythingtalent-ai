import { Button } from '@/components/ui/button'
import HeroImage from '@/assets/images/hero-image.webp'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

const HeroSection = () => {
    return (
        <section className='mx-auto px-20 relative'>
            <div className='grid grid-cols-2'>
                <div className='flex flex-col justify-evenly'>
                    <p className='uppercase font-semibold'>About us</p>
                    <h2 className='text-5xl font-bold w-full max-w-xl leading-14'>
                        Shaping the Next Generation of HR <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">Tech</span>
                        <br />
                        <span className="bg-gradient-to-r from-blue-500 via-green-500 to-yellow-500 bg-clip-text text-transparent">
                            Recruitment.
                        </span>
                    </h2>
                    <p className='w-full max-w-lg text-lg'>
                        At Everything Talent, we help you launch your recruitment into a new dimension.
                    </p>
                    <Button className=" w-[200px] h-fit py-3 whitespace-nowrap ring-offset-background focus-visible:outline-none 
                    focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none 
                    disabled:opacity-50 group relative inline-flex animate-rainbow cursor-pointer items-center justify-center
                    bg-[length:200%] font-medium text-white dark:text-black transition-all duration-500 ease-in-out
                   border-white /* Added white border */ hover:border-none before:absolute before:bottom-[-20%] before:left-1/2 
                     before:z-0 before:h-1/5 before:w-3/5 before:-translate-x-1/2 before:animate-rainbow 
                     before:bg-[linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))] before:bg-[length:200%] before:[filter:blur(calc(0.8*1rem))] 
                     before:opacity-75 before:transition-opacity before:duration-1000 hover:before:opacity-100 hover:scale-[1.02] 
                     after:absolute after:inset-0 after:rounded-md after:p-[2px] after:bg-[linear-gradient(121.31deg,#8B5CF6_-12.16%,#EC4899_48.37%,#F59E0B_112.89%)] after:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] after:[-webkit-mask-composite:destination-out] after:[mask-composite:exclude] after:opacity-0 after:transition-opacity after:duration-300 hover:after:opacity-100
                   dark:bg-white bg-black dark:hover:ring-0 [&>span]:relative [&>span]:z-10 rounded-md px-8 text-sm sm:text-md">
                        Start for Free Today
                        <ArrowRight />
                    </Button>

                </div>
                <div className="relative mx-auto w-[500px] h-[500px] p-[5px] rounded-2xl bg-gradient-to-tr from-[#0EA5E9] via-[#E879F9] to-[#FACC15]">
                    <div className="absolute -z-10 -right-20 md:-right-24 -top-20 h-[300px] w-[480px] md:h-[600px] md:w-[780px] rounded-full bg-blue-500/20 blur-3xl">
                    </div>
                    <Image src={HeroImage} alt='hero' className="rounded-2xl h-full w-full " />

                </div>
            </div>
        </section>
    )
}

export default HeroSection