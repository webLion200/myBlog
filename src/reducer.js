import { combineReducers } from 'redux'
import { blogReducer } from './redux/blog_redux'
import { userReducer } from './redux/user_redux'
export default combineReducers({ blogReducer, userReducer })