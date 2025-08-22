import React from "react";
import { ArrowRight } from "lucide-react";
import aboutImg2 from "../../assests/aboutImg2.png";

const CompanyIntro = () => {
  return (
    <section className="relative bg-blue-50 py-20 px-5 md:px-20 overflow-hidden">
      <h1 className="absolute bottom-0 left-6 md:left-20 text-[80px] md:text-[150px] font-bold text-white opacity-50 select-none leading-none">
        About Us
      </h1>
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold text-blue-600 mb-6 text-center">
            About Webwise
          </h2>
        </div>
        <div className="flex gap-3 text-left">
          <div className="space-y-6 w-[85%] ">
            <div className="flex items-start gap-3">
              <ArrowRight className="text-blue-600 w-8 h-8 mt-1" />
              <p className="text-gray-700 leading-relaxed">
                At Webwise we strive to provide you with a platform that will
                ensure ease of onboarding, competitive and flexible pricing,
                quick and swift payment settlements, and technology.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <ArrowRight className="text-blue-600 w-8 h-8 mt-1" />
              <p className="text-gray-700 leading-relaxed">
                We offer better success rates, relationships and business
                networks that will help further grow and augment your business
                volumes.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <ArrowRight className="text-blue-600 w-8 h-8 mt-1" />
              <p className="text-gray-700 leading-relaxed">
                We make sure that you need not worry about the payment
                processing aspect, you now have access to a best-in-class
                solution that will offer a suite of services that help you focus
                on scaling up your business!!
              </p>
            </div>
          </div>

          <div className="hidden md:flex justify-center md:justify-end">
            <img
              src={aboutImg2}
              alt="About Webwise"
              className=" w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
     );
};

export default CompanyIntro;
