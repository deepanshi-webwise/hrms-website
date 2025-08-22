import React from 'react'
import { serviceDetails } from '../../constants/serviceDetails';

const ServiceDetails = () => {
return (
    <div className="bg-white py-12 px-6 max-w-6xl mx-auto space-y-20">
      {serviceDetails.map((service, index) => (
        <div
          key={index}
          className={`grid md:grid-cols-2 gap-10 items-center ${
            index % 2 !== 0 ? "md:flex-row-reverse" : ""
          }`}
        >
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-blue-700 mb-4">
              {service.title}
            </h2>
            <p className="text-gray-600 mb-6">{service.description}</p>

            <div className="grid sm:grid-cols-2 gap-3">
              {service.features.map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <item.icon className="w-5 h-5 text-blue-600" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center h-full w-full">
            <img
              src={service.img}
              alt={service.title}
              
            />
          </div>
        </div>
      ))}
    </div>
  );}

export default ServiceDetails