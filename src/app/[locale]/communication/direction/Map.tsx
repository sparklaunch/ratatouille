"use client";

import { useEffect, useRef } from "react";
import styles from "./style.module.scss";

export default function Map() {
    const mapRef = useRef(null);
    useEffect(() => {
        const initializeMap = () => {
            const mapElement = mapRef.current;
            if (mapElement) {
                const map = new naver.maps.Map("map", {
                    center: new naver.maps.LatLng(37.615103, 126.932421),
                    zoom: 17
                });
                new naver.maps.Marker({
                    position: new naver.maps.LatLng(37.615103, 126.932421),
                    map
                });
            }
        };
        initializeMap();
    }, []);
    return <div id="map" ref={mapRef} className={styles.map} />;
}