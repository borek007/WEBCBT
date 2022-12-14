import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { ReactComponent as ArrowLeftIcon } from "../../../assets/icons/ArrowLeft.svg";
import ThoughtDistortionComponent from "./ThoughtDistortionComponent";
const RecoveryCircleComponent = (props) => {
  let navigate = useNavigate();
  const [upsettingEvent, setUpsettingEvent] = useState("");
  const [content, setContent] = useState("");
  const [positives, setPositives] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const distortions = [
    "All Or Nothing",
    "Overgeneralization",
    "Mental Filter",
    "Disqualifiying The Positive",
    "Mind Reading",
    "Jumping To Conclusions",
    "Emotional Reasoning",
    "Should Statements",
    "Self-Blame",
    "Other-Blame",
  ];
  const descriptions = [
    "you see things in terms of extremes – something is either fantastic or awful, you believe you are either perfect or a total failure",
    "You think about a negative event as a never-ending pattern of defeat",
    "You think only about your shortcomings and ignore your positive qualities",
    "You tell yourself that positive facts don't count",
    "You make assumotions about how other people are thinking and feeling",
    "You make negative predictions about the future",
    "You reason from how you feel",
    "You use shoulds, musts, ought to's",
    "You find fault with yourself",
    "You find fault with others",
  ];
  const savePositiveContent = (newContent, index) => {
    const updatedContent = [...content];
    updatedContent[index] = newContent;
    setContent(updatedContent);
  };
  useEffect(() => {
    console.log(content);
  }, [content]);
  return (
    <div className="flex flex-row ">
      <div className=" flex min-h-screen flex-col justify-center rounded-lg py-12 font-sans sm:px-6 lg:px-8">
        <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="mr-5  flex flex-row items-center justify-center">
            <ArrowLeftIcon
              onClick={() => {
                navigate("/session", { replace: true });
              }}
              className="h-6 mt-6 transition duration-150 hover:scale-125"
            ></ArrowLeftIcon>
            ,
            <h1 className="my-auto mt-6 text-center font-serif text-4xl font-extrabold text-gray-900">
              Methods Step
            </h1>
          </div>
        </div>
        <div className="mt-6 sm:mx-auto  sm:max-w-full">
          <div className="bg-white py-8 px-4 shadow sm:rounded-sm sm:px-10">
            <div className=" mx-auto flex flex-col sm:my-3">
              <div className="flex max-w-xl font-serif text-xl">
                Write down the most upsetting thought from the ones You have
                written down in Test Step.
              </div>
              <div className="my-auto  whitespace-nowrap text-center text-xl font-semibold text-gray-700">
                Upsetting Thought:
              </div>
              <div className="mt-2 w-full">
                <textarea
                  htmlFor="UpsettingEvent"
                  placeholder="..."
                  type="text"
                  className="wrap w-full rounded-sm border-none px-2 placeholder-gray-400 ring-0 sm:text-lg"
                  name="upsettingEvent"
                  value={upsettingEvent}
                  onChange={(e) => {
                    setUpsettingEvent(e.target.value);
                  }}
                />
              </div>
              <div className="divide-y-2 divide-dashed divide-indigo-400 flex w-full  flex-col items-center  gap-2 mt-6">
                {distortions.map(function (distortion, index) {
                  return (
                    <ThoughtDistortionComponent
                      index={index}
                      distortion={distortion}
                      description={descriptions[index]}
                    />
                  );
                })}
              </div>
              <div className="flex justify-center mt-6 ">
                <button
                  onClick={() => {
                    setPositives([
                      ...positives,
                      positives[positives.length - 1] + 1,
                    ]);
                  }}
                  className="text-md font-serfi mt-3 border-none  font-semibold hover:text-indigo-500"
                >
                  Add more
                </button>
              </div>
              <div className="font-serif mt-6 text-center w-full font-semibold text-md">
                Press the save button when you are ready to go to the next step
              </div>
              <button
                onClick={() => {
                  navigate("/session", { replace: true });
                }}
                className="mx-auto mt-6 flex w-full justify-center rounded-sm border border-transparent bg-indigo-500 py-2 px-4 text-lg font-medium text-white shadow-sm transition delay-75 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-indigo-600 focus:outline-none focus:ring-2  focus:ring-indigo-500 focus:ring-offset-2"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RecoveryCircleComponent;
