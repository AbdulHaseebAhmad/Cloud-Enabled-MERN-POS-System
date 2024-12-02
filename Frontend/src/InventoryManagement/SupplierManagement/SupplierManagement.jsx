import AddSupplier from "./AddSupplier/AddSuplier";
import ViewSuppliersTable from "./ViewSuppliers/ViewSuppliersTable";
import PortalExample from "../Portal/PortalComponent";
import { useState } from "react";

const SupplierManagement = () => {
  const suppliers = [
    {
      name: "Supplier X",
      contact: "123-456-7890",
      address: "123",
      productsInStock: 50,
      productsOrdered: 20,
    },
    {
      name: "Supplier Y",
      contact: "987-654-3210",
      address: "123",
      productsInStock: 50,
      productsOrdered: 20,
    },
  ];
  const [addSupplier, setAddSupplier] = useState(false);
  const [currentComponent, setCurrentComponent] = useState(() => {
    return AddSupplier;
  });
  return (
    <div className="p-6">
      {addSupplier ? (
        <PortalExample
          Component={currentComponent}
          togglePortal={() => {
            setAddSupplier(!addSupplier);
          }}
          nextComponent={(Component) => {
            setCurrentComponent(Component);
          }}
        />
      ) : (
        <>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-lt-primary-text-color dark:text-d-primary-bg-color">
              Supplier Management
            </h2>
            <button
              onClick={() => setAddSupplier(true)}
              className="bg-lt-primary-action-color dark:bg-d-primary-action-color text-white py-2 px-4 rounded-md hover:bg-lt-primary-bg-color dark:hover:bg-d-secondary-bg-color"
            >
              Add Supplier
            </button>
          </div>

          <div className="flex justify-center mb-4">
            <div className="relative w-1/3">
              <input
                type="text"
                placeholder="Search Suppliers..."
                className="w-full p-2 pl-4 border border-lt-primary-border-color rounded-md bg-white dark:text-d-secondary-bg-color focus:outline-none"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-lt-primary-action-color dark:bg-d-primary-action-color text-white py-2 px-4 rounded-md hover:bg-lt-primary-bg-color dark:hover:bg-d-secondary-bg-color">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M11 2a9 9 0 1 0 6.33 15.59l4.67 4.67a1 1 0 0 0 1.41-1.42l-4.67-4.67A9 9 0 0 0 11 2zM11 16a7 7 0 1 1 0-14 7 7 0 0 1 0 14z" />
                </svg>
              </button>
            </div>
          </div>
          <ViewSuppliersTable suppliers={suppliers} />
        </>
      )}
    </div>
  );
};

export default SupplierManagement;
