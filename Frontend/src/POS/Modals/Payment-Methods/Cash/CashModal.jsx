import { useState } from "react";
import ReactDOM from "react-dom";
import {useDispatch} from "react-redux";
import {checkOutOrder} from "../../../Redux/PosScreenActions" 
import socket from "../../../../utilities/Socket-Connection";

export default function CashModal({ onClose,orderNumber, cartItems, totalPrice }) {
  const dispatch = useDispatch()
  const [amountGiven, setAmountGiven] = useState("");
  const [change, setChange] = useState(null);

  const handleAmountChange = (e) => {
    const value = e.target.value;
    setAmountGiven(value);
    if (value) {
      setChange(parseFloat(value) - totalPrice);
    } else {
      setChange(null);
    }
  };

  const handleConfirmPayment = () => {
    // Handle the confirmation of the cash payment
    //console.log("Cash payment confirmed. Change to return: ", change);
    dispatch(checkOutOrder({orderNumber, cartItems, totalPrice}));
    socket.emit("getOrderNumbers");
    onClose(); // Close the modal after confirmation

  };

  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-d-primary-bg-color text-d-primary-text-color w-[90%] max-w-md p-6 rounded-2xl shadow-xl flex flex-col">
        <h2 className="text-2xl font-semibold mb-4 text-center">Cash Payment</h2>
        <div className="mb-4">
          <p className="text-lg">Total Amount: ${totalPrice}</p>
        </div>
        <div className="mb-4">
          <label htmlFor="amountGiven" className="block text-sm font-medium mb-2">
            Amount Given
          </label>
          <input
            id="amountGiven"
            type="number"
            className="w-full p-3 bg-white text-black rounded-lg border border-gray-300"
            value={amountGiven}
            onChange={handleAmountChange}
            placeholder="Enter the amount given"
          />
        </div>
        {change !== null && (
          <div className="mb-4">
            <p className="text-lg font-semibold">Change to Return: ${change.toFixed(2)}</p>
          </div>
        )}
        <div className="flex gap-4 mt-6">
          <button
            className="w-full bg-d-primary-action-color text-white py-3 rounded-lg text-lg hover:bg-opacity-90 transition"
            onClick={handleConfirmPayment}
            disabled={amountGiven < totalPrice}
          >
            Confirm Payment
          </button>
          <button
            className="w-full text-d-secondary-text-color py-3 rounded-lg text-lg border border-d-secondary-text-color hover:bg-opacity-90 transition"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("portal-root")
  );
}
