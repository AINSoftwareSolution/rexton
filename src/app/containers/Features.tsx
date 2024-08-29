import React from 'react'
import Image from 'next/image'
import { Title } from '../components'
import { featuresData } from '../utilis/data'

const Features = () => {
    return (
        <div className="container inset-0 mx-auto px-2 py-8 lg:px-12 lg:py-12">
            <div className="relative">
                <Title heading='Our Features' subheading='Supercharge Your Business with Billboards' />
                <div className="mt-10">
                    <div className="flex flex-wrap -mx-4">
                        {featuresData.map((feature, index) => (
                            <div key={index} className="w-full lg:w-1/3 px-4 mb-10 lg:mb-0">
                                <div className="features-billboard-card-body">
                                    <div className="img-effect imghover relative overflow-hidden">
                                        <figure>
                                            <Image
                                                className="rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-110 
                                                active:scale-125 h-72 w-full object-cover"
                                                src={feature.src}
                                                alt={feature.alt}
                                            />
                                        </figure>
                                    </div>
                                    <div className="mt-3">
                                        <h3 className="font-sans font-semibold text-[24px]  text-center">
                                            {feature.title}
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features