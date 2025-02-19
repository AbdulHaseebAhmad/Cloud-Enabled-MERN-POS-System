import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faArrowRight,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import ReactDOM from "react-dom";
import { useEffect, useState } from "react";
import AddProductForm from "../AddProductFom/AddProductForm";
import AddVariant from "../AddVariant/AddVariant";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../../InventoryManagement/Redux/Product/ProductActions";
import Toasts from "../Toasts/Toasts";
import socket from "../../../utilities/Socket-Connection";

export default function AddProductModal({ onClose }) {
  const product = useSelector((state) => state.ProductReducer.productDetails);
  const productError = useSelector((state) => state.ProductReducer.error);
  const productLoading = useSelector((state) => state.ProductReducer.loading);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [newProduct, setNewProduct] = useState({});
  const dispatch = useDispatch();

  const screens = [
    { title: "Add Product Details", component: <AddProductForm /> },
    { title: "Add Product Variants", component: <AddVariant /> },
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

  useEffect(() => {
    console.log(product);
    if (product) {
      const newProduct = Object.fromEntries(
        Object.entries(product).map(([key, value]) => {
          if (key === "variants") {
            return [
              key,
              value.map((variant) => ({
                priceModifier: parseInt(variant["priceModifier"]),
                stock: parseInt(variant.stock),
                name: variant['name'],
                image: variant.image,
                sku: variant.sku,
              })),
            ];
          }
          return [key, value];
        })
      );

      setNewProduct(newProduct);
    }
  }, [product]);

  const submitHandle = () => {
    setIsSubmitted(true);
    setShowToast(true);
    dispatch(addProduct(newProduct));
    socket.emit("changesMadeToProducts", "Product Added");
    socket.emit("changesMadeToSuppliers", "Product Added");
  };

  useEffect(() => {
    if (isSubmitted && productLoading === false && productError === null) {
      setTimeout(() => onClose(), 1200);
      setIsSubmitted(false);
    }
  }, [isSubmitted, productError, productLoading]);

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
              disabled={productLoading}
              onClick={submitHandle}
              type="submit"
              className="w-96  text-white py-4 px-4 rounded-md  dark:hover:bg-d-primary-action-color bg-d-secondary-bg-color"
            >
              Save Product
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
