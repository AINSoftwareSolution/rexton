import React from 'react';
import Image from 'next/image';
import { AboutUs, Button } from './components';
import {
   BannerImage, FeatureImg1, FeatureImg2, FeatureImg3, WhyChooseUsImg,
  GalleryImg1, GalleryImg2, GalleryImg3, GalleryImg4, GalleryImg5, ContactImg,
  OutdoorLed,
  IndoorLed,
  RentalImg,
  DigitalImg
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
          <h1 className="text-4xl font-bold text-white mb-4">
            Welcome to Our Website
          </h1>
          <p className="text-lg text-white">
            Your journey to success starts here.
          </p>
        </div>
      </div>
      <AboutUs />
  {/* Why ChooseUS Section Start  */ }

  <div className="container inset-0  mx-auto px-2 py-8 choose-us">
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
              <a
                href="#"
                className="inline-block bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition duration-300"
              >
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
  {/*  Why choose-us section end */ }
  {/* Services section start */ }
  <div className="container inset-0 mx-auto px-2 py-8">
    <div className="services-section">
      <h3 className="text-center font-bold text-2xl mb-4 mt-4">Our Services</h3>
      <div className="flex flex-wrap lg:flex-nowrap items-stretch">
        {/*  Left Column: Text Section */}
        <div className="w-full lg:w-4/8 p-5 lg:pr-4 flex flex-col justify-between">
          <div className="about-text">
            <h1 className="text-black text-3xl font-bold leading-snug">
              Outdoor LED Screens
            </h1>
            <p className="text-black mt-3 leading-relaxed">
              Outdoor LED displays utilize DIP and SMD technology, with pitch options like P2.5, P3, P3.91, P4, P4.8, P5, P6, P8, and P10. Our outdoor LEDs, including Nationstar, offer high reliability, contrast, wide viewing angles, and excellent consistency. <br />

            </p>
            <div className="mt-4">
              <a
                href="#"
                className="inline-block bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition duration-300"
              >
                Learn More <i className="ml-2 icon icon-right-arrow"></i>
              </a>
            </div>
          </div>
        </div>
        {/* Right Column: Image Section */}
        <div className="w-full lg:w-4/8 lg:ml-auto relative mt-8 lg:mt-0 p-5 flex items-center">
          <div className="relative w-full h-full flex justify-center items-center">
            <Image
              src={OutdoorLed}
              alt="Main Billboard Image"
              className="w-full h-60 rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Indoor Led start */ }
  <div className="container inset-0 mx-auto px-2 py-8">
    <div className="services-section">
      <div className="flex flex-wrap lg:flex-nowrap items-stretch">
        {/* Right Column: Image Section */}
        <div className="w-full lg:w-4/8 lg:mr-auto relative mt-8 lg:mt-0 p-5 flex items-center">
          <div className="relative w-full h-full flex justify-center items-center">
            <Image
              src={IndoorLed}
              alt="Main Billboard Image"
              className="w-full h-60 rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
        {/* Left Column: Text Section */}
        <div className="w-full lg:w-4/8 p-5 lg:pl-4 flex flex-col justify-between">
          <div className="about-text">
            <h1 className="text-black text-3xl font-bold leading-snug">
              Indoor LED Screens
            </h1>
            <p className="text-black mt-3 leading-relaxed">
              Indoor Led display is based on SMD Technology. Indoor Finest pitch provides Seamless high resolution starting from Pitch 1.25mm, P2, P2.5, P3, P3.91, P4, P4.8, P5, P6.Excellent design, Top Quality, Perfect visual performance, better colour consistency.

            </p>
            <div className="mt-4">
              <a
                href="#"
                className="inline-block bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition duration-300"
              >
                Learn More <i className="ml-2 icon icon-right-arrow"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Indoor Led end  */ }

  {/* Rental Led Screen start*/ }

  <div className="container inset-0 mx-auto px-2 py-8 ">
    <div className="services-section">
      <div className="flex flex-wrap lg:flex-nowrap items-stretch">
        {/*  Left Column: Text Section */}
        <div className="w-full lg:w-4/8 p-5 lg:pr-4 flex flex-col justify-between">
          <div className="about-text">
            <h1 className="text-black text-3xl font-bold leading-snug">
              Rental LED Screens
            </h1>
            <p className="text-black mt-3 leading-relaxed">
              LED Rental series has both Indoor and Outdoor rental led display. Indoor rental led display can be used in exhibition centers, hotel halls, conferences, School-college Function, Live telecast of sports, meetings etc. Outdoor rental displays can be used in Music Festival, wedding, community campaign etc
            </p>
            <div className="mt-4">
              <a
                href="#"
                className="inline-block bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition duration-300"
              >
                Learn More <i className="ml-2 icon icon-right-arrow"></i>
              </a>
            </div>
          </div>
        </div>
        {/* Right Column: Image Section */}
        <div className="w-full lg:w-4/8 lg:ml-auto relative mt-8 lg:mt-0 p-5 flex items-center">
          <div className="relative w-full h-full flex justify-center items-center">
            <Image
              src={RentalImg}
              alt="Main Billboard Image"
              className="w-full h-60 rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Rental Led Screen End  */ }

  {/* Digital Display Start */ }
  <div className="container inset-0 mx-auto px-2 py-8">
    <div className="services-section">
      <div className="flex flex-wrap lg:flex-nowrap items-stretch">
        {/* Right Column: Image Section */}
        <div className="w-full lg:w-4/8 lg:mr-auto relative mt-8 lg:mt-0 p-5 flex items-center">
          <div className="relative w-full h-full flex justify-center items-center">
            <Image
              src={DigitalImg}
              alt="Main Billboard Image"
              className="w-full h-60 rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
        {/* Left Column: Text Section */}
        <div className="w-full lg:w-4/8 p-5 lg:pl-4 flex flex-col justify-between">
          <div className="about-text">
            <h1 className="text-black text-3xl font-bold leading-snug">
              Digital Display
            </h1>
            <p className="text-black mt-3 leading-relaxed">
              Digital Graphic Display is a popular choice for Digital Signage applications. The screens come with an in-built HD media player which requires no additional hardware. Various sizes of screens are available to your requirement.
            </p>
            <div className="mt-4">
              <a
                href="#"
                className="inline-block bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition duration-300"
              >
                Learn More <i className="ml-2 icon icon-right-arrow"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Digital Display End  */ }
  {/* Services Section End */ }


  {/* <!-- Features Section --> */ }
  <div className="container inset-0 mx-auto px-2 py-8  lg:px-12 lg:py-12 ">
    <div className="relative">
      <div className="text-center">
        <h3 className=" font-bold text-xl mb-2 mt-9">Our Features</h3>
        <h4 className="font-sans text-[30px] font-semibold  mb-5">
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
                <h3
                  className="font-sans font-semibold text-[24px] text-black text-center"
                  data-aos="fade-up"
                >
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
                  data-aos="fade-up"
                >
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
                <h3 className="font-sans font-bold text-[20px] text-black text-center mb-2">
                  Digital Light
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* <!-- Feature section end --> */ }

  {/* Gallery Section Start */ }
  <div className="container inset-0 mx-auto px-2 py-8  lg:px-12 lg:py-4">
    <div className="latest-gallery">
      <div className="text-center mb-10">
        <h1 className="text-sm text-white uppercase tracking-wider">
          Latest Gallery
        </h1>
        <h1 className="text-3xl text-white font-bold">
          Captivate Your Audience with Billboard Magic
        </h1>
      </div>

      {/*  First Row of Images  */}
      <div className="flex flex-wrap -mx-2">
        {/*  Image 1 */}
        <div
          className="w-full lg:w-4/12 px-2 mb-4"
          data-aos="zoom-in"
          data-aos-duration="2000"
        >
          <div className="relative overflow-hidden rounded-lg shadow-lg group">
            <Image
              src={GalleryImg1}
              alt="billboard1"
              className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <h3 className="text-white text-xl">
                Outdoor the Most Advertising
              </h3>
            </div>
          </div>
        </div>

        {/*  Image 2  */}
        <div
          className="w-full lg:w-5/12 px-2 mb-4"
          data-aos="zoom-out"
          data-aos-duration="2000"
        >
          <div className="relative overflow-hidden rounded-lg shadow-lg group">
            <Image
              src={GalleryImg2}
              alt="billboard1"
              className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <h3 className="text-white text-xl">
                Outdoor the Most Advertising
              </h3>
            </div>
          </div>
        </div>

        {/*  Image 3 */}
        <div
          className="w-full lg:w-3/12 px-2 mb-4"
          data-aos="zoom-out"
          data-aos-duration="2000"
        >
          <div className="relative overflow-hidden rounded-lg shadow-lg group">
            <Image
              src={GalleryImg3}
              alt="billboard1"
              className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <h3 className="text-white text-xl">
                Indoor the Most Advertising
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* Second Row of Images  */}
      <div className="flex flex-wrap -mx-2 mt-4">
        {/*  Image 4  */}
        <div
          className="w-full lg:w-4/12 px-2 mb-4"
          data-aos="zoom-in"
          data-aos-duration="2000"
        >
          <div className="relative overflow-hidden rounded-lg shadow-lg group">
            <Image
              src={GalleryImg4}
              alt="billboard1"
              className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <h3 className="text-white text-xl">Led Sign Board</h3>
            </div>
          </div>
        </div>

        {/*  Image 5  */}
        <div
          className="w-full lg:w-5/12 px-2 mb-4"
          data-aos="zoom-out"
          data-aos-duration="2000"
        >
          <div className="relative overflow-hidden rounded-lg shadow-lg group">
            <Image
              src={GalleryImg5}
              alt="billboard1"
              className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <h3 className="text-white text-xl">
                Outdoor the Most Advertising
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*  Gallery End  */ }

  {/* Contact Section Start */ }

  <div className="bg-gray-100 py-16">
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap">
        {/*  Contact Form Section */}
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Contact Us
          </h2>
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="p-3 border border-gray-300 rounded-lg w-full"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="p-3 border border-gray-300 rounded-lg w-full"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="p-3 border border-gray-300 rounded-lg w-full"
              />
              <select className="p-3 border border-gray-300 rounded-lg w-full">
                <option selected>Choose an Option</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
              <textarea
                placeholder="Message Here"
                className="p-3 border border-gray-300 rounded-lg w-full h-32"
              ></textarea>
            </div>
            <div>
              <a
                href="#"
                className="inline-flex items-center px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
              >
                Send Message
                <i className="fas fa-arrow-right ml-2"></i>
              </a>
            </div>
          </div>
        </div>

        {/*  Image Section  */}
        <div className="w-full lg:w-1/2">
          <Image
            src={ContactImg}
            alt="contactbillboard"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>

      {/*  Address Part  */}
      <div className="mt-16">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/3 flex items-center mb-6 lg:mb-0">
            <div className="bg-gray-200 p-4 rounded-full mr-4 flex-shrink-0">
              <i className="fas fa-phone-alt text-xl"></i>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Phone number</h3>
              <p>(225) 555-0118</p>
            </div>
          </div>
          <div className="w-full lg:w-1/3 flex items-center mb-6 lg:mb-0">
            <div className="bg-gray-200 p-4 rounded-full mr-4 flex-shrink-0">
              <i className="far fa-envelope text-xl"></i>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Email Address</h3>
              <p>michael.mitc@example.com</p>
            </div>
          </div>
          <div className="w-full lg:w-1/3 flex items-center">
            <div className="bg-gray-200 p-4 rounded-full mr-4 flex-shrink-0">
              <i className="fa fa-map-marker text-xl"></i>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Address</h3>
              <p>2715 Ash Dr. San Jose, South Dakota</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  {/* Contact Section End  */ }
    </>
  );
};

export default Home;
