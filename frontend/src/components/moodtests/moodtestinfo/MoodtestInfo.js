import { ReactComponent as InfoIcon } from "../../../assets/icons/Info.svg";

const MoodTestInfo = () => {
  return (
    <div>
      <InfoIcon className="hover:shadow-lg"></InfoIcon>
      <div className=" sm:w-50 absolute right-1/4 z-50  mr-10 hidden rounded-lg bg-white py-8 px-4 font-serif shadow-lg group-hover:block sm:mx-auto sm:px-10">
        Choose how strongly you feel in each category: <br></br>0 - Not at all
        <br></br>1 - Somewhat<br></br>2 - Moderately<br></br>3 - A lot<br></br>4
        - Extremely<br></br>
      </div>
    </div>
  );
};
export default MoodTestInfo;
