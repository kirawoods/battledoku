import React from "react";
import "./Scoreboard.css";

export function Scoreboard() {
  return (
    <div className="Scoreboard">
      <div className="scoreboard-header">Scoreboard</div>
      <div className="home-player">Player One</div>
      <div className="home-player-score">200</div>
      <div className="away-player">Player Two</div>
      <div className="away-player-score">600</div>
    </div>
  );
}
