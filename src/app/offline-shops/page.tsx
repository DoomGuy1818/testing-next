"use client";
import { Provider } from "react-redux";
import styles from "./page.module.css";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import { store } from "@/store/store";
import Shops from "../components/Banners1/Shops";
import Header from "../components/Header/Header";
import YandexMap from "../components/YandexMap/Map";

export default function Home() {
  return (
    <Provider store={store}>
      <Header />
      <div className="section">
        <YandexMap />
        <Shops name={"shops shops-page"} />
      </div>
    </Provider>
  );
}
