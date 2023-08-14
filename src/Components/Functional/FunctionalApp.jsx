import { FunctionalGameBoard } from "./FunctionalGameBoard";
import { FunctionalScoreBoard } from "./FunctionalScoreBoard";
import { FunctionalFinalScore } from "./FunctionalFinalScore";
import { Images } from "../../assets/Images";
import { useState } from "react";

export function FunctionalApp() {
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

  const [fishName, setFishName] = useState("");

  const handleUserInput = (fishName) => setFishName(fishName);

  return (
    <>
      <FunctionalScoreBoard />
      <FunctionalGameBoard
        fishData={initialFishes}
        fishName={fishName}
        handleUserInput={handleUserInput}
      />
      {false && <FunctionalFinalScore />}
    </>
  );
}
