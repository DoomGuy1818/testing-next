"use client";
import "./Map.scss";
import { YMaps, Map, Placemark, Panorama } from "@pbe/react-yandex-maps";
import "./BallonMap/BallonMap.scss";
import { selectorWithTypes } from "@/store/typedFunctions";
import { useDeleteOfflineShopMutation } from "@/service/api";
import React from "react";
const YandexMap = () => {
  const { offlineShops } = selectorWithTypes((state) => state.offlineShop);
  return (
    <div className="map-wrapper">
      <YMaps>
        <Map
          className="yandex-map"
          defaultState={{
            center: [47.22110560320907, 39.71921623815912],
            zoom: 15,
          }}
        >
          {offlineShops.map((shop) => {
            const location = shop.location.split(",").map((item) => +item);
            return (
              <Placemark
                key={shop.id}
                modules={["geoObject.addon.balloon", "geoObject.addon.hint"]}
                properties={{
                  balloonContent: `
                <div class="ballon">
                <h4 class="title">${shop.name}</h4>
                </div>`,
                }}
                options={{
                  iconLayout: "default#image",
                  iconImageHref: "/images/geo.svg",
                  iconImageSize: [42, 42],
                }}
                defaultGeometry={location}
              />
            );
          })}
        </Map>
      </YMaps>
    </div>
  );
};

export default React.memo(YandexMap);
