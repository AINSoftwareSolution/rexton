import React from 'react';
import { Button } from '../components';

const AboutUs = () => {
  return (
    <>
      <div className="container inset-0 mx-auto px-2 py-8 lg:px-12 lg:py-12" id='about-us'>
        <div className="flex flex-wrap lg:flex-nowrap">
          <div className="w-full lg:w-5/12 p-2 mb-4 mt-5">
            <div>
              <h1 className="text-4xl font-bold text-purple-700">
                <span className="block text-black">About Us</span></h1>
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
              <div className="mt-8">
                <Button  title='Contact Us' link='#contact'/>
              </div>
            </div>
          </div>

          {/* Right Column: Image and Stats Section */}
          <div className="w-full lg:w-7/12 lg:ml-8 mt-8 lg:mt-0 rounde-lg p-5 ">
            <video className="h-full w-full rounded-lg" autoPlay muted>
              <source src="/about-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>

    </>
  );
};

export default AboutUs;
