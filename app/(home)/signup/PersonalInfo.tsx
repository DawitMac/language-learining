import { Input } from '@/components/ui/input'
import React from 'react'

const PersonalInfo = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full gap-6'>
        <div className=' flex flex-col gap-1 items-start justify-start w-full'>
           <p className='text-sm font-normal'>Full Name</p>
            <Input placeholder='Jhon Doe' className='w-[60%]' />
        </div>
        <div className=' flex flex-col gap-1 items-start justify-start w-full'>
           <p className='text-sm font-normal'>Email</p>
            <Input placeholder='jhondoe@gmail.com' className='w-[60%]' />
        </div>
        <div className=' flex flex-col gap-1 items-start justify-start w-full'>
           <p className='text-sm font-normal'>Password</p>
            <Input placeholder='**********' className='w-[60%]' />
        </div>
        <div>
       
     </div>
    </div>
  )
}

export default PersonalInfo