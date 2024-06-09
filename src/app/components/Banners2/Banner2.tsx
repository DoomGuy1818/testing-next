import Titlequest from "./Titlequests";
import "./Banner2.scss";
import CardQuests from "./Cardsquests";
import { useGetSubquestsQuery, useGetTasksQuery } from "@/service/api";

type Props = {
  setState: Function;
  setId: Function;
};

const Banner2 = ({ setState, setId }: Props) => {
  useGetSubquestsQuery(null);
  useGetTasksQuery(null);
  return (
    <div className="banner-two">
      <Titlequest />

      <CardQuests setState={setState} setId={setId} />
    </div>
  );
};
export default Banner2;
