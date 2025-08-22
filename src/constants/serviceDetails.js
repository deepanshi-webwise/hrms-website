import { ArrowRight } from "lucide-react";
import dmtImg from "../assests/dmtImg.png"
import aepsImg from "../assests/aepsImg.png"
import microAtm from "../assests/microatm.png"
import billPayments from "../assests/billPaymentImg.png"
import recharge from "../assests/rechargeImg.png"
export const serviceDetails = [
    {
      title: "Money Transfer",
      description:
        "Webwise offers Money Transfer services that enable our customers to send and receive money. Being a quick, trustworthy, and secure method, it provides customers with several advantages.",
      features: [
        { icon: ArrowRight, text: "Safe, Swift And Secure" },
        { icon: ArrowRight, text: "Easy Transfers" },
        { icon: ArrowRight, text: "24x7 Transfers" },
        { icon: ArrowRight, text: "No Bank Holiday Restrictions" },
      ],
      img: dmtImg,
    },
     {
      title: "Aadhaar Enabled Payment Systems(AePS)",
      description:
        "With Webwise AePS, customers can access their Aadhaar-linked bank accounts and carry out standard banking operations including checking their account balance, withdrawing cash, and sending money using a certified biometric system.",
      features: [
        { icon: ArrowRight, text: "Cardless cash withdrawal from Aadhaar Linked Bank Accounts" },
        { icon: ArrowRight, text: "Balance enquiry and mini statement facilities" },
        { icon: ArrowRight, text: "Instant transfer from wallet to bank account" },
        { icon: ArrowRight, text: "Easy and secure method" },
      ],
      img: aepsImg,
    }, {
      title: "MicroATM",
      description:
        "At Webwise, we empower businesses to become financial hubs. Our Micro ATM solution turns your business into a trusted access point for essential banking services, enabling customers to withdraw and deposit cash easily with a simple card swipe. It's not just convenience — it's about fostering trust and financial inclusion in communities.",
      features: [
        { icon: ArrowRight, text: "Aadhaar-enabled transactions for secure withdrawals and deposits" },
        { icon: ArrowRight, text: "Independence from traditional bank branches" },
        { icon: ArrowRight, text: "Real-time, seamless, and secure card-swipe functionality" },
        { icon: ArrowRight, text: "A frictionless experience for both you and your customers" },
      ],
      img: microAtm,
    }, {
      title: "Bill Payments",
      description:
        "Webwise Bill Payments is a platform that rides on the BBPS system, making it simple and convenient for our customers to pay their utility bills—including those for electricity, water, gas, DTH, broadband, and mobile— using our wide network.",
      features: [
        { icon: ArrowRight, text: "Convenience of paying bills from anywhere, anytime" },
        { icon: ArrowRight, text: "Access and Connection to a large human network of agents" },
        { icon: ArrowRight, text: "Biller registration in real time" },
        { icon: ArrowRight, text: "Automatic refund in case of rare transaction failures" },
      ],
      img: billPayments,
    },
    {
      title: "Recharge",
      description:
        "Webwise provides mobile and DTH recharge services for all Indian operators through its network of Agent Points. This offers a hassle-free and convenient way to recharge your devices. The process is simple and seamless, allowing customers to recharge quickly and easily. Webwise's Agent Points offer a comprehensive solution for all your mobile and DTH recharge needs.",
      features: [
        { icon: ArrowRight, text: "Convenient mobile and DTH recharge options." },
        { icon: ArrowRight, text: "Easy process through our extensive Agent Points." },
        { icon: ArrowRight, text: "Recharge all operators, anywhere in India, with ease." },
        { icon: ArrowRight, text: "Experience hassle-free, seamless recharge with Webwise." },
      ],
      img: recharge,
    },
  ];