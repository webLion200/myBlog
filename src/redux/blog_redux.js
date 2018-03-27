import axios from 'axios'

const BLOG_LIST = 'BLOG_LIST';

const initState = {
    blogList: []
}

export function blog(state = initState, action) {
    switch(action.type) {
        case BLOG_LIST:
            return {...state, blogList: action.payload.blogs}
        default:
            return state
    }
}


function blogList(blogs) {
    return {
        type: BLOG_LIST,
        payload: {blogs}
    }
}

export function getBlogList(page) {
    return dispatch => {
        axios.get('/blog',{
            params: {
                page: page || 1
            }
        }).then(res => {
                dispatch(blogList(res.data))
            })
    }
}