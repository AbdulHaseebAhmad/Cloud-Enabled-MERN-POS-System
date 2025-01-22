import { useState } from "react";
import { products } from "../Data/data";
import ProductViewGrid from "./ProductViewGrid/ProductViewGrid";
import OrderSummary from "./OrderSummary/OrderSummary";
const POSCheckoutScreen = () => {
  const [cartItems, setCartItems] = useState(products);

  const [orderNumber] = useState("12345");

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
    <div className="bg-white text-d-bg-primary-color min-h-screen">
      {/* Header Section */}
      <header className="flex justify-between items-center p-4 bg-white shadow">
        <h1 className="text-xl font-bold">Store Name</h1>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Scan or Enter SKU"
            className="p-2 border rounded w-64 bg-white text-black"
          />
          <button className="p-2 border border-gray-300 text-d-primary-action-color rounded hover:bg-d-primary-action-color hover:text-white">
            Scan
          </button>
        </div>
        <span className="text-sm">Date & Time</span>
        <span className="text-sm">Cashier Name</span>
      </header>
      <nav className="bg-white p-2 border-b border-gray-200 shadow-sm">
            <ul className="flex space-x-8 justify-center">
              <li>
                <a
                  href="#current-cart"
                  className="text-sm text-gray-700 hover:text-d-primary-action-color"
                >
                  Current Cart
                </a>
              </li>
              <li>
                <a
                  href="#open-orders"
                  className="text-sm text-gray-700 hover:text-d-primary-action-color"
                >
                  Open Orders
                </a>
              </li>
              <li>
                <a
                  href="#coupons"
                  className="text-sm text-gray-700 hover:text-d-primary-action-color"
                >
                  Coupons
                </a>
              </li>
            </ul>
          </nav>

      {cartItems.length > 0 ? (<div className="flex pt-0">
        
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
): (
        <div className="flex justify-center items-center h-[80vh]">
        
          <h1 className="text-2xl text-gray-500">No items in cart</h1>
        </div>
      )
      }

    </div>
  );
};

export default POSCheckoutScreen;
