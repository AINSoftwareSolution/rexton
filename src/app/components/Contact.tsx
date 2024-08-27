import React from "react";
import Image from "next/image";
import { ContactImg } from "../utilis/images";

const Contact = () => {
  return (
    <>
      <div className="relative bg-cover bg-center">
        <div className="absolute inset-0"></div>

        <div className="container mx-auto px-4 py-8 relative">
          <div className="flex flex-wrap">
            <div className="lg:w-5/12 md:w-full sm:w-full mb-8 lg:mb-0">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className=" text-center text-2xl font-bold mb-4">
                  Contact Info Details
                </h2>

                <ul className="space-y-4">
                  <li className="flex items-start space-x-4">
                    <div className="text-blue-500 text-2xl">
                      <svg
                        className="h-8 w-8 text-red-500"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        {" "}
                        <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </div>

                    <div>
                      <strong className="text-lg font-semibold">
                        Call Anytime
                      </strong>
                      <div className="text-gray-700">
                        8983555545 / 7066555565
                      </div>
                    </div>
                  </li>
                  <li className="flex items-start space-x-4">
                    <div className="text-blue-500 text-2xl">
                      <svg
                        className="h-8 w-8 text-red-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>

                    <div>
                      <strong className="text-lg font-semibold">
                        ALCON STYLUS
                      </strong>
                      <div className="text-gray-700">
                        A-803, Opposit Talab Factory, Katraj Kondhwa Bk., Pune -
                        48
                      </div>
                    </div>
                  </li>
                  <li className="flex items-start space-x-4">
                    <div className="text-blue-500 text-2xl">
                      <svg
                        className="h-8 w-8 text-red-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>

                    <div>
                      <strong className="text-lg font-semibold">
                        MANDARIN{" "}
                      </strong>
                      <div className="text-gray-700">
                        First Floor, Mapusa, Goa
                      </div>
                    </div>
                  </li>

                  <li className="flex items-start space-x-4">
                    <div className="text-blue-500 text-2xl">
                      <svg
                        className="h-8 w-8 text-red-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>

                    <div>
                      <strong className="text-lg font-semibold">PANIPAT</strong>
                      <div className="text-gray-700">
                        Gala No 4/5/6 Near Irfan Body Maker Risalu Road Panipat
                      </div>
                    </div>
                  </li>

                  <li className="flex items-start space-x-4">
                    <div className="text-blue-500 text-2xl">
                      <svg
                        className="h-8 w-8 text-red-500"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        {" "}
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />{" "}
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                    </div>

                    <div>
                      <strong className="text-lg font-semibold">
                        Email Address
                      </strong>{" "}
                      <br />
                      <a
                        className="text-blue-500 hover:underline"
                        href="mailto:Info@example.com"
                      >
                        rextonadvertising9@gmail.com / zaib@rextonadvertising.com
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="lg:w-7/12 md:w-full sm:w-full">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="contact-form-content">
                  <div className="text-center mb-8">
                    <span className="text-yellow-500 text-lg font-medium">
                      Contact with us
                    </span>
                    <h2 className="text-3xl font-bold mt-2">Send Message</h2>
                  </div>
                  <form
                    action="inc/sendemail.php"
                    className="contact-form space-y-4"
                  >
                    <input
                      type="text"
                      name="name"
                      placeholder="Your full name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none "
                    />
                    <input
                      type="text"
                      name="email"
                      placeholder="Your email address"
                      className="w-full px-4 py-3 border border-gray-300 focus:outline-none rounded-md  "
                    />
                    <textarea
                      name="message"
                      placeholder="Write your queries here!"
                      style={{ height: "185px" }}
                      className="w-full px-4 py-5 border border-gray-300 rounded-md focus:outline-none  "
                    ></textarea>
                  
                  </form>
                </div>

                <div className="mt-5">
                  <button
                    type="submit"
                    className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring"
                  >
                    Send Request
                  </button>
                </div>
              </div>
              <div className="wpcf7-response-output" aria-hidden="true"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
