import Image from "next/image";
import "./ActionsTasksActions.scss";
import { QuestItem } from "@/types/QuestItem";
import { useDeleteOneSubquestMutation } from "@/service/api";
type Props = {
  id: number;
  setQuests: Function;
  questsItems: QuestItem[];
  setEditedTask: Function;
};
const ActionsTasksActions = ({
  id,
  setQuests,
  questsItems,
  setEditedTask,
}: Props) => {
  const [deleteOneSubquestQuest, { isLoading: isDeliting }] =
    useDeleteOneSubquestMutation();
  const editQuest = () => {
    const editedItem = questsItems.find((quest) => {
      return quest.id === id;
    });
    setEditedTask(editedItem);
  };
  const deleteQuest = () => {
    const itemIndex = questsItems.findIndex((quest) => {
      return quest.id === id;
    });
    const quests = [...questsItems];
    quests.splice(itemIndex, 1);
    setQuests(quests);
    deleteOneSubquestQuest(4);
  };
  return (
    <div className="actions">
      <button className="edit-button" onClick={() => editQuest()}>
        <Image
          className="edit-img"
          width={60}
          height={60}
          src="/edit-icon.svg"
          alt="image"
        />
      </button>
      <button className="delete-button" onClick={() => deleteQuest()}>
        <Image
          className="delete-img"
          width={60}
          height={60}
          src="/delete-icon.svg"
          alt="image"
        />
      </button>
    </div>
  );
};
export default ActionsTasksActions;
