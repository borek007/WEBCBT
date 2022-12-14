import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { ReactComponent as ArrowLeftIcon } from "../../../assets/icons/ArrowLeft.svg";
import { Navigate } from "react-router-dom";
import { useMoodtestStore } from "../../../store/MoodtestStore";

import MoodTestInfo from "../moodtestinfo/MoodtestInfo";

import MoodTestRating from "../moodtestrating/MoodtestRating";
import { useMainStore } from "../../../store/MainStore";
import { moodtestsRequest } from "../../../requests/moodtests/Moodtests";

const AnxietyPage = (props) => {
  let navigate = useNavigate();

  const isLoggedIn = useMainStore((state) => state.isLoggedIn);

  const moodtestname = "Anxiety";

  const [results, setResults] = useState({
    q1: 0,
    q2: 0,
    q3: 0,
    q4: 0,
    q5: 0,
  });
  const [loading, setLoading] = useState(false);

  // if (!isLoggedIn) {
  // return <Navigate to="/login" />;
  //}

  return (
    <div className="flex  min-h-screen flex-col  justify-center rounded-lg py-12 font-sans sm:px-6 lg:px-8">
      <div className="rounded-lg bg-white py-8 px-4 shadow-lg sm:mx-auto sm:px-10">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <div>
            <div className="content-left inline-block  items-center">
              <ArrowLeftIcon
                onClick={() => {
                  navigate("/moodtests", { replace: true });
                }}
                className="h-6 transition duration-150 hover:scale-125"
              ></ArrowLeftIcon>
            </div>

            <div className="group float-right inline-block content-end">
              <MoodTestInfo />
            </div>
          </div>

          <h1 className=" text-center  font-serif text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Anxiety
          </h1>
          <h1 className="mt-6 text-center font-serif text-xl tracking-wide text-gray-900">
            Select one of the numbers to indicate how you're feeling right now.
          </h1>
        </div>
        <div className="mt-8 font-serif sm:mx-auto sm:w-full sm:max-w-md">
          <div>
            <div className="grid grid-rows-5 gap-3 ">
              <div className="flex flex-col sm:grid sm:grid-cols-2 sm:gap-5">
                <label className="my-auto text-center text-xl text-gray-700">
                  Anxious
                </label>
                <div className="my-auto">
                  <MoodTestRating
                    defaultValue={1}
                    onChangeRating={(value) => {
                      setResults({ ...results, q1: value });
                    }}
                    count={5}
                  />
                </div>
              </div>

              <div className="flex flex-col sm:grid sm:grid-cols-2 sm:gap-5">
                <label className="my-auto text-center text-xl text-gray-700">
                  Frightened
                </label>
                <div className="my-auto">
                  <MoodTestRating
                    defaultValue={1}
                    onChangeRating={(value) => {
                      setResults({ ...results, q2: value });
                    }}
                    count={5}
                  />
                </div>
              </div>
              <div className="flex flex-col sm:grid sm:grid-cols-2 sm:gap-5">
                <label className="my-auto text-center text-xl text-gray-700">
                  Worrying about things
                </label>
                <div className="my-auto">
                  <MoodTestRating
                    defaultValue={1}
                    onChangeRating={(value) => {
                      setResults({ ...results, q3: value });
                    }}
                    count={5}
                  />
                </div>
              </div>
              <div className="flex flex-col sm:grid sm:grid-cols-2 sm:gap-5">
                <label className="my-auto text-center text-xl text-gray-700">
                  Tense or on edge
                </label>
                <div className="my-auto">
                  <MoodTestRating
                    defaultValue={1}
                    onChangeRating={(value) => {
                      setResults({ ...results, q4: value });
                    }}
                    count={5}
                  />
                </div>
              </div>
              <div className="flex flex-col sm:grid sm:grid-cols-2 sm:gap-5">
                <label className="my-auto text-center text-xl text-gray-700">
                  Nervous
                </label>
                <div className="my-auto">
                  <MoodTestRating
                    defaultValue={1}
                    onChangeRating={(value) => {
                      setResults({ ...results, q5: value });
                    }}
                    count={5}
                  />
                </div>
              </div>
            </div>
            <div className="form-group mt-6">
              <button
                className="flex w-full justify-center rounded-sm border border-transparent bg-indigo-500 py-2 px-4 text-lg font-medium text-white shadow-sm transition delay-75 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-indigo-600 focus:outline-none focus:ring-2  focus:ring-indigo-500 focus:ring-offset-2"
                disabled={loading}
                onClick={() => {
                  useMoodtestStore.setState({
                    moodtestname: moodtestname,
                    results: results,
                  });
                  moodtestsRequest(1, moodtestname, results);
                  navigate("/moodtests/results", { replace: true });
                }}
              >
                {loading && (
                  <span className="spinner-border spinner-border-md mr-1 justify-center"></span>
                )}
                <span className="text-xl">Complete</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnxietyPage;
