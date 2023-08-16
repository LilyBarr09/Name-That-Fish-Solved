import { FunctionalGameBoard } from "./FunctionalGameBoard";
import { FunctionalScoreBoard } from "./FunctionalScoreBoard";
import { FunctionalFinalScore } from "./FunctionalFinalScore";
import { Images } from "../../assets/Images";
import { useState } from "react";

const initialFishes = [
  {
    name: "trout",
    url: Images.trout,
  },
  {
    name: "salmon",
    url: Images.salmon,
  },
  {
    name: "tuna",
    url: Images.tuna,
  },
  {
    name: "shark",
    url: Images.shark,
  },
];

export function FunctionalApp() {
  //state for correct and incorrect guess count:
  // const [fishState, setFishState] = useState({
  //   correctTally: 0,
  //   incorrectTally: 0,
  // });
  const [correctTally, setCorrectTally] = useState(0);
  const [incorrectTally, setIncorrectTally] = useState(0);
  const [fishIndex, setFishIndex] = useState(correctTally + incorrectTally);

  //fishIndex: evident - INDEX
  // const fishIndex = fishState.correctTally + fishState.incorrectTally;

  //this lets me know the NAME of the fish[index] we're on to compare with user's guess:
  const currentFishIndexName = initialFishes[fishIndex].name;

  //ACTION: take the user's guess and if it matches the fish's name add 1 to correctTally state, if it does not match add 1 to incorrectTally state: FORMULA TO GATHER ANSWERS: NOT WORKING - NEED TO DEBUGGGGGG
  const usersGuess = (fish) => {
    if (currentFishIndexName === fish.toLowerCase()) {
      console.log(fish);
      setCorrectTally(correctTally + 1);
      console.log(correctTally);
    } else {
      setIncorrectTally(incorrectTally + 1);
      console.log(incorrectTally);
    }
    setFishIndex(correctTally + incorrectTally);
  };

  //This is slowly removing user's guesses from the initialFishes array: LOGS ARRAY OF FISH NAMES, BUT DOES NOT SLICE OR MAP - NEED TO DEBUGGGGGG
  const answersLeft = initialFishes
    .slice(fishIndex, initialFishes.length)
    .map((fish) => fish.name);
  console.log(answersLeft);

  return (
    <>
      {fishIndex !== 4 ? (
        <>
          <FunctionalScoreBoard
            correctTally={correctTally}
            incorrectTally={incorrectTally}
            fishes={initialFishes}
            answers={answersLeft}
          />
          <FunctionalGameBoard
            fishes={initialFishes}
            fishGuess={usersGuess}
            fishIndex={fishIndex}
          />
        </>
      ) : (
        <FunctionalFinalScore
          correctTally={correctTally}
          totalTally={initialFishes.length}
        />
      )}
    </>
  );
}
