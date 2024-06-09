import { selectorWithTypes } from "@/store/typedFunctions";
import Cardsshops from "../Cardsshops";
import Titleshops from "../Titleshops";
import "./Shops.scss";
import { useDeleteOfflineShopMutation } from "@/service/api";
type Props = {
  name: string;
};
const Shops = ({ name }: Props) => {
  return (
    <div className={name}>
      <Titleshops />
      <Cardsshops />
    </div>
  );
};

export default Shops;
