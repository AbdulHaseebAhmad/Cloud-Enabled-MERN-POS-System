import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { setProduct } from "../../../InventoryManagement/Redux/Product/ProductActions"

export default function AddProductForm() {
  const productDetails = useSelector((state) => state.ProductReducer.productDetails);

  
  const dispatch = useDispatch();
  const productTemplate = {
    "Product Name": {
      name: "Product Name",
      type: "text",
      placeholder: "Product Name",
    },
    SKU: { name: "SKU", type: "text", placeholder: "SKU" },
    Price: { name: "Price", type: "number", placeholder: "Price" },
    Description: { name: "Description", type: "text", placeholder: "Description" },
    Category: { name: "Category", type: "text", placeholder: "Category" },
    Supplier: { name: "Supplier", type: "text", placeholder: "Supplier" },
  };

  
  const [product, setProductState] = useState(
    Object.entries(productTemplate).reduce((acc, [key]) => {
      acc[key] = productDetails?.[key] || "";
      return acc;
    }, {})
  );

  useEffect(() => {
    dispatch(setProduct(product));
  }, [product, dispatch]);

  const handleChange = (key, value) => {
    setProductState((prev) => ({ ...prev, [key]: key === 'Price' ? parseInt(value) : value }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 1, type: "tween" }}
      className="w-full"
    >
      <div className="p-0 w-full mx-auto shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto p-4">
          {Object.entries(productTemplate).map(([key, value]) => (
            <div key={key}>
              <label className="block text-sm text-lt-secondary-bg-color">
                {value.name} <span className="text-red-500">*</span>
              </label>
              <input
                type={value.type}
                value={product[key]}
                placeholder={value.placeholder}
                className="mt-1 block w-full p-4 border border-lt-primary-border-color rounded-md bg-white text-d-secondary-bg-color font-medium"
                onChange={(e) => handleChange(key, e.target.value)}
              />
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
