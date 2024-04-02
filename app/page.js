'use client'
import '../styles/main.scss';
import { useState } from 'react';
//import {  signOut ,useSession } from 'next-auth/react';
import { useRouter } from "next/navigation"
import Sidebar from '@/components/Sidebar';

export default function Home() {
  const router = useRouter()
  //const { data: session, status } = useSession()
  const [show, setShow ] = useState(false)



  return (
      <Sidebar/>
     
  )
  
}
