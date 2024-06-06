"use client";
import Banner1 from "../components/Banners1/Banner1";
import Banner2 from "../components/Banners2/Banner2";
import { useEffect, useState } from "react";
import TaskBanner from "../components/TaskBanner/TaskBanner";
import Header from "../components/Header/Header";
import { Provider } from "react-redux";
import { store } from "../../store/store";
import { BannerInfo } from "@/types/BannerInfo";
import { usePostOfflineShopsMutation } from "@/service/api";

const Page = () => {
  const bannerInfo: BannerInfo = {
    logoSrc: "",
    taskTitle: "",
    coins: 0,
    taskImage: "",
    taskText: "",
  };
  const [isTaskBannerOpen, setIsTaskBannerOpen] = useState(false);
  const [taskBannerInfo, setTaskBannerInfo] = useState(bannerInfo);
  const { logoSrc, taskTitle, coins, taskText } = taskBannerInfo;

  return (
    <Provider store={store}>
      <TaskBanner
        logoSrc={logoSrc}
        taskTitle={taskTitle}
        coins={coins}
        taskImage=""
        taskText={taskText}
        isTaskBannerOpen={isTaskBannerOpen}
        setState={setIsTaskBannerOpen}
      />
      <Header />
      <Banner1 />
      <Banner2 setInfo={setTaskBannerInfo} setState={setIsTaskBannerOpen} />
    </Provider>
  );
};

export default Page;
