import { pricings } from '@/util/data'
import React from 'react'

const Princing = () => {
  return (
    <div className='flex items-center justify-center w-screen  h-[90dvh]'>
        <div className='flex items-center justify-center gap-6 mx-24'>
            {
                pricings.map((pricing , index)=>(
                    <div key={index} className={`flex flex-col gap-6 items-center justify-center rounded-2xl px-4 py-12 border-2 border-[#4558C1] shadow ${pricing.choosen && 'bg-[#4558C1] text-white'}`}>
                        <p className='text-md font-normal mb-6'><span className='text-2xl'>$ {pricing.amount}</span> /monthly</p>
                        <button className={`text-sm py-2 px-12 bg-[#4558C1] text-white hover:scale-105 transition-all duration-300 ease-out rounded-lg ${pricing.choosen && 'bg-white text-[#4558C1]'}`}>BOOK A TRIAL CLASS</button>
                        <p className='text-sm font-light'>{pricing.qoute} years old</p>
                        <p className='text-sm font-light'>{pricing.quote1} years old</p>
                        <p className='text-sm font-light'>{pricing.qoute2} years old</p>
                    </div>
                ))
            }
           

        </div>
    </div>
  )
}

export default Princing