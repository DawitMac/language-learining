import Image from 'next/image'
import React from 'react'
import { shimmer, toBase64 } from 'util/image_optimizer'

const data = [
  {
    img : "/image.png",
    name : "Teacher MJ",
    rating : 4.86,
    info : "14 new ratings last week"
  },
  {
    img : "/image.png",
    name : "Teacher MJ",
    rating : 4.86,
    info : "14 new ratings last week"
  },
  {
    img : "/image.png",
    name : "Teacher MJ",
    rating : 4.86,
    info : "14 new ratings last week"
  },
]

const Upcomming = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:px-4 items-center justify-center gap-8'>
      {
        data.map((session , i)=>(
          <div key={i} className='flex flex-col gap-10 rounded shadow-xl p-3'>
            <div className='flex items-center gap-2'>
              <Image src={session.img} placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`} alt='session_img' width={90} height={90} />
              <div className='flex flex-col items-start justify-start gap-1'>
                 <p className='text-md font-semibold'>{session.name}</p>
                 <p className='text-md text-[#28AAE1]'>{session.rating}</p>
                 <p className='text-sm font-light'>{session.info}</p>
              </div>
            </div>
            <div className='flex items-center justify-center w-full'>
               <button className='w-[80%] flex items-center justify-center bg-[#5D87FF] text-white text-md py-1 rounded'>View Detail</button>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Upcomming