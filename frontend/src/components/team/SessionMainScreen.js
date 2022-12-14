import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import { ReactComponent as NewSessionLogo } from "../../assets/icons/StartNewSession.svg";

const SessionMainScreen = () => {
  let navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  return (
    <div className="flex min-h-screen flex-col  justify-center rounded-lg py-12 font-sans sm:px-6 lg:px-8">
      <div className="mx-auto mb-12 text-center md:max-w-4xl">
        <h1 className="mt-6 text-center font-serif text-4xl font-extrabold text-gray-900">
          Session
        </h1>
      </div>
      <section className="rounded-sm bg-white drop-shadow-md md:py-2">
        <div className="container mx-auto px-4">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div
                className="h-full rounded-md p-8 text-center transition delay-75 duration-300 hover:bg-white hover:shadow-xl"
                onClick={() => {
                  navigate("/session/test", { replace: true });
                }}
              >
                <div className="mx-auto mb-6 inline-flex h-16 w-16 items-center justify-center rounded-lg bg-violet-500 text-white">
                  <NewSessionLogo className="mt-2 h-20 fill-white" />

                  {loading && (
                    <span className="spinner-border spinner-border-md mr-1 justify-center"></span>
                  )}
                </div>
                <h3 className="mb-4 text-xl font-bold leading-tight md:text-2xl">
                  Start New Session
                </h3>
                <p className="text-coolGray-500 font-medium">
                  Go through the steps of TEAM therapy and start feeling better!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default SessionMainScreen;
