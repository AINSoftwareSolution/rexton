import React from 'react';
import Image from 'next/image';
import { Button } from './components';
import { BannerImage, WhyChooseUsImg, } from './utilis/images';
import { AboutUs, Contact, Client, Gallery, Features,  ServiceList } from './containers';

const Home = () => {
  return (
    <>
    <div className="w-full">
    <div className="relative inset-0 h-screen w-full flex items-center justify-center text-center overflow-hidden">
    <Image
        src={BannerImage}
        alt="Main Billboard Image"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="absolute inset-0 z-[-1]"
    />

    {/* Overlay and Content */}
    <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center p-8">
        <h1 className="text-4xl font-bold text-white mb-4">
        Leading the Way in LED Innovation
        </h1>
        <h3 className="text-lg text-white">
        India&apos;s Premier Supplier of LED Displays and Signages
        </h3>
        <div className="mt-5">
              <button type="submit" className="box-border relative z-30 inline-flex items-center justify-center w-auto px-8 py-3 banner-button
            overflow-hidden font-bold text-white transition-all duration-300 rounded-md cursor-pointer 
            group  ease 
            focus:outline-none hover:shadow-[0_4px_10px_rgba(140,72,77,0.4),0_4px_10px_rgba(99,56,84,0.3),0_4px_10px_rgba(46,23,95,0.3)]"
                >
                <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out 
                transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out
                 transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                <span className="relative z-20 flex items-center text-sm">
                  Learn More
                </span>
              </button>
            </div>
    </div> 
</div>
</div>

      <AboutUs />


      {/* <div className="container inset-0 mx-auto px-2 py-8 lg:px-12 lg:py-12">
        <div className="flex flex-wrap">
          {/*  Left Column: Text Section 
          <div className="w-full lg:w-5/12 p-5">
            <div className="about-text">
              <h1 className=" mt-4 text-3xl font-bold leading-snug">
                Why Choose Us
              </h1>
              <p className="mt-5 mb-5">
                Billboard advertising is a powerful marketing tool. It helps
                businesses gain visibility and reach their target audience.
                Advertising is a powerful tool for business growth.
              </p>
              <div className="mt-5">
                <Button />
              </div>
            </div>
          </div>
          {/* Right Column: Image and Stats Section  
          <div className="w-full lg:w-6/12 lg:ml-auto relative mt-8 lg:mt-0">
            <div className="relative">
              <div className="main-image">
                <Image
                  src={WhyChooseUsImg}
                  alt="Main Billboard Image"
                  className="w-full h-80 rounded-lg shadow-lg"
                />
              </div>
              <div
                className="absolute bg-yellow-500 rounded-lg p-7 text-white flex flex-col items-center justify-center"
                style={{
                  top: "50%",
                  right: "10px",
                  transform: "translateY(-50%)",
                }}
              >
                <div className="stat-item-center mb-0 text-center">
                  <h2 className="text-4xl font-bold">100%</h2>
                  <p className="text-lg">Billboard</p>
                </div>
                <hr className="border-t border-white opacity-50 my-2 w-full" />
                <div className="stat-item text-center">
                  <h2 className="text-4xl font-bold">250+</h2>
                  <p className="text-lg">Happy Clients</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
       */}

      <Features  />
      <ServiceList />
      <Gallery />
      <Client />
      <Contact />
    </>
  );
};

export default Home;
