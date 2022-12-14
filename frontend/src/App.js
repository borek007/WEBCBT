import "./App.css";
//import { mountStoreDevtool } from "simple-zustand-devtools";

//components
import LoginPage from "./components/loginpage/LoginPage";
import RegisterPage from "./components/registerpage/RegisterPage";
import HomePage from "./components/homepage/HomePage";

import MoodTestsPage from "./components/moodtests/moodtestspage/MoodTestsPage";
import DepressionPage from "./components/moodtests/depressionpage/DepressionPage";
import AnxietyPage from "./components/moodtests/anxietypage/AnxietyPage";
import AddictionsPage from "./components/moodtests/addictionspage/AddictionsPage";
import AngerPage from "./components/moodtests/angerpage/AngerPage";
import RelationshipsPage from "./components/moodtests/relationshipspage/RelationshipsPage";
import HappinessPage from "./components/moodtests/happinesspage/HappinessPage";
import MoodTestsResults from "./components/moodtests/moodtestresult/MoodTestResult";

import SessionMainScreen from "./components/team/SessionMainScreen";
import TestingComponent from "./components/team/testingstep/TestingComponent";

import { Routes, Route, BrowserRouter } from "react-router-dom";

import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useMainStore } from "./store/MainStore";

import video from "./assets/videos/background";
import SessionPage from "./components/team/sessionpage/SessionPage";

//mountStoreDevtool("Store", useBearStore);

export default function App() {
  const [showNavbar, setShowNavbar] = useState(true);

  return (
    <BrowserRouter>
      {showNavbar && (
        <nav className=" sticky top-0 flex items-center justify-between flex-wrap border-slate-200">
          <video
            src={video}
            autoPlay
            loop
            muted
            className="absolute object-cover h-14 max-h-screen w-screen  brightness-50 opacity-90 "
          ></video>
          <div className="relative flex items-center  text-white mr-6">
            <NavLink
              to="/home"
              className={(navData) =>
                navData.isActive
                  ? " py-3 px-6 font-semibold font-serif text-xl tracking-tight border-b-4 border-slate-200"
                  : " py-3 px-6 font-semibold font-serif text-xl tracking-tight hover:text-indigo-500 transition-all duration-500 delay-75"
              }
            >
              WEB-CBT
            </NavLink>
          </div>
          <div className="relative flex items-center text-white">
            <NavLink
              to="/moodtests"
              className={(navData) =>
                navData.isActive
                  ? " py-3 px-6 font-semibold font-serif text-xl tracking-tight border-b-4 border-slate-200"
                  : " py-3 px-6 font-semibold font-serif text-xl tracking-tight hover:text-indigo-500 transition-all duration-500 delay-75"
              }
            >
              Mood Tests
            </NavLink>
            <NavLink
              to="/session"
              className={(navData) =>
                navData.isActive
                  ? " py-3 px-6 font-semibold font-serif text-xl tracking-tight border-b-4 border-slate-200"
                  : " py-3 px-6 font-semibold font-serif text-xl tracking-tight hover:text-indigo-500 transition-all duration-500 delay-75"
              }
            >
              Session
            </NavLink>
            <NavLink
              to="/profile"
              className={(navData) =>
                navData.isActive
                  ? " py-3 px-6 font-semibold font-serif text-xl tracking-tight border-b-4 border-slate-200"
                  : " py-3 px-6 font-semibold font-serif text-xl tracking-tight hover:text-indigo-500 transition-all duration-500 delay-75"
              }
            >
              Profile
            </NavLink>
          </div>
          <div className="flex relative items-right text-white ml-6">
            <NavLink
              to="/login"
              className={(navData) =>
                navData.isActive
                  ? " py-3 px-6 font-semibold font-serif text-xl tracking-tight border-b-4 border-slate-200"
                  : " py-3 px-6 font-semibold font-serif text-xl tracking-tight hover:text-indigo-500 transition-all duration-500 delay-75"
              }
              onClick={() => {
                useMainStore.setState({
                  username: "",
                  password: "",
                  isLoggedIn: false,
                });
              }}
            >
              Logout
            </NavLink>
          </div>
        </nav>
      )}
      <Routes>
        <Route path="/" element={<LoginPage setShowNavbar={setShowNavbar} />} />
        <Route path="/login" element={<Navigate to="/" replace />} />
        <Route
          path="/register"
          element={<RegisterPage setShowNavbar={setShowNavbar} />}
        />
        <Route
          path="/home"
          element={<Navigate replace to="/moodtests" />}
        ></Route>
        <Route
          path="/moodtests"
          element={<MoodTestsPage setShowNavbar={setShowNavbar} />}
        />
        <Route
          path="/moodtests/depression"
          element={<DepressionPage setShowNavbar={setShowNavbar} />}
        />
        <Route
          path="/moodtests/anxiety"
          element={<AnxietyPage setShowNavbar={setShowNavbar} />}
        />
        <Route
          path="/moodtests/addictions"
          element={<AddictionsPage setShowNavbar={setShowNavbar} />}
        />
        <Route
          path="/moodtests/anger"
          element={<AngerPage setShowNavbar={setShowNavbar} />}
        />
        <Route
          path="/moodtests/relationships"
          element={<RelationshipsPage setShowNavbar={setShowNavbar} />}
        />
        <Route
          path="/moodtests/happiness"
          element={<HappinessPage setShowNavbar={setShowNavbar} />}
        />
        <Route
          path="/moodtests/results"
          element={<MoodTestsResults setShowNavbar={setShowNavbar} />}
          exact={true}
        />
        <Route
          path="/session"
          element={<SessionMainScreen setShowNavbar={setShowNavbar} />}
        />
        <Route
          path="/session/test"
          element={<SessionPage setShowNavbar={setShowNavbar} />}
        />
      </Routes>
    </BrowserRouter>
  );
}
