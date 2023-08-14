import "./styles/game-board.css";

import { useState } from "react";

export function FunctionalGameBoard({ fishData, handleUserInput }) {
  const nextFishToName = fishData[0];
  const [fishNameInput, setFishNameInput] = useState("");
  return (
    <div id="game-board">
      <div id="fish-container">
        <img src={nextFishToName.url} alt={nextFishToName.name} />
      </div>
      <form
        id="fish-guess-form"
        onSubmit={(e) => {
          e.preventDefault();
          handleUserInput({ fishName: fishNameInput });
          setFishNameInput("");
        }}
      >
        <label htmlFor="fish-guess">What kind of fish is this?</label>
        <input
          type="text"
          name="fish-guess"
          value={fishNameInput}
          onChange={(e) => {
            setFishNameInput(e.target.value);
          }}
        />
        <input type="submit" />
      </form>
    </div>
  );
}
