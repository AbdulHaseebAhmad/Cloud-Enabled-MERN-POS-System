import ReactDOM from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {addSupplier} from "../Redux/Supplier/SupplierActions"
import { useDispatch } from "react-redux";
import socket from "../../utilities/Socket-Connection";

export default function PortalComponent({
  Component,
  togglePortal,
  nextComponent,
  pageTitle,
}) {
  const hidePortal = () => {
    togglePortal();
  };
  const dispatch = useDispatch();

  const [data, setData] = useState({});

  const recieveSupplierData = (data) => {
    setData((prev) => ({ ...prev, ...data }));
  };

  const submithandler = () => {
    dispatch(addSupplier(data));
    socket.emit('changesMadeToSuppliers', 'Supplier Added');
  };

  return ReactDOM.createPortal(
    <AnimatePresence>
      <motion.div
        layout
        key={Component}
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 10 }}
        exit={{ opacity: 0, y: 0 }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
      >
        <Component
          togglePortal={hidePortal}
          nextComponent={(Component) => nextComponent(Component)}
          pageTitle={pageTitle}
          suppliersData={recieveSupplierData}
          data={data}
          submithandler={submithandler}
        />{" "}
      </motion.div>
    </AnimatePresence>,
    document.getElementById("portal-root")
  );
}
