import  { useState } from "react";
import PropTypes from "prop-types";

const SingleDropdown = ({ options, onChange, field }) => {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event) => {
    const value = event.target.value;
    setSelectedValue(value);
    if (onChange) {
      onChange(value); 
    }
  };

  return (
    <div className="mb-4">
      <select
        value={selectedValue}
        onChange={handleChange}
        className="mt-1 block w-full p-2 border border-lt-primary-border-color rounded-md bg-white dark:text-d-secondary-bg-color cursor-pointer opacity-100 font-medium"
      >
        <option value="" disabled>
          {field}
        </option>
        {options.map((option, index) => (
          <option key={index} value={option} className="cursor-pointer">
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
};

export default SingleDropdown;
