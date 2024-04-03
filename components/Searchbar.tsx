"use client"
import { useRef, useEffect, useState } from 'react';

const Searchbar = () => {
  const [searchPrompt, setSearchPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const [isVisited, setIsVisited] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsVisited(true);

    // Your validation and submission logic here
    // ...

    setIsLoading(true);
    // Simulating an API call delay for 2 seconds (remove this in your actual code)
    setTimeout(() => {
      setIsLoading(false);
      alert(`Search submitted with input: ${searchPrompt}`);
    }, 2000);
  };

  useEffect(() => {
    if (inputRef.current && !isVisited) {
      inputRef.current.focus();
      inputRef.current.setSelectionRange(searchPrompt.length, searchPrompt.length);
    }
  }, [isVisited, searchPrompt]);

  return (
    <form className="flex items-center border rounded-lg overflow-hidden shadow-sm" onSubmit={handleSubmit}>
      <input
        type="text"
        value={searchPrompt}
        onChange={(e) => setSearchPrompt(e.target.value)}
        placeholder="Enter product link"
        className="py-2 px-4 w-full bg-transparent border-2 border-gray-300 rounded-l-lg outline-none focus:border-blue-500"
        ref={inputRef}
        onBlur={() => setIsVisited(false)}
      />
      <button
        type="submit"
        className="bg-black text-white py-2 px-4 rounded-r-lg hover:bg-gray-900"
        disabled={searchPrompt === ''}
      >
        {isLoading ? 'Searching...' : 'Search'}
      </button>
    </form>
  );
};

export default Searchbar;
