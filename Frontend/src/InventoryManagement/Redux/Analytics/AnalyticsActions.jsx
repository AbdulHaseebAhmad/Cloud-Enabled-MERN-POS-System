import {
  GET_LIVE_METRICS,
  GET_LIVE_METRICS_SUCCESS,
  GET_LIVE_METRICS_FAILURE,
//   GET_DISTRIBUTION,
//   GET_DISTRIBUTION_SUCCESS,
//   GET_DISTRIBUTION_FAILURE,
//   GET_INCOMING_STOCK_PIPELINE,
//   GET_INCOMING_STOCK_PIPELINE_SUCCESS,
//   GET_INCOMING_STOCK_PIPELINE_FAILURE,
} from "./Constants.jsx";

import axios from "axios";
import Cookies from "js-cookie";

const url = import.meta.env.VITE_APP_BACKEND_API_URL;
const token = Cookies.get("token");
const config = {
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
};

const getLiveMetrics = () => {
  return async (dispatch) => {
    dispatch({ type: GET_LIVE_METRICS });
    try {
      const response = await axios.get(
        `${url}/api/analytics/live-metrics/sales`,
        config
      );
      dispatch({ type: GET_LIVE_METRICS_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: GET_LIVE_METRICS_FAILURE, payload: error.message });
    }
  };
};


export { getLiveMetrics };
