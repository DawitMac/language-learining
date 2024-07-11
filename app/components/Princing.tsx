"use client"
import { pricings } from '@/util/data'
import { Variants , animate, delay, motion, useScroll } from 'framer-motion';
import React, { useRef }  from 'react'

const Princing = () => {
     const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target : ref,
        offset : ["0 1 " , "1.3 1"]
    })

    const cardVariants  = {
            offscreen: {
              y: 100
            },
            onscreen: {
              y: 0,
              transition: {
                type: "stagger",
                bounce: 0.3,
                duration: 0.4 ,
                staggerChildren: 0.2
              }
          }
    }
    
   
  return (
    <div className='flex items-center justify-center w-screen  md:h-[90dvh] my-16 md:my-0'>
        <motion.div variants={cardVariants} initial="offscreen" whileInView="onscreen" viewport={{ once : true , amount : 0.1}}  className='flex md:flex-row flex-col items-center justify-center gap-6 sm:mx-24 mx-16' >
            {
                pricings.map((pricing , index)=>(
                    <motion.div variants={cardVariants}  layout   key={index} ref={ref} className={`flex flex-col sm:gap-6 gap-3 items-center justify-center rounded-2xl px-4 py-12 border-2 border-[#4558C1] shadow ${pricing.choosen && 'bg-[#4558C1] text-white'}`}>
                        <p className='text-md font-normal mb-6'><span className='text-2xl'>$ {pricing.amount}</span> /monthly</p>
                        <button className={`text-sm py-2 px-12 bg-[#4558C1] text-white hover:scale-105 transition-all duration-300 ease-out rounded-lg ${pricing.choosen && 'bg-white text-[#4558C1]'}`}>BOOK A TRIAL CLASS</button>
                        <p className='text-sm font-light'>{pricing.qoute} years old</p>
                        <p className='text-sm font-light'>{pricing.quote1} years old</p>
                        <p className='text-sm font-light'>{pricing.qoute2} years old</p>
                    </motion.div>
                ))
            }
           

        </motion.div>
    </div>
  )
}

export default Princing