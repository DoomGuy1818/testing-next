import { quests } from "@/app/quests/moks/quests";
import TitleItem from "../TitleItem";
import "./ActionsTasksSection.scss";
import ActionsTasksItem from "./ActionsTasksItem/ActionsTasksItem";
import { useEffect, useMemo, useState } from "react";
import { QuestItem } from "@/types/QuestItem";

type Props = {
  setEditedTask: Function;
  questsItems: QuestItem[];
  setQuestsItems: Function;
};
const ActionsTasksSection = ({
  setEditedTask,
  questsItems,
  setQuestsItems,
}: Props) => {
  return (
    <div className="section">
      <div className="section-header">
        <TitleItem
          className="title-item"
          text="Готовые Квесты"
          funct={() => {}}
        />
        <TitleItem
          className="title-item title-item_actions"
          text="Действия"
          funct={() => {}}
        />
      </div>
      <div className="section-body section-items__list">
        {questsItems.map((quest, index) => {
          return (
            <ActionsTasksItem
              key={index}
              id={quest.id}
              text={quest.text}
              coins={quest.coins}
              taskText={quest.taskText}
              src={quest.src}
              setQuests={setQuestsItems}
              questsItems={questsItems}
              setEditedTask={setEditedTask}
            />
          );
        })}
      </div>
    </div>
  );
};
export default ActionsTasksSection;
