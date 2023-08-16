import { Component } from "react";
import "./styles/final-score.css";

export class ClassFinalScore extends Component {
  render() {
    return (
      <div id="final-score">
        <h1>Your Final Score Was</h1>
        <div id="score">
          <p>{this.props.correctTally}</p>
          <hr />
          <p>{this.props.totalTally}</p>
        </div>
      </div>
    );
  }
}
