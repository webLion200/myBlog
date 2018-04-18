import axios from 'axios'

const ERROR_MSG = 'ERROR_MSG';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const REGISTER_SUCCESS = 'REGISTER_SUCCESS';

const initState = {
    userName: '',
    password: '',
    email: '',
    phone: ''
};


export function userReducer(state=initState, action) {
    switch(action.type) {
        case REGISTER_SUCCESS:
            return {...state, ...action.payload.data}
        case LOGIN_SUCCESS:
            return {...state, ...action.payload.data}
        case ERROR_MSG:
            return {...state, msg: action.msg, code: action.code}
        default:
            return state;
    }
}

function errorMsg({msg, code}) {
    return {
        type: ERROR_MSG,
        msg,
        code
    }
}

function loginSuccess(data) {
    return {
        type: LOGIN_SUCCESS,
        payload: {data}
    }
}

function registerSuccess(data) {
    return {
        type: REGISTER_SUCCESS,
        payload: {data}
    }
}

export function login({userName, password}) {
    if (!userName || !password) {
        return errorMsg({msg: '用户名密码是必填项!', code: 1});
    }
    return dispatch => {
        axios.post('/user/login', {userName, password})
            .then(res => {
                console.log(res);
                dispatch(loginSuccess(res.data))
            })
    }
}

export function register({userName,password,email,phone}) {
    if(!userName || !password || !email || !phone) {
        return errorMsg('请完善必填项！')
    }
    return dispatch => {
        axios.post('/user/register', {userName,password,email,phone})
            .then(res => {
                dispatch(registerSuccess(res.data))
            })
    }
}
