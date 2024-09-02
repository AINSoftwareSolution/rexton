import React from 'react'
import Image from 'next/image'
import { servicesData } from '../utilis/data'
import { Title, Button } from '../components'

const ServiceList = () => {
  return (
    <div className="container inset-0 mx-auto px-2 py-8 lg:px-12 lg:py-12">
        <Title heading='Our Services' subheading='Illuminate Your Brand in Any Environment' />
        {servicesData.map((service, index) => (
          <div key={index} className="container inset-0 mx-auto px-2 py-8">
            <div className="services-section">
              <div
                className={`flex flex-wrap lg:flex-nowrap items-stretch ${service.reverse ? 'lg:flex-row-reverse' : ''
                  }`}
              >
                {/* Text Section */}
                <div className="w-full lg:w-4/8 p-5 lg:pr-4 flex flex-col justify-between">
                  <div className="about-text">
                    <h1 className="text-2xl font-bold leading-snug">
                      {service.title}
                    </h1>
                    <p className="mt-3 leading-relaxed">{service.description}</p>
                    <div className="mt-5">
                      <Button  title='Know More' link={service.link}/>
                    </div>
                  </div>
                </div>
                {/* Image Section */}
                <div className="w-full lg:w-4/8 lg:ml-auto relative mt-8 lg:mt-0 p-5 flex items-center">
                  <div className="relative w-full h-full flex justify-center items-center">
                    <Image
                      src={service.imgSrc}
                      alt={service.imgAlt}
                      className="w-full h-60 rounded-lg shadow-lg object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
  )
}

export default ServiceList