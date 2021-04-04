import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from './actionCreators';
import axios from 'axios'

export const loginRequest = (payload)=>({
    type: LOGIN_REQUEST,
    payload
})

export const loginSuccess = (payload)=>({
    type: LOGIN_SUCCESS,
    payload
})

export const loginFailure = (payload)=>({
    type: LOGIN_FAILURE,
    payload
})

export const postLogin = (payload)=>(dispatch)=>{
    console.log(payload)
    dispatch(loginRequest(payload))
    return axios.get('http://localhost:3000/users', payload)
    .then(res=>res.data)
    .then(res=>dispatch(loginSuccess(res)))
    .catch(err=>dispatch(loginFailure(err)))

}