
import {getRedirectPath} from '../util-src'
import axios from 'axios'

const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
const ERROR_MSG = 'ERROR_MSG'
const LOGIN_SUCCESS = 'LOGIN_SUCCESS'

const initState = {
  redirectTo:'',
  isAuth: false,
  msg: '',
  user: '',
  pwd: '',
  type: ''
}

export function login({user,pwd}){
  if(!user||!pwd){
    return errorMsg('用户名密码必须输入')
  }
  return dispatch => {
    axios.post('./user/login', { user, pwd})
      .then(res => {
        if (res.status === 200 && res.date.code === 0) {
          // dispatch(registerSuccess({ user, pwd, type }))
          dispatch(loginSuccess(res.data.data))
        } else {
          dispatch(errorMsg(res.data.msg))
        }
      })
  }
}

//reducer
export function user(state = initState, action) {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return { ...state, msg: '', redirectTo:getRedirectPath(action.payload),isAuth: true, ...action.payload }
    case LOGIN_SUCCESS:
      return { ...state, msg: '', redirectTo:getRedirectPath(action.payload),isAuth: true, ...action.payload }
    case ERROR_MSG:
      return { ...state, isAuth: false, msg: action.msg }
    default:
      return state
  }
}

function registerSuccess(data) {
  return { type: REGISTER_SUCCESS, payload: data }
}

function loginSuccess(data){
   return {type: LOGIN_SUCCESS, payload:data}
}

function errorMsg(msg) {
  return { msg, type: ERROR_MSG }
}

export function register({ user, pwd, repeatpwd,type }) {
  if (!user || !pwd || !type) {
    return errorMsg('用户名密码必须输入')
  }
  if (pwd !== repeatpwd) {
    return errorMsg('密码和确认密码不同')
  }
  return dispatch => {
    axios.post('./user/register', { user, pwd, type })
      .then(res => {
        if (res.status === 200 && res.date.code === 0) {
          dispatch(registerSuccess({ user, pwd, type }))
        } else {
          dispatch(errorMsg(res.data.msg))
        }
      })
  }
}