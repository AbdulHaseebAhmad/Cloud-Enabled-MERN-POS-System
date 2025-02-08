import GlanceBox from "./Components/GlanceBox";
import { useState } from "react";
import {
  faDollarSign,
  faBoxesStacked,
  faTriangleExclamation,
  faChartLine,
  faReceipt,
  faUserTag,
  faRotateLeft,
} from "@fortawesome/free-solid-svg-icons";
import ChartExample from "./TestChart";
import ChartExample2 from "./TestChart2";
import StockPipeLine from "./StockPipeLine";
import ForeCastPortal from "./Modals/ForeCastPortal";

export default function StockTracking() {
  const stockGlanceData = [
    {
      dataTitle: "Total Stock",
      dataValue: "1,200 Items",
      dataIcon: faBoxesStacked,
    },
    {
      dataTitle: "Low Stock",
      dataValue: "5 Products",
      dataIcon: faTriangleExclamation,
    },
    {
      dataTitle: "Stock Turnover Rate ",
      dataValue: "$15,250",
      dataIcon: faDollarSign,
    },
    { dataTitle: "Dead Stock", dataValue: "Sneakers", dataIcon: faChartLine },
    {
      dataTitle: "Fast Moving Stock",
      dataValue: "Sneakers",
      dataIcon: faChartLine,
    },
  ];

  const salesGlanceData = [
    { dataTitle: "Total Sales", dataValue: "$15,250", dataIcon: faDollarSign },
    { dataTitle: "Average Order Value", dataValue: "$42", dataIcon: faReceipt },
    {
      dataTitle: "Best-Selling Product",
      dataValue: "Sneakers",
      dataIcon: faChartLine,
    },
    { dataTitle: "Sales Per Customer", dataValue: "$42", dataIcon: faUserTag },
    {
      dataTitle: "Returned Sales",
      dataValue: "5% Refund Rate",
      dataIcon: faRotateLeft,
    },
  ];

  const [activeTab, setActiveTab] = useState("stock");
  const [timeDuration, setTimeDuration] = useState("Today");
  const [showPortal, setShowPortal] = useState(false);
  const togglePortal = () => {
    setShowPortal(!showPortal);
  }
  return (
    <div className="w-full p-4">

      {showPortal && <ForeCastPortal onClose={togglePortal} />}
      <h1 className="text-3xl font-bold text-lt-primary-text-color mb-0">
        Stock Overview
      </h1>

      <div className="w-full p-4 bg-white rounded-2xl shadow-lg">
        <div className="flex justify-end items-center mb-4">
          <div className="flex gap-2">
            <select
              className="p-2 border rounded-lg"
              onChange={(e) => setTimeDuration(e.target.value)}
            >
              <option value="Today">Today</option>
              <option value="Weekly">Weekly</option>
              <option value="Monthly">Monthly</option>
              <option value="Last 6 Months">Last 6 Months</option>
              <option value="Yearly">Yearly</option>
            </select>
            <button
              className={`px-4 py-2 rounded-lg ${
                activeTab === "sales"
                  ? "bg-d-primary-action-color text-white"
                  : "bg-d-primary-bg-color text-white"
              }`}
              onClick={() => setActiveTab("sales")}
            >
              Sales
            </button>
            <button
              className={`px-4 py-2 rounded-lg ${
                activeTab === "stock"
                  ? "bg-d-primary-action-color text-white"
                  : "bg-d-primary-bg-color text-white"
              }`}
              onClick={() => setActiveTab("stock")}
            >
              Stock
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {activeTab === "stock"
            ? stockGlanceData.map((item, index) => (
                <GlanceBox key={index} {...item} timeDuration={timeDuration} />
              ))
            : salesGlanceData.map((item, index) => (
                <GlanceBox key={index} {...item} timeDuration={timeDuration} />
              ))}
        </div>
        <div className="w-full mt-4 min-h-[400px] border border-1 flex flex-wrap justify-center items-stretch">
          <ChartExample />
          <ChartExample2 />
        </div>
        <div className="w-full mt-4 min-h-[400px] border border-1 flex flex-wrap justify-center items-stretch pl-2 pr-2">
          <div className="p-4 flex justify-start items-center w-full">
              <p className="text-xl font-bold text-[#1E3E62]">Incoming Stock Pipeline</p>
          </div>
          <StockPipeLine togglePortal={togglePortal}/>
        </div>
      </div>
    </div>
  );
}
