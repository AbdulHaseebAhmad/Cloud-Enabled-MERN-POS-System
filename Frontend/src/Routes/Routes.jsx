import { createBrowserRouter } from "react-router-dom";
import InventoryManagemenetRootElement,{dashboardLoader} from "../InventoryManagement/RootElement/InventoryManagemenetRootElement.jsx";
import Dashboard from "../InventoryManagement/Dashboard/Dashboard.jsx";
import InventoryReports from "../InventoryManagement/InventoryReport/InventoryReport";
import SupplierManagement from "../InventoryManagement/SupplierManagement/SupplierManagement";
import ProductManagement from "../InventoryManagement/ProductManagement/ProductManagement";
import ProductDetails from "../InventoryManagement/ProductDetail/ProductDetail";
import ProductsByCategory from "../InventoryManagement/TotalAvailableProducts/ProductsByCategory";
import StockTracking from "../InventoryManagement/StockTracking/StockTracking";
import Login from "../InventoryManagement/Authentication/Login.jsx";

import {loginAction, loginLoader} from "../InventoryManagement/Authentication/Login.jsx";

const router = createBrowserRouter([
  {
    path:"/",
    children:[
      {
        path:'login',
        element:<Login/>,
        action:loginAction,
        loader:loginLoader
      },
      {
        path: "inventory-management",
        element: <InventoryManagemenetRootElement />,
        loader:dashboardLoader,
        children: [
          {
            index: true,
            element: <Dashboard />,
          },
          {
            path: "inventory-reports",
            element: <InventoryReports />,
          },
          {
            path: "supplier-management",
            element: <SupplierManagement />,
          },
          {
            path: "product-management",
            element: <ProductManagement />,
          },
          {
            path: "product-details",
            element: <ProductDetails />,
          },
          {
            path: "products-by-category",
            element: <ProductsByCategory />,
          },
          {
            path: "stock-tracking",
            element: <StockTracking />,
          },
        ],
      },

    ]
  }
]);

export default router;
