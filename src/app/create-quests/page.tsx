"use client";
import { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import { Provider } from "react-redux";
import { store } from "../../store/store";
import CreateTaskBanner from "../components/CreateTaskBanner/CreateTaskBanner";
import ActionsTasksSection from "@/app/components/ActionsTasksSection/ActionsTasksSection";
import { quests } from "../quests/moks/quests";

const Page = () => {
  const [editedTask, setEditedTask] = useState({
    id: 0,
    text: "",
    coins: 0,
    src: "",
    taskText: "",
  });
  const [questsItems, setQuestsItems] = useState(quests);
  return (
    <Provider store={store}>
      <Header />
      <CreateTaskBanner
        editedTask={editedTask}
        setEditedTask={setEditedTask}
        questsItems={questsItems}
        setQuestsItems={setQuestsItems}
      />
      <ActionsTasksSection
        setEditedTask={setEditedTask}
        questsItems={questsItems}
        setQuestsItems={setQuestsItems}
      />
    </Provider>
  );
};

export default Page;
