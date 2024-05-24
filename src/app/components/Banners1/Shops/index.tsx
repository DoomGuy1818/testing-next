import Cardsshops from "../Cardsshops";
import Titleshops from "../Titleshops";
import "./Shops.scss";
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
