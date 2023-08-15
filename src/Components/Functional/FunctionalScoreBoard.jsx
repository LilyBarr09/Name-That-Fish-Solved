import "./styles/score-board.css";
//  Where the score is presented

// const incorrectCount = 0;
// const correctCount = 0;
// const answersLeft = ["trout", "salmon", "tuna", "shark"];

export function FunctionalScoreBoard({ correctTally, incorrectTally, fishes }) {
  const total = correctTally + incorrectTally;
  console.log(total);
  const answersLeft = fishes
    .slice(total, fishes.length)
    .map((fish) => fish.name);
  console.log(answersLeft);
  return (
    <div id="score-board">
      <div>Incorrect 🔻: {incorrectTally}</div>
      <div id="choices-left">
        {answersLeft.map((answer) => (
          <div key={answer} className="choice">
            {answer}
          </div>
        ))}
      </div>
      <div>Correct ✅: {correctTally}</div>
    </div>
  );
}
