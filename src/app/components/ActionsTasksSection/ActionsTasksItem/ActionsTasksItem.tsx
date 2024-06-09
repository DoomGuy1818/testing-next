import CardQuestItem from "../../Banners2/Cardsquests/CardQuestItem/CardQuestItem";
import ActionsTasksActions from "../ActionsTasksActions/ActionsTasksActions";
import "./ActionsTasksItem.scss";
import { QuestItem } from "@/types/QuestItem";

type Props = {
  id: string;
  text: string;
  coins: number;
  taskText: string;
  src: string;
  setEditedTaskId: Function;
};
const ActionsTasksItem = ({
  id,
  text,
  coins,
  taskText,
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
      <ActionsTasksActions setEditedTaskId={setEditedTaskId} id={id} />
    </div>
  );
};
export default ActionsTasksItem;
