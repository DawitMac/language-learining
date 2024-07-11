import DashboardNav from '@/app/components/DashboardNav'
import React from 'react'
import Upcomming from './Upcomming'
import Past from './Past'


const sessionList = [
  {
    title : "Upcoming Sessions",
    isActive : true,
    component : <Upcomming />
  },
  {
    title : "Past Sessions",
    isActive : false,
    component : <Past />
  }
]

const page = () => {
  return (
    <div className='flex flex-col items-center justify-start w-screen lg:w-[90dvw] lg:ml-[200px]'>
      <DashboardNav />
      <p  className='flex items-center justify-center w-full text-2xl font-semibold'>Session Details</p>
      <div className='flex items-center justify-center gap-10'>
        {
          sessionList.map((list , i)=>(
            <p key={i} className='text-lg font-normal'>{list.title}</p>
          ))
        }
      </div>
</div>
  )
}

export default page