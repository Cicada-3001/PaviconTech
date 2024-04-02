import db from "@/app/libs/db";
import { NextResponse } from "next/server";




export async function POST(request) {
    try{
        const {
            firstName,
            lastName,
            age,
            town,
            gender
        } = await request.json()

        
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
            message: "Customer created Successfully",
            user:  newUser
        }, {status: 201})
    }catch(error){
        return NextResponse.json({error}, {status: 500})
    }
}



export async function GET(request) {
    try{
        const customers = await db.customer.findMany()
        return NextResponse.json({
            message: "Customer created Successfully",
            customers
        }, {status: 201})
    }catch(error){
        return NextResponse.json({error}, {status: 500})
    }

}


export async function UPDATE(request) {
    const { id } = request.json()
    try{
        const customer = await db.customer.update({
            where: {
                id
            }
        })
        return NextResponse.json({
            message: "User Updated Successfully",
            customer
        }, {status: 200})
    }catch(error){
        return NextResponse.json({error}, {status: 500})
    }

}


export async function DELETE(request) {
    const{ id } = request.json()
    try{
        const customers = await db.customer.delete(
            {
                where: { 
                    id
                }
            }
        )

        return NextResponse.json({
            message: "User deleted Successfully",
            customers
        }, {status: 200})
    }catch(error){
        return NextResponse.json({error}, {status: 500})
    }
}








