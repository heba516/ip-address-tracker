import React, { useState, useEffect } from "react";
import { Map } from "@vis.gl/react-google-maps";
import "./index.css";

const CustomMap: React.FC = () => {
  const [map, setMap] = useState<google.maps.Map | null>(null);

  useEffect(() => {
    if (map) {
      new google.maps.marker.AdvancedMarkerElement({
        position: { lat: 51.509865, lng: -0.118092 },
        map: map,
        title: "London",
      });
    }
  }, [map]);

  return (
    <div className="map-container w-full h-full md:h-[470px]">
      <Map
        // style={{ borderRadius: "20px" }}
        defaultZoom={13}
        defaultCenter={{ lat: 51.509865, lng: -0.118092 }}
        gestureHandling="greedy"
        disableDefaultUI
        onLoad={(map) => setMap(map)}
      />
    </div>
  );
};

export default CustomMap;
