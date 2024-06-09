import CardQuestItem from "./CardQuestItem/CardQuestItem";
import "./Cardsquests.scss";
import { selectorWithTypes } from "@/store/typedFunctions";
import React from "react";
import ReactLoading from "react-loading";
type Props = {
  setState: Function;
  setId: Function;
};
const CardQuests = ({ setState, setId }: Props) => {
  const { subquests } = selectorWithTypes((state) => state.subquest);
  const { tasks } = selectorWithTypes((state) => state.task);
  return subquests.length ? (
    <ul className="card-quests__list">
      {subquests.map((item, index) => {
        const task = tasks.find((task) => task.id === item.task_id);
        return item.is_done ? null : (
          <CardQuestItem
            setId={setId}
            setState={setState}
            key={item.id}
            text={task?.name}
            coins={item.reward}
            src={""}
            id={item.id}
          />
        );
      })}
    </ul>
  ) : (
    <div className="loader-section">
      <ReactLoading width={150} height={150} type={"spin"} color="#b8c7fb" />
    </div>
  );
};

export default React.memo(CardQuests);
