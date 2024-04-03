import axios from 'axios'


export const recoverPassword = async (data) =>{
    return await axios.post("https://pavicon-tech.vercel.app/api/recoverpassword", data)
}

export const resetPassword = async (data) =>{
    return await axios.post("https://pavicon-tech.vercel.app/api/resetpassword", data)
}