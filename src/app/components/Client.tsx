import React from 'react'
import Image from 'next/image'
import {
  ClientImage1,
  ClientImage2,
  ClientImage3,
  ClientImage4,
  ClientImage5,
  ClientImage6,
  ClientImage7,
  ClientImage8,
  ClientImage9,
  ClientImage10,
} from '../utilis/images'

const Client = () => {
  return (
    <section className="bg-yellow-400 py-8">
      <div className="container mx-auto overflow-hidden">
        <div className="text-center">
          <h3 className="text-center font-bold text-2xl mb-5 mt-4">Our Clients</h3>
        </div>
        <div className="flex space-x-6 animate-marquee">
          <figure className="flex-shrink-0 transition-transform duration-300 hover:scale-110">
            <a href="#">
              <Image src={ClientImage1} alt="Mountain" className="w-30 h-20" />
            </a>
          </figure>
          <figure className="flex-shrink-0 transition-transform duration-300 hover:scale-110">
            <a href="#">
              <Image src={ClientImage2} alt="Mountain" className="w-52 h-20" />
            </a>
          </figure>
          <figure className="flex-shrink-0 transition-transform duration-300 hover:scale-110">
            <a href="#">
              <Image src={ClientImage3} alt="Mountain" className="w-52 h-20" />
            </a>
          </figure>
          <figure className="flex-shrink-0 transition-transform duration-300 hover:scale-110">
            <a href="#">
              <Image src={ClientImage4} alt="Mountain" className="w-52 h-20" />
            </a>
          </figure>
          <figure className="flex-shrink-0 transition-transform duration-300 hover:scale-110">
            <a href="#">
              <Image src={ClientImage5} alt="Mountain" className="w-52 h-20" />
            </a>
          </figure>
          <figure className="flex-shrink-0 transition-transform duration-300 hover:scale-110">
            <a href="#">
              <Image src={ClientImage6} alt="Mountain" className="w-52 h-20" />
            </a>
          </figure>
          <figure className="flex-shrink-0 transition-transform duration-300 hover:scale-110">
            <a href="#">
              <Image src={ClientImage7} alt="Mountain" className="w-52 h-20" />
            </a>
          </figure>
          <figure className="flex-shrink-0 transition-transform duration-300 hover:scale-110">
            <a href="#">
              <Image src={ClientImage8} alt="Mountain" className="w-52 h-20" />
            </a>
          </figure>
          <figure className="flex-shrink-0 transition-transform duration-300 hover:scale-110">
            <a href="#">
              <Image src={ClientImage9} alt="Mountain" className="w-52 h-20" />
            </a>
          </figure>
          <figure className="flex-shrink-0 transition-transform duration-300 hover:scale-110">
            <a href="#">
              <Image src={ClientImage10} alt="Mountain" className="w-52 h-20" />
            </a>
          </figure>
        </div>
      </div>
    </section>
  )
}

export default Client
    