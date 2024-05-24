import Image from "next/image";
import "./ActionsTasksActions.scss";
import { QuestItem } from "@/types/QuestItem";
import { useDeleteOneSubquestMutation } from "@/service/api";
type Props = {
  text: string;
  setQuests: Function;
  questsItems: QuestItem[];
};
const ActionsTasksActions = ({ text, setQuests, questsItems }: Props) => {
  const [deleteOneSubquestQuest, { isLoading: isDeliting }] =
    useDeleteOneSubquestMutation();
  const editQuest = () => {};
  const deleteQuest = () => {
    const itemIndex = questsItems.findIndex((quest) => {
      return quest.text == text;
    });
    const quests = [...questsItems];
    quests.splice(itemIndex, 1);
    setQuests(quests);
    deleteOneSubquestQuest(4);
  };
  return (
    <div className="actions">
      <button className="edit-button">
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
