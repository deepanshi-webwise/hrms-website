import { visionMissionData } from "../../constants/visionMissionData"

const VisionMission = () => {

  return (
    <div className="visionMissionOuter">
     <section className="visionMissionSection py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-6 flex flex-col gap-20">
        {visionMissionData.map((item, index) => (
            
          <div
            key={index}
            className={`relative flex flex-col md:flex-row items-center  ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            <span className= " hidden md:flex absolute -top-15 left-1/2 md:left-0 transform -translate-x-1/2 md:translate-x-0 text-9xl font-extrabold text-gray-100 select-none">
              {item.number}
            </span>

            <div className={`flex-shrink-0 w-full md:w-1/2 flex ${ index % 2 !== 0 ? " justify-center md:justify-end" : " justify-center md:justify-start"} `}>
              <img
                src={item.img}
                alt={item.title}
                className="w-68 h-auto object-contain"
              />
            </div>

            <div className="w-full  text-center md:text-left">
              <h2 className="text-3xl font-bold text-blue-700 mb-4 flex items-center justify-center md:justify-start gap-2">
                <item.Icon className="w-7 h-7 text-blue-600" />
                {item.title}
              </h2>
              <p className="text-gray-700 leading-relaxed">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
    </div>
  );
};

export default VisionMission;
