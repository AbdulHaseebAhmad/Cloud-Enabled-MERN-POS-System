import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import AddProduct from "../AddProducts/AddProduct";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../Redux/Product/ProductActions";
import socket from "../../../utilities/Socket-Connection";

export default function ProductPortal({ togglePortal }) {
  const [Component, setCurrentComponent] = useState(() => AddProduct); //This is the state that holds the current Component by default it is AddProduct
  const [formData, setFormData] = useState({}); //This is the state that holds the form data for the AddProduct Component that includes the product details and the variants
  
  const dispatch = useDispatch();
  const handleSaveData = (productDetails) => {
    setFormData((prev) => ({ ...prev, ...productDetails })); // this is the handleSaveData function that is passed to the AddProduct Component to combine and save the the form data here in productportal to be sent to backend later on when the form is submitted
  };

  const saveProducts = () => {
    dispatch(addProduct(formData));
    setTimeout(()=>{
      socket.emit("changesMadeToProducts", "Product Added"); //This is the function that is called when the form is submitted to send the data to the backend
    },3000)
  };


  return ReactDOM.createPortal(
   
    <Component
      nextComponent={(nextComponent) => setCurrentComponent(nextComponent)} //this prop calls the function from child here in portal to change the component
      togglePortal={togglePortal}
      handleSaveData={handleSaveData}
      pageTitle="Add"
      savedFormData={formData}
      saveProducts={saveProducts}
    />
    ,
    document.getElementById("portal-root")
  );
}

ProductPortal.prototype = {
  togglePortal: PropTypes.func.isRequired,
};
