import React from "react";
import MoodTestsResultDescription from "./MoodTestResultDescription";
import { useNavigate } from "react-router-dom";
import { ReactComponent as ArrowLeftIcon } from "../../../assets/icons/ArrowLeft.svg";
import { useMoodtestStore } from "../../../store/MoodtestStore";

const MoodTestsResults = (props) => {
  const moodtestname = useMoodtestStore((state) => state.moodtestname);
  const results = useMoodtestStore((state) => state.results);

  let navigate = useNavigate();
  let totalScore =
    results.q1 + results.q2 + results.q3 + results.q4 + results.q5;

  return (
    <div className="flex  min-h-screen flex-col  justify-center rounded-lg py-12 font-sans sm:px-6 lg:px-8">
      <div className="rounded-lg bg-white py-8 px-4 shadow-lg sm:mx-auto sm:w-full sm:px-10">
        <div className="sm:mx-auto sm:w-full sm:max-w-6xl">
          <div className="inline-block content-start items-center">
            <ArrowLeftIcon
              onClick={() => {
                navigate("/moodtests", { replace: true });
              }}
              className="h-6 transition duration-150 hover:scale-125"
            ></ArrowLeftIcon>
          </div>

          <h1 className="mt-6 text-center  font-serif text-5xl font-extrabold text-gray-900">
            Results for {moodtestname}
          </h1>
          <h1 className="mt-6 text-center font-serif text-xl tracking-wide text-gray-900">
            Total score: {totalScore}
          </h1>
          <div className="mt-6 text-center font-serif text-sm tracking-wide text-gray-900">
            <MoodTestsResultDescription
              moodtestname={moodtestname.toLowerCase()}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoodTestsResults;
