import React from "react";
import Typewriter from "typewriter-effect";
import Design from "./components/animateBaneer";
import Link from "next/link";
const Home = () => {
  const handleClick = () => {};
  // const particlesInit = async (main) => {
  //   console.log(main);
  //   // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  //   // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
  //   // starting from v2 you can add only the features you need reducing the bundle size
  //   await loadFull(main);
  // };
  // const particlesLoaded = (container) => {
  //   console.log(container);
  // };

  return (
    <div>
      <div className=" absolute  top-0 left-0 h-full w-full">
        <Design />
      </div>
      <div className=" bg-[#1f2336]    min-h-screen">
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
          <div className=" flex flex-col sm:flex-row   sm:gap-36  mt-12  sm:mt-40">
            <div className=" ml-7 order-2 ">
              <div>
                <div className=" mt-3  sm:mt-18 text-white text-lg sm:text-5xl sm:leading-[4rem] font-bold">
                  <h1>
                    Hi, I'm <span class="text-red-500">Experience</span> <br />
                  </h1>
                  <Typewriter
                    options={{
                      loop: true,
                    }}
                    onInit={(typewriter) => {
                      typewriter

                        .deleteChars(2)
                        .typeString(" Web Developer.")
                        .start();
                    }}
                  />
                  <p className=" text-sm font-normal leading-6  sm:w-1/2">
                    {" "}
                    I have experience developing and designing interactive and
                    responsive websites using technologies like HTML, CSS,
                    TAILWIND CSS, REACT JS, and NEXT JS. I am a passionate
                    learner. I look for the opportunity to grow and learn.
                  </p>
                </div>
                <div className=" flex gap-10 mt-8">
                  <button
                    className="button    rounded-md  text-white font-medium px-3 py-2"
                    onClick={handleClick}
                  >
                    Hire Me
                  </button>
                  <button className=" button   rounded-md  text-white font-medium px-3 py-2">
                    Download CV
                  </button>
                </div>
                <div className=" flex gap-4 mt-6">
                  <button className=" cursor-pointer ">
                    <Link href="https://www.linkedin.com/in/suman-dulal-a80865175/">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0,0,256,256"
                        width="48px"
                        height="48px"
                      >
                        <g
                          fill="none"
                          fill-rule="nonzero"
                          stroke="none"
                          stroke-width="1"
                          stroke-linecap="butt"
                          stroke-linejoin="miter"
                          stroke-miterlimit="10"
                          stroke-dasharray=""
                          stroke-dashoffset="0"
                          font-family="none"
                          font-weight="none"
                          font-size="none"
                          text-anchor="none"
                        >
                          <g transform="scale(5.33333,5.33333)">
                            <path
                              d="M24,4c-11.046,0 -20,8.954 -20,20c0,11.046 8.954,20 20,20c11.046,0 20,-8.954 20,-20c0,-11.046 -8.954,-20 -20,-20z"
                              fill="#fa5252"
                            ></path>
                            <path
                              d="M30,35v-9c0,-1.103 -0.897,-2 -2,-2c-1.103,0 -2,0.897 -2,2v9h-6v-17h6v1.027c1.04,-0.668 2.252,-1.027 3.5,-1.027c3.584,0 6.5,2.916 6.5,6.5v10.5zM13,35v-17h2.966c-1.719,0 -2.966,-1.262 -2.966,-3.001c0,-1.738 1.267,-2.999 3.011,-2.999c1.696,0 2.953,1.252 2.989,2.979c0,1.754 -1.267,3.021 -3.012,3.021h3.012v17z"
                              fill="#000000"
                              opacity="0.05"
                            ></path>
                            <path
                              d="M30.5,34.5v-8.5c0,-1.378 -1.121,-2.5 -2.5,-2.5c-1.379,0 -2.5,1.122 -2.5,2.5v8.5h-5v-16h5v1.534c1.09,-0.977 2.512,-1.534 4,-1.534c3.309,0 6,2.691 6,6v10zM13.5,34.5v-16h5v16zM15.966,17.5c-1.429,0 -2.466,-1.052 -2.466,-2.501c0,-1.448 1.056,-2.499 2.511,-2.499c1.436,0 2.459,1.023 2.489,2.489c0,1.459 -1.057,2.511 -2.512,2.511z"
                              fill="#000000"
                              opacity="0.07"
                            ></path>
                            <path
                              d="M14,19h4v15h-4zM15.988,17h-0.022c-1.194,0 -1.966,-0.89 -1.966,-2.001c0,-1.135 0.796,-1.999 2.011,-1.999c1.217,0 1.966,0.864 1.989,1.999c0,1.111 -0.772,2.001 -2.012,2.001zM35,24.5c0,-3.038 -2.462,-5.5 -5.5,-5.5c-1.862,0 -3.505,0.928 -4.5,2.344v-2.344h-4v15h4v-8c0,-1.657 1.343,-3 3,-3c1.657,0 3,1.343 3,3v8h4c0,0 0,-9.079 0,-9.5z"
                              fill="#ffffff"
                            ></path>
                          </g>
                        </g>
                      </svg>
                    </Link>
                  </button>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0,0,256,256"
                    width="50px"
                    height="50px"
                  >
                    <g
                      fill="#fa5252"
                      fill-rule="nonzero"
                      stroke="none"
                      stroke-width="1"
                      stroke-linecap="butt"
                      stroke-linejoin="miter"
                      stroke-miterlimit="10"
                      stroke-dasharray=""
                      stroke-dashoffset="0"
                      font-family="none"
                      font-weight="none"
                      font-size="none"
                      text-anchor="none"
                    >
                      <g transform="scale(5.12,5.12)">
                        <path d="M17.791,46.836c0.711,-0.306 1.209,-1.013 1.209,-1.836v-5.4c0,-0.197 0.016,-0.402 0.041,-0.61c-0.014,0.004 -0.027,0.007 -0.041,0.01c0,0 -3,0 -3.6,0c-1.5,0 -2.8,-0.6 -3.4,-1.8c-0.7,-1.3 -1,-3.5 -2.8,-4.7c-0.3,-0.2 -0.1,-0.5 0.5,-0.5c0.6,0.1 1.9,0.9 2.7,2c0.9,1.1 1.8,2 3.4,2c2.487,0 3.82,-0.125 4.622,-0.555c0.934,-1.389 2.227,-2.445 3.578,-2.445v-0.025c-5.668,-0.182 -9.289,-2.066 -10.975,-4.975c-3.665,0.042 -6.856,0.405 -8.677,0.707c-0.058,-0.327 -0.108,-0.656 -0.151,-0.987c1.797,-0.296 4.843,-0.647 8.345,-0.714c-0.112,-0.276 -0.209,-0.559 -0.291,-0.849c-3.511,-0.178 -6.541,-0.039 -8.187,0.097c-0.02,-0.332 -0.047,-0.663 -0.051,-0.999c1.649,-0.135 4.597,-0.27 8.018,-0.111c-0.079,-0.5 -0.13,-1.011 -0.13,-1.543c0,-1.7 0.6,-3.5 1.7,-5c-0.5,-1.7 -1.2,-5.3 0.2,-6.6c2.7,0 4.6,1.3 5.5,2.1c1.699,-0.701 3.599,-1.101 5.699,-1.101c2.1,0 4,0.4 5.6,1.1c0.9,-0.8 2.8,-2.1 5.5,-2.1c1.5,1.4 0.7,5 0.2,6.6c1.1,1.5 1.7,3.2 1.6,5c0,0.484 -0.045,0.951 -0.11,1.409c3.499,-0.172 6.527,-0.034 8.204,0.102c-0.002,0.337 -0.033,0.666 -0.051,0.999c-1.671,-0.138 -4.775,-0.28 -8.359,-0.089c-0.089,0.336 -0.197,0.663 -0.325,0.98c3.546,0.046 6.665,0.389 8.548,0.689c-0.043,0.332 -0.093,0.661 -0.151,0.987c-1.912,-0.306 -5.171,-0.664 -8.879,-0.682c-1.665,2.878 -5.22,4.755 -10.777,4.974v0.031c2.6,0 5,3.9 5,6.6v5.4c0,0.823 0.498,1.53 1.209,1.836c9.161,-3.032 15.791,-11.672 15.791,-21.836c0,-12.682 -10.317,-23 -23,-23c-12.683,0 -23,10.318 -23,23c0,10.164 6.63,18.804 15.791,21.836z"></path>
                      </g>
                    </g>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0,0,256,256"
                    width="48px"
                    height="48px"
                  >
                    <g
                      fill="none"
                      fill-rule="nonzero"
                      stroke="none"
                      stroke-width="1"
                      stroke-linecap="butt"
                      stroke-linejoin="miter"
                      stroke-miterlimit="10"
                      stroke-dasharray=""
                      stroke-dashoffset="0"
                      font-family="none"
                      font-weight="none"
                      font-size="none"
                      text-anchor="none"
                    >
                      <g transform="scale(5.33333,5.33333)">
                        <path
                          d="M24,5c-10.49341,0 -19,8.50659 -19,19c0,10.49341 8.50659,19 19,19c10.49341,0 19,-8.50659 19,-19c0,-10.49341 -8.50659,-19 -19,-19z"
                          fill="#fa5252"
                        ></path>
                        <path
                          d="M26.572,29.036h4.917l0.772,-4.995h-5.69v-2.73c0,-2.075 0.678,-3.915 2.619,-3.915h3.119v-4.359c-0.548,-0.074 -1.707,-0.236 -3.897,-0.236c-4.573,0 -7.254,2.415 -7.254,7.917v3.323h-4.701v4.995h4.701v13.729c0.931,0.14 1.874,0.235 2.842,0.235c0.875,0 1.729,-0.08 2.572,-0.194z"
                          fill="#ffffff"
                        ></path>
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
            </div>

            <div className="  ml-16 order-1 z-20">
              <div className="  border-[6px] rounded-full overflow-hidden border-red-500 h-[15rem] w-[15rem] sm:h-[30rem] sm:w-[30rem] ">
                {" "}
                <div className="">
                  <img src="./p.png" alt="" className="z-50" />
                </div>
              </div>
            </div>
          </div>

          <div class="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
            <ul class="flex flex-wrap -mb-px">
              <li class="mr-2">
                <a
                  href="#"
                  class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                >
                  \Experience
                </a>
              </li>
              <li class="mr-2">  
                <a
                  href="#"
                  class="inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500"
                  aria-current="page"
                >
                  Dashboard
                </a>
              </li>
              <li class="mr-2">
                <a
                  href="#"
                  class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                >
                  Settings
                </a>
              </li>
              <li class="mr-2">
                <a
                  href="#"
                  class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                >
                  Contacts
                </a>
              </li>
              <li>
                <a class="inline-block p-4 text-gray-400 rounded-t-lg cursor-not-allowed dark:text-gray-500">
                  Disabled
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
