import "./styles/score-board.css";

export function FunctionalScoreBoard({
  correctTally,
  incorrectTally,
  answers,
}) {
  return (
    <div id="score-board">
      <div>Incorrect 🔻: {incorrectTally}</div>
      <div id="choices-left">
        {answers.map((answer) => (
          <div key={answer} className="choice">
            {answer}
          </div>
        ))}
      </div>
      <div>Correct ✅: {correctTally}</div>
    </div>
  );
}
