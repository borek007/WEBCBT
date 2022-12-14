import { ResultRow } from "../../../styles/moodtestresultrow/MoodtestResultRow";

const MoodTestResultDescriptionAddictions = () => {
  return (
    <div>
      <div className="text-bold grid grid-cols-2 border-b-2 border-b-gray-900 font-serif text-lg ">
        <div>Score</div>
        <div>Meaning</div>
      </div>
      <div className="grid-rows-auto mt-6 grid grid-cols-2">
        <div className="grid grid-rows-6">
          <div className={ResultRow}>0</div>
          <div className={ResultRow}>1-2</div>
          <div className={ResultRow}>3-5</div>
          <div className={ResultRow}>6-10</div>
          <div className={ResultRow}>11-15</div>
          <div className={ResultRow}>16-20</div>
        </div>
        <div className="grid grid-rows-6">
          <div className={ResultRow}>No anger</div>
          <div className={ResultRow}>A little anger</div>
          <div className={ResultRow}>Mild anger </div>
          <div className={ResultRow}>Moderate anger </div>
          <div className={ResultRow}>Severe anger</div>
          <div className={ResultRow}>Extreme anger </div>
        </div>
      </div>
    </div>
  );
};

export default MoodTestResultDescriptionAddictions;
