import axios from "axios";

//Route from the API
const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const axiosGet = (url) => axios.get(`${BASE_URL}${url}`);