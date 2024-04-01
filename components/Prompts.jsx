import React from 'react'

function Prompts() {
    return (
        <div className="flex flex-col justify-center space-y-16 md:h-screen max-md:mt-16 min-h-full bg-gradient-to-r from-blue-500 to-blue-700 lg:px-8 px-4 py-4">
        <div>
          <h4 className="text-white text-lg font-semibold">Secure Authentication</h4>
          <p className="text-[13px] text-white mt-2">Log in with your registered email and password securely.</p>
        </div>
        <div>
          <h4 className="text-white text-lg font-semibold">Remember Me</h4>
          <p className="text-[13px] text-white mt-2">Enable the "Remember Me" option for a seamless login experience in future sessions.</p>
        </div>
        <div>
          <h4 className="text-white text-lg font-semibold">Forgot Password?</h4>
          <p className="text-[13px] text-white mt-2">Easily recover your account by clicking on the "Forgot Password?" link.</p>
        </div>
      </div>
    )
}

export default Prompts
