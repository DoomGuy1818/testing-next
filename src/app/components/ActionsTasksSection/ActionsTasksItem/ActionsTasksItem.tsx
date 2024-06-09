import CardQuestItem from "../../Banners2/Cardsquests/CardQuestItem/CardQuestItem";
import ActionsTasksActions from "../ActionsTasksActions/ActionsTasksActions";
import "./ActionsTasksItem.scss";
import { QuestItem } from "@/types/QuestItem";

type Props = {
  id: string;
  text: string | undefined;
  coins: number;
  taskText: string | undefined;
  src: string;
  setEditedTaskId: Function;
  taskId: string;
};
const ActionsTasksItem = ({
  id,
  text,
  coins,
  taskText,
  taskId,
  src,
  setEditedTaskId,
}: Props) => {
  return (
    <div className="tasks-item">
      <CardQuestItem
        coins={coins}
        setState={() => {}}
        src={src || ""}
        text={text}
        id={id}
        setId={() => {}}
      />
      <ActionsTasksActions
        setEditedTaskId={setEditedTaskId}
        id={id}
        taskId={taskId}
      />
    </div>
  );
};
export default ActionsTasksItem;
