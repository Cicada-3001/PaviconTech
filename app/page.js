"use client";
import "../styles/main.css";
import "../styles/global.css";

import { useState, useEffect } from "react";
import Loader from "@/components/common/Loader";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Table from "@/components/common/Table";
import CustomerForm from "@/components/Forms/CustomerForm";
import { getCustomers } from "./libs/customer";
import { redirect } from "next/navigation"
import { useSession, signIn, signOut } from "next-auth/react"

/*
export default function Component() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )
}*/



export default function Home() {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isCreating, setIsCreating] = useState(false);
  const [customers, setCustomers] = useState([]);
  const [formData, setFormData] = useState(null)
  

  const {  status } = useSession()
  const columns = ["Firstname", "Lastname", "Age", "Town", "Gender"];

  if (status !== "authenticated") {
   redirect("/login")
  }

  useEffect(() => {
    fetchData();
  },[]);

  const fetchData = async () => {
    try {
      const response = await getCustomers();
      if (response.status === 200) {
        setCustomers(response?.data?.customers);
      }
    } catch (error) {
      console.error("Error fetching customers:", error);
    }
  };

  const getFormData = (data) => {
      setFormData({...data})
  };


  

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  
    return(
    loading ? (
      <Loader />
    ) : (
      <DefaultLayout>
        <div className="flex justify-end text-center mt-10 mb-4">
          <button
            className="flex items-center bg-boxdark text-bodydark1 px-6 py-2  cursor-pointer"
            onClick={() => {
              setIsCreating(!isCreating)
              setFormData(null)
            } }
          >
            <span>{isCreating || formData ? "Back" : "New Customer"}</span>
            <i className="bx bx-caret-right ml-1"></i>
          </button>
        </div>
        {isCreating  || formData ? (
          <CustomerForm customerInfo={...formData}  />
        ) : (
          <Table columns={columns} data={customers}  passFormData={getFormData}/>
        )}
      </DefaultLayout>
    )
    )
  
  



 
}
