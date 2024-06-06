import Titlequest from "./Titlequests";
import "./Banner2.scss";
import CardQuests from "./Cardsquests";

type Props = {
  setState: Function;
  setInfo: Function;
};

const Banner2 = ({ setState, setInfo }: Props) => {
  return (
    <div className="banner-two">
      <Titlequest />
      <CardQuests setState={setState} setInfo={setInfo} />
    </div>
  );
};
export default Banner2;
