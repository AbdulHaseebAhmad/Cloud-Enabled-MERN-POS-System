import PropTypes from "prop-types";
import { motion } from "framer-motion";

const Alert = ({ alertType, message }) => {
  const alertStyles = {
    lowStock: "bg-yellow-500 text-black",
    lowStockOrderPlaced: "bg-blue-500 text-white",
    lowStockOrderPending: "bg-orange-500 text-white",
    recentlyStocked: "bg-green-500 text-white",
  };
 
  return (
    <motion.div
    initial={{ scale: 0, skewX: -180, skewY: -45, y: 0 }}
    animate={{
      scale: 1,
      skewX: 0,
      skewY: 0,
      y: 10,  // For initial animation
    }}
    transition={{ duration: 0.3 }}
    className={`p-4 mb-4 rounded-md shadow-md ${alertStyles[alertType]} font-medium flex-shrink-0 w-full sm:w-2/3 md:w-2/4 lg:w-1/6 text-center h-32`}
   >
      <p>{message}</p>
    </motion.div>
  );
};

Alert.propTypes = {
  alertType: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default Alert;
