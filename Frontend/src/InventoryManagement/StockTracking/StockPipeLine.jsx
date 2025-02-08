"use client";

import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import "./RestockPipeline.css"; // Custom styles for AG Grid
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartSimple } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
ModuleRegistry.registerModules([AllCommunityModule]);

const StockPipeLine = ({ togglePortal }) => {
  const columnDefs = [
    { headerName: "Product", field: "product", sortable: true, filter: true },
    {
      headerName: "Incoming Stock",
      field: "incomingStock",
      sortable: true,
      filter: true,
    },
    {
      headerName: "Current Stock",
      field: "currentStock",
      cellRenderer: (params) => {
        const stock = parseInt(params.value, 10);
        if (stock < 100) {
          return <div className="critical-restock">{stock} Critical</div>;
        } else if (stock < 200) {
          return <div className="status-pending">{stock} Low Stock</div>;
        } else {
          return <div className="status-arrived">{stock} Regular</div>;
        }
      },
      sortable: true,
      filter: true,
    },

    {
      headerName: "Estimated Arrival",
      field: "estimatedArrival",
      sortable: true,
      filter: true,
    },
    {
      headerName: "Restock Status",
      field: "restockStatus",
      sortable: true,
      cellRenderer: (params) => {
        const status = params.value.toLowerCase();
        switch (status) {
          case "critical":
            return (
              <div className="critical-restock">
                <span>Critical</span>
              </div>
            );
          case "pending":
            return <div className="status-pending">Pending</div>;
          case "in transit":
            return <div className="status-in-transit">In Transit</div>;
          case "arrived":
            return <div className="status-arrived">Arrived</div>;
          case "delayed":
            return <div className="status-delayed">Delayed</div>;
          default:
            return "";
        }
      },
    },
    {
      headerName: "Forecast",
      field: "foreCast",
      cellRenderer: () => {
        return (
          <button
            onClick={() => {
              togglePortal();
            }}
          >
            <FontAwesomeIcon
              icon={faChartSimple}
              style={{ color: "#1E3E62" }}
            />
          </button>
        );
      },
    },
    {
      headerName: "Total Incoming Stock Value",
      field: "stockValue",
      sortable: true,
      filter: true,
    },
  ];

  const rowData = [
    {
      product: "Product A",
      incomingStock: 200,
      estimatedArrival: "2025-02-15",
      currentStock: 50,
      restockStatus: "In Transit",
      stockValue: "$1200",
    },
    {
      product: "Product B",
      incomingStock: 500,
      estimatedArrival: "2025-02-20",
      currentStock: 200,
      restockStatus: "Arrived",
      stockValue: "$3000",
    },
    {
      product: "Product C",
      incomingStock: 150,
      estimatedArrival: "2025-02-18",
      currentStock: 75,
      restockStatus: "Critical",
      stockValue: "$900",
    },
    {
      product: "Product D",
      incomingStock: 300,
      estimatedArrival: "2025-02-25",
      currentStock: 50,
      restockStatus: "Delayed",
      stockValue: "$1800",
    },
    {
      product: "Product E",
      incomingStock: 100,
      estimatedArrival: "2025-02-22",
      currentStock: 30,
      restockStatus: "Pending",
      stockValue: "$600",
    },
    {
      product: "Product F",
      incomingStock: 250,
      estimatedArrival: "2025-02-28",
      currentStock: 100,
      restockStatus: "In Transit",
      stockValue: "$1500",
    },
    {
      product: "Product G",
      incomingStock: 400,
      estimatedArrival: "2025-03-01",
      currentStock: 150,
      restockStatus: "Arrived",
      stockValue: "$2400",
    },
    {
      product: "Product H",
      incomingStock: 350,
      estimatedArrival: "2025-03-05",
      currentStock: 120,
      restockStatus: "Critical",
      stockValue: "$2100",
    },
    {
      product: "Product I",
      incomingStock: 450,
      estimatedArrival: "2025-03-10",
      currentStock: 200,
      restockStatus: "Delayed",
      stockValue: "$2700",
    },
    {
      product: "Product J",
      incomingStock: 600,
      estimatedArrival: "2025-03-15",
      currentStock: 250,
      restockStatus: "Pending",
      stockValue: "$3600",
    },
    {
      product: "Product K",
      incomingStock: 700,
      estimatedArrival: "2025-03-20",
      currentStock: 300,
      restockStatus: "In Transit",
      stockValue: "$4200",
    },
    {
      product: "Product L",
      incomingStock: 800,
      estimatedArrival: "2025-03-25",
      currentStock: 350,
      restockStatus: "Arrived",
      stockValue: "$4800",
    },
    {
      product: "Product M",
      incomingStock: 900,
      estimatedArrival: "2025-03-30",
      currentStock: 400,
      restockStatus: "Critical",
      stockValue: "$5400",
    },
    {
      product: "Product N",
      incomingStock: 1000,
      estimatedArrival: "2025-04-05",
      currentStock: 450,
      restockStatus: "Delayed",
      stockValue: "$6000",
    },
    {
      product: "Product O",
      incomingStock: 1100,
      estimatedArrival: "2025-04-10",
      currentStock: 500,
      restockStatus: "Pending",
      stockValue: "$6600",
    },
  ];

  return (
    <div
      className="restock-pipeline-section"
      style={{ width: "100%", paddingBottom: "20px" }}
    >
      <div id="myGrid" className="ag-theme-alpine">
        <AgGridReact
          columnDefs={columnDefs}
          rowData={rowData}
          pagination={true}
          paginationPageSize={10}
          domLayout="autoHeight"
        />
      </div>
    </div>
  );
};

export default StockPipeLine;

StockPipeLine.propTypes = {
  togglePortal: PropTypes.func.isRequired,
};
