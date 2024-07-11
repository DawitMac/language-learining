"use client"
import Image from 'next/image'
import React from 'react'
import { menu } from '@/util/data'
import Link from 'next/link'
import { poppins } from '../ui/fonts'
import { useCycle , motion, AnimatePresence  } from 'framer-motion'


const Navbar = () => {

    const [ open , setOpen ] = useCycle(false , true)
    
    const menuVariant = {
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
    <div className='flex items-center md:justify-around justify-between w-screen p-6 '>
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
            <div className='block md:hidden cursor-pointer hover:scale-105 duration-300 ease-in-out text-[black]' 
            onClick={()=> setOpen()}>
              <Image src='/menu.png' alt='menu-icon' width={30} height={30} />
            </div>
        </div>
        <AnimatePresence>
        <motion.div  className={`absolute left-0 flex items-center justify-center  w-screen delay-300 ${open ? 'mt-[500px]  z-10' : '-mt-24 -z-10'}`}  >
        <motion.ul layout variants={menuVariant} animate={open ? "open" : "close"} className={`${poppins.className}  flex flex-col md:hidden items-start justify-center gap-6 p-16 text-xl w-full bg-[#5D87FF] text-white `} >
            {
                menu.map((list , index ) => (
                    <motion.li layout variants={menuVariant}  key={index} style={{ transition : 'all' , transitionDelay : `${(index+1) * 0.001}00s` }}>
                        <Link href={list.url}>{list.name}</Link>
                    </motion.li>
                ))
            }
        </motion.ul>
        </motion.div>
        </AnimatePresence>
    </div>
  )
}

export default Navbar

