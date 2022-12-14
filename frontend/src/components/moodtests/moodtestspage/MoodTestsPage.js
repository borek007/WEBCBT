import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { ReactComponent as DepressionIcon } from "../../../assets/icons/DepressionMoodTest.svg";
import { ReactComponent as AddictionsIcon } from "../../../assets/icons/AddictionsMoodTest.svg";
import { ReactComponent as AngerIcon } from "../../../assets/icons/AngerMoodTest.svg";
import { ReactComponent as RelationshipsIcon } from "../../../assets/icons/RelationshipsMoodTest.svg";
import { ReactComponent as HappinessIcon } from "../../../assets/icons/HappinessMoodTest.svg";
import { ReactComponent as AnxietyIcon } from "../../../assets/icons/AnxietyMoodTest.svg";
import { ReactComponent as ArrowLeftIcon } from "../../../assets/icons/ArrowLeft.svg";
import { useMainStore } from "../../../store/MainStore";

const MoodTestsPage = (props) => {
  const isLoggedIn = useMainStore((state) => state.isLoggedIn);

  let navigate = useNavigate();
  //if (!isLoggedIn) {
  //  return <Navigate to="/login" />;
  //}
  useEffect(() => {
    props.setShowNavbar(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="overflow-hidden flex min-h-screen flex-col  justify-center rounded-lg py-6 font-sans sm:px-6 lg:px-8">
      <div className="mx-auto mb-2 text-center md:max-w-4xl">
        <div className="mt-2  flex flex-row items-center">
          <h1 className=" mt-2 text-center font-serif text-4xl font-extrabold text-gray-900">
            Mood Tests
          </h1>
        </div>
      </div>
      <section className="rounded-sm bg-white  drop-shadow-md md:py-2">
        <div className="container mx-auto px-4">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div
                className="h-full rounded-md p-8 text-center transition delay-75 duration-300 hover:bg-white hover:shadow-xl"
                onClick={() =>
                  navigate("/moodtests/depression", { replace: true })
                }
              >
                <div className="mx-auto mb-6 inline-flex h-16 w-16 items-center justify-center rounded-lg bg-violet-500 text-white">
                  <DepressionIcon className="h-12 fill-white" />
                </div>
                <h3 className="mb-4 text-xl font-bold leading-tight md:text-2xl">
                  Depression
                </h3>
                <p className="text-coolGray-500 font-medium">
                  Find out how you are feeling in terms of sadness and
                  motivation
                </p>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div
                className="h-full rounded-md p-8 text-center transition delay-75 duration-300 hover:bg-white hover:shadow-xl"
                onClick={() =>
                  navigate("/moodtests/anxiety", { replace: true })
                }
              >
                <div className="mx-auto mb-6 inline-flex h-16 w-16 items-center justify-center rounded-lg bg-violet-500 text-white">
                  <AnxietyIcon className="h-12 fill-white" />
                </div>

                <h3 className="mb-4 text-xl font-bold leading-tight md:text-2xl">
                  Anxiety
                </h3>
                <p className="text-coolGray-500 font-medium">
                  Check whether you have been feeling tense lately
                </p>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div
                className="h-full rounded-md p-8 text-center transition delay-75 duration-300 hover:bg-white hover:shadow-xl"
                onClick={() =>
                  navigate("/moodtests/addictions", { replace: true })
                }
              >
                <div className="mx-auto mb-6 inline-flex h-16 w-16 items-center justify-center rounded-lg bg-violet-500 text-white">
                  <AddictionsIcon className="h-12 fill-white" />
                </div>
                <h3 className="mb-4 text-xl font-bold leading-tight md:text-2xl">
                  Addictions
                </h3>
                <p className="text-coolGray-500 font-medium">
                  Discover whether you have a problem with substance use
                </p>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div
                className="h-full rounded-md p-8 text-center transition delay-75 duration-300 hover:bg-white hover:shadow-xl"
                onClick={() => navigate("/moodtests/anger", { replace: true })}
              >
                <div className="mx-auto mb-6 inline-flex h-16 w-16 items-center justify-center rounded-lg bg-violet-500 text-white">
                  <AngerIcon className="h-12 fill-white" />
                </div>
                <h3 className="mb-4 text-xl font-bold leading-tight md:text-2xl">
                  Anger
                </h3>
                <p className="text-coolGray-500 font-medium">
                  Have you been feeling irritable lately?
                </p>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div
                className="h-full rounded-md p-8 text-center transition delay-75 duration-300 hover:bg-white hover:shadow-xl"
                onClick={() =>
                  navigate("/moodtests/relationships", { replace: true })
                }
              >
                <div className="mx-auto mb-6 inline-flex h-16 w-16 items-center justify-center rounded-lg bg-violet-500 text-white">
                  <RelationshipsIcon className="h-12 fill-white" />
                </div>
                <h3 className="mb-4 text-xl font-bold leading-tight md:text-2xl">
                  Relationships
                </h3>
                <p className="text-coolGray-500 font-medium">
                  Check the quality of your relationships
                </p>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div
                className="h-full rounded-md p-8 text-center transition delay-75 duration-300 hover:bg-white hover:shadow-xl"
                onClick={() =>
                  navigate("/moodtests/happiness", { replace: true })
                }
              >
                <div className="mx-auto mb-6 inline-flex h-16 w-16 items-center justify-center rounded-lg bg-violet-500 text-white">
                  <HappinessIcon className="h-12 fill-white" />
                </div>
                <h3 className="mb-4 text-xl font-bold leading-tight md:text-2xl">
                  Happiness
                </h3>
                <p className="text-coolGray-500 font-medium">
                  Find out how much joy you are getting out of life
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MoodTestsPage;
