import Image from "next/image";
import "./CreateTaskBanner.scss";
import TitleItem from "../TitleItem";
import {
  ChangeEvent,
  FormEvent,
  FormEventHandler,
  useEffect,
  useState,
} from "react";
import {
  useLoginUserMutation,
  usePostSubquestMutation,
  usePostTasksMutation,
} from "@/service/api";
import { createQuest } from "@/hooks/createQuest";
import { handleLogin } from "@/hooks/loginFunc";

const CreateTaskBanner = () => {
  // const [loginUser, { isLoading, isError, error }] = useLoginUserMutation();

  // useEffect(() => {
  //   handleLogin({
  //     login: "zzzzassas@gmail.com",
  //     password: "DKgfhuhgrjkhj___2324",
  //     loginUser,
  //   });
  // }, [loginUser]);
  const [postTasks] = usePostTasksMutation();
  const [postSubquest] = usePostSubquestMutation();
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [coins, setCoins] = useState(0);
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
            text="Создать квест"
            className="title-item task-banner__button"
            funct={() => {
              createQuest({
                coins,
                postSubquest,
                postTasks,
                text,
                title,
              });
              setTitle("");
              setText("");
              setCoins(0);
            }}
          />
        </div>
      </div>
    </div>
  );
};
export default CreateTaskBanner;
