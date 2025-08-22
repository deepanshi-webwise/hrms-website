import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  FacebookIcon,
  InstagramIcon,
  Linkedin,
} from "lucide-react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="relative w-full bg-gray-50">
      {/* Banner background */}
      <div className="h-56 w-full bg-blue-900 opacity-80 absolute top-0 left-0 z-0"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-16 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div className="bg-white shadow-lg rounded-lg p-8">
            <h2 className="text-2xl font-bold text-blue-900 flex items-center gap-2">
              <Phone className="w-6 h-6 text-blue-700" /> Contact Us
            </h2>
            <p className="mt-2 text-gray-600 text-sm">
              Get in touch and let us know how we can help. For general queries,
              including partnership opportunities, please email{" "}
              <a
                href="mailto:info@webwisestudio.in"
                className="text-blue-600 font-medium"
              >
                info@webwisestudio.in
              </a>
            </p>

            <form className="mt-6 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="border-b border-gray-300 p-2 outline-none"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="border-b border-gray-300 p-2 outline-none"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="email"
                  placeholder="E-mail"
                  className="border-b border-gray-300 p-2 outline-none"
                />
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="border-b border-gray-300 p-2 outline-none"
                />
              </div>
              <textarea
                placeholder="Leave Us A Message"
                className="w-full border-b border-gray-300 p-2 outline-none"
              ></textarea>

              <button className="bg-blue-700 text-white px-6 py-2 rounded-md mt-4 hover:bg-blue-800">
                Submit
              </button>
            </form>
          </div>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-2 gap-6">
            {/* Email Card */}
            <a
              href="mailto:info@webwisestudio.in"
              className="bg-blue-700 text-white rounded-lg p-6 flex flex-col items-center justify-center shadow-md hover:scale-105 transition"
            >
              <Mail className="w-8 h-8 mb-2" />
              <h3 className="font-bold">Email</h3>
              <p className="text-sm mt-1">info@webwisestudio.in</p>
            </a>

            {/* Phone Card */}
            <a
              href="tel:+917683021914"
              className="bg-blue-100 text-blue-800 rounded-lg p-6 flex flex-col items-center justify-center shadow-md hover:scale-105 transition"
            >
              <Phone className="w-8 h-8 mb-2" />
              <h3 className="font-bold">Phone</h3>
              <p className="text-sm mt-1">+91 7683021914</p>
            </a>

            {/* Address Card */}
            <a
              href="https://maps.app.goo.gl/hM5CS3YYFJBTtByJ8"
              target="_blank"
              rel="noreferrer"
              className="bg-blue-100 text-blue-800 rounded-lg p-6 flex flex-col items-center justify-center shadow-md hover:scale-105 transition"
            >
              <MapPin className="w-8 h-8 mb-2" />
              <h3 className="font-bold">Address</h3>
              <p className="text-sm mt-1 text-center">
                19th Floor, Sector 90 <br />
                Noida, Uttar Pradesh - 201301
              </p>
            </a>

            {/* Socials Card */}
            <div className="bg-blue-700 text-white rounded-lg p-6 flex flex-col items-center justify-center shadow-md">
              <Globe className="w-8 h-8 mb-2" />
              <h3 className="font-bold">Socials</h3>
              <div className="flex gap-3 mt-2 text-lg cursor-pointer">
                <span>
                  <FacebookIcon />
                </span>
                <span>
                  <Link to={"https://www.instagram.com/webwisestudio_/"}>
                    <InstagramIcon />
                  </Link>
                </span>
                <span>
                  <Linkedin />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
