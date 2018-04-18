import { combineReducers } from 'redux'
import { blog } from './redux/blog_redux'
import { userReducer } from './redux/user_redux'
export default combineReducers({ blog, userReducer })