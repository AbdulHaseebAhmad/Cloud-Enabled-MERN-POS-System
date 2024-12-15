import { AgCharts } from "ag-charts-react";

const CurrentCriticalStockChart = ({ type }) => {
  let options;

  console.log(type);
  options =
    type == "product"
      ? {
          title: {
            text: "Products Stock By Products",
          },
          data: [
            {
              xaxis: "Products",
              iphone: 140,
              mac: 16,
              ipad: 14,
              wearables: 12,
              services: 20,
              spoons: 12,
              saucers: 16,
              plates: 14,
              glasses: 12,
              "tea cups": 20,
            },
          ],
          series: [
            {
              type: "bar",
              xKey: "xaxis",
              yKey: "iphone",
              yName: "iPhone",
              stacked: false,
            },
            {
              type: "bar",
              xKey: "xaxis",
              yKey: "mac",
              yName: "Mac",
              stacked: false,
            },
            {
              type: "bar",
              xKey: "xaxis",
              yKey: "ipad",
              yName: "iPad",
              stacked: false,
            },
            {
              type: "bar",
              xKey: "xaxis",
              yKey: "wearables",
              yName: "Wearables",
              stacked: false,
            },
            {
              type: "bar",
              xKey: "xaxis",
              yKey: "services",
              yName: "Services",
              stacked: false,
            },
            //
            {
              type: "bar",
              xKey: "xaxis",
              yKey: "spoons",
              yName: "spoons",
              stacked: false,
            },
            {
              type: "bar",
              xKey: "xaxis",
              yKey: "plates",
              yName: "plates",
              stacked: false,
            },
            {
              type: "bar",
              xKey: "xaxis",
              yKey: "glasses",
              yName: "glasses",
              stacked: false,
            },
            {
              type: "bar",
              xKey: "xaxis",
              yKey: "tea cups",
              yName: "tea cups",
              stacked: false,
            },
            {
              type: "bar",
              xKey: "xaxis",
              yKey: "saucers",
              yName: "saucers",
              stacked: false,
            },
          ],
        }
      : {
          title: {
            text: "Products Stock By Category",
          },
          data: [
            {
              category: "Electronics",
              iphone: 140,
              mac: 16,
              ipad: 14,
              wearables: 12,
              services: 20,
            },
            {
              category: "Kitchen",
              spoons: 124,
              plates: 20,
              glasses: 14,
              forks: 12,
              "tea cups": 30,
              saucers: 10,
            },
          ],
          series: [
            {
              type: "bar",
              xKey: "category",
              yKey: "iphone",
              yName: "iPhone",
              stacked: true,
            },
            {
              type: "bar",
              xKey: "category",
              yKey: "mac",
              yName: "Mac",
              stacked: true,
            },
            {
              type: "bar",
              xKey: "category",
              yKey: "ipad",
              yName: "iPad",
              stacked: true,
            },
            {
              type: "bar",
              xKey: "category",
              yKey: "wearables",
              yName: "Wearables",
              stacked: true,
            },
            {
              type: "bar",
              xKey: "category",
              yKey: "services",
              yName: "Services",
              stacked: true,
            },
            //
            {
              type: "bar",
              xKey: "category",
              yKey: "spoons",
              yName: "spoons",
              stacked: true,
            },
            {
              type: "bar",
              xKey: "category",
              yKey: "plates",
              yName: "plates",
              stacked: true,
            },
            {
              type: "bar",
              xKey: "category",
              yKey: "glasses",
              yName: "glasses",
              stacked: true,
            },
            {
              type: "bar",
              xKey: "category",
              yKey: "tea cups",
              yName: "tea cups",
              stacked: true,
            },
            {
              type: "bar",
              xKey: "category",
              yKey: "saucers",
              yName: "saucers",
              stacked: true,
            },
          ],
        };

  return <AgCharts options={options} />;
};

export default CurrentCriticalStockChart;
