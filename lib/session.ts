// import "server-only";
import { SignJWT , jwtVerify } from 'jose'
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { NextResponse } from "next/server";

type Payload = {
    email : string;
    expires : Date;
}

const key: Uint8Array = new TextEncoder().encode(process.env.AUTH_SECRET);
export const encrypt = async(payload : Payload) =>{
  return new SignJWT(payload)
   .setProtectedHeader({alg : "HS256"})
   .setIssuedAt()
   .setExpirationTime("1day")
   .sign(key)
}

export const dycrypt = async ( session : string )=>{
   try {
    const { payload } = await jwtVerify(session , key , {
        algorithms : ["HS256"]
    })
    return payload;
   } catch (error) {
    return null;
   }
}

const cookie = { 
    name : "session" ,
    options : {
        httpOnly : true ,
        secure : true,
        sameSite : "lax",
        path : "/"
    },
    expires : 24 * 60 * 60 * 1000
}

 export const createSession = async(email : string)=>{

    const expires = new Date(Date.now() + cookie.expires)
    const session = await encrypt({email , expires})

    cookies().set(cookie.name , session , {  httpOnly : true , secure : true, sameSite : "lax", path : "/" , expires});
    console.log("redirecting to dashboard")
    redirect("/dashboard")
   
}

export const deleteSession = async()=>{
    console.log("redirecting user to login")
    cookies().delete("session")
    return redirect("/login")
}