import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faArrowRight,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import ReactDOM from "react-dom";
import { useEffect, useState } from "react";
import AddSuplierForm from "../AddSuplierForm/AddSuplierForm";
import AddBankDetails from "../AddBankDetails/AddBankDetails";
import { useDispatch, useSelector } from "react-redux";
import Toasts from "../Toasts/Toasts";
import socket from "../../../utilities/Socket-Connection";
import {  motion } from "framer-motion";
import { addSupplier } from "../../../InventoryManagement/Redux/Supplier/SupplierActions";

export default function AddSuplierModal({ onClose }) {
  const supplierDetails = useSelector((state)=> state.SupplierReducer.supplierDetails);
  const supplierError = useSelector((state) => state.SupplierReducer.error);
  const supplierLoading = useSelector((state) => state.SupplierReducer.loading);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAccordianOpen,setIsAccordianOpen] = useState(false);
  const dispatch = useDispatch();

  const screens = [
    { title: "Add Supplier Details", component: <AddSuplierForm /> },
    { title: "Add Supplier Bank Details", component: <AddBankDetails isAccordianOpen={(data)=>setIsAccordianOpen(data)} /> },
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

  useEffect(()=>{
    setIsAccordianOpen(false);
  },[currentIndex])



  const submitHandle = () => {
    setIsSubmitted(true);
    setShowToast(true);
   dispatch(addSupplier(supplierDetails));
    socket.emit("changesMadeToSuppliers", "Supplier Added");
  };

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
        <div className="flex flex-col w-[90%] max-h-[450px]  self-center items-center justify-center overflow-scroll scrollbar-hide">
          {screens[currentIndex].component}
          {currentIndex === 1 && !isAccordianOpen &&  (
            <motion.button
              initial={{opacity:0.1}}
              animate={{opacity:1}}
              exit={{opacity:0.1}}
              transition={{duration:0.4,type:'tween'}}
              disabled={supplierLoading}
              onClick={submitHandle}
              type="submit"
              className="w-96  text-white py-4 px-4 rounded-md  dark:hover:bg-d-primary-action-color bg-d-secondary-bg-color"
            >
              Save Supplier
            </motion.button>
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
