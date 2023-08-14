"use client";

import { useState } from "react";
import Cell from "./cell";

export default function Board() {
  const cells = Array.from({ length: 81 }, (_, index) => <Cell key={index} />);

  return <div className="board">{cells}</div>;
}
