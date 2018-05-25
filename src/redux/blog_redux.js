import axios from 'axios'

const BLOG_NEW = 'BLOG_NEW';
const BLOG_LIST = 'BLOG_LIST';
const BLOG_DETAIL = 'BLOG_DETAIL';
const initState = {
    blogList: [],
    blogDetail: ''
};

export function blogReducer(state = initState, action) {
    switch (action.type) {
        case BLOG_NEW:
            return {...state, ...action.payload};
        case BLOG_LIST:
            return {...state, blogList: action.payload.blogs};
        case BLOG_DETAIL:
            return {...state, blogDetail: action.payload.detail}
        default:
            return state
    }
}

function newBlog(blog) {
    return {
        type: BLOG_NEW,
        payload: blog
    }
}

function blogDetail(detail) {
    return {
        type: BLOG_DETAIL,
        payload: {detail}
    }
}

function blogList(blogs) {
    return {
        type: BLOG_LIST,
        payload: {blogs}
    }
}

export function getNewBlog(title, content) {
    return dispatch => {
        axios.post('/addBlog', {
            title,
            content
        }).then(res => {
            dispatch(newBlog(res.data));
        })
    }
}

export function getBlogList(page) {
    return dispatch => {
        axios.get('/blogList', {
            params: {
                page: page || 1
            }
        }).then(res => {
            dispatch(blogList(res.data))
        })
    }
}

export function getBlogDetail(id) {
    return dispatch => {
        axios.get('/blogDetail', {
            params: {
                blog_id: id
            }
        }).then(res=> {
            dispatch(blogDetail(res.data))
        })
    }
}

export function userAction(id, type) {
    return dispatch => {
        axios.get('/blogDetail', {
            params: {
                blog_id: id,
                action: type
            }
        }).then(res => {
            dispatch(blogDetail(res.data));
        })
    }
}
