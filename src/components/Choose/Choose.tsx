import { BsFillTruckFrontFill } from "react-icons/bs";

const Choose = () => {
  return (
    <div className="mt-36 py-24 " >
      <div className="container">
        <h1 className="text-3xl w-fit ml-auto mr-auto text-black font-semibold mb-10">
          Why Choose Us
        </h1>

        <div className="flex flex-wrap" >
          <div className="w-1/2 md:w-1/4 mt-3" >
            <div className="flex flex-col items-center  text-center justify-center gap-3">
              <p className="text-dark/70 font-semibold">Lorem ipsum dolor sit amet ipsum dolor sit amet</p>
              <p className="">
                <span className="w-2 h-2 rounded-full bg-red-500 block mb-1"></span>
                <span className="w-2 h-2 rounded-full bg-red-500 block mb-1"></span>
                <span className="w-2 h-2 rounded-full bg-red-500 block mb-1"></span>
                <span className="w-2 h-2 rounded-full bg-red-500 block mb-1"></span>
              </p>
              <div className="text-red-500 text-5xl">
                <BsFillTruckFrontFill />
              </div>
            </div>
          </div>
          <div className="w-1/2 md:w-1/4 mt-3">
            <div className="flex flex-col-reverse items-center  text-center justify-center gap-3">
              <p className="text-dark/70 font-semibold">Lorem ipsum dolor sit amet ipsum dolor sit amet</p>
              <p className="">
                <span className="w-2 h-2 rounded-full bg-teal-600 block mb-1"></span>
                <span className="w-2 h-2 rounded-full bg-teal-600 block mb-1"></span>
                <span className="w-2 h-2 rounded-full bg-teal-600 block mb-1"></span>
                <span className="w-2 h-2 rounded-full bg-teal-600 block mb-1"></span>
              </p>
              <div className="text-teal-600 text-5xl">
                <BsFillTruckFrontFill />
              </div>
            </div>
          </div>
          <div className="w-1/2 md:w-1/4 mt-3">
            <div className="flex flex-col items-center  text-center justify-center gap-3">
              <p className="text-dark/70 font-semibold">Lorem ipsum dolor sit amet ipsum dolor sit amet</p>
              <p className="">
                <span className="w-2 h-2 rounded-full bg-red-500 block mb-1"></span>
                <span className="w-2 h-2 rounded-full bg-red-500 block mb-1"></span>
                <span className="w-2 h-2 rounded-full bg-red-500 block mb-1"></span>
                <span className="w-2 h-2 rounded-full bg-red-500 block mb-1"></span>
              </p>
              <div className="text-red-500 text-5xl">
                <BsFillTruckFrontFill />
              </div>
            </div>
          </div>
          <div className="w-1/2 md:w-1/4 mt-3">
            <div className="flex flex-col-reverse items-center  text-center justify-center gap-3">
              <p className="text-dark/70 font-semibold">Lorem ipsum dolor sit amet ipsum dolor sit amet</p>
              <p className="">
                <span className="w-2 h-2 rounded-full bg-teal-600 block mb-1"></span>
                <span className="w-2 h-2 rounded-full bg-teal-600 block mb-1"></span>
                <span className="w-2 h-2 rounded-full bg-teal-600 block mb-1"></span>
                <span className="w-2 h-2 rounded-full bg-teal-600 block mb-1"></span>
              </p>
              <div className="text-teal-600 text-5xl">
                <BsFillTruckFrontFill />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;
