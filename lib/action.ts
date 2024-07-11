"use server"

import { z } from "zod"
import { user } from "@/util/data"
import { createSession, deleteSession } from "./session";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

// type User = {
//     email : string;
//     password : string;
// }
type State = {
    errors : {
        email? : string[] | null;
        password? : string[]  | null;
    };
}

const validation = z.object({
    email : z.string({ invalid_type_error : "Please provide you email"}).email({ message : "Please provide a valid email"}),
    password : z.string({ invalid_type_error : "Password is required"}).min(4 , {message : "Password must be greaterthan 4 characters"})
})

export const login = async( initialState: Promise<State | undefined> ,formData : FormData) : Promise<State | undefined>  =>{
    
if(formData.get("guest")) return await createSession("guest@gmail.com")
 const validateUser = validation.safeParse({
    email : formData.get("email"),
    password : formData.get("password")
 })

 if(!validateUser.success) return { errors : validateUser.error.flatten().fieldErrors}
  
 const { email ,password } = validateUser.data
 const checkUser = user.find((client , index ) => client.email === email )
 if(!checkUser) return { errors : { email : ["No user with this email"] , password : null }}

 if(checkUser.password !== password) return { errors : { email : null , password :  ["Incorrect Password"] }}
 

  return await createSession(email)
}

export const logOut = async()=>{
    await deleteSession()
}