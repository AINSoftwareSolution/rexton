import React from 'react'
import Image from 'next/image'
import { clientImages } from '../utilis/data'
import { Title } from '../components'


const Client = () => {
  return (
      <div className="container inset-0 mx-auto px-2 py-8 lg:px-12 lg:py-12 overflow-hidden">
        <Title heading='Our Clients' subheading='Partnerships Built on Excellence and Trust' />
        <div className="flex space-x-6 animate-marquee">
          {clientImages.map((client, index) => (
            <figure key={index} className="flex-shrink-0 transition-transform duration-300 hover:scale-110">
              <Image
                src={client.src}
                alt={client.alt}
                width={client.width}
                height={client.height}
              />
            </figure>
          ))}
        </div>
      </div>
  )
}

export default Client
