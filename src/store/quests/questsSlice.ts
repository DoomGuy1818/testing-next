import { wishlistApi } from "@/service/api";
import { Quest } from "@/types/Quest";
import { createSlice, SerializedError } from "@reduxjs/toolkit";

interface IState {
  quest: Quest | {};
  quests: Quest[] | [];
  error: boolean | SerializedError;
}

const initialState: IState = {
  quest: {},
  quests: [],
  error: false,
};
const questsSlice = createSlice({
  name: "quest",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      wishlistApi.endpoints.getQuests.matchFulfilled,
      (state, action) => {
        state.quests = action.payload;
      }
    );
    builder.addMatcher(
      wishlistApi.endpoints.getOneQuest.matchFulfilled,
      (state, action) => {
        state.quest = action.payload;
      }
    );
    builder.addMatcher(
      wishlistApi.endpoints.deleteOneQuest.matchRejected ||
        wishlistApi.endpoints.updateOneQuest.matchRejected ||
        wishlistApi.endpoints.postQuests.matchRejected ||
        wishlistApi.endpoints.getQuests.matchRejected ||
        wishlistApi.endpoints.getOneQuest.matchRejected,
      (state, action) => {
        state.error = action.error;
      }
    );
  },
});

export default questsSlice.reducer;
