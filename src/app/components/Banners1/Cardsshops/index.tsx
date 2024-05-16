import "./Cardsshops.scss";
import CardsShopsItem from "./CardsShopsItem";

const Cardsshops = () => {
  const shopsIcons = [
    "/shops/wb_icon.png",
    "/shops/ozon_icon.png",
    "/shops/sber_icon.png",
    "/shops/yand_icon.png",
    "/shops/yand_icon.png",
    "/shops/sber_icon.png",
    "/shops/ozon_icon.png",
    "/shops/wb_icon.png",
  ];
  return (
    <div className="cards-shops">
      <ul className="cards-shops__list">
        {shopsIcons.map((shopIcon, index) => {
          return (
            <CardsShopsItem
              key={index}
              width={160}
              height={60}
              shopIcon={shopIcon}
              itemClassName="cards-shops__item"
              imageClassName="cards-shops__image"
            />
          );
        })}
      </ul>
    </div>
  );
};
export default Cardsshops;
