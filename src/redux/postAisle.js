import axios from 'axios';


const initialState = {
    newPost: {}
}


//ACTION TYPE
const NEW_POST= 'NEW_POST';
const GET_POST= 'GET_POST';


//ACTION CREATOR
export function newPost(title, image, content) {
    return {
        type: NEW_POST,
        payload: axios.post('/post', {
            title,
            image,
            content
        }).then(res => res.data)
    }
}

export function getPost(){
    
    return{
        type: GET_POST,
        payload: axios.get('/post').then(res=>res.data)
    }
}


export default function (state = initialState, action) {
    switch (action.type) {
        case `${NEW_POST}_FULFILLED`:
            return { ...state, newPost: action.payload }
        case `${GET_POST}_PENDING`:
            return state
        case `${GET_POST}_FULFILLED`:
            return{...state, newPost: action.payload}

        default:
            return initialState
    }
}