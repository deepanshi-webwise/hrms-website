import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What services does FrenzoPay offer to merchants?",
    answer:
      "FrenzoPay provides a comprehensive suite of payment solutions, including payouts for businesses, money transfers, and Aadhaar-enabled payment services (AEPS), along with M-Atm, Bill Payments and Verification Services.",
  },
  {
    question: "How quickly can I start using FrenzoPay for my business?",
    answer:
      "You can get started almost instantly after signing up and completing the required onboarding process.",
  },
  {
    question: "Is FrenzoPay secure for my transactions?",
    answer:
      "Yes, FrenzoPay uses industry-standard security protocols to ensure all your transactions are safe and protected.",
  },
  {
    question:
      "What makes FrenzoPay stand out from other payment solutions in India?",
    answer:
      "Our focus on fast customer support, tailored solutions, and innovative payment products sets us apart from competitors.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-blue-50 py-16">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-10">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white shadow-sm rounded-md border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left px-4 py-3 font-medium text-blue-700 hover:bg-blue-100 transition text-lg"
              >
                <span >{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-blue-700" />
                ) : (
                  <Plus className="w-5 h-5 text-blue-700" />
                )}
              </button>

              <div
                className={`px-4 text-gray-600 text-base leading-relaxed transition-all duration-500 ease-in-out overflow-hidden ${
                  openIndex === index ? "max-h-40 pb-4" : "max-h-0"
                }`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
