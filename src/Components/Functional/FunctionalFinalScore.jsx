import "./styles/final-score.css";

export const FunctionalFinalScore = ({ correctTally, totalTally }) => (
  <div id="final-score">
    <h1>Your Final Score Was</h1>
    <div id="score">
      <p>{correctTally}</p>
      <hr />
      <p>{totalTally}</p>
    </div>
  </div>
);
