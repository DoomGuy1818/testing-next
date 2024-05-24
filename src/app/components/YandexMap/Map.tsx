"use client";
import "./Map.scss";
import { YMaps, Map, Placemark, Panorama } from "@pbe/react-yandex-maps";

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
              balloonContent: "Это моя метка",
            }}
            options={{
              iconLayout: "default#image",
              iconImageHref: "/images/geo.svg",
              iconImageSize: [42, 42],
            }}
            defaultGeometry={[47.219194189662765, 39.713237819997836]}
          />
          <Placemark
            options={{
              iconLayout: "default#image",
              iconImageHref: "/images/geo.svg",
              iconImageSize: [42, 42],
            }}
            defaultGeometry={[47.21603633410099, 39.716585216848415]}
          />
          <Placemark
            options={{
              iconLayout: "default#image",
              iconImageHref: "/images/geo.svg",
              iconImageSize: [42, 42],
            }}
            defaultGeometry={[47.222735314018884, 39.71482229626466]}
          />
          <Placemark
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

export default YandexMap;
