import { Input } from '@/components/ui/input'
import React from 'react'

const Change = () => {
  return (
    <div className='w-[80dvw] flex flex-col items-center h-[70dvh] relative '>
        <div className='w-full flex flex-col items-center justify-center h-[50%] gap-6 my-4'>
        <div className=' w-full flex flex-col gap-2 items-center justify-center' >
            <p  className='flex md:w-[50%] w-full items-start text-sm font-normal'>Old Password</p>
            <Input name='password' placeholder='password' className='md:w-[50%] w-full' />
            </div>
            <div className=' w-full flex flex-col gap-2 items-center justify-center' >
            <p  className='flex md:w-[50%] w-full items-start text-sm font-normal'>New Password</p>
            <Input name='password' placeholder='password' className='md:w-[50%] w-full' />
            </div>
            <div className=' w-full flex flex-col gap-2 items-center justify-center' >
            <p  className='flex md:w-[50%] w-full items-start text-sm font-normal'>Re-Password</p>
            <Input name='password' placeholder='password' className='md:md:w-[50%]  w-full' />
            </div>
        </div>
         <div className='absolute bottom-16 md:right-16 right-0 flex items-center justify-center gap-4'>
            <button className='px-3 py-2 text-sm text-white bg-[#5D87FF] rounded shadow hover:scale-105 transition-all duration-200 ease-linear' >change Password</button>
            <button className='px-3 py-2 text-sm text-[#FF3E3E] border border-[#FF3E3E] bg-white rounded shadow hover:scale-105 transition-all duration-200 ease-linear'>cancel Session</button>
         </div>
    </div>
  )
}

export default Change