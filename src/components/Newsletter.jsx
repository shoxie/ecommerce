import { BiSend } from "react-icons/bi";

function Newsletter() {
  return (
    <div className="px-10 w-full h-full bg-secondary-100 ">
      <div className="lg:h-[50vh] h-[40vh] w-full flex flex-col gap-5 items-center justify-center  mx-auto max-w-screen-xl">
        <h3 className="text-xl md:text-5xl font-semibold">Newsletter</h3>
        <div className="text-lg text-center">
          Get timely updates from your favorite products
        </div>
        <div className="flex items-center justify-center w-full">
          <input
            placeholder="Your email..."
            className="outline-none px-3 py-2 border w-full md:w-1/2"
          />
          <button className="px-5 border bg-[#fcf1ed] h-full">
            <BiSend className="text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
