import { NextResponse } from "next/server";
import { exec } from "child_process";
import { promisify } from "util";
import path from "path";

const execPromise = promisify(exec);

export async function GET(request, { params }) {
  const difficulty = params.difficulty ? params.difficulty : "easy";

  const executablePath = path.join(process.cwd(), "bin", "sudoku-generator.js");
  const args = `--generate --solution --difficulty ${difficulty} --one-line`;
  const { stdout, stderr } = await execPromise(
    `node "${executablePath}" ${args}`
  );

  let [puzzle, solution] = stdout.split("\n");

  return NextResponse.json({ puzzle: puzzle.replace(/\./g, "0"), solution });
}
