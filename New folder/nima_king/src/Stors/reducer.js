import { createSlice } from "@reduxjs/toolkit";
const reducer = createSlice({
  name: "Card",
  initialState: { Card: [] },
  reducers: {
    Addalldata: (state, action) => {
      state.Card = [...action.payload];
    },
  },
});
export const { Addalldata } = reducer.actions;
export default reducer.reducer;
