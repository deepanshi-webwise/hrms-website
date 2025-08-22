import React from "react";
import aboutImg1 from "../../assests/aboutImg1.png";
const AboutSection = () => {
  return (
    <div>
      <div className="aboutOuter bg-blue-500 text-white py-16 md:px-40 px-10 clip-diagonal">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Seamless Transactions with Powerful Payment APIs
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              Our robust payment APIs are designed to integrate effortlessly
              with your business, enabling secure and efficient digital
              transactions. With easy onboarding, real-time processing, and
              flexible integration, businesses can streamline payments without
              complexity. Whether for payments or verifications, our APIs
              provide a reliable foundation for smooth financial operations.
            </p>
            <button className="border-2 border-white px-6 py-3 rounded hover:bg-white hover:text-blue-500 transition">
              Get In Touch
            </button>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <img
              src={aboutImg1}
              alt="Team Puzzle Illustration"
              className="w-full max-w-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
