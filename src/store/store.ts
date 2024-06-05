import { configureStore } from "@reduxjs/toolkit";
import { wishlistApi } from "@/service/api";
import { createLogger } from "redux-logger";
import tasksSlice from "./tasks/tasksSlice";
import subquestSlice from "./subquest/subquestSlice";
const logger = createLogger({
  collapsed: true,
});
export const store = configureStore({
  reducer: {
    [wishlistApi.reducerPath]: wishlistApi.reducer,
    task: tasksSlice,
    subquest: subquestSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(wishlistApi.middleware).concat(logger),
});
