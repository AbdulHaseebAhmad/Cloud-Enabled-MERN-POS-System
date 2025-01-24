import {  useState } from "react";
// import { products } from "../Data/data";
import ProductViewGrid from "./ProductViewGrid/ProductViewGrid";
import OrderSummary from "./OrderSummary/OrderSummary";
import {  useSelector } from "react-redux";
// import { posScreenActions } from "../Redux/PosScreenReducers";

const POSCheckoutScreen = () => {
  // const [cartItems, setCartItems] = useState([]);
  const [orderNumber] = useState("12345");
  
  const getReduxItms = useSelector((state) => state.currentCart.currentOrder);
  // const dispatch = useDispatch();

  // const handleQuantityChange = (id, action) => {
  //   setCartItems((prevItems) =>
  //     prevItems.map((item) =>
  //       item.id === id
  //         ? {
  //             ...item,
  //             Qty: action === "increase" ? item.Qty + 1 : item.Qty - 1,
  //           }
  //         : item
  //     )
  //   );
  // };
  // const handleDeleteItem = (id) => {
  //   setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  //   dispatch(posScreenActions.setCurrentOrder(cartItems));

  // };

  const handleCheckout = () => {
    alert("Proceeding to checkout...");
  };

  const totalPrice = getReduxItms.reduce(
    (acc, item) => acc + item.Qty * item.Price,
    0
  );

 

  return (
    <div className="bg-white text-d-bg-primary-color bg-lt-primary-bg-color ">
      {getReduxItms.length > 0 ? (
        <div className="flex pt-0">
          <ProductViewGrid cartItems={getReduxItms} />
          <OrderSummary
            cartItems={getReduxItms}
            totalPrice={totalPrice}
            // handleQuantityChange={handleQuantityChange}
            // handleDeleteItem={handleDeleteItem}
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
  );
};

export default POSCheckoutScreen;
