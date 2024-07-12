"use client"
import SidebarComponent from 'app/components/SidebarComponent'
import { AnimatePresence , motion } from 'framer-motion'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import useMediaQuery  from '@mui/material/useMediaQuery';



const Sidebar = () => {
    const [ open  , setOpen ] = useState(false)
    const mediaQuery = useMediaQuery('(max-width:1024px)');

     useEffect(()=>{
      console.log(mediaQuery,"now is the time" )
      if(!mediaQuery){
        setOpen(false)
      }
     },[mediaQuery])

  return (
    <div className='absolute lg:fixed'>
         {mediaQuery ?
          <>
            {
                open ?(
                  <>
                  <AnimatePresence mode="wait">
                  <motion.div key="background" onClick={()=> setOpen(!open)} animate={{ opacity : 1  }} initial={{ opacity : 0}} exit={{ x : 300 , opacity : 0}} transition={{ duration : 0.5 , ease : "easeInOut"}} className='fixed z-[6] w-screen h-screen bg-black/50 block lg:hidden '></motion.div>
                  </AnimatePresence>
                  <AnimatePresence mode="wait">
                    <SidebarComponent key="sidebar" open={open} setOpen={setOpen} />
              </AnimatePresence>
            </>
              )
                 : ( <div className='fixed z-10 m-4 block lg:hidden cursor-pointer hover:scale-105 duration-300 ease-in-out h-7 w-7' 
                    onClick={()=> setOpen(true)}>
                     <Image src='/menu1.png' alt='menu-icon' width={30} height={30} />
                     
                    </div>)
            }
          </> : (<>
                 <AnimatePresence mode="wait">
                   <SidebarComponent open={open} setOpen={setOpen} />
             </AnimatePresence>
           </>
            )
         }
        
    </div>
  )
}

export default Sidebar