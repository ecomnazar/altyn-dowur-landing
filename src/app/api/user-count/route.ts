// app/api/user-count/route.js

import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  const filePath = path.join(process.cwd(), "registered_users.txt");

  try {
    const data = fs.readFileSync(filePath, "utf-8");
    const numberOfUsers = data
      .split("\n")
      .filter((line) => line.trim() !== "").length;
    return NextResponse.json({ count: numberOfUsers }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to read file" }, { status: 500 });
  }
}
