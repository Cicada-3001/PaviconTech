import db from "@/app/libs/db";
import EmailTemplate from "@/components/EmailTemplate";
import { hash } from "bcrypt";
import { NextResponse } from "next/server";
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {

    const {
        email
    } = await request.json()

    const existingUser = await db.user.findUnique({
            where: { 
                email
            }
        }
    )

    if(!existingUser)
        return  NextResponse.json({
          message: "User with the email does not exist",
      }, {status: 409})

    //randomly generate a 5 digit number 
    const passwordResetCode  =  Math.floor(Math.random()*90000)+10000

    //encrypt the verification code
    const hashedCode =  hash(passwordResetCode, 10)

    const userAuth = await db.auth.update({
      where: {
         userId: existingUser.id
      },
      data:{
        resetCode: hashedCode
      }
    })

    if(!userAuth)
      return NextResponse.json({
        message: "Code Not Generated",
    }, {status: 501})


    const data = await resend.emails.send({
      from: 'Pavicon <office@baccash.co.ke>',
      to: {email},
      subject:  'PAVICON PASSWORD RESET',
      react: <EmailTemplate  name={existingUser.firstName} code={passwordResetCode} />
    });
    return NextResponse.json({
        message: "Recovery code sent to your email",
        user:  data
    }, {status: 200})

  } catch (error) {
    return NextResponse.json({error}, {status: 500})
  }
};








    







