"use client";
import { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import { Provider } from "react-redux";
import { store } from "../../store/store";
import CreateTaskBanner from "../components/CreateTaskBanner/CreateTaskBanner";
import ActionsTasksSection from "@/app/components/ActionsTasksSection/ActionsTasksSection";
import { useLoginUserMutation } from "@/service/api";

const Page = () => {
  const [editedTask, setEditedTask] = useState({
    text: "",
    coins: 0,
    src: "",
    taskText: "",
  });
  return (
    <Provider store={store}>
      <Header />
      <CreateTaskBanner editedTask={editedTask} />
      <ActionsTasksSection editedTask={editedTask} />
    </Provider>
  );
};

export default Page;
