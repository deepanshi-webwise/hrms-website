import { FacebookIcon, Instagram, Linkedin, Mail, Phone } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../assests/logo.png";

const Footer = () => {
  return (
    <footer className="bg-blue-100 text-blue-900 py-10">
      <div className="max-w-7xl mx-auto px-5 grid grid-cols-1 md:grid-cols-5 gap-5">
        <div className="m-auto">
          <img src={logo} alt="Logo" className="w-32 mb-3 " />
          <p className="text-sm mb-4">
            Webwise is an integrated digital payment suite catering to
            merchants, by facilitating seamless transactions with a multitude of
            entrepreneurs and businesses. Webwise aims to sustain, strengthen,
            develop and innovate digital payment services in India.
          </p>
        </div>

        <div>
          <h4 className="font-bold mb-8">Information</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/about"}>About Webwise</Link>
            </li>
            {/* <li>
              <Link to={"/"}>Blogs</Link>
            </li>
            <li>
              <Link to={"/"}>Frenzo Aware</Link>
            </li>
            <li>
              <Link to={"/"}>Careers</Link>
            </li> */}
            <li>
              <Link to={"/contact"}>Contact</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-8">Product</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to={"/banking-solutions"}>AePS</Link>
            </li>
            <li>
              <Link to={"/banking-solutions"}>MicroATM</Link>
            </li>
            <li>
              <Link to={"/banking-solutions"}>Money Transfer</Link>
            </li>
            <li>
              <Link to={"/banking-solutions"}>Payouts</Link>
            </li>
            <li>
              <Link to={"/banking-solutions"}>Bill Payment</Link>
            </li>
            <li>
              <Link to={"/banking-solutions"}>Recharge</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-8">Policies</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to={"/privacy-and-policy"}>Privacy Policy</Link>
            </li>
            <li>
              <Link to={"/disclaimer"}>Disclaimer</Link>
            </li>
            <li>
              <Link to={"/terms-and-condition"}>Terms of Use</Link>
            </li>
            {/* <li>
              <Link to={"/"}>Grievance Redressal</Link>
            </li>
            <li>
              <Link to={"/"}>Chargeback Guide</Link>
            </li>
            <li>
              <Link to={"/"}>Responsible Disclosure</Link>
            </li> */}
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-8">Contact Us</h4>
          <p className="text-sm">
            Office No. 1923, Etherea, Alphathum <br /> Sector 90, Noida, Uttar
            Pradesh - 201301
          </p>
          <p className="text-sm mt-3 flex items-center gap-2">
            <span>
              <Mail className="h-4 w-4" />{" "}
            </span>
            <span> info@webwisestudio.in</span>
          </p>
          <p className="text-sm flex items-center gap-2 mt-3">
            <span>
              <Phone className="h-4 w-4" />{" "}
            </span>
            <span>+91 7683021914</span>
          </p>
          <div className="flex gap-3 mt-3">
            <span>
              <Link to={"/"} className="text-blue-600 hover:text-blue-600">
                <FacebookIcon />{" "}
              </Link>
            </span>
            <span>
              <Link to={"https://www.instagram.com/webwisestudio_/"} className="text-[#ee2a7b]">
                <Instagram />{" "}
              </Link>
            </span>
            <span>
              <Link to={"/"} className="text-blue-600 hover:text-blue-600">
                <Linkedin />{" "}
              </Link>
            </span>

            {/* <Link> href="#" className="text-orange-500"><i className="fab fa-facebook-f"></i></Link>
            <Link> href="#" className="text-orange-500"><i className="fab fa-instagram"></i></Link>
            <Link> href="#" className="text-orange-500"><i className="fab fa-linkedin-in"></i></Link>
            <Link> href="#" className="text-orange-500"><i className="fab fa-twitter"></i></Link>
            <Link> href="#" className="text-orange-500"><i className="fab fa-youtube"></i></Link> */}
          </div>
        </div>
      </div>

      <div className="border-t border-gray-300 mt-10 pt-4 text-center text-xs text-gray-600">
        © 2025 Webwise Stduio Pvt. Ltd. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
