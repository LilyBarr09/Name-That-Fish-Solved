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
  const [correctTally, setCorrectTally] = useState(0);
  const [incorrectTally, setIncorrectTally] = useState(0);

  const fishIndex = correctTally + incorrectTally;

  const fishGuess = (fish) => {
    const arrValuesToAdd =
      fish === initialFishes[fishIndex].name ? [1, 0] : [0, 1];
    setCorrectTally(correctTally + arrValuesToAdd[0]);
    setIncorrectTally(incorrectTally + arrValuesToAdd[1]);
  };

  const answersLeft = initialFishes
    .slice(fishIndex, initialFishes.length)
    .map((fish) => fish.name);

  return (
    <>
      {fishIndex < 4 && (
        <>
          <FunctionalScoreBoard
            correctTally={correctTally}
            incorrectTally={incorrectTally}
            answers={answersLeft}
          />
          <FunctionalGameBoard
            fishes={initialFishes}
            fishGuess={fishGuess}
            fishIndex={fishIndex}
          />
        </>
      )}
      {fishIndex === 4 && (
        <FunctionalFinalScore
          correctTally={correctTally}
          totalTally={initialFishes.length}
        />
      )}
    </>
  );
}
