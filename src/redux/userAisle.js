import axios from 'axios';


const initialState={
    user:{}
}
//ACTION TYPE
const LOGIN_USER = 'LOGIN_USER';
const LOGOUT_USER= 'LOGOUT_USER';
const REGISTER_USER = 'REGISTER_USER'

//ACTION CREATOR
export function loginUser(username, password){
    return{
        type:LOGIN_USER,
        payload:axios.post('/auth/login', {
            username,
            password
        }).then(res=>res.data)
    }
}
export function logOut(){
    return{
        type: LOGOUT_USER,
        payload:initialState
    }
}

export function registerUser(username, password, profile_pic){
    console.log('username, password, profile_pic', username, password, profile_pic)
    return{
        type: REGISTER_USER,
        payload: axios.post('/auth/register', {
            username,
            password,
            profile_pic
        }).then(res=>res.data)
    }
}

export default function(state=initialState, action){
    switch(action.type){
        case `${LOGIN_USER}_FULFILLED`:
            return {...state, user: action.payload}
        case `${LOGOUT_USER}_FULFILLED`:
            return {...state, ...action.payload}
        case `${REGISTER_USER}_FULFILLED`:
            return {...state, user: action.payload}

        default:
            return initialState
    }
}