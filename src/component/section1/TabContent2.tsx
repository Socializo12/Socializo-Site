"use client";
import { useState } from "react";

const tabs = [
  {
    id: "tab1",
    label: "Overview",
    content: (
      <div>
        <p>This is the overview tab content.</p>
        <button
          className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
          onClick={() => alert("Overview Button Clicked")}
        >
          Click Me
        </button>
      </div>
    ),
  },
  {
    id: "tab2",
    label: "Features",
    content: (
      <div>
        <p>Here are some cool features you should check out.</p>
        <button
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          onClick={() => alert("Features Button Clicked")}
        >
          Explore
        </button>
      </div>
    ),
  },
  {
    id: "tab3",
    label: "Pricing",
    content: (
      <div>
        <p>Explore our pricing plans suitable for all teams.</p>
        <button
          className="mt-4 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition"
          onClick={() => alert("Pricing Button Clicked")}
        >
          View Plans
        </button>
      </div>
    ),
  },
];

export default function TabContent2() {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <div className="w-full max-w-3xl mx-auto py-10 px-4">
      {/* Tab Headers */}
      <div className="flex gap-4 border-b border-gray-700 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`py-2 px-4 text-sm font-medium transition-all duration-300 ease-in-out ${
              activeTab === tab.id
                ? "border-b-2 border-green-500 text-green-500"
                : "text-gray-400 hover:text-white"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="min-h-[120px] transition-all duration-500 ease-in-out text-white">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`transition-opacity duration-500 ${
              activeTab === tab.id
                ? "opacity-100 block"
                : "opacity-0 hidden"
            }`}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
}
