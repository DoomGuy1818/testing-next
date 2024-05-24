import Image from "next/image";
import "./CreateTaskBanner.scss";
import TitleItem from "../TitleItem";
import { useEffect, useState } from "react";
import {
  useLoginUserMutation,
  usePostSubquestMutation,
  usePostTasksMutation,
} from "@/service/api";
import { QuestItem } from "@/types/QuestItem";
type Props = {
  editedTask: QuestItem;
};
type Credentionals = {
  login: string;
  password: string;
};
const CreateTaskBanner = ({ editedTask }: Props) => {
  const [loginUser, { isLoading, isError, error }] = useLoginUserMutation();

  const handleLogin = async (credentionals: Credentionals) => {
    try {
      const result = await loginUser(credentionals).unwrap();
      const data = result.json();
      console.log(data);
      const sessionId = result.id.replace(/"/g, "");
      localStorage.setItem("user", sessionId);
      // Обработайте результат
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    handleLogin({
      login: "zzzzassas@gmail.com",
      password: "DKgfhuhgrjkhj___2324",
    });
  }, []);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [coins, setCoins] = useState(0);
  const [postTasks] = usePostTasksMutation();
  const [postSubquest] = usePostSubquestMutation();
  const createTask = () => {
    if (title.length > 5 && text.length > 5 && coins !== 0) {
      try {
        const taskData = postTasks({ name: title, description: text });
        const subquestData = postSubquest({
          task_id: taskData.data?.id,
          is_done: false,
          reward: coins,
        });
        return subquestData;
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("incorrect data");
    }
    setTitle("");
    setText("");
    setCoins(0);
  };
  return (
    <div className="task-banner__background">
      <div className="task-banner__content">
        <div className="task-banner__main">
          <div className="logo-item"></div>
          <input
            className="task-banner__title"
            type="text"
            placeholder="Напишите название"
            onInput={(e) => {
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
              onInput={(e) => {
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
                onInput={(e) => {
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
            funct={createTask}
          />
        </div>
      </div>
    </div>
  );
};
export default CreateTaskBanner;
