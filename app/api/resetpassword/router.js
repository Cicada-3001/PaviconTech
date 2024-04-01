import db from "@/app/libs/db";
import { hash } from "bcrypt";
import { NextResponse } from "next/server";



export async function POST(request) {
  try {
    const {
        email,
        password
    } = await request.json()

    const hashedPassword = hash(password, 10)

    const user = await db.user.update({
      where: {
        email
      },
      data:{
        password: hashedPassword
      }
    })

    return NextResponse.json({
        message: "Password Reset Success",
        user
    }, {status: 200})

  } catch (error) {
    return NextResponse.json({error}, {status: 500})
  }
};








    







