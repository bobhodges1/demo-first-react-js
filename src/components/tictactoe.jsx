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
  const gridCells = data.map((cell) => (
    <div className="cell">
      <button>Add ✅</button>
      <br></br>
      <button>Add ❌</button>
    </div>
  ));
  console.log(gridCells.cell);
  return <div className="gameGrid">{gridCells}</div>;
}
