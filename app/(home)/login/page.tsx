import React from 'react'
import Image from 'next/image'

const Page = () => {
  return (
    <div className='h-screen flex items-center justify-between'>
        <Image src="/login-vector.png" alt="login_image" width={500} height={600} className='w-[50%] h-full' />
        <div>The form goes here</div>
    </div>
  )
}

export default Page