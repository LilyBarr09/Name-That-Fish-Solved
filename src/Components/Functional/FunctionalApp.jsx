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
  const [fishState, setFishState] = useState({
    correctTally: 0,
    incorrectTally: 0,
  });

  const currentCorrectFish =
    initialFishes[fishState.correctTally + fishState.incorrectTally]?.name;

  const fishIndex = fishState.correctTally + fishState.incorrectTally;

  const userInput = (guess) => {
    if (currentCorrectFish === guess.toLowerCase()) {
      setFishState(fishState.correctTally + 1);
    } else {
      setFishState(fishState.incorrectTally + 1);
    }
  };

  return (
    <>
      {fishIndex !== 4 ? (
        <>
          <FunctionalScoreBoard
            correctTally={fishState.correctTally}
            incorrectTally={fishState.incorrectTally}
            fishes={initialFishes}
          />
          <FunctionalGameBoard
            fishes={initialFishes}
            onSubmit={userInput}
            currentImageIndex={fishIndex}
          />
        </>
      ) : (
        <FunctionalFinalScore
          correctTally={fishState.correctTally}
          totalTally={initialFishes}
        />
      )}
    </>
  );
}
