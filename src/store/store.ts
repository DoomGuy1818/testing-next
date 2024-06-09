import { configureStore } from "@reduxjs/toolkit";
import { wishlistApi } from "@/service/api";
import { createLogger } from "redux-logger";
import tasksSlice from "./tasks/tasksSlice";
import subquestSlice from "./subquest/subquestSlice";
import offlineShopsSlice from "./offline-shops/offlineShopsSlice";
import questsSlice from "./quests/questsSlice";
const logger = createLogger({
  collapsed: true,
});
export const store = configureStore({
  reducer: {
    [wishlistApi.reducerPath]: wishlistApi.reducer,
    task: tasksSlice,
    subquest: subquestSlice,
    offlineShop: offlineShopsSlice,
    quest: questsSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(wishlistApi.middleware).concat(logger),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
