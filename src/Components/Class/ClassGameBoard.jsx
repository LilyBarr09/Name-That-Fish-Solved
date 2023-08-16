import { Component } from "react";
import "./styles/game-board.css";

export class ClassGameBoard extends Component {
  state = {
    usersInput: "",
  };

  nextFishToName =
    this.props.fishes[this.props.total !== 4 ? this.props.total : 0];

  submitForm = (e) => {
    e.preventDefault();
    this.props.fishGuess(this.state.usersInput);
    this.setState({ usersInput: "" });
  };

  render() {
    const { usersInput } = this.state;

    return (
      <div id="game-board">
        <div id="fish-container">
          <img src={this.nextFishToName.url} alt={this.nextFishToName.name} />
        </div>
        <form id="fish-guess-form" onSubmit={this.submitForm}>
          <label htmlFor="fish-guess">What kind of fish is this?</label>
          <input
            type="text"
            name="fish-guess"
            value={usersInput}
            onChange={(e) => {
              this.setState({ usersInput: e.target.value });
            }}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}
