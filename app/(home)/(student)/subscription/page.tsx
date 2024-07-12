import DashboardNav from 'app/components/DashboardNav'
import { invoices, subOverview, subUpcomming } from 'util/data'
import Image from 'next/image'
import React from 'react'
import subscription from '../../../../public/subscription.png'

const page = () => {
  return (
    <div className='flex flex-col items-center justify-start w-screen lg:w-[90dvw] lg:ml-[200px] mb-20'>
      <DashboardNav />
      
      <div className='mt-24 lg:mt-0 md:mt-0 -z-10 lg:z-0 md:w-[80%] w-full'>
      <div className='flex flex-col flex-wrap items-center justify-center w-full gap-1 mb-8 '>
      <p  className='text-2xl font-semibold w-[80%]'>My subscriptions</p>
      <p  className=' text-md font-light w-[80%]'>View, progress and manage subscription efficiently</p>
      </div>
      <div className=' flex md:flex-row flex-col items-center md:items-start justify-between  gap-16 md:gap-8'>
      
        <div className='flex flex-col items-start justify-center gap-16'>
          <div className=' flex flex-col items-start justify-center bg-[#F7F6FA] gap-3 rounded-lg'>
           <Image src={subscription} placeholder='blur' alt="subscription_image" width={300} height={100} className='rounded-t-md' />
           <div className='w-full flex flex-col gap-2  px-4 py-2'>
           <p className='text-sm font-normal'>Jerome Bell</p>
           <p className='text-md font-semibold'>$78</p>
           <div className='w-full  flex items-center justify-between'>
           <p className='text-sm font-light'>4 sessions</p>
            <p className='text-md text-[#5D87FF]'>View</p>
           </div>
           </div>
          </div>
          <div className='flex flex-col items-start gap-2'>
            {
              invoices.map((invoice , i)=>(
                <div key={i} className='flex items-center justify-center gap-16'>
                  <div className='flex flex-col gap-[2px]'>
                    <p className='text-sm font-semibold'>{invoice.id}</p>
                    <p className='text-[12px] font-light'>{invoice.date}</p>
                  </div>
                  <p className='text-sm font-semibold'>{invoice.price}</p>
                  <p className='text-sm font-semibold'>{invoice.type}</p>
                </div>
              ))
            }
          </div>
        </div>

        <div className='flex flex-col items-start justify-center gap-16'>
         <div className='flex flex-col gap-6 items-start'>
          <p className='text-xl font-bold'>Current Mont Overview</p>
         <div className='flex items-center justify-center gap-8'>
            {
              subOverview.map((overview , i)=>(
                <div key={i} className={`flex flex-col gap-1 ${ overview.isActive && ' p-2 text-white bg-[#5D87FF] rounded-lg'}`}>
                  <p className='text-sm font-semibold'>{overview.month}</p>
                  <p className='text-sm font-semibold'>{overview.day}</p>
                </div>
              ))
            }
          </div>
         </div>

         <div className='flex flex-col gap-6 items-start'>
         <p className='text-xl font-bold'>Upcoming payment this month</p>
         <div className='flex flex-col items-center justify-center gap-3'>
            {
              subUpcomming.map((overview , i)=>(
                <div key={i} className={`flex items-center justify-between gap-8 rounded-lg py-2 px-4 w-full ${ overview.isActive && 'bg-[#E7F6FD]'}`}>
                  <p className={`text-sm font-semibold p-3 rounded-full  text-black ${overview.isActive && 'bg-[#5D87FF] text-white'}`}>{overview.num}</p>
                  <p className='text-sm font-semibold '>{overview.info}</p>
                  <p className=' text-sm font-normal'>{overview.time}</p>
                </div>
              ))
            }
          </div>
         </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default page