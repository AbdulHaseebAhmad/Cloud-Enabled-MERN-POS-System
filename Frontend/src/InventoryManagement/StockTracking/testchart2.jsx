import { useState, useEffect } from "react";
import { AgCharts } from "ag-charts-react";
import { useSelector, useDispatch } from "react-redux";
import { getMonthlyTrendsData } from "../Redux/Analytics/AnalyticsActions";
import PropTypes from "prop-types";

const ChartExample2 = ({selectedCategory}) => {
  const monthlyTrends = useSelector((state) => state.AnalyticsReducer.MonthlyTrendsData);
  const dispatch = useDispatch();
  const [cd, setCd] = useState([]);

  useEffect(() => {
    dispatch(getMonthlyTrendsData());
  }, [dispatch]);

  useEffect(() => {
    if (monthlyTrends.length > 0) {
      const filteredData = monthlyTrends
  .filter((item) => item.category === selectedCategory); 
      setCd(filteredData);}
  }, [monthlyTrends,selectedCategory]);

  const options = {
    title: {
      text: "Depletion Trend by Month (Category)",
      color: "#1E3E62",
      fontWeight: "bold",
    },
    data: cd,
    series: [
      {
        type: "area",
        xKey: "month",
        yKey: "sales",
        yName: "Sales",
        fill: "#FF6500",
      },
      {
        type: "area",
        xKey: "month",
        yKey: "netSales",
        yName: "Net Sales",
        fill: "#1E3E62",
      },
      {
        type: "area",
        xKey: "month",
        yKey: "refund",
        yName: "Refund",
        fill: "#A1AFC3",
      },
      {
        type: "line",
        xKey: "month",
        yKey: "totalStock",
        yName: "Total Stock",
        stroke: "#E2E8F0",
      },
    ],
  };

  return <AgCharts options={options} style={{ width: "70%", minWidth: "500px" }} />;
};

export default ChartExample2;

ChartExample2.propTypes = {
  selectedCategory: PropTypes.string.isRequired,
};