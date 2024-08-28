import { ClientImage1, ClientImage10, ClientImage2, ClientImage3, ClientImage4, ClientImage5, ClientImage6, ClientImage7, ClientImage8, ClientImage9, DigitalImg, FeatureImg1, FeatureImg2, FeatureImg3, GalleryImg1, GalleryImg2, GalleryImg3, GalleryImg4, GalleryImg5, IndoorLed, OutdoorLed, RentalImg } from "./images";

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
      imgSrc: OutdoorLed,
      imgAlt: 'Main Billboard Image',
      reverse: false,
    },
    {
      title: 'Indoor LED Screens',
      description:
        'Indoor LED display is based on SMD Technology. Indoor Finest pitch provides seamless high resolution starting from Pitch 1.25mm, P2, P2.5, P3, P3.91, P4, P4.8, P5, P6. Excellent design, top quality, perfect visual performance, better color consistency.',
      imgSrc: IndoorLed,
      imgAlt: 'Main Billboard Image',
      reverse: true,
    },
    {
      title: 'Rental LED Screens',
      description:
        'LED Rental series has both Indoor and Outdoor rental LED displays. Indoor rental displays can be used in exhibition centers, hotel halls, conferences, school functions, live telecasts of sports, meetings, etc. Outdoor rental displays can be used in music festivals, weddings, community campaigns, etc.',
      imgSrc: RentalImg,
      imgAlt: 'Main Billboard Image',
      reverse: false,
    },
    {
      title: 'Digital Display',
      description:
        'Digital Graphic Display is a popular choice for digital signage applications. The screens come with an in-built HD media player which requires no additional hardware. Various sizes of screens are available to meet your requirements.',
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