'use client'
import React from 'react'
import { SessionProvider } from "next-auth/react"

function MainLayout({children, session}) {

    return (
        <SessionProvider session={session}  >
            {
            children
            }
        </SessionProvider> 
    )
}

export default MainLayout
