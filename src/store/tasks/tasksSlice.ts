import { wishlistApi } from "@/service/api";
import { Task } from "@/types/Task";
import { createSlice, SerializedError } from "@reduxjs/toolkit";
interface IState {
  tasks: Task[] | [];
  task: Task | {};
  error: boolean | SerializedError;
}
const initialState: IState = {
  tasks: [],
  task: {},
  error: false,
};
const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      wishlistApi.endpoints.getTasks.matchFulfilled,
      (state, action) => {
        state.tasks = action.payload;
      }
    );
    builder.addMatcher(
      wishlistApi.endpoints.getOneTask.matchFulfilled,
      (state, action) => {
        state.task = action.payload;
      }
    );
    builder.addMatcher(
      wishlistApi.endpoints.getOneTask.matchRejected ||
        wishlistApi.endpoints.getTasks.matchRejected ||
        wishlistApi.endpoints.deleteOneTask.matchRejected ||
        wishlistApi.endpoints.updateOneTask.matchRejected ||
        wishlistApi.endpoints.postTasks.matchRejected,
      (state, action) => {
        state.error = action.error;
      }
    );
  },
});

export default taskSlice.reducer;
