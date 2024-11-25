import AccordionDropDown from "./AccordianDropDown";

export default function Accordi({ toggleId, fieldsData, accordianName,toggleFunction }) {
  const toggleSection = (tid) => {
    toggleFunction(tid)
  };
  return (
    <div className="border border-lt-primary-border-color rounded-md">
      <button
        className="w-full text-left px-4 py-4 font-medium bg-white dark:bg-d-secondary-bg-color dark:text-d-primary-text-color focus:outline-none"
        onClick={() => toggleSection(toggleId)}
      >
        {accordianName}
      </button>
      <div className="px-4 py-2">
        {fieldsData.map(({ field, placeholder, type, options }) => (
          <div key={field} className="mb-4">
            <label
              className="block text-sm font-medium text-lt-primary-text-color dark:text-d-primary-text-color"
            >
              {field}
            </label>
            {type && type === "dropdown" ? (
             <AccordionDropDown options={options} field={field} />
            ) : (
              <input
                type="text"
                placeholder={placeholder}
                className="mt-1 block w-full p-2 border border-lt-primary-border-color rounded-md bg-white  dark:text-d-secondary-bg-color"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
