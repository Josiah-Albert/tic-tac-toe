import React, { Component } from "react";

export default class Square extends Component {
  render() {
    const { square, onSquareClick } = this.props;
    return (
      <div className="square" onClick={() => onSquareClick(square)}>
        {square.value}
      </div>
    );
  }
}
