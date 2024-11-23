import InventoryNavbar from "./InventoryManagement/Navbar/InventoryNavbar";
// import InventoryReports from "./InventoryManagement/InventoryReport/InventoryReport";
// import SupplierManagement from "./InventoryManagement/SupplierManagement/SupplierManagement";
// import ProductManagement from "./InventoryManagement/ProductManagement/ProductManagement";
// import Dashboard from "./InventoryManagement/Dashboard/ashboard";
// import ProductDetails from "./InventoryManagement/ProductDetail/ProductDetail";
// import ProductsByCategory from "./InventoryManagement/TotalAvailableProducts/ProductsByCategory";
import SecondaryNavbar from "./InventoryManagement/SecondaryNavbar/SecondaryNavbar";
import StockTracking from "./InventoryManagement/StockTracking/StockTracking";
function App() {

  return (
    <>
      <InventoryNavbar/>
      <SecondaryNavbar/>
      <StockTracking/>
    </>
  )
}

export default App


