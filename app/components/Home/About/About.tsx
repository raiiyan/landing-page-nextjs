import Image from "next/image";
import React from "react";
import BoxText from "../../Helper/BoxText";
import { FaArrowRight } from "react-icons/fa";

const About = () => {
  return (
    <div className="pt-16 pb-16">
      <div
        className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2
        gap-10 items-center"
      >
        {/* Image Content */}
        <div>
          <Image src="/images/about.png" alt="about" width={600} height={600} />
        </div>

        {/* Text Content */}
        <div>
          <BoxText>About Us</BoxText>
          <h1
            className="text-2xl sm:text-3xl font-bold text-gray-900
            mt-3 leading-[2.5rem] sm:leading-[3rem]"
          >
            Everything You Need To Grow Your Business
          </h1>

          <p className="mt-3 leading-relaxed text-sm sm:text-base text-gray-700">
            We provide innovative solutions to help your business scale
            efficiently. From cutting-edge technology to expert guidance, our
            platform is designed to streamline your workflow, boost
            productivity, and maximize growth.{" "}
            <span className="text-red-600">Join</span> us and take your business
            to the next level.
          </p>

          <button
            className="flex items-center mt-5 text-[#f68967]
            font-bold pb-1 border-b-2 border-[#f68967]"
          >
            Learn More <FaArrowRight className="ml-2" />
          </button>

          <div className="mt-8 border-l-2 border-gray-200">
            <div className="ml-6">
              <p className="text-gray-700 font-medium">
                &quot; The many integrations that can be linked really help me
                see data from other tools I also use. &quot;
              </p>

              <div className="flex items-center space-x-6 mt-6">
                <Image
                  src="/images/u1.jpg"
                  alt="user"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div>
                  <p className="font-medium">Jessica</p>
                  <p className="text-gray-700 text-sm">
                    Web Developer @TechDev
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
