import Image from 'next/image'
import React from 'react'

const AccountType = () => {
  return (
    <div className='flex flex-col items-start justify-start gap-6'>
        <p className='flex items-start justify-start text-start text-md font-normal'>Chose your account type</p>
        <div className='flex flex-col gap-6 items-center justify-center'>
        <div className='flex items-center justify-around rounded-xl shadow p-6 gap-6'>
            <Image src='/account.png' alt='account' width={45} height={45} />
            <div className='flex flex-col gap-2 items-center justify-center'>
                <p className='text-md font-semibold'>Student Account</p>
                <p className='text-sm font-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
        </div>
        <div className='flex items-center justify-around rounded-xl shadow p-6 gap-6'>
            <Image src='/account.png' alt='account' width={45} height={45}  />
            <div className='flex flex-col gap-2 items-center justify-center'>
                <p className='text-md font-semibold'>Teacher's Account</p>
                <p className='text-sm font-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default AccountType