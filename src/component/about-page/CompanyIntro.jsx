import React from "react";
import { ArrowRight } from "lucide-react";
import aboutImg2 from "../../assests/aboutImg2.png";

const CompanyIntro = () => {
  return (
    <section className="relative bg-blue-50 py-20 px-6 md:px-20 overflow-hidden">
      <h1 className="absolute bottom-0 left-6 md:left-20 text-[80px] md:text-[150px] font-bold text-white opacity-50 select-none leading-none">
        About Us
      </h1>
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold text-blue-600 mb-6 text-center">
            About Webwise
          </h2>
        </div>
        <div className="flex gap-3   text-left">
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

          {/* Image Section */}
          <div className="flex justify-center md:justify-end">
            <img
              src={aboutImg2}
              alt="About Webwise"
              className=" w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
    // <div className="aboutSection relative bg-[#f5f9ff] py-16 overflow-hidden">
    //   <div className="aboutContainer container mx-auto md:px-40 px-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative z-10">

    //     {/* Left Content */}
    //     <div className="aboutText space-y-6">
    //       <h2 className="aboutHeading text-3xl md:text-4xl font-bold text-blue-600">
    //         About Webwise
    //       </h2>

    //       <ul className="aboutList space-y-6 text-gray-700">
    //         <li className="aboutItem flex items-start gap-3">
    //           <ArrowRight className="aboutIcon text-blue-600 w-5 h-5 mt-1" />
    //           <p>
    //             At Webwise we strive to provide you with a platform that will
    //             ensure ease of onboarding, competitive and flexible pricing,
    //             quick and swift payment settlements, and technology.
    //           </p>
    //         </li>

    //         <li className="aboutItem flex items-start gap-3">
    //           <ArrowRight className="aboutIcon text-blue-600 w-5 h-5 mt-1" />
    //           <p>
    //             We offer better success rates, relationships and business
    //             networks that will help further grow and augment your business
    //             volumes.
    //           </p>
    //         </li>

    //         <li className="aboutItem flex items-start gap-3">
    //           <ArrowRight className="aboutIcon text-blue-600 w-5 h-5 mt-1" />
    //           <p>
    //             We make sure that you need not worry about the payment
    //             processing aspect, you now have access to a best-in-class
    //             solution that will offer a suite of services that help you focus
    //             on scaling up your business!!
    //           </p>
    //         </li>
    //       </ul>
    //     </div>

    //     {/* Right Image with diagonal cut */}
    //     <div className="aboutImage relative">
    //       <div
    //         className="aboutImageWrapper w-full h-full"
    //         style={{
    //           clipPath: "polygon(20% 0, 100% 0, 100% 100%, 0 100%)",
    //         }}
    //       >
    //         <img
    //           src="https://img.freepik.com/free-photo/businessman-working-laptop_23-2147828916.jpg"
    //           alt="About Webwise"
    //           className="aboutImageTag w-full h-full object-cover rounded-lg shadow-lg"
    //         />
    //       </div>
    //     </div>
    //   </div>

    //   {/* Watermark Background Text */}
    //   <h1 className="aboutWatermark absolute text-[6rem] md:text-[10rem] font-bold text-blue-100 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-0 select-none">
    //     About Us
    //   </h1>
    // </div>
  );
};

export default CompanyIntro;
