import AddSupplier from "./AddSupplier/AddSuplier";
import ViewSuppliersTable from "./ViewSuppliers/ViewSuppliersTable";
import PortalComponent from "../Portal/PortalComponent";
import { useEffect, useState } from "react";
import { getSuppliers } from "../Redux/Supplier/SupplierActions";
import { useDispatch } from "react-redux";

const SupplierManagement = () => {
 
  const [addSupplier, setAddSupplier] = useState(false);
  const [pageTitle, setPageTitle] = useState("Add");
  const [editSupplierId, setEditSupplierId] = useState("");
  const [currentComponent, setCurrentComponent] = useState(() => {
    return AddSupplier;
  });
  const InitialView = () => {
    setCurrentComponent(() => AddSupplier);
    setAddSupplier(true);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSuppliers());
  }, []);
  return (
    <div className="p-4 sm:p-6">
      {addSupplier ? (
        <PortalComponent
          Component={currentComponent}
          togglePortal={() => {
            setAddSupplier(!addSupplier);
            setPageTitle("Add");
          }}
          nextComponent={(Component) => {
            setCurrentComponent(Component);
          }}
          pageTitle={pageTitle}
          editSupplierId={editSupplierId}
        />
      ) : (
        <>
          <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
            <h2 className="text-xl sm:text-2xl font-bold text-lt-primary-text-color dark:text-d-primary-bg-color mb-2 sm:mb-0">
              Supplier Management
            </h2>
            <button
              onClick={InitialView}
              className="bg-lt-primary-action-color dark:bg-d-primary-action-color text-white py-2 px-4 rounded-md hover:bg-lt-primary-bg-color dark:hover:bg-d-secondary-bg-color"
            >
              Add Supplier
            </button>
          </div>
          <div className="flex flex-col sm:flex-row justify-center mb-4">
            <div className="relative w-full sm:w-1/3">
              <input
                type="text"
                placeholder="Search Suppliers..."
                className="w-full p-2 pl-4 border border-lt-primary-border-color rounded-md bg-white dark:text-d-secondary-bg-color focus:outline-none"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-lt-primary-action-color dark:bg-d-primary-action-color text-white py-2 px-2 sm:px-4 rounded-md hover:bg-lt-primary-bg-color dark:hover:bg-d-secondary-bg-color">
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
          <ViewSuppliersTable
            nextComponent={(Component) => setCurrentComponent(Component)}
            togglePortal={() => {
              setAddSupplier(!addSupplier);
            }}
            setPageTitle={(title) => setPageTitle(title)}
            passEditSupplierId={(id)=>setEditSupplierId(id)}
          />
        </>
      )}
    </div>
  );
};

export default SupplierManagement;
