import {
  useDeleteOneSubquestMutation,
  useDeleteOneTaskMutation,
  useGetSubquestsQuery,
  useGetTasksQuery,
} from "@/service/api";
import CardQuestItem from "./CardQuestItem/CardQuestItem";
import "./Cardsquests.scss";
import { quests } from "@/app/quests/moks/quests";
import { useSelector } from "react-redux";
import { selectorWithTypes } from "@/store/typedFunctions";
type Props = {
  setState: Function;
  setInfo: Function;
};
const CardQuests = ({ setState, setInfo }: Props) => {
  useGetSubquestsQuery(null);
  useGetTasksQuery(null);
  const { subquests } = selectorWithTypes((state) => state.subquest);
  const { tasks } = selectorWithTypes((state) => state.task);
  return (
    <ul className="card-quests__list">
      {subquests.map((item, index) => {
        const task = tasks.find((task) => task.id === item.task_id);
        return item.is_done ? null : (
          <CardQuestItem
            setInfo={setInfo}
            setState={setState}
            key={index}
            text={task?.name}
            coins={item.reward}
            src={""}
            id={item.id}
          />
        );
      })}
    </ul>
  );
};

export default CardQuests;
