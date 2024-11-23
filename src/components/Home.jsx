

import React, { useState } from "react";

// Images (import your images here)
import img1 from "../assets/carousel-1.jpg";
import img2 from "../assets/carousel-2.jpg";

const images = [
  { src: img1, text: "BEST IT SOLOTIONS" },
  { src: img2, text: "Explore More Features" },

];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false); // To handle animation timing

  // Handle next image
  const handleNext = () => {
    if (isSliding) return; // Prevent spamming buttons
    setIsSliding(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
      setIsSliding(false);
    }, 500); // Duration should match the animation timing
  };

  // Handle previous image
  const handlePrev = () => {
    if (isSliding) return; // Prevent spamming buttons
    setIsSliding(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
      setIsSliding(false);
    }, 500); // Duration should match the animation timing
  };

  return (
    <div className="relative w-full h-auto max-h-screen overflow-hidden brightness-50">
      {/* Image Container */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`, // Slide effect
        }}
      >
        {images.map((image, index) => (
          <div key={index} className="relative flex-shrink-0 w-full ">
            {/* Image */}
            <img
              src={image.src}
              alt={`Slide ${index}`}
              className="w-full h-auto max-h-screen object-cover"
            />

            {/* Text Overlay */} 
            <div className="absolute bottom-96 left-96  ">
              <h2 className="text-2xl font-bold  justify-center text-black m-16 ml-60 brightness-200">{image.text}</h2>
              
              <h1 className="text-4xl font-bold justify-around text-white brightness-200">Quality Digital Services You Really Need!</h1>
            </div>
          </div>
        ))}
      </div>

      {/* Left Arrow */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-5 transform -translate-y-1/2 bg-blue-500 text-white p-4 rounded-full hover:bg-blue-700 transition"
      >
        &#9664; {/* Left Arrow Icon */}
      </button>

      {/* Right Arrow */}
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-5 transform -translate-y-1/2 bg-blue-500 text-white p-4 rounded-full hover:bg-blue-700 transition"
      >
        &#9654; {/* Right Arrow Icon */}
      </button>

      {/* Optional: Add Indicators */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-4 h-4 rounded-full cursor-pointer ${
              currentIndex === index ? "bg-blue-500" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;


