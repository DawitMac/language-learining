"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import AccountType from './AccountType'
import PersonalInfo from './PersonalInfo'
import Plan from './Plan'
import Link from 'next/link'

export const registration = [
  {
      component : <AccountType />,
      inProgress : true
  },
  {
    component : <PersonalInfo />,
    inProgress : false
  },
  {
  component : <Plan />,
  inProgress : false
  },
]

const Page = () => {

  const [ max , setMax ] = useState(1)

  const handleClick = (type : string)=>{
     if(type === "next"){
        if(max < 3){
          setMax(max + 1)
          registration[max].inProgress = true;
        }
     }else{
      if(max -1 > 0){
        setMax(max - 1)
        registration[max -1].inProgress = false;
      }
     }
  }
  return (
<div className='flex items-center justify-around w-screen h-screen'>
    <Image src="/signup.jpg" alt="hero_image" width={500} height={500} className='w-[50%] h-screen'  />
        <div className='flex flex-col items-center justify-start w-screen'>
        <div className='-mt-12 mb-4 flex items-center justify-between px-12 w-full'>
  <Image src="/logo.png" alt='logo' width={70} height={70} />
  <Link href='/login'>
   <button className='text-lg'>Login</button>
  </Link>
  </div>
        <div className='flex flex-col items-start justify-center text-center'>
        
            <p className='text-3xl leading-10 mb-6 w-[95%]'>Registration Form</p>
            <p className='text-sm leading-2'>Please fill out this form with the required information</p>
            <div className='flex my-10'>
            {
              registration.map((reg , index) =>(
                 <div key={index} className='flex items-center justify-center'>
                  <div className='w-12 h-[2px] bg-[#C7D5FF]'></div>
                  <div className={`w-auto h-auto px-3 py-1 border border-[#5D87FF] rounded-[50%] ${reg.inProgress ? 'bg-[#5D87FF] text-white' : 'text-[#5D87FF] bg-white'}`}>{index + 1}</div>
                  <div className='w-12 h-[2px] bg-[#C7D5FF]'></div>
                 </div>
              ))
            }
            </div>
            {
              registration.slice(max-1,max).map((reg , index)=>(
                <div key={index}>
                {
                  reg.component
                }</div>
              ))
            }
             <div className='flex items-center justify-end w-full mt-10 gap-6'>
              {
                max > 1 && <button onClick={()=> handleClick("prev")} className='text-sm text-[#5D87FF]'>Previous</button>

              }
        <button onClick={()=> handleClick("next")} className='text-sm p-3 bg-[#5D87FF] text-white hover:scale-105 transition-all duration-300 ease-out rounded-lg'>Next</button>
        </div>
        </div>
        </div>
    </div>
   
  )
}

export default Page