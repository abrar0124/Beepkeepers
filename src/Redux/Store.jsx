import { configureStore } from "@reduxjs/toolkit";
import Counterslice from "../features/counter/Counterslice";
export const store = configureStore({
  reducer: {
    counter: Counterslice,
  },
});
