import React from "react";
import businessSolutionImg from "../../assests/businessSolution.png"
const BankingSolutions = () => {
  return (
    <section className="relative bg-gradient-to-b from-blue-500 to-blue-700 text-white clip-diagonal">
      <div className="container mx-auto flex flex-col md:flex-row items-center md:px-40 px-8 py-16">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-xl md:text-5xl font-bold leading-snug">
            Frenzo Money An Inclusive Payment System for Bharat
          </h1>
          <p className="mt-4 text-sm md:text-lg text-gray-100">
            Frenzo Money is our commitment to empower Bharat through digital
            money transfers to address the financial needs of Indian citizens
            across demographics. We provide cutting-edge technology as well as
            an extensive human network to bridge the access-gap for various
            financial services, thereby democratising financial services in
            India.
          </p>
          <button className="mt-6 px-6 py-3 cursor-pointer border-2 border-white text-white font-semibold rounded hover:bg-white hover:text-blue-600 transition">
            Get In Touch
          </button>
        </div>

        <div className="flex-1 mt-10 md:mt-0 flex justify-center">
          <img
            src={businessSolutionImg}
            alt="Bank Illustration"
            className="w-[80%] md:w-[90%] drop-shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default BankingSolutions;
