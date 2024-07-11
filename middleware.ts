import { cookies } from "next/headers";
import { NextRequest , NextResponse } from "next/server";
import { dycrypt } from "./lib/session";

export async function middleware(req : NextRequest){
    const protectedRoute = ["/dashboard" , "/session" , "/teachers" , "/calendar" , "/profile" , "/subscription"];
    const currentRoute = req.nextUrl.pathname;
    const isProtected = protectedRoute.includes(currentRoute)

    if(isProtected){
        const session = cookies().get("session")?.value
        const payload = await dycrypt(session)
        if(!payload) return NextResponse.redirect(new URL("/login" , req.nextUrl))

        NextResponse.next();

    }
}