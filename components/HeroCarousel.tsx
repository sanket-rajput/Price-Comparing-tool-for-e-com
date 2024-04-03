"use client"

  
  import "react-responsive-carousel/lib/styles/carousel.min.css";
  import { Carousel } from 'react-responsive-carousel';
  import Image from "next/image";
  
  const heroImages = [
    // Your image data here...{ imgUrl: '/assets/images/h12.jpg', alt: 'kanha', width: 720, height: 720 },
    { imgUrl: '/assets/images/h0.jpg', alt: 'sanket', width: 1268, height: 1268 },
    
    { imgUrl: '/assets/images/h5.jpg', alt: 'sanket', width: 2048, height: 2048 },
    { imgUrl: '/assets/images/h6.jpg', alt: 'sanket', width: 1664, height: 1664 },
    { imgUrl: '/assets/images/h7.jpg', alt: 'sanket', width: 1664, height: 1664 },
    { imgUrl: '/assets/images/h8.jpg', alt: 'sanket', width: 1664, height: 1664 },
    { imgUrl: '/assets/images/h9.jpg', alt: 'sanket', width: 2048, height: 2048 },
    { imgUrl: '/assets/images/h1.jpg', alt: 'sanket', width: 1351, height: 1351 },
    { imgUrl: '/assets/images/h2.jpg', alt: 'sanket', width: 1552, height: 1552 },
    { imgUrl: '/assets/images/h3.jpg', alt: 'sanket', width: 1548, height: 1548 },
    { imgUrl: '/assets/images/h4.jpg', alt: 'sanket', width: 872, height: 872 },
    { imgUrl: '/assets/images/h10.jpg', alt: 'sanket', width: 1664, height: 1664 },
    { imgUrl: '/assets/images/h11.jpg', alt: 'sanket', width: 2048, height: 2048 },
  ];
  
  const HeroCarousel = () => {
    return (
      <div className="heroCarousel rounded" style={{ maxWidth: '500px', maxHeight: '500px' , borderRadius: '10px'}}>
        <Carousel
          showThumbs={false}
          autoPlay
          infiniteLoop
          interval={1000}
          showArrows={false}
          showStatus={false}
        >
                {heroImages.map((image, index) => (
                    <div key={index} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                          <Image 
                            src={image.imgUrl}
                            alt={image.alt}
                            width={200}
                            height={200}
                            style={{ objectFit: 'cover' }}
                            className="object-contain"
                          />
                    </div>
                ))}
        </Carousel>
      </div>
    );
  };
  
  export default HeroCarousel;
  
