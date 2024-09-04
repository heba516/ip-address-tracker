import { useState, useEffect } from "react";
import React from "react";
import "./index.css";
import axios from "axios";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";

interface Iprops {
  ipAdd: string;
  setDetails: ({
    country,
    timezone,
    isp,
  }: {
    country: string;
    timezone: string;
    isp: string;
  }) => void;
}

const ChangeView = ({ center }: { center: [number, number] }) => {
  const map = useMap();
  map.setView(center, map.getZoom());
  return null;
};

const CustomMap = ({ ipAdd, setDetails }: Iprops) => {
  const [location, setLocations] = useState({
    latitude: 51.505,
    longitude: -0.09,
    country: "",
    timezone: "",
  });

  useEffect(() => {
    const getLocations = async () => {
      const { data } = await axios.get(
        `https://geo.ipify.org/api/v2/country,city?apiKey=at_hFC0ZciXyekWUStntaLOz6n3XZk0Q&ipAddress=${ipAdd}`
      );

      console.log("isp:" + data.isp);

      setLocations({
        latitude: data.location.lat,
        longitude: data.location.lng,
        country: data.location.country,
        timezone: data.location.timezone,
      });
      setDetails({
        country: data.location.country,
        timezone: data.location.timezone,
        isp: data.isp,
      });
    };

    getLocations();
  }, [ipAdd, setDetails]);

  const position: [number, number] = [location.latitude, location.longitude];

  return (
    <div className="map-container w-full h-full md:h-[420px] overflow-hidden z-10">
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: "100vh", width: "100vw" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        <ChangeView center={position} />
      </MapContainer>
    </div>
  );
};

export default CustomMap;
