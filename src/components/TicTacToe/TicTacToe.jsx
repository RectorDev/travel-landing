import React from "react";
import "./TicTacToe.css";
export const TicTacToe = () => {
  return (
    <div className="container">
      TicTacToe
      <div className="boxes">
        <div className="row1">
          <div className="box "><span></span></div>
          <div className="box"><span></span></div>
          <div className="box"><span></span></div>
        </div>
        <div className="row2">
          <div className="box"><span></span></div>
          <div className="box"><span></span></div>
          <div className="box"><span></span></div>
        </div>
        <div className="row3">
          <div className="box"><span></span></div>
          <div className="box"><span></span></div>
          <div className="box"><span></span></div>
        </div>
      </div>
    </div>
  );
};
