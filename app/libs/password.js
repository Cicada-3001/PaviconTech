import axios from 'axios'


export const recoverPassword = async (data) =>{
    return await axios.post("http://localhost:3000/api/recoverpassword", data)
}

export const resetPassword = async (data) =>{
    return await axios.post("http://localhost:3000/api/resetpassword", data)
}