"use client";
import Banner1 from "../components/Banners1/Banner1";
import Banner2 from "../components/Banners2/Banner2";
import { useEffect, useState } from "react";
import TaskBanner from "../components/TaskBanner/TaskBanner";
import Header from "../components/Header/Header";
import { Provider } from "react-redux";
import { store } from "../../store/store";

const Page = () => {
  const [isTaskBannerOpen, setIsTaskBannerOpen] = useState(false);
  const [subquestId, setSubquestId] = useState("");

  return (
    <Provider store={store}>
      {isTaskBannerOpen ? (
        <TaskBanner
          isTaskBannerOpen={isTaskBannerOpen}
          setState={setIsTaskBannerOpen}
          setId={setSubquestId}
          subquestId={subquestId}
        />
      ) : (
        <></>
      )}
      <Header />
      <Banner1 />
      <Banner2 setState={setIsTaskBannerOpen} setId={setSubquestId} />
    </Provider>
  );
};

export default Page;
