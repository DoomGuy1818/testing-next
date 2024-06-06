import {
  useGetOfflineShopsQuery,
  usePostOfflineShopsMutation,
} from "@/service/api";
import Shops from "./Shops";
import Subbanner1 from "./Subbanner1";
import { useEffect } from "react";
import React from "react";

const Banner1 = () => {
  return (
    <div className="banner-one">
      <Subbanner1 />
      <Shops name={"shops"} />
    </div>
  );
};

export default React.memo(Banner1);
