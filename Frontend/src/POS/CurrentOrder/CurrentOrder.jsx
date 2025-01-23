import { useEffect, useState } from "react";
import { products } from "../Data/data";
import ProductViewGrid from "./ProductViewGrid/ProductViewGrid";
import OrderSummary from "./OrderSummary/OrderSummary";
import { useDispatch, useSelector } from "react-redux";
import { posScreenActions } from "../Redux/PosScreenReducers";

const POSCheckoutScreen = () => {
  const [cartItems, setCartItems] = useState([]);
  const [orderNumber] = useState("12345");
  
  const getReduxItms = useSelector((state) => state.currentCart.currentOrder);
  
  const dispatch = useDispatch();

  useEffect(()=>{
    setCartItems(getReduxItms);
    // console.log('2')
  },[getReduxItms])


  useEffect(() => {
    dispatch(posScreenActions.setCurrentOrder(products));
    setCartItems(getReduxItms);
    // console.log('1')
  }, []); //initial dispatch that sets products to redux, and then sets cartItems to local State; this is temporary and will be changed to once barcode scanner is integrated


  const handleQuantityChange = (id, action) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? {
              ...item,
              qty: action === "increase" ? item.qty + 1 : item.qty - 1,
            }
          : item
      )
    );
  };
  const handleDeleteItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const handleCheckout = () => {
    alert("Proceeding to checkout...");
  };

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.qty * item.price,
    0
  );

 

  return (
    <div className="bg-white text-d-bg-primary-color ">
      {cartItems.length > 0 ? (
        <div className="flex pt-0">
          <ProductViewGrid cartItems={cartItems} />
          <OrderSummary
            cartItems={cartItems}
            totalPrice={totalPrice}
            handleQuantityChange={handleQuantityChange}
            handleDeleteItem={handleDeleteItem}
            orderNumber={orderNumber}
            handleCheckout={handleCheckout}
          />
        </div>
      ) : (
        <div className="flex justify-center items-center h-[80vh]">
          <h1 className="text-2xl text-gray-500">No items in cart</h1>
        </div>
      )}
    </div>
  );
};

export default POSCheckoutScreen;
