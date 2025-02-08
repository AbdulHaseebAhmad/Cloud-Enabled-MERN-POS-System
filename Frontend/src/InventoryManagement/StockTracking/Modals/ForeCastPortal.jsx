import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faArrowTrendUp, faCommentDollar } from "@fortawesome/free-solid-svg-icons";
import GlanceBox from "../Components/ForecastGlanceBox";

export default function ForeCastPortal({ onClose }) {
  const forecastGlanceData = [
    { dataTitle: "Projected Stock After Arrival", dataValue: 150, dataIcon: faArrowTrendUp, trendValue: "+20", trendDirection: "up" },
    { dataTitle: "Stock Depletion Rate", dataValue: "10 units/day", dataIcon: faArrowTrendUp, trendValue: "-5 units", trendDirection: "down" },
    { dataTitle: "Days Until Restock Arrives", dataValue: 5, dataIcon: faArrowTrendUp, trendValue: "5 days", trendDirection: "up" },
    { dataTitle: "Projected Sales Before Restock", dataValue: 50, dataIcon: faCommentDollar, trendValue: "+$200", trendDirection: "up" },
    { dataTitle: "Risk of Stockout", dataValue: "High", dataIcon: faArrowTrendUp, trendValue: "Stable", trendDirection: "up" },
    { dataTitle: "Optimal Reorder Quantity", dataValue: 200, dataIcon: faArrowTrendUp, trendValue: "+50", trendDirection: "up" },
    { dataTitle: "Lead Time Variance", dataValue: "+2 days (Delayed)", dataIcon: faArrowTrendUp, trendValue: "+1 day", trendDirection: "up" },
    { dataTitle: "Seasonal Demand Impact", dataValue: "Increase by 15% (Winter Sale)", dataIcon: faArrowTrendUp, trendValue: "+5%", trendDirection: "up" },
    { dataTitle: "Stock Turnover Rate", dataValue: "30 days", dataIcon: faArrowTrendUp, trendValue: "-2 days", trendDirection: "down" },
    { dataTitle: "Reorder Trigger Date", dataValue: "2025-02-10", dataIcon: faArrowTrendUp, trendValue: "+3 days", trendDirection: "up" },
    { dataTitle: "Expected Demand Surge", dataValue: "Black Friday Incoming", dataIcon: faArrowTrendUp, trendValue: "High", trendDirection: "up" },
    { dataTitle: "Supplier Reliability Score", dataValue: 4.2, dataIcon: faArrowTrendUp, trendValue: "+0.3", trendDirection: "up" },
    { dataTitle: "Stock Buffer Days", dataValue: 7, dataIcon: faArrowTrendUp, trendValue: "+1 day", trendDirection: "up" },
    { dataTitle: "Lost Sales Estimate", dataValue: "$500 if stockout occurs", dataIcon: faArrowTrendUp, trendValue: "-$200", trendDirection: "down" },
  ];

  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="relative overflow-auto max-h-[80%] bg-d-primary-bg-color text-d-primary-text-color w-[95%] sm:w-[80%] lg:w-[60%] p-8 rounded-2xl shadow-xl flex flex-col">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-semibold text-center text-white">Forecast</h2>
          <button
            className="text-white text-lg hover:text-red-500 transition duration-200"
            onClick={onClose}
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {forecastGlanceData.map((item, index) => (
            <GlanceBox key={index} {...item} timeDuration={'Weekly'} />
          ))}
        </div>
      </div>
    </div>,
    document.getElementById("portal-root")
  );
}
