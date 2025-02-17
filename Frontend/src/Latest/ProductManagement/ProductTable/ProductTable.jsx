"use client";
import { AgGridReact } from "ag-grid-react";
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
import { useEffect, useState } from "react";
ModuleRegistry.registerModules([AllCommunityModule]);
import {
  deleteProduct,
  getProducts,
} from "../../../InventoryManagement/Redux/Product/ProductActions";
import { useDispatch, useSelector } from "react-redux";
import "../../../InventoryManagement/StockTracking/RestockPipeline.css"; 
import socket from "../../../utilities/Socket-Connection";

export default function ProductTable() {
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  const product = useSelector((state) => state.ProductReducer.data);

  const dispatch = useDispatch();
  const deleteProductHandle = (id) => {
    socket.emit("changesMadeToProducts", "Product Deleted");
    dispatch(deleteProduct(id));
  };
  const [rowData, setRowData] = useState(product);

  useEffect(() => {
    setRowData(product);
  }, [product]);

  const [colDefs] = useState([
    { field: "Product Name", sortable: true, filter: true },
    { field: "Category", sortable: true, filter: true },
    { field: "SKU", sortable: true, filter: true },
    { field: "Price", sortable: true, filter: true },
    { field: "Stock", sortable: true, filter: true },
    { field: "Supplier", sortable: true, filter: true },
    {
      field: "Actions",
      cellRenderer: (params) => {
        const id = params.data._id;
        return (<span className="flex gap-2 pt-1 pb-1">
          <button
            className="bg-lt-primary-action-color dark:bg-d-primary-action-color text-white py-1 px-2 rounded-md hover:bg-lt-primary-bg-color dark:hover:bg-d-secondary-bg-color"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32L19.513 8.2Z" />
            </svg>
          </button>
          <button
            onClick={() => {
              deleteProductHandle(id);
            }}
            className="bg-red-500 text-white py-1 px-2 rounded-md hover:bg-red-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </span>)
      },
    },
  ]);

  const defaultColDef = {
    flex: 1,
  };

  return (
    <div
      className="restock-pipeline-section hide-scrollbar"
      style={{ width: "100%", paddingBottom: "20px" }}
    >
      <div id="myGrid" className="ag-theme-alpine">
        <AgGridReact
          columnDefs={colDefs}
          rowData={rowData}
          pagination={true}
          paginationPageSize={[10]}
          domLayout="autoHeight"
          defaultColDef={defaultColDef}
        />
      </div>
    </div>
  );
}
