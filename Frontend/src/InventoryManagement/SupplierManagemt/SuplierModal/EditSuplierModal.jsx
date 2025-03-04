import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faArrowRight,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import ReactDOM from "react-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Toasts from "../Toasts/Toasts";
import socket from "../../../utilities/Socket-Connection";
import AddSuplierForm from "../AddSuplierForm/AddSuplierForm";
import AddBankDetails from "../AddBankDetails/AddBankDetails";
import { updateSupplier } from "../../../InventoryManagement/Redux/Supplier/SupplierActions";


export default function EditSuplierModal({ onClose, id }) {
  const supplierDetails = useSelector((state)=> state.SupplierReducer.supplierDetails)
  const supplierError = useSelector((state) => state.SupplierReducer.error);
  const supplierLoading = useSelector((state) => state.SupplierReducer.loading);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const dispatch = useDispatch();

 

  const screens = [
    { title: "Edit Supplier Details", component: <AddSuplierForm /> },
    { title: "Edit Supplier Bank Details", component: <AddBankDetails /> },
  ];

  const swapScreen = (e) => {
    const { name } = e.currentTarget;
    if (name === "next") {
      setCurrentIndex(1);
    }
    if (name === "prev") {
      setCurrentIndex(0);
    }
  };


  const submitHandle = () => {
    setIsSubmitted(true);
    setShowToast(true);
    dispatch(updateSupplier(supplierDetails,id))
    //socket.emit("changesMadeToProducts", "Product Edited");
    socket.emit("changesMadeToSuppliers", "Product Edited");  };

  useEffect(() => {
    if (isSubmitted && supplierLoading === false && supplierError === null) {
      setTimeout(() => onClose(), 1200);
      setIsSubmitted(false);
    }
  }, [isSubmitted, supplierError, supplierLoading]);

  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      {showToast && <Toasts />}
      <div className="relative bg-d-primary-bg-color text-d-primary-text-color w-[90%] max-w-4xl min-h-[90%]  rounded-2xl shadow-xl justify-between flex flex-col">
        <h2 className="text-2xl font-semibold mt-2 text-center pt-2">{screens[currentIndex].title}</h2>
        <button
          className="mt-1 text-sm text-d-secondary-text-color underline hover:text-red-700 transition text-red-500"
          onClick={onClose}
        >
          <FontAwesomeIcon
            icon={faXmark}
            className="absolute top-5 right-10 text-xl"
          />
        </button>
        <div className="flex flex-col w-[90%] min-h-[440px] self-center items-center justify-center">
          {screens[currentIndex].component}
          {currentIndex === 1 && (
            <button
              disabled={supplierLoading}
              onClick={submitHandle}
              type="submit"
              className="w-96  text-white py-4 px-4 rounded-md  dark:hover:bg-d-primary-action-color bg-d-secondary-bg-color"
            >
              Update Supplier
            </button>
          )}
        </div>
        <div className="border min-h-[20px] border-d-secondary-bg-color rounded-b-xl p-4 mt-4 flex justify-center gap-4 items-center ">
          <button onClick={swapScreen} name="prev">
            <FontAwesomeIcon
              icon={faArrowLeft}
              className="text-lt-primary-action-color text-xl hover:cursor-pointer"
            />
          </button>
          <button onClick={swapScreen} name="next">
            <FontAwesomeIcon
              icon={faArrowRight}
              className="text-lt-primary-action-color text-xl hover:cursor-pointer"
            />
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("portal-root")
  );
}
