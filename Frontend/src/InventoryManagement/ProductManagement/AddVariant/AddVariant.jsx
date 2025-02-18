import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { setVariants } from "../../../InventoryManagement/Redux/Product/ProductActions";

export default function AddVariant() {
  const dispatch = useDispatch();
  const variantsDetails = useSelector((state) => state.ProductReducer.productDetails.variants);

  const variantTemplate = {
    name:{
      placeHolder: "Variant Name",
      value: ""
    },
    sku:{
      placeHolder: "SKU",
      value: ""
    },
    priceModifier:{
      placeHolder:"Price Modifier",
      value: 0,},
    stock:{
      placeHolder:"Stock",
      value: 0,
    },
    image:{
      placeHolder:"Image",
      value: "",}
  };

  const [variants, setVariantsState] = useState([variantTemplate]);


  useEffect(() => {
    if (variantsDetails.length > 0) {
      setVariantsState(variantsDetails);
    }
  }, [variantsDetails]);

    const handleChange = (index, key, value) => {
      const updatedVariants = variants.map((variant, i) =>
        i === index ? { ...variant, [key]: value } : variant
      );
     // updatedVariants[index][key] = value;
      setVariantsState(updatedVariants);
      dispatch(setVariants(updatedVariants));
    };

  const addVariant = () => {
    setVariantsState([...variants, { ...variantTemplate }]);
  };

  const removeVariant = (index) => {
    const updatedVariants = variants.filter((_, i) => i !== index);
    setVariantsState(updatedVariants);
    dispatch(setVariants(updatedVariants));
  };

  return (
    <div className="w-full overflow-y-scroll max-h-96 scrollbar-hide">
      {variants.map((variant, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 1, type: "tween" }}
          className="p-4 w-full"
        >
          <h3 className="text-lg font-semibold mb-4 text-white">
            Variant {index + 1}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(variantTemplate).map(([key,{placeHolder,value}]) => (
              <div key={key}>
                <label className="block text-sm text-lt-secondary-bg-color">
                  {placeHolder} <span className="text-red-500">*</span>
                </label>
                <input
                  type={
                    key === "Price Modifier" || key === "Stock"
                      ? "number"
                      : key === "Image"
                      ? "file"
                      : "text"
                  }
                  name={key}
                  value={key === "Image" ? undefined : typeof(variant[key]) === 'object' ? value : variant[key]}
                  onChange={(e) => handleChange(index, key, e.target.value)}
                  className="mt-1 block w-full p-3 border border-lt-primary-border-color rounded-md bg-white text-d-secondary-bg-color font-medium"
                />
              </div>
            ))}
          </div>

          {index !== 0 && (
            <button
              type="button"
              className="mt-4 bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600"
              onClick={() => removeVariant(index)}
            >
              Remove Variant
            </button>
          )}

          {index === variants.length - 1 && (
            <button
              type="button"
              className="mt-4 ml-2 bg-lt-primary-action-color text-white py-2 px-4 rounded-md"
              onClick={addVariant}
            >
              Add Another Variant
            </button>
          )}
        </motion.div>
      ))}
    </div>
  );
}
