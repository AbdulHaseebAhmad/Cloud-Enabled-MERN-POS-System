import ReactDOM from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
export default function PortalComponent({
  Component,
  togglePortal,
  nextComponent,
  pageTitle,
}) {
  const hidePortal = () => {
    togglePortal();
  };

  return ReactDOM.createPortal(
    <AnimatePresence>
      <motion.div
        layout
        key={Component}
        initial={{ opacity: 0,y:0 }}
        animate={{ opacity: 1, y:10 }}
        exit={{ opacity: 0,y:0 }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
      >
        <Component
          togglePortal={hidePortal}
          nextComponent={(Component) => nextComponent(Component)}
          pageTitle={pageTitle}
        />{" "}
      </motion.div>
    </AnimatePresence>,
    document.getElementById("portal-root")
  );
}
