import { useGetOfflineShopsQuery } from "@/service/api";
import Shops from "./Shops";
import Subbanner1 from "./Subbanner1";

const Banner1 = () => {
  const getOfflineShops = useGetOfflineShopsQuery();
  console.log(getOfflineShops);
  return (
    <div className="banner-one">
      <Subbanner1 />
      <Shops name={"shops"} />
    </div>
  );
};

export default Banner1;
