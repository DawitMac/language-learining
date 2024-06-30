import Image from 'next/image'
import React from 'react'

const Review = () => {
  return (
    <div className='flex items-center justify-around w-screen h-[90dvh] '>
        <div className='pl-[40px]'>
        <Image src="/review1.png" alt="review1" width={300} height={250}   />
        <Image src="/review2.png" alt="review2" width={300} height={250}  className='mt-[-50px] ml-[-40px]' />
        <Image src="/review3.png" alt="review3" width={300} height={250} className='mt-[-50px]'  />
        </div>
        <div className='flex flex-col items-start justify-center text-start w-[40%]'>
            <p className='text-3xl leading-10 mb-6 w-[95%]'>Reviews of people who learned language through our app</p>
            <p className='text-sm leading-2 mb-10'>Lorem ipsum dolor sit amet consectetur. In tellus nec quis diam. Mattis vitae ut molestie cursus. Mauris habitasse sed quisque nunc sed sed. Nec sed adipiscing in molestie.</p>
        </div>
    </div>
  )
}

export default Review