import axios from "axios";
import { API_URL } from "../../constants/Api";
//import auth from "../reducers/auth";
import authHeader from "../AuthHeader";
export const startSessionRequest = (userId) => {
  return axios
    .post(API_URL + "session/", { userId }, { headers: authHeader() })
    .then((response) => {
      sessionStorage.setItem(
        "session",
        JSON.stringify({ sessionId: response.data })
      );
      return { response: response.data };
    });
};

export const sendTestStepRequest = (
  sessionId,
  upsettingEvent,
  feelings,
  percentages
) => {
  return axios
    .post(
      API_URL + "session/teststep",
      {
        sessionId,
        upsettingEvent,
        feelings,
        percentages,
      },
      { headers: authHeader() }
    )
    .then((response) => {
      return { response: response.data };
    });
};
