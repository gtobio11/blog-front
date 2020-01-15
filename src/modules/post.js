import axios from 'axios';

const FETCH_POSTS = "post/FETCH_POSTS";

const initialState = {
    posts: []
};

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_POSTS:
            return {
                ...state,
                posts: action.posts
            }
        default:
            return state
    }
}

export const fetchPosts = (posts) => ({
    type: FETCH_POSTS,
    posts
})

export const fetchPostsByCategoryThunk = (category) => dispatch => {
    return axios.get(`http://localhost:8080/getPosts/${category}`)
            .then(res => {
                if(res.status === 200)
                    dispatch(fetchPosts(res.data))
            })
}