import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { AboutImage } from "../utilis/images"

const AboutUs = () => {
  return (
   <>
    <div className="container inset-0 bg-gray mx-auto px-2 py-8 ">
        <div className="flex flex-wrap lg:flex-nowrap">
          <div className="w-full lg:w-5/12 p-2 mb-4 mt-5">
            <div>
              {/* <h1 className="text-2xl font-bold">About Us</h1> */}
              <div className="relative font-2xl font-bold text-[15px] py-1.5 tracking-wide mb-6 inline-block text-[var(--main-color)] uppercase border-t border-b border-[var(--main-color)]">
              <i className="flaticon-wood-1"></i> About us
              </div>

              <h1 className="text-2xl mt-3">The Digital Cybsec and Transform Billboard</h1>
              <p className="mt-2">
                Established in 2016, REXTON Advertising has become one of India&apos;s leading suppliers of LED Displays,
                LED Signages, and LED Mobile Vans. With over 8,000 square feet of LED screens installed across the country,
                we are dedicated to delivering cutting-edge solutions tailored to our customers&apos; needs.
              </p>
              <p>
                Our advanced technology ensures that our products are quick to install, easy to use, and portable. We cater to a
                diverse range of industries, including malls, retail chains, and hotels, offering a variety of LED displays such as:
              </p>
              <ul className="list-disc list-inside mt-3">
                <li>Outdoor LED Displays</li>
                <li>Indoor LED Displays</li>
              </ul>
              <div className="mt-3">
                <Link href="#" className="btn bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 inline-flex items-center">
                  Learn More <i className="ml-2 icon icon-right-arrow"></i>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: Image and Stats Section */}
          <div className="w-full lg:w-7/12 lg:ml-8 mt-8 lg:mt-0 rounde-lg p-5 ">
            <div className="relative">
              <Image src={AboutImage} alt="Main Billboard Image" className="w-full h-auto rounded shadow-lg" />
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default AboutUs;
