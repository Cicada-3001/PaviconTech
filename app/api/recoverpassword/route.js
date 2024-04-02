import db from "@/app/libs/db";
import EmailTemplate from "@/components/Email/EmailTemplate";
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
    
    if(!existingUser){
         return  NextResponse.json({
          message: "User with the email does not exist",
      }, {status: 404})
    }
     
   
    //randomly generate a 5 digit number 
    const random  = Math.floor(Math.random() * 900000) + 100000;
    const randomCode = random.toString()
   

    //encrypt the verification code
    const hashedCode =  await hash(randomCode, 10)

 
    
    const userAuth = await db.auth.upsert({
      where: {
        userId: existingUser.id
      },
      update: {
        resetCode: hashedCode
      },
      create: {
        userId: existingUser.id,
        resetCode: hashedCode
      }
    });
    

  
    if(!userAuth)
      return NextResponse.json({
        message: "Code Not Generated",
    }, {status: 501})
   

    const data = await resend.emails.send({
      from: 'Pavicon <office@baccash.co.ke>',
      to: {email},
      subject:  'RESET PAVICON ACCOUNT PASSWORD',
      react: <EmailTemplate  username={existingUser.firstName} code={passwordResetCode} />
    });

    console.log(data)
    

    return NextResponse.json({
        message: "Recovery code sent ",
    }, {status: 200})

  } catch (error) {
    return NextResponse.json({error}, {status: 500})
  }
};








    







