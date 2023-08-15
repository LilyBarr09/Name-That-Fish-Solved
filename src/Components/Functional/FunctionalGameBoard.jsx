import "./styles/game-board.css";
import { useState } from "react";

export function FunctionalGameBoard({ fishes, onSubmit, fishIndex }) {
  //NEED STATE TO KEEP TRACK OF USER INPUT/GUESSES:
  const [userInput, setUserInput] = useState("");

  //the code calculates the index of the next fish object to access in the fishes array. If fishIndex is not equal to 4, the code uses fishIndex as the index. If fishIndex is equal to 4, the code uses index 0. The chosen fish object is then assigned to the nextFishToName variable.
  const nextFishToName = fishes[fishIndex !== 4 ? fishIndex : 0];

  //THIS IS MY ONCHANGE CALLBACK ALWAYS GOES ON THE INPUT FIELD TAG:
  const collectUserInput = (e) => {
    setUserInput(e.target.value);
  };

  //THIS IS MY ONSUBMIT CALLBACK ALWAYS GOES ON THE FORM TAG:
  const submitForm = (e) => {
    e.preventDefault(); //THIS ALWAYS GOES WITH THE ONSUBMIT
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
