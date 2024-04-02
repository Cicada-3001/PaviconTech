import db from "@/app/libs/db";
import { compare, hash } from "bcrypt";
import { NextResponse } from "next/server";



export async function POST(request) {
  try {
    const {
        userId,
        email,
        password, 
        code
    } = await request.json()

   

       
    const userAuth = await db.auth.findUnique({
        where: {
            userId
        },
    })

    //Check if the  code is valid
    const codeMatch = await compare(code, userAuth.resetCode)

    if(!codeMatch)
        return NextResponse.json({
          message: "Wrong Code", 
    }, { status: 404 })

    
    const hashedPassword = hash(password, 10)

    const user = await db.user.update({
      where: {
        email
      },
      data:{
        password: hashedPassword
      }
    })

    //delete the record  with the reset code, it was meant to for temporal usage
    if(user)
      await db.user.delete({
          where: {
            userId
          }
    })
      
    return NextResponse.json({
        message: "Password Reset. Login with the new password",
        user
    }, {status: 200})

  } catch (error) {
    return NextResponse.json({error}, {status: 500})
  }
};








    







