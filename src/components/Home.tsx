import Search from "./Search";
import Details from "./Details";
import CustomMap from "./googleMap/CustomMap";
import { APIProvider } from "@vis.gl/react-google-maps";
import { useState } from "react";

const Home = () => {
  const [ip, setIp] = useState<string>("");
  const [details, setDetails] = useState<{
    country: string;
    timezone: string;
    isp: string;
  }>({
    country: "",
    timezone: "",
    isp: "",
  });
  return (
    <>
      <div
        className="search 
        bg-[#1842b6]
        relative
      w-2xl 
      md:max-w-3xl 
      lg:max-w-5xl 
      xl:max-w-7xl 
      mx-auto
      md:my-5
      pt-10
      md:rounded-lg 
      text-center
      overflow-hidden
      shadow-md
      shadow-gray-300
      h-[100vh]
      md:h-fit
      "
      >
        <h1 className="text-white text-3xl font-bold">Ip Address Tracker</h1>
        <Search setIp={setIp} />
        <Details ip={ip} details={details} />
        <div className="app h-[78%] sm:h-[75%]">
          <APIProvider apiKey={"AIzaSyDsgMXrrzbRALUXEPYcLQpguzGZ5EbcWLA"}>
            <CustomMap ipAdd={ip} setDetails={setDetails} />
          </APIProvider>
        </div>
      </div>
    </>
  );
};

export default Home;
