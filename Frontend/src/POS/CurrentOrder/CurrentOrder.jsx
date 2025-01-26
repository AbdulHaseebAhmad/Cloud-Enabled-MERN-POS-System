import {  useState } from "react";
// import { products } from "../Data/data";
import ProductViewGrid from "./ProductViewGrid/ProductViewGrid";
import OrderSummary from "./OrderSummary/OrderSummary";
import {  useSelector } from "react-redux";
import CheckoutModal from "../Modals/Checkout/CheckoutModal";
// import { posScreenActions } from "../Redux/PosScreenReducers";

const POSCheckoutScreen = () => {
  const [orderNumber] = useState("12345");
  const [isPortalOpen, setIsPortalOpen] = useState(false);
  const getReduxItms = useSelector((state) => state.currentCart.currentOrder);
 
  const handleCheckout = () => {
    setIsPortalOpen(true);
  };

  const togglePortal = () => {
    setIsPortalOpen(false);
  };

  const totalPrice = getReduxItms.reduce(
    (acc, item) => acc + item.Qty * item.Price,
    0
  );

 

  return (
    <>
      <div className="relative bg-white text-d-bg-primary-color bg-lt-primary-bg-color ">
      {isPortalOpen && <CheckoutModal onClose={togglePortal}/> } 

      {getReduxItms.length > 0 ? (
        <div className="flex pt-0">
          <ProductViewGrid cartItems={getReduxItms} />
          <OrderSummary
            cartItems={getReduxItms}
            totalPrice={totalPrice}
            orderNumber={orderNumber}
            handleCheckout={handleCheckout}
          />
        </div>
      ) : (
        <div className="flex flex-col gap-2 justify-center items-center h-[80vh]">
          <h1 className="text-2xl text-gray-500">No items in cart </h1>
          <small className="text-lg text-d-primary-action-color">Scan Product or Type barcode above</small>
        </div>
      )}
    </div>
    </>
  );
};

export default POSCheckoutScreen;
