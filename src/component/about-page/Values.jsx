import React from 'react'
import { coreValues } from '../../constants/coreValues'
import coreValueImg from "../../assests/coreValueImg.png"
const Values = () => {
  return (
    <div className='valuesOuter py-16'>
         <div className="relative w-full">
      <div>
          <h2 className="text-2xl md:text-4xl font-bold text-center mt-6 mb-4 text-blue-700">
        Core Values at Webwise
      </h2>
      </div>
      <div className="hidden md:flex w-full h-[700vh] md:h-[85vh]">
        <img
          src={coreValueImg} 
          alt="Team"
          className="w-full h-full object-cover "
        />
      </div>

      <div className="md:absolute top-20 lg:top-50 xl:top-100 lg:left-1/2 lg:-translate-x-1/2 w-full max-w-6xl px-4 pb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10 md:gap-5">
          {coreValues.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md p-4 rounded-md hover:shadow-lg transition"
            >
              <h3 className="font-semibold text-blue-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 ">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  )
}

export default Values