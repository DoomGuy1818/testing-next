import Image from "next/image";
import "./TaskBanner.scss";
import TitleItem from "../TitleItem";
import { dispatchWithTypes, selectorWithTypes } from "@/store/typedFunctions";
import {
  useGetOneSubquestQuery,
  useGetOneTaskQuery,
  useUpdateOneSubquestMutation,
} from "@/service/api";
import ReactLoading from "react-loading";
import React, { useEffect } from "react";
import { setTask } from "@/store/tasks/tasksSlice";
import { setSubquest } from "@/store/subquest/subquestSlice";
type Props = {
  isTaskBannerOpen: boolean;
  setState: Function;
  subquestId: string;
  setId: Function;
};

const TaskBanner = ({
  isTaskBannerOpen,
  setState,
  subquestId,
  setId,
}: Props) => {
  const dispatch = dispatchWithTypes();
  console.log({ subquestId });
  const imageSrc = "";
  const logoSrc = "";
  const { data: subquestData, refetch: refetchSubquest } =
    useGetOneSubquestQuery(subquestId);
  const { subquest } = selectorWithTypes((state) => state.subquest);
  const { data: taskData, refetch: refetchTask } = useGetOneTaskQuery(
    subquest.task_id
  );
  const { task } = selectorWithTypes((state) => state.task);

  useEffect(() => {
    refetchSubquest();
  }, [subquestId, refetchSubquest]);

  useEffect(() => {
    if (subquestData) {
      refetchTask();
    }
  }, [subquestData, refetchTask, subquest]);

  const [updateOneSubquest] = useUpdateOneSubquestMutation();
  if (!isTaskBannerOpen) {
    return null;
  }
  const clickOnTheButton = async () => {
    const data = await updateOneSubquest({
      id: subquest.id,
      reward: subquest.reward,
      task_id: subquest.task_id,
      is_done: true,
    });
    console.log(data);
    setState(false);
    setId("");
    dispatch(setTask({}));
    dispatch(setSubquest({}));
  };
  return (
    <div
      className="task-banner__background"
      onClick={() => {
        setState(false);
        setId("");
        dispatch(setTask({}));
        dispatch(setSubquest({}));
      }}
    >
      {!task.id ? (
        <ReactLoading
          color="#b8c7fb"
          type={"spin"}
          width={150}
          height={150}
          className="banner-loading"
        />
      ) : (
        <div className="task-banner__content">
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="task-banner__main"
          >
            {logoSrc.length ? (
              <Image
                className="task-banner__logo"
                src={""}
                height={40}
                width={170}
                alt="logo"
              />
            ) : (
              <div className="gray__logo"></div>
            )}

            <h3 className="task-banner__title">{task.name}</h3>
            <div className="task-banner__task">
              {imageSrc.length ? (
                <Image
                  width={121}
                  height={121}
                  className="task-banner__task-image"
                  src={imageSrc}
                  alt="task-image"
                />
              ) : (
                <div className="gray-square"></div>
              )}
              <p className="task-banner__task-name">{task.description}</p>
            </div>
            <div className="task-banner__coins">
              <p className="task-banner__gray-text">Награда за выполнение:</p>
              <div className="task-banner__coins-section">
                <p className="task-banner__coins-counter">{subquest.reward}</p>
                <Image
                  className="task-banner__coin-image"
                  src="/coin.png"
                  width={50}
                  height={50}
                  alt="coin"
                />
              </div>
            </div>
          </div>
          <div className="dashed-border"></div>
          <div className="task-banner__bottom">
            <TitleItem
              text="Забрать награду"
              className="title-item task-banner__button"
              funct={clickOnTheButton}
            />
          </div>
        </div>
      )}
    </div>
  );
};
export default React.memo(TaskBanner);
