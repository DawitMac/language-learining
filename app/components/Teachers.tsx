'use client'
import React ,{ useState} from 'react'
import { teachers } from 'util/data'
import Image from 'next/image'
import { shimmer, toBase64 } from 'util/image_optimizer'

const Teachers = () => {
    const [ min , setMin ] = useState(0)
    const [ max , setMax ] = useState(4)

    const handleClick = (arrow : string)=>{
        if(arrow === "left"){
          if(min > 0 ){
            setMin(min - 1)
            setMax(max - 1)
          }
        }else{
            if(max < 5 ){
                setMin(min + 1)
                setMax(max + 1)
              }
        }
    }

  return (
    <div className='flex flex-col items-center justify-center w-screen px-4 sm:px-0 md:h-auto  lg:h-[95dvh] overflow-hidden md:my-0 my-16  '>
        <p className='text-3xl'>Pick from 100+ teachers</p>
        <div className='flex items-center justify-center px-3 py-2 rounded-full shadow gap-2 my-12'>
            <p className='p-3 hover:bg-[#D1DAF2] hover:text-[#5D87FF] cursor-pointer rounded-full bg-[#D1DAF2] text-[#5D87FF]'>English</p>
            <p className='p-3 hover:bg-[#D1DAF2] hover:text-[#5D87FF] cursor-pointer rounded-full'>Amharic</p>
        </div>
        <div className='md:relative grid grid-cols-2 md:grid-cols-3 lg:flex items-center justify-center gap-8 '>
            {
                teachers.slice(min,max).map((teacher , index)=>(
                    <div key={index} className='flex flex-col gap-2 items-center justify-center '>
                        <Image src={teacher.img} placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}   alt='teacher-photo' width={150} height={150}/>
                        <p className='text-md font-normal'>{teacher?.name}</p>
                        <p className='text-sm font-light'>{teacher?.age} years old</p>
                        <button className='sm:text-sm text-[13px] py-2 px-12 bg-[#5D87FF] text-white hover:scale-105 transition-all duration-300 ease-out rounded-lg'>Book now</button>
                    </div>
                ))
            }
            <Image onClick={()=> handleClick("left")} src='/left.png' alt='left-arrow' width={50} height={50} className='hidden md:block absolute top-[50%] -left-20 bg-[#E5E5E7] p-2 rounded-full hover:bg-[#D1DAF2] text-[#5D87FF] duration-200 transition-all ease-in-out delay-75 cursor-pointer' />
            <Image onClick={()=> handleClick("right")} src='/right.png' alt='right-arrow' width={50} height={50} className='hidden md:block absolute top-[50%] -right-20 bg-[#E5E5E7] p-2 rounded-full hover:bg-[#D1DAF2] text-[#5D87FF] duration-200 transition-all ease-in-out delay-75 cursor-pointer' />

        </div>
    </div>
  )
}

export default Teachers