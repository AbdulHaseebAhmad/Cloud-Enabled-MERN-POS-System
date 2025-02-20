import GlanceBox from "../../InventoryManagement/StockTracking/Components/GlanceBox";
import { useEffect, useState } from "react";
import {
  faDollarSign,
  faChartLine,
  faReceipt,
  faUserTag,
  faRotateLeft,
  faBoxOpen
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductMetrics,

} from "../../InventoryManagement/Redux/Analytics/AnalyticsActions";
import socket from "../../utilities/Socket-Connection";
import ProductTable from "./ProductTable/ProductTable";
import AddProductModal from "./ProductModal/AddProductModal";
import { clearProductDetails, fetchProductToUpdate } from "../../InventoryManagement/Redux/Product/ProductActions";
import EditProductModal from "./ProductModal/EditProductModal";

export default function ProductManagement() {
  const liveMetrics = useSelector(
    (state) => state.AnalyticsReducer.liveMetricsData
  );

useEffect(()=>{
  console.log(liveMetrics);

},[liveMetrics])


  const [stockGlanceData, setStockGlanceData] = useState([
    {
      dataTitle:"Total Products",
      dataValue:"No Available Data",
      dataIcon:faBoxOpen,
    },
    {
      dataTitle: "Total Inv. Value",
      dataValue: "No Available Data",
      dataIcon: faDollarSign,
    },
    {
      dataTitle: "Avg Product Price",
      dataValue: "No Available Data",
      dataIcon: faReceipt,
    },
    {
      dataTitle: "New Products",
      dataValue: "No Available Data",
      dataIcon: faChartLine,
    },
    {
      dataTitle: "Fast Moving",
      dataValue: "No Available Data",
      dataIcon: faUserTag,
    },
    
    {
      dataTitle: "Dead Products",
      dataValue: "No Available Data",
      dataIcon: faRotateLeft,
    },
    {
      dataTitle: "Out-of-Stock",
      dataValue: "No Available Data",
      dataIcon: faRotateLeft,
    },
  ]);

  const [activeTab, setActiveTab] = useState("stock");
  const [timeDuration, setTimeDuration] = useState("Today");
  const [showPortal, setShowPortal] = useState(false);
  const [showEditPortal,setShowEditPortal] = useState(false);
  const [pId,setPid] = useState("");

  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getProductMetrics(timeDuration));
  
  },[timeDuration])
  const togglePortal = () => {
    dispatch(clearProductDetails());
    setShowPortal(!showPortal);
  };

  const toggleEditPortal = (id) => {
    setPid(id);
    dispatch(fetchProductToUpdate(id))
    setShowEditPortal(!showEditPortal);
  }


  useEffect(() => {
    setStockGlanceData((prevData) =>
      prevData.map((item) => ({
        ...item,
        dataValue: liveMetrics[item.dataTitle] || "No Available Data",
      }))
    );
  }, [liveMetrics, activeTab]);

  useEffect(() => {
    const handleStockChange = () => {
      if (activeTab === "sales") {
        dispatch(getProductMetrics(timeDuration));
      } else {
        dispatch(getProductMetrics(timeDuration));
      }
    };
    socket.on("changesMadeToProducts", handleStockChange);
    return () => {
      socket.off("changesMadeToProducts", handleStockChange);
    };
  }, [socket, dispatch, activeTab,timeDuration]);


  return (
    <div className="w-full p-4">
      {showPortal && <AddProductModal onClose={togglePortal} />}
      {showEditPortal && <EditProductModal onClose={toggleEditPortal} id={pId}/> }
      <h1 className="text-3xl font-bold text-lt-primary-text-color mb-0">
        Product Management
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
        <div className="overflow-x-auto scrollbar-hide py-1 ">
          <div className="inline-grid grid-flow-col auto-cols-[minmax(250px,_1fr)] gap-4">
            {activeTab === "stock" &&
              stockGlanceData.map((item, index) => (
                <GlanceBox
                  key={index}
                  dataValue={item.dataValue}
                  dataIcon={item.dataIcon}
                  dataTitle={item.dataTitle}
                  timeDuration={timeDuration}
                />
              ))}
          </div>
        </div>

        <div className="w-full mt-4 min-h-[400px] border border-1 flex flex-wrap justify-center items-stretch pl-2 pr-2">
          <div className="p-4 flex justify-between items-center w-full">
            <h3 className="text-2xl font-bold text-[#1E3E62]">
             Product List
            </h3>
            <button
              onClick={togglePortal}
              className="bg-lt-primary-action-color dark:bg-d-primary-action-color text-white py-2 px-2 rounded-md hover:bg-lt-primary-bg-color dark:hover:bg-d-secondary-bg-color"
            >
              Add Product
            </button>
          </div>
          <ProductTable setShowEditPortal={toggleEditPortal} />
        </div>
      </div>
    </div>
  );
}
