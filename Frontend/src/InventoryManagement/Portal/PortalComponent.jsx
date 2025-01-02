import ReactDOM from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

export default function PortalComponent({
  Component,
  togglePortal,
  nextComponent,
  pageTitle,
}) {
  const hidePortal = () => {
    togglePortal();
  };

  const [data, setData] = useState({});

  const recieveSupplierData = (data) => {
    setData((prev) => ({ ...prev, ...data }));
  };

  const submithandler = () => {
    const token = Cookies.get("token");
    axios
      .post("http://localhost:5000/api/supplier/create", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
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
