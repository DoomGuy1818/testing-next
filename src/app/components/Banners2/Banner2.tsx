import Titlequest from "./Titlequests";
import "./Banner2.scss";
import CardQuests from "./Cardsquests";
import {
  useGetQuestsQuery,
  useGetSubquestsQuery,
  useGetTasksQuery,
} from "@/service/api";
import { useEffect } from "react";

type Props = {
  setState: Function;
  setInfo: Function;
};

const Banner2 = ({ setState, setInfo }: Props) => {
  const getQuests = useGetQuestsQuery();
  console.log(getQuests);
  const getSubquests = useGetSubquestsQuery();
  console.log(getSubquests);
  const getTasks = useGetTasksQuery();
  console.log(getTasks);
  return (
    <div className="banner-two">
      <Titlequest />
      <CardQuests setState={setState} setInfo={setInfo} />
    </div>
  );
};
export default Banner2;
