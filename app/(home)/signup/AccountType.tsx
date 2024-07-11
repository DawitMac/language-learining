'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { unstable_noStore as noStore } from 'next/cache'


const acc = [
    {
        title : "Student Account",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit." ,
        isSelected : true
    },
    {
        title : "Teacher's Account",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit." ,
        isSelected : false
    },
]

const AccountType = ({handleRefresh} : { handleRefresh : ()=> void}) => {
    noStore();
    const [ account , setAccount] = useState(acc) 
    //const router = useRouter()
    const handleClick = ( index : number)=>{
        
            const value = account
            value[index].isSelected = !value[index].isSelected
            setAccount(value)  
            handleRefresh()
    }
  return (
    <div className='flex flex-col items-start justify-start gap-6'>
        <p className='flex items-start justify-start text-start text-md font-normal'>Chose your account type</p>
        <div className='flex flex-col gap-6 items-center justify-center'>
        
           {
            account.map((item, i)=>(
                <div key={i} className={`flex items-center justify-around rounded-xl shadow p-6 gap-6 cursor-pointer hover:scale-105 duration-300 ease-in-out ${item.isSelected && 'bg-[#5D87FF] text-white'}`}
                onClick={() => handleClick(i)}>
                    <Image src='/account.png' alt='account' width={45} height={45} />
                <div className='flex flex-col gap-2 items-center justify-center'>
                    <p className='text-md font-semibold'>{item.title}</p>
                    <p className='text-sm font-normal'>{item.description}</p>
                </div>
                </div>
            ))
           }
        </div>
        
    </div>
  )
}

export default AccountType