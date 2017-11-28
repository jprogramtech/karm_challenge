import { GET_ITEMS, CREATE_ITEM, DELETE_ITEM } from '../actions';

export default function (state = {}, action) {
    switch(action.type) {
        case GET_ITEMS:
            let newState = Object.assign({},{...state});
            action.payload.forEach((item) => {
                newState[item.id] = item
            });
            return newState;
        case DELETE_ITEM:
            let deleteState = Object.assign({},{...state});
            delete deleteState[action.payload.id];
            return deleteState;
        case CREATE_ITEM:
            let item = action.payload.data;
            let createState = Object.assign({}, state, {[item.id]:item});
            let returnState = {description:"Josh test", id: 200, name: "Josh Test", price: 15};
            return returnState;
        default:
            return state;
    }
}