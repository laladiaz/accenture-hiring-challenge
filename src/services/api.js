import axios from "axios";

//Route from the API
const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const axiosGet = (url) => axios.get(`${BASE_URL}${url}`);

export const axiosPost = (url, body) => {
    return axios.post(`${BASE_URL}${url}`, body, {
        headers:{
            'Content-type': 'application/json; charset=UTF-8',
        }

    });
}