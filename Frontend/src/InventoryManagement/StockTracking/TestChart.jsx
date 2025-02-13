import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDistribution } from "../Redux/Analytics/AnalyticsActions";
import { AgCharts } from "ag-charts-react";
import socket from "../../utilities/Socket-Connection";
import PropTypes from "prop-types";

const ChartExample = ({ onCategoryChange }) => {
  const dispatch = useDispatch();
  const stockDistributionData = useSelector((state) => state.AnalyticsReducer.distributionData);
  const stockDistributionLoading = useSelector((state) => state.AnalyticsReducer.distributionLoading);
  const stockDistributionMessage = useSelector((state) => state.AnalyticsReducer.distributionMessage);
  const [chartData, setCharData] = useState([]);

  useEffect(() => {
    dispatch(getDistribution());
  }, [dispatch]);

  useEffect(() => {
    if (stockDistributionData?.length > 0) {
      setCharData(stockDistributionData.map(({ name, stock }) => ({
        asset: name,
        amount: stock,
      })));
    }
  }, [stockDistributionData]);

  useEffect(() => {
    const handleStockChange = (message) => {
      dispatch(getDistribution());
      console.log("changesMadeToProducts", message);
    };
    socket.on("changesMadeToProducts", handleStockChange);

    return () => {
      socket.off("changesMadeToProducts", handleStockChange);
    };
  }, [socket, dispatch]);

  const options = {
    title: {
      text: "Stock Distribution (Category)",
      color: "#1E3E62",
      fontWeight: "bold",
    },
    data: chartData,
    series: [
      {
        type: "pie",
        angleKey: "amount",
        calloutLabelKey: "asset",
        sectorLabelKey: "amount",
        listeners: {
          nodeClick: (event) => {
            var datum = event.datum;
            onCategoryChange(datum["asset"]);
          }
        },
        sectorLabel: {
          color: "white",
          fontWeight: "bold",
        },
        fills: [
          "#FF6500", "#264653", "#073B4C", "#D62828", "#F4A261",
          "#1E3E62", "#0B192C", "#33425B", "#FFD166", "#118AB2",
          "#0B192C", "#1E3E62", "#A1AFC3", "#E2E8F0", "#F8FAFC",
          "#FF6500", "#1E3E62", "#0B192C", "#A1AFC3", "#06D6A0",
          "#EF476F", "#8D99AE"
        ],
      },
    ],
  };

  return (
    <>
      {chartData?.length > 0 ? (
        <AgCharts options={options} className="h-[400px] w-[30%]" />
      ) : (
        stockDistributionLoading ? (
          <p className="text-lg font-semibold text-gray-600 animate-pulse">Loading...</p>
        ) : (
          <p className="text-lg font-medium text-red-600">{stockDistributionMessage}</p>
        )
      )}
    </>
  );
};

export default ChartExample;

ChartExample.propTypes = {
  onCategoryChange: PropTypes.func.isRequired,  
};