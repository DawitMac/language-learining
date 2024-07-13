"use client"
import { activities, chartData } from 'util/data'
import Image from 'next/image'
import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import DashboardNav from 'app/components/DashboardNav'


ChartJS.register(ArcElement, Tooltip, Legend);

const page = () => {


  return (
    <div className='flex flex-col items-center justify-start w-screen lg:w-[90dvw] lg:ml-[200px] mb-20 lg:mb-0'>
      <DashboardNav />
      <div className='mt-24 md:mt-0  lg:z-0 flex flex-col items-center justify-center w-full gap-y-6'>
      <div className='flex flex-col sm:flex-row items-center justify-around w-full sm:w-[90%] gap-8'>
      <div className='flex items-center justify-around bg-[#EBF3FE] rounded-xl shadow-lg w-[80dvw] sm:w-[60%] px-8 sm:pt-4 py-4 lg:py-1'>
        <div className='flex flex-col items-start justify-start gap-3 lg:w-[50%] w-full'>
          <p className='text-lg font-semibold'>Welocome back User! Check dashboard</p>
          <p className='text-sm font-light'>You have 1 upcoming session on Date:</p>
          <span className='flex items-center justify-center gap-2'>
          <p className='text-lg font-semibold'>Friday June,24</p>
           <p className='text-sm font-light p-1 bg-white rounded'></p>
          </span>
          <button className='text-sm py-2 px-4 bg-[#5D87FF] text-white hover:scale-105 transition-all duration-300 ease-out rounded-lg mb-2'>Check</button>
        </div>
        <Image src='/layer.png' alt='frame' width={250} height={250} className='h-fit hidden lg:block' />
      </div>
      <div className='flex flex-col gap-4'>
        <div className='flex items-center justify-between gap-3 bg-[#5D87FF] rounded-xl p-2 shadow-md w-[80dvw] sm:w-full'>
         <div className='flex flex-col    gap-1 '>
         <p className='text-lg text-white font-semibold'>1</p>
          <p className='text-sm text-white font-normal'>Upcoming Session</p>
          <button className='text-sm py-2 px-4 text-[#5D87FF] bg-white hover:scale-105 transition-all duration-300 ease-out rounded-lg mb-2'>View Session</button>
         </div>
         <Image src='/message.png' alt='message' width={40} height={40} />
        </div>
        <div className='flex flex-wrap items-center justify-center gap-2 shadow-lg py-2 sm:px-4   rounded-xl md:mb-0 mb-3 '>
          <div className='flex flex-col item-start justify-start'>
            <p className='text-[12px] sm:text-sm font-light'>Total Sessions</p>
            <p className='text-lg font-semibold'>12</p>
          </div>
          <div className='flex flex-col item-start justify-start'>
            <p className='text-[12px] sm:text-sm font-light'>Total Sessions</p>
            <p className='text-lg font-semibold'>10</p>
          </div>
          <div className='flex flex-col item-start justify-start'>
            <p className='text-[12px] sm:text-sm font-light'>Total Sessions</p>
            <p className='text-lg font-semibold'>2</p>
          </div>
        </div>
      </div>
      </div>
      
      <div className='flex lg:flex-row flex-col  w-[90dvw] lg:w-full items-center justify-around gap-8'>
      <div className='flex md:flex-row sm:flex-row  flex-col items-center justify-around w-full lg:w-[60%] sm:gap-0 gap-5'>
        <div className='flex flex-col gap-4 items-start p-3 justify-around bg-[#EBF3FE] rounded-xl shadow-lg w-[80dvw] sm:w-[55%] md:w-[60%] px-8'>
          <p className='flex items-start justify-start w-full text-xl font-normal '>Daily activities</p>
          <div>
            { activities.map((activity , i)=>{

             return(
              <div className='flex flex-col m-0 p-0' key={i}>
               <div className='flex items-center justify-start gap-3'>
                <p className='text-[12px] font-light' >{activity.time}</p>
                <div className='w-2 h-2 rounded-full' style={{ backgroundColor : activity.bColor}}></div>
                <p className='text-[12px] font-light'>{activity.data}</p>
              </div>
              <>
              { i < 6 && <div className={`w-[1px] h-4 ml-[49px] bg-black/30`}></div>}
              </>
             </div>
             )
})}
          </div>
          <div>
           
            
          </div>

          
        </div>
        <div></div>

        <div className=' h-full flex flex-col items-center justify-center bg-white rounded-xl shadow-lg lg:p-3'>
          <div className='  mb-12 md:mb-8 flex flex-col w-[80dvw] sm:w-full sm:px-[20px] py-[10px]'>
              <h1 className=' flex lg:items-start lg:justify-start items-center justify-center lg:w-full text-xl font-normal '>Recent Teachers</h1>
              <p className='flex lg:items-start lg:justify-start items-center justify-center lg:w-full text-sm font-light'>Income vs Expense</p>
            </div>
              <div className='flex gap-3 items-start mb-4 w-[80%]'>
                <div className={`w-10 h-10 rounded-lg bg-[#ECF2FF]`}></div>
                <div className='flex flex-col items-start justify-between'>
                  <h2 className='text-md text-normal'>Amal Hassen</h2>
                  <p className='text-sm font-light'>English</p>
                </div>
              </div>
              <div className='flex gap-3 items-center justify-start mb-4 w-[80%]'>
                <div className={`w-10 h-10 rounded-lg bg-[#E6FFFA]`}></div>
                <div className='flex flex-col items-start justify-between'>
                  <h2 className='text-md text-normal'>John Doe</h2>
                  <p className='text-sm font-light'>Amharic</p>
                </div>
              </div>
              <div className='flex gap-3 items-start mb-3 w-[80%]'>
                <div className={`w-10 h-10 rounded-lg bg-[#FEF5E5]`}></div>
                <div className='flex flex-col items-start justify-between'>
                  <h2 className='text-md text-normal'>John Doe</h2>
                  <p className='text-sm font-light'>English</p>
                </div>
              </div>
              <button className='text-sm text-[#5D87FF] border-[1px] py-[2px] my-3 border-[#5D87FF] flex items-center justify-center w-[80%] hover:bg-[#5D87FF] hover:text-white duration-300 ease-linear transition-all'>View all teachers</button>
            </div>
      </div>

        <div className='z-20'>
           <div className=' flex flex-col mb-2 w-[80%]'>
              <h1 className='flex items-start justify-start w-full text-xl font-normal '>Your Overall Progress</h1>
              <p className='text-sm font-light'>overview of profit</p>
            </div>
        
          <Doughnut data={chartData} />
        </div>

      </div>

     

      </div>
    </div>
  )
}

export default page