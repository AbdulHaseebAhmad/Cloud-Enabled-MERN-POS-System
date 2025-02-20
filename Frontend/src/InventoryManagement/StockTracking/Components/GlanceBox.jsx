import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function GlanceBox({
  dataTitle,
  dataValue,
  dataIcon,
  timeDuration,
}) {
  const [isIncreased] = useState("false");

  return (
    <div className="relative w-full min-h-[120px] rounded-lg shadow-md flex flex-col p-4 bg-lt-secondary-bg-color border border-lt-primary-border-color">
      <div className="absolute top-0 right-0 bg-lt-primary-action-color text-white px-2 py-1 rounded-br-lg rounded-tl-lg text-xs font-bold">
        {dataTitle !== "Total Inv. Value" && dataTitle !== "Avg Product Price" && dataTitle !== "Out-of-Stock" && dataTitle !== "Total Products" ? timeDuration : "Today"}
      </div>
      <div className="flex items-center gap-2 mb-2">
        <div className="w-10 h-10 flex justify-center items-center">
          <FontAwesomeIcon icon={dataIcon} />
        </div>
        <h1 className="text-lg font-bold text-lt-secondary-text-color">
          {dataTitle}{" "}
        </h1>
      </div>
      <h1 className="text-xl font-bold text-lt-primary-text-color">
        {dataValue}
      </h1>
      <div className="flex items-center gap-2 mt-2">
        <FontAwesomeIcon
          icon={isIncreased ? faArrowUp : faArrowDown}
          className={isIncreased ? "text-green-500" : "text-red-500"}
        />
        <div className="flex items-center gap-2">
          <p> +$1,200 </p>
          <small className="text-lt-secondary-text-color">
            since last month
          </small>
        </div>
      </div>
    </div>
  );
}

GlanceBox.propTypes = {
  dataTitle: PropTypes.string,
  dataValue: PropTypes.any,
  dataIcon: PropTypes.object,
  timeDuration: PropTypes.string,
};
