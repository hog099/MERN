import axios from 'axios';

const api =  axios.create({
    baseURL: process.env.API_ENV,
    headers:{
        'Content-type': 'application/json',
        'Accept': 'application/json'
      }
});

export default api;