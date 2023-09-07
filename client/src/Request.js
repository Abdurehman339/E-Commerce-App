import axios from 'axios';

export const authReq = axios.create({
    baseURL: 'http://localhost:5000/api/auth'
});

export const addProduct = axios.create({
    baseURL: 'http://localhost:5000/api'
});
