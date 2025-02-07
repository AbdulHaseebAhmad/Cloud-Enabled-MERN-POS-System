import { useState } from "react";
import { AgCharts } from "ag-charts-react";

const ChartExample = () => {
  const [options] = useState({
    title: {
      text: "Stock Distribution (Category)",
      color:"#1E3E62",
      fontWeight: "bold",

    },
    data: [
      { asset: "Apparel", amount: 10000 },
      { asset: "Home Decor", amount: 30000 },
      { asset: "Stationery", amount: 37000 },
      { asset: "Sports Equipment", amount: 25000 },
      { asset: "Beauty & Personal Care", amount: 23000 },
      { asset: "Automotive", amount: 20000 },
      { asset: "Toys & Games", amount: 12000 },
      { asset: "Healthcare", amount: 10000 },
      { asset: "Outdoor & Garden", amount: 30000 },
      { asset: "Books & Magazines", amount: 37000 },
      { asset: "Pet Supplies", amount: 25000 },
      { asset: "Jewelry & Watches", amount: 23000 },
      { asset: "Music & Instruments", amount: 20000 },
      { asset: "Office Supplies", amount: 12000 }
    ],    
    series: [
      {
        type: "pie",
        angleKey: "amount",
        calloutLabelKey: "asset",
        sectorLabelKey: "amount",
        sectorLabel: {
          color: "white",
          fontWeight: "bold",
          formatter: ({ value }) => `$${(value / 1000).toFixed(0)}K`,
        },
        fills: [
          "#FF6500",
          "#264653",
          "#073B4C",
          "#D62828",
          "#F4A261",
          "#1E3E62",
          "#0B192C",
          "#33425B",
          "#FFD166",
          "#118AB2",
          "#0B192C",
          "#1E3E62",
          "#A1AFC3",
          "#E2E8F0",
          "#F8FAFC",
          "#FF6500", 
          "#1E3E62",
          "#0B192C",
          "#A1AFC3",
          "#06D6A0",
          "#EF476F",
          "#8D99AE",
        ],
      },
    ],
  });
  return <AgCharts options={options} className="h-[400px] w-[30%] " />;
};

export default ChartExample;
