import React, { Component } from "react";
import Square from "./Square";

export default class Board extends Component {
  render() {
    const { squares, onSquareClick } = this.props;
    return (
      <div className="board">
        {squares.map((square) => (
          <Square
            key={square.id}
            square={square}
            onSquareClick={onSquareClick}
          />
        ))}
      </div>
    );
  }
}
