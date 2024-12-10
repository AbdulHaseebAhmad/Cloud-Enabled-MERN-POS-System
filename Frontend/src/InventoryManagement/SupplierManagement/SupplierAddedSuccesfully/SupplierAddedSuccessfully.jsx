import PropTypes from "prop-types";

export default function SupplierAddedSuccessfully({ togglePortal }) {
  const hidePortal = () => {
    togglePortal();
  };

  return (
    <div className="px-6 mt-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-lt-primary-text-color dark:text-d-primary-bg-color mb-4">
          Add Supplier
        </h2>
      </div>
      <div className="p-4 bg-lt-secondary-bg-color border-l-4 border-lt-primary-action-color text-lt-primary-text-color rounded-md font-bold max-w-full sm:max-w-lg mx-auto flex flex-col justify-center">
        <p className="mb-4 text-center sm:text-left">Supplier Added Successfully</p>
        <button
          onClick={hidePortal}
          className="bg-d-secondary-bg-color text-d-secondary-text-color py-4 px-4 rounded transition hover:bg-d-primary-action-color hover:text-d-primary-text-color w-full sm:w-auto"
        >
          Okay
        </button>
      </div>
    </div>
  );
}

SupplierAddedSuccessfully.propTypes = {
  togglePortal: PropTypes.func.isRequired,
};
