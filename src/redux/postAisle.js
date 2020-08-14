import axios from 'axios';


const initialState = {
    newPost: {}
}


//ACTION TYPE
const NEW_POST= 'NEW_POST';


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


export default function (state = initialState, action) {
    switch (action.type) {
        case `${NEW_POST}_FULFILLED`:
            return { ...state, newPost: action.payload }

        default:
            return initialState
    }
}