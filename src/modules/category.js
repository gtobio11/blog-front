import axios from 'axios';

const FETCH_CATEGORIES = "category/FETCH_CATEGORIES";

const initialState = {
    categories: []
};

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_CATEGORIES:
            return {
                ...state,
                categories: action.categories
            }
        default:
            return state
    }
}

export const fetchCategories = (categories) => ({
    type: FETCH_CATEGORIES,
    categories
})

export const fetchCategoriesThunk = () => dispatch => {
    return axios.get('http://localhost:8080/getCategories')
            .then(res => {
                if(res.status === 200)
                    dispatch(fetchCategories(res.data))
            })
}