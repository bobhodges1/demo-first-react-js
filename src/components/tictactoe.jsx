import { useState } from "react";
import "./tictactoe.css";

export function TicTacToe() {
  const data = [
    { side: "back" },
    { side: "back" },
    { side: "back" },
    { side: "front" },
    { side: "back" },
    { side: "front" },
    { side: "back" },
    { side: "back" },
    { side: "front" },
  ];
  console.log(data.length);
  const gridCells = data.map((cell) => <div className="cell"></div>);
  console.log(gridCells.cell);
  return <div className="gameGrid">{gridCells}</div>;
}
