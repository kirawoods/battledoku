import React from "react";
import "./App.css";
import { Board } from "./components/Board";
import { Scoreboard } from "./components/Scoreboard";
function App() {
  return (
    <div className="App">
      <div className="game-container">
        <Scoreboard />
        <Board />
      </div>
    </div>
  );
}

export default App;
