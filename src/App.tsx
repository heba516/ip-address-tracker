import { APIProvider } from "@vis.gl/react-google-maps";
import CustomMap from "./components/googleMap/CustomMap";
import "./App.css";
import Search from "./components/Search";
import Details from "./components/Details";

function App() {
  return (
    <>
      <div
        className="search 
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

        <Search />

        <Details />

        <div className="app h-[78%] sm:h-[75%]">
          <APIProvider apiKey={"AIzaSyDsgMXrrzbRALUXEPYcLQpguzGZ5EbcWLA"}>
            <CustomMap />
          </APIProvider>
        </div>
      </div>
    </>
  );
}

export default App;
