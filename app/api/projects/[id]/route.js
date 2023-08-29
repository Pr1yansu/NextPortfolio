import { Project } from "@/models/Projects";
import { connectDB } from "@/utils/db";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    await connectDB();

    // Extract the ID parameter from the URL pathname
    const url = new URL(request.url);
    const id = url.pathname.split("/").pop(); // Get the last segment

    console.log(id);

    const project = await Project.findById(id);

    if (!project) {
      return NextResponse.json(
        {
          message: "Project not found",
          status: "error",
        },
        { status: 404 }
      );
    }

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
