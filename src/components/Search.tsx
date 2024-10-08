import axios from "axios";
import { useEffect } from "react";

interface Iprops {
  setIp: (ip: string) => void;
}

const Search = ({ setIp }: Iprops) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const ip = formData.get("ip") as string;
    setIp(ip);
  };

  const getData = async () => {
    const res = await axios.get("https://api.ipify.org/?format=json");
    console.log(res.data);
    setIp(res.data.ip);
  };

  useEffect(() => {
    getData();
  }, [setIp]);

  return (
    <form className="max-w-lg mx-auto mt-10 mb-24 px-5" onSubmit={handleSubmit}>
      <div className="flex">
        <div className="relative w-full">
          <input
            type="search"
            name="ip"
            className="block p-4 w-full z-20 text-md rounded-lg border-s-gray-50 border-s-2 border focus:outline-none placeholder:text-lg"
            placeholder="Search for any ip address or domain"
            required
          />
          <button
            type="submit"
            className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </button>
        </div>
      </div>
    </form>
  );
};

export default Search;
