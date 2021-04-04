import {LOGIN_REGISTER_REQUEST, LOGIN_REGISTER_SUCCESS, LOGIN_REGISTER_FAILURE, POST_REQUEST, POST_SUCCESS, POST_FAILURE} from './actionCreators'
const initState = {
    isLoading: false,
    error: false,
}

const loginRegisterReducer = (state=initState, {type, payload})=>{
    switch (type) {
        case LOGIN_REGISTER_REQUEST:
            return{
                ...state,
                isLoading: true,
            }
        case LOGIN_REGISTER_SUCCESS:
            return{
                ...state,
                isLoading: false,
            }
        case LOGIN_REGISTER_FAILURE:{
            return{
                ...state,
                isLoading: false,
                error: true
            }
        }
       default:
            return state;
    }
}
export default loginRegisterReducer;