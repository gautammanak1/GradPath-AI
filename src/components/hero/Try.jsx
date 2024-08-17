const FetchPlatformSection = () => {
  return (
    <div className="bg-[#F9FAFB] flex flex-col items-center justify-center mt-24 py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <h1 className="mx-auto text-center text-4xl tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
        Ready to get started with <br /> GradPath AI Platform?
      </h1>
      <div className="relative w-full mt-12 flex justify-center items-center">
        {/* Left SVG */}
        <img
          alt="Left SVG"
          src="left-svg.svg"
          className="hidden lg:block lg:w-1/3 absolute left-0 bottom-8 transform -translate-x-1/2"
        />
        <div className="mt-8 flex space-x-4">
          <button className="rounded-full border-2 border-gray-300 px-6 py-2 text-gray-700 hover:bg-gray-200">
            Schedule a demo
          </button>
          <button className="rounded-full bg-purple-600 px-6 py-2 text-white hover:bg-purple-700">
            Try GradPath AI
          </button>
        </div>
        {/* Right SVG */}
        <img
          alt="Right SVG"
          src="right-svg.svg"
          className="hidden lg:block lg:w-1/3 absolute right-0 bottom-8 transform translate-x-1/2"
        />
      </div>
    </div>
  );
};

export default FetchPlatformSection;
