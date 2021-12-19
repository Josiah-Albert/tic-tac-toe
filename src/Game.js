import React, { Component } from "react";
import Board from "./components/Board";
import "./Game.css";

export default class Game extends Component {
  state = {
    squares: [
      { id: 1, value: this.id },
      { id: 2, value: this.id },
      { id: 3, value: this.id },
      { id: 4, value: this.id },
      { id: 5, value: this.id },
      { id: 6, value: this.id },
      { id: 7, value: this.id },
      { id: 8, value: this.id },
      { id: 9, value: this.id }
    ]
  };

  handleSquareClick = (square) => {
    return undefined;
  };

  render() {
    const { squares, handleSquareClick } = this.state;
    return <Board squares={squares} onSquareClick={handleSquareClick} />;
  }
}
