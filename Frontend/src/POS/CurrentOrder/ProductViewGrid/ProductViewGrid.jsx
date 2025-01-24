import PropTypes from "prop-types";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function ProductViewGrid({ cartItems }) {
  const [currentProducts, setCurrentProducts] = useState(cartItems.slice(0, 6));
  const [currentIndex, setCurrentIndex] = useState(3);

  const handleNext = () => {
    if (currentIndex + 3 < cartItems.length) {
      setCurrentIndex(currentIndex + 3);
      setCurrentProducts(cartItems.slice(currentIndex, currentIndex + 6));
    }
  };

  const handlePrevious = () => {
    console.log(currentIndex);
    if (currentIndex - 3 >= 0) {
      setCurrentIndex(currentIndex - 3);
      setCurrentProducts(cartItems.slice(currentIndex - 3, currentIndex + 3));
    }
    console.log(currentIndex)
  };

  useEffect(()=>{
   if(currentIndex === 0){
    setCurrentProducts(cartItems.slice(0, 6));
    return;
  }
  setCurrentProducts(cartItems.slice(currentIndex-3, currentIndex+3))
   
  },[cartItems])

  useEffect(() => {}, [cartItems]);
  return (
    <main className="w-7/12 flex items-center justify-center gap-0 h-[100%] pl-6 pr-6 bg-lt-primary-bg-color">
      <button onClick={handlePrevious}>
        <FaArrowLeft className="text-blue-500 text-3xl cursor-pointer" />
      </button>
      <div
        id="cart"
        className=" flex gap-6 space-y-0 pt-4 justify-center flex-wrap"
      >
        {currentProducts.map((item) => (
          <div key={item.id} className="w-[210px] p-4 bg-white rounded shadow">
            <img
              src={item.image}
              alt={item['Product Name']}
              className="rounded mb-2 object-fit w-full h-[100px]"
            />
            <div className="text-center">
              <h2 className="font-bold text-lg">{item['Product Name']}  {item.name && <small>({ item.name})</small>}</h2>
              <p className="text-sm">SKU: {item.SKU}</p>
              <p className="text-sm">Quantity: {item.Qty}</p>
              <p className="font-bold">${item.Qty * item.Price}</p>
            </div>
          </div>
        ))}
      </div>
      <button onClick={handleNext}>
        <FaArrowRight className="text-blue-500 text-3xl cursor-pointer" />
      </button>
    </main>
  );
}

ProductViewGrid.propTypes = {
  cartItems: PropTypes.array,
};
