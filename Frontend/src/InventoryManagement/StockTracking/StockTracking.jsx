import  { useState } from "react";
import Alert from "./Alert/Alert"; // Import the Alert component
import CurrentStockOverview from "./CurrentStockOverView/CurrentStockOverView"; 
// import PeriodicStockOverview from "./PeriodicStockOverview"; // Import the periodic stock view component
// import UpdateStock from "./UpdateStock"; // Import the update stock component

const StockTracking = () => {
  const [activeView, setActiveView] = useState("currentStock"); // State to manage active view

  const alerts = [
    {
      id: 1,
      alertType: "lowStock",
      message: "Product B is low in stock (5 units)",
    },
    {
      id: 2,
      alertType: "lowStockOrderPlaced",
      message: "Order for Product B has been placed.",
    },
    {
      id: 3,
      alertType: "lowStockOrderPending",
      message: "Order for Product D is pending.",
    },
    {
      id: 4,
      alertType: "recentlyStocked",
      message: "Product A has been restocked.",
    },
  ];

  return (
    <div className="p-6">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
        <h2 className="text-xl sm:text-2xl font-bold  text-d-primary-bg-color mb-2 sm:mb-0">
          Stock Management
        </h2>
        <button
          onClick={() => setActiveView("updateStock")}
          className="bg-lt-primary-action-color dark:bg-d-primary-action-color text-white py-2 px-4 rounded-md hover:bg-lt-primary-bg-color dark:hover:bg-d-secondary-bg-color"
        >
          Edit Stock
        </button>
      </div>

      {/* Navigation Tabs */}
      <div className="flex space-x-4 mb-4">
        <button
          onClick={() => setActiveView("currentStock")}
          className={`py-2 px-4 rounded-md ${
            activeView === "currentStock"
              ? "bg-lt-primary-action-color text-white"
              : "bg-lt-primary-bg-color text-lt-primary-text-color"
          } hover:bg-lt-primary-action-color hover:text-white transition duration-200`}
        >
          Current Stock
        </button>
        <button
          onClick={() => setActiveView("periodicStock")}
          className={`py-2 px-4 rounded-md ${
            activeView === "periodicStock"
              ? "bg-lt-primary-action-color text-white"
              : "bg-lt-primary-bg-color text-lt-primary-text-color"
          } hover:bg-lt-primary-action-color hover:text-white transition duration-200`}
        >
          Periodic Stock Overview
        </button>
        <button
          onClick={() => setActiveView("updateStock")}
          className={`py-2 px-4 rounded-md ${
            activeView === "updateStock"
              ? "bg-lt-primary-action-color text-white"
              : "bg-lt-primary-bg-color text-lt-primary-text-color"
          } hover:bg-lt-primary-action-color hover:text-white transition duration-200`}
        >
          Update Stock
        </button>
      </div>

      {/* Alerts Section */}
      <div className="flex flex-wrap gap-4 mb-4">
        {alerts.map((alert) => (
          <Alert key={alert.id} alertType={alert.alertType} message={alert.message} />
        ))}
      </div>

      {/* Content Display */}
      <div className="mt-6">
        {activeView === "currentStock" && <CurrentStockOverview />}
        {activeView === "periodicStock" && "<PeriodicStockOverview />"}
        {activeView === "updateStock" && "<UpdateStock />"}
      </div>
    </div>
  );
};

export default StockTracking;
