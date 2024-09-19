"use client";
import React, { useState } from "react";
import featuresData from "./featuresData";
import SingleFeature from "./SingleFeature";
import SectionHeader from "../Common/SectionHeader";

const Feature = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [displayCount, setDisplayCount] = useState(20); // State to track the number of displayed assets

  // Filter features based on search term
  const filteredFeatures = featuresData.filter(
    (feature) =>
      feature.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      feature.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Limit display to the current displayCount
  const displayedFeatures = filteredFeatures.slice(0, displayCount);

  // Function to handle "View More" click
  const handleViewMore = () => {
    setDisplayCount((prevCount) => prevCount + 20); // Increase the number of displayed assets by 20
  };

  return (
    <>
      {/* <!-- ===== Features Start ===== --> */}
      <section id="features" className="py-80 lg:py-25 xl:py-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <SectionHeader
            headerInfo={{
              title: "AgentDao Core Components",
              subtitle: "Welcoming New URL Assets",
              description: `Our network is ever-expanding, with new URL assets continuously onboarding into AgentDAO. Each agent starts with a base URL, serving as the root for its operations, all culminating with a .com. Here's a glimpse of our growing family:`,
            }}
          />

          <h4 className="mt-10 text-2xl font-semibold text-center text-primaryho dark:text-white md:w-4/5 xl:w-1/2 mx-auto mb-5">
            🏗️ Build. 💰 Invest. 📊 Manage. 💸 Monetize.
          </h4>
          {/* <!-- Section Title End --> */}

          {/* <!-- Search Bar and Total Assets Start --> */}
          <div className="flex justify-between items-center mb-2">
            <input
              type="text"
              placeholder="Search an asset..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              
            />
            <div className="ml-4 text-lg text-primaryho dark:text-white font-semibold">
              Total Assets ({filteredFeatures.length})
            </div>
          </div>
          {/* <!-- Search Bar and Total Assets End --> */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7.5 xl:gap-12.5 mt-10 lg:mt-10 xl:mt-10">
            {/* <!-- Features item Start --> */}
            {displayedFeatures.length > 0 ? (
              displayedFeatures.map((feature, key) => (
                <SingleFeature feature={feature} key={key} />
              ))
            ) : (
              <p className="text-center text-gray-500">No features found.</p>
            )}
            {/* <!-- Features item End --> */}
          </div>

          {/* <!-- View More Button Start --> */}
          {displayCount < filteredFeatures.length && (
            <div className="flex justify-center mt-10">
              <button
                onClick={handleViewMore}
                className="px-5 py-2 text-black bg-blue-500 rounded-lg hover:bg-blue-600 flex items-center"
              >
                View More
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-2"
                >
                  <path
                    d="M7 10.5L2.5 6L3.91 4.59L7 7.67L10.09 4.59L11.5 6L7 10.5Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </button>
            </div>
          )}
          {/* <!-- View More Button End --> */}
        </div>
      </section>

      {/* <!-- ===== Features End ===== --> */}
    </>
  );
};

export default Feature;
