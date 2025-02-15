import Image from "next/image";
import React from "react";
import { BsStarHalf } from "react-icons/bs";
import { FaStar } from "react-icons/fa";

const Hero = () => {
  return (
    <div
      className="relative w-full h-[110vh] sm:h-screen bg-[url('/images/bg.jpg')]
    bg-cover bg-center flex justify-center flex-col"
    >
      <div
        className="w-[90%] md:w-[80%] mx-auto items-center grid grid-cols-1 xl:grid-cols-2
        gap-10"
      >
        {/* Text Content*/}
        <div>
          <p className="text-sm sm:text-base md:text-xl font-bold text-blue-950">
            Make the smartest investment
          </p>
          <h1
            className="text-2xl md:text-3xl lg:text-4xl mt-6 mb-6 font-bold text-blue-950
          leading-[2.5rem] md:leading-[3.5rem]"
          >
            Kickstart, Scale, and Thrive Faster with{" "}
            <span className="text-rose-700">TechDev</span>
          </h1>
          <p className="text-sm sm:text-sm md:text-base font-medium text-gray-700">
            TechDev is a cutting-edge platform that connects tech professionals,
            entrepreneurs, and investors. Our mission is to create a seamless,
            collaborative, and inclusive ecosystem where everyone can thrive.
            <br />
            <br />
            Join us today and unlock the potential of your skills and drive your
            business to success.
          </p>

          {/* Ratings */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10 mt-6">
            {/* Google Rating */}
            <div className="flex flex-col items-center sm:flex-row sm:items-center space-x-4">
              <Image
                src="/images/google.png"
                alt="google"
                width={40}
                height={40}
                className="mb-2 sm:mb-0" // Adds spacing under the image on mobile
              />
              <div className="flex flex-col items-center sm:items-start">
                <div className="flex items-center space-x-2">
                  <h1 className="text-lg sm:text-xl md:text-2xl text-gray-700 font-bold">
                    4.5
                  </h1>
                  <div className="flex items-center">
                    <FaStar className="w-5 h-5 sm:w-4 sm:h-4 text-yellow-500" />
                    <FaStar className="w-5 h-5 sm:w-4 sm:h-4 text-yellow-500" />
                    <FaStar className="w-5 h-5 sm:w-4 sm:h-4 text-yellow-500" />
                    <FaStar className="w-5 h-5 sm:w-4 sm:h-4 text-yellow-500" />
                    <BsStarHalf className="w-5 h-5 sm:w-4 sm:h-4 text-yellow-500" />
                  </div>
                </div>
                <p className="text-gray-700 text-sm sm:text-base mt-1 text-center sm:text-left">
                  Best Rated On Google
                </p>
              </div>
            </div>

            {/* LinkedIn Rating */}
            <div className="flex flex-col items-center sm:flex-row sm:items-center space-x-4">
              <Image
                src="/images/linkedin.png"
                alt="linkedin"
                width={40}
                height={40}
                className="mb-2 sm:mb-0" // Adds spacing under the image on mobile
              />
              <div className="flex flex-col items-center sm:items-start">
                <div className="flex items-center space-x-2">
                  <h1 className="text-lg sm:text-xl md:text-2xl text-gray-700 font-bold">
                    4.7
                  </h1>
                  <div className="flex items-center">
                    <FaStar className="w-5 h-5 sm:w-4 sm:h-4 text-yellow-500" />
                    <FaStar className="w-5 h-5 sm:w-4 sm:h-4 text-yellow-500" />
                    <FaStar className="w-5 h-5 sm:w-4 sm:h-4 text-yellow-500" />
                    <FaStar className="w-5 h-5 sm:w-4 sm:h-4 text-yellow-500" />
                    <BsStarHalf className="w-5 h-5 sm:w-4 sm:h-4 text-yellow-500" />
                  </div>
                </div>
                <p className="text-gray-700 text-sm sm:text-base mt-1 text-center sm:text-left">
                  Best Rated On LinkedIn
                </p>
              </div>
            </div>
          </div>
          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row w-full sm:w-fit sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 items-center">
            <a
              href="#_"
              className="relative w-full sm:w-auto px-10 py-3 font-medium text-white transition duration-300 bg-rose-600 rounded-md hover:bg-rose-800 ease text-center"
            >
              <span className="absolute bottom-0 left-0 h-full -ml-2">
                <svg
                  viewBox="0 0 487 487"
                  className="w-auto h-full opacity-100 object-stretch"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 .3c67 2.1 134.1 4.3 186.3 37 52.2 32.7 89.6 95.8 112.8 150.6 23.2 54.8 32.3 101.4 61.2 149.9 28.9 48.4 77.7 98.8 126.4 149.2H0V.3z"
                    fill="#FFF"
                    fillRule="nonzero"
                    fillOpacity=".1"
                  ></path>
                </svg>
              </span>
              <span className="absolute top-0 right-0 w-12 h-full -mr-3">
                <svg
                  viewBox="0 0 487 487"
                  className="object-cover w-full h-full"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M487 486.7c-66.1-3.6-132.3-7.3-186.3-37s-95.9-85.3-126.2-137.2c-30.4-51.8-49.3-99.9-76.5-151.4C70.9 109.6 35.6 54.8.3 0H487v486.7z"
                    fill="#FFF"
                    fillRule="nonzero"
                    fillOpacity=".1"
                  ></path>
                </svg>
              </span>
              <span className="relative">Get Free Trial</span>
            </a>

            <a
              href="#_"
              className="relative w-full sm:w-auto px-10 py-3 font-medium text-white transition duration-300 bg-green-400 rounded-md hover:bg-green-600 ease text-center"
            >
              <span className="absolute bottom-0 left-0 h-full -ml-2">
                <svg
                  viewBox="0 0 487 487"
                  className="w-auto h-full opacity-100 object-stretch"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 .3c67 2.1 134.1 4.3 186.3 37 52.2 32.7 89.6 95.8 112.8 150.6 23.2 54.8 32.3 101.4 61.2 149.9 28.9 48.4 77.7 98.8 126.4 149.2H0V.3z"
                    fill="#FFF"
                    fillRule="nonzero"
                    fillOpacity=".1"
                  ></path>
                </svg>
              </span>
              <span className="absolute top-0 right-0 w-12 h-full -mr-3">
                <svg
                  viewBox="0 0 487 487"
                  className="object-cover w-full h-full"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M487 486.7c-66.1-3.6-132.3-7.3-186.3-37s-95.9-85.3-126.2-137.2c-30.4-51.8-49.3-99.9-76.5-151.4C70.9 109.6 35.6 54.8.3 0H487v486.7z"
                    fill="#FFF"
                    fillRule="nonzero"
                    fillOpacity=".1"
                  ></path>
                </svg>
              </span>
              <span className="relative">Create Account</span>
            </a>
          </div>
        </div>

        {/* Image Content */}
        <div className="mx-auto hidden xl:block">
            <Image src="/images/hero.jpg" alt="image" width={900} height={900} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
