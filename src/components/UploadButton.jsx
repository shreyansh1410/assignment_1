import React from "react";
import uploadButtonImage from "/images/uploadButtonImage.png";

function UploadButton({ onImageUpload }) {
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        onImageUpload(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex">
      <label
        style={{
          overflow: "hidden",
          cursor: "pointer",
        }}
      >
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          style={{ display: "none" }}
        />
        <img
          className="w-40"
          src={uploadButtonImage}
          alt="upload"
          style={{
            transition: "transform 0.3s ease, opacity 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.1)";
            e.currentTarget.style.opacity = "0.8";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.opacity = "1";
          }}
        />
      </label>
    </div>
  );
}

export default UploadButton;
