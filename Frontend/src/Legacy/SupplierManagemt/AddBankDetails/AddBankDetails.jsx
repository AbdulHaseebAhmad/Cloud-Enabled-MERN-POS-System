// import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import BankAccontInfo from "./Bank Account information/BankAccontInfo";
import TaxInformation from "./Tax Information/TaxInformation";
import BillingInfo from "./Billing Information/BillingInfo";
import PymentTerms from "./Payment Terms/PaymentTerms";
import PropTypes from "prop-types";

export default function AddBankDetails({isAccordianOpen}) {
  const [accordianTitles] = useState([
    { title: "Bank Account Information", key: "0" },
    { title: "Payment Termss", key: "1" },
    { title: "Tax Information", key: "2" },
    { title: "Billing Information", key: "3" },
  ]);
  const [accordian, setCurrentAccordian] = useState("");

  const toglleHandle = (e) => {
    if (e.currentTarget.id === accordian) {
      setCurrentAccordian("");
      isAccordianOpen(false);

    } else {
      setCurrentAccordian(e.currentTarget.id);
      isAccordianOpen(true);
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        layout
        initial={{ opacity: 0.1, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0.1, y: 10 }}
        transition={{ duration: 0.4, type: "tween" }}
        className="w-full h-96 flex z-20"
        style={{alignItems:accordian !== "" ? "": 'center'}}
      >
        <div className="w-full mx-auto shadow-md  flex flex-col gap-4 items-center p-4 ">
          {accordianTitles.map(({ title, key }) => (
            <>
              <motion.div
                layout
                initial={{ y: 0 }}
                animate={{ y: 2 }}
                exit={{ y: 0 }}
                key={key}
                transition={{ duration: 0.4, type: "linear" }}
                className="w-[95%] rounded-sm bg-white flex items-center justify-between px-4  "
                style={{ height: accordian !== "" ? "50px" : "60px" }}
              >
                <div className="text-container text-d-primary-bg-color font-bold ">
                  {title}
                </div>
                <button
                  className="size-[40px] flex justify-center items-center"
                  id={key}
                  onClick={toglleHandle}
                >
                  <FontAwesomeIcon
                    icon={faArrowDown}
                    className="font-bold text-d-primary-bg-color text-2xl "
                  />
                </button>
              </motion.div>

              {accordian === key && (
                <motion.div
                  initial={{ opacity: 0.1, y: 20 }}
                  key={`${accordian}s`}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 1, y: 20 }}
                  transition={{ duration: 0.2, type: "tween" }}
                  className="w-[95%] min-h-[250px] overflow-scroll flex scrollbar-hide " 
                >
                  <div className="w-full mx-auto shadow-md ">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto">
                    {key === "0" && <BankAccontInfo title={title}/>}
                    {key === "1" && <PymentTerms title={title}/>}
                    {key === "2" && <TaxInformation title={title}/>}
                    {key === "3" && <BillingInfo title={title}/>}

                      </div>  
                  </div>
                </motion.div>
              )}
            </>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}


AddBankDetails.propTypes = {
  isAccordianOpen:PropTypes.string
}