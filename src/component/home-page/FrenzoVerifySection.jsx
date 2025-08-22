import { Shield, Zap, Lock, CreditCard } from "lucide-react"; // using lucide icons

export default function FrenzoVerifySection() {
  const features = [
    {
      icon: <CreditCard className="w-4 h-4 text-white" />,
      title: "AI-Powered Accuracy",
      desc: "Our advanced AI-driven technology ensures precise and high-success-rate verifications, minimizing errors and enhancing data authenticity.",
    },
    {
      icon: <Lock className="w-4 h-4 text-white" />,
      title: "Real-Time Verification",
      desc: "Instantly validate customer details within seconds, enabling seamless onboarding and secure transactions without delays or bottlenecks.",
    },
    {
      icon: <Shield className="w-4 h-4 text-white" />,
      title: "Secure & Compliant",
      desc: "Built to meet the highest industry security standards, ensuring complete data privacy, encryption, and regulatory compliance.",
    },
    {
      icon: <Zap className="w-4 h-4 text-white" />,
      title: "Scalable Solutions",
      desc: "Our verification APIs are designed to grow with your business, handling increasing verification demands effortlessly.",
    },
    {
      icon: <CreditCard className="w-4 h-4 text-white" />,
      title: "AI-Powered Accuracy",
      desc: "Our advanced AI-driven technology ensures precise and high-success-rate verifications, minimizing errors and enhancing data authenticity.",
    },
    {
      icon: <Lock className="w-4 h-4 text-white" />,
      title: "Real-Time Verification",
      desc: "Instantly validate customer details within seconds, enabling seamless onboarding and secure transactions without delays or bottlenecks.",
    },
    {
      icon: <Shield className="w-4 h-4 text-white" />,
      title: "Secure & Compliant",
      desc: "Built to meet the highest industry security standards, ensuring complete data privacy, encryption, and regulatory compliance.",
    },
    {
      icon: <Zap className="w-4 h-4 text-white" />,
      title: "Scalable Solutions",
      desc: "Our verification APIs are designed to grow with your business, handling increasing verification demands effortlessly.",
    },
  ];

  return (
    // <section className="bg-[#0d47a1] text-white py-16">
         <section
  className="w-full bg-gradient-to-t from-[#172e73] to-[#104c9a] pt-[150px] pb-[80px] [clip-path:polygon(0_0,100%_16%,100%_100%,0_100%)] text-white py-16"
>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">

        <h2 className="text-3xl font-bold">FrenzoVerify</h2>
        <p className="text-lg mt-2  text-gray-200">
          Power Pack Features That Elevate Your Business
        </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 gap-y-14">
          {features.map((f, i) => (
            <div key={i} className="flex flex-col  ">
              <div className="bg-orange-500 h-12 w-12 rounded-full shadow-lg flex items-center justify-center mb-3">
  {f.icon}
</div>

              <h3 className="font-semibold text-lg">{f.title}</h3>
              <p className="text-gray-200 mt-2 text-sm leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
