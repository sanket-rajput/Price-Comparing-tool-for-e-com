"use client"
import { scrapeAndStoreProduct } from "@/lib/actions";
import { FormEvent, useState } from "react";

          const isValidProductURL = (url: string) => {
            try {
              const parsedURL = new URL(url);
              const hostname = parsedURL.hostname;
            
              if (
                hostname.includes('amazon.com') ||
                hostname.includes('amazon.') ||
                hostname.endsWith('amazon') ||
                hostname.includes('amzn') ||
                hostname.includes('flipkart.com') ||
                hostname.includes('flipkart') ||
                hostname.endsWith('flipkart')
              ) {
                console.log('valid url');
                return true;

              }
            } catch (error) {
              return false;
            }
          
            return false;
          };
          

const Searchbar = () => {
        const [searchPrompt, setSearchPrompt] = useState('');
        const [isLoading, setIsLoading] = useState(false);

        const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
          event.preventDefault();
          const isValidLink = isValidProductURL(searchPrompt);
        
          if (!isValidLink) return alert("Please provide a valid Amazon/Flipkart's product link");
        
          try {
            setIsLoading(true);

            // Scrape the product page
            const product = await scrapeAndStoreProduct(searchPrompt);
            // Process the scraped product data as needed
            console.log('Scraped product:', product);
          } catch (error) {
            console.log(error);
          } finally {
            setIsLoading(false);
          }
        };
      
      return (
        <form className="flex flex-wrap" onSubmit={handleSubmit}>
            <input
              type="text"
              value={searchPrompt}
              onChange={(e) => setSearchPrompt(e.target.value)}
              placeholder="Enter product link"
              className="searchbar-input"
              style={{
                border: '2px solid #a8a7a7', // Dark black 2px border
                padding: '8px 16px', // Adjust padding as needed
                paddingTop: '10px',
              }}
            />
          <button
            type="submit"
            className="searchbar-btn"
            disabled={searchPrompt === ''}
          >
            {isLoading ? 'Searching...' : 'Search'}
          </button>
        </form>
      );
};

<<<<<<< HEAD

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) =>{
        event.preventDefault();
        const isValidLink = isValidAmazonProductURL(searchPrompt);

        if(!isValidLink) return alert("Please provide a valid Amazon/Flipkart's product link")
    
        try {
          setIsLoading(true);
          
          // Scrape the product page
          const product = await scrapeAndStoreProduct(searchPrompt);
        } catch (error) {
          console.log(error);
        } finally {
          setIsLoading(false);
        }

    }


  return (
    <form className="flex flex-wrap" onSubmit={handleSubmit}
    
    style={{
    marginTop: '20px',}}>


    <input
    type="text"
    value={searchPrompt}
    onChange={(e) => setSearchPrompt(e.target.value)}
    placeholder="Enter product link"
    className="searchbar-input "

    style={{border: '1px solid #000',
    paddingTop: '16px',
    backgroundColor: 'rgba(255, 255, 255, 0.3)', // Adjust alpha value for transparency
    backdropFilter: 'blur(10px)', // Adjust the blur radius
    borderRadius: '5px',
    color: '#333', // Adjust text color
    transition: 'background-color 0.3s ease',
    }}

    />
    
    <button 
        type="submit" 
        className="searchbar-btn focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
        disabled={searchPrompt === ''}

      >
        {isLoading ? 'Searching...' : 'Search'}
      </button>
    </form>
    



  )



  
}

export default Searchbar
=======
export default Searchbar;
>>>>>>> e51cafb (Second commit, ui ux)
