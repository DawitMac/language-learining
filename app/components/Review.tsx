import Image from 'next/image'
import React from 'react'
import review1 from '../../public/review1.png'
import review2 from '../../public/review2.png'
import review3 from '../../public/review3.png'

const Review = () => {
  return (
    <div className='flex md:flex-row flex-col items-center justify-around w-screen md:h-[90dvh] md:my-0 my-20 md:gap-0 gap-4'>
        <div className='pl-[40px] md:mb-0 mb-20'>
        <Image src={review1} placeholder='blur' alt="review1" width={300} height={250} className=' w-auto h-auto'   />
        <Image src={review2} placeholder='blur' alt="review2" width={300} height={250}  className='mt-[-50px] ml-[-40px]  w-auto h-auto' />
        <Image src={review3} placeholder='blur' alt="review3" width={300} height={250} className='mt-[-50px]  w-auto h-auto'  />
        </div>
        <div className='flex flex-col items-start justify-center text-start md:w-[40%] w-[80%]'>
            <p className='text-3xl leading-10 mb-6 w-[95%]'>Reviews of people who learned language through our app</p>
            <p className='text-sm leading-2 mb-10'>Lorem ipsum dolor sit amet consectetur. In tellus nec quis diam. Mattis vitae ut molestie cursus. Mauris habitasse sed quisque nunc sed sed. Nec sed adipiscing in molestie.</p>
        </div>
    </div>
  )
}

export default Review