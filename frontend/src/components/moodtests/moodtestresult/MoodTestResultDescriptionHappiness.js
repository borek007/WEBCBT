import { ResultRow } from "../../../styles/moodtestresultrow/MoodtestResultRow";

const MoodTestResultDescriptionHappiness = () => {
  return (
    <div>
      <div className="text-bold grid grid-cols-3 border-b-2 border-b-gray-900 font-serif text-lg ">
        <div>Score</div>
        <div>Happiness Level</div>
        <div>Meaning</div>
      </div>
      <div className="grid-rows-auto mt-6 grid grid-cols-3">
        <div className="grid grid-rows-7">
          <div className={ResultRow}>0-1</div>
          <div className={ResultRow}>2-4</div>
          <div className={ResultRow}>3-5</div>
          <div className={ResultRow}>6-10</div>
          <div className={ResultRow}>11-15</div>
          <div className={ResultRow}>16-19</div>
          <div className={ResultRow}>20</div>
        </div>
        <div className="grid grid-rows-7">
          <div className={ResultRow}>No happiness</div>
          <div className={ResultRow}>Minimal happiness </div>
          <div className={ResultRow}>Some happiness </div>
          <div className={ResultRow}>Moderate happiness</div>
          <div className={ResultRow}>A lot of happiness</div>
          <div className={ResultRow}>Extreme happiness</div>
          <div className={ResultRow}>Tremendous happiness </div>
        </div>
        <div className="grid grid-rows-7">
          <div className={ResultRow}>
            It seems like you’re barely having any positive feelings at all
            right now. That’s really sad, but there’s some good news—if you
            want, we can work together and fix that.
          </div>
          <div className={ResultRow}>
            These scores indicate that you have very few positive feelings.
            There’s lots of room for improvement.
          </div>
          <div className={ResultRow}>
            Your feelings are somewhat positive, which is promis- ing. If we
            work together, we should be able to make things a lot better.{" "}
          </div>
          <div className={ResultRow}>
            You seem to be feeling moderately positive. That’s good! I’d love to
            see your scores increase even more.{" "}
          </div>
          <div className={ResultRow}>
            You seem to be feeling very positive and happy, but there’s room for
            feeling even happier.
          </div>
          <div className={ResultRow}>
            Scores in this range are really good. You’re feeling extremely
            positive in at least one of the five areas on the test. Way to go!
            There’s still a little room for feeling even better.{" "}
          </div>
          <div className={ResultRow}>This is fabulous!</div>
        </div>
      </div>
    </div>
  );
};

export default MoodTestResultDescriptionHappiness;
