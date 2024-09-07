import React, { useState } from "react";
import SliderControls from "./SliderControls";

const images = [
  "/src/assets/images/image1.png",
  "/src/assets/images/image2.png",
  "/src/assets/images/image3.png",
  "/src/assets/images/image4.png",
  "/src/assets/images/image5.png",
];

function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < images.length - 3) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="relative overflow-hidden">
      <div
        className="flex space-x-4 transition-transform duration-500"
        style={{ transform: `translateX(-${(currentIndex * 100) / 3}%)` }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Gallery Image ${index + 1}`}
            className="w-1/3 h-64 object-cover rounded-md"
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;
