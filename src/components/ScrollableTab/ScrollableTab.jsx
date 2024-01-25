import React, { useState, useEffect } from "react";
const ScrollableTab = () => {
    const [activeTab, setActiveTab] = useState(1);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isTabScrolling, setIsTabScrolling] = useState(false);
    const [isMainDeviceScrollEnabled, setIsMainDeviceScrollEnabled] = useState(true);
  
    const handleTabClick = (tabNumber) => {
      setActiveTab(tabNumber);
    };
  
    const handleScroll = (e) => {
      if (isTabScrolling) {
        e.preventDefault(); // Prevent main device scroll when tab scrolling is active
      }
  
      const delta = e.deltaY;
  
      if (delta > 0 && scrollPosition < 100) {
        // Scroll down and within the top content
        setScrollPosition((prevPosition) => prevPosition + 10);
      } else if (delta < 0 && scrollPosition > 0) {
        // Scroll up and within the top content
        setScrollPosition((prevPosition) => prevPosition - 10);
      } else if (delta > 0 && scrollPosition >= 100) {
        // Scroll down, switch to bottom content
        setScrollPosition(0);
        setActiveTab((prevTab) => (prevTab < 3 ? prevTab + 1 : prevTab));
        setIsTabScrolling(true);
      } else if (delta < 0 && scrollPosition <= 0) {
        // Scroll up, switch to top content
        setScrollPosition(100);
        setActiveTab((prevTab) => (prevTab > 1 ? prevTab - 1 : prevTab));
        setIsTabScrolling(true);
      }
    };
  
    const handleTabHoverScroll = () => {
      setIsTabScrolling(true);
      setIsMainDeviceScrollEnabled(false); // Disable main device scroll
    };
  
    const handleTabHoverEnd = () => {
      setIsTabScrolling(false);
      // Enable main device scroll after tab content is fully shown
      setIsMainDeviceScrollEnabled(true);
    };
  
    useEffect(() => {
      // Add event listener for mouse wheel scroll
      window.addEventListener('wheel', handleScroll);
  
      // Remove event listener on component unmount
      return () => {
        window.removeEventListener('wheel', handleScroll);
      };
    }, [scrollPosition, isTabScrolling]);
  
  return (
    <div className="container   mx-auto mt-8">
      <div
        className="flex  justify-center mb-4"
        onMouseEnter={handleTabHoverScroll} // Add mouse enter event for tab section
      >
        <div
          className={`cursor-pointer p-4 mx-2 rounded ${
            activeTab === 1 ? "bg-blue-500 text-white" : "bg-gray-300"
          }`}
          onClick={() => handleTabClick(1)}
        >
          Tab 1
        </div>
        <div
          className={`cursor-pointer p-4 mx-2 rounded ${
            activeTab === 2 ? "bg-blue-500 text-white" : "bg-gray-300"
          }`}
          onClick={() => handleTabClick(2)}
        >
          Tab 2
        </div>
        <div
          className={`cursor-pointer p-4 mx-2 rounded ${
            activeTab === 3 ? "bg-blue-500 text-white" : "bg-gray-300"
          }`}
          onClick={() => handleTabClick(3)}
        >
          Tab 3
        </div>
      </div>
      <div className="p-8 bg-gray-100">
        {activeTab === 1 && <p>Content for Tab 1</p>}
        {activeTab === 2 && <p>Content for Tab 2</p>}
        {activeTab === 3 && <p>Content for Tab 3</p>}
      </div>
    </div>
  );
};

export default ScrollableTab;
