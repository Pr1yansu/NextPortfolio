import { Project } from "@/models/Projects";
import { connectDB } from "@/utils/db";
import { NextResponse } from "next/server";

//post request for creating a new project

export async function POST(request) {
  try {
    await connectDB();

    const bodyText = await request.text();
    const requestBody = JSON.parse(bodyText);

    const { name, description, image, tags } = requestBody;

    // handling if fields are empty
    if (!name || !description || !image || !tags) {
      return NextResponse.json(
        {
          message: "Please fill all fields",
          status: "error",
        },
        { status: 400 }
      );
    }
    const project = new Project({
      name,
      description,
      image,
      tags,
    });
    await project.save();
    return NextResponse.json(
      {
        message: "Success",
        status: "ok",
        project,
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

//get request for getting all projects

export async function GET() {
  try {
    await connectDB();
    const projects = await Project.find({});
    return NextResponse.json(
      {
        message: "Success",
        status: "ok",
        projects,
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

//Update request for updating a project

export async function PUT(request) {
  try {
    await connectDB();

    const bodyText = await request.text();
    const requestBody = JSON.parse(bodyText);

    const { name, description, image, tags } = requestBody;

    // handling if fields are empty
    if (!name || !description || !image || !tags) {
      return NextResponse.json(
        {
          message: "Please fill all fields",
          status: "error",
        },
        { status: 400 }
      );
    }
    const project = await Project.findById(requestBody.id);

    if (!project) {
      return NextResponse.json(
        {
          message: "Project not found",
          status: "error",
        },
        { status: 404 }
      );
    }

    project.name = name;
    project.description = description;
    project.image = image;
    project.tags = tags;

    await project.save();

    return NextResponse.json(
      {
        message: "Success",
        status: "ok",
        project,
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
