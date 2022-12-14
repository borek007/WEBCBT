import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { ReactComponent as ArrowLeftIcon } from "../../../assets/icons/ArrowLeft.svg";
import ThoughtComponent from "./ThoughtComponent";
import FeelingCategoryComponent from "./FeelingCategoryComponent";
import { useThoughtsStore } from "../../../store/ThoughtsStore";

import AgendaComponent from "../agendastep/AgendaComponent";
//import { useNavigate } from "react-router-dom";

function TestingComponent(props) {
  let navigate = useNavigate();
  const positiveThoughts = useThoughtsStore((state) => state.positiveThoughts);

  const { showAgendaComponent, setShowAgendaComponent } = props;
  // console.log(showAgendaComponent);
  useEffect(() => {
    // console.log(positiveThoughts);
  }, [positiveThoughts]);
  //const navigate = useNavigate();
  //const { user: currentUser } = useSelector((state) => state.auth);

  // const [showAgendaComponent, setShowAgendaComponent] = useState(false);
  const [negativeThoughts, setNegativeThoughts] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  ]);
  const [upsettingEvent, setUpsettingEvent] = useState("");
  const [chosenFeelingsSadCategory, setChosenFeelingsSadCategory] =
    useState("");
  const [chosenFeelingsAnxiousCategory, setChosenFeelingsAnxiousCategory] =
    useState("");
  const [chosenFeelingsGuiltyCategory, setChosenFeelingsGuiltyCategory] =
    useState("");
  const [chosenFeelingsInferiorCategory, setChosenFeelingsInferiorCategory] =
    useState("");
  const [chosenFeelingsLonelyCategory, setChosenFeelingsLonelyCategory] =
    useState("");
  const [
    chosenFeelingsEmbarrassedCategory,
    setChosenFeelingsEmbarrassedCategory,
  ] = useState("");
  const [chosenFeelingsHopelessCategory, setChosenFeelingsHopelessCategory] =
    useState("");
  const [
    chosenFeelingsFrustratedCategory,
    setChosenFeelingsFrustratedCategory,
  ] = useState("");
  const [chosenFeelingsAngryCategory, setChosenFeelingsAngryCategory] =
    useState("");
  const [chosenFeelingsOtherCategory, setChosenFeelingsOtherCategory] =
    useState("");
  const [content, setContent] = useState("");

  const [beforePercentage, setBeforePercentage] = useState([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]);
  const [goalPercentage, setGoalPercentage] = useState([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]);
  const [afterPercentage, setAfterPercentage] = useState([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]);

  const [beforeNegativeThoughtPercentage, setBeforeNegativeThoughtPercentage] =
    useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [afterNegativeThoughtPercentage, setAfterNegativeThoughtPercentage] =
    useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

  const saveBeforePercentage = (percentage, index) => {
    //console.log(beforePercentage);
    //console.log(percentage);
    const updatedPercentage = [...beforePercentage];
    updatedPercentage[index] = percentage;
    setBeforePercentage(updatedPercentage);
  };

  const saveGoalPercentage = (percentage, index) => {
    const updatedPercentage = [...goalPercentage];
    updatedPercentage[index] = percentage;
    setGoalPercentage(updatedPercentage);
  };
  const saveAfterPercentage = (percentage, index) => {
    const updatedPercentage = [...afterPercentage];
    updatedPercentage[index] = percentage;
    setAfterPercentage(updatedPercentage);
  };

  const saveBeforeNegativeThoughtPercentage = (percentage, index) => {
    //console.log(beforePercentage);
    //console.log(percentage);
    const updatedPercentage = [...beforeNegativeThoughtPercentage];
    updatedPercentage[index] = percentage;
    setBeforeNegativeThoughtPercentage(updatedPercentage);
  };
  const saveAfterNegativeThoughtPercentage = (percentage, index) => {
    const updatedPercentage = [...afterNegativeThoughtPercentage];
    updatedPercentage[index] = percentage;
    setAfterNegativeThoughtPercentage(updatedPercentage);
  };

  const saveNegativeThoughtContent = (newContent, index) => {
    const updatedContent = [...content];
    updatedContent[index] = newContent;
    setContent(updatedContent);
  };

  useEffect(() => {
    //console.log(chosenFeelingsSadCategory);
  }, [chosenFeelingsSadCategory]);

  useEffect(() => {
    //console.log(beforePercentage);
  }, [beforePercentage]);

  return (
    <div className=" flex min-h-screen flex-col justify-center rounded-lg py-12 font-sans sm:px-6 lg:px-8">
      <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="mr-5  flex flex-row items-center justify-center">
          <ArrowLeftIcon
            onClick={() => {
              navigate("/session", { replace: true });
            }}
            className="h-6 mt-6 transition duration-150 hover:scale-125"
          ></ArrowLeftIcon>
          <h1 className="my-auto mt-6 text-center font-serif text-4xl font-extrabold text-gray-900">
            Test Step
          </h1>
        </div>
      </div>
      <div className="mt-6 sm:mx-auto  sm:max-w-full">
        <div className="bg-white py-8 px-4 shadow sm:rounded-sm sm:px-10">
          <div className=" mx-auto flex flex-col sm:my-3">
            <div className="mx-auto flex grow flex-col justify-center">
              <div className="my-auto  whitespace-nowrap text-center text-xl font-semibold text-gray-700">
                Upsetting Event:
              </div>
              <div className="w-full mt-2">
                <textarea
                  htmlFor="UpsettingEvent"
                  placeholder="Thinking about tomorrow's presentation"
                  type="text"
                  className="wrap w-full rounded-sm border-none px-2 placeholder-gray-400 ring-0 sm:text-lg"
                  name="upsettingEvent"
                  value={upsettingEvent}
                  onChange={(e) => {
                    setUpsettingEvent(e.target.value);
                  }}
                />
              </div>
            </div>

            <div className="my-4 mx-auto flex flex-col items-center gap-1 divide-y-2 divide-dashed divide-indigo-400 border-2 border-none  border-indigo-500 sm:px-3 sm:py-3">
              <div className="flex w-full flex-row gap-3">
                <div className="text-md  text-center font-bold">Feelings</div>
                <div className="text-md ml-auto text-center font-bold">
                  <div className="grid grid-cols-3">
                    <div className="w-16">Before</div>
                    <div className="w-16">Goal</div>
                    <div className="w-16">After</div>
                  </div>
                </div>
              </div>

              <FeelingCategoryComponent
                onSelectFeeling={setChosenFeelingsSadCategory}
                onChangeBeforePercentage={saveBeforePercentage}
                onChangeGoalPercentage={saveGoalPercentage}
                onChangeAfterPercentage={saveAfterPercentage}
                feelings={["sad", "blue", "depressed", "down", "unhappy"]}
                index={0}
              ></FeelingCategoryComponent>
              <FeelingCategoryComponent
                onSelectFeeling={setChosenFeelingsAnxiousCategory}
                onChangeBeforePercentage={saveBeforePercentage}
                onChangeGoalPercentage={saveGoalPercentage}
                onChangeAfterPercentage={saveAfterPercentage}
                feelings={[
                  "anxious",
                  "worried",
                  "panicky",
                  "nervous",
                  "frightened",
                ]}
                index={1}
              ></FeelingCategoryComponent>
              <FeelingCategoryComponent
                onSelectFeeling={setChosenFeelingsGuiltyCategory}
                onChangeBeforePercentage={saveBeforePercentage}
                onChangeGoalPercentage={saveGoalPercentage}
                onChangeAfterPercentage={saveAfterPercentage}
                feelings={["guilty", "remorseful", "bad", "ashamed"]}
                index={2}
              ></FeelingCategoryComponent>
              <FeelingCategoryComponent
                onSelectFeeling={setChosenFeelingsInferiorCategory}
                onChangeBeforePercentage={saveBeforePercentage}
                onChangeGoalPercentage={saveGoalPercentage}
                onChangeAfterPercentage={saveAfterPercentage}
                feelings={[
                  "inferior",
                  "worthless",
                  "inadequate",
                  "defective",
                  "incompetent",
                ]}
                index={3}
              ></FeelingCategoryComponent>
              <FeelingCategoryComponent
                onSelectFeeling={setChosenFeelingsLonelyCategory}
                onChangeBeforePercentage={saveBeforePercentage}
                onChangeGoalPercentage={saveGoalPercentage}
                onChangeAfterPercentage={saveAfterPercentage}
                feelings={[
                  "lonely",
                  "unloved",
                  "unwanted",
                  "rejected",
                  "alone",
                  "abandoned",
                ]}
                index={4}
              ></FeelingCategoryComponent>

              <FeelingCategoryComponent
                onSelectFeeling={setChosenFeelingsEmbarrassedCategory}
                onChangeBeforePercentage={saveBeforePercentage}
                onChangeGoalPercentage={saveGoalPercentage}
                onChangeAfterPercentage={saveAfterPercentage}
                feelings={[
                  "embarassed",
                  "foolish",
                  "humiliated",
                  "self-conscious",
                ]}
                index={5}
              ></FeelingCategoryComponent>
              <FeelingCategoryComponent
                onSelectFeeling={setChosenFeelingsHopelessCategory}
                onChangeBeforePercentage={saveBeforePercentage}
                onChangeGoalPercentage={saveGoalPercentage}
                onChangeAfterPercentage={saveAfterPercentage}
                feelings={[
                  "hopeless",
                  "discouraged",
                  "pessimistic",
                  "despairing",
                ]}
                index={6}
              ></FeelingCategoryComponent>
              <FeelingCategoryComponent
                onSelectFeeling={setChosenFeelingsFrustratedCategory}
                onChangeBeforePercentage={saveBeforePercentage}
                onChangeGoalPercentage={saveGoalPercentage}
                onChangeAfterPercentage={saveAfterPercentage}
                feelings={["frustrated", "stuck", "thwarted", "defeated"]}
                index={7}
              ></FeelingCategoryComponent>
              <FeelingCategoryComponent
                onSelectFeeling={setChosenFeelingsAngryCategory}
                onChangeBeforePercentage={saveBeforePercentage}
                onChangeGoalPercentage={saveGoalPercentage}
                onChangeAfterPercentage={saveAfterPercentage}
                feelings={[
                  "angry",
                  "mad",
                  "resentful",
                  "annoyed",
                  "irritated",
                  "upset",
                  "furious",
                ]}
                index={8}
              ></FeelingCategoryComponent>
              <div className="flex w-full">
                <input
                  type="text"
                  placeholder="other"
                  className="w-full rounded-sm border-none px-2 placeholder-gray-400 ring-0 focus:border-0 focus:ring-0 sm:text-lg"
                ></input>
                <FeelingCategoryComponent
                  onSelectFeeling={setChosenFeelingsOtherCategory}
                  onChangeBeforePercentage={saveBeforePercentage}
                  onChangeGoalPercentage={saveGoalPercentage}
                  onChangeAfterPercentage={saveAfterPercentage}
                  feelings={[]}
                  index={9}
                ></FeelingCategoryComponent>
              </div>
            </div>
            <div className="flex flex-col items-center font-serif">
              <div className=" font-bold text-xl">Negative Thoughts</div>
              <div className="mt-2  flex flex-row w-full overflow-auto items-center justify-around gap-3 text-center">
                <div className="flex flex-row items-center justify-center w-1/2">
                  <div className="font-serif text-md font-semibold">
                    Thoughts
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 w-1/2 ">
                  <div className="font-serif text-md font-semibold">Before</div>
                  <div className="font-serif text-md font-semibold">After</div>
                </div>
              </div>
              <div className="divide-y-2 divide-dashed divide-indigo-400 flex w-full  flex-col items-center  gap-2">
                {negativeThoughts.map((value, i) => {
                  return (
                    <ThoughtComponent
                      onChangeContent={saveNegativeThoughtContent}
                      onChangeBeforePercentage={
                        saveBeforeNegativeThoughtPercentage
                      }
                      onChangeAfterPercentage={
                        saveAfterNegativeThoughtPercentage
                      }
                      index={value - 1}
                      key={value}
                    />
                  );
                })}
              </div>
            </div>
            <div className="flex justify-center mt-6 ">
              <button
                onClick={() => {
                  setNegativeThoughts([
                    ...negativeThoughts,
                    negativeThoughts[negativeThoughts.length - 1] + 1,
                  ]);
                }}
                className="text-md font-serfi mt-3 border-none  font-semibold hover:text-indigo-500"
              >
                Add more
              </button>
            </div>
            {!showAgendaComponent && (
              <div>
                <div className="font-serif mt-6 text-center w-full font-semibold text-md">
                  Press the save button when you are ready to go to the agenda
                  step
                </div>

                <button
                  onClick={() => {
                    window.scrollTo(0, 0);
                    setShowAgendaComponent(true);
                  }}
                  className="mx-auto mt-6 flex w-full justify-center rounded-sm border border-transparent bg-indigo-500 py-2 px-4 text-lg font-medium text-white shadow-sm transition delay-75 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-indigo-600 focus:outline-none focus:ring-2  focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Save
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default TestingComponent;
