'use client'
import '../styles/main.scss';
import { useState } from 'react';
//import {  signOut ,useSession } from 'next-auth/react';
import { useRouter } from "next/navigation"

export default function Home() {
  const router = useRouter()
  //const { data: session, status } = useSession()
  const [show, setShow ] = useState(false)



  return (
      <main>
      </main>
  )
  
}
