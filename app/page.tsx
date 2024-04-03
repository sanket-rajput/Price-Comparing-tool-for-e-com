import React from 'react'
import Image from 'next/image'
import Searchbar from "@/components/Searchbar"
import HeroCarouselFull from '@/components/HeroCarouselFull'
import Footer from '@/components/Footer'

const Home = () => {
  return (
    <>
    <section className="px-6 md:px-20 py-24 bg-cyan-500	 text-white ">
      <div className='flex max-xl:flex-col gap-16'>
        <div className='flex flex-col justify-center'>

          <p className="small-text"> 
          Smart Shopping Starts Here!

          <Image
          src="/assets/icons/arrow-right.svg"
          alt="arrow-right"
          width={16}
          height={16}
          />
          </p>


          <h1 className='head-text text-white '>
          
            Unleash the power of
          
          <span className="text-red-500"> PriseWise</span>
        </h1>

          <p className="mt-6">
          Explore, compare, and save effortlessly with our handpicked price comparisons. <br/>Your destination for unlocking the best deals, making shopping a breeze.

          </p>
          <Searchbar/>

         

          <div className="mt-8">

         
          <div className="my-9">
            <Searchbar/>
         </div>
         <blockquote className="mt-5 text-lg italic font-medium text-gray-600">
            <p>
              "Smart spending is about more than what you buy"
            </p>
            <cite className="block text-right mt-2 text-sm font-normal text-gray-500">
              - Anonymous
            </cite>
          </blockquote>

          
        </div>
        <div style={{ borderRadius: '50px',
         padding: '50px' }}>
        <HeroCarouselFull/>

        </div>
      </div>
     
        <HeroCarouselFull/> 
        
      </div>

    </section>


    <section className="bg-blue-500	 text-white ">

    <HeroCarouselFull/>

    </section>

    <section className="trending-section">
    <h2 className="section-text">Trending</h2>
    <div className="flex flex-wrap gap-x-8 gap-y-16">
      {['Apple Iphone 15', 'Book', 'Sneakers'].map((product) => (
        <div>{product}</div>
      ))}
    </div>
    </section>
    
    <Footer/> 
    
    
    </>
  )
}

export default Home