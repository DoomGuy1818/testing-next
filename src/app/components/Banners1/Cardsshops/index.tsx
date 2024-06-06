import { useGetOfflineShopsQuery } from "@/service/api";
import "./Cardsshops.scss";
import CardsShopsItem from "./CardsShopsItem";
import { shopsIcons } from "@/app/quests/moks/shopsIcons";
import { selectorWithTypes } from "@/store/typedFunctions";
const Cardsshops = () => {
  const { offlineShops } = selectorWithTypes((state) => state.offlineShop);
  useGetOfflineShopsQuery(null);
  return (
    <div className="cards-shops">
      {offlineShops.length ? (
        <ul className="cards-shops__list">
          {offlineShops.map((shop) => {
            return (
              <CardsShopsItem
                key={shop.id}
                width={160}
                height={60}
                name={shop.name}
                shopIcon={""}
                itemClassName="cards-shops__item"
                imageClassName="cards-shops__image"
              />
            );
          })}
        </ul>
      ) : (
        <div className="cards-shops__text">
          В данный момент нет доступных магазинов
        </div>
      )}
    </div>
  );
};
export default Cardsshops;
