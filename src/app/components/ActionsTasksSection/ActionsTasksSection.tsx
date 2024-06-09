import TitleItem from "../TitleItem";
import "./ActionsTasksSection.scss";
import ActionsTasksItem from "./ActionsTasksItem/ActionsTasksItem";
import { selectorWithTypes } from "@/store/typedFunctions";
import {
  useGetOneSubquestQuery,
  useGetSubquestsQuery,
  useGetTasksQuery,
} from "@/service/api";
import ReactLoading from "react-loading";

type Props = {
  setEditedTaskId: Function;
};
const ActionsTasksSection = ({ setEditedTaskId }: Props) => {
  useGetSubquestsQuery(null);
  useGetTasksQuery(null);
  const { subquests } = selectorWithTypes((state) => state.subquest);
  const { tasks } = selectorWithTypes((state) => state.task);
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
        {subquests.length ? (
          subquests.map((subquest, index) => {
            const task = tasks.find((task) => task.id === subquest.task_id);
            return (
              <ActionsTasksItem
                key={index}
                id={subquest.id}
                text={task!.name}
                coins={subquest.reward}
                taskText={task!.description}
                src={""}
                setEditedTaskId={setEditedTaskId}
              />
            );
          })
        ) : (
          <ReactLoading
            width={150}
            height={150}
            type={"spin"}
            color="#b8c7fb"
          />
        )}
      </div>
    </div>
  );
};
export default ActionsTasksSection;
