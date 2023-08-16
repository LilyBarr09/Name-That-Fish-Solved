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
  const [fishIndex, setFishIndex] = useState(correctTally + incorrectTally);

  const currentFishIndexName = initialFishes[fishIndex].name;

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

  const answersLeft = initialFishes
    .slice(fishIndex, initialFishes.length)
    .map((fish) => fish.name);
  console.log(answersLeft);

  return (
    <>
      {fishIndex !== 3 ? (
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
