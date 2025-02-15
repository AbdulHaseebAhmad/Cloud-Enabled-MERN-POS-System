import GlanceBox from "./Components/GlanceBox";
import { useEffect, useState } from "react";
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
import ChartExample2 from "./Testchart2";
import StockPipeLine from "./StockPipeLine";
import ForeCastPortal from "./Modals/ForeCastPortal";
import { useDispatch, useSelector } from "react-redux";
import {
  getSalesLiveMetrics,
  getStockLiveMetrics,
} from "../Redux/Analytics/AnalyticsActions";
import socket from "../../utilities/Socket-Connection";

export default function StockTracking() {
  const liveMetrics = useSelector(
    (state) => state.AnalyticsReducer.liveMetricsData
  );

  const [selectedCategory, setSelectedCategory] = useState("Electronics");

  const [stockGlanceData, setStockGlanceData] = useState([
    {
      dataTitle: "Total Stock",
      dataValue: "No Availale Data",
      dataIcon: faBoxesStacked,
    },
    {
      dataTitle: "Low Stock",
      dataValue: "No Availale Data",
      dataIcon: faTriangleExclamation,
    },
    {
      dataTitle: "Stock Turnover",
      dataValue: "No Availale Data",
      dataIcon: faDollarSign,
    },
    {
      dataTitle: "Dead Stock",
      dataValue: "No Availale Data",
      dataIcon: faChartLine,
    },
    {
      dataTitle: "Fast Moving Stock",
      dataValue: "No Availale Data",
      dataIcon: faChartLine,
    },
  ]);

  const [salesGlanceData, setSalesGlanceData] = useState([
    {
      dataTitle: "Total Sales",
      dataValue: "No Available Data",
      dataIcon: faDollarSign,
    },
    {
      dataTitle: "Avg Order Value",
      dataValue: "No Available Data",
      dataIcon: faReceipt,
    },
    {
      dataTitle: "Best Product",
      dataValue: "No Available Data",
      dataIcon: faChartLine,
    },
    {
      dataTitle: "Sales Per Customer",
      dataValue: "No Available Data",
      dataIcon: faUserTag,
    },
    {
      dataTitle: "Returned Sales",
      dataValue: "No Available Data",
      dataIcon: faRotateLeft,
    },
  ]);

  const [activeTab, setActiveTab] = useState("stock");
  const [timeDuration, setTimeDuration] = useState("Today");
  const [showPortal, setShowPortal] = useState(false);

  const dispatch = useDispatch();

  const togglePortal = () => {
    setShowPortal(!showPortal);
  };

  useEffect(() => {
    if (activeTab === "sales") {
      dispatch(getSalesLiveMetrics());
    } else {
      dispatch(getStockLiveMetrics());
    }
}, [activeTab]);

  
  useEffect(() => {
    if (activeTab === "sales") {
      setSalesGlanceData((prevData) =>
        prevData.map((item) => ({
          ...item,
          dataValue: liveMetrics[item.dataTitle] || "No Available Data",
        }))
      );
    } else {
      setStockGlanceData((prevData) =>
        prevData.map((item) => ({
          ...item,
          dataValue: liveMetrics[item.dataTitle] || "No Available Data",
        }))
      );
    }
  }, [liveMetrics, activeTab]);

  useEffect(() => {
    const handleStockChange = () => {
        if (activeTab === "sales") {
            dispatch(getSalesLiveMetrics());
        } else {
            dispatch(getStockLiveMetrics());
        }
    };
    socket.on("changesMadeToProducts", handleStockChange);
    return () => {
        socket.off("changesMadeToProducts", handleStockChange);
    };
}, [socket, dispatch, activeTab]);  

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
                <GlanceBox key={index} dataValue={item.dataValue} dataIcon={item.dataIcon} dataTitle={item.dataTitle} timeDuration={timeDuration} />
              ))
            : salesGlanceData.map((item, index) => (
                <GlanceBox key={index} dataValue={item.dataValue} dataIcon={item.dataIcon} dataTitle={item.dataTitle} timeDuration={timeDuration} />
              ))}
        </div>
        <div className="w-full mt-4 min-h-[400px] border border-1 flex flex-wrap justify-center items-stretch">
          <ChartExample onCategoryChange={(category)=>setSelectedCategory(category)}/>
          <ChartExample2 selectedCategory={selectedCategory} />
        </div>
        <div className="w-full mt-4 min-h-[400px] border border-1 flex flex-wrap justify-center items-stretch pl-2 pr-2">
          <div className="p-4 flex justify-start items-center w-full">
            <p className="text-xl font-bold text-[#1E3E62]">
              Incoming Stock Pipeline
            </p>
          </div>
          <StockPipeLine togglePortal={togglePortal} />
        </div>
      </div>
    </div>
  );
}
