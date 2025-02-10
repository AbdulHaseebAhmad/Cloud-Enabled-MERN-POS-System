import ReactDOM from "react-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import {addCategory,getCategories} from "../Redux/Categories/CategoriesActions.jsx";
export default function CategoryPortal({ onClose }) {

    const [category, setCategory] = useState("");
    const dispatch = useDispatch();

    const handleSubmit = () => {
        dispatch(addCategory(category));
        dispatch(getCategories());
        onClose();
    }

  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="relative bg-d-primary-bg-color text-d-primary-text-color w-[90%] max-w-md p-6 rounded-2xl shadow-xl flex flex-col">
        <h2 className="text-2xl font-semibold mb-4 text-center">Add a Category</h2>
        <p className="text-sm text-d-secondary-text-color text-center mb-6">
          Please type in the name of the category you want to add. Category names are case-sensitive.
        </p>
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Enter category name"
          className="text-black w-full p-2 border border-d-primary-border-color rounded-lg focus:outline-none focus:ring-2 focus:ring-d-primary-action-color"
        />
        <button
          onClick={handleSubmit}
          className="mt-4 bg-d-primary-action-color text-white py-2 rounded-lg hover:bg-orange-600 transition-all"
        >
          Add Category
        </button>
        <button
          className="mt-6 text-sm text-d-secondary-text-color underline hover:text-red-700 transition text-red-500"
          onClick={onClose}
        >
          <FontAwesomeIcon icon={faXmark} className="absolute top-5 right-10 text-xl" />
        </button>
      </div>
    </div>,
    document.getElementById("portal-root")
  );
}
