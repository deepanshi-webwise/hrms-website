import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import images from "../../asset/images";

const testimonials = [
  {
    name: "Vikas Kumar",
    role: "Sales Director",
    image: images.TestiImage1,
    text: "Webwise's team is extremely responsive and helpful. They understand our business needs and provide tailored solutions that work perfectly for us.",
  },
  {
    name: "Ananya Sharma",
    role: "Marketing Head",
    image: images.TestiImage2,
    text: "We are very satisfied with Webwise's service. Their quick support and customized solutions are truly impressive!",
  },
  {
    name: "Rahul Verma",
    role: "Product Manager",
    image: images.TestiImage3,
    text: "Amazing team! They always go above and beyond to ensure we are happy with the services.",
  },
];


const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute top-1/2 right-[-100px] transform -translate-y-1/2 bg-orange-500 text-white p-3 rounded-full shadow-lg hover:bg-orange-600 transition"
  >
    <ChevronRight size={20} />
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute top-1/2 left-[-100px] transform -translate-y-1/2 bg-orange-500 text-white p-3 rounded-full shadow-lg hover:bg-orange-600 transition"
  >
    <ChevronLeft size={20} />
  </button>
);

const TestimonialSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
<div class="relative after:content-[''] after:absolute after:w-[300px] after:h-[400px] after:left-0 after:top-0 after:bg-[#c3daf8] after:opacity-20 after:[clip-path:polygon(0_0,0%_100%,73%_49%)] after:z-10">

    <div className="w-full  bg-white relative">
      <div className="max-w-2xl mx-auto text-center relative">
        <h2 className="text-3xl font-bold text-blue-800">Testimonials</h2>
        <p className="text-gray-500 mb-8">Our Happy Customers</p>



<Slider {...settings}>
  {testimonials.map((t, index) => (
    <div key={index} className="px-6">
      <div className="bg-blue-50 p-6 rounded-xl flex flex-col md:flex-row items-center md:items-start relative overflow-hidden">
     

        <div className="flex-1 text-left relative z-10">
          <div className="text-yellow-400 text-xl mb-2">★★★★★</div>
          <p className="text-gray-700 mb-4 leading-relaxed">
            {t.text}
          </p>
        </div>

        <div className="ml-12 mt-4 md:mt-0 relative z-10 text-center md:text-left">
          <div className="w-32 h-32 rounded-xl shadow overflow-hidden mb-2">
            <img
              src={t.image}
              alt={t.name}
              className="w-full h-full object-cover"
            />
          </div>
          <h4 className="font-bold text-gray-900">{t.name}</h4>
          <p className="text-gray-500 text-sm">{t.role}</p>
        </div>
      </div>
    </div>
  ))}
</Slider>



      </div>
    </div>
    </div>
  );
};

export default TestimonialSection;
