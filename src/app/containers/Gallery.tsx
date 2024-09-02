import React from 'react'
import Image from 'next/image'
import { Title } from '../components'
import { galleryData } from '../utilis/data'

const Gallery = () => {
    return (
        <div className="bg-[#2e176017] ">
        <div className=" container inset-0 mx-auto px-2 py-8 lg:px-12 lg:py-4">
            <div className="latest-gallery mt-4">
                <Title heading='Latest Gallery' subheading='Captivate Your Audience with Billboard Magic' />
                <div className="flex flex-wrap mb-4">
                    {galleryData.map((item, index) => (
                        <div
                            key={index}
                            className="w-full lg:w-1/3 p-4 mb-10 lg:mb-0 mb-4">
                            <div className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer">
                                <Image
                                    src={item.src}
                                    alt={item.alt}
                                    className="w-full h-72 object-cover transform transition-transform duration-500 
                                    group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center 
                                opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <h3 className="text-white text-xl font-bold">{item.title}</h3>
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

export default Gallery
