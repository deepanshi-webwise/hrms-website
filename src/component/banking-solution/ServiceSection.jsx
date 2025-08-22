import React from "react";
import { Send, Fingerprint, Receipt, Smartphone, CheckCircle, ArrowRightCircle } from "lucide-react";
const services = [
  {
    title: "Money Transfer",
    icon: <Send className="text-5xl text-blue-600" />,
    points: [
      "Sales, Swift and Secure",
      "No restrictions on bank holidays",
      "Easy Transfers",
      "24x7 Transfers",
    ],
  },
  {
    title: "AePS",
    icon: <Fingerprint className="text-5xl text-blue-600" />,
    points: [
      "Cardless cash withdrawal from Aadhaar Linked Bank Accounts",
      "Easy and secure method",
      "Instant transfer from wallet to bank account",
      "Balance enquiry and mini statement facilities",
    ],
  },
  {
    title: "Bill Payments",
    icon: <Receipt className="text-5xl text-blue-600" />,
    points: [
      "Convenience of paying bills from anywhere, anytime",
      "Access and Connection to a large human network of agents",
      "Biller registration in real time",
      "Automatic refund in case of rare transaction failures",
    ],
  },
  {
    title: "Recharge",
    icon: <Smartphone className="text-5xl text-blue-600" />,
    points: [
      "Convenient mobile and DTH recharge options",
      "Recharge all operators, anywhere in India, with ease",
      "Easy process through our extensive Agent Points",
      "Experience hassle-free, seamless recharge with Webwise",
    ],
  },
];

const ServiceSection = () => {
  return (
    <section className="py-16 px-40 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition duration-300"
            >
              <div className="flex items-center justify-left mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-blue-600 text-left mb-4">
                {service.title}
              </h3>
              <ul className="space-y-2">
                {service.points.map((point, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-gray-700 text-sm"
                  >
                    <ArrowRightCircle className="text-blue-600 !h-10  !w-5 " />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
