import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <>
     <div className='flex items-center justify-around w-screen'>
        <div className='flex flex-col items-start justify-center text-start w-[40%]'>
            <p className='text-3xl leading-10 mb-6 w-[95%]'>Learn English on your terms: Flexible online courses for busy lives</p>
            <p className='text-sm leading-2 mb-2'>English lessons with a private teacher - one on one in Zoom, at attractive prices suitable for every pocket.</p>
            <p className='text-sm leading-2 mb-10'>We offer maximum value for the price - we have seen improvement already in the first weeks.</p>
            <span className='flex gap-8'>
              <Link href='/signup'>
               <button className='text-sm py-2 px-12 bg-[#5D87FF] text-white hover:scale-105 transition-all duration-300 ease-out rounded-lg'>Get Started</button>
              </Link>
            <Image src='/alert.png' alt='alert' width={150} height={20} className='rounded-lg' />
            </span>
        </div>
        <Image src="/hero1.png" alt="hero_image" width={500} height={500}  />
    </div>
    <div className='flex items-center justify-around w-screen h-[90dvh]'>
    <Image src="/hero2.png" alt="hero_image" width={500} height={500}  />
        <div className='flex flex-col items-start justify-center text-start w-[40%]'>
            <p className='text-3xl leading-10 mb-6 w-[95%]'>Revolutionize your English</p>
            <p className='text-sm leading-2 mb-10'> Our goal is to enable quality learning with experienced professional teachers for all ages without affecting the daily routine, while optimally improving the English language in all areas: reading, writing, speaking, grammar, regular conversations, and more</p>
            <button className='text-sm py-2 px-12 bg-[#5D87FF] text-white hover:scale-105 transition-all duration-300 ease-out rounded-lg'>Get Started</button>
        </div>
    </div>
    </>
  )
}

export default Hero