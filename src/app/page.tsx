import React from 'react';
import Image from 'next/image';
import { Button } from './components';
import { BannerImage, WhyChooseUsImg, } from './utilis/images';
import { AboutUs, Contact, Client, Gallery, Features,  ServiceList } from './containers';

const Home = () => {
  return (
    <>
      <div className="relative inset-0 h-screen w-full flex items-center justify-center text-center  banner">
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
            Welcome to Our Website
          </h1>
          <p className="text-lg text-white">
            Your journey to success starts here.
          </p>
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
