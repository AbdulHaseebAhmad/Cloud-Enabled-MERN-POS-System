import React, { useState, useEffect } from "react";
import CurrentStockChart from "./CurrentStockChart/CurrentStockChart";

const CurrentStockOverview = () => {
  const [selected, setSelected] = useState("category");

  const [options, setOptions] = useState({
    data: [
      { category: "Stocks", amount: 60000 },
      { category: "Bonds", amount: 40000 },
      { category: "Cash", amount: 7000 },
      { category: "Real Estate", amount: 5000 },
      { category: "Commodities", amount: 3000 },
    ],
    title: {
      text: `Stock By ${selected}`,
    },
    series: [
      {
        type: "donut",
        calloutLabelKey: "category",
        angleKey: "amount",
        innerRadiusRatio: 0.9,
        innerLabels: [
          {
            text: "Total Categories Stocked",
            fontWeight: "bold",
          },
          {
            text: "100",
            spacing: 4,
            fontSize: 48,
            color: "green",
          },
        ],
        innerCircle: {
          fill: "#c9fdc9",
        },
      },
    ],
  });

  // Use effect to update the options when the selected state changes
  useEffect(() => {
    setOptions((prevOptions) => ({
      ...prevOptions,
      title: {
        text: `Stock By ${selected}`,
      },
    }));
  }, [selected]); // This will trigger when `selected` changes

  return (
    <div className="flex flex-col justify-between items-start w-full h-full">
      {/* Main Content Area (Placeholder for graphs) */}
      <div className="flex-grow text-d-primary-bg-color sm:text-xl p-4">
        {/* Add your chart components here */}
        <h2 className="text-xl font-bold">Current Stock Overview</h2>
      </div>

      {/* Navbar */}
      <div className="w-full bg-white shadow-lg p-4 h-full flex">
        <div className="w-1/4">
          <h3 className="text-lg font-semibold mb-4">View Options</h3>
          <div className="space-y-4">
            {/* View By Category */}
            <button
              onClick={() => setSelected("category")}
              className={`w-full ${selected === "category" ? "bg-d-primary-bg-color" : "bg-d-primary-action-color"} text-white py-2 px-4 rounded-md`}
            >
              View By Category
            </button>

            {/* View By Product */}
            <button
              onClick={() => setSelected("product")}
              className={`w-full ${selected === "product" ? "bg-d-primary-bg-color" : "bg-d-primary-action-color"} text-white py-2 px-4 rounded-md`}
            >
              View By Product
            </button>

            {/* View By Critical Dropdown */}
            <div className="w-full">
              <label className="block text-gray-700 mb-2">View By Critical</label>
              <select
                className="w-full bg-gray-200 border border-gray-300 py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="category">Category</option>
                <option value="product">Product</option>
              </select>
            </div>

            {/* Stock Value Dropdown */}
            <div className="w-full">
              <label className="block text-gray-700 mb-2">Stock Value</label>
              <select
                className="w-full bg-gray-200 border border-gray-300 py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="category">Category</option>
                <option value="product">Product</option>
              </select>
            </div>
          </div>
        </div>
        <div className="w-3/4">
          <CurrentStockChart options={options} title="Selected" />
        </div>
      </div>
    </div>
  );
};

export default CurrentStockOverview;
