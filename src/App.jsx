import React, { useState } from "react";
import TabNavigation from "./components/TabNavigation";
import TempGallery from "./components/TempGallery";

function App() {
  const [activeTab, setActiveTab] = useState("aboutMe");

  return (
    <div className="max-h-screen text-white bg-gradient-black flex justify-center items-center p-1">
      <div className="flex w-full h-screen items-center px-4 lg:px-16">
        {/* Left empty space */}
        <div className="lg:w-1/2 hidden lg:block"></div>

        {/* Right content area */}
        <div className="flex flex-col lg:w-1/2">
          {/* TabNavigation with a defined height */}
          <div className="relative ps-8 pe-3 rounded-xl max-h-40 bottom-10">
            <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
          </div>

          {/* Divider */}
          <div className="w-10/12 my-5 divider h-1 rounded-sm mx-auto bg-gray-600 relative top-20"></div>

          {/* TempGallery */}
          <div className="relative ps-8 pe-3 rounded-xl top-16">
            <TempGallery />
          </div>

          {/* Divider */}
          <div className="w-10/12 my-5 divider h-1 rounded-sm mx-auto bg-gray-600 relative top-14"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
