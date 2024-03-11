// import { useState } from "react";
import "./tictactoe.css";

export function TicTacToe() {
  const cellsDataArray = [
    { id: 1, side: "back" },
    { id: 2, side: "back" },
    { id: 3, side: "back" },
    { id: 4, side: "front" },
    { id: 5, side: "back" },
    { id: 6, side: "front" },
    { id: 7, side: "front" },
    { id: 8, side: "back" },
    { id: 9, side: "front" },
  ];

  const gridCells = cellsDataArray.map((cell) => {
    if (cell.side === "back") {
      return (
        <div className="cell" key={cell.id}>
          ❌
        </div>
      );
    } else {
      return (
        <div className="cell" key={cell.id}>
          ✅
        </div>
      );
    }
  });
  return <div className="gameGrid">{gridCells}</div>;
}
