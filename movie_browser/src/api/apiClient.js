import axios from 'axios';
import store from './../store/store.js';


const URL = 'http://localhost:8000/api/';


export const authApiClient = function() {
    const token = store.getState().token;
    const params = {
        baseURL: URL,
        headers: {'Authorization': 'Token ' + token}
    };
    return axios.create(params);
}