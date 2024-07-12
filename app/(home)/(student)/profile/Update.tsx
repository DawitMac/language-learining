import { Input } from '@/components/ui/input'
import Image from 'next/image'
import React from 'react'

const Update = () => {
  return (
    <div className='md:mb-0 mb-20'>
        <div className='flex flex-col items-center  gap-y-8 mb-8'>
            <div className='relative'>
            <Image src="/Rectangle.png" alt="profile" width={100} height={100} className='rounded-full shadow' />
            <Image src="/camera.png" alt="profile" width={30} height={30} className='absolute -bottom-2 right-3  rounded-full p-1 bg-[#F4F4F5]' />
            </div>
            <h1 className='text-2xl font-bold'>Jane Doe</h1>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8 w-full'>
            <div className='flex flex-col gap-2'>
            <p  className='text-sm font-normal'>Full Name</p>
            <Input name='email' placeholder='Jane Doe' className='w-full' />
            </div>
            <div className='flex flex-col gap-2'>
            <p  className='text-sm font-normal'>Email</p>
            <Input name='email' placeholder='jhondoe@gmail.com' className='w-full' />
            </div>
            <div className='flex flex-col gap-2'>
            <p  className='text-sm font-normal'>Phone Number</p>
            <Input name='email' placeholder='0987863116' className='w-full' />
            </div>
            <div className='flex flex-col gap-2'>
            <p  className='text-sm font-normal'>Age Range</p>
            <div className='flex items-center justify-center gap-5'>
                <button className='px-2 py-1 text-sm font-normal rounded bg-white border border-[#F4F4F5]'>Adult</button>
                <button className='px-2 py-1 text-sm font-normal rounded bg-white border border-[#F4F4F5]'>Teen</button>
                <button className='px-2 py-1 text-sm font-normal rounded bg-white border border-[#F4F4F5]'>Kid</button>
            </div>
            </div>
            <div>
            <p  className='text-sm font-normal'>Alternative Email</p>
            <Input name='email' placeholder='jhondoe@gmail.com' className='w-full' />
            </div>
           
        </div>
    </div>
  )
}

export default Update