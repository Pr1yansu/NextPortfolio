// POST route for skills

import { Skills } from "@/models/Skills";
import { connectDB } from "@/utils/db";
import { NextResponse } from "next/server";

//post request for creating a new skill
export async function POST(request) {
  try {
    await connectDB();

    const bodyText = await request.text();
    const requestBody = JSON.parse(bodyText);
    const { name, description, percentage } = requestBody;

    // handling if fields are empty
    if (!name || !description || !percentage) {
      return NextResponse.json(
        {
          message: "Please fill all fields",
          status: "error",
        },
        { status: 400 }
      );
    }
    const skill = new Skills({
      name,
      description,
      percentage,
    });
    await skill.save();
    return NextResponse.json(
      {
        message: "Success",
        status: "ok",
        skill,
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

//get request for getting all skills

export async function GET() {
  try {
    await connectDB();
    const skills = await Skills.find({});
    return NextResponse.json(
      {
        message: "Success",
        status: "ok",
        skills,
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
