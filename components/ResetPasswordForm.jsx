'use client'
import React from 'react'
import { useForm } from 'react-hook-form';
import { useState } from "react"
import Link from "next/link"
import Prompts from './Prompts';
import { recoverPassword } from '@/app/libs/password';


function ResetPasswordForm() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }, 
      } = useForm()


    const [loading,setLoading] = useState(false)
    const [authError, setAuthError] = useState('')
    const [inputValues, setInputValues ] = useState(['','','','','',''])
    const [code, setCode] = useState('')
    const [codeIsFull, setCodeIsFull] = useState(false)


    const handleChange = async (e,index) => {
      const newInputValues = [...inputValues]
      newInputValues[index]= e.target.value
      await setInputValues(newInputValues)
      setCodeIsFull(!newInputValues.some(value => value === ''))
     //console.log(newInputValues)
      console.log(codeIsFull)
    }

    const  generateString = () => {
      const concatenatedString = inputValues.join('')
      console.log(concatenatedString)
      setCode(concatenatedString)
    }

    
    async function onSubmit(data){
      try{
        console.log(data)
        generateString()
        const response = await axios.post(RESET_PASSWORD_URL,{...data, code})
        const responseData = await response.json()
        console.log(responseData)
        if(response.ok){
          setLoading(false)
          toast.success("Password Reset")
          reset()
        }else{
          setLoading(false)
          if(response.status === 409){
            setAuthError("Wrong password recovery code")
            toast.error("wrong password  recovery code")
          }else{
            toast.error("Ops something went wrong !")
          }
        }
      }catch(error){
        console.log(error)
      }
    }
    
    return (
        <div className="font-[sans-serif] text-[#333] bg-white">
        <div className="grid lg:grid-cols-4 md:grid-cols-3 items-center">
          <form  onSubmit={handleSubmit(onSubmit)} className="lg:col-span-3 md:col-span-2 max-w-lg w-full p-6 mx-auto">
            <div className="mb-16">
              <h3 className="text-4xl font-extrabold">{codeIsFull? 'RESET YOUR PASSWORD' : 'PASSWORD RESET'}</h3>
              <p className="text-sm mt-6">{codeIsFull? 'Please reset your password. Use a strong but easy to remember password': 'Enter the code we sent to your email'}</p>
            </div>
           
              
              <div className="mx-auto">
                <div className="w-full">
                    <div className=" ounded text-center">
                      <div id="otp" className="flex flex-row justify-center text-center px-3 mt-2">
                        {
                          inputValues.map((value, index)=> {
                            return<input key={index}  type='text' value={value} onChange={(e)=> handleChange(e, index)} className="m-2 border  border-blue-300 h-12 w-12 text-center form-control rounded" maxLength="1" /> 
                          })
                        }
                      </div>
                          
                      <div className="flex justify-end text-center mt-16">
                          <button className="flex items-center bg-blue-600 text-white px-6 py-2 rounded cursor-pointer" onClick={()=> recoverPassword()}><span className="font-bold">Resend Code</span><i className='bx bx-caret-right ml-1'></i></button>
                      </div>
                    </div>
                </div>
              </div>
              
               {codeIsFull && (
                <><div className="relative flex items-center mt-10">
                    <label className="text-[13px] bg-white absolute px-2 top-[-10px] left-[18px] font-semibold">New Password</label>
                    <input {...register('email', { required: true })} type="Password" placeholder="Enter password"
                      className="px-4 py-3.5 bg-white w-full text-sm border-2 border-gray-200 focus:border-blue-600 rounded outline-none" />
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-4 cursor-pointer" viewBox="0 0 128 128">
                      <path d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z" data-original="#000000"></path>
                    </svg>
                  </div><div className="relative flex items-center mt-10">
                      <label className="text-[13px] bg-white absolute px-2 top-[-10px] left-[18px] font-semibold">Confirm Password</label>
                      <input {...register('password', { required: true })} type="Password" placeholder="Enter password"
                        className="px-4 py-3.5 bg-white w-full text-sm border-2 border-gray-200 focus:border-blue-600 rounded outline-none" />
                      <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-4 cursor-pointer" viewBox="0 0 128 128">
                        <path d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z" data-original="#000000"></path>
                      </svg>
                    </div><div className="mt-10">
                      {loading ? (
                        <div className='mt-10'>
                          <button disabled="" type="submit" className="w-full shadow-xl py-2.5 px-4 text-sm font-semibold rounded  bg-blue-600 text-white  hover:bg-blue-700 focus:outline-none border border-slate-50 hover:border-0">
                            <svg aria-hidden="true" role="status" className="inline mr-2 w-4 h-4 text-white animate-spin dark:text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"></path>
                              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#1C64F2"></path>
                            </svg>
                            Resetting Password. Please wait ...
                          </button>
                        </div>
                      ) : (<div className="mt-10">
                        <button type="submit" className="w-full shadow-xl py-2.5 px-4 text-sm font-semibold rounded text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
                          RESET PASSWORD
                        </button>
                      </div>
                      )}
                    </div><p className="text-sm mt-10 text-center">Don't have an account <Link href="#" className="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap">Register here</Link></p></>
              )
            }
          </form>
          <Prompts /> 
        </div>
      </div>
      )

        
    
}

export default ResetPasswordForm
