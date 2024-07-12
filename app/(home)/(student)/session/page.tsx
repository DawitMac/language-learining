"use client"
import DashboardNav from 'app/components/DashboardNav'
import React, { useState } from 'react'
import dynamic from 'next/dynamic'

const Upcomming = dynamic(()=> import("./Upcomming"))
const Past = dynamic(()=> import("./Past"))





const sessionList = [
  {
    title : "Upcoming Sessions",
    isActive : 1,
    component : <Upcomming />
  },
  {
    title : "Past Sessions",
    isActive : 2,
    component : <Past />
  }
]

const Page = () => {
  const [ max , setMax ] = useState(1)

  const handleChange = ( index : number)=>{

    if(index === 0 ){

        setMax(1)
    }else{
      setMax(2)
    }

  }
  return (
    <div className='md:pl-16 pl-5  flex flex-col md:items-start items-center justify-start w-screen lg:w-[90dvw] lg:ml-[200px] mb-20'>
      <DashboardNav />
    <div className='mt-24 md:mt-0  lg:z-0'>
    <p  className='flex items-center justify-center w-full text-2xl font-semibold'>Session Details</p>
      <div className='my-16 flex items-center justify-start w-full gap-10'>
        {
          sessionList.map((list , i)=>(
            <p key={i} className={`text-lg font-normal cursor-pointer hover:text-[#5D87FF] transition-all duration-200 ease-in ${list.isActive === max && 'border-b-2 border-[#5D87FF] pb-1'}`}
            onClick={()=> handleChange(i)}
            >{list.title}</p>
          ))
        }
      </div>
      <div>
        {
          sessionList.slice(max-1  , max).map((list , i)=>(
            <div key={i}>
              {list.component}
            </div>
          ))
        }
      </div>
    </div>
</div>
  )
}

export default Page