import { useEffect, useState } from "react";
import { products } from "../../Data/data";
import ProductViewGrid from "./ProductViewGrid/ProductViewGrid";
import OrderSummary from "./OrderSummary/OrderSummary";
import { useDispatch } from "react-redux";
import { posScreenActions } from "../../Redux/PosScreenReducers";

const POSCheckoutScreen = () => {
  const [cartItems, setCartItems] = useState(products);
  const [orderNumber] = useState("12345");
  const dispatch = useDispatch();

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

  useEffect(() => {
    dispatch(posScreenActions.setCurrentOrder(cartItems));
  }, [cartItems]);

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
