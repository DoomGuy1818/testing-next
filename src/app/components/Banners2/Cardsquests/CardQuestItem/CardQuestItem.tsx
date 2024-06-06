import Image from "next/image";
import "./CardQuestItem.scss";
import { useGetOneSubquestQuery } from "@/service/api";
import { useEffect } from "react";
type Props = {
  text: string | undefined;
  coins: number;
  src: string;
  setState: Function;
  setId: Function;
  id: string;
};
const CardQuestItem = ({ text, coins, src, setState, id, setId }: Props) => {
  return (
    <li
      onClick={() => {
        setState(true);
        setId(id);
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
