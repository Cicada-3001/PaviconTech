'use client'
import React, { useState } from 'react'
import Link from "next/link"
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import axios from 'axios'
import { createCustomer } from '@/app/libs/customer';


function CustomerForm() {
    const [loading,setLoading ] = useState(false)
    const [error, setError ] = useState('')

    const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
    } = useForm();


    
    async function onSubmit(data){
      console.log(data)
      try{
        setLoading(true)
        const response = await createCustomer(data)
        if(response.status === 201){
          setLoading(false)
          toast.success("Customer Created Successfully")
          reset()
        }else{
            console.log(response)
            setLoading(false)
            setError("Error creating customer")
            toast.error("Error creating customer")
        }
            
    } catch(error){
        console.log(error)
        toast.error("Ops something went wrong. Try again !")
    }
  }
    

    return (
        <div className="grid grid-cols-1 max-w-3/4">
        <div className="flex flex-col gap-9">
          {/* <!-- Contact Form --> */}
          <div className="rounded-sm border border-stroke bg-white shadow-default ">
            <div className="border-b border-stroke px-6.5 py-4">
              <h3 className="font-medium text-black">
                New Customer
              </h3>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} >
              <div className="p-6.5">
                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full xl:w-1/2">
                    <label className="mb-3 block text-sm font-medium text-black">
                      First name
                    </label>
                    <input
                      {...register('firstName', { required: true })}
                      type="text"
                      placeholder="Enter first name"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter "
                    />
                  </div>

                  <div className="w-full xl:w-1/2">
                    <label className="mb-3 block text-sm font-medium text-black ">
                      Last name
                    </label>
                    <input
                      {...register('lastName', { required: true })}
                      type="text"
                      placeholder="Enter last name"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter "
                    />
                  </div>
                </div>

                <div className="mb-4.5">
                  <label className="mb-3 block text-sm font-medium text-black ">
                    Age <span className="text-meta-1">*</span>
                  </label>
                  <input
                    {...register('age', { required: true })}
                    type="number"
                    placeholder="Enter age"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter "
                  />
                </div>

                <div className="mb-4.5">
                  <label className="mb-3 block text-sm font-medium text-black ">
                    Town
                  </label>
                  <input
                    {...register('town', { required: true })}
                    type="text"
                    placeholder="Enter Town"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter "
                  />
                </div>


                <div className="mb-4.5">
                  <label className="mb-3 block text-sm font-medium text-black ">
                    Gender
                  </label>
                  <select
                    {...register('gender', { required: true })}
                    type="text"
                    name="gender"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter ">
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  
                </div>

                <p className='text-red-500 mb-5'>{error}</p>

                
                {
                  loading ? <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90">
                  Addding Customer ...
                </button> : <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90">
                  Add New Customer
                </button>
                }
                
                
              </div>
            </form>
          </div>
        </div>
    </div>

    )
}

export default CustomerForm
