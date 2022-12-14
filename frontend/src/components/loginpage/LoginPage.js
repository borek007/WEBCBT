import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
//import Alert from "./Alert";
import { useMainStore } from "../../store/MainStore";
import video from "../../assets/videos/background";
import LoginRequest from "../../requests/login";
import {
  CheckIfEmailIsValid,
  CheckIfPasswordIsValid,
} from "../../validators/validators";
import { useTranslation } from "react-i18next";
import LanguageButton from "../languagebutton";

const Login = (props) => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [emailinvalid, setEmailinvalid] = useState(false);
  const [passwordinvalid, setPasswordinvalid] = useState(false);
  //const [loading, setLoading] = useState(false);
  const loading = useMainStore((state) => state.loading);

  const requestErrorMessage = useMainStore(
    (state) => state.requestErrorMessage
  );

  const isLoggedIn = useMainStore((state) => state.isLoggedIn);

  if (isLoggedIn) navigate("/home", { replace: true });

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    props.setShowNavbar(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (CheckIfEmailIsValid(username)) {
      setEmailinvalid(false);
    }
  }, [username]);
  useEffect(() => {
    if (CheckIfPasswordIsValid(password)) {
      setPasswordinvalid(false);
    }
  }, [password]);

  const IsValid = () => {
    if (!CheckIfEmailIsValid(username)) {
      setEmailinvalid(true);
      return false;
    }
    if (!CheckIfPasswordIsValid(password)) {
      setPasswordinvalid(true);
      return false;
    }
    return true;
  };

  return (
    <div>
      <video
        src={video}
        autoPlay
        loop
        muted
        className="absolute min-h-screen object-cover max-h-screen w-screen  brightness-90 "
      ></video>
      <LanguageButton i18n={i18n}></LanguageButton>
      <div className="relative flex flex-auto  max-h-screen min-h-screen flex-col  justify-center rounded-lg py-12 font-serif sm:px-6 lg:px-8">
        <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-md">
          <h1 className="cursor-default mt-6 text-center text-7xl font-extrabold text-white transition-colors duration-1000 delay-100 hover:text-indigo-600">
            WEB-CBT
          </h1>
        </div>
        <div className="mt-12 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-slate-50 py-8 px-4 shadow sm:rounded-lg sm:px-10 ">
            <div>
              <label
                htmlFor="username"
                className=" block text-xl text-gray-700"
              >
                {t("Username")}
              </label>
              <div className="hover:shadow-lg">
                <input
                  placeholder="Email"
                  type="text"
                  className={
                    !emailinvalid
                      ? "mt-1 block w-full  rounded-lg border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm transition  delay-75 duration-300 ease-in-out  focus:border-indigo-500 focus:ring-indigo-500  sm:text-lg"
                      : "mt-1 block w-full border-1 border-red-500 rounded-lg border  px-3 py-2 placeholder-gray-400 shadow-sm transition  delay-75 duration-300 ease-in-out  focus:border-indigo-500 focus:ring-indigo-500  sm:text-lg"
                  }
                  value={username}
                  name="username"
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              {emailinvalid && (
                <p className=" mt-1 text-sm italic text-red-500">
                  {t("WrongInput")}
                </p>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="password" className="block text-xl text-gray-700">
                {t("Password")}
              </label>
              <div className="hover:shadow-lg">
                <input
                  placeholder={t("Password")}
                  type="password"
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm transition delay-150 duration-300 ease-in-out focus:border-indigo-500 focus:ring-indigo-500 sm:text-lg"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              {passwordinvalid && (
                <p className="mt-1 text-sm italic text-red-500">
                  {t("WrongInput")}
                </p>
              )}
            </div>

            <div className="form-group mt-6 text-center">
              {requestErrorMessage && (
                <p className="mb-2 text-md italic  text-red-500">
                  {requestErrorMessage}
                </p>
              )}

              <button
                onClick={(e) => {
                  navigate("/home", { replace: true });
                  if (IsValid()) {
                    useMainStore.setState({
                      username: username,
                      password: password,
                      loading: true,
                    });

                    LoginRequest(username, password);
                  }
                }}
                className="flex w-full justify-center rounded-lg border border-transparent bg-indigo-800 py-2 px-4 text-lg font-medium text-white shadow-sm transition delay-75 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-indigo-700 focus:outline-none appearance-none"
                disabled={loading}
              >
                {loading ? (
                  <span className="text-xl animate-pulse">Processing...</span>
                ) : (
                  <span className="text-xl">{t("Login")}</span>
                )}
              </button>
            </div>

            <div className="text-center">
              <button
                className="text-md font-serfi mt-3 border-none  font-semibold hover:text-indigo-500"
                onClick={() => {
                  navigate("/register", { replace: true });
                }}
              >
                {t("OrSignUp")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
