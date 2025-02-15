import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faArrowRight,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import ReactDOM from "react-dom";
import { useState } from "react";
import AddProductForm from "../AddProductForm";
import AddVariant from "../AddVariant";

export default function AddProductModal({ onClose }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const screens = [
    { title: "Product Deetails", component: <AddProductForm /> },
    { title: "Product Variants", component: <AddVariant /> },
  ];

  const swapScreen = (e) => {
    const { name } = e.currentTarget;
    if (name === "next") {
      setCurrentIndex(1);
    } if (name === "prev") {
      setCurrentIndex(0);
    }
  };

  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="relative bg-d-primary-bg-color text-d-primary-text-color w-[90%] max-w-4xl min-h-[90%]  rounded-2xl shadow-xl justify-between flex flex-col">
        <h2 className="text-2xl font-semibold mt-2 text-center pt-2">{`Add Product ${currentIndex === 0 ? 'Details' : 'Variants'}`}</h2>
        <button
          className="mt-1 text-sm text-d-secondary-text-color underline hover:text-red-700 transition text-red-500"
          onClick={onClose}
        >
          <FontAwesomeIcon
            icon={faXmark}
            className="absolute top-5 right-10 text-xl"
          />
        </button>
        <div className="flex w-[90%] min-h-[440px] self-center">
          {screens[currentIndex].component}
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
