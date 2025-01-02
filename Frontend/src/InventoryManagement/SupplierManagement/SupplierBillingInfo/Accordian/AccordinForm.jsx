import AccordionDropDown from "./AccordianDropDown";
import PropTypes from "prop-types";

export default function AccordionForm({
  toggleId,
  fieldsData,
  accordianName,
  toggleFunction,
  onChangeHandler,
  data,
  handlePassData,
}) {
  const toggleSection = (tid) => {
    toggleFunction(tid);
  };

  return (
    <div className="border border-lt-primary-border-color rounded-md">
      <button
        className="w-full text-left px-4 py-4 font-medium bg-white dark:bg-d-secondary-bg-color dark:text-d-primary-text-color focus:outline-none"
        onClick={() => {
          toggleSection(toggleId);
          handlePassData();
        }}
      >
        {accordianName}
      </button>
      <div className="px-4 py-2">
        {fieldsData.map(({ field, placeholder, type, options }) => (
          <div key={field} className="mb-4">
            <label
              htmlFor={field}
              className="block text-sm font-medium text-lt-primary-text-color"
            >
              {field} <span className="text-red-500">*</span>
            </label>
            {type && type === "dropdown" ? (
              <AccordionDropDown
                options={options}
                field={field}
                onChange={onChangeHandler}
                data={data && data["Payment Details"]}
              />
            ) : (
              <input
                key={field}
                type="text"
                name={field}
                onChange={onChangeHandler}
                className="font-medium mt-1 block w-full p-2 border border-lt-primary-border-color rounded-md bg-white  dark:text-d-secondary-bg-color"
                placeholder={
                  data["Payment Details"] && data["Payment Details"][field]
                    ? data["Payment Details"][field]
                    : placeholder
                }
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

AccordionForm.propTypes = {
  toggleId: PropTypes.string.isRequired,
  fieldsData: PropTypes.arrayOf(
    PropTypes.shape({
      field: PropTypes.string.isRequired,
      placeholder: PropTypes.string,
      type: PropTypes.string,
      options: PropTypes.arrayOf(PropTypes.string),
    })
  ).isRequired,
  accordianName: PropTypes.string.isRequired,
  toggleFunction: PropTypes.func.isRequired,
  onChangeHandler: PropTypes.func.isRequired,
  handlePassData: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};
