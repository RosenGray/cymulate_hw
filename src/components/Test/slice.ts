import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export const sliceKey = "test_slice";

interface TestState {
  testIs:number
}

const initialState: TestState = {
    testIs:0
};

const { actions, reducer } = createSlice({
  name: sliceKey,
  initialState,
  reducers: {
    setTestToBe: (
      state,
      { payload }: PayloadAction<number>
    ) => {
      state.testIs = payload;
    },
  },
});
export const { setTestToBe } = actions;

export default reducer;
