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

  fishGuess = (guess) => {
    // const arrValuesToAdd =
    //   fish ===
    //   initialFishes[this.state.correctTally + this.state.incorrectTally].name
    //     ? [1, 0]
    //     : [0, 1];
    // this.setState({
    //   correctTally: this.state.correctTally + arrValuesToAdd[0],
    //   incorrectTally: this.state.incorrectTally + arrValuesToAdd[1],
    // });
    if (
      guess ===
      initialFishes[this.state.correctTally + this.state.incorrectTally].name
    ) {
      this.setState({ correctTally: this.state.correctTally + 1 });
    } else {
      this.setState({ incorrectTally: this.state.incorrectTally + 1 });
    }
  };

  render() {
    const { correctTally, incorrectTally } = this.state;

    const total = correctTally + incorrectTally;

    const answersLeft = initialFishes
      .slice(total, initialFishes.length)
      .map((fish) => fish.name);

    return (
      <>
        {total < initialFishes.length && (
          <>
            <ClassScoreBoard
              correctTally={correctTally}
              incorrectTally={incorrectTally}
              answers={answersLeft}
            />
            <ClassGameBoard
              fishes={initialFishes}
              fishGuess={this.fishGuess}
              total={total}
            />
          </>
        )}
        {total === initialFishes.length && (
          <ClassFinalScore
            correctTally={correctTally}
            totalTally={initialFishes.length}
          />
        )}
      </>
    );
  }
}
