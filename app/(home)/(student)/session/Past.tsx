import Image from 'next/image'
import React from 'react'
import { shimmer, toBase64 } from 'util/image_optimizer'

const data = [
  {
    img : "/image.png",
    name : "Teacher MJ",
    rating : 4.86,
    info : "14 new ratings last week",
    status : "completed"
  },
  {
    img : "/image.png",
    name : "Teacher MJ",
    rating : 4.86,
    info : "14 new ratings last week",
    status : "cancelled"
  }
]

const Past = () => {
  return (
    <div className='flex md:flex-row flex-col items-center justify-center gap-8'>
      {
        data.map((session , i)=>(
          <div key={i} className='relative flex flex-col rounded shadow-xl p-3'>
            <p className={`absolute top-1 right-1 text-sm ${session.status === "completed" ? 'bg-[#D7FFEA] text-[#70C274] px-1 rounded-xl' : 'bg-[#FFE2E2] text-[#FF3E3E] px-1 rounded-xl'}`}>{session.status}</p>
            <div className='flex items-center gap-2 mt-2'>
              <Image src={session.img} placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`} alt='session_img' width={90} height={90} />
              <div className='flex flex-col items-start justify-start gap-1'>
                 <p className='text-md font-semibold'>{session.name}</p>
                 <p className='text-md text-[#28AAE1]'>{session.rating}</p>
                 <p className='text-sm font-light'>{session.info}</p>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Past