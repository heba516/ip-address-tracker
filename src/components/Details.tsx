const Details = () => {
  return (
    <div
      className="absolute 
    top-1/2 sm:top-[60%] md:top-[40%] 
    left-1/2 
    transform -translate-x-1/2 -translate-y-1/2 
    bg-white 
    w-[85%] md:w-[70%] lg:w-[60%] 
    rounded-lg 
    shadow-lg 
    z-50 flex 
    flex-col lg:flex-row items-start justify-between 
    p-6 md:p-8 
    space-y-4 md:space-y-0"
    >
      <div
        className="relative 
      text-start 
      lg:after:content-[''] lg:after:absolute 
      after:right-0 after:top-1 after:h-[70px] 
      after:w-[2px] after:bg-gray-400 
      pr-4 md:pr-10"
      >
        <h3 className="mb-2 font-bold text-gray-400">IP ADDRESS</h3>
        <p className="font-semibold text-xl">192.221.311.121</p>
      </div>
      <div
        className="relative 
      text-start 
      lg:after:content-[''] lg:after:absolute 
      after:right-0 after:top-1 after:h-[70px] 
      after:w-[2px] after:bg-gray-400 
      pr-4 md:pr-10"
      >
        <h3 className="mb-2 font-bold text-gray-400">LOCATION</h3>
        <p className="font-semibold text-xl">Egypt</p>
        <p className="text-xl font-semibold">10001</p>
      </div>
      <div
        className="relative 
      text-start 
      lg:after:content-[''] lg:after:absolute 
      after:right-0 after:top-1 after:h-[70px] 
      after:w-[2px] after:bg-gray-400 
      pr-4 md:pr-10"
      >
        {" "}
        <h3 className="mb-2 font-bold text-gray-400">TIME ZONE</h3>
        <p className="font-semibold text-xl">UTC -50:00</p>
      </div>
      <div className="text-start">
        <h3 className="mb-2 font-bold text-gray-400">ISP</h3>
        <p className="font-semibold text-xl">SpaceX</p>
        <p className="text-xl font-semibold">Starlink</p>
      </div>
    </div>
  );
};

export default Details;
