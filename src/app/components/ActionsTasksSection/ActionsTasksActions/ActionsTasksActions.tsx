import Image from "next/image";
import "./ActionsTasksActions.scss";
import {
  useDeleteOneSubquestMutation,
  useDeleteOneTaskMutation,
  useGetOneSubquestQuery,
} from "@/service/api";
import { selectorWithTypes } from "@/store/typedFunctions";
type Props = {
  id: string;
  setEditedTaskId: Function;
};
const ActionsTasksActions = ({ id, setEditedTaskId }: Props) => {
  const [deleteOneSubquest, { isLoading: isDeliting }] =
    useDeleteOneSubquestMutation();
  const { subquest } = selectorWithTypes((state) => state.subquest);
  const [deleteOneTask] = useDeleteOneTaskMutation();
  const editQuest = () => {
    setEditedTaskId(id);
  };
  const deleteQuest = () => {
    deleteOneSubquest(id);
    deleteOneTask(subquest.task_id);
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
