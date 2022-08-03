import { configureStore } from "@reduxjs/toolkit";
import countUp from "./countUpSlice";
import countDown from "./countDownSlice";

const store = configureStore({
  reducer: {
    countUp: countUp.reducer,
    countDown: countDown.reducer
  }
});

export default store;