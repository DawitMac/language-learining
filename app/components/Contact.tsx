import { Input } from '@/components/ui/input'
import Image from 'next/image'
import React from 'react'

const Contact = () => {
  return (
    <div className='relative flex flex-col items-center justify-center w-screen md:h-[70dvw] md:my-0 my-20 md:gap-0 gap-4'>
        <Image src='/shadowBG.png' alt="shadow" width={500} height={500} className='absolute top-0 right-0 z-[-10]' />
        <p className='text-2xl leading-10 mb-12 font-semibold text-center w-[50%] -z-10'>Not sure if OLMS is the right app for you to learn English?</p>
        <div className='flex md:flex-row flex-col items-center justify-between md:gap-0 gap-12'>
        <div className='flex flex-col items-start justify-center text-start md:w-[40%] w-[80%] -z-10'>
            <p className='text-xl leading-10 mb-4 w-[95%] font-bold'>General Inquiries</p>
            <p className='text-sm leading-2 mb-6'>Lorem ipsum dolor sit amet consectetur. Sed volutpat facilisis facilisis sodales convallis in.</p>
            <p className='text-xl mb-4 font-bold'>info@test.com</p>
            <span className='flex items-center justify-center gap-4'>
                <p>Follow Us</p>
                <Image src='/social.png' alt='social-icons' width={100} height={100} />
            </span>
        </div>
        <div className='flex flex-col md:items-center justify-center items-start  md:gap-10 gap-8 md:w-[50%] w-[85%]'>
          <Input placeholder='Full Name' style={{ backgroundColor : "#F9F9F9"}} className='w-full' />
          <Input placeholder='Email' style={{ backgroundColor : "#F9F9F9"}} className='w-full' />
          <textarea placeholder='Message' rows={100} style={{ backgroundColor : "#F9F9F9"}} className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50' />
          <button className='place-self-start  text-sm py-2 px-8 bg-black text-white hover:scale-105 transition-all duration-300 ease-out rounded-lg'>Send Message</button>
        </div>
    </div>
    </div>
  )
}

export default Contact