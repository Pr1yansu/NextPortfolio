//api for new letter with next 13

import { Newsletter } from "@/models/Newsletter";
import { connectDB } from "@/utils/db";
import { NextResponse } from "next/server";
import { sendConfirmationEmail } from "@/utils/mailer";

//post request for creating a new newsletter
export async function POST(request) {
  try {
    await connectDB();

    const bodyText = await request.text();
    const requestBody = JSON.parse(bodyText);
    const { email } = requestBody;
    const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // handling if fields are empty
    if (!emailFormat.test(email)) {
      return NextResponse.json(
        {
          message: "Please enter a valid email",
          status: "error",
        },
        { status: 400 }
      );
    }
    if (!email) {
      return NextResponse.json(
        {
          message: "Please fill all fields",
          status: "error",
        },
        { status: 400 }
      );
    }
    const newsletter = new Newsletter({
      email,
    });
    await newsletter.save();
    await sendConfirmationEmail(email);
    return NextResponse.json(
      {
        message: "Success",
        status: "ok",
        newsletter,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Server Error",
        status: error,
      },
      { status: 500 }
    );
  }
}
