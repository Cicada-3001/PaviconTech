import db from "@/app/libs/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { firstName, lastName, age, town, gender } = await request.json();

    const newCustomer = await db.customer.create({
      data: {
        firstName,
        lastName,
        age,
        town,
        gender,
      },
    });

    return NextResponse.json(
      {
        message: "Customer created Successfully",
        customer: newCustomer,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

export async function GET(request) {
  try {
    const customers = await db.customer.findMany();
    return NextResponse.json(
      {
        message: "Success",
        customers,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

export async function PUT(request) {
  const { id, firstName, lastName, age, town, gender } = await request.json();
  try {
    const customer = await db.customer.update({
      where: {
        id,
      },
      data: {
        firstName,
        lastName,
        age,
        town,
        gender,
      },
    });
    return NextResponse.json(
      {
        message: "success",
        customer,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

export async function DELETE(request) {
  const { id } = await request.json();
  try {
    const customer = await db.customer.delete({
      where: {
        id,
      },
    });

    return NextResponse.json(
      {
        message: "success",
        customer,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
