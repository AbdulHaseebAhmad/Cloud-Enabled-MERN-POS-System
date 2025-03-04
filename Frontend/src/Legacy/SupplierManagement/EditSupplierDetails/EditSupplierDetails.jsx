import AddSupplier from "../AddSupplier/AddSuplier";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
export default function EditSupplierDetails({
  togglePortal,
  nextComponent,
  editSupplierId,
}) {
  const supplier = useSelector((state) =>
    state.SupplierReducer.data.filter(
      (supplier) => supplier.id === editSupplierId
    )
  );
  console.log(supplier);
  const details = [
    {
      name: supplier[0]["Supplier Name"],
      label: "Supplier Name",
      placeholder: "Enter Supplier Name",
    },
    {
      name: supplier[0]["Supplier Contact"],
      label: "Supplier Contact",
      placeholder: "Enter Supplier Contact",
    },
    {
      name: supplier[0]["Supplier Address"],
      label: "Supplier Address",
      placeholder: "Enter Supplier Address",
    },
  ];
  return (
    <AddSupplier
      togglePortal={togglePortal}
      nextComponent={nextComponent}
      pageTitle="Edit"
      data={{}}
      suppliersData={() => {}}
      supplier={details}
    />
  );
}

EditSupplierDetails.propTypes = {
  togglePortal: PropTypes.func.isRequired,
  nextComponent: PropTypes.func.isRequired,
  pageTitle: PropTypes.string.isRequired,
  editSupplierId: PropTypes.string.isRequired,
};
