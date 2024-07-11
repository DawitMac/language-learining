import Image from 'next/image'
import React from 'react'

const DashboardNav = () => {
  return (
    <div className='fixed md:relative z-[-5]  flex item-center justify-end w-full py-5 px-16 bg-white'>
        <div className='flex items-center justify-center gap-4 '>
          <Image src='/notification.png' alt='notification' width={20} height={20} style={{ cursor : 'pointer'}} />
          <Image src='/translate.png' alt='translate' width={20} height={20} style={{ cursor : 'pointer'}} />
          <Image src='/grid.png' alt='grid' width={20} height={20} style={{ cursor : 'pointer'}} />
          <Image src='/profile.png' alt='profile-icon' width={20} height={20} style={{ cursor : 'pointer'}} />
        </div>
      </div>
  )
}

export default DashboardNav