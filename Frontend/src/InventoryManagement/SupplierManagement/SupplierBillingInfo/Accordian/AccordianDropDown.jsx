//import  { useState } from "react";
import PropTypes from "prop-types";

const SingleDropdown = ({ options, onChange, field,data }) => {
  //const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event) => {
   // const {value} = event.target;
  //  setSelectedValue(value);
    if (onChange) {
      onChange(event); 
    }
  };

  return (
    <div className="mb-4">
      <select
        value={data[field]}
        onChange={handleChange}
        className="mt-1 block w-full p-2 border border-lt-primary-border-color rounded-md bg-white dark:text-d-secondary-bg-color cursor-pointer opacity-100 font-medium"
        name={field}
      >
        <option value="" disabled>
          {field}
        </option>
        {options.map((option, index) => (
          <option key={index} value={option}  className="cursor-pointer">
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};
SingleDropdown.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func,
  field: PropTypes.string.isRequired,
  //handlePassData: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};

export default SingleDropdown;
