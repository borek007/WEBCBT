import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import video from "../../assets/videos/background";
import { useTranslation } from "react-i18next";
import LanguageButton from "../languagebutton";
import {
  CheckIfAgeIsValid,
  CheckIfEmailIsValid,
  CheckIfPasswordIsValid,
} from "../../validators/validators";
import { useMainStore } from "../../store/MainStore";
import RegisterRequest from "../../requests/register";

const RegisterPage = (props) => {
  let navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const registerSuccess = useMainStore((state) => state.registerSuccess);
  const requestErrorMessage = useMainStore(
    (state) => state.requestErrorMessage
  );

  const [age, setAge] = useState("");
  const [gender, setGender] = useState("would rather not say");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loading = useMainStore((state) => state.loading);
  const [emailinvalid, setEmailInvalid] = useState(false);
  const [passwordinvalid, setPasswordInvalid] = useState(false);
  const [ageinvalid, setAgeInvalid] = useState(false);

  useEffect(() => {
    props.setShowNavbar(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (CheckIfEmailIsValid(email)) setEmailInvalid(false);
  }, [email]);

  useEffect(() => {
    if (CheckIfPasswordIsValid(password)) setPasswordInvalid(false);
  }, [password]);

  useEffect(() => {
    if (CheckIfAgeIsValid(age)) setAgeInvalid(false);
  }, [age]);

  const IsValid = () => {
    if (!CheckIfEmailIsValid(email)) {
      setEmailInvalid(true);
      return false;
    }
    if (!CheckIfPasswordIsValid(password)) {
      setPasswordInvalid(true);
      return false;
    }
    if (!CheckIfAgeIsValid(age)) {
      setAgeInvalid(true);
      return false;
    }
    return true;
  };
  useEffect(() => {
    if (registerSuccess) navigate("/login", { replace: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [registerSuccess]);

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
      <div className="relative flex max-h-screen flex-col justify-center rounded-lg py-6 font-serif sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="cursor-default mt-6 text-center text-5xl font-extrabold text-white transition-colors duration-1000 delay-100 hover:text-indigo-600">
            {t("Register")}
          </h2>
        </div>
        <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <div>
              <div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xl text-gray-700"
                  >
                    Email
                  </label>
                  <div className="hover:shadow-lg">
                    <input
                      type="text"
                      className="mt-1 block h-12 w-full rounded-lg border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm transition delay-75 duration-300 ease-in-out invalid:border-pink-500 hover:scale-105  focus:scale-105 focus:border-indigo-500 focus:ring-indigo-500 sm:text-lg"
                      name="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </div>
                  {emailinvalid && (
                    <p className="mt-1 text-sm italic text-red-500">
                      {t("WrongInput")}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block text-xl text-gray-700"
                  >
                    {t("Password")}
                  </label>
                  <div className="hover:shadow-lg">
                    <input
                      type="password"
                      className="mt-1 block h-12 w-full rounded-lg border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm transition delay-75 duration-300 ease-in-out hover:scale-105  focus:scale-105 focus:border-indigo-500 focus:ring-indigo-500 sm:text-lg"
                      name="password"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                  </div>
                  {passwordinvalid && (
                    <p className="mt-1 text-sm italic text-red-500">
                      {t("WrongPassword")}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="age" className="block text-xl text-gray-700">
                    {t("Age")}
                  </label>
                  <div className="hover:shadow-lg">
                    <input
                      type="number"
                      className=" mt-1 block h-12 w-full rounded-lg border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm transition delay-75 duration-300 ease-in-out hover:scale-105  focus:scale-105 focus:border-indigo-500 focus:ring-indigo-500 sm:text-lg"
                      name="age"
                      value={age}
                      onChange={(e) => {
                        setAge(e.target.value);
                      }}
                    />
                  </div>
                  {ageinvalid && (
                    <p className="mt-1 text-sm italic text-red-500">
                      {t("WrongAge")}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="gender"
                    className="block text-xl text-gray-700"
                  >
                    {t("Gender")}
                  </label>
                  <div className="hover:shadow-lg">
                    <select
                      className="border border-gray-200 w-100 mt-1 h-12 rounded-lg bordern w-full  bg-white px-3 text-lg shadow-sm transition delay-75 duration-300  ease-in-out hover:scale-105 focus:scale-105"
                      value={gender}
                      onChange={(e) => {
                        setGender(e.target.value);
                      }}
                    >
                      <option value="would rather not say">
                        {t("WouldRatherNotSay")}
                      </option>
                      <option value="female">{t("Female")}</option>
                      <option value="male">{t("Male")}</option>
                      <option value="other">{t("Other")}</option>
                    </select>
                  </div>
                </div>
                <div>
                  {requestErrorMessage && (
                    <p className="mb-2 text-md italic  text-red-500">
                      {requestErrorMessage}
                    </p>
                  )}
                  <button
                    onClick={(e) => {
                      if (IsValid()) {
                        useMainStore.setState({ loading: true });
                        RegisterRequest(email, password, age, gender);
                      }
                    }}
                    disabled={loading}
                    className="mt-6 flex w-full justify-center rounded-lg border border-transparent bg-indigo-500 py-2 px-4 text-xl text-white shadow-sm transition delay-75 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    {loading ? (
                      <span className="text-xl animate-pulse">
                        Processing...
                      </span>
                    ) : (
                      <span className="text-xl">{t("SignUp")}</span>
                    )}
                  </button>
                </div>
              </div>
            </div>
            <div className="text-center">
              <button
                className="text-md font-serfi mt-3 border-none bg-white font-semibold hover:text-indigo-500 "
                onClick={() => navigate("/login", { replace: true })}
              >
                {t("OrSignIn")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
