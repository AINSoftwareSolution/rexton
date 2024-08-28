import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Button from '@/app/components/Button'
import { OutdoorLed, ApplicationOutdoor} from '@/app/utilis/images'


const Page = () => {
  return (
    <div className="container mx-auto px-4 mt-20">
      <div className="flex flex-wrap lg:flex-nowrap">
        {/* Left Column: Text Section */}
        <div className="w-full lg:w-5/12 p-4 lg:p-2 mb-5 mt-5">
          <h2 className="text-4xl font-bold mb-4">
            Outdoor LED Displays
          </h2>
          <p className="mt-2">
            Outdoor LED displays are based on DIP and SMD technology. Outdoor pitch are P 2.5, P3, P3.91, P 4, P 4.8, P 5, P6, P8, P10. The outdoor LED's we choose we use Nationstar that have the high reliability and contrast, wide view angle and good consistency which meet the need of high brightness, high refresh rate, high greyscale. To achieve the best visual performance of our indoor and outdoor led display, we use the best driving IC such as MBI 5124,6124,5024 grey level latest technology. All models in outdoor as IP68 waterproof standard. No extra cooling or heating system is needed during the working period. A completed solution with both Front and rear service, The Energy saving modules, an average consumption as low as 200 watts/m2 High Brightness from 6500-8000 MCD(Nits) with Nationstar, Epistar,
            Quangli, and Kingslite LED chips and driving IC.
          </p>
          
          <div className="mt-3">
            <Button />
          </div>
        </div>

        {/* Right Column: Image and Stats Section */}
        <div className="w-full lg:w-7/12 lg:ml-8 mt-8 lg:mt-0 rounded-lg p-5">
          <div className="relative flex justify-center items-center">
            <Image
              src={OutdoorLed}
              alt="Main Billboard Image"
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    
    {/* //  Application  */}
    <div className='text-4xl text-start font-bold mb-4 mt-5 px-4'>Applications:
    </div>
    <div className="relative flex justify-center items-center px-4 pr-4 mt-4 mb-5">
            <Image
              src={ApplicationOutdoor}
              alt="Main Billboard Image"
              className=" h-auto rounded-lg shadow-lg object-cover"
            />
          </div>
    </div>
  )
}

export default Page
