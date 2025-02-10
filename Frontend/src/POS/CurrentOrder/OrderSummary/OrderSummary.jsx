import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { posScreenActions } from "../../Redux/PosScreenReducers";

export default function OrderSummary({
  orderNumber,
  cartItems,
  handleCheckout,
  totalPrice,
}) {
  const dispatch = useDispatch();
console.log(cartItems)
  const handleSaveOrder = () => {
    
    dispatch(
      posScreenActions.appendOpenOrders({ cartItems, totalPrice, orderNumber })
    );
  };

  const handleCancelOrder = () => {
    dispatch(posScreenActions.cancelCurrentOrder());
  };

  
  return (
    <aside className="w-5/12 p-4 pt-4 bg-white shadow">
      <h2 className="font-bold text-lg mb-4">Order #{orderNumber}</h2>
      <div className="space-y-2">
        <div className="max-h-[220px] overflow-y-auto">
          <table className="w-full text-start border-collapse">
            <thead className="font-bold">
              <tr className="border-b">
                <th>Item</th>
                <th>Qty</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td className="p-2 max-w-content">
                    {item["Product Name"]}
                    {item.name && <small>({item.name})</small>}
                  </td>
                  <td className="flex items-center justify-center space-x-2 p-2 ">
                    <button
                      onClick={() =>
                        dispatch(posScreenActions.decreaseQuantity(item.id))
                      }
                      className="px-2 bg-d-primary-bg-color text-white rounded hover:bg-d-primary-action-color"
                    >
                      -
                    </button>
                    <span className="text-xl">{item.Qty}</span>
                    <button
                      onClick={() =>
                        dispatch(posScreenActions.increaceQuantity(item.id))
                      }
                      className="px-2 bg-d-primary-bg-color text-white rounded hover:bg-d-primary-action-color"
                    >
                      +
                    </button>
                  </td>
                  <td className="p-2 text-center ">${item.Price}</td>
                  <td className="flex items-center justify-center space-x-2 p-2 ">
                    <button
                      onClick={() => dispatch(posScreenActions.removeItemFromCurrentOrder(item.id)) }
                      className="text-red-500 hover:text-red-700"
                    >
                      &times;
                    </button>
                    <button className="text-blue-500 hover:text-blue-700">
                      %
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-2 mt-4">
        <p className="flex justify-between">
          <span className="text-lg">Total Products:</span>{" "}
          <span>{cartItems.length}</span>
        </p>
        <p className="flex justify-between font-bold">
          <span className="text-lg">Total Price:</span>{" "}
          <span>${totalPrice}</span>
        </p>
      </div>

      <div className="space-y-4">
        <div className="flex justify-between space-x-2">
          <button
            className="w-1/3 p-2 bg-white border text-gray-600 rounded hover:bg-gray-100"
            onClick={handleSaveOrder}
          >
            Save
          </button>
          <button
            className="w-1/3 p-2 bg-white border text-red-500 rounded hover:bg-red-100"
            onClick={handleCancelOrder}
          >
            Cancel
          </button>
          <button className="w-1/3 p-2 bg-white border text-d-primary-action-color rounded hover:bg-d-primary-action-color hover:text-white">
            Pay Later
          </button>
        </div>
        <button
          onClick={handleCheckout}
          className="w-full p-2 bg-d-primary-action-color text-white rounded hover:bg-orange-700"
        >
          Checkout
        </button>
      </div>
    </aside>
  );
}

OrderSummary.propTypes = {
  orderNumber: PropTypes.string,
  cartItems: PropTypes.array,
  handleQuantityChange: PropTypes.func,
  handleDeleteItem: PropTypes.func,
  handleCheckout: PropTypes.func,
  totalPrice: PropTypes.number,
  showPortal: PropTypes.func,
};
