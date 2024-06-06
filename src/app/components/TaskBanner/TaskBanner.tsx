import Image from "next/image";
import "./TaskBanner.scss";
import TitleItem from "../TitleItem";
import { selectorWithTypes } from "@/store/typedFunctions";
import {
  useGetOneSubquestQuery,
  useGetOneTaskQuery,
  useUpdateOneSubquestMutation,
} from "@/service/api";
import ReactLoading from "react-loading";
type Props = {
  isTaskBannerOpen: boolean;
  setState: Function;
  subquestId: string;
};

const TaskBanner = ({ isTaskBannerOpen, setState, subquestId }: Props) => {
  const imageSrc = "";
  const logoSrc = "";
  useGetOneSubquestQuery(subquestId);
  const { subquest } = selectorWithTypes((state) => state.subquest);
  useGetOneTaskQuery(subquest.task_id);
  const { task } = selectorWithTypes((state) => state.task);
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
  };
  return (
    <div
      className="task-banner__background"
      onClick={() => {
        setState(false);
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
export default TaskBanner;
