import { GET_POST_DATA_FAILURE, GET_POST_DATA_REQUEST, GET_POST_DATA_SUCCESS } from './actionTypes';
import axios from 'axios'

export const getPostRequest = (payload)=>({
    type: GET_POST_DATA_REQUEST,
    payload
})

export const getPostSuccess = (payload)=>({
    type: GET_POST_DATA_SUCCESS,
    payload
})

export const getPostFailure = (payload)=>({
    type: GET_POST_DATA_FAILURE,
    payload
})

export const getAllPosts = (payload)=>(dispatch)=>{
    console.log(payload)
    dispatch(getPostRequest(payload))
    return axios.get('http://localhost:3000/posts')
    .then(res=>res.data)
    .then(res=>dispatch(getPostSuccess({data:res})))
    .catch(err=>dispatch(getPostFailure(err)))

}