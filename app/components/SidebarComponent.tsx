"use client"
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { logOut } from 'lib/action'
import Link from 'next/link'


const sidebar = [
    { name : "Overview" , url : "/dashboard" },
    { name : "Session" , url : "/session"  },
    { name : "Find Teachers",  url : "/teachers" },
    { name : "Calendar", url : "/calendar" },
    { name : "Profile", url : "/profile" },
    { name : "Subscription", url : "/subscription" },
]

const SidebarComponent = ({ open , setOpen } : { open : boolean , setOpen : React.Dispatch<React.SetStateAction<boolean>>}) => {
   
    const [ isSmall , setIsSmall ] = useState(true)

  return ( 
    <motion.div animate={{ x: 0 , opacity : 1 , zIndex : 10 }} initial={{ x : -200 , opacity : 0}} transition={{ duration : 0.5 , ease : "easeInOut"}} className='relative flex flex-col items-center justify-start sm:w-[200px] w-[250px] h-screen gap-12 border-r-2 border-[#F4F4F5] z-10 bg-white'>
    <div className='flex items-start justify-start w-full p-6'>
        <Image src='/logo.png' alt='logo' width={60} height={40} />
    </div>
    <ul className='flex flex-col items-start justify-start gap-6 list-none'>
        {
            sidebar.map((list , i)=>(
                <li onClick={()=>{ 
                   setOpen(false)
               }} key={i} className='sm:text-sm text-md font-normal hover:text-[#5D87FF] trnasition-all duration-300 ease-in-out cursor-pointer'>
                <Link href={list.url}>{list.name}</Link>
               </li>
            ))
        }
    </ul>
    <div className='absolute bottom-20 left-8 flex flex-col items-start justify-start gap-6'>
        <span className='flex gap-3 hover:text-[#5D87FF] trnasition-all duration-300 ease-in-out cursor-pointer'>
        <Image src='/setting.png' alt='setting' width={20} height={20} />
        <p className='sm:text-sm text-md font-normal'>Setting</p>
        </span>
       <form action={logOut}>
       <button type='submit' className='flex gap-3 hover:text-[#5D87FF] trnasition-all duration-300 ease-in-out cursor-pointer'>
        <Image src='/logout.png' alt='logout' width={20} height={20} />
        <p className='sm:text-sm text-md font-normal'>logout</p>
        </button>
       </form>
    </div>
</motion.div>
  )
}

export default SidebarComponent