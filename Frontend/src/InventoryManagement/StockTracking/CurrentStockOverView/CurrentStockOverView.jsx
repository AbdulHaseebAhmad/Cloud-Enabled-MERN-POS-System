import { useState, useEffect } from "react";
import CurrentStockChart from "./CurrentStockChart/CurrentStockChart";
import CurrentCriticalStockChart from "./CurrentStockChart/CurrentCriticalChart";

const CurrentStockOverview = () => {
  const [selected, setSelected] = useState("Category");
  const [general, setGeneral] = useState(true);
  const [critical, setCritical] = useState(false);
  const [stockValue, setStockValue] = useState(false);

  const categories = [
    { Category: "Electronics", quantity: 60000 },
    { Category: "Clothing", quantity: 40000 },
    { Category: "Foot Wear", quantity: 7000 },
    { Category: "Kitchen", quantity: 5000 },
    { Category: "Commodities", quantity: 3000 },
  ];

  const products = [
    { Product: "Iphone", quantity: 2000 },
    { Product: "Jeans", quantity: 8000 },
    { Product: "High Shoes", quantity: 10000 },
    { Product: "Spoons", quantity: 1000 },
    { Product: "Washing Powder", quantity: 33000 },
  ];

  const [criticalType, setCriticalType] = useState("");
  console.log(criticalType);
  const [options, setOptions] = useState({
    data: categories,
    title: {
      text: `Stock By ${selected}`,
    },
    series: [
      {
        type: "donut",
        calloutLabelKey: selected,
        angleKey: "quantity",
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

  useEffect(() => {
    setOptions((prevOptions) => ({
      ...prevOptions,
      data: selected === "Category" ? categories : products,
      title: {
        text: `Stock By ${selected}`,
      },
      series: prevOptions.series.map((seriesItem) => ({
        ...seriesItem,
        calloutLabelKey: selected,
      })),
    }));
  }, [selected]);

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
              onClick={() => {
                setSelected("Category");
                setGeneral(true);
                setCritical(false);
              }}
              className={`w-full ${
                selected === "Category"
                  ? "bg-d-primary-bg-color"
                  : "bg-d-primary-action-color"
              } text-white py-2 px-4 rounded-md`}
            >
              View By Category
            </button>

            {/* View By Product */}
            <button
              onClick={() => {
                setSelected("Product");
                setGeneral(true);
                setCritical(false);
              }}
              className={`w-full ${
                selected === "Product"
                  ? "bg-d-primary-bg-color"
                  : "bg-d-primary-action-color"
              } text-white py-2 px-4 rounded-md`}
            >
              View By Product
            </button>

            {/* View By Critical Dropdown */}
            <div className="w-full">
              <label className="block text-gray-700 mb-2">
                View By Critical
              </label>
              <select
                onChange={(e) => {
                  setGeneral(false);
                  setCritical(true);
                  setCriticalType(e.target.value);
                }}
                className="w-full bg-gray-200 border border-gray-300 py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select</option>
                <option value="category">Category</option>
                <option value="product">Product</option>
              </select>
            </div>

            {/* Stock Value Dropdown */}
            {/* {<div className="w-full">
              <label className="block text-gray-700 mb-2">Stock Value</label>
              <select
                onClick={() => {
                  setGeneral(false);
                  setStockValue(true);
                }}
                className="w-full bg-gray-200 border border-gray-300 py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select</option>
                <option value="category">Category</option>
                <option value="product">Product</option>
              </select>
            </div>} */}
          </div>
        </div>
        <div className="w-3/4">
          {general && <CurrentStockChart options={options} />}
          {critical && <CurrentCriticalStockChart type={criticalType} />}
        </div>
      </div>
    </div>
  );
};

export default CurrentStockOverview;
