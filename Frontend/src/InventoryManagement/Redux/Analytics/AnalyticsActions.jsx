import {
  GET_LIVE_METRICS,
  GET_LIVE_METRICS_SUCCESS,
  GET_LIVE_METRICS_FAILURE,
  GET_DISTRIBUTION,
  GET_DISTRIBUTION_SUCCESS,
  GET_DISTRIBUTION_FAILURE,
  GET_MONTHLY_TRENDS,
  GET_MONTHLY_TRENDS_SUCCESS,
  GET_MONTHLY_TRENDS_FAILURE,
  // GET_INCOMING_STOCK_PIPELINE,
  // GET_INCOMING_STOCK_PIPELINE_SUCCESS,
  // GET_INCOMING_STOCK_PIPELINE_FAILURE,
  GET_PRODUCT_METRICS,
  GET_PRODUCT_METRICS_SUCCESS,
  GET_PRODUCT_METRICS_FAILURE,
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

const getSalesLiveMetrics = () => {
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

const getStockLiveMetrics = () => {
  return async (dispatch) => {
    dispatch({ type: GET_LIVE_METRICS });
    try {
      const response = await axios.get(
        `${url}/api/analytics/live-metrics/inventory`,
        config
      );
      dispatch({ type: GET_LIVE_METRICS_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: GET_LIVE_METRICS_FAILURE, payload: error.message });
    }
  };
};
const getDistribution = () => {
  return async (dispatch) => {
    dispatch({ type: GET_DISTRIBUTION });
    try {
      const response = await axios.get(
        `${url}/api/category/getcategories`,
        config
      );
      console.log(response.data);
      dispatch({ type: GET_DISTRIBUTION_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: GET_DISTRIBUTION_FAILURE, payload: error.message });
    }
  };
};

const getMonthlyTrendsData = () => {
  return async (dispatch) => {
    dispatch({ type: GET_MONTHLY_TRENDS });
    try {
      const response = await axios.get(
        `${url}/api/snapshots/category/snapshot`,
        config
      );
      dispatch({ type: GET_MONTHLY_TRENDS_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: GET_MONTHLY_TRENDS_FAILURE, payload: error.message });
    }
  };
};

const getProductMetrics = () => {
  return async (dispatch) => {
    dispatch({ type: GET_PRODUCT_METRICS });
    try {
      console.log("ap")
      const response = await axios.get(
        `${url}/api/analytics/live-metrics/products`,
        config
      );
      dispatch({ type: GET_PRODUCT_METRICS_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: GET_PRODUCT_METRICS_FAILURE, payload: error.message });
    }
  };
};
export {
  getSalesLiveMetrics,
  getDistribution,
  getStockLiveMetrics,
  getMonthlyTrendsData,
  getProductMetrics
};
