import React from 'react';
import Image from 'next/image';
import { Button } from './components';
import {
  AboutImage, BannerImage, FeatureImg1, FeatureImg2, FeatureImg3, WhyChooseUsImg,
  GalleryImg1, GalleryImg2, GalleryImg3, GalleryImg4, GalleryImg5
} from './utilis/images';

const Home = () => {
  return (
    <>
      <div className="relative inset-0 h-screen w-full flex items-center justify-center text-center  banner">
        {/* Full-Screen Background Image */}
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
          <h1 className="text-4xl font-bold text-white mb-4">Welcome to Our Website</h1>
          <p className="text-lg text-white">Your journey to success starts here.</p>
        </div>
      </div>


      {/* // About Section  */}
      <div className="container inset-0 bg-gray mx-auto px-2 lg:px-12 lg:py-12 ">
        <div className="flex flex-wrap lg:flex-nowrap">
          <div className="w-full lg:w-5/12 p-2">
            <div>
              <h1 className="text-2xl font-bold">About Us</h1>
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
              <div className="mt-6">
                <Button />
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

      {/* About Section End  */}


      {/* Why ChooseUS Section Start  */}

      <div className="container inset-0  mx-auto px-2 py-8 lg:px-12 lg:py-12 choose-us">
        <div className="why-choose-us-section">
          <div className="flex flex-wrap">
            {/*  Left Column: Text Section */}
            <div className="w-full lg:w-5/12 p-5">
              <div className="about-text">
                <h1 className="text-white mt-4 text-3xl font-bold leading-snug">
                  The Digital Cybsec and Transform Billboard
                </h1>
                <p className="text-white mt-3">
                  Billboard advertising is a powerful marketing tool. It helps
                  businesses gain visibility and reach their target audience.
                  Advertising is a powerful tool for business growth.
                </p>
                <div className="mt-4">
                  <a href="#" className="inline-block bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition duration-300">
                    Learn More <i className="ml-2 icon icon-right-arrow"></i>
                  </a>
                </div>
              </div>
            </div>
            {/* Right Column: Image and Stats Section  */}
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
                  style={{ top: "50%", right: "10px", transform: "translateY(-50%)" }}
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
      </div>
      {/*  Why choose-us section end */}


      {/* <!-- Features Section --> */}
      <div className="container inset-0 mx-auto px-2 py-8  lg:px-12 lg:py-12 ">
        <div className="relative">
          <div className="text-center">
            <h3 className=" font-bold text-xl mb-2 mt-9">
              Our Features
            </h3>
            <h4
              className="font-sans text-[30px] font-semibold  mb-5"
            >
              Supercharge Your Business <br />
              with Billboards
            </h4>
          </div>

          <div className="mt-10">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full lg:w-1/3 px-4 mb-10 lg:mb-0">
                <div
                  className="features-billboard-card-body"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  <div className="img-effect imghover relative overflow-hidden">
                    <figure>
                      <Image
                        className="rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-110 
                        active:scale-125 h-72 w-full object-cover"
                        src={FeatureImg1}
                        alt="billboard1"
                        data-aos="flip-left"
                        data-aos-duration="2000"
                      />
                    </figure>
                  </div>
                  <div className="mt-3">
                    <h3 className="font-sans font-semibold text-[24px] text-black text-center" data-aos="fade-up">
                      Outdoor Billboard
                    </h3>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/3 px-4 mb-10 lg:mb-0">
                <div
                  className="features-billboard-card-body"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  <div className="img-effect imghover relative overflow-hidden">
                    <figure>
                      <Image
                        className="rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-110 active:scale-125 h-72 w-full object-cover"
                        src={FeatureImg2}
                        alt="billboard2"
                        data-aos="flip-down"
                        data-aos-duration="2000"
                      />
                    </figure>
                  </div>
                  <div className="mt-3" data-aos="fade-up">
                    <h3
                      className="font-sans font-semibold text-[24px] text-black text-center"
                      data-aos="fade-up">
                      Indoor Billboard
                    </h3>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/3 px-4 mb-10 lg:mb-0">
                <div
                  className="features-billboard-card-body"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  <div className="img-effect imghover relative overflow-hidden">
                    <figure>
                      <Image
                        className="rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-110 active:scale-125 h-72 w-full object-cover"
                        src={FeatureImg3}
                        alt="billboard3"
                        data-aos="flip-right"
                        data-aos-duration="2000"

                      />
                    </figure>
                  </div>
                  <div className="mt-3">
                    <h3
                      className="font-sans font-bold text-[20px] text-black text-center mb-2"
                    >
                      Digital Light
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Feature section end --> */}



      {/* Gallery Section Start */}
      <div className="container inset-0 mx-auto px-2 py-8  lg:px-12 lg:py-4">
        <div className="latest-gallery">
          <div className="text-center mb-10">
            <h1 className="text-sm text-white uppercase tracking-wider">Latest Gallery</h1>
            <h1 className="text-3xl text-white font-bold">Captivate Your Audience with Billboard Magic</h1>
          </div>

          {/*  First Row of Images  */}
          <div className="flex flex-wrap -mx-2">
            {/*  Image 1 */}
            <div className="w-full lg:w-4/12 px-2 mb-4" data-aos="zoom-in" data-aos-duration="2000">
              <div className="relative overflow-hidden rounded-lg shadow-lg group">
                <Image src={GalleryImg1} alt="billboard1" className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <h3 className="text-white text-xl">Outdoor the Most Advertising</h3>
                </div>
              </div>
            </div>

            {/*  Image 2  */}
            <div className="w-full lg:w-5/12 px-2 mb-4" data-aos="zoom-out" data-aos-duration="2000">
              <div className="relative overflow-hidden rounded-lg shadow-lg group">
                <Image src={GalleryImg2} alt="billboard1" className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <h3 className="text-white text-xl">Outdoor the Most Advertising</h3>
                </div>
              </div>
            </div>

            {/*  Image 3 */}
            <div className="w-full lg:w-3/12 px-2 mb-4" data-aos="zoom-out" data-aos-duration="2000">
              <div className="relative overflow-hidden rounded-lg shadow-lg group">
                <Image src={GalleryImg3} alt="billboard1" className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <h3 className="text-white text-xl">Indoor the Most Advertising</h3>
                </div>
              </div>
            </div>
          </div>

          {/* Second Row of Images  */}
          <div className="flex flex-wrap -mx-2 mt-4">
            {/*  Image 4  */}
            <div className="w-full lg:w-4/12 px-2 mb-4" data-aos="zoom-in" data-aos-duration="2000">
              <div className="relative overflow-hidden rounded-lg shadow-lg group">
                <Image src={GalleryImg4} alt="billboard1" className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <h3 className="text-white text-xl">Led Sign Board</h3>
                </div>
              </div>
            </div>

            {/*  Image 5  */}
            <div className="w-full lg:w-5/12 px-2 mb-4" data-aos="zoom-out" data-aos-duration="2000">
              <div className="relative overflow-hidden rounded-lg shadow-lg group">
                <Image src={GalleryImg5} alt="billboard1" className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <h3 className="text-white text-xl">Outdoor the Most Advertising</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  Gallery End  */}
    </>

  );
};

export default Home;
