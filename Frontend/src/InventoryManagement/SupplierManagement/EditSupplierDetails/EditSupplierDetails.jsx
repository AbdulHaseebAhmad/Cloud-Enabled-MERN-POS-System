import AddSupplier from "../AddSupplier/AddSuplier";
import PropTypes from "prop-types";

export default function EditSupplierDetails({ togglePortal, nextComponent }) {
  
  return (
    <AddSupplier togglePortal={togglePortal} nextComponent={nextComponent} pageTitle="Edit"/>
  )
}

EditSupplierDetails.propTypes = {
  togglePortal: PropTypes.func.isRequired,
  nextComponent: PropTypes.func.isRequired,
  pageTitle: PropTypes.string.isRequired,
};