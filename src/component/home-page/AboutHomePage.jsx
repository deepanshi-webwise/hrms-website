import { ArrowRight } from "lucide-react";
import images from "../../asset/images";

const AboutHomePage = () => {
  return (
    <section className="w-full px-6 lg:px-40 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
            A <span className="text-orange-500">Friend</span> Beyond Payments
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Having Webwise as your payments partner allows you to focus on
            your core business while we handle your digital transactions
            seamlessly. With ready-to-use integrations and plug-ins, enhancing
            your website and enabling smooth transactions has never been easier.
            Get started instantly and ensure a hassle-free payment experience
            for your customers.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            At Webwise, we are committed to continuous innovation, striving to
            provide a seamless and secure digital payment experience. Our goal
            is to empower businesses with efficient and reliable payment
            solutions, making transactions effortless and secure.
          </p>
          <button className="inline-flex items-center border border-orange-500 text-orange-500 px-6 py-2 rounded-md font-medium hover:bg-orange-500 hover:text-white transition">
            Know More <ArrowRight className="ml-2 w-4 h-4" />
          </button>
        </div>

        <div className="flex justify-center">
          <img
            src={images.FriendBeyond}
            alt="People using Webwise"
            className="w-full max-w-md object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutHomePage;
