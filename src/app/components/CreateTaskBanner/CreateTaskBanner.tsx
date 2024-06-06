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
  useDeleteOneTaskMutation,
  useGetUserQuery,
  useLoginUserMutation,
  usePostOfflineShopsMutation,
  usePostSubquestMutation,
  usePostTasksMutation,
} from "@/service/api";
import { QuestItem } from "@/types/QuestItem";
type Props = {
  editedTask: QuestItem;
  setEditedTask: Function;
  setQuestsItems: Function;
  questsItems: QuestItem[];
};
type Credentionals = {
  login: string;
  password: string;
};
const CreateTaskBanner = ({
  editedTask,
  setEditedTask,
  setQuestsItems,
  questsItems,
}: Props) => {
  const [loginUser, { isLoading, isError, error }] = useLoginUserMutation();

  const handleLogin = async (credentionals: Credentionals) => {
    try {
      const result = await loginUser(credentionals).unwrap();
      const data = result;
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

  const [title, setTitle] = useState(editedTask.text);
  const [text, setText] = useState(editedTask.taskText);
  const [coins, setCoins] = useState(editedTask.coins);
  useEffect(() => {
    setTitle(editedTask.text);
    setText(editedTask.taskText);
    setCoins(editedTask.coins);
  }, [editedTask]);

  const [postTasks] = usePostTasksMutation();
  const [postSubquest] = usePostSubquestMutation();
  const createTask = async () => {
    if (title.length > 5 && text.length > 5 && coins !== 0) {
      if (editedTask.id) {
        const itemIndex = questsItems.findIndex(
          (quest) => quest.id === editedTask.id
        );
        const updatedQuest: QuestItem = {
          id: editedTask.id,
          text: title,
          coins: coins,
          src: editedTask.src,
          taskText: text,
        };
        questsItems.splice(itemIndex, 1, updatedQuest);
        setQuestsItems(questsItems);
      } else {
        try {
          const taskData = await postTasks({
            name: title,
            description: text,
          });
          console.log(taskData);
          const subquestData = await postSubquest({
            task_id: taskData.data?.id,
            is_done: false,
            reward: coins,
          });
          console.log(subquestData);
        } catch (error) {
          console.log(error);
        }
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
            funct={createTask}
          />
        </div>
      </div>
    </div>
  );
};
export default CreateTaskBanner;
