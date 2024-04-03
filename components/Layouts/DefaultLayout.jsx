"use client";
import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header";
//import { getServerSession } from "next-auth";
//import { redirect } from "next/navigation";


export default function DefaultLayout({
  children,
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
 // const session = await getServerSession()
 

  //if(!session)
  //  redirect("/login")
  
  return (
   
      <div className="flex h-screen overflow-hidden ">
     
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
    
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          {/* <!-- ===== Header Start ===== --> */}
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          
          {/* <!-- ===== Header End ===== --> */}

          {/* <!-- ===== Main Content Start ===== --> */}
          <main>
            <div className="mx-auto  min-h-screen h-full max-w-screen-2xl p-4 md:p-6 2xl:p-10" style={{ background: "#f2f2f2"}}>

              {children}
            </div>
          </main>
        </div>

      </div>
   
      
  );
}
