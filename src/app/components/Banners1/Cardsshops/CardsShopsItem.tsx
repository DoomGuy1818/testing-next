import Image from "next/image";
type Props = {
  shopIcon: string;
  itemClassName: string;
  imageClassName: string;
  width: number;
  height: number;
  name: string;
};
const CardsShopsItem = ({
  shopIcon,
  itemClassName,
  imageClassName,
  width,
  height,
  name,
}: Props) => {
  return (
    <li className={itemClassName}>
      {shopIcon.length ? (
        <Image
          className={imageClassName}
          alt="shop-icon"
          src={shopIcon}
          width={width}
          height={height}
        />
      ) : (
        <p className="shop-name">{name}</p>
      )}
    </li>
  );
};
export default CardsShopsItem;
