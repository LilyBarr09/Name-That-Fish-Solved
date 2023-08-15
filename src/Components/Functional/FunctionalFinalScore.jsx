import "./styles/final-score.css";
// const correctCount = 0;
// const totalCount = 0;
export const FunctionalFinalScore = ({ correctTally, totalTally }) => (
  <div id="final-score">
    <h1>Your Final Score Was</h1>
    <div id="score">
      <p>{correctTally}</p>
      <hr />
      <p>{totalTally.length}</p>
    </div>
  </div>
);
