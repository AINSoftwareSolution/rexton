import React from "react"
import Image from "next/image"
import Link from "next/link"
import Button from "@/app/components/Button"
import { ApplicationIndoorLed} from "@/app/utilis/images"


const Page = () => {
  return (
    <div className="container mx-auto px-4 mt-20">
      <div className="flex flex-wrap lg:flex-nowrap">
        {/* Left Column: Text Section */}
        <div className="w-full lg:w-5/12 p-4 lg:p-2 mb-5 mt-5">
          <h2 className="text-4xl font-bold mb-4">
            Indoor LED Displays
          </h2>
          <p className="mt-2">
          Indoor Led display is based on SMD Technology. Indoor Finest pitch provides Seamless high resolution starting from Pitch 1.25mm, P2, P2.5, P3, P3.91, P4, P4.8, P5, P6.Excellent design, Top Quality, Perfect visual performance, better colour consistency. It delivers an image which is super subtle and without getting tired after a long time watching. Super high refresh rate, high frame frequency, Serviceable modules allows easy maintenance, saving time and 16 Bit grey Grade processing the color transition will be more natural. Our LED indoor Display & led Video Walls are ideal for redeffning interior spaces, get noticed with Our LED&apos;s indoor video boards for retail locations & in-store display for advertising & promotions.
          </p>
          
          <div className="mt-3">
            <Button />
          </div>
        </div>

        {/* Right Column: Image and Stats Section */}
        <div className="w-full lg:w-7/12 lg:ml-8 mt-8 lg:mt-0 rounded-lg p-5">
        <video className="h-full w-full rounded-lg" controls autoPlay muted>
      <source src="/Indoor-LED.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
        </div>
      </div>
    
    {/* //  Application  */}
    <div className="text-4xl text-start font-bold mb-4 mt-5 px-4 ">Applications:
    </div>
    <div className="relative flex justify-center items-center px-4 pr-4 mt-4 mb-5">
            <Image
              src={ApplicationIndoorLed}
              alt="Main Billboard Image"
              className=" w-auto h-auto rounded-lg shadow-lg object-cover"
            />
          </div>
    </div>
  )
}

export default Page
