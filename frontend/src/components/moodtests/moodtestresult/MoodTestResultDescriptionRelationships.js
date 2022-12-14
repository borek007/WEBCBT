import { ResultRow } from "../../../styles/moodtestresultrow/MoodtestResultRow";

const MoodTestResultDescriptionRelationships = () => {
  return (
    <div>
      <div className="text-bold grid grid-cols-2 border-b-2 border-b-gray-900 font-serif text-lg ">
        <div>Score</div>
        <div>Meaning</div>
      </div>
      <div className="grid-rows-auto mt-6 grid grid-cols-2">
        <div className="grid grid-rows-6">
          <div className={ResultRow}>0-10</div>
          <div className={ResultRow}>11-15</div>
          <div className={ResultRow}>16-20</div>
          <div className={ResultRow}>21-25</div>
          <div className={ResultRow}>26-28</div>
          <div className={ResultRow}>29-30</div>
        </div>
        <div className="grid grid-rows-6">
          <div className={ResultRow}>Extremely dissatisfied</div>
          <div className={ResultRow}>Very dissatisfied</div>
          <div className={ResultRow}>Moderately dissatisfied </div>
          <div className={ResultRow}>Somewhat satisfied</div>
          <div className={ResultRow}>Moderately satisfied</div>
          <div className={ResultRow}>Extremely satisfied</div>
        </div>
      </div>
    </div>
  );
};

export default MoodTestResultDescriptionRelationships;
