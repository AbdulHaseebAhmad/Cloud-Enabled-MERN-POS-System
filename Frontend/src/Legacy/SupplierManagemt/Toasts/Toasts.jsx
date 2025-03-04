import { useEffect, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css";

export default function Toasts() {
  const message = useSelector((state) => state.SupplierReducer.msg);
  const error = useSelector((state) => state.SupplierReducer.error);
  const loading = useSelector((state) => state.SupplierReducer.loading);
  
  const toastIdRef = useRef(null);  

  const toastConfig = {
    position: "top-right",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  };

  useEffect(() => {
    if (message) {
      if (loading) {
        toastIdRef.current = toast.loading(message, toastConfig);
      } else {
        if (toastIdRef.current) {
          toast.dismiss(toastIdRef.current);
          toastIdRef.current = null;
        }
        error !== null 
          ? toast.error(message, toastConfig) 
          : toast.success(message, toastConfig);
      }
    }
  }, [message, error, loading]);

  return <ToastContainer />;
}
