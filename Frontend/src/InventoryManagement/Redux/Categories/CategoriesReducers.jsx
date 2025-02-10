import { ADDING_CATEGORY_NAME, ADDING_CATEGORY_NAME_SUCCESS, ADDING_CATEGORY_NAME_FAILURE , GETTING_CATEGORIES, GETTING_CATEGORIES_SUCCESS, GETTING_CATEGORIES_FAILURE } from './Constants';

const initialState = {
    loading: false,
    data: [],
    error: '',
    message: ''
};

const CategoriesReducers = (state = initialState, action) => {
    switch (action.type) {
        case ADDING_CATEGORY_NAME:
            return {
                ...state,
                loading: true
            };
        case ADDING_CATEGORY_NAME_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                message: action.message
            };
        case ADDING_CATEGORY_NAME_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        case GETTING_CATEGORIES:
            return {
                ...state,
                loading: true
            };
        case GETTING_CATEGORIES_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload
            };
        case GETTING_CATEGORIES_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            };
            
        default:
            return state;
    }
}

export default CategoriesReducers;