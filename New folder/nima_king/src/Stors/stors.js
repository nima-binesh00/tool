import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";
const stor = configureStore({
  reducer: {
    num: reducer,
  },
});
export default stor;
