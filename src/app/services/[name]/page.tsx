"use client";
import Image from "next/image";
import { Button } from "@/app/components";
import { servicesData } from "@/app/utilis/data";
import { ApplicationIndoorLed, BannerImg2 } from "@/app/utilis/images";
import { useRouter } from "next/navigation";
import { features } from "process";

const ServiceDetails = ({ params }: { params: { name: string } }) => {
  const router = useRouter();
  const matchedService = servicesData.find(
    (service) => service.link.split("/").pop() === params.name
  );

  if (!matchedService) {
    if (typeof window !== "undefined") {
      router.push("/");
    }
    return null;
  }

  return (
    <>
      <div className="relative inset-0 h-80 w-full flex items-center justify-center text-center  banner">
        <Image
          src={BannerImg2}
          alt="Main Billboard Image"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="absolute inset-0 z-[-1]"
        />

        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center p-8">
          <h1 className="text-4xl font-bold text-white mb-4">
            {matchedService.title}
          </h1>

        </div>
      </div>
      <div className="container inset-0 mx-auto px-2 py-8 lg:px-12 lg:py-12">
        <div className="flex flex-wrap lg:flex-nowrap">
          {/* Left Column: Text Section */}
          <div className="w-full lg:w-5/12 p-4 lg:p-2 mb-5 mt-5">
            <h2 className="text-4xl font-bold mb-4">{matchedService.title}</h2>
            <p className="mt-2">{matchedService.fullDescription}</p>  
          </div>

          {/* Right Column: Image and Stats Section */}
          <div className="w-full lg:w-7/12 lg:ml-8 mt-8 lg:mt-0 rounded-lg p-5">
            {matchedService.video ? (
              <video className="h-full w-full rounded-lg" autoPlay muted>
                <source src={matchedService.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <Image src={matchedService.imgSrc} alt={matchedService.imgAlt} />
            )}
          </div>
        </div>

        {matchedService.applicationImg ? (
          <>
            {/* //  Application Section */}
            <div className="text-4xl text-start font-bold mb-4 mt-5 px-4">
              Applications:
            </div>
            <div className="relative flex justify-center items-center px-4 pr-4 mt-4 mb-5">
              <Image
                src={ApplicationIndoorLed}
                alt="Main Billboard Image"
                className="w-auto h-auto rounded-lg shadow-lg object-cover"
              />
            </div>
          </>
        ) : (
          <>
            <div className="grid gap-4 grid-cols-1 lg:grid-cols-3 px-4">
              {/* Row 1: Applications */}
              <div className="bg-red-100 p-4 rounded-lg shadow-lg">
                <h1 className="text-2xl font-bold mb-2 text-center mt-16">Applications:</h1>
                <ul className="list-disc list-inside mb-4">
                  {matchedService.applications.slice(8, 12).map((application, index) => (
                    <li key={index}>{application}</li>
                  ))}
                </ul>
              </div>

              <div className="bg-red-200 p-4 rounded-lg shadow-lg">

                <ul className="list-disc list-inside mb-3 mt-8">
                  {matchedService.applications.slice(0, 4).map((application, index) => (
                    <li key={index}>{application}</li>
                  ))}
                </ul>
              </div>

              <div className="bg-red-300 p-4 rounded-lg shadow-lg">

                <ul className="list-disc list-inside mb-3 mt-8">
                  {matchedService.applications.slice(4, 8).map((application, index) => (
                    <li key={index}>{application}</li>
                  ))}
                </ul>
              </div>

              {/* Row 2: Features */}
              <div className="bg-blue-100 p-4 rounded-lg shadow-lg">
                <h1 className="text-2xl font-bold mb-2 text-center mt-16">Features:</h1>
                <ul className="list-disc list-inside ">
                  {matchedService.features.slice(8, 12).map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="bg-blue-200 p-4 rounded-lg shadow-lg">
                <ul className="list-disc list-inside mb-3 mt-8">
                  {matchedService.features.slice(0, 4).map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="bg-blue-300 p-4 rounded-lg shadow-lg">
                <ul className="list-disc list-inside mb-3 mt-8">
                  {matchedService.features.slice(4, 8).map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          </>
        )}


      </div>
    </>
  );
};

export default ServiceDetails;
