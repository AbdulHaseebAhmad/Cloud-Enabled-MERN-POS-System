import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
export default function CheckoutModal({ onClose, onSelectPayment }) {

  
  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="relative bg-d-primary-bg-color text-d-primary-text-color w-[90%] max-w-md p-6 rounded-2xl shadow-xl flex flex-col">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Select Payment Method
        </h2>
        <p className="text-sm text-d-secondary-text-color text-center mb-6">
          Please choose how the customer would like to pay.
        </p>
        <div className="flex flex-col gap-4">
          <button
            className="w-full bg-d-primary-action-color text-white py-3 rounded-lg text-lg hover:bg-opacity-90 transition"
            onClick={() => onSelectPayment("cash")}
          >
            💵 Cash
          </button>
          <button
            className="w-full bg-d-primary-action-color text-white py-3 rounded-lg text-lg hover:bg-opacity-90 transition"
            onClick={() => onSelectPayment("card")}
          >
            💳 Card
          </button>
          <button
            className="w-full bg-d-primary-action-color text-white py-3 rounded-lg text-lg hover:bg-opacity-90 transition"
            onClick={() => onSelectPayment("voucher")}
          >
            🎟️ Voucher
          </button>
        </div>
        <button
          className="mt-6 text-sm text-d-secondary-text-color underline hover:text-red-700 transition text-red-500"
          onClick={onClose}
        >
         <FontAwesomeIcon icon={faXmark} className="absolute top-5 right-10 text-xl"/>
         </button>
      </div>
    </div>,
    document.getElementById("portal-root")
  );
}
