"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'
import hero1 from "../../public/hero1.png"
import hero2 from "../../public/hero2.png"




const Hero = () => {
  return (
    <>
     <motion.div initial={{ opacity : 0 }} animate={{ opacity : 1}} exit={{ opacity : 0}} className='mt-32 md:mt-16  lg:mt-32 flex flex-col md:flex-row items-center md:justify-around justify-center w-screen md:my-8 my-16  md:gap-0 gap-4'>
        <motion.div initial={{ x : -100 , opacity : 0}} animate={ {x: 0 , opacity : 1, transition: { type : "slide" , duration : 0.2 , delay : 0.002} }} className='flex flex-col  items-start justify-center text-start md:w-[40%] w-[80%] '>
            <p className=' text-3xl lg:leading-10 md:leading-9 leading-9 mb-6 w-[95%]'>Learn English on your terms: Flexible online courses for busy lives</p>
            <p className='text-sm leading-2 mb-2'>English lessons with a private teacher - one on one in Zoom, at attractive prices suitable for every pocket.</p>
            <p className='text-sm leading-2 mb-10'>We offer maximum value for the price - we have seen improvement already in the first weeks.</p>
            <span className='flex gap-8'>
              <Link href='/signup'>
               <button className='text-sm py-2 lg:px-12 md:px-6 px-8 bg-[#5D87FF] text-white hover:scale-105 transition-all duration-300 ease-out rounded-lg'>Get Started</button>
              </Link>
              <motion.div initial={{ y : 10 , opacity : 0}} animate={ {y: 0 , opacity : 1, transition: { type : "spring" , duration : 0.2 , bounce : 0.3 , delay : 0.1} }}>
                 <Image src='/alert.png' alt='alert' width={150} height={20} className='rounded-lg'  />
              </motion.div>
            </span>
        </motion.div>
        <motion.div initial={{ x : 100 , opacity : 0}} animate={ {x: 0 , opacity : 1, transition: { type : "spring" , duration : 0.2 , bounce : 0.2 , delay : 0.002} }} className='md:w-[50%]'>
        <Image src={hero1} placeholder='blur' alt="hero_image" width={500} height={500}   />
        </motion.div>
    </motion.div>
    <div className='md:flex hidden items-center justify-around w-screen h-[90dvh] '>
      <div className='md:w-[50%]'>
      <Image src={hero2} placeholder='blur' alt="hero_image" width={500} height={500}  />
      </div>
        <div className='flex flex-col items-start justify-center text-start md:w-[40%] w-[80%]'>
            <p className='text-3xl leading-10 mb-6 w-[95%]'>Revolutionize your English</p>
            <p className='text-sm leading-2 mb-10'> Our goal is to enable quality learning with experienced professional teachers for all ages without affecting the daily routine, while optimally improving the English language in all areas: reading, writing, speaking, grammar, regular conversations, and more</p>
            <button className='text-sm py-2 px-12 bg-[#5D87FF] text-white hover:scale-105 transition-all duration-300 ease-out rounded-lg'>Get Started</button>
        </div>
    </div>
    </>
  )
}

export default Hero