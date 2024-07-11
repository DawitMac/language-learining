"use client"
import React, { useActionState } from 'react'
import Image from 'next/image'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import { Input } from '@/components/ui/input'
import { login } from '@/lib/action'
import { useFormState, useFormStatus } from 'react-dom'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import ClipLoader from "react-spinners/ClipLoader";

const Page = () => {
  let guest = false
  const router =  useRouter()

const [ errorMessage , action  ] = useFormState(login, guest)
  return (
    <motion.div initial={{ opacity : 0 }} animate={{ opacity : 1}} exit={{ opacity : 0}} className='w-screen'>
    <div className='flex items-center justify-between px-12 w-full'>
  <Image src="/logo.png" alt='logo' width={70} height={70} className='mt-4 cursor-pointer  w-auto h-auto' onClick={()=> router.push("/")} />
  <Link href='/signup'>
  <button className='text-sm p-3 bg-[#5D87FF] text-white hover:scale-105 transition-all duration-300 ease-out rounded-lg'>Signup</button>
  </Link>
  </div>
    <div className='h-[90dvh] flex items-center justify-center w-full' >
        <form action={action} className='md:w-[40%] w-[80%] flex flex-col items-center justify-center'>
        <Card className='p-4 w-full'>
  <CardHeader>
    <CardTitle>Sign in to your account</CardTitle>
    {/* <CardDescription>Card Description</CardDescription> */}
  </CardHeader>
  <CardContent className='w-[90%] mt-8'>
  <div aria-describedby='email' className=' flex flex-col md:gap-2 gap-3 items-start justify-start w-full'>
           <p  className='text-md font-normal'>Email</p>
            <Input name='email' placeholder='jhondoe@gmail.com' className='w-full' />
            { errorMessage?.errors?.email && <p id="email" aria-atomic='true' aria-live='polite' className='texr-sm text-red-600/90 font-normal mt-1'>{errorMessage.errors.email}</p>}
        </div>
  </CardContent>
  <CardContent className='w-[90%]'>
  <div aria-describedby='password' className=' flex flex-col md:gap-2 gap-3 items-start justify-start w-full'>
           <p className='text-md font-normal'>Password</p>
            <Input name='password' placeholder='**********' className='w-full' type='password'/>
            { errorMessage?.errors?.password && <p id="password" aria-atomic='true' aria-live='polite' className='texr-sm text-red-600/90 font-normal mt-1'>{errorMessage.errors.password}</p>}
        </div>
  </CardContent>
  <CardContent className='flex gap-3 items-center'>
  <Input  type='checkbox' name='guest' className='w-6 h-6' />
  <p className='text-sm font-normal'>Continue as a guest</p>
  </CardContent>
 <CardFooter>
 <div className='flex items-center justify-center w-full'>
         <CustomButton />
  
 </div>
 </CardFooter>
</Card>

        </form>
    </div>
    </motion.div>
  )
}

export const CustomButton = ()=>{

  const { pending} = useFormStatus();
  console.log(pending , "this is the pending status")

  return(
  <div className='flex flex-col items-center justify-center w-full  gap-4 mt-4'>
  {
    pending ?     <button type='submit' className='text-sm py-3 w-[60%] px-8 bg-[#5D87FF]/50 text-white hover:scale-105 transition-all duration-300 ease-out rounded-lg'>
      <ClipLoader
        color="#fff"
        loading={true}
        size={20}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
       </button> :
    <button type='submit' className='text-sm py-3 w-[60%] px-8 bg-[#5D87FF] text-white hover:scale-105 transition-all duration-300 ease-out rounded-lg'>Login</button>
  }


  </div>
  )


}

export default Page