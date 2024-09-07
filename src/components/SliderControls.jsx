import React from "react";

function SliderControls({ direction, onClick  }) {
  return (
    <button
      aria-label={direction}
      className="rounded-full transition-colors"
      style={{
        backgroundColor: "transparent", // Initial background color
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.1)"; // Darken on hover
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = "transparent"; // Revert on hover out
      }}
      onClick={onClick} // Attach the onClick handler
    >
      {direction === "left" ? (
        <svg
          width="75"
          height="75"
          viewBox="0 0 75 75"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_dd_19623_51)">
            <circle
              cx="37.5"
              cy="37.5"
              r="15"
              fill="url(#paint0_linear_19623_51)"
            />
          </g>
          <path
            d="M30.4022 37.3765H44.5967"
            stroke="#6F787C"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M37.4022 44.3765L30.4022 37.3765L37.4022 30.3765"
            stroke="#6F787C"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <defs>
            <filter
              id="filter0_dd_19623_51"
              x="0"
              y="0"
              width="75"
              height="75"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feMorphology
                radius="3"
                operator="dilate"
                in="SourceAlpha"
                result="effect1_dropShadow_19623_51"
              />
              <feOffset dx="3" dy="3" />
              <feGaussianBlur stdDeviation="10" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.0628125 0 0 0 0 0.0697768 0 0 0 0 0.075 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_19623_51"
              />
              <feMorphology
                radius="7"
                operator="erode"
                in="SourceAlpha"
                result="effect2_dropShadow_19623_51"
              />
              <feOffset dx="-3" dy="-2" />
              <feGaussianBlur stdDeviation="10" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.587708 0 0 0 0 0.745938 0 0 0 0 0.904167 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="effect1_dropShadow_19623_51"
                result="effect2_dropShadow_19623_51"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect2_dropShadow_19623_51"
                result="shape"
              />
            </filter>
            <linearGradient
              id="paint0_linear_19623_51"
              x1="20.8264"
              y1="20.366"
              x2="53.1147"
              y2="55"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#303439" />
              <stop offset="1" stopColor="#161718" />
            </linearGradient>
          </defs>
        </svg>
      ) : (
        <svg
          width="75"
          height="75"
          viewBox="0 0 75 75"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_dd_19623_46)">
            <circle
              cx="37.5"
              cy="37.5"
              r="15"
              fill="url(#paint0_linear_19623_46)"
            />
          </g>
          <path
            d="M44.5968 37.3765H30.4024"
            stroke="#6F787C"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M37.5968 30.3765L44.5968 37.3765L37.5968 44.3765"
            stroke="#6F787C"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <defs>
            <filter
              id="filter0_dd_19623_46"
              x="0"
              y="0"
              width="75"
              height="75"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feMorphology
                radius="3"
                operator="dilate"
                in="SourceAlpha"
                result="effect1_dropShadow_19623_46"
              />
              <feOffset dx="3" dy="3" />
              <feGaussianBlur stdDeviation="10" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.0628125 0 0 0 0 0.0697768 0 0 0 0 0.075 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_19623_46"
              />
              <feMorphology
                radius="7"
                operator="erode"
                in="SourceAlpha"
                result="effect2_dropShadow_19623_46"
              />
              <feOffset dx="-3" dy="-2" />
              <feGaussianBlur stdDeviation="10" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.587708 0 0 0 0 0.745938 0 0 0 0 0.904167 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="effect1_dropShadow_19623_46"
                result="effect2_dropShadow_19623_46"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect2_dropShadow_19623_46"
                result="shape"
              />
            </filter>
            <linearGradient
              id="paint0_linear_19623_46"
              x1="20.8264"
              y1="20.366"
              x2="53.1147"
              y2="55"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#303439" />
              <stop offset="1" stopColor="#161718" />
            </linearGradient>
          </defs>
        </svg>
      )}
    </button>
  );
}

export default SliderControls;
