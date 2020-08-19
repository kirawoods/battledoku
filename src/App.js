import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Board } from "./components/Board";
import { Scoreboard } from "./components/Scoreboard";
function App() {
  return (
    <div className="App">
      <Header />
      <div className="game-container">
        <Scoreboard />
        <Board />
      </div>
    </div>
  );
}

export default App;
