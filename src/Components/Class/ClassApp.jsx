import { Component } from "react";
import { ClassScoreBoard } from "./ClassScoreBoard";
import { ClassGameBoard } from "./ClassGameBoard";
import { ClassFinalScore } from "./ClassFinalScore";
import { Images } from "../../assets/Images";

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

export class ClassApp extends Component {
  state = {
    correctTally: 0,
    incorrectTally: 0,
  };

  fishIndex = this.state.correctTally + this.state.incorrectTally;

  fishGuess = (fish) => {
    const arrValuesToAdd =
      fish === initialFishes[this.fishIndex].name ? [1, 0] : [0, 1];
    this.setState({
      correctTally: this.state.correctTally + arrValuesToAdd[0],
      incorrectTally: this.state.incorrectTally + arrValuesToAdd[1],
    });
  };

  answersLeft = initialFishes
    .slice(this.fishIndex, initialFishes.length)
    .map((fish) => fish.name);

  render() {
    const { correctTally, incorrectTally } = this.state;

    return (
      <>
        {this.fishIndex < 4 && (
          <>
            <ClassScoreBoard
              correctTally={correctTally}
              incorrectTally={incorrectTally}
              answers={this.answersLeft}
            />
            <ClassGameBoard
              fishes={initialFishes}
              fishGuess={this.fishGuess}
              fishIndex={this.fishIndex}
            />
          </>
        )}
        {this.fishIndex === 4 && (
          <ClassFinalScore
            correctTally={correctTally}
            totalTally={initialFishes.length}
          />
        )}
      </>
    );
  }
}
