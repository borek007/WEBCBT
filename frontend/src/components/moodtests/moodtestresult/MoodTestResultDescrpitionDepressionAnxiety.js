import { ResultRow } from "../../../styles/moodtestresultrow/MoodtestResultRow";

const MoodTestResultDescriptionDepressionAnxiety = () => {
  return (
    <div>
      <div className="text-bold grid grid-cols-3 border-b-2 border-b-gray-900 font-serif text-lg ">
        <div>Score</div>
        <div>Severity</div>
        <div>Meaning</div>
      </div>
      <div className="grid-rows-auto mt-6 grid grid-cols-3">
        <div className="grid grid-rows-6">
          <div className={ResultRow}>0</div>
          <div className={ResultRow}>1-2</div>
          <div className={ResultRow}>3-5</div>
          <div className={ResultRow}>6-10</div>
          <div className={ResultRow}>11-15</div>
          <div className={ResultRow}>16-20</div>
        </div>
        <div className="grid grid-rows-6">
          <div className={ResultRow}>No symptoms</div>
          <div className={ResultRow}>Borderline</div>
          <div className={ResultRow}>Mild</div>
          <div className={ResultRow}>Moderate</div>
          <div className={ResultRow}>Severe</div>
          <div className={ResultRow}>Extreme</div>
        </div>
        <div className="grid grid-rows-6">
          <div className={ResultRow}>
            That’s terrific! You don’t seem to have any symptoms at all.
          </div>
          <div className={ResultRow}>
            These scores are normal, but you could use a little tune-up.
          </div>
          <div className={ResultRow}>
            Although your scores are not greatly elevated, this is enough
            depression or anxiety to take the joy out of life. If we work
            together, we can probably get your scores down to 0, which would be
            terrific!
          </div>
          <div className={ResultRow}>
            You’re feeling quite a bit of depression or anxiety. Although you’re
            not in the severe range, these scores reflect consider- able
            unhappiness.
          </div>
          <div className={ResultRow}>
            You have fairly strong feelings of depression or anxiety. That makes
            me sad, but there’s some really good news. The tools in this book
            can help you transform your negative feelings into joy.
          </div>
          <div className={ResultRow}>
            Scores in this range indicate that your suffering is intense.
            Friends or family may have trouble grasping how much pain you’re in.
            The good news is that the prognosis for improvement is very
            positive. In fact, recovery is one of the greatest feelings a human
            being can have.
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoodTestResultDescriptionDepressionAnxiety;
