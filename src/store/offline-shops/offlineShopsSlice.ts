import { wishlistApi } from "@/service/api";
import { OfflineShop } from "@/types/OfflineShops";
import { createSlice, SerializedError } from "@reduxjs/toolkit";
interface IState {
  offlineShops: OfflineShop[] | [];
  offlineShop: OfflineShop | {};
  error: boolean | SerializedError;
}
const initialState: IState = {
  offlineShops: [],
  offlineShop: {},
  error: false,
};
const offlineShopsSlice = createSlice({
  name: "offlineShop",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      wishlistApi.endpoints.getOfflineShops.matchFulfilled,
      (state, action) => {
        state.offlineShops = action.payload;
      }
    );
    builder.addMatcher(
      wishlistApi.endpoints.getOneOfflineShop.matchFulfilled,
      (state, action) => {
        state.offlineShop = action.payload;
      }
    );
    builder.addMatcher(
      wishlistApi.endpoints.deleteOfflineShop.matchRejected ||
        wishlistApi.endpoints.updateOfflineShop.matchRejected ||
        wishlistApi.endpoints.postOfflineShops.matchRejected ||
        wishlistApi.endpoints.getOfflineShops.matchRejected ||
        wishlistApi.endpoints.getOneOfflineShop.matchRejected,
      (state, action) => {
        state.error = action.error;
      }
    );
  },
});

export default offlineShopsSlice.reducer;
