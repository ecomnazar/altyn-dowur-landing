// app/api/register/route.js

import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(request: Request) {
  const { email } = await request.json();

  // Define the file path
  const filePath = path.join(process.cwd(), "registered_users.txt");

  // Append user data to the file
  const userData = `Email: ${email}\n`;
  try {
    fs.appendFileSync(filePath, userData);
    return NextResponse.json(
      { message: "User registered successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to save data" }, { status: 500 });
  }
}
