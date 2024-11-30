import { useState } from "react";

const AddSupplier = () => {
  const formFields = [
    { field: "Supplier Name", placeholder: "Enter Supplier Name" },
    { field: "Supplier Contact", placeholder: "Enter Supplier Contact" },
    { field: "Supplier Address", placeholder: "Enter Supplier Address" },
    { field: "Supplier Id", placeholder: "Generate Supplier Id" },
];
    
  const [formData, setFormData] = useState({
    
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name,value)
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Supplier Added:", formData);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-lt-secondary-bg-color rounded-lg shadow-md border border-lt-primary-border-color">
      <h2 className="text-2xl font-bold text-d-primary-bg-color mb-6">
        Add New Supplier
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
       {formFields.map(({field,placeholder})=>{return <div key={field}>
          <label
            htmlFor="field"
            className="block text-sm font-medium text-lt-primary-text-color dark:text-d-primary-text-color"
          >
            Supplier Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="field"
            name={field}
            value={formData.field}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-lt-primary-border-color rounded-md bg-white  dark:text-d-secondary-bg-color"
            placeholder={placeholder}
            required
          />
        </div>})}
        <div className="mt-6">
          <button
            type="submit"
            className="border active:border-1-d-secondary-bg-colorbg-lt-primary-action-color dark:bg-d-primary-action-color text-white py-2 px-4 rounded-md hover:bg-lt-primary-bg-color dark:hover:bg-d-secondary-bg-color"
          >
            Add Supplier
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddSupplier;
