import React from "react";
import banner from "../../public/Banner.png";
function Banner() {
  return (
    <> 
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-36">
          <div className="space-y-8">
            <h1 className="text-2xl md:text-4xl font-bold">
            Turning pages, igniting imaginations.{" "}
              <span className="text-blue-500">Dreams Between Covers</span>
            </h1>
            <p className="text-sm md:text-xl">
             
Book readers immerse themselves in worlds unknown, finding solace, inspiration, and knowledge within the pages of their beloved books.
            </p>
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow" placeholder="Email" />
            </label>
          </div>
          <button className="btn bg-blue-500 mt-6 border-none">Get Started</button>
        </div>
        <div className=" order-1 w-full mt-20 md:w-1/2">
          <img
            src="https://img.freepik.com/free-vector/fisherman-sitting-book-with-spinning-rod-catching-ideas-hand-drawn-sketch-vector-illustration_460848-15509.jpg?t=st=1713264283~exp=1713267883~hmac=cde5d7d1887dfa50b6b0ace737dc3f8d42ef1e59437afc11b873c1db16453dc2&w=740"
            className="md:w-[550px] md:h-[460px] md:ml-12 rounded-full"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Banner;
