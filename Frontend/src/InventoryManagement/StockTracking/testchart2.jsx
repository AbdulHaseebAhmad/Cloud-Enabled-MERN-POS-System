import { useState } from "react";
import { AgCharts } from "ag-charts-react";

const ChartExample = () => {
  const [options] = useState({
    title: {
      text: "Depletion Trend by Month (Category)",
      color:"#1E3E62",
      fontWeight: "bold",

    },
    data: [
        { month: "Jan", refund: -50, sales: 200, netSales: 150, totalStock: 500 },
        { month: "Feb", refund: -40, sales: 310, netSales: 270, totalStock: 480 },
        { month: "Mar", refund: -10, sales: 195, netSales: 185, totalStock: 460 },
        { month: "Apr", refund: -10, sales: 205, netSales: 195, totalStock: 440 },
        { month: "May", refund: -1, sales: 215, netSales: 214, totalStock: 420 },
        { month: "Jun", refund: -20, sales: 200, netSales: 180, totalStock: 400 },
        { month: "Jul", refund: -0, sales: 225, netSales: 225, totalStock: 375 },
        { month: "Aug", refund: -2, sales: 210, netSales: 208, totalStock: 355 },
        { month: "Sep", refund: -0, sales: 350, netSales: 350, totalStock: 325 },
        { month: "Oct", refund: -3, sales: 150, netSales: 147, totalStock: 320 },
        { month: "Nov", refund: -0, sales: 215, netSales: 215, totalStock: 300 },
        { month: "Dec", refund: -30, sales: 500, netSales: 497, totalStock: 270 }
      ]
      ,
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
  });

  return <AgCharts options={options} style={{ width: "70%" , minWidth:'500px'}} />;
};

export default ChartExample;
