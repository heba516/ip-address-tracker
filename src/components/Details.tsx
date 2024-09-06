interface Iprops {
  ip: string;
  details: { country: string; timezone: string; isp: string };
}

const Details = ({ ip, details }: Iprops) => {
  return (
    <div
      className="absolute 
    top-[45%] sm:top-[46%] md:top-[40%] 
    left-1/2 
    transform -translate-x-1/2 -translate-y-1/2 
    bg-white 
    w-[85%] md:w-[90%] lg:w-[60%] 
    rounded-lg 
    shadow-lg 
    z-50 
    flex flex-col md:flex-row items-start justify-between 
    p-4 md:py-8 md:px-16 
    space-y-2 md:space-y-0"
    >
      <div
        className="relative 
      text-start 
      xl:after:content-[''] xl:after:absolute 
      after:right-0 after:top-1 after:h-[70px] 
      after:w-[2px] after:bg-gray-400 
      pr-4 md:pr-14"
      >
        <h3 className="mb-2 font-bold text-gray-400">IP ADDRESS</h3>
        <p className="font-semibold text-xl">{ip ? ip : "-"}</p>
      </div>
      <div
        className="relative 
      text-start 
      xl:after:content-[''] xl:after:absolute 
      after:right-0 after:top-1 after:h-[70px] 
      after:w-[2px] after:bg-gray-400 
      pr-4 md:pr-14"
      >
        <h3 className="mb-2 font-bold text-gray-400">LOCATION</h3>
        <p className="font-semibold text-xl">
          {details.country ? details.country : "-"}
        </p>
      </div>
      <div
        className="relative 
      text-start 
      xl:after:content-[''] xl:after:absolute 
      after:right-0 after:top-1 after:h-[70px] 
      after:w-[2px] after:bg-gray-400 
      pr-4 md:pr-14"
      >
        {" "}
        <h3 className="mb-2 font-bold text-gray-400">TIME ZONE</h3>
        <p className="font-semibold text-xl">
          {details.timezone ? details.timezone : "-"}
        </p>
      </div>
      <div className="text-start">
        <h3 className="mb-2 font-bold text-gray-400">ISP</h3>
        <p className="font-semibold text-xl">{details.isp}</p>
      </div>
    </div>
  );
};

export default Details;
