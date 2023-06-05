import React from "react";
import Typewriter from "typewriter-effect";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
const Home = () => {
  return (
    <div>
      <div className=" bg-[#1f2336]  min-h-screen">
        <div className=" py-5  mx-auto container">
          <div className=" flex justify-between">
            <div className="font-bold text-4xl text-white">
              <h1 className=" ">
                S<span className="  font-bold text-3xl text-red-600">D</span>
              </h1>
            </div>

            <div className=" text-white">
              <ul className=" capitalize font-medium  text-base  flex gap-4">
                <li className="hover:text-red-600 cursor-pointer duration-200">
                  About me
                </li>
                <li className="hover:text-red-600 cursor-pointer">blog</li>
                <li className="hover:text-red-600 cursor-pointer">contact </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mx-auto container">
          <div className="flex  justify-between  mt-40">
            <div className=" ">
              <div>
                <div className=" text-white text-5xl leading-[4rem] font-bold">
                  <Typewriter
                    options={{
                      loop: true,
                    }}
                    onInit={(typewriter) => {
                      typewriter
                        .typeString(
                          "Hi, I'm <span class='text-red-500'>Experience</span> <br/> "
                        )
                        .typeString(" Web Developer.")
                        .start();
                    }}
                  />
                </div>
                <div className=" flex gap-10 mt-8">
                  <button className="button   rounded-md  text-white font-medium px-3 py-2">
                    Hire Me
                  </button>
                  <button className=" button   rounded-md  text-white font-medium px-3 py-2">
                    Download CV
                  </button>
                </div>
                <div></div>
              </div>
            </div>

            <div>
              <div className="  border-[6px] rounded-full overflow-hidden border-red-500 h-[30rem] w-[30rem] ">
                {" "}
                <div className=" ">
                  <img src="./p.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          div
        </div>
      </div>
    </div>
  );
};

export default Home;
