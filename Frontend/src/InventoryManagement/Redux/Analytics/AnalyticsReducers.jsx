import {
    GET_LIVE_METRICS,
    GET_LIVE_METRICS_SUCCESS,
    GET_LIVE_METRICS_FAILURE,
    GET_DISTRIBUTION,
    GET_DISTRIBUTION_SUCCESS,
    GET_DISTRIBUTION_FAILURE,
    GET_INCOMING_STOCK_PIPELINE,
    GET_INCOMING_STOCK_PIPELINE_SUCCESS,
    GET_INCOMING_STOCK_PIPELINE_FAILURE,
    GET_MONTHLY_TRENDS,
    GET_MONTHLY_TRENDS_SUCCESS,
    GET_MONTHLY_TRENDS_FAILURE,
    GET_PRODUCT_METRICS,
  GET_PRODUCT_METRICS_SUCCESS,
  GET_PRODUCT_METRICS_FAILURE,
} from "./Constants.jsx";


const initialStatus = {
    liveMetricsLoading: false,
    liveMetricsData: [],
    liveMetricsError: null,
    liveMetricsMessage: "",

    distributionData: [],
    distributionLoading: false,
    distributionError: null,
    distributionMessage: "",

    MonthlyTrendsData: [],
    MonthlyTrendsLoading: false,
    MonthlyTrendsError: null,
    MonthlyTrendsMessage: "",

    inComingStockPipelineData: [],
    inComingStockPipelineLoading: false,
    inComingStockPipelineError: null,
    inComingStockPipelineMessage: "",
};



const analyticsReducer = (state = initialStatus, action) => {
    switch (action.type) {
        case GET_LIVE_METRICS:
            return {
                ...state,
                liveMetricsLoading: true,
                liveMetricsMessage: GET_LIVE_METRICS,
            };
        case GET_LIVE_METRICS_SUCCESS:
            return {
                ...state,
                liveMetricsLoading: false,
                liveMetricsData: action.payload,
                liveMetricsError: null,
                liveMetricsMessage: GET_LIVE_METRICS_SUCCESS,
            };
        case GET_LIVE_METRICS_FAILURE:
            return {
                ...state,
                liveMetricsLoading: false,
                liveMetricsData: [],
                liveMetricsError: action.payload,
                liveMetricsMessage: GET_LIVE_METRICS_FAILURE,
            };
        case GET_DISTRIBUTION:
            return {
                ...state,
                distributionLoading: true,
                distributionMessage: GET_DISTRIBUTION,
            };
        case GET_DISTRIBUTION_SUCCESS:
            return {
                ...state,
                distributionLoading: false,
                distributionData: action.payload,
                distributionError: null,
                distributionMessage: GET_DISTRIBUTION_SUCCESS,
            };
        case GET_DISTRIBUTION_FAILURE:
            return {
                ...state,
                distributionLoading: false,
                distributionData: [],
                distributionError: action.payload,
                distributionMessage: GET_DISTRIBUTION_FAILURE,
            };
        case GET_MONTHLY_TRENDS:
            return {
                ...state,
                MonthlyTrendsLoading: true,
                MonthlyTrendsMessage: GET_MONTHLY_TRENDS,
            };
        case GET_MONTHLY_TRENDS_SUCCESS:
            return {
                ...state,
                MonthlyTrendsLoading: false,
                MonthlyTrendsData: action.payload,
                MonthlyTrendsError: null,
                MonthlyTrendsMessage: GET_MONTHLY_TRENDS_SUCCESS,
            };
        case GET_MONTHLY_TRENDS_FAILURE:
            return {
                ...state,
                MonthlyTrendsLoading: false,
                MonthlyTrendsData: [],
                MonthlyTrendsError: action.payload,
                MonthlyTrendsMessage: GET_MONTHLY_TRENDS_FAILURE,
            };

        case GET_INCOMING_STOCK_PIPELINE:
            return {
                ...state,
                inComingStockPipelineLoading: true,
                inComingStockPipelineMessage: GET_INCOMING_STOCK_PIPELINE,
            };
        case GET_INCOMING_STOCK_PIPELINE_SUCCESS:
            return {
                ...state,
                inComingStockPipelineLoading: false,
                inComingStockPipelineData: action.payload,
                inComingStockPipelineError: null,
                inComingStockPipelineMessage: GET_INCOMING_STOCK_PIPELINE_SUCCESS,
            };
        case GET_INCOMING_STOCK_PIPELINE_FAILURE:
            return {
                ...state,
                inComingStockPipelineLoading: false,
                inComingStockPipelineData: [],
                inComingStockPipelineError: action.payload,
                inComingStockPipelineMessage: GET_INCOMING_STOCK_PIPELINE_FAILURE,
            };
        case GET_PRODUCT_METRICS:
            return {
                ...state,
                liveMetricsLoading: true,
                liveMetricsMessage: GET_PRODUCT_METRICS,
            };
        case GET_PRODUCT_METRICS_SUCCESS:
            return {
                ...state,
                liveMetricsLoading: false,
                liveMetricsData: action.payload,
                liveMetricsError: null,
                liveMetricsMessage: GET_PRODUCT_METRICS_SUCCESS,
            };
        case GET_PRODUCT_METRICS_FAILURE:
            return {
                ...state,
                liveMetricsLoading: false,
                liveMetricsData: [],
                liveMetricsError: action.payload,
                liveMetricsMessage: GET_PRODUCT_METRICS_FAILURE,
            };
        default:
            return state;
    }
};

export default analyticsReducer;