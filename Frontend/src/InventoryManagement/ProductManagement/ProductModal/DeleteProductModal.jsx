import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { deleteProduct } from "../../Redux/Product/ProductActions";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

import socket from "../../../utilities/Socket-Connection";
import Toasts from "../Toasts/Toasts";

export default function DeleteProductModal({ setDeleteModal, productId }) {
  const dispatch = useDispatch();
  const [showToast, setShowToast] = useState(false);
  const product = useSelector((state) => state.ProductReducer.data);
  const productToDelete = product.find((product) => product._id === productId);
  const handleDeleteProduct = () => {
    dispatch(deleteProduct(productId));
    socket.emit("changesMadeToProducts", "Product Deleted");
    socket.emit("changesMadeToSuppliers", "Product Deleted");
    setShowToast(true);
    setTimeout(() => {
        setDeleteModal(false);
    }, 500);
  };

  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          {showToast && <Toasts />}
    
  <div className="relative bg-d-primary-bg-color text-d-primary-text-color w-[90%] max-w-md p-6 rounded-2xl shadow-xl flex flex-col gap-2 min-h-[200px]">
    <h1 className="text-2xl font-semibold text-center">You are about to delete</h1>
    <h4 className="text-xl font-medium text-center mt-1">{productToDelete && productToDelete["Product Name"]}</h4>

    <div className="flex justify-center mt-4">
      <button
        className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
        onClick={handleDeleteProduct}
      >
        Confirm
      </button>
    </div>

    <button
      className="absolute top-5 right-5 text-xl text-d-secondary-text-color hover:text-red-700 transition"
      onClick={() => {
        setDeleteModal(false);
      }}
    >
      <FontAwesomeIcon icon={faXmark} />
    </button>
  </div>
</div>
,
    document.getElementById("portal-root")
  );
}
