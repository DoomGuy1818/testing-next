"use client";
import { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import { Provider } from "react-redux";
import { store } from "../../store/store";
import CreateTaskBanner from "../components/CreateTaskBanner/CreateTaskBanner";
import ActionsTasksSection from "@/app/components/ActionsTasksSection/ActionsTasksSection";
import EditTaskBanner from "../components/EditTaskBanner/EditTaskBanner";

const Page = () => {
  const [editedTaskId, setEditedTaskId] = useState("");
  return (
    <Provider store={store}>
      <Header />
      {editedTaskId.length ? (
        <EditTaskBanner
          editedTaskId={editedTaskId}
          setEditedTaskId={setEditedTaskId}
        />
      ) : (
        <CreateTaskBanner />
      )}
      <ActionsTasksSection setEditedTaskId={setEditedTaskId} />
    </Provider>
  );
};

export default Page;
