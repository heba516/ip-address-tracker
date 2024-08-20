import React, { useState, useEffect } from "react";
import { Map } from "@vis.gl/react-google-maps";
import "./index.css";
import axios from "axios";

interface Iprops {
  ipAdd: string;
}

const CustomMap = ({ ipAdd }: Iprops) => {
  const [location, setLocations] = useState<{
    latitude: number;
    longitude: number;
    country: string;
  }>({
    latitude: 51.509865,
    longitude: -0.118092,
    country: "",
  });
  useEffect(() => {
    const getLocations = async () => {
      const { data } = await axios.get(`https://ipapi.co/${ipAdd}/json/`);
      console.log("ip: " + data.ip);
      setLocations({
        latitude: data.latitude,
        longitude: data.longitude,
        country: data.country_name,
      });
    };

    getLocations();
  }, [ipAdd]);

  const [map, setMap] = useState<google.maps.Map | null>(null);
  useEffect(() => {
    if (map) {
      new google.maps.marker.AdvancedMarkerElement({
        position: { lat: location.latitude, lng: location.longitude },
        map: map,
        title: location.country,
      });
      map.setCenter({ lat: location.latitude, lng: location.longitude });
    }
  }, [map, location]);
  return (
    <div className="map-container w-full h-full md:h-[420px]">
      <Map
        // style={{ borderRadius: "20px" }}
        defaultZoom={13}
        defaultCenter={{ lat: location.latitude, lng: location.longitude }}
        gestureHandling="greedy"
        disableDefaultUI
        onLoad={(map) => setMap(map)}
      />
    </div>
  );
};

// import React from "react";
// import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

// // const libraries = ["places"];
// const mapContainerStyle = {
//   width: "100vw",
//   height: "100vh",
// };
// const center = {
//   lat: 7.2905715, // default latitude
//   lng: 80.6337262, // default longitude
// };

// const CustomMap: React.FC = () => {
//   const { isLoaded, loadError } = useLoadScript({
//     googleMapsApiKey: "AIzaSyDsgMXrrzbRALUXEPYcLQpguzGZ5EbcWLA",
//     // libraries,
//   });

//   if (loadError) {
//     return <div>Error loading maps</div>;
//   }

//   if (!isLoaded) {
//     return <div>Loading maps</div>;
//   }

//   return (
//     <div className="app w-full h-full md:h-[420px]">
//       <GoogleMap
//         mapContainerStyle={mapContainerStyle}
//         zoom={10}
//         center={center}
//       >
//         <Marker position={center} />
//       </GoogleMap>
//     </div>
//   );
// };

export default CustomMap;
