import { Component } from "react";
import "./styles/score-board.css";

export class ClassScoreBoard extends Component {
  render() {
    return (
      <div id="score-board">
        <div>Incorrect 🔻: {this.props.incorrectTally}</div>
        <div id="choices-left">
          {this.props.answers.map((answer) => (
            <div key={answer} className="choice">
              {answer}
            </div>
          ))}
        </div>
        <div>Correct ✅: {this.props.correctTally}</div>
      </div>
    );
  }
}
