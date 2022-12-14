import create from "zustand";

// In this store there will be
export const useThoughtsStore = create((set) => ({
  negativeThoughts: [],
  positiveThoughts: [],
}));
