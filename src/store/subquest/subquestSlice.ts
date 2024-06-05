import { wishlistApi } from "@/service/api";
import { Subquest } from "@/types/Subquest";
import { createSlice, SerializedError } from "@reduxjs/toolkit";
interface IState {
  subquest: Subquest | {};
  subquests: Subquest[] | [];
  error: boolean | SerializedError;
}
const initialState: IState = {
  subquest: {},
  subquests: [],
  error: false,
};
const subquestSlice = createSlice({
  name: "subquest",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      wishlistApi.endpoints.getOneSubquest.matchFulfilled,
      (state, action) => {
        state.subquest = action.payload;
      }
    );
    builder.addMatcher(
      wishlistApi.endpoints.getSubquests.matchFulfilled,
      (state, action) => {
        state.subquests = action.payload;
      }
    );
    builder.addMatcher(
      wishlistApi.endpoints.getOneSubquest.matchRejected ||
        wishlistApi.endpoints.getSubquests.matchRejected ||
        wishlistApi.endpoints.postSubquest.matchRejected ||
        wishlistApi.endpoints.deleteOneSubquest.matchRejected ||
        wishlistApi.endpoints.updateOneSubquest.matchRejected,
      (state, action) => {
        state.error = action.error;
      }
    );
  },
});

export default subquestSlice.reducer;
