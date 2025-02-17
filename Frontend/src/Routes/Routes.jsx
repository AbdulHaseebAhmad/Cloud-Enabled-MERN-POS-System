import { createBrowserRouter } from "react-router-dom";
import InventoryManagemenetRootElement, {
  dashboardLoader,
} from "../InventoryManagement/RootElement/InventoryManagemenetRootElement.jsx";
import Dashboard from "../InventoryManagement/Dashboard/Dashboard.jsx";
import InventoryReports from "../InventoryManagement/InventoryReport/InventoryReport";
import SupplierManagement from "../InventoryManagement/SupplierManagement/SupplierManagement";
import ProductManagement from "../InventoryManagement/ProductManagement/ProductManagement";
import ProductDetails from "../InventoryManagement/ProductDetail/ProductDetail";
import StockTracking from "../InventoryManagement/StockTracking/StockTracking";
import Login from "../InventoryManagement/Authentication/Login.jsx";
import CurrentOrder from "../POS/CurrentOrder/CurrentOrder.jsx";
import OpenOrders from "../POS/OpenOrders/OpenOrders.jsx";
import {
  loginAction,
  loginLoader,
} from "../InventoryManagement/Authentication/Login.jsx";
import Posstore from "../POS/Redux/Store.jsx";
import { Provider } from "react-redux";
import PosRootElement from "../POS/PosRootElement/PosRootElement.jsx";
import Coupons from "../POS/Coupons/Coupons.jsx";
import ProductManagementNew from "../Latest/ProductManagement/ProductManagement.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "login",
        element: <Login />,
        action: loginAction,
        loader: loginLoader,
      },

      {
        path: "pos",
        element: (
          <Provider store={Posstore}>
            <PosRootElement />
          </Provider>
        ),
        children: [
          {
            path: "checkout",
            element: <CurrentOrder />,
          },
          {
            path: "open-orders",
            element: <OpenOrders />,
          },
          {
            path: "coupons",
            element: <Coupons />,
          },
        ],
      },
      {
        path: "inventory-management",
        element: <InventoryManagemenetRootElement />,
        loader: dashboardLoader,
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
          // {
          //   path: "test",
          //   element: <ProductManagementNew />,
          // },
          {
            path: "stock-tracking",
            element: <StockTracking />,
          },
        ],
      },
    ],
  },
]);

export default router;
