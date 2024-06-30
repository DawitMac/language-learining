import { Checkbox } from '@/components/ui/checkbox'
import React from 'react'

const Plan = () => {
  return (
    <div className='flex flex-col items-start justify-start gap-6 w-full'>
        <p className='text-md font-normal'>Choose your plan</p>
       <div className='flex flex-col ml-3 items-start justify-start gap-6'>
       <div className='flex items-center justify-center gap-6'>
        <Checkbox />
        <p className='text-lg font-normal'>$49 / month</p>
        </div>
        <div className='flex items-center justify-center gap-6'>
        <Checkbox />
        <p className='text-lg font-normal'>$60 / month</p>
        </div>
        <div className='flex items-center justify-center gap-6'>
        <Checkbox />
        <p className='text-lg font-normal'>$76 / month</p>
        </div>
        <div className='flex items-center justify-center gap-6'>
        <Checkbox />
        <p className='text-lg font-normal'>$90 / month</p>
        </div>
       </div>
      
    </div>
  )
}

export default Plan