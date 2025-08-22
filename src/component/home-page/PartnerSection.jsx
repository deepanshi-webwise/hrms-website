import { CreditCard, ShieldCheck, Wallet } from "lucide-react"; 

export default function PartnerSection() {
  const services = [
    {
      title: "MicroATM",
      description:
        "m-ATM is a compact, handheld device that enables businesses, merchants, and banking agents to process card payments and facilitate cash withdrawals. Acting as a mini ATM, it extends banking services to remote and underserved areas.",
      link: "#",
      icon: <CreditCard className="w-6 h-6 text-blue-600" />,
    },
    {
      title: "FrenzoVerify",
      description:
        "No Docs? No Delays! Verify Customers Instantly with FrenzoVerify. Seamless, secure & fully digital — no paperwork required. Ensure compliance & reduce fraud with the smartest verification suite for businesses. Experience frictionless onboarding today!",
      link: "#",
      icon: <ShieldCheck className="w-6 h-6 text-blue-600" />,
    },
    {
      title: "Payouts",
      description:
        "With Frenzo Payouts, you can not only expand your business but also have peace of mind knowing your payments are secure and efficient. Transfer funds quickly and easily, improving your cash flow and freeing up time to focus on what truly matters.",
      link: "#",
      icon: <Wallet className="w-6 h-6 text-blue-600" />,
    },
    {
      title: "Payouts",
      description:
        "With Frenzo Payouts, you can not only expand your business but also have peace of mind knowing your payments are secure and efficient. Transfer funds quickly and easily, improving your cash flow and freeing up time to focus on what truly matters.",
      link: "#",
      icon: <Wallet className="w-6 h-6 text-blue-600" />,
    },
    {
      title: "Payouts",
      description:
        "With Frenzo Payouts, you can not only expand your business but also have peace of mind knowing your payments are secure and efficient. Transfer funds quickly and easily, improving your cash flow and freeing up time to focus on what truly matters.",
      link: "#",
      icon: <Wallet className="w-6 h-6 text-blue-600" />,
    },
    {
      title: "Payouts",
      description:
        "With Frenzo Payouts, you can not only expand your business but also have peace of mind knowing your payments are secure and efficient. Transfer funds quickly and easily, improving your cash flow and freeing up time to focus on what truly matters.",
      link: "#",
      icon: <Wallet className="w-6 h-6 text-blue-600" />,
    },
  ];

  return (
    <section className="relative w-full bg-gradient-to-t from-[#172e73] to-[#005ad2] [clip-path:polygon(0_8%,100%_0,100%_91%,0%_100%)] py-16 px-6 text-center text-white">
      <div className="max-w-6xl mx-auto mt-10">
        <h2 className="text-2xl md:text-4xl font-bold mb-3">
          The Payments Partner You Need
        </h2>
        <p className="text-lg text-white/80 mb-12">
          Our Wide Range Of Payment Products Cater To All
        </p>

        <div className="grid gap-8 md:grid-cols-3 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white text-gray-800 rounded-2xl shadow-md p-6 text-left flex flex-col hover:shadow-xl transition   hover:border-4 hover:border-amber-600 border-4 border-white "
            >
              <div className="flex items-center gap-3 ">
                <div className="mb-4 flex items-center justify-center w-13 h-13 rounded-2xl  shadow-[0_0_8px_rgba(0,0,0,0.25)]">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-blue-800">
                  {service.title}
                </h3>
              </div>
              <p className="text-sm text-blue-600 mb-4 text-justify">
                {service.description}
              </p>
              <a
                href={service.link}
                className="text-blue-600 font-medium text-sm hover:underline mt-auto"
              >
                Know More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
