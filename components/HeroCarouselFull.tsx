"use client"

  
  import "react-responsive-carousel/lib/styles/carousel.min.css";
  import { lazy } from 'react';

  import { Carousel } from 'react-responsive-carousel';
  import Image from "next/image";
  
  const heroImages = [
    // Your image data here...{ imgUrl: '/assets/images/h12.jpg', alt: 'kanha', width: 720, height: 720 },
    { imgUrl: '/assets/images/f1.png', alt: 'sanket', width: 1200, height: 400 },
    
    { imgUrl: '/assets/images/f2.png', alt: 'sanket', width: 1200, height: 400 },
    
  ];
  
  const HeroCarouselFull = () => {
    return (
      <div>
        <Carousel
          showThumbs={false}
          autoPlay
          infiniteLoop
          interval={2000}
          showArrows={false}
          showStatus={false}
        >
                {heroImages.map((image, index) => (
                    <div key={index} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                          <Image 
                            src={image.imgUrl}
                            alt={image.alt}
                            width="1200"
                            height="400"
                            loading="eager"
                            
                            style={{ objectFit: 'cover' }}
                            className="object-contain"
                          />
                    </div>
                ))}
        </Carousel>
      </div>
    );
  };
  
  export default HeroCarouselFull;
  
