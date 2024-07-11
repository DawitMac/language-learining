"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import AccountType from './AccountType'
import PersonalInfo from './PersonalInfo'
import Plan from './Plan'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'

 
const Page = () => {
  
  const router = useRouter()
  const handleRefresh = ()=>{
   
  }
  //const reg = 

  const [ max , setMax ] = useState(1)
  const [ registration ,setRegistration ] = useState([
    {    
        id : "1" ,
        component : <AccountType handleRefresh={handleRefresh}  />,
        inProgress : true
    },
    {
      id : "2" ,
      component : <PersonalInfo />,
      inProgress : false
    },
    {
      id : "3" ,
    component : <Plan />,
    inProgress : false
    },
  ])
const [ selecctedTab , setSelectedTab ] = useState(registration[0])
  
  
  

  const handleClick = (type : string)=>{
         
     if(type === "next"){
        if(max < 3){
          const value = registration
          setMax(max + 1)
          value[max].inProgress = true;
          setRegistration(value)
          setSelectedTab(registration[max])
         
        }else{
          router.push('/login')
        }
     }else{
      if(max -1 > 0){
        const prev = max - 2
        const value = registration
        setMax(max - 1)
        value[max -1].inProgress = false;
        setRegistration(value)
        setSelectedTab(registration[max - 2])
      }
     }
  }
 
  

  return (
<motion.div initial={{ opacity : 0 }} animate={{ opacity : 1}} exit={{ opacity : 0}} transition={{ duration : 0.3}} className='flex items-center justify-center md:justify-around max-w-screen h-[95dvh]'>
    <Image src="/signup.jpg" alt="hero_image" width={500} height={500} className='w-[50%] h-screen md:block hidden'  />
        <div className='md:w-[45%] w-[80%]'>
        <div className='flex items-center justify-between w-full'>
  <Image src="/logo.png" alt='logo' width={70} height={70} className='mt-8' />
  <Link href='/login'>
  <button className='text-sm p-3 bg-[#5D87FF] text-white hover:scale-105 transition-all duration-300 ease-out rounded-lg mt-8'>Login</button>
  </Link>
  </div>
        <div className='flex flex-col items-start justify-center text-center h-[88dvh]'>
             
            <p className='text-3xl leading-10 mb-6 w-[95%]'>Registration Form</p>
            <p className='text-sm leading-2'>Please fill out this form with the required information</p>
            <div className='flex my-10 w-full'>
            {
              registration.map((reg , index) =>(
                 <div key={index} className='flex items-center justify-center' >
                  <div className='md:w-12 sm:w-10 w-8 h-[2px] bg-[#C7D5FF]'></div>
                  <div className={`w-auto h-auto px-3 py-1 border border-[#5D87FF] rounded-[50%] ${reg.inProgress ? 'bg-[#5D87FF] text-white' : 'text-[#5D87FF] bg-white'}`}>{index + 1}</div>
                  <div className='md:w-12 sm:w-10 w-8 h-[2px] bg-[#C7D5FF]'></div>
                 </div>
              ))
            }
            </div>
            <div className='w-full'>
              <AnimatePresence mode="wait">
                 <motion.div 
                 key={selecctedTab.id}
                 initial={{ y : 100 , opacity: 0 }} 
                 animate={{ y : 0 , opacity : 1 }} 
                 exit={{ y : -100 , opacity: 0 }} 
                 transition={{ duration : 0.4 , ease : "easeInOut"}} >
                    {
                      selecctedTab.component
                    }
                 </motion.div>
              </AnimatePresence>
           
            </div>
             <div className='flex items-center justify-end w-full mt-10 pr-10 gap-6 transition-all duration-150 ease-out delay-300'>
              {
                max > 1 && <button onClick={()=> handleClick("prev")} className='text-sm text-[#5D87FF]'>Previous</button>

              }
        <button onClick={()=> handleClick("next")} className='text-sm p-3 bg-[#5D87FF] text-white hover:scale-105 transition-all duration-300 ease-out rounded-lg'>Next</button>
        </div>
        </div>
        </div>
    </motion.div>
   
  )
}

export default Page

{/* <div className='w-full'>
{
  registration.slice(max-1,max).map((reg , index)=>(
    <div key={index}>
    {
      reg.component
    }</div>
  ))
}
</div> */}