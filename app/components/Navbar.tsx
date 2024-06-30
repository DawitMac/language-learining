import Image from 'next/image'
import React from 'react'
import { menu } from '@/util/data'
import Link from 'next/link'
import { poppins } from '../ui/fonts'
import Button from './Button'

const Navbar = () => {
  return (
    <div className='flex items-center justify-around w-screen p-6 '>
        <Image src="/logo.png" alt='logo' width={100} height={100} />
        <ul className={`${poppins.className} flex items-center justify-center gap-4 bg-[#F4F5F9] rounded-full p-4 text-sm`}>
            {
                menu.map((list , index ) => (
                    <li key={index}>
                        <Link href={list.url}>{list.name}</Link>
                    </li>
                ))
            }
        </ul>
        <div className='flex items-center justify-center gap-4'>
            <Link href='/login'>
             <button className='text-sm p-3 bg-[#5D87FF] text-white hover:scale-105 transition-all duration-300 ease-out rounded-lg'>Login</button>
            </Link>
            <span className='flex items-center justify-center gap-1'>
                <Image src='/language.png' alt='language' width={15} height={15} />
            <p className='text-sm'>English</p>
            </span>
        </div>
    </div>
  )
}

export default Navbar