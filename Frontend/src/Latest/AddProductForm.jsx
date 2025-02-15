import { Formik, Form, Field, ErrorMessage } from "formik";

export default function AddProductForm() {

  const productDetails = [
    { name: "Product Name", type: "text", placeholder: "Product Name" },
    { name: "SKU", type: "text", placeholder: "SKU" },
    { name: "Price", type: "number", placeholder: "Price" },
    { name: "Description", type: "text", placeholder: "Description" },
    { name: "Category", type: "text", placeholder: "Category" },
    { name: "Supplier", type: "text", placeholder: "Supplier" },
  ];

  const initialValues = productDetails.reduce((acc, field) => {
    acc[field.name] = "";
    return acc;
  }, {});

  return (
    <Formik
      initialValues={initialValues}
      validate={(values) => {
        const errors = {};
        productDetails.forEach(({ name }) => {
          if (!values[name] ) errors[name] = `${name} is required`;
        });
        return errors;
      }}
      validateOnChange={true}
      onSubmit={(values, { setSubmitting }) => {
        console.log("Submitted Values:", values); 
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <div className="p-0 w-full mx-auto shadow-md">
          <Form className="flex flex-col gap-2">
            {productDetails.map(({ name, type, placeholder }) => (
              <div key={name}>
                <label htmlFor={name} className="block text-sm text-lt-secondary-bg-color">
                  {name} <span className="text-red-500">*</span>
                </label>
                <Field
                  type={type}
                  name={name}
                  placeholder={placeholder}
                  className="mt-1 block w-full p-2 border border-lt-primary-border-color rounded-md bg-white text-d-secondary-bg-color font-medium"
                />
                <ErrorMessage name={name} component="div" className="text-red-500 text-sm" />
              </div>
            ))}
            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-2 bg-lt-primary-action-color dark:bg-d-primary-action-color text-white py-2 px-4 rounded-md hover:bg-lt-primary-bg-color dark:hover:bg-d-secondary-bg-color"
            >
              Submit
            </button>
          </Form>
        </div>
      )}
    </Formik>
  );
}
