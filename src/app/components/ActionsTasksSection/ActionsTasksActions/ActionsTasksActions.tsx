import Image from "next/image";
import "./ActionsTasksActions.scss";
import {
  useDeleteOneSubquestMutation,
  useDeleteOneTaskMutation,
  useGetOneSubquestQuery,
} from "@/service/api";
type Props = {
  id: string;
  setEditedTaskId: Function;
  taskId: string;
};
const ActionsTasksActions = ({ id, setEditedTaskId, taskId }: Props) => {
  const [deleteOneSubquest, { isLoading: isDeliting }] =
    useDeleteOneSubquestMutation();
  const [deleteOneTask] = useDeleteOneTaskMutation();
  const editQuest = () => {
    setEditedTaskId(id);
  };
  const deleteQuest = () => {
    deleteOneSubquest(id);
    deleteOneTask(taskId);
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
