import Image from "next/image";
import "./CardQuestItem.scss";
type Props = {
  text: string | undefined;
  coins: number;
  src: string;
  setState: Function;
  setInfo: Function;
  id: string;
};
const CardQuestItem = ({ text, coins, src, setState, setInfo, id }: Props) => {
  return (
    <li
      onClick={() => {
        setState(true);
        setInfo({ taskTitle: text, coins, logoSrc: src });
      }}
      className="card-quest__item"
    >
      <div className="card-quest__main">
        <p className="card-quest__text">{text}</p>
      </div>
      <div className="card-quest__bottom">
        <div className="card-quest__coins-section">
          <p className="card-quest__coins">{coins}</p>
          <Image
            src="/coin.png"
            width={26}
            height={26}
            alt="coin"
            className="card-quest__coin-image"
          />
        </div>
        {src.length ? (
          <Image
            src={src}
            className="card-quest__image"
            width={120}
            height={40}
            alt="image"
          />
        ) : (
          <div className="card-quest__image-grey"></div>
        )}
      </div>
    </li>
  );
};

export default CardQuestItem;
