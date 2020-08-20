import React from "react";
import "./Scoreboard.css";

export function Scoreboard() {
  return (
    <div className="Scoreboard">
      <div className="player-container">
        <div className="player">Player One</div>
        <div className="player-score">Score: 200</div>
      </div>
      <div className="player-container">
        <div className="player">Player Two</div>
        <div className="player-score">Score: 600</div>
      </div>
      <div className="rules-container">
        <div className="rules-body">
          The grid is divided into nine blocks, each containing nine squares.
          The rules of the game are simple: each of the nine blocks has to
          contain all the numbers 1-9 within its squares. Each number can only
          appear once in a row, column or box. You will score 100 points for
          each correct number and have 300 points deducted for each incorrect
          guess. In this twist on the classic game, you and your opponent are
          racing to score as many points as possible.
        </div>
      </div>
    </div>
  );
}
