"use client";
import Image from "next/image";
import { Button } from "@/app/components";
import { servicesData } from "@/app/utilis/data";
import { ApplicationIndoorLed } from "@/app/utilis/images";
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
    <div className="container inset-0 mx-auto px-2 py-8 lg:px-12 lg:py-12 mt-20">
      <div className="flex flex-wrap lg:flex-nowrap">
        {/* Left Column: Text Section */}
        <div className="w-full lg:w-5/12 p-4 lg:p-2 mb-5 mt-5">
          <h2 className="text-4xl font-bold mb-4">{matchedService.title}</h2>
          <p className="mt-2">{matchedService.fullDescription}</p>
          <div className="mt-3">
            <Button />
          </div>
        </div>

        {/* Right Column: Image and Stats Section */}
        <div className="w-full lg:w-7/12 lg:ml-8 mt-8 lg:mt-0 rounded-lg p-5">
          {matchedService.video ? (
            <video className="h-full w-full rounded-lg" autoPlay muted>
              <source src="/Indoor-LED.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <Image src={matchedService.imgSrc} alt={matchedService.imgAlt} />
          )}
        </div>
      </div>

      {matchedService.applicationImg ? (
        <>
          {/* //  Application  */}
          <div className="text-4xl text-start font-bold mb-4 mt-5 px-4 ">
            Applications:
          </div>
          <div className="relative flex justify-center items-center px-4 pr-4 mt-4 mb-5">
            <Image
              src={ApplicationIndoorLed}
              alt="Main Billboard Image"
              className=" w-auto h-auto rounded-lg shadow-lg object-cover"
            />
          </div>
        </>
      ) : (
        <>
          <div className="grid gap-4 grid-cols-3">
            <div className="w-full lg:w-1/2">
              <h1 className="text-2xl font-bold mb-2">Applications:</h1>
              <ul className="list-disc list-inside mb-4">
                {matchedService.applications.map((application, index) => (
                  <li key={index}>{application}</li>
                ))}
              </ul>
            </div>
            <div className="w-full lg:w-1/2">
              <h1 className="text-2xl font-bold mb-2">Features:</h1>
              <ul className="list-disc list-inside">
                {matchedService.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        </>
      )}

    </div>
  );
};

export default ServiceDetails;
