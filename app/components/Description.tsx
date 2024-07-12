import Image from 'next/image'
import React from 'react'
import iPad from '../../public/iPad.png'

const Description = () => {
  return (
    <div className='flex flex-col md:flex-row items-center justify-around w-screen lg:h-[90dvh] lg:my-0 my-16 md:gap-0 gap-4 md:px-6 px-0'>
        <div className='flex flex-col items-center justify-center gap-8 '>
            <p className='text-2xl font-semibold text-start w-[70%]'>Some good reasons to learn English with us at OLMS:</p>
        <Image src={iPad} placeholder='blur' alt="hero_image" width={500} height={500}  />
        </div>
    <div className='flex flex-col items-start justify-center text-start lg:w-[40%] md:w-[60%] w-[80%]'>
        <p className='text-sm leading-10 mb-2'>Maximum flexibility</p>
        <p className='text-sm leading-2 mb-4'>High availability of classes, all hours of the day, including weekends. Canceling or rescheduling a lesson is possible even on the same day - up to two hours prior to the lesson.</p>
        <p className='text-sm leading-10 mb-2'>Obligation free</p>
        <p className='text-sm leading-2 mb-4'>We offer monthly subscriptions that can be canceled at any time, without obligation. You can cancel the subscription through the app with just a click.</p>
        <p className='text-sm leading-10 mb-2'>Maximum value for the minimum price</p>
        <p className='text-sm leading-2 mb-4'>A price not found anywhere else! We offer a professional learning experience at an average cost of NIS 20 per lesson. As part of the features, you also receive: homework (for those who are interested), self-practice, level monitoring, grammar exercises, and more.</p>
        <p className='text-sm leading-10 mb-2'>Carefully selected professional teachers</p>
        <p className='text-sm leading-2 mb-4'>Here at OLMS, the quality of the teachers is essential to us and that&apos;s why we look for the best teachers for you, all of whom have an extensive experience in teaching English.</p>
    </div>
</div>
  )
}

export default Description