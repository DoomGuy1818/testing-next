import CardQuestItem from "../../Banners2/Cardsquests/CardQuestItem/CardQuestItem";
import ActionsTasksActions from "../ActionsTasksActions/ActionsTasksActions";
import "./ActionsTasksItem.scss";
import { QuestItem } from "@/types/QuestItem";

type Props = {
  text: string;
  coins: number;
  taskText: string;
  src: string;
  setQuests: Function;
  questsItems: QuestItem[];
};
const ActionsTasksItem = ({
  text,
  coins,
  taskText,
  src,
  setQuests,
  questsItems,
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
        text={text}
        setQuests={setQuests}
        questsItems={questsItems}
      />
    </div>
  );
};
export default ActionsTasksItem;
