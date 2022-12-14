import axios from "axios";
import { API_URL } from "../../constants/Api";
//import auth from "../reducers/auth";
import authHeader from "../AuthHeader";

export const moodtestsRequest = (userId, category, results) => {
  return axios
    .post(
      API_URL + "moodtests",
      {
        userId,
        category: category.toLowerCase(),

        question1: results.q1,
        question2: results.q2,
        question3: results.q3,
        question4: results.q4,
        question5: results.q5,
      },
      { headers: authHeader() }
    )
    .then((response) => {
      if (response.status === 200) {
        sessionStorage.setItem("moodtestresults", JSON.stringify({ results }));
        sessionStorage.setItem("moodtestname", JSON.stringify({ category }));
      }

      return { userId, response: response.data };
    });
};

export const getAllMoodtestsRequest = (userId, page) => {
  return axios
    .get(
      API_URL + "moodtests/" + userId + "?page=" + page,

      { headers: authHeader() }
    )
    .then((response) => {
      return { userId, response: response.data };
    });
};
