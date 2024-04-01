import db from "@/app/libs/db";
import { NextResponse } from "next/server";
import { hash } from "bcrypt";



export async function POST(request) {
    try{
        const {
            firstName,
            lastName,
            email,
            age,
            town,
            gender, 
            password
        } = await request.json()

        // Check if user already exists
       const userExists = await db.user.findUnique({
            where: {
                email
            },
        })

        if(userExists){
            return NextResponse.json({
                message: "User alread exists", 
                user: null
            }, { status: 200 })
        }

        //hash the password before storage 
        const hashedPassword = await hash(password, 10)

        
        const newUser= await db.user.create({
            data: {
                firstName,
                lastName,
                email,
                age,
                town,
                gender,
                password:hashedPassword
            }
        })

        return NextResponse.json({
            message: "User Created Successfully",
            user:  newUser
        }, {status: 201})
    }catch(error){
        return NextResponse.json({error}, {status: 500})
    }

}






