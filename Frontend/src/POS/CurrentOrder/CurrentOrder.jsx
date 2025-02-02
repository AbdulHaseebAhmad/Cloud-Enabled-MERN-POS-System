import { useState, useEffect } from "react";
// import { products } from "../Data/data";
import ProductViewGrid from "./ProductViewGrid/ProductViewGrid";
import OrderSummary from "./OrderSummary/OrderSummary";
import { useDispatch, useSelector } from "react-redux";
import CheckoutModal from "../Modals/Checkout/CheckoutModal";
// import { posScreenActions } from "../Redux/PosScreenReducers";
import CashModal from "../Modals/Payment-Methods/Cash/CashModal";
import { posScreenActions } from "../Redux/PosScreenReducers";
// import { getProduct } from "../Redux/PosScreenActions";
import Toasts from "../Toasts/Toasts";

const POSCheckoutScreen = () => {
  const [isPortalOpen, setIsPortalOpen] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState(null);
  const getReduxItms = useSelector((state) => state.currentCart.currentOrder);
  const orderNumber = useSelector((state) => state.currentCart.orderNumber);  
  const status = useSelector((state) => state.currentCart.status);
  const [showToast, setShowToast] = useState(false);

  const dispatch = useDispatch();
  const handleCheckout = () => {
    setIsPortalOpen(true);
  };

  const togglePortal = () => {
    setIsPortalOpen(false);
    setPaymentMethod(null);
  };

  const onSelectPayment = (paymentMethod) => {
    console.log("Payment method selected: ", paymentMethod);
    setPaymentMethod(paymentMethod);
  };

  const totalPrice = getReduxItms.reduce(
    (acc, item) => acc + item.Qty * item.Price,
    0
  );

  useEffect(() => {
    if(orderNumber === null){
      const generateOrderNumber = () => {
        return `ORD-${Date.now()}-${Math.floor(1000 + Math.random() * 9000)}`;
      };
      dispatch(posScreenActions.setOrderNumber(generateOrderNumber()));}
  }, [orderNumber]);

  useEffect(() => {
    setShowToast(status !== null);
}, [status]);

  return (
    <>
    { showToast && <Toasts />}
      <div className="relative bg-white text-d-bg-primary-color bg-lt-primary-bg-color ">
        {isPortalOpen && !paymentMethod && (
          <CheckoutModal
            onClose={togglePortal}
            onSelectPayment={onSelectPayment}
          />
        )}
        {paymentMethod && (
          <CashModal
            onClose={togglePortal}
            totalPrice={totalPrice}
            orderNumber={orderNumber}
            cartItems={getReduxItms}
          />
        )}
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
            <small className="text-lg text-d-primary-action-color">
              Scan Product or Type barcode above
            </small>
          </div>
        )}
      </div>
    </>
  );
};

export default POSCheckoutScreen;
