import CardQuestItem from "../../Banners2/Cardsquests/CardQuestItem/CardQuestItem";
import ActionsTasksActions from "../ActionsTasksActions/ActionsTasksActions";
import "./ActionsTasksItem.scss";
import { QuestItem } from "@/types/QuestItem";

type Props = {
  id: number;
  text: string;
  coins: number;
  taskText: string;
  src: string;
  setQuests: Function;
  questsItems: QuestItem[];
  setEditedTask: Function;
};
const ActionsTasksItem = ({
  id,
  text,
  coins,
  taskText,
  src,
  setQuests,
  questsItems,
  setEditedTask,
}: Props) => {
  return (
    <div className="tasks-item">
      <CardQuestItem
        coins={coins}
        setInfo={() => {}}
        setState={() => {}}
        src={src || ""}
        taskText={taskText}
        text={text}
      />
      <ActionsTasksActions
        setEditedTask={setEditedTask}
        id={id}
        setQuests={setQuests}
        questsItems={questsItems}
      />
    </div>
  );
};
export default ActionsTasksItem;
