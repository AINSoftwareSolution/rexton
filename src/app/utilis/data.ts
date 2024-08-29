import { Button } from "../components";
import { ApplicationIndoorLed, ApplicationOutdoor, ClientImage1, ClientImage10, ClientImage2, ClientImage3, ClientImage4, ClientImage5, ClientImage6, ClientImage7, ClientImage8, ClientImage9, DigitalImg, FeatureImg1, FeatureImg2, FeatureImg3, GalleryImg1, GalleryImg2, GalleryImg3, GalleryImg4, GalleryImg5, IndoorLed, OutdoorLed, RentalImg } from "./images";

export const featuresData = [
    {
      src: FeatureImg1,
      alt: 'billboard1',
      title: 'Outdoor Billboard',
    },
    {
      src: FeatureImg2,
      alt: 'billboard2',
      title: 'Indoor Billboard',
    },
    {
      src: FeatureImg3,
      alt: 'billboard3',
      title: 'Digital Light',
    },
  ]

  export const galleryData = [
    {
      src: GalleryImg1,
      alt: 'billboard1',
      title: 'Outdoor the Most Advertising',
      aos: 'zoom-in',
      widthClass: 'lg:w-4/12',
    },
    {
      src: GalleryImg2,
      alt: 'billboard2',
      title: 'Indoor the Most Advertising',
      aos: 'zoom-out',
      widthClass: 'lg:w-5/12',
    },
    {
      src: GalleryImg3,
      alt: 'billboard3',
      title: 'Digital Display',
      aos: 'zoom-out',
      widthClass: 'lg:w-3/12',
    },
    {
      src: GalleryImg4,
      alt: 'billboard4',
      title: 'Led Sign Board',
      aos: 'zoom-in',
      widthClass: 'lg:w-4/12',
    },
    {
      src: GalleryImg5,
      alt: 'billboard5',
      title: 'Rental the Most Advertising',
      aos: 'zoom-out',
      widthClass: 'lg:w-5/12',
    },
  ]


 export  const servicesData = [
    {
      title: 'Outdoor LED Screens',
      description:
        'Outdoor LED displays utilize DIP and SMD technology, with pitch options like P2.5, P3, P3.91, P4, P4.8, P5, P6, P8, and P10. Our outdoor LEDs, including Nationstar, offer high reliability, contrast, wide viewing angles, and excellent consistency.',
      fullDescription:' Outdoor LED displays are based on DIP and SMD technology. Outdoor pitch are P 2.5, P3, P3.91, P 4, P 4.8, P 5, P6, P8, P10. The outdoor LED&apos;s we choose we use Nationstar that have the high reliability and contrast, wide view angle and good consistency which meet the need of high brightness, high refresh rate, high greyscale. To achieve the best visual performance of our indoor and outdoor led display, we use the best driving IC such as MBI 5124,6124,5024 grey level latest technology. All models in outdoor as IP68 waterproof standard. No extra cooling or heating system is needed during the working period. A completed solution with both Front and rear service, The Energy saving modules, an average consumption as low as 200 watts/m2 High Brightness from 6500-8000 MCD(Nits) with Nationstar, Epistar,Quangli, and Kingslite LED chips and driving IC.',
      link: "/service/outdoor-led-screens",  
      video: "/outdoor-video.mp4",
      imgSrc: OutdoorLed,
      applicationImg: ApplicationOutdoor,
      imgAlt: 'Main Billboard Image',
      reverse: false,
    },
    {
      title: 'Indoor LED Screens',
      description:
        'Indoor LED display is based on SMD Technology. Indoor Finest pitch provides seamless high resolution starting from Pitch 1.25mm, P2, P2.5, P3, P3.91, P4, P4.8, P5, P6. Excellent design, top quality, perfect visual performance, better color consistency.',
      fullDescription:' Indoor Led display is based on SMD Technology. Indoor Finest pitch provides Seamless high resolution starting from Pitch 1.25mm, P2, P2.5, P3, P3.91, P4, P4.8, P5, P6.Excellent design, Top Quality, Perfect visual performance, better colour consistency. It delivers an image which is super subtle and without getting tired after a long time watching. Super high refresh rate, high frame frequency, Serviceable modules allows easy maintenance, saving time and 16 Bit grey Grade processing the color transition will be more natural. Our LED indoor Display & led Video Walls are ideal for redeffning interior spaces, get noticed with Our LED&apos;s indoor video boards for retail locations & in-store display for advertising & promotions.',
      link: "/services/indoor-led-motion",  
      video: "/Indoor-LED.mp4",
      applicationImg: ApplicationIndoorLed,
      imgSrc: IndoorLed,
      imgAlt: 'Main Billboard Image',
      reverse: true,
    },
    {
      title: 'Rental LED Screens',
      description:
        'LED Rental series has both Indoor and Outdoor rental LED displays. Indoor rental displays can be used in exhibition centers, hotel halls, conferences, school functions, live telecasts of sports, meetings, etc. Outdoor rental displays can be used in music festivals, weddings, community campaigns, etc.',
      fullDescription: 'LED Rental series has both Indoor and Outdoor rental led display. Indoor rental led display can be used in exhibition centers, hotel halls, conferences, School-college Function, Live telecast of sports, meetings etc. Outdoor rental displays can be used in Music Festival, wedding, community campaign etc. These LED cabinets are made of Aluminum Die-cast which are light weight, easy to carry simpler and faster for disassembling and assembling in events. Rental LED Screens, Led mobile vans are customised on Vehicle which are widely used for Corporate Road shows, Political campaign Government Awareness Programs. These vehicles come with Hydraulic which can attract more Audience',
      link: "/service/rental-led-screens",  
      applicationImg: ApplicationIndoorLed,
      imgSrc: RentalImg,
      imgAlt: 'Main Billboard Image',
      reverse: false,
    },
    {
      title: 'Digital Display',
      description:
        'Digital Graphic Display is a popular choice for digital signage applications. The screens come with an in-built HD media player which requires no additional hardware. Various sizes of screens are available to meet your requirements.',
      fullDescription: 'Digital Graphic Display is a popular choice for Digital Signage applications. The screens come with an in-built HD media player which requires no additional hardware. Various sizes of screens are available to your requirement. A button less tempered glass frontage on the digital screen display adds to the elegant look.        These screens are commercial grade display systems which have been designed for constant use and have exceptional brightness. Each screen is supplied with free scheduling software allowing you to design your advertising message and set scrolling text to play at different times of day. The displays also include inbuilt speakers and HDMI/VGA inputs for connecting to other media sources. DGDs modern screens also run on Android/Widows platform, with super slim proffles, making them the most striking displays on the market. DGDs also have Touch based screens for interactive purposes.',
      link: "/services/digital-displays",  
      applications: ["Malls", "Retail Stores", "Hotels","Airpot", "Multiplexes", "Offices", "Events", "Hospitals"],
      features: ["Sleek & Stylish Design", "Commercial Grade Display", "Auto Timer On / Off Functions", "Image and Video Playback","Slide Show Timer", "Auto Looping", "24*7 Playback", "Auto Looping"],
      imgSrc: DigitalImg,
      imgAlt: 'Main Billboard Image',
      reverse: true,
    },
  ]

 export const clientImages = [
    { src: ClientImage1, alt: 'Client 1', width: 120, height: 80 },
    { src: ClientImage2, alt: 'Client 2', width: 208, height: 80 },
    { src: ClientImage3, alt: 'Client 3', width: 208, height: 80 },
    { src: ClientImage4, alt: 'Client 4', width: 208, height: 80 },
    { src: ClientImage5, alt: 'Client 5', width: 208, height: 80 },
    { src: ClientImage6, alt: 'Client 6', width: 208, height: 80 },
    { src: ClientImage7, alt: 'Client 7', width: 208, height: 80 },
    { src: ClientImage8, alt: 'Client 8', width: 208, height: 80 },
    { src: ClientImage9, alt: 'Client 9', width: 208, height: 80 },
    { src: ClientImage10, alt: 'Client 10', width: 208, height: 80 },
  ]