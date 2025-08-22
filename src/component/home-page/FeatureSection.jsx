import { ChartPie, LineChart, Headphones, Wrench } from "lucide-react";
import images from "../../asset/images";
export default function FeaturesSection() {
  return (
    <div className="lg:px-40">
      <div className="grid lg:grid-cols-2 gap-8 mg:border p-12 border-gray-300 rounded-br-[50px] rounded-tl-[50px]">
        <div className="flex items-center justify-center">
          <img src={images.ChartBar} alt="Card Balance" />
        </div>

        <div className="grid md:grid-cols-2 gap-x-5 gap-y-1  ">
          <div>
            <div className="text-orange-500 text-3xl mb-2">
              <Wrench />
            </div>
            <h3 className="text-blue-800 font-semibold text-lg mb-1">
              Smooth and Responsive Onboarding
            </h3>
            <p className="text-gray-600 text-base mb-4 lg:mb-0">
              Webwise streamlines merchant onboarding for quick, easy payment
              acceptance with minimal hassle.
            </p>
          </div>

          <div>
            <div className="text-orange-500 text-3xl mb-2">
              <ChartPie />
            </div>
            <h3 className="text-blue-800 font-semibold text-lg mb-1">
              Business Enhancing Features
            </h3>
            <p className="text-gray-600 text-base mb-4 lg:mb-0">
              Webwise’s advanced features enhance merchant engagement, revenue
              and performance beyond transactions.
            </p>
          </div>

          <div>
            <div className="text-orange-500 text-3xl mb-2">
              <LineChart />
            </div>
            <h3 className="text-blue-800 font-semibold text-lg mb-1">
              Customisable and Scalable Technology
            </h3>
            <p className="text-gray-600 text-base mb-4 lg:mb-0">
              Webwise’s customizable, scalable technology allows merchants to
              adapt to changing needs and grow with their business.
            </p>
          </div>

          <div>
            <div className="text-orange-500 text-3xl mb-2">
              <Headphones />
            </div>
            <h3 className="text-blue-800 font-semibold text-lg mb-1">
              Best Possible customer support
            </h3>
            <p className="text-gray-600 text-base mb-4 lg:mb-0">
              Webwise’s customer support guarantees swift assistance for
              smooth merchant operations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
