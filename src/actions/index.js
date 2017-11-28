import axios from 'axios';

export const GET_ITEM = 'get_item';
export const GET_ITEMS = 'get_items';
export const CREATE_ITEM = 'create_item';
export const DELETE_ITEM = 'delete_item';
export const GET_FAILED = 'get_failed';
export const CREATE_FAILED = 'create_failed';

const ROOT_URL = 'http://127.0.0.1:5000/item';

export function createItem(item, callback) {

    return dispatch => {
        axios.post(`${ROOT_URL}`, item)
        .then((request) => {
            callback();
            dispatch(createItemAsync(request.data));
        }).catch(error => {
        });
    }
}

function createItemAsync(item) {
    return {
        type: CREATE_ITEM,
        payload: item
    }
}

export function getItems() {

    return dispatch => {
        axios.get(`${ROOT_URL}`)
        .then(items =>{
            dispatch(getItmesAsync(items.data));
        }).catch(error => {
        });
    }
}

function getItmesAsync(items) {
    return{
        type: GET_ITEMS,
        payload: items
    }
}

export function getItem(id) {
    const request = axios.get(`${ROOT_URL}/${id}`);
    return {
        type: GET_ITEM,
        payload: request
    };
}

export function deleteItem(id, callback) {
    return dispatch =>{
        axios.delete(`${ROOT_URL}/${id}`)
            .then(item => {
                dispatch(deleteItemAsync(item.data));
            }).catch(error => {
        });
    }
}

function deleteItemAsync(item){
    return {
        type: DELETE_ITEM,
        payload :item
    };
}