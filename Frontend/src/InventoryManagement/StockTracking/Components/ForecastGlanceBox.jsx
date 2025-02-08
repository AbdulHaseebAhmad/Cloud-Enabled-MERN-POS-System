import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function GlanceBox({
  dataTitle,
  dataValue,
  dataIcon,
  timeDuration,
  trendValue,
  trendDirection
}) {
  const [isIncreased] = useState(trendDirection === "up");

  return (
    <div className="relative w-full min-h-[160px] rounded-lg shadow-lg flex flex-col p-6 bg-lt-secondary-bg-color border border-lt-primary-border-color transition-all hover:scale-105 ease-in-out duration-200">
      <div className="absolute top-[0] right-0 bg-lt-primary-action-color text-white px-3 py-1 rounded-lg text-sm font-semibold">
        {timeDuration}
      </div>
      <div className="flex items-center gap-4 mb-3">
        <div className="w-12 h-12 flex justify-center items-center bg-lt-primary-bg-color rounded-full">
          <FontAwesomeIcon icon={dataIcon} className="text-xl text-lt-primary-text-color"  />
        </div>
        <h1 className="text-lg font-semibold text-lt-secondary-text-color">
          {dataTitle}
        </h1>
      </div>
      <h1 className="text-3xl font-bold text-lt-primary-text-color">{dataValue}</h1>
      {/* {trendValue && (
        <div className="flex items-center gap-2 mt-3">
          <FontAwesomeIcon
            icon={isIncreased ? faArrowUp : faArrowDown}
            className={isIncreased ? "text-green-500" : "text-red-500"}
          />
          <div className="flex items-center gap-2">
            <p className="text-sm">{trendValue}</p>
            <small className="text-lt-secondary-text-color">since last {timeDuration}</small>
          </div>
        </div>
      )} */}
    </div>
  );
}

GlanceBox.propTypes = {
  dataTitle: PropTypes.string,
  dataValue: PropTypes.any,
  dataIcon: PropTypes.object,
  timeDuration: PropTypes.string,
  trendValue: PropTypes.string,
  trendDirection: PropTypes.oneOf(["up", "down"]),
};
