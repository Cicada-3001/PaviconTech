'use client'
import '../styles/main.css';
import '../styles/global.css';

import { useState, useEffect } from 'react';
//import {  signOut ,useSession } from 'next-auth/react';
import { useRouter } from "next/navigation"
import Loader from '@/components/common/Loader';
import DefaultLayout from '@/components/Layouts/DefaultLayout';
import Table from '@/components/common/Table';
import CustomerForm from '@/components/Forms/CustomerForm';

export default function Home() {
  const router = useRouter()
  //const { data: session, status } = useSession()
  const [show, setShow ] = useState(false)
  const [loading, setLoading] = useState(true);
  const [isCreating, setIsCreating] = useState(false)


  const columns=[
    'Firstname',
    'Lastname',
    'Age',
    'Town',
    'Gender'
  ]

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);


  return (
  
      loading ?  <Loader/>  : <DefaultLayout>
        <div className="flex justify-end text-center mt-10 mb-4">
            <button className="flex items-center bg-boxdark text-bodydark1 px-6 py-2  cursor-pointer" onClick={()=> setIsCreating(!isCreating)}><span>{ isCreating? 'Back' : 'New Customer'}</span><i className='bx bx-caret-right ml-1'></i></button>
        </div>
        {
          isCreating ? <CustomerForm/> : <Table title={'Customers'} columns={columns} data={[]}/>
        }
        
      </DefaultLayout>
    
  )
  
}
