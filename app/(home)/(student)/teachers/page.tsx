import DashboardNav from 'app/components/DashboardNav'
import { teachers } from 'util/data'
import Image from 'next/image'
import React from 'react'
import { shimmer, toBase64 } from 'util/image_optimizer'



const page = () => {

  return (
    <div className='flex flex-col items-center justify-start w-screen lg:w-[90dvw] lg:ml-[200px] mb-20'>
      <DashboardNav />
      <div className='mt-24 md:mt-0 -z-10 lg:z-0 flex items-center justify-around w-full mb-8 px-3'>
        <p className='text-xl font-normal'>Find a Teacher</p>
          <div className='flex items-center justify-center px-3 py-2 rounded-full shadow gap-2 '>
            <p className='p-2 hover:bg-[#D1DAF2] hover:text-[#5D87FF] cursor-pointer rounded-full bg-[#D1DAF2] text-[#5D87FF]'>English</p>
            <p className='p-2 hover:bg-[#D1DAF2] hover:text-[#5D87FF] cursor-pointer rounded-full'>Amharic</p>
        </div>
      </div>
      <div className='grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-8 px-6 sm:px-1 '>
            {
                teachers.map((teacher , index)=>{
                  return(
                    <div key={index} className='flex flex-col gap-1 items-center justify-center'>
                    <Image src={teacher?.img} placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}   alt='teacher-photo' width={150} height={150}/>
                    <p className='text-md font-normal'>{teacher?.name}</p>
                    <p className='text-sm font-light'>{teacher?.age} years old</p>
                    <button className='text-[13px] sm:text-sm py-1 sm:py-2 px-12 bg-[#5D87FF] text-white hover:scale-105 transition-all duration-300 ease-out rounded-lg'>Book now</button>
                </div>
                  )
                })
            }
        </div>
    </div>
  )
}

export default page