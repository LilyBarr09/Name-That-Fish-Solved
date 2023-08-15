import "./styles/score-board.css";
//  Where the score is presented

// const incorrectCount = 0;
// const correctCount = 0;
// const answersLeft = ["trout", "salmon", "tuna", "shark"];

export function FunctionalScoreBoard({ correctTally, incorrectTally, fishes }) {
  const fishyNamesLeft = fishes
    .slice(incorrectTally + correctTally, fishes.length)
    .map((fish) => fish.name);
  return (
    <div id="score-board">
      <div>Incorrect 🔻: {incorrectTally}</div>
      <div id="choices-left">
        {fishyNamesLeft.map((fish) => (
          <div key={fish} className="choice">
            {fish}
          </div>
        ))}
      </div>
      <div>Correct ✅: {correctTally}</div>
    </div>
  );
}
