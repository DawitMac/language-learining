import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='flex items-start justify-evenly bg-[#EFEFEF] mb-12 py-10'>
        <div className='flex flex-col items-start justify-start w-[30%] gap-8'>
        <Image src="/logo.png" alt='logo' width={100} height={100} />
        <p className='text-sm leading-2 mb-4 '>The OLMS app was established out of a real need to learn English with professional teachers and at attractive prices. Our goal is to enable students around the world to learn English (with a one-on-one teacher) in zoom classes and provide a latform that enables them to improve all speaking, reading and writing skills in English.</p>
        </div>
        <div className='flex flex-col items-start justify-start'>
            <p className='text-xl font-semibold leading-2 mb-6'>OLMS</p>
            <ul className='text-sm leading-2 flex flex-col items-start justify-start gap-2'>
                <li>About</li>
                <li>Why OLMS?</li>
                <li>Pricing</li>
                <li>Our Teachers</li>
                <li>FAQs</li>
                <li>Contact</li>
            </ul>
        </div>
        <div className='relative flex flex-col items-start justify-start'>
            <p className='text-xl font-semibold leading-2 mb-6'>Useful Links</p>
            <ul className='text-sm leading-2 flex flex-col items-start justify-start gap-2'>
                <li>Terms and conditions</li>
                <li>Privacy & Policy</li>
            </ul>
        </div>
        <div className='flex flex-col items-start justify-start'>
            <p className='text-xl font-semibold leading-2 mb-6'>Contact Us</p>
            <ul className='text-sm leading-2 flex flex-col items-start justify-start gap-2 text-start'>
                <li>+972 00-000-0000</li>
                <li>support@OLMS.com</li>
            </ul>
        </div>
    </div>
  )
}

export default Footer