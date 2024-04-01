'use client'
import React from 'react'
import { useSession, signOut } from 'next-auth/react'
import { useRouter } from "next/navigation"

function Navbar({}) {
    const {data: session, status } = useSession()
    const router = useRouter()

    if(status  === "authenticated"){
        return <div className='flex flex-col items-center justify-center'> 
             <p>Logged in as {{ session.user.email }}</p>
             <button className='rounded-lg shadow-xl bg-blue-600 px-6 py-3' onClick={()=>{signOut()}}>Log Out</button>

        </div>
    }else{
        router.redirect("/login")
    }

    
}

export default Navbar
