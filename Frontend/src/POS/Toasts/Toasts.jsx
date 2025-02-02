import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import PropTypes from "prop-types";

import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { posScreenActions } from "../Redux/PosScreenReducers";

export default function Toasts() {

    const status = useSelector((state) => state.currentCart.status);
    const message = useSelector((state) => state.currentCart.message);
    const dispatch = useDispatch();

    const toastConfig = {position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        onClose: () => dispatch(posScreenActions.setMessage({ message: null, status: null })),
}

useEffect(() => {
    if (message) {
        toast[status]?.(message, toastConfig) || toast.loading(message, toastConfig);
    }
}, [status, message]);


  return (
    <ToastContainer/>
      )
}

Toasts.propTypes = {
    type: PropTypes.string,
    message: PropTypes.string
}