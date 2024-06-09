import Image from "next/image";
import "../CreateTaskBanner/CreateTaskBanner.scss";
import TitleItem from "../TitleItem";
import {
  ChangeEvent,
  FormEvent,
  FormEventHandler,
  useEffect,
  useState,
} from "react";
import { selectorWithTypes } from "@/store/typedFunctions";
import { useGetOneSubquestQuery, useGetOneTaskQuery } from "@/service/api";
type Props = {
  editedTaskId: string;
};
const EditTaskBanner = ({ editedTaskId }: Props) => {
  useGetOneSubquestQuery(editedTaskId);
  const { subquest } = selectorWithTypes((state) => state.subquest);
  useGetOneTaskQuery(subquest.task_id);
  const { task } = selectorWithTypes((state) => state.task);

  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [coins, setCoins] = useState(0);
  useEffect(() => {
    setTitle(task.name);
    setText(task.description);
    setCoins(subquest.reward);
  }, [subquest, task]);
  return (
    <div className="task-banner__background">
      <div className="task-banner__content">
        <div className="task-banner__main">
          <div className="logo-item"></div>
          <input
            className="task-banner__title"
            type="text"
            placeholder="Напишите название"
            onInput={(e: ChangeEvent<HTMLInputElement>) => {
              setTitle(e.target.value);
            }}
            value={title}
          />
          <div className="task-banner__task">
            <div className="gray-square"></div>
            <input
              className="task-banner__task-name"
              type="text"
              placeholder="Напишите задачу"
              onInput={(e: ChangeEvent<HTMLInputElement>) => {
                setText(e.target.value);
              }}
              value={text}
            />
          </div>
          <div className="task-banner__coins">
            <p className="task-banner__gray-text">Награда за выполнение:</p>
            <div className="task-banner__coins-section">
              <input
                className="task-banner__coins-counter"
                type="number"
                placeholder="+"
                onInput={(e: ChangeEvent<HTMLInputElement>) => {
                  setCoins(+e.target.value);
                }}
                value={coins}
              />
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
            text="Обновить квест"
            className="title-item task-banner__button"
            funct={() => {}}
          />
        </div>
      </div>
    </div>
  );
};

export default EditTaskBanner;
