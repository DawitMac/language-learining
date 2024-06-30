import { questions } from '@/util/data'
import Image from 'next/image'
import React from 'react'

const Question = () => {
  return (
    <div className='flex flex-col items-center justify-center w-screen h-[90dvh]'>
         <p className='text-2xl leading-10 mb-6 font-semibold'>Common questions</p>
         <p className='text-sm leading-2 mb-10 font-light text-center w-[70%]'>Our goal is to enable students around the world to learn English (with a one-on-one teacher) in zoom classes and provide a platform that enables them to improve all speaking, reading and writing skills in English.</p>
         <div className='flex flex-col items-center justify-center gap-1 '>
            {
              questions.map((question , index)=>(
                <div key={index} className='flex items-center justify-between shadow w-full p-2 gap-4'>
                    <p className='text-sm font-normal'>{question}</p>
                    <p className='text-xl font-bold'>+</p>
                </div>
              ))
            }
         </div>
    </div>
  )
}

export default Question