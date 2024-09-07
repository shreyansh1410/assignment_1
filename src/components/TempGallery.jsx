import React, { useEffect, useState } from "react";
import UploadButton from "./UploadButton";
import SliderControls from "./SliderControls";
import "../assets/images/image.png";

function TempGallery() {
  const defaultImages = [
    "../assets/images/image.png",
    "../assets/images/image.png",
    "../assets/images/image.png",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [images, setImages] = useState(defaultImages);

  useEffect(() => {
    const storedImages =
      JSON.parse(localStorage.getItem("galleryImages")) || [];
    if (storedImages.length > 0) {
      setImages(storedImages);
    }
  }, []);

  const handleNext = () => {
    if (currentIndex < images.length - 3) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleImageUpload = (newImage) => {
    const updatedImages = [...images, newImage];
    setImages(updatedImages);
    localStorage.setItem("galleryImages", JSON.stringify(updatedImages));
  };

  return (
    <div
      className="rounded-lg p-4 shadow-lg mt-2 flex items-start w-full"
      style={{ backgroundColor: "#363c43" }}
    >
      <div className="leftDiv">
        <svg
          width="24"
          height="160"
          viewBox="0 0 24 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mr-4"
        >
          <path
            d="M13.3846 18C13.3846 18.2738 13.3034 18.5415 13.1513 18.7692C12.9991 18.9969 12.7829 19.1744 12.5299 19.2792C12.2769 19.384 11.9985 19.4114 11.7299 19.358C11.4613 19.3046 11.2146 19.1727 11.0209 18.9791C10.8273 18.7854 10.6954 18.5387 10.642 18.2701C10.5886 18.0015 10.616 17.7231 10.7208 17.4701C10.8256 17.2171 11.0031 17.0009 11.2308 16.8487C11.4585 16.6966 11.7262 16.6154 12 16.6154C12.3672 16.6154 12.7194 16.7613 12.9791 17.0209C13.2387 17.2806 13.3846 17.6328 13.3846 18ZM12 5.53846C9.45462 5.53846 7.38462 7.40192 7.38462 9.69231V10.1538C7.38462 10.3987 7.48187 10.6334 7.65498 10.8066C7.82809 10.9797 8.06288 11.0769 8.3077 11.0769C8.55251 11.0769 8.7873 10.9797 8.96041 10.8066C9.13352 10.6334 9.23077 10.3987 9.23077 10.1538V9.69231C9.23077 8.42308 10.4735 7.38461 12 7.38461C13.5265 7.38461 14.7692 8.42308 14.7692 9.69231C14.7692 10.9615 13.5265 12 12 12C11.7552 12 11.5204 12.0972 11.3473 12.2704C11.1742 12.4435 11.0769 12.6783 11.0769 12.9231V13.8462C11.0769 14.091 11.1742 14.3258 11.3473 14.4989C11.5204 14.672 11.7552 14.7692 12 14.7692C12.2448 14.7692 12.4796 14.672 12.6527 14.4989C12.8258 14.3258 12.9231 14.091 12.9231 13.8462V13.7631C15.0277 13.3765 16.6154 11.6977 16.6154 9.69231C16.6154 7.40192 14.5454 5.53846 12 5.53846ZM24 12C24 14.3734 23.2962 16.6934 21.9776 18.6668C20.6591 20.6402 18.7849 22.1783 16.5922 23.0865C14.3995 23.9948 11.9867 24.2324 9.65892 23.7694C7.33115 23.3064 5.19295 22.1635 3.51472 20.4853C1.83649 18.807 0.693605 16.6689 0.230582 14.3411C-0.232441 12.0133 0.00519941 9.60051 0.913451 7.4078C1.8217 5.21508 3.35977 3.34094 5.33316 2.02236C7.30655 0.703788 9.62663 0 12 0C15.1816 0.00335979 18.2319 1.26872 20.4816 3.51843C22.7313 5.76814 23.9966 8.81843 24 12ZM22.1538 12C22.1538 9.99176 21.5583 8.02861 20.4426 6.35882C19.3269 4.68903 17.7411 3.38759 15.8857 2.61907C14.0303 1.85055 11.9887 1.64947 10.0191 2.04126C8.04943 2.43305 6.24019 3.40011 4.82015 4.82015C3.40011 6.24019 2.43305 8.04943 2.04126 10.0191C1.64947 11.9887 1.85055 14.0303 2.61907 15.8857C3.38759 17.7411 4.68904 19.3269 6.35883 20.4426C8.02862 21.5583 9.99176 22.1538 12 22.1538C14.692 22.1508 17.2729 21.08 19.1765 19.1765C21.08 17.2729 22.1508 14.692 22.1538 12Z"
            fill="url(#paint0_linear_2267_3328)"
          />
          <rect
            y="129"
            width="9.31217"
            height="9.31217"
            rx="1.16402"
            fill="#4A4E54"
          />
          <rect
            x="10.6878"
            y="129"
            width="9.31217"
            height="9.31217"
            rx="1.16402"
            fill="#4A4E54"
          />
          <rect
            y="139.688"
            width="9.31217"
            height="9.31217"
            rx="1.16402"
            fill="#4A4E54"
          />
          <rect
            x="10.6878"
            y="139.688"
            width="9.31217"
            height="9.31217"
            rx="1.16402"
            fill="#4A4E54"
          />
          <rect
            y="150.376"
            width="9.31217"
            height="9.31217"
            rx="1.16402"
            fill="#4A4E54"
          />
          <rect
            x="10.6878"
            y="150.376"
            width="9.31217"
            height="9.31217"
            rx="1.16402"
            fill="#4A4E54"
          />
          <defs>
            <linearGradient
              id="paint0_linear_2267_3328"
              x1="19.5"
              y1="27.5"
              x2="3.5"
              y2="2"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A4E54" />
              <stop offset="1" stopColor="#A3ADBA" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="rightDiv flex-1 flex flex-col">
        <div className="topDiv flex items-center justify-between">
          <div className="leftDiv">
            <svg
              width="120"
              height="62"
              viewBox="0 0 149 62"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_i_19623_36)">
                <rect width="149" height="62" rx="20" fill="#171717" />
              </g>
              <text
                x="50%"
                y="50%"
                dominantBaseline="middle"
                textAnchor="middle"
                fill="white"
                fontSize="18"
                fontFamily="Arial, sans-serif"
              >
                Gallery
              </text>
              <defs>
                <filter
                  id="filter0_i_19623_36"
                  x="0"
                  y="0"
                  width="149"
                  height="66"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feMorphology
                    radius="2"
                    operator="erode"
                    in="SourceAlpha"
                    result="effect1_innerShadow_19623_36"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="5" />
                  <feComposite
                    in2="hardAlpha"
                    operator="arithmetic"
                    k2="-1"
                    k3="1"
                  />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="shape"
                    result="effect1_innerShadow_19623_36"
                  />
                </filter>
              </defs>
            </svg>
          </div>
          <div className="rightDivItems flex items-center space-x-2">
            <UploadButton onImageUpload={handleImageUpload} />
            <div className="relative">
              <SliderControls direction="left" onClick={handlePrevious} />
              <SliderControls direction="right" onClick={handleNext} />
            </div>
          </div>
        </div>
        <div className="bottomDiv p-1rem mt-4 py-10 flex-1 overflow-hidden">
          <div
            className="flex items-center"
            style={{ width: "calc(3 * 10rem)" }}
          >
            <div
              className="flex"
              style={{
                transform: `translateX(-${(currentIndex * 100) / 3}%)`,
                transition: "transform 0.3s ease",
              }}
            >
              {images.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Gallery Image ${index}`}
                  className="w-36 h-36 object-cover rounded-md"
                  style={{ marginRight: "8px" }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TempGallery;
