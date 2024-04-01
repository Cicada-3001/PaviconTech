
const baseUrl = process.env.BASE_URL

export const REGISTER_URL = `${baseUrl}/api/user`
export const RECOVER_PASSWORD_URL = `${baseUrl}/api/recoverpassword`
export const RESET_PASSWORD_URL = `${baseUrl}/api/resetpassword`
export const EMAIL_PATTERN =  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;