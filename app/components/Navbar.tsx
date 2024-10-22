"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { menu } from 'util/data'
import Link from 'next/link'
import { poppins } from '../ui/fonts'
import { useCycle , motion, AnimatePresence  } from 'framer-motion'


const Navbar = () => {

    const [ open , setOpen ] = useState(false)
    
    const menuVariant = {
        open : { 
            y : 300,
            position : "absolute" ,
            opacity : 1,
            transition: { staggerChildren: 0.04, delayChildren: 0.01  , duration : 0.8 , type : "spring" ,bounce : 0.2 }
        } ,
        close : {
            y : -300,
            position : "relative",
            opacity : 0 , 
            transition : {staggerChildren : 0.05 , staggerDirection : -1 , delayChildren : 0.01 , duration :0.8}
        }
    }
    const childVariant = {
        open : { 
            y : 0,
            opacity : 1,
            transition: { staggerChildren: 0.04, delayChildren: 0.01  , duration : 0.8 , type : "spring" ,bounce : 0.2 }
        } ,
        close : {
            y : -300,
            opacity : 0 , 
            transition : {staggerChildren : 0.05 , staggerDirection : -1 , delayChildren : 0.01 , duration :0.8}
        }
    }
      
  return (
    <div className='fixed bg-transparent flex items-center md:justify-around justify-between w-screen px-6 py-5 '>
        <Image src="/logo.png" alt='logo' width={100} height={100} className=' w-auto h-auto' />
        <ul className={`${poppins.className} hidden md:flex items-center justify-center gap-4 bg-[#F4F5F9] rounded-full p-4 text-sm `}>
            {
                menu.map((list , index ) => (
                    <li key={index}>
                        <Link href={list.url}>{list.name}</Link>
                    </li>
                ))
            }
        </ul>
        <div className='relative flex items-center justify-center gap-4'>
            <Link href='/login'>
             <button className='text-sm p-3 bg-[#5D87FF] text-white hover:scale-105 transition-all duration-300 ease-out rounded-lg'>Login</button>
            </Link>
            <span className='hidden md:flex items-center justify-center gap-1 '>
                <Image src='/language.png' alt='language' width={15} height={15} />
            <p className='text-sm'>English</p>
            </span>
            <div className='flex md:hidden cursor-pointer hover:scale-105 duration-300 ease-in-out' 
            onClick={()=> setOpen(!open)}>
              <Image src='/menu1.png' alt='menu-icon' width={40} height={40} />
            </div>
        </div>
    
                <div  className={`absolute left-0 flex items-center justify-center  w-full transition-all duration-300 ease-linear  ${open ? 'top-24 opacity-1 z-10' : '-top-24 opacity-0 -z-10'}`}  >
                <ul  className={`${poppins.className}  flex flex-col md:hidden items-start justify-center gap-6 p-16 text-xl w-full bg-[#5D87FF] text-white `} >
                    {
                        menu.map((list , index ) => (
                            <li  key={index} onClick={()=>setOpen(false)}>
                                <Link href="/">{list.name}</Link>
                            </li>
                        ))
                    }
                </ul>
                </div>
            
     


    </div>
  )
}

export default Navbar

