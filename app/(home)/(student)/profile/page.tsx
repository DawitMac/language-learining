"use client"
import DashboardNav from 'app/components/DashboardNav'
import React, { useState } from 'react'
import dynamic from 'next/dynamic'


const Update = dynamic(()=> import('./Update'))
const Change = dynamic(()=> import('./Change'))



const sessionList = [
  {
    title : "Update Profile",
    isActive : 1,
    component : <Update />
  },
  {
    title : "Change Password",
    isActive : 2,
    component : <Change />
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
    <div className='md:pl-20 sm:pl-10 pl-5 flex flex-col md:items-start items-center justify-start w-screen lg:w-[90dvw] lg:ml-[200px]'>
      <DashboardNav />
    <div className='mt-24 md:mt-0 z-0 lg:z-0 w-[80%]'>
    <p  className='flex items-center justify-center w-full text-2xl font-semibold'>Profile</p>
    <div className=' my-6 flex items-center justify-start w-full gap-10'>
        {
          sessionList.map((list , i)=>(
            <p key={i} className={`md:text-lg text-md font-normal cursor-pointer hover:text-[#5D87FF] transition-all duration-200 ease-in ${list.isActive === max && 'border-b-2 border-[#5D87FF] pb-1'}`}
            onClick={()=> handleChange(i)}
            >{list.title}</p>
          ))
        }
      </div>
      <div className='w-full items-center justify-center'>
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