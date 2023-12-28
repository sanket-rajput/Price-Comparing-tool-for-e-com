"use client"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from "next/image";

const heroImages = [
    { imgUrl: '/assets/images/hero-1.jpg', alt: 'kanha'},
    { imgUrl: '/assets/images/hero-2.png', alt: 'sanket'},
  ]

const HeroCarousel = () => {
  return (
    <div className="heroCarousel">
        <Carousel
          showThumbs={false}
          autoPlay
          infiniteLoop
          interval={4000}
          showArrows={false}
          showStatus={false}
        
        >
           {heroImages.map((image) => (
            <Image 
            src={image.imgUrl}
            alt={image.alt}
            width={140}
            height={250}
            className="object-contain"
            key={image.alt}
             />
           ))}
        </Carousel>
        <Image 
        src="assets/icons/hand-drawn-arrow.svg"
        alt="arrow"
        width={175}
        height={175}
        className="max-xl:hidden absolute -left-[15%] bottom-0 z-0"
      />
    </div>
  )
}

export default HeroCarousel