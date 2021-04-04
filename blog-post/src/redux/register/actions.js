import { LOGIN_REGISTER_FAILURE, LOGIN_REGISTER_REQUEST, LOGIN_REGISTER_SUCCESS } from './actionCreators';
import axios from 'axios'

export const registerRequest = (payload)=>({
    type: LOGIN_REGISTER_REQUEST,
    payload
})

export const registerSuccess = (payload)=>({
    type: LOGIN_REGISTER_SUCCESS,
    payload
})

export const registerFailure = (payload)=>({
    type: LOGIN_REGISTER_FAILURE,
    payload
})

export const postRegister = (payload)=>(dispatch)=>{
    console.log(payload)
    dispatch(registerRequest(payload))
    return axios.post('http://localhost:3000/users', payload)
    .then(res=>res.data)
    .then(res=>dispatch(registerSuccess(res)))
    .catch(err=>dispatch(registerFailure(err)))

}