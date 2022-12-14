import {
  DEPRESSION,
  ANXIETY,
  ANGER,
  RELATIONSHIPS,
  HAPPINESS,
  ADDICTIONS,
} from "../../../constants/MoodTestTypes";
import MoodTestResultDescriptionDepressionAnxiety from "./MoodTestResultDescrpitionDepressionAnxiety";
import MoodTestResultDescriptionAnger from "./MoodTestResultDescriptionAnger";
import MoodTestResultDescriptionRelationships from "./MoodTestResultDescriptionRelationships";
import MoodTestResultDescriptionHappiness from "./MoodTestResultDescriptionHappiness";

const MoodTestsResultDescription = (props) => {
  if (props.moodtestname === DEPRESSION || props.moodtestname === ANXIETY) {
    return <MoodTestResultDescriptionDepressionAnxiety />;
  } else if (props.moodtestname === ANGER) {
    return <MoodTestResultDescriptionAnger />;
  } else if (props.moodtestname === RELATIONSHIPS) {
    return <MoodTestResultDescriptionRelationships />;
  } else if (props.moodtestname === HAPPINESS) {
    return <MoodTestResultDescriptionHappiness />;
  } else if (props.moodtestname === ADDICTIONS) {
    return <div></div>;
  }
};

export default MoodTestsResultDescription;
