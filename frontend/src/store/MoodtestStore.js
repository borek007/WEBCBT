import create from "zustand";

// IN this store there is data stored about the user, login/registration process and request errror messages
export const useMoodtestStore = create((set) => ({
  moodtestname: "",
  results: {},
}));
