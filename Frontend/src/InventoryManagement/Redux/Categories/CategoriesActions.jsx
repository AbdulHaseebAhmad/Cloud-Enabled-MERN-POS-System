import { ADDING_CATEGORY_NAME, ADDING_CATEGORY_NAME_SUCCESS, ADDING_CATEGORY_NAME_FAILURE , GETTING_CATEGORIES, GETTING_CATEGORIES_SUCCESS, GETTING_CATEGORIES_FAILURE } from './Constants';
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

const addCategory = (categoryName) => {
    return async (dispatch) => {
        dispatch({ type: ADDING_CATEGORY_NAME });
        try {
        const response = await axios.post(
            `${url}/api/category/addcategory`,
            { categoryName:categoryName },
            config
        );
        dispatch({ type: ADDING_CATEGORY_NAME_SUCCESS, payload: response.data });
        } catch (error) {
        dispatch({ type: ADDING_CATEGORY_NAME_FAILURE, payload: error.message });
        }
    };
    };

const getCategories = () => {
    return async (dispatch) => {
        dispatch({ type: GETTING_CATEGORIES });
        try {
        const response = await axios.get(`${url}/api/category/getcategories`, config);
        console.log(response.data);
        dispatch({ type: GETTING_CATEGORIES_SUCCESS, payload: response.data });
        } catch (error) {
        dispatch({ type: GETTING_CATEGORIES_FAILURE, payload: error.message });
        }
    };
}

export { addCategory, getCategories };