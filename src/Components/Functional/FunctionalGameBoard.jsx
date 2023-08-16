import "./styles/game-board.css";
import { useState } from "react";

export function FunctionalGameBoard({ fishes, fishGuess, fishIndex }) {
  const [usersInput, setUsersInput] = useState("");

  const nextFishToName = fishes[fishIndex !== 4 ? fishIndex : 0];

  const submitForm = (e) => {
    e.preventDefault();
    fishGuess(usersInput);
    setUsersInput("");
  };

  return (
    <div id="game-board">
      <div id="fish-container">
        <img src={nextFishToName.url} alt={nextFishToName.name} />
      </div>
      <form id="fish-guess-form" onSubmit={submitForm}>
        <label htmlFor="fish-guess">What kind of fish is this?</label>
        <input
          type="text"
          name="fish-guess"
          value={usersInput}
          onChange={(e) => {
            setUsersInput(e.target.value);
          }}
        />
        <input type="submit" />
      </form>
    </div>
  );
}
