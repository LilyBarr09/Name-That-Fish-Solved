import "./styles/game-board.css";
import { useState } from "react";

export function FunctionalGameBoard({ fishes, onSubmit, currentImageIndex }) {
  const [userInput, setUserInput] = useState("");

  const nextFishToName =
    fishes[currentImageIndex !== 4 ? currentImageIndex : 0];

  const collectUserInput = (e) => {
    setUserInput(e.target.value);
  };

  const submitForm = (e) => {
    e.preventDefault();
    onSubmit(userInput);
    setUserInput("");
  };

  return (
    <div id="game-board">
      <div id="fish-container">
        <img src={nextFishToName.url} alt={nextFishToName.name} />
      </div>
      <form
        id="fish-guess-form"
        onSubmit={() => {
          submitForm();
        }}
      >
        <label htmlFor="fish-guess">What kind of fish is this?</label>
        <input
          type="text"
          name="fish-guess"
          value={userInput}
          onChange={collectUserInput}
        />
        <input type="submit" />
      </form>
    </div>
  );
}
