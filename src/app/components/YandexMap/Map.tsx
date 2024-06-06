"use client";
import "./Map.scss";
import { YMaps, Map, Placemark, Panorama } from "@pbe/react-yandex-maps";
import "./BallonMap/BallonMap.scss";
import { selectorWithTypes } from "@/store/typedFunctions";
import { useDeleteOfflineShopMutation } from "@/service/api";
import React from "react";
const YandexMap = () => {
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
          <Placemark
            modules={["geoObject.addon.balloon", "geoObject.addon.hint"]}
            properties={{
              balloonContent: `
              <div class="ballon">
              <h4 class="title">OZON</h4>
              <p class="text">OZON shop</p>
              <p class="address">street, number</p>
              </div>`,
            }}
            options={{
              iconLayout: "default#image",
              iconImageHref: "/images/geo.svg",
              iconImageSize: [42, 42],
            }}
            defaultGeometry={[47.219194189662765, 39.713237819997836]}
          />
          <Placemark
            modules={["geoObject.addon.balloon", "geoObject.addon.hint"]}
            properties={{
              balloonContent: `
                        <div class="ballon">
                        <h4 class="title">WB</h4>
                        <p class="text">WB shop</p>
                        <p class="address">street, number</p>
                        </div>`,
            }}
            options={{
              iconLayout: "default#image",
              iconImageHref: "/images/geo.svg",
              iconImageSize: [42, 42],
            }}
            defaultGeometry={[47.21603633410099, 39.716585216848415]}
          />
          <Placemark
            modules={["geoObject.addon.balloon", "geoObject.addon.hint"]}
            properties={{
              balloonContent: `
                        <div class="ballon">
                        <h4 class="title">Yandex Market</h4>
                        <p class="text">Yandex Market shop</p>
                        <p class="address">street, number</p>
                        </div>`,
            }}
            options={{
              iconLayout: "default#image",
              iconImageHref: "/images/geo.svg",
              iconImageSize: [42, 42],
            }}
            defaultGeometry={[47.222735314018884, 39.71482229626466]}
          />
          <Placemark
            modules={["geoObject.addon.balloon", "geoObject.addon.hint"]}
            properties={{
              balloonContent: `
                                  <div class="ballon">
                                  <h4 class="title">Sber Market</h4>
                                  <p class="text">Sber Market shop</p>
                                  <p class="address">street, number</p>
                                  </div>`,
            }}
            options={{
              iconLayout: "default#image",
              iconImageHref: "/images/geo.svg",
              iconImageSize: [42, 42],
            }}
            defaultGeometry={[47.2262048344744, 39.72094000423752]}
          />
        </Map>
      </YMaps>
    </div>
  );
};

export default React.memo(YandexMap);
