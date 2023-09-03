import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const difficulty = params.difficulty ? params.difficulty : "easy";
  const res = await fetch(
    `https://sudoq.p.rapidapi.com/generate/${difficulty}`,
    {
      headers: {
        "X-RapidAPI-Key": "5177364e08msh7c9bed52416220fp1b47afjsn9e1086d773a8",
        "X-RapidAPI-Host": "sudoq.p.rapidapi.com",
      },
    }
  );
  const data = await res.json();

  return NextResponse.json(data);
}
