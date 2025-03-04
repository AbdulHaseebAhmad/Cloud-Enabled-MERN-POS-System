import PropTypes from "prop-types";

const SingleDropdown = ({ options, onChange, field, data }) => {
  // const handleChange = (event) => {
  //   if (onChange) {
  //     onChange(event);
  //   }
  // };

  // console.log(data);

  return (
    <div className="mb-4">
      <select
        onChange={(event) => {
          onChange(event);
        }}
        className="mt-1 block w-full p-2 border border-lt-primary-border-color rounded-md bg-white dark:text-d-secondary-bg-color cursor-pointer opacity-100 font-medium"
        name={field}
      >
        <option value={data && data[field] ? data[field] : "Select an option"}>
          {data && data[field] ? data[field] : "Select an option"}
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
  //handlePassData: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};

export default SingleDropdown;
